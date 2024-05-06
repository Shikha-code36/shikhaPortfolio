// @flow strict
import { personalData } from "@/utils/data/personal-data";
import GlowCard from "../../helper/glow-card";

function GitStats() {
  return (
    <div id="stats" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          GitHub Statistics
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <GlowCard identifier="profile-details">
            <div className="bg-primary-bg">
            <img
              src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${personalData.githubUser}&theme=algolia`}
              width={1080}
              height={520}
              alt="github profile-details"
              className="rounded-lg "
            />
            </div>
          </GlowCard>
        </div>

        <>
          <GlowCard identifier="github-stats">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${personalData.githubUser}&show_icons=true&include_all_commits=true&theme=algolia&hide_border=true`}
              width={1080}
              height={520}
              alt="github stats"
            />
          </GlowCard>
          <GlowCard identifier="github-stats-2">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${personalData.githubUser}&theme=algolia&hide_border=true`}
              width={1080}
              height={520}
              alt="github stats"
              className="rounded-lg"
            />
          </GlowCard>
        </>
      </div>
    </div>
  );
};

export default GitStats;
