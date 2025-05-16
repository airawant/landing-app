
import { cn } from '@/lib/utils';

export default function BackgroundElements() {
  return (
    <>
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-[100px] animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-[100px] animate-spin-slow delay-200"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/30 rounded-full filter blur-[100px] animate-spin-slow delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-orange-500/20 rounded-full filter blur-[100px] animate-spin-slow delay-100"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-white/10 rounded-full"></div>
      <div className="absolute top-40 right-40 w-10 h-10 border border-white/30 rounded-md rotate-45"></div>
      <div className="absolute bottom-40 left-40 w-16 h-16 border border-white/20 rounded-md rotate-12"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0wIDMwaDMwdjMwSDB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')]"></div>
    </>
  );
}
