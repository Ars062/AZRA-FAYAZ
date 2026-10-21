import { useEffect, useRef } from "react";
import * as THREE from "three";

function Globe3D({ variant = "hero" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      200
    );
    const isHero = variant === "hero";
    camera.position.z = isHero ? 30 : 40;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const radius = isHero ? 9 : 12;
    const berry = new THREE.Color("#a6265a");
    const rose = new THREE.Color("#f0a6c0");
    const amber = new THREE.Color("#ffb35c");

    const nodeCount = reduceMotion ? 90 : 190;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);
    const dirs = [];

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);

      nodePositions[i * 3] = x * radius;
      nodePositions[i * 3 + 1] = y * radius;
      nodePositions[i * 3 + 2] = z * radius;
      dirs.push(new THREE.Vector3(x, y, z));

      const pick = Math.random();
      const c = pick < 0.55 ? berry : pick < 0.85 ? rose : amber;
      nodeColors[i * 3] = c.r;
      nodeColors[i * 3 + 1] = c.g;
      nodeColors[i * 3 + 2] = c.b;
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    nodeGeo.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

    const sprite = (() => {
      const size = 64;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.4, "rgba(255,255,255,0.55)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
      return new THREE.CanvasTexture(canvas);
    })();

    const nodeMat = new THREE.PointsMaterial({
      size: isHero ? 0.85 : 0.7,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const nodes = new THREE.Points(nodeGeo, nodeMat);
    group.add(nodes);

    const arcMat = new THREE.LineBasicMaterial({
      color: 0xf0a6c0,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });

    const arcCount = reduceMotion ? 20 : 46;
    const arcs = [];
    for (let a = 0; a < arcCount; a++) {
      const i = Math.floor(Math.random() * nodeCount);
      const j = Math.floor(Math.random() * nodeCount);
      if (i === j) continue;
      const p1 = dirs[i].clone().multiplyScalar(radius);
      const p2 = dirs[j].clone().multiplyScalar(radius);
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const dist = p1.distanceTo(p2);
      const out = mid.clone().normalize().multiplyScalar(dist * 0.55);
      mid.add(out);
      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      const pts = curve.getPoints(28);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const line = new THREE.Line(geo, arcMat);
      arcMat.needsUpdate = true;
      group.add(line);
      arcs.push(geo);
    }

    const shellMat = new THREE.MeshBasicMaterial({
      color: 0xa6265a,
      transparent: true,
      opacity: 0.04,
      wireframe: true,
    });
    const shellGeo = new THREE.SphereGeometry(radius, 18, 14);
    const shell = new THREE.Mesh(shellGeo, shellMat);
    group.add(shell);

    group.rotation.z = 0.18;

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointerMove);

    const scrollState = { progress: 0, current: 0 };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollState.progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      const t = clock.getElapsedTime();
      const isPage = !isHero;

      if (!reduceMotion) {
        target.x += (pointer.x - target.x) * 0.03;
        target.y += (pointer.y - target.y) * 0.03;
        scrollState.current += (scrollState.progress - scrollState.current) * 0.06;

        const spin = isPage ? t * 0.16 + scrollState.current * Math.PI * 1.4 : t * 0.12;
        group.rotation.y = spin + target.x * 0.5;
        group.rotation.x =
          Math.sin(t * 0.2) * 0.08 - target.y * 0.3 + (isPage ? scrollState.current * 0.5 : 0);

        if (isPage) {
          camera.position.z = radius * 2.4 + scrollState.current * 10;
          camera.position.y = -target.y * 2.2 - scrollState.current * 4;
          group.position.y = -scrollState.current * 3;
        }

        camera.position.x = target.x * 3;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frameId);
      else {
        clock.start();
        animate();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      nodeGeo.dispose();
      nodeMat.dispose();
      sprite.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      arcs.forEach((g) => g.dispose());
      arcMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return <div className={`globe-3d globe-3d--${variant}`} ref={mountRef} aria-hidden="true" />;
}

export default Globe3D;
