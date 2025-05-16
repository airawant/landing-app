
import { useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MenuButtonProps {
  icon: ReactNode;
  label: string;
  color: string;
  delay: string;
}

export default function MenuButton({ icon, label, color, delay }: MenuButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const gradients = {
    'purple': 'bg-gradient-to-br from-purple-500 to-pink-500',
    'blue': 'bg-gradient-to-br from-blue-500 to-purple-500',
    'orange': 'bg-gradient-to-br from-orange-500 to-pink-500',
    'pink': 'bg-gradient-to-br from-pink-500 to-purple-500'
  };
  
  const shadows = {
    'purple': 'shadow-purple-500/50',
    'blue': 'shadow-blue-500/50',
    'orange': 'shadow-orange-500/50',
    'pink': 'shadow-pink-500/50'
  };
  
  return (
    <div 
      className={cn(
        "relative flex flex-col items-center animate-float", 
        delay,
        isHovered ? "scale-105" : "scale-100",
        "transition-all duration-300 ease-in-out"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "w-28 h-28 md:w-36 md:h-36 rounded-3xl flex items-center justify-center cursor-pointer",
          gradients[color as keyof typeof gradients],
          isHovered ? `shadow-xl ${shadows[color as keyof typeof shadows]}` : "shadow-md",
          "transition-all duration-300 ease-in-out"
        )}
      >
        <div className="text-white">
          {icon}
        </div>
      </div>
      <p className={cn(
        "mt-4 text-lg md:text-xl font-semibold",
        isHovered ? "text-white" : "text-gray-200",
        "transition-colors duration-300"
      )}>
        {label}
      </p>
    </div>
  );
}
