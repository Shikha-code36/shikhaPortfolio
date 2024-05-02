// @flow strict
import Image from 'next/image';
import Link from 'next/link';
import { timeConverter } from '@/utils/time-converter';

function BlogCard({ blog }) {
  // Extract the first image from the content
  const imgRegex = /<img[^>]+src="(http[^">]+)"/;
  const match = imgRegex.exec(blog.content);
  const imageUrl = match ? match[1] : '';

  // Split the content into words
  const contentWords = blog.content.replace(/<\/?[^>]+(>|$)/g, '').split(/\s+/);

  // Truncate the content to the first 20 words
  const truncatedContent = contentWords.slice(0, 20).join(' ');

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          height={1080}
          width={1920}
          alt=""
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.pubDate)}</p>
        </div>
        <Link href={blog.link}>
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
            {blog.title}
          </p>
        </Link>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6">
          {truncatedContent}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;