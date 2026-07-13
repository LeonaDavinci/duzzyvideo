import { plans } from "@/lib/data";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <span className="eyebrow">Pricing</span>
        <h2 className="section-title">
          Pick the <span className="gold">plan that fits your craft</span>
        </h2>
        <p className="section-sub">
          From free trials to studio collaboration, scale up as you create more.
        </p>

        <div className={styles.grid}>
          {plans.map((p) => (
            <div
              key={p.name}
              className={`${styles.card} ${p.featured ? styles.featured : ""}`}
            >
              {p.featured && <span className={styles.tag}>Most popular</span>}
              <h3 className={styles.name}>{p.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>{p.price}</span>
                <span className={styles.unit}>{p.unit}</span>
              </div>
              <p className={styles.desc}>{p.desc}</p>
              <a
                href="#"
                className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} ${
                  styles.cta
                }`}
              >
                {p.cta}
              </a>
              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
