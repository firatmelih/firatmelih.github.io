import { faGithub, faLinkedinIn, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from './MSocials.module.scss'

export function MSocials () {

  return (
    <section className={styles.MSocials}>
      <ul>
        <li>
          <Link
            target={'_blank'}
            href={'https://github.com/firatmelih'}
          ><FontAwesomeIcon icon={faGithub}/>
          </Link>
        </li>
        <li>
          <Link
            target={'_blank'}
            href={'https://medium.com/@firatmelih'}
          ><FontAwesomeIcon icon={faMedium}/>
          </Link>
        </li>
        <li>
          <Link
            target={'_blank'}
            href={'https://www.linkedin.com/in/firatmelih/'}
          ><FontAwesomeIcon icon={faLinkedinIn}/></Link>
        </li>
        <li>
          <Link
            target={'_blank'}
            href={'https://twitter.com/firatmelihdev'}
          ><FontAwesomeIcon icon={faTwitter}/>
          </Link>
        </li>
      </ul>
    </section>
  )
}
