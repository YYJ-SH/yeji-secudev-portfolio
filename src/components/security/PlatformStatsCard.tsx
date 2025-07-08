// components/security/PlatformStatsCard.tsx
import { Card } from "@/components/ui/card";
import { Trophy, Target, Star, ExternalLink } from 'lucide-react';

interface PlatformStats {
  name: string;
  rank?: string;
  solved: number;
  totalProblems: number;
  profileUrl: string;
  achievements?: string[];
}

export const PlatformStatsCard = ({ platform }: { platform: PlatformStats }) => {
  const solvedPercentage = (platform.solved / platform.totalProblems) * 100;

  return (
    <div className="relative group">
      {/* Brutalist Shadow */}
      <div className="absolute inset-0 bg-lime-400 transform rotate-2 group-hover:rotate-0 transition-transform duration-300" />
      
      <div className="relative bg-black border-4 border-white p-6 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
        {/* Platform Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black text-white transform hover:rotate-1 transition-transform">
            {platform.name}
          </h3>
          <a 
            href={platform.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center transform rotate-45 hover:rotate-0 transition-transform border-2 border-white"
          >
            <ExternalLink className="w-5 h-5 transform -rotate-45" />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="space-y-4 mb-6">
          {platform.rank && (
            <div className="bg-orange-500 p-4 transform -rotate-1 border-2 border-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black flex items-center justify-center transform rotate-45">
                  <Trophy className="w-4 h-4 text-orange-500 transform -rotate-45" />
                </div>
                <div>
                  <div className="text-black font-black text-sm">RANK</div>
                  <div className="text-black font-black text-xl">{platform.rank}</div>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-pink-500 p-4 transform rotate-1 border-2 border-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black flex items-center justify-center transform -rotate-45">
                <Target className="w-4 h-4 text-pink-500 transform rotate-45" />
              </div>
              <div>
                <div className="text-white font-black text-sm">SOLVED</div>
                <div className="text-white font-black text-xl">
                  {platform.solved}/{platform.totalProblems}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white p-3 transform -rotate-1 border-2 border-lime-400">
            <div className="text-black font-black text-sm mb-2">PROGRESS</div>
            <div className="w-full bg-black h-4 border-2 border-black">
              <div 
                className="h-full bg-lime-400 transition-all duration-1000"
                style={{ width: `${solvedPercentage}%` }}
              />
            </div>
            <div className="text-black font-black text-xs mt-1">
              {solvedPercentage.toFixed(1)}% COMPLETE
            </div>
          </div>
        </div>

        {/* Achievements */}
        {platform.achievements && (
          <div className="space-y-2">
            <h4 className="text-lime-400 font-black text-lg mb-3">ACHIEVEMENTS</h4>
            {platform.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <div className="w-6 h-6 bg-lime-400 flex items-center justify-center transform rotate-45 border border-black">
                  <Star className="w-3 h-3 text-black transform -rotate-45" />
                </div>
                <span className="font-bold text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
