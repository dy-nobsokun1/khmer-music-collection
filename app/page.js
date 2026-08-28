import collection from "../collection.config.js";
import MusicPostcard from "../components/MusicPostcard";

const styles = {
  wrap: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "80px 24px",
  },
  kicker: {
    fontFamily: "'Courier New', monospace",
    color: "#8B7355",
    fontSize: 14,
    letterSpacing: 1,
  },
  title: {
    fontSize: 48,
    fontWeight: 700,
    margin: "16px 0 12px",
    lineHeight: 1.1,
    color: "#5D4C33",
  },
  description: {
    fontSize: 18,
    color: "#7A6A51",
    lineHeight: 1.6,
    margin: 0,
  },
  card: {
    marginTop: 48,
    padding: 24,
    backgroundColor: "#FFF8F0",
    border: "2px solid #C1B19C",
    borderRadius: 12,
  },
  cardLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
    color: "#7A6A51",
    margin: 0,
  },
  cardValue: {
    fontSize: 16,
    margin: "6px 0 0",
    color: "#5D4C33",
  },
  count: {
    fontFamily: "'Courier New', monospace",
    fontSize: 14,
    color: "#8B7355",
    marginTop: 48,
  },
  footer: {
    marginTop: 64,
    paddingTop: 24,
    borderTop: "1px solid #C1B19C",
    fontSize: 13,
    color: "#7A6A51",
  },
};

export default function Home() {
  const entries = [
    {
      title: "ស្រឡាញ់អូនម្នាក់",
      artist: "Sinn Sisamouth",
      time: "1960s",
      genre: "Khmer Oldies"
    },
    {
      title: "Champa Battambang",
      artist: "Pen Ran",
      time: "1960s-70s",
      genre: "Khmer Rock"
    }
  ];

  return (
    <main style={styles.wrap}>
      <p style={styles.kicker}>KHMER LIVING ARCHIVE</p>
      <h1 style={styles.title}>{collection.name}</h1>
      <p style={styles.description}>{collection.description}</p>

      <div style={styles.card}>
        <p style={styles.cardLabel}>CURATED BY</p>
        <p style={styles.cardValue}>{collection.curator}</p>
      </div>
      <div style={styles.card}>
        <p style={styles.cardLabel}>SOURCE</p>
        <p style={styles.cardValue}>{collection.source}</p>
      </div>

      <p style={styles.count}>entries in the archive: {entries.length}</p>

      {entries.map((entry, index) => (
        <MusicPostcard key={index} entry={entry} />
      ))}

      <footer style={styles.footer}>
        Built in ICT 340 — Vibe Coding, American University of Phnom Penh, Fall
        2026. This archive is under construction all semester. Come back in
        December.
      </footer>
    </main>
  );
}
