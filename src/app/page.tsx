import { AButton } from '@/components/Atom/AButton/AButton'
import { APrompter } from '@/components/Atom/APrompter/APrompter'
import { OHeader } from '@/components/Organism/OHeader/OHeader'
import { OWorx } from '@/components/Organism/OWorx/OWorx'

export default function Home () {
  return (
    <main>
      <OHeader
        button={<AButton
          href={'#worx'}
          weight={'title'}
          theme={'transparent'}
          label={'Check Worx'}
        />}
      >
        <h1 data-gradient>I am<APrompter data={[' a Developer', ' an Engineer', ' here for solutions']}/></h1>
        <p
          data-gradient
          data-font-size={'h1'}
        >—</p>
        <h2
          data-color={'black'}
          data-weight={'regular'}
        >
          After many years working in
          companies for cool products, I decided to head back to University to get my diploma.</h2>
      </OHeader>
      <OWorx/>
    </main>
  )
}
