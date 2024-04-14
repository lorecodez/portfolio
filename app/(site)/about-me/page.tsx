import Image from "next/image";
import profilePic from '@/app/(site)/images/profile-pic.jpg'
export default function page() {
    return (
        <div>
            <header className=" flex justify-center flex-col items-center h-fit">

                <h1 className="text-6xl font-extrabold text-center drop-shadow">
                <span className='primary-bg '>Who</span> is Lorenzo Washington?
                </h1>

                
                
            </header>
            <article className="py-9">
                <section className="flex flex-row justify-center gap-5 items-center">
                    <picture className="rounded-full flex aspect-square justify-center overflow-hidden mb-9 mx-2">
                        <Image 
                        src={profilePic} 
                        alt='profile-pic' 
                        width={200} 
                        height={200}/>
                    </picture>
                    <h2 className="font-bold lg:text-3xl text-2xl w-1/2 text-left h-fit mb-9 ">Welcome,  I am a young, tenacious college student and web developer with a talent for technology.</h2>
                </section>
                
                <section>
                    <p className="px-2 first-letter:p-3 first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:shadow-lg shadow-gray-900 first-letter:mr-3 first-letter:float-left first-letter:mt-2.5 first-letter:rounded">
                        Hello, welcome to my page. I am a freelance web developer and tenacious college student with a talent for technology. Enrolled in the computer science degree for transfer program at Solano Community College, I seek to develop the skills needed in today’s technology through internships and work experience. My objective is to better position myself in improving our world’s technological advancements while keeping the Environment and Society in mind. The next step in my career is to become a full-stack developer. As an African-American student, I aim to serve as a positive role model for the underrepresented youth in my community and help future generations prosper by giving back to many organizations that have helped me succeed.

                        Top Skills:
                        - Next.js
                        - React.js
                        - JavaScript
                        - Figma
                        
                        You can learn more about my work on my website: https://lorenzowashingtion.com

                        Need a partner for collaboration? Feel free to contact me. 
                        GitHub: https://github.com/lorecodez
                        Email: contact@lorenzowashington.com
                        Phone: (707) 654-9762
                    </p>
                </section>
            </article>
        </div>
    );
}