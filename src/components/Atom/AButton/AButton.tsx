import Link from 'next/link'
import styles from './AButton.module.scss'

export function AButton ({ label, theme, onClick, weight, href }) {

  return <Link
    onClick={onClick}
    href={href}
    data-theme={theme}
    className={styles.AButton}
  >
    <p data-weight={weight}>{label}</p>
  </Link>
}
