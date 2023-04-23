import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Crafts from './components/Crafts'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { PageInfo, Experience, Skill, Project, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocial } from '@/utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const inter = Inter({ subsets: ['latin'] })

const Home = ({pageInfo, skills, projects, socials, experiences}: Props) => {
  return (
    <div className="bg-[rgb(25,24,37)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-thumb-green-400 scrollbar-track-pink-400/20">
      <Head>
        <title>Simona's Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header socials={socials}/>

      <section id="hero" className="snap-start scroll-smooth">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center scroll-smooth">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center scroll-smooth">
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className="snap-start">
        <Crafts skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img 
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://lh3.googleusercontent.com/a/AGNmyxbRMo9SmSrs220kZjAwVwZxSoouTk_wvL7EgBNA=s288" 
              alt="heroPicture"/>
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // fastest way to cached it... =>
    // Next.js will attempt to re-generate the page:
    // -When a request comes in.
    // -At most once every 10 seconds.
     revalidate: 10,
  };
};
