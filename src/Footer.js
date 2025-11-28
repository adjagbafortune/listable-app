export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      textAlign: "center",
      padding: "1rem 0",
      fontSize: "0.9rem",
      opacity: 0.75
    }}>
      © {year} Fortuné A. | MIT License.
    </footer>
  );
}
