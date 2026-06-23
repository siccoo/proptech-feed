import React from 'react';
import { ArrowRight } from 'lucide-react';

export const RightSidebar: React.FC = () => {
  return (
    <aside className="sticky top-[69px] hidden h-[calc(100vh-69px)] w-72 flex-col gap-4 overflow-y-auto p-4 xl:flex">
      <div className="rounded-[8px] bg-[#0F1113] border border-[rgba(255,255,255,0.06)] p-4">
        <div className="flex items-center gap-[2px] font-semibold text-xs tracking-wider mb-3">
          <img src="./mapPin.png" alt="Trending" className="h-4 w-4" />
          <span className="text-white" /> Trending Locations
        </div>
        <div className="space-y-3">
          {[
            { name: 'Lekki Epe', count: '120 post today' },
            { name: '2 Bedroom Rental Abuja', count: '60 post today' },
            { name: 'Ajah', count: '250 post today' },
          ].map((loc) => (
            <div key={loc.name} className="group cursor-pointer">
              <p className="text-sm font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors">{loc.name}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{loc.count}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-[#0F1113] border border-[rgba(255,255,255,0.06)] p-4">
        <div className="flex items-center gap-[4px] font-semibold text-xs tracking-wider mb-3">
          <img src="./hot-request.png" alt="request" className="h-4 w-4" />
          <span className="text-white" /> Hot Requests
        </div>
        <div className="space-y-3">
          <div className="rounded-xl p-3 text-xs border border-[rgba(255,255,255,0.06)]">
            <div className="flex gap-2">
              <span className="font-bold text-[rgba(245, 245, 245, 1)]">Buy</span>
              <span className="font-semibold text-[rgba(245, 245, 245, 1)]">Lekki Phase 1, Lagos</span>
            </div>
            <p className="text-zinc-400 my-1.5 line-clamp-2">Looking for a 4-bed detached in Lekki Phase 1</p>
            <div className="flex justify-between text-zinc-500 text-[11px]">
              <span className="font-medium text-zinc-400">₦180M – ₦230M</span>
              <span>12 responses</span>
            </div>
          </div>

          <div className="rounded-xl p-3 text-xs border border-[rgba(255,255,255,0.06)]">
            <div className="flex gap-2">
              <span className="font-bold text-[rgba(245, 245, 245, 1)]">Rent</span>
              <span className="font-semibold text-[rgba(245, 245, 245, 1)]">Ikoyi</span>
            </div>
            <p className="text-zinc-400 my-1.5 line-clamp-2">2-bed serviced apartment in Ikoyi, max ₦15M/yr</p>
            <div className="flex justify-between text-zinc-500 text-[11px]">
              <span className="font-medium text-zinc-400">₦10M – ₦15M</span>
              <span>7 responses</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-[#0F1113] border border-[rgba(255,255,255,0.06)] p-4">
        <div className="flex items-center gap-[2px] font-semibold text-xs tracking-wider mb-3">
          <img src="./users.png" alt="Trending" className="h-4 w-4" />
          <span className="text-white" /> Top Communities
        </div>
        <div className="space-y-2">
          {[
            { name: 'Lekki Landlords', members: '12.4k members' },
            { name: 'Abuja Developers Group', members: '5.6k members' },
            { name: 'House hunting Circle', members: '1.4k members' },
          ].map((comm) => (
            <div key={comm.name} className="flex items-center justify-between rounded-xl p-2 hover:bg-[#1A1B1E] border border-[rgba(255,255,255,0.06)] cursor-pointer transition-colors">
              <div>
                <p className="text-xs font-semibold text-zinc-200">{comm.name}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">{comm.members}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-zinc-600" />
            </div>
          ))}
        </div>
      </div>

    </aside>
  );
};