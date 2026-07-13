import { models } from "@/lib/data";
import styles from "./ModelGrid.module.css";

export default function ModelGrid() {
  return (
    <section className="section" id="models">
      <div className="container">
        <span className="eyebrow">Create with the latest model</span>
        <h2 className="section-title">
          Create with the latest models, <span className="gold">one studio for all</span>
        </h2>
        <p className="section-sub">
          No more jumping between apps. The leading video and image models live
          in one place so you can pick the perfect engine for every shot.
        </p>

        <div className={styles.grid}>
          {models.map((m) => (
            <div
              key={m.name}
              className={`${styles.card} ${m.featured ? styles.featured : ""}`}
            >
              {m.featured && <span className={styles.badge}>Flagship</span>}
              <div className={styles.dot} />
              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.desc}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
