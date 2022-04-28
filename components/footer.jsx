import footer_styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={footer_styles.footer}>
        <div className="container">
          <p>
            <span>PokeNext</span> &copy; 2022
          </p>
        </div>
      </footer>
    </>
  );
}
