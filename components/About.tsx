import pilot from '../public/pilot.png';
import Image from 'next/image';
import { LightningBoltIcon, TwitterLogoIcon,  GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button';
import Link from 'next/link';

const About = () => {

    const twitter = 'https://www.twitter.com';
    const github = 'https://www.github.com/thefool76';
  return (
    <div>
        <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold flex gap-1">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                About
                </span>
                <LightningBoltIcon className='h-10 w-10'/>
                ZapNote
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Zapnote is a project made and maintained by Sumit, an indie developer from India who is inspired to build open-source projects for fun. He got the idea for Zapnote from a Twitter thread where he found out that people want a simple and clean note-taking app. Hence, while Sumit was learning Next.js, he thought, 'Let's start building this app' and thus Zapnote was born.
              </p>
              <p className='text-2xl md:text-3xl font-bold pt-6'>Follow him now!</p>
            </div>
            <div className='flex gap-2'>
            <Link href={twitter}>
            <Button className='gap-1'>
              <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem]" /> Twitter
            </Button>
          </Link>
          <Link href={github}>
            <Button className='gap-1'>
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" /> Github
            </Button>
          </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About