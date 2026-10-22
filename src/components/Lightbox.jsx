import { useEffect } from "react";

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className="lightbox-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
          <ion-icon name="close"></ion-icon>
        </button>
        <h4 className="lightbox-title">{item.title}</h4>
        {item.desc ? <p className="lightbox-desc">{item.desc}</p> : null}
        <img className="lightbox-img" src={item.src} alt={item.alt} />
      </div>
    </div>
  );
}
