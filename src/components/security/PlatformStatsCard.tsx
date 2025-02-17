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
      <Card className="relative border-2 border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 
                     backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]">
        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />

        <div className="p-6">
          {/* Platform Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 
                         text-transparent bg-clip-text">
              {platform.name}
            </h3>
            <a 
              href={platform.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {platform.rank && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-cyan-50">
                <Trophy className="w-5 h-5 text-purple-500" />
                <div>
                  <div className="text-sm text-gray-600">Rank</div>
                  <div className="font-bold text-purple-600">{platform.rank}</div>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-cyan-50">
              <Target className="w-5 h-5 text-purple-500" />
              <div>
                <div className="text-sm text-gray-600">Solved</div>
                <div className="font-bold text-purple-600">
                  {platform.solved}/{platform.totalProblems}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          {platform.achievements && (
            <div className="space-y-2">
              {platform.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-purple-500" />
                  {achievement}
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};