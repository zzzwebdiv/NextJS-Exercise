import Link from 'next/link';
import styles from './header.module.css';

const Header= () => {
    return(
      <div className={styles.nav_container}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/funds">Posts</Link>
      </div>
    );
  }
  
export default Header;