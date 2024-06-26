

import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lorenzo Washington Vallejo Web Development',
  description: 'Need your website updated or having trouble with a computer problem? Contact Lorenzo Washington for your technological needs, from design work on your website to fixing your desktop. Located in the Vallejo California, I service the Bay Area for on-site and throught the US for off-site.',
  creator: 'Lorenzo Washington',
  keywords: ['Vallejo', 'Computer', 'Website', 'Web development', 'Design', 'Wordpress', 'Wordpress Developer', 'Design', 'Web Design', 'Graphic Design', 'Graphics', 'Digital Marketing', 'Small Business', 'Photoshop', 'Troubleshoot', 'Troubleshooting', 'HTML', 'JavaScript' , 'CSS', 'Webflow', 'Webflow Developer', 'Lorenzo', 'Washington', 'Lorenzo Washington', 'Troubleshoot Computer', 'Laptop', 'Troubleshoot Laptop', 'Virus', 'Maleware', 'Virus Removale', 'Malware Removale', 'Tech Support', 'Computer Techician', 'Windows', 'Mac Os', 'Mac', 'IOS', 'Iphone', 'Android', 'Windows Repair', 'Windows Troubleshoot', 'Linux', 'Pc', 'Network', 'Internet', 'Wifi', 'Router', 'Modem', 'Switch', 'Coding', 'Coder', 'Hacker', 'Programmer', 'Black', 'African American', 'BLM', 'Greedy Gurlz', 'Misslisabeauty', 'Misslisa']
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
        <h3 className='hidden'>
          Web development , web design , computer repair , technical support , seo , digital marketing , small business , computer , laptop, phone , smart phone , pc, windows , mac , ios ,
          iphone , troubleshoot , troubleshooting , repairing , desktop , graphics , graphic design , router , modem , printer , software , hardware , pc build , pc building , linux , server , admin ,
          technician , network , internet , wordpress , wordpress designer, wordpress developer , hosting , webflow , webflow designer , webflow developer , squarespace , network , wifi , ps4 , ps5 , xbox ,
          microsoft , mobile , lorenzo , washington , problem , trouble , technology , radio , vallejo , benicia , napa , fairfield , sonoma , solano , student , servicing California , servicing vallejo ,
          computer repair vallejo. 
        </h3>
      </body>
      <hr/>
      <div className='bottom-0 h-fit'>
            <Footer/>
      </div>
    </html>
  )
}
