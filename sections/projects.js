"use client";

import { useState, useEffect } from "react";
import { getProjects } from "@/lib/supabase";

const iconOptions = {
  default: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
  education: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><path d="M12 6v7" /><path d="M8 10h8" />
    </svg>
  ),
  inventory: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
    </svg>
  ),
  delivery: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
};

const colorOptions = [
  "from-teal-400 to-emerald-400",
  "from-purple-400 to-pink-400",
  "from-orange-400 to-red-400",
  "from-blue-400 to-cyan-400",
  "from-green-400 to-lime-400",
  "from-yellow-400 to-orange-400",
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchProjects();
  }, []);

  if (projects.length === 0) return null;

  return (
    <section id="work" className="py-16 sm:py-24 relative overflow-hidden bg-[#0a0a0f]">
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[800px] h-[200px] sm:h-[400px] bg-teal-500/3 rounded-full blur-[150px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-300 text-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" />
            </svg>
            <span>حصاد ما زرعناه</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            مشاريع
            <span className="text-teal-400"> نفتخر بها</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            كل مشروع هو بذرة آتت ثمارها. تصفح نماذج من أعمالنا التي صنعت فرقاً حقيقياً لعملائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6">
          {projects.map((project, index) => {
            const icon = iconOptions[project.icon] || iconOptions.default;
            const color = project.color || colorOptions[index % colorOptions.length];
            
            return (
              <div
                key={project.id}
                className="group relative p-6 sm:p-8 border-b sm:border border-white/5 bg-white/[0.02] sm:rounded-2xl hover:bg-white/[0.04] hover:border-teal-500/20 transition-all duration-500 sm:hover:-translate-y-2 last:border-b-0 sm:last:border-b"
              >
                <div className="absolute inset-0 sm:rounded-2xl bg-teal-500/0 group-hover:bg-teal-500/[0.03] transition-colors duration-500" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} bg-opacity-10 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    {icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500 font-mono">{project.tech}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8 sm:mt-12">
          هذه مجرد نماذج. كل مشروع جديد هو فرصة لنزرع شيئاً مختلفاً ✨
        </p>
      </div>
    </section>
  );
}