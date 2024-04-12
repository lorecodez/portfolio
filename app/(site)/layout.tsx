

import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lorenzo Washington Vallejo Web Development',
  description: 'Need your website updated or having trouble with a computer problem? Contact Lorenzo Washington for your technological needs, from design work on your website to fixing your desktop. Located in the Vallejo California, I service the Bay Area for on-site and throught the US for off-site.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='h-max '>
      <head>
        <link rel="icon" href='@/app/favicon.ico' />
      </head>
      <body className='max-w-4xl mx-auto pt-10 h-full block'>
        <Nav/>
        <hr className='hidden'/>
        <main className='pb-20 pt-12 h-fit flex flex-col justify-center w-full ' >
          {children}
        </main>
      </body>
      <hr/>
      <div className='bottom-0 h-fit'>
            <Footer/>
      </div>
    </html>
  )
}
