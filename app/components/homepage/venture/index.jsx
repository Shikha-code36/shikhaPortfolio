// @flow strict
import Image from "next/image";
import imagePath from "./logo.jpg";

function Venture() {
  return (
    <div
      id="venture"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Creative Venture
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <Image
                src={imagePath}
                width={280}
                height={280}
                alt="Shikha Pandey"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="text-center">
                  <h2 className="text-2xl text-pink-500">Easel To Screen</h2>
                </div>
                <div className="mt-4 ml-4 lg:ml-8 mr-2">
                  <p className="text-amber-300">
                    Dive into Easel to Screen, your digital alcove where the art
                    of cinema, literature, and music converge in a symphony of
                    collaborative exploration. It’s a place where passionate
                    discussions ignite, recommendations inspire, and every
                    artistic expression finds a kindred spirit.
                  </p>
                </div>
                <div className="mt-4 ml-4 lg:ml-8 mr-2">
                  <a
                    href="https://easeltoscreen.com"
                    className="text-orange-400"
                  >
                    https://easeltoscreen.com
                  </a>
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Venture;
