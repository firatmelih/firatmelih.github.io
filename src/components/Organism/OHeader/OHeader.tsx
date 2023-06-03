import { MSocials } from '@/components/Molecule/MSocials/MSocials'
import styles from './OHeader.module.scss'

export function OHeader ({ children, button }) {

  return (
    <header
      className={styles.OHeader}
    >
      <div
        className={styles.OHeader__content}
      >
        <div
          className={styles.OHeader__title}
        >
          {children}
          <MSocials/>
        </div>
        {button && button}
      </div>
    </header>
  )
}
