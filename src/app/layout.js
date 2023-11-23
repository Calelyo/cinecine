import Link from 'next/link'
import Image from 'next/image'
import './globals.css'
// import { Inter } from 'next/font/google'
import logoUno from '../app/img/utilidad/cinecinelogo1.png'
import logoDos from '../app/img/utilidad/cinecinelogo2.png'
import info from '../app/img/utilidad/Info2.png'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CineCine',
  description: 'Página demo de CineCine',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="es">
      <body>
        <header>
          <nav className='nav-bar'>
            {/* <div className='cinecine'>CineCine</div> */}
            <div className='cinecine cinecineUno'>
              <Link className={'cinecineLink'} href={`/`}>
              <Image
                src={logoDos}
                alt={`Logotipo CineCine`}
                className={'cinecineLogo'}
                priority={true}
                />
              </Link>
            </div>
            <div className='cinecine cinecineDos'>
              <Link className={'cinecineLink'} href={`/`}>
              <Image
                src={logoUno}
                alt={`Logotipo CineCine`}
                className={'cinecineLogo'}
                priority={true}
                />
              </Link>
            </div>

            {/* <div className='info'>Info</div> */}
            <div className='info'>
              <Link className='infoLink' href={'/informacion'}>
                <Image
                  src={info}
                  alt='Info'
                  className='infoImg'
                  priority={true} />
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
