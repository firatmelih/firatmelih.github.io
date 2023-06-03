import { AButton } from '@/components/Atom/AButton/AButton'
import { OHeader } from '@/components/Organism/OHeader/OHeader'
import { TSection } from '@/components/Template/TSection'

export default function Page () {

  return (
    <div>
      <OHeader
        button={<AButton
          href={'/about#more'}
          weight={'title'}
          theme={'transparent'}
          label={'Check More'}
        />}
      >
        <h1 data-gradient>I am Melih</h1>
        <p
          data-gradient
          data-font-size={'h1'}
        >—</p>
        <h2
          data-color={'black'}
          data-weight={'regular'}
        >
          Turkish full-stack web/mobile developer with 4 years of Computer Science studies at Sakarya University.
          Currently living
          in Cologne, Germany.
        </h2>
        <br/>
      </OHeader>
      <TSection
        id={'more'}
        title={'Moreover'}
      >
        <p data-font-size={'h5'}>
          I had 2 years studies at Kocaeli University in Electronics Engineering in 2017-2019. Then I Started
          Computer Science in 2019 and only bachelors&apos; thesis left to graduation.
        </p> <br/>
        <p data-font-size={'h5'}>
          I lived in Germany for two years, for Educational and Career reasons. I can speak Intermediate level German,
          advanced level English and native level Turkish. Regarding that I have experiences with multi cultural, multi
          national or just global workspaces.</p>
      </TSection>

      <TSection
        id={'profession'}
        title={'Profession'}
      >
        <p data-font-size={'h5'}>
          My title is Fullstack Developer and I&apos;d say my level is mid level. Even tho I can build projects all one,
          I am
          still requiring feedbacks, advices and lead from a Senior level developer. <br/>
          Here are some technologies I am actively using on my worx;
        </p> <br/>
        <h4 data-gradient>React</h4>
        <br/>
        <p data-font-size={'h5'}>
          Since 2019 I am learning and developing projects in React. And keeping tuned for updates on;
        </p> <br/>
        <ul data-font-size={'h5'}>
          <li>
            Next
          </li>
          <li>
            React Native
          </li>
          <li>
            Astro
          </li>
          <li>
            Preact
          </li>
        </ul>
        <p data-font-size={'h5'}>and so on.</p>
        <br/>

        <h4 data-gradient>SCSS</h4>
        <br/>
        <p data-font-size={'h5'}>
          I am huge fan of CSS so, SCSS. Never felt for Tailwind or any other technologies for quick UI fixes.
          I&apos;d like to code my boilerplate by myself -as I did in this website too-.
        </p>
        <br/>

        <h4 data-gradient>Vue 3</h4>
        <br/>
        <p data-font-size={'h5'}>
          As long as compositions API has introduced, Vue is always my secondary to go. I&apos;d probably love it if I
          haven&apos;t met Next.
        </p>
        <br/>

        <h4 data-gradient>MERN</h4> <br/>
        <p data-font-size={'h5'}>
          For my hobby fullstack projects, I am mostly using MERN stack. And personally, I like it the most. Flexibility
          is the key.
        </p> <br/>

        <h4 data-gradient>Strapi</h4> <br/>
        <p data-font-size={'h5'}>
          For client solutions I&apos;ve been using Strapi Headless CMS. It&apos;s easy, with great documentation and
          has great
          community.</p> <br/>

        <h4 data-gradient>Google Analytics</h4> <br/>
        <p data-font-size={'h5'}>
          For hobby projects and official projects,
          I&apos;ve been using GA4 with GTM. With experiences I have in JavaScript and in general Fullstack, it&apos;s
          been a
          cool
          side profession to work on.</p>
      </TSection>
      <TSection
        id={'CV'}
        title={'Curriculum Vitae'}
      >
        <p
          data-weight={'bold'}
          data-color={'gray'}
          data-font-size={'h5'}
        >2021-2023</p>
        <p
          data-color={'orange'}
          data-font-size={'h5'}
        >Vision Unltd. Creative Worx ♡</p>
        <p
          data-font-size={'h5'}
        >Fullstack Developer</p> <br/>

        <p
          data-weight={'bold'}
          data-color={'gray'}
          data-font-size={'h5'}
        >2021-2021</p>
        <p
          data-color={'black'}
          data-font-size={'h5'}
        >Proffasign</p>
        <p
          data-font-size={'h5'}
        >Fullstack Developer</p> <br/>

        <p
          data-weight={'bold'}
          data-color={'gray'}
          data-font-size={'h5'}
        >2021-2021</p>
        <p
          data-color={'black'}
          data-font-size={'h5'}
        >Priviahub</p>
        <p
          data-font-size={'h5'}
        >Fullstack Intern</p> <br/>

        <p
          data-weight={'bold'}
          data-color={'gray'}
          data-font-size={'h5'}
        >2019-2024</p>
        <p
          data-color={'black'}
          data-font-size={'h5'}
        >Sakarya University</p>
        <p
          data-font-size={'h5'}
        >Computer Science Student</p> <br/>

        <p
          data-weight={'bold'}
          data-color={'gray'}
          data-font-size={'h5'}
        >2017-2018</p>
        <p
          data-color={'black'}
          data-font-size={'h5'}
        >Devimsel Electronics</p>
        <p
          data-font-size={'h5'}
        >Electronics Engineering Intern</p> <br/>

        <p
          data-weight={'bold'}
          data-color={'gray'}
          data-font-size={'h5'}
        >2017-2019</p>
        <p
          data-color={'black'}
          data-font-size={'h5'}
        >Kocaeli University</p>
        <p
          data-font-size={'h5'}
        >Electronics Engineering Student</p> <br/>
      </TSection>
    </div>
  )
}
