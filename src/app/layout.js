import './globals.css'
// import { Inter } from 'next/font/google'

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
            <div className='cinecine'>CineCine</div>
            <div className='info'>Info</div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
