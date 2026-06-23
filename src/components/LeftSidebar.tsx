import React from 'react';
import { MessageSquare, Zap, Bookmark, Users, ChevronDown, Plus } from 'lucide-react';

export const LeftSidebar: React.FC = () => {
  const menuItems = [
    { src: "./messages.png", label: 'Messages' },
    { src: "./boost.png", label: 'My Boosts' },
    { src: "./saved.png", label: 'Saved' },
    { src: "./communities.png", label: 'Communities' },
  ];

  const filterCategories = ['Location', 'Listing Type', 'Budget', 'User Type'];

  return (
    <aside className="sticky top-[69px] hidden h-[calc(100vh-69px)] w-64 flex-col gap-5 overflow-y-auto p-4 lg:flex">
      
      {/* Navigation Menu */}
      <div className="rounded-[8px] bg-[#0F1113] border border-white p-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-400 hover:bg-zinc-800/60 hover:text-white transition-all"
          >
            <img src={item.src} alt={item.label} className="h-4 w-4" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Collapsible Filter Dropdowns */}
      <div className="rounded-[8px] bg-[#0F1113] border border-white p-4 space-y-3">
        {filterCategories.map((filter) => (
          <div key={filter} className="border-b border-zinc-800/60 pb-3 last:border-none last:pb-0">
            <button className="flex w-full items-center justify-between text-sm font-medium text-zinc-300 hover:text-white transition-colors">
              <span>{filter}</span>
              <ChevronDown className="h-4 w-4 text-zinc-500" />
            </button>
          </div>
        ))}
      </div>

      {/* Create Post Button */}
      <button className="mt-auto flex items-center justify-center gap-2 rounded-full bg-[#10B981] py-3 text-sm font-bold text-zinc-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/5">
        <Plus className="h-4 w-4 stroke-[3]" />
        Create Post
      </button>

    </aside>
  );
};