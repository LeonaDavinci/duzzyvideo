import { useCases } from "@/lib/data";
import styles from "./UseCases.module.css";

export default function UseCases() {
  return (
    <section
      className="section tightest"
      id="use-cases"
      style={{ background: "var(--bg-elev)" }}
    >
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Use cases</span>
          <h2 className="section-title">
            What will you <span className="gold">direct first?</span>
          </h2>
          <p className="section-sub">
            From festival shorts to social spots, the same canvas powers every
            kind of moving image.
          </p>
        </div>
        <div className={styles.grid}>
          {useCases.map((u) => (
            <div key={u.title} className={styles.card}>
              <span className={styles.icon}>{u.icon}</span>
              <h3 className={styles.title}>{u.title}</h3>
              <p className={styles.desc}>{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
