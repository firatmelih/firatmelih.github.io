import { MWork } from '@/components/Molecule/MWork/MWork'
import { TSection } from '@/components/Template/TSection'
import styles from './OWorx.module.scss'

export function OWorx () {

  return (<TSection
    id={'worx'}
    title={'Worx'}
    className={styles.OWorx}
  >
    <MWork
      year={'2023'}
      title={'La Pared'}
      tags={['Web', 'Official', 'Fullstack']}
      description={'Strapi CMS and Next stack application using GraphQL and Apollo Client for connection to backend. I was developing front to back solutions on this project.'}
    />
    <MWork
      year={'2023'}
      title={'Privote'}
      tags={['Web', 'Personal', 'Fullstack']}
      image={'/works/privote2.png'}
      description={'This project is come out with current popular poll applications\' lack of privacy. Has full email support service, MERN Stack powered with Next. Using Rest API for connection.'}
    />
    <MWork
      year={'2022'}
      title={'Playitas'}
      tags={['Web', 'Official', 'Frontend']}
      image={'/works/playitas.png'}
      description={'I worked on full development and Maintenance of this website\'s frontend, email service. Next frontend with GraphQL and Apollo, coded with Atomic design principles.'}
    />
    <MWork
      year={'2022'}
      title={'Murrplastik'}
      tags={['Web', 'Official', 'Frontend']}
      description={'I partially took a place on this Vue project. Coding base components was my duty.'}
    />
    <MWork
      year={'2022'}
      title={'Toffd'}
      tags={['Web', 'Official', 'Frontend']}
      image={'/works/toffd.png'}
      description={'I partially took a place on this Vue/Twig project. I coded base components.'}
    />
    <MWork
      year={'2021'}
      title={'Breakit'}
      tags={['Mobile', 'Personal', 'Fullstack']}
      description={'This is a completed hobby project I made for people to prevent their addictions, including mini games and quotes and timer that counts how long addiction is being quit. Technologies are React, Zustand.'}
    />
    <MWork
      year={'2021'}
      title={'Playitas'}
      tags={['Mobile', 'Official', 'Frontend']}
      image={'/works/playitas_app.png'}
      description={'Playitas App was upgrading an old project to new version, we decided to code from scratch with Atomic design principles for future aspects. It\'s new developer friendly application. Technologies are React, Redux.'}
    />
    <MWork
      year={'2021'}
      title={'Proffasign'}
      tags={['Web', 'Official', 'Frontend']}
      image={'/works/proffasign.png'}
      description={'Proffassign was a project I was running as a Lead Developer during my University\'s summer break. Uses React 16.'}
    />
    <MWork
      year={'2021'}
      title={'Privia Hub'}
      tags={['Web', 'Official', 'Fullstack', 'Internship']}
      image={'/works/priviahub.png'}
      description={'Priviahub application was my student internship project, was my first professional project with React.'}
    />
  </TSection>)
}
