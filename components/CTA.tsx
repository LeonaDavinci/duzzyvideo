import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.box} film-grain`}>
          <div className={styles.glow} />
          <div className={styles.content}>
            <h2 className={styles.title}>
              Become a <span className="gold">director</span> today
            </h2>
            <p className={styles.sub}>
              No download, no filmmaking degree. Open your browser and roll
              camera on your first AI short.
            </p>
            <a href="/director" className="btn btn-primary">
              Start creating free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
