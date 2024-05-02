// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";
import xml2js from 'xml2js';

async function getBlogs() {
  const res = await fetch(`https://medium.com/feed/@${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.text();
  const parser = new xml2js.Parser();
  const result = await parser.parseStringPromise(data);
  const items = result.rss.channel[0].item;
  const blogs = items.map(item => ({
    title: item.title[0],
    link: item.link[0],
    pubDate: item.pubDate[0],
    creator: item['dc:creator'][0],
    content: item['content:encoded'][0],
  }));

  return blogs;
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;
