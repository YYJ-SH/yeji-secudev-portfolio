// components/about/Timeline.tsx
interface TimelineProps {
    children: React.ReactNode;
  }
  
  export const Timeline = ({ children }: TimelineProps) => {
    return (
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-200 via-cyan-200 to-purple-200" />
        
        {/* Timeline content */}
        <div className="space-y-12">
          {children}
        </div>
      </div>
    );
  };