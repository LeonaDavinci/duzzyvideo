import { partners } from "@/lib/data";
import styles from "./Partners.module.css";

export default function Partners() {
  return (
    <section className="section" id="partners">
      <div className="container">
        <span className="eyebrow">Powered by</span>
        <h2 className="section-title">
          One studio, <span className="gold">every leading model</span>
        </h2>
        <p className="section-sub">
          Switch engines mid-project and keep a consistent look across your
          whole film.
        </p>
        <div className={styles.wall}>
          {partners.map((p) => (
            <div key={p.name} className={styles.chip}>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
