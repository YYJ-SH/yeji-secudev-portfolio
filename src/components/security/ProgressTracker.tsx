// components/security/ProgressTracker.tsx
import { Progress } from "@/components/ui/progress";
import { Trophy } from 'lucide-react';

interface ProgressTrackerProps {
 totalWeeks: number;
 completedWeeks: number;
}

export const ProgressTracker = ({ totalWeeks, completedWeeks }: ProgressTrackerProps) => {
 const percentage = (completedWeeks / totalWeeks) * 100;

 return (
   <div className="relative p-6 border-2 border-purple-300/50 rounded-xl 
                   bg-gradient-to-b from-gray-50 to-white/80 backdrop-blur-sm
                   shadow-[0_0_15px_rgba(147,51,234,0.1)]">
     <div className="flex items-center justify-between mb-4">
       <h3 className="text-lg font-bold text-gray-900">교육 진행 현황</h3>
       <div className="flex items-center gap-2">
         <Trophy className="w-5 h-5 text-purple-500" />
         <span className="text-purple-600 font-bold">{completedWeeks}/{totalWeeks} 주차</span>
       </div>
     </div>

     <div className="space-y-2">
       <Progress value={percentage} className="h-2 bg-purple-100">
         <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
       </Progress>
       <div className="flex justify-between text-sm text-gray-500">
         <span>시작</span>
         <span>{percentage.toFixed(0)}% 완료</span>
         <span>완료</span>
       </div>
     </div>

     {/* Milestone Markers */}
     <div className="mt-6 grid grid-cols-4 gap-4">
       {[
         { week: 5, title: "기초 환경 구축", status: "completed" },
         { week: 10, title: "암호학 & 보안", status: "completed" },
         { week: 15, title: "웹 해킹", status: "in-progress" },
         { week: 20, title: "AI 보안", status: "upcoming" }
       ].map((milestone) => (
         <div 
           key={milestone.week} 
           className={`p-3 rounded-lg border ${
             milestone.status === 'completed' 
               ? 'border-purple-200 bg-purple-50' 
               : milestone.status === 'in-progress'
               ? 'border-cyan-200 bg-cyan-50'
               : 'border-gray-200 bg-gray-50'
           }`}
         >
           <div className="text-sm font-medium mb-1">
             {milestone.week}주차
           </div>
           <div className={`text-xs ${
             milestone.status === 'completed' 
               ? 'text-purple-600' 
               : milestone.status === 'in-progress'
               ? 'text-cyan-600'
               : 'text-gray-500'
           }`}>
             {milestone.title}
           </div>
         </div>
       ))}
     </div>
   </div>
 );
};
