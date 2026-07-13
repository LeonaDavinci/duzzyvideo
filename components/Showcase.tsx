import { films, animations, mvExplainer, Work } from "@/lib/data";
import styles from "./Showcase.module.css";

function WorkCard({ w }: { w: Work }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.thumb}
        style={{
          background: `linear-gradient(150deg, hsl(${w.hue} 55% 22%), hsl(${
            w.hue + 24
          } 40% 10%))`,
        }}
      >
        <span className={styles.play}>▶</span>
        <span className={styles.tag}>{w.tag}</span>
      </div>
      <div className={styles.meta}>
        <div>
          <h4 className={styles.title}>{w.title}</h4>
          <p className={styles.author}>by {w.author}</p>
        </div>
        <span className={styles.workflow}>View workflow →</span>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="section" id="showcase" style={{ background: "var(--bg-elev)" }}>
      <div className="container">
        <span className="eyebrow">Showcase</span>
        <h2 className="section-title">
          From idea to screen, <span className="gold">see what you can make</span>
        </h2>

        <div className={styles.block}>
          <h3 className={styles.cat}>AI Films</h3>
          <div className={styles.grid}>
            {films.map((w) => (
              <WorkCard key={w.title} w={w} />
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.cat}>Animations</h3>
          <div className={styles.grid3}>
            {animations.map((w) => (
              <WorkCard key={w.title} w={w} />
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.cat}>MV & Explainer</h3>
          <div className={styles.grid3}>
            {mvExplainer.map((w) => (
              <WorkCard key={w.title} w={w} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
