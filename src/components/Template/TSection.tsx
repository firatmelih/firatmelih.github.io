import styles from './TSection.module.scss'

export function TSection ({ children, title, id }) {

  return (<section
    id={id}
    className={styles.TSection}
  >
    <h2>{title}</h2>
    <div className={styles.TSection__content}>
      {children}
    </div>
  </section>)
}
