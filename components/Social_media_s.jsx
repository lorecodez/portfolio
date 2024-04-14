import React from 'react';
import Link from 'next/link';

import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa6';



export default function Social_media_s() {
  return (
    <div>
      <div className='flex flex-row lg:flex-nowrap items-center lg:gap-3 gap-2 lg:w-full justify-center mt-4'>
        <Link title="Linedin" href='https://www.linkedin.com/in/lorenzowashington-abb274122'><FaLinkedin size='30px' className='hover:scale-105 transition'/></Link>
        <Link title="Github" href='https://github.com/lorecodez'><FaGithub size='30px' className='hover:scale-105 transition'/></Link>
        <Link title="Twitter" href='https://twitter.com/lorecodez'><FaTwitter size='30px' className='hover:scale-105 transition'/></Link>
        <Link title="Instagram" href='https://www.instagram.com/lorecodez/'><FaInstagram size='30px' className='hover:scale-105 transition'/></Link>
        <Link title="Facebook" href='https://www.facebook.com/lorecodez'><FaFacebook size='30px' className='hover:scale-105 transition'/></Link>   
      </div>
    </div>
  )
}
