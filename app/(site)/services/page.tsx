import Link from "next/link";

export default function services(){
    return(
        <div className="h-full">
            <section className="flex items-center flex-col">
                <fieldset className="flex flex-col gap-y-4 items-center font-bold rounded px-2 py-4 border-grey-500 border-2 md:w-1/2">
                    <legend className="md:p-2 flex p-1 justify-center self-center mx-auto">
                        <h1 className="text-center md:text-3xl text-2xl font-bold w-fit">
                            What Can I Do For You?
                        </h1>
                    </legend>
                    <Link
                    title="Web Development"
                    className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                    href='/services/web-dev'
                    >
                        Web Development
                    </Link>
                    <Link 
                    className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                    href='/services/repair'
                    title="Desktop & Laptop Repair"
                    >
                        Desktop & Laptop Repair
                    </Link>
                    <Link 
                    className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                    href='/services/data'
                    title="Data Transfer"
                    >
                        Data Transfer
                    </Link>
                    <Link 
                    className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                    href='/services/builds'
                    title="Custom Computer Builds"
                    >
                        Custom Computer Builds
                    </Link>
                    <Link 
                    className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                    href='/services/virus'
                    title="Virus and Malware Removal"
                    >
                        Virus and Malware Removal
                    </Link>
                    <Link 
                    className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                    href='/services/support'
                    title="Technical Support"
                    >
                        Technical Support
                    </Link>
                    <Link 
                    className='px-4 hover:scale-105 text-gray-500 hover:bg-blue-600 hover:text-blue-100 transition whitespace-nowrap rounded-lg bg-gray-100' 
                    href='/services/network'
                    title="Home Network Configuration"
                    >
                        Home Network Configuration
                    </Link>
                </fieldset>
                <div className="p-10 group text-center">
                    <h3 className="font-bold text-center pt text-2xl">
                        Not finding what you are looking for?
                    </h3>
                    <Link title="Need Something Custome Clicke Here" href='/contact' className="font-bold text-center text-lg group-hover:scale-105 transition py-2 hover:underline w-min">
                         click here to send us a message to see if we offer what you need as a service.
                    </Link>
                </div>
            </section>
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
