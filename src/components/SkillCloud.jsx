import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SkillCloud({ categories, skills }) {
  const [activeCat, setActiveCat] = useState("all");
  const [selected, setSelected] = useState(null);

  const catById = useMemo(() => {
    const m = {};
    categories.forEach((c) => (m[c.id] = c));
    return m;
  }, [categories]);

  const visible = useMemo(
    () => (activeCat === "all" ? skills : skills.filter((s) => s.cat === activeCat)),
    [skills, activeCat]
  );

  const pick = (skill) => {
    setSelected((prev) => (prev && prev.id === skill.id ? null : skill));
  };

  return (
    <div className="cloud">
      <div className="cloud-head">
        <p className="cloud-subtitle">
          Click a skill for context. Filter by discipline to focus the set.
        </p>
        <div className="cloud-filters" role="tablist" aria-label="Skill categories">
          <button
            type="button"
            className={`cloud-pill ${activeCat === "all" ? "is-active" : ""}`}
            onClick={() => {
              setActiveCat("all");
              setSelected(null);
            }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`cloud-pill ${activeCat === cat.id ? "is-active" : ""}`}
              style={{ "--c": cat.color }}
              onClick={() => {
                setActiveCat((prev) => (prev === cat.id ? "all" : cat.id));
                setSelected(null);
              }}
            >
              <span className="cloud-pill-dot" style={{ background: cat.color }} />
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="cloud-chips">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((skill, i) => {
            const c = catById[skill.cat];
            const isSel = selected && selected.id === skill.id;
            return (
              <motion.button
                key={skill.id}
                type="button"
                layout
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ delay: Math.min(i * 0.015, 0.3), type: "spring", stiffness: 320, damping: 26 }}
                className={`cloud-chip ${isSel ? "is-selected" : ""}`}
                style={{ "--c": c ? c.color : "#a6265a" }}
                onClick={() => pick(skill)}
                aria-pressed={isSel}
              >
                <span className="cloud-chip-dot" style={{ background: c ? c.color : "#a6265a" }} />
                {skill.name}
                {skill.endorsements ? (
                  <span className="cloud-chip-count">{skill.endorsements}</span>
                ) : null}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {selected && (
          <motion.div
            key={selected.id}
            className="cloud-detail"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            style={{ "--c": catById[selected.cat] ? catById[selected.cat].color : "#a6265a" }}
          >
            <span className="cloud-detail-cat">
              {catById[selected.cat] ? catById[selected.cat].label : "Skill"}
            </span>
            <h4 className="cloud-detail-name">{selected.name}</h4>
            <p className="cloud-detail-desc">{selected.description}</p>
            {selected.context && <p className="cloud-detail-context">{selected.context}</p>}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="cloud-hint">
        {selected ? "Click the chip again to close." : "Pick a chip to read more."}
      </p>
    </div>
  );
}
