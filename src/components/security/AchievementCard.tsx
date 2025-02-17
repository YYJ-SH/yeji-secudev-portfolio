// components/security/AchievementCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Flag, BookOpen, Calendar } from 'lucide-react';

interface AchievementProps {
 achievement: {
   title: string;
   description: string;
   date: string;
   type: 'ctf' | 'teaching' | 'research';
 };
}

export const AchievementCard = ({ achievement }: AchievementProps) => {
 const typeIcons = {
   ctf: Flag,
   teaching: BookOpen,
   research: Trophy
 };

 const typeColors = {
   ctf: 'from-red-50 to-purple-50',
   teaching: 'from-cyan-50 to-purple-50',
   research: 'from-yellow-50 to-purple-50'
 };

 const Icon = typeIcons[achievement.type];

 return (
   <div className="relative group">
     <Card className="relative border-2 border-purple-300/50 bg-gradient-to-b from-gray-50 to-white/80 
                    backdrop-blur-sm overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.1)]
                    hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-shadow">
       {/* Glowing corners */}
       <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400" />
       <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400" />
       <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400" />
       <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400" />

       <div className="p-6">
         <div className="flex items-start gap-4">
           <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${typeColors[achievement.type]}
                         flex items-center justify-center`}>
             <Icon className="w-6 h-6 text-purple-600" />
           </div>
           <div>
             <div className="flex items-center gap-2 mb-2">
               <Badge 
                 variant="outline" 
                 className={`bg-gradient-to-r ${typeColors[achievement.type]} 
                          text-purple-600 border-purple-200 capitalize`}
               >
                 {achievement.type}
               </Badge>
               <div className="flex items-center gap-1 text-sm text-gray-500">
                 <Calendar className="w-4 h-4" />
                 {achievement.date}
               </div>
             </div>
             <h3 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-cyan-600 
                          text-transparent bg-clip-text mb-2">
               {achievement.title}
             </h3>
             <p className="text-gray-600 text-sm">
               {achievement.description}
             </p>
           </div>
         </div>
       </div>
     </Card>
   </div>
 );
};