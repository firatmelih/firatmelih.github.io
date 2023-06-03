import { ONavigation } from '@/components/Organism/ONavigation/ONavigation'
import '@/styles/style.scss'

export const metadata = {
  title: 'firatmelih | Portfolio',
  description: 'This is portfolio website created by Melih Firat and includes content of Melih Firat'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={'app'}>
        <ONavigation/>
        {children}
      </body>
    </html>
  )
}
