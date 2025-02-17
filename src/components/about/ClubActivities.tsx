// components/about/ClubActivities.tsx
import { Card } from "@/components/ui/card";
import { Users, Calendar, CheckCircle2 } from 'lucide-react';

interface ClubActivitiesProps {
  clubs: {
    name: string;
    period: string;
    activities: string[];
  }[];
}

export const ClubActivities = ({ clubs }: ClubActivitiesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {clubs.map((club) => (
        <div key={club.name} className="relative group">
          <Card className="relative border-2 border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 
                         backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]">
            {/* Glowing corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 
                               text-transparent bg-clip-text">
                    {club.name}
                  </h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>{club.period}</span>
              </div>

              <div className="space-y-2">
                {club.activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mt-1" />
                    <span className="text-gray-600">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

