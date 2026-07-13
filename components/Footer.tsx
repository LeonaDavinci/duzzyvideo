import styles from "./Footer.module.css";

const cols = [
  {
    title: "Product",
    links: ["Models", "Director Canvas", "Creative Tools", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Tutorials", "Community", "Developer API", "FAQ", "Blog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <a href="#top" className={styles.logo}>
            <span className="gold">◐</span> BuzzyAI{" "}
            <span className="gold">Video</span>
          </a>
          <p className={styles.tagline}>
            The pro AI video engine for everyone.
            <br />
            Every idea deserves to be filmed.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title} className={styles.col}>
            <h4>{c.title}</h4>
            {c.links.map((l) => (
              <a key={l} href="#">
                {l}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="divider" />
      <div className={`container ${styles.bottom}`}>
        <span>© 2026 BuzzyAI Video. All rights reserved.</span>
        <span>Pro Video Engine for Everyone</span>
      </div>
    </footer>
  );
}
