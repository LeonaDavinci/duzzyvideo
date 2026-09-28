import Link from "next/link";
import { videoWorks, VideoWork } from "@/lib/data";
import styles from "./Showcase.module.css";

function WorkCard({ w }: { w: VideoWork }) {
  return (
    <Link
      href={`/works/${w.slug}`}
      className={styles.card}
      aria-label={`Open ${w.title} by ${w.author}`}
    >
      <div className={styles.thumb}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={w.image}
          alt={`${w.title} — ${w.tag} screenshot`}
          className={styles.img}
          loading="lazy"
        />
        <span className={styles.play} aria-hidden="true">
          ▶
        </span>
        <span className={styles.tag}>{w.tag}</span>
        <span className={styles.duration}>{w.duration}</span>
      </div>
      <div className={styles.meta}>
        <div>
          <h4 className={styles.title}>{w.title}</h4>
          <p className={styles.author}>by {w.author}</p>
        </div>
        <span className={styles.workflow}>View work →</span>
      </div>
    </Link>
  );
}

export default function Showcase() {
  const films = videoWorks.filter((w) => w.tag === "AI Film");
  const animations = videoWorks.filter((w) => w.tag === "Animation");
  const mv = videoWorks.filter((w) => w.tag === "MV");

  return (
    <section
      className="section"
      id="showcase"
      style={{ background: "var(--bg-elev)" }}
    >
      <div className="container">
        <span className="eyebrow">Showcase</span>
        <h2 className="section-title">
          From idea to screen, <span className="gold">see what you can make</span>
        </h2>

        <div className={styles.block}>
          <h3 className={styles.cat}>AI Films</h3>
          <div className={styles.grid}>
            {films.map((w) => (
              <WorkCard key={w.slug} w={w} />
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.cat}>Animations</h3>
          <div className={styles.grid3}>
            {animations.map((w) => (
              <WorkCard key={w.slug} w={w} />
            ))}
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.cat}>MV & Explainer</h3>
          <div className={styles.grid3}>
            {mv.map((w) => (
              <WorkCard key={w.slug} w={w} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
