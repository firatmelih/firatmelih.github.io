'use client'
import { Typewriter } from 'react-simple-typewriter'

export function APrompter ({ data, speed }) {

  return <Typewriter
    words={data}
    loop
  />
}
