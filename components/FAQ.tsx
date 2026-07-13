import { faqs } from "@/lib/data";
import styles from "./FAQ.module.css";

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <span className="eyebrow">FAQ</span>
        <h2 className="section-title">Frequently asked questions</h2>
        <div className={styles.list}>
          {faqs.map((f, i) => (
            <details key={i} className={styles.item} open={i === 0}>
              <summary className={styles.q}>
                {f.q}
                <span className={styles.icon}>+</span>
              </summary>
              <p className={styles.a}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
