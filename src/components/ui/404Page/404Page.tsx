import { Link } from 'react-router-dom';
import styles from './404-page.module.css';

function NotFoundPage() {
  return (
    <main className={styles.errorMain}>
      <section className={styles.error}>
        <div className={styles.errorWrapper}>
          <div className={styles.errorText}>
            <h1 className={styles.errorMessage}>Page not found....</h1>
            <Link to="/">GO HOME</Link>
          </div>
          <div className={styles.errorImagebox}>
            <img alt="not-found" src="/public/404-page.jpeg" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
