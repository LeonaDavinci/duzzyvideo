import Link from "next/link";
import { videoWorks } from "@/lib/data";
import styles from "./VideoWorks.module.css";

export default function VideoWorks() {
  return (
    <section className="section" id="works" style={{ background: "var(--bg)" }}>
      <div className="container">
        <span className="eyebrow">Video Works</span>
        <h2 className="section-title">
          Real frames from <span className="gold">real renders</span>
        </h2>
        <p className="section-sub">
          Tap any still to open the full work — see the prompt, the model, and
          the director&apos;s notes behind every shot.
        </p>

        <div className={styles.grid}>
          {videoWorks.map((w) => (
            <Link
              key={w.slug}
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
                <span className={styles.tag}>{w.tag}</span>
                <span className={styles.duration}>{w.duration}</span>
                <span className={styles.play} aria-hidden="true">
                  ▶
                </span>
              </div>
              <div className={styles.meta}>
                <div>
                  <h4 className={styles.title}>{w.title}</h4>
                  <p className={styles.author}>by {w.author}</p>
                </div>
                <span className={styles.cta}>View →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
