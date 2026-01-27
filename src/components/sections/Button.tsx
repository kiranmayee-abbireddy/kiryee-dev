import React from 'react';

const Button = () => {
  return (
    <button className="group relative p-0 bg-transparent focus:outline-none active:scale-90 transition-all duration-500">
      <div className="particle absolute left-12 top-0 text-pink-300 opacity-0 group-hover:animate-float-up pointer-events-none">
        ✦
      </div>
      <div className="particle absolute right-16 top-2 text-purple-300 opacity-0 group-hover:animate-float-up pointer-events-none" style={{animationDelay: '0.7s'}}>
        🌸
      </div>
      <div className="particle absolute left-1/2 top-4 text-blue-300 opacity-0 group-hover:animate-float-up pointer-events-none" style={{animationDelay: '1.2s'}}>
        ✨
      </div>
      <svg className="absolute -top-11 left-6 w-14 h-14 transition-all duration-700 group-hover:-translate-y-3 group-hover:rotate-[-8deg] z-0" viewBox="0 0 50 50">
        <path d="M8 42C2 35 2 20 8 15" stroke="#fcd34d" strokeWidth={4} strokeLinecap="round" fill="none" className="origin-bottom-left animate-tail-wag" />
        <path d="M10 45C10 30 15 15 25 15C35 15 40 30 40 45" fill="#fbbf24" />
        <path d="M15 18L8 5L22 15Z" fill="#fbbf24" />
        <path d="M15 18L11 9L19 15Z" fill="#fda4af" />
        <path d="M35 18L42 5L28 15Z" fill="#fbbf24" />
        <path d="M35 18L39 9L31 15Z" fill="#fda4af" />
        <g className="group-hover:scale-110 transition-transform origin-center">
          <circle cx={20} cy={28} r={3} fill="white" />
          <circle cx={20} cy={28} r="1.5" fill="#334155" />
          <circle cx={30} cy={28} r={3} fill="white" />
          <circle cx={30} cy={28} r="1.5" fill="#334155" />
        </g>
        <circle cx={16} cy={34} r={2} fill="#fda4af" className="opacity-60" />
        <circle cx={34} cy={34} r={2} fill="#fda4af" className="opacity-60" />
      </svg>
      <svg className="absolute -top-10 right-8 w-12 h-12 transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-[8deg] z-0" viewBox="0 0 50 50">
        <path d="M10 45C10 30 15 15 25 15C35 15 40 30 40 45" fill="#fef3c7" />
        <path d="M15 18L8 8L22 15Z" fill="#fef3c7" />
        <path d="M35 18L42 8L28 15Z" fill="#fef3c7" />
        <g className="animate-blink origin-center">
          <circle cx={20} cy={28} r="1.8" fill="#92400e" />
          <circle cx={30} cy={28} r="1.8" fill="#92400e" />
        </g>
        <circle cx={15} cy={33} r="2.5" fill="#fecaca" className="opacity-50" />
        <circle cx={35} cy={33} r="2.5" fill="#fecaca" className="opacity-50" />
      </svg>
      <div className="relative z-10 w-64 h-20 rounded-[2rem] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md border border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_40px_rgba(167,139,250,0.2)] flex items-center px-6 transition-all duration-500 overflow-hidden group-hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative z-20 flex flex-col items-start leading-none ml-2">
          <span className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.25em] mb-1 group-hover:text-purple-500 transition-colors">Find a friend</span>
          <span className="text-slate-700 font-bold text-xl tracking-tight group-hover:text-slate-900 transition-colors">
            Sweet Kitties
          </span>
        </div>
        <div className="ml-auto relative z-20 w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shadow-inner transition-transform group-hover:rotate-12">
          <svg className="w-6 h-6 text-purple-300 group-hover:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
            <circle cx={12} cy={16} r="3.5" />
            <circle cx={8} cy={11} r={2} />
            <circle cx={12} cy={8} r={2} />
            <circle cx={16} cy={11} r={2} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 rounded-[2rem] bg-purple-200/30 scale-90 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 -z-10" />
    </button>
  );
}

export default Button;
