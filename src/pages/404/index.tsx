import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/404-page.module.css';
import image from '../../../public/404-page.jpeg';

function NotFoundPage() {
  return (
    <main className={styles.errorMain}>
      <section className={styles.error}>
        <div className={styles.errorWrapper}>
          <div className={styles.errorText}>
            <h1 className={styles.errorMessage}>Page not found....</h1>
            <Link type="button" href="./">
              GO HOME
            </Link>
          </div>
          <div className={styles.errorImagebox}>
            <Image src={image} alt="not-found page" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
