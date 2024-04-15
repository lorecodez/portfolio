"use client"

import Contact_form from '../../../components/Contact_form';
import Social_media from '@/components/Social_media';

export default function contact() {
    return (
        <div className='flex flex-col items-center h-full'>
            <Contact_form/>
            <div className='w-fit justify-center'>
                {/* <h1 className='text-center my-4'>Contact Info:</h1> */}
                <div className='flex flex-col pt-3'>
                    <a title="Phone Number" href='tel:+17758254240' className='w-fit px-3 font-bold'>Phone &#x2022; +1(775) 815-4240</a>
                    <a title="Email Address" href='mailto:contact@lorenzowashington.com' className='w-fit px-3 font-bold'>Email &#x2022; contact@lorenzowashington.com</a>
                </div>
                <Social_media/>
            </div>
            <h3 className='hidden'>
                Web development , web design , computer repair , technical support , seo , digital marketing , small business , computer , laptop, phone , smart phone , pc, windows , mac , ios ,
                iphone , troubleshoot , troubleshooting , repairing , desktop , graphics , graphic design , router , modem , printer , software , hardware , pc build , pc building , linux , server , admin ,
                technician , network , internet , wordpress , wordpress designer, wordpress developer , hosting , webflow , webflow designer , webflow developer , squarespace , network , wifi , ps4 , ps5 , xbox ,
                microsoft , mobile , lorenzo , washington , problem , trouble , technology , radio , vallejo , benicia , napa , fairfield , sonoma , solano , student , servicing California , servicing vallejo ,
                computer repair vallejo. 
            </h3>
        </div>
    );
}