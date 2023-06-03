import { OHeader } from '@/components/Organism/OHeader/OHeader'
import Link from 'next/link'

export default function Page () {

  return <div>
    <OHeader
    >
      <h1 data-gradient>I am an amateur Photographer</h1>
      <p
        data-gradient
        data-font-size={'h1'}
      >—</p>
      <h2
        data-color={'black'}
        data-weight={'regular'}
      >
        Here you can find some pictures I took.
        <Link
          target={'_blank'}
          href={'https://www.instagram.com/hilem.neb'}
        >
          <p
            data-gradient
            data-font-size={'h2'}
          >hilem.neb</p>
        </Link>
      </h2>
      <br/>
    </OHeader>
  </div>
}
