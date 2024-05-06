import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Venture from "./components/homepage/venture";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import GitProjects from "./components/homepage/Gitproject";
import Stats from "./components/homepage/stats";
import Skills from "./components/homepage/skills";
import xml2js from 'xml2js';

async function getData() {
  const res = await fetch(`https://medium.com/feed/@${personalData.devUsername}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.text();
  const parser = new xml2js.Parser();
  const result = await parser.parseStringPromise(data);
  const items = result.rss.channel[0].item;
  const filtered = items.map(item => ({
    title: item.title[0],
    link: item.link[0],
    pubDate: item.pubDate[0],
    creator: item['dc:creator'][0],
    content: item['content:encoded'][0],
  })).filter(item => item.content.includes('<img'));

  return filtered;
}


async function getGitProjects() {
  const res = await fetch(`https://api.github.com/search/repositories?q=user:${personalData.githubUser}+fork:false&sort=stars&per_page=10&type=Repositories`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json();
};

export default async function Home() {
  const blogs = await getData();
  const projects = await getGitProjects();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <GitProjects projects={projects.items} />
      <Stats/>
      <Venture />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  )
};
