import { testimonials } from "@/lib/data";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials" style={{ background: "var(--bg-elev)" }}>
      <div className="container">
        <span className="eyebrow">Loved by creators</span>
        <h2 className="section-title">
          Directors are <span className="gold">shipping faster</span>
        </h2>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure key={t.name} className={styles.card}>
              <blockquote className={styles.quote}>
                <span className={styles.mark}>“</span>
                {t.quote}
              </blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar}>{t.name.charAt(0)}</span>
                <span>
                  <strong>{t.name}</strong>
                  <em>{t.role}</em>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
