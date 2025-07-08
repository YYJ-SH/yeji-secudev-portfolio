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
   ctf: 'bg-orange-500',
   teaching: 'bg-lime-400',
   research: 'bg-pink-500'
 };

 const Icon = typeIcons[achievement.type];

 return (
   <div className="relative group">
     {/* Brutalist Shadow */}
     <div className={`absolute inset-0 ${typeColors[achievement.type]} 
       transform rotate-2 group-hover:rotate-0 transition-transform duration-300`} />
     
     <div className="relative bg-black border-4 border-white p-6 transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300">
       <div className="flex items-start gap-4">
         {/* Brutalist Icon Container */}
         <div className={`w-12 h-12 ${typeColors[achievement.type]} flex items-center justify-center 
           transform rotate-45 border-2 border-black`}>
           <Icon className="w-6 h-6 text-black transform -rotate-45" />
         </div>
         
         <div className="flex-1">
           <div className="flex items-center gap-3 mb-3">
             <span className={`px-3 py-1 ${typeColors[achievement.type]} text-black font-black text-sm 
               border-2 border-black transform hover:scale-105 transition-transform uppercase`}>
               {achievement.type}
             </span>
             <div className="flex items-center gap-1 text-lime-400 font-bold">
               <Calendar className="w-4 h-4" />
               {achievement.date}
             </div>
           </div>
           
           <h3 className="text-xl font-black text-white mb-3 transform hover:rotate-1 transition-transform">
             {achievement.title}
           </h3>
           
           <div className="bg-white text-black p-3 transform rotate-1 border-2 border-lime-400">
             <p className="font-bold text-sm">
               {achievement.description}
             </p>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};
