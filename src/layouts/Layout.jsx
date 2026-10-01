import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a>Novex || React.js Full Course</a>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Saman</p>
      </footer>
    </>
  );
}
export default Layout;
