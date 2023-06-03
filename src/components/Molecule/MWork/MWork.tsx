import Image from 'next/image'
import styles from './MWork.module.scss'

export function MWork ({ title, children, year, tags, image, description }) {
  return (<div
    className={styles.MWork}
  >
    <div className={styles.MWork__header}>
      <h5
        data-weight={'medium'}
        data-color={'gray'}
      >{title} — {year} </h5>
      {tags && <div className={styles.MWork__chips}>
        {tags.map((tag, index) => <div
          key={index}
          className={styles.MWork__chip}
        >
          {tag}
        </div>)}
      </div>}
    </div>
    <div
      className={styles.MWork__content}
    >
      <p data-font-size={'h5'}>{description}</p>
      {image && <Image
        src={image}
        alt={title}
        fill
      />}
    </div>
  </div>)
}
