'use client'

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './ONavigation.module.scss'

export function ONavigation () {
  const [navVisible, setNavVisible] = useState(false)
  return (
    <nav
      className={styles.ONavigation}
    >
      <div
        data-variant={'logo'}
        className={styles.ONavigation__cell}
      >
        <Link href={'/'}>
          <Image
            alt={'logo'}
            width={32}
            height={32}
            src={'/logo.png'}
          />
        </Link>
      </div>
      <FontAwesomeIcon
        onClick={() => setNavVisible(navVisible => !navVisible)}
        data-variant={'bar'}
        className={styles.ONavigation__cell}
        height={32}
        width={32}
        icon={faBars}
      />
      <ul
        data-visible={navVisible}
        data-variant={'mobile'}
        className={styles.ONavigation__cell}
      >
        <li onClick={() => setNavVisible(false)}>
          <Link href={'/about'}>
            <p data-weight={'medium'}>about</p>
          </Link>
        </li>
        <li onClick={() => setNavVisible(false)}>
          <Link href={'/#worx'}>
            <p data-weight={'medium'}>worx</p>
          </Link>
        </li>
        <li onClick={() => setNavVisible(false)}>
          <Link href={'/photos'}>
            <p data-weight={'medium'}>photos</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
