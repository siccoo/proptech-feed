import React from 'react';
import { Home, Search, Plus, Bell, User, PlusSquare } from 'lucide-react';

export const MobileTabBar: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-900 bg-[#0F1113]/95 p-2 backdrop-blur-lg md:hidden pb-safe">
            <div className="relative max-w-md mx-auto">

                <div className="absolute right-4 -top-16 z-50">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2F8F63] text-white shadow-xl active:scale-95 transition-transform cursor-pointer border border-[rgba(255,255,255,0.1)]">
                        <Plus className="h-6 w-6 stroke-[2.5]" />
                    </button>
                </div>

                <div className="grid grid-cols-5 items-center justify-items-center pt-1">
                    <button className="flex flex-col items-center gap-1 text-[#2F8F63] cursor-pointer w-full">
                        <Home className="h-5 w-5" />
                        <span className="text-[10px] font-medium tracking-tight">Feed</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 text-[#B8B8B8] cursor-pointer w-full">
                        <Search className="h-5 w-5" />
                        <span className="text-[10px] font-medium tracking-tight">Search</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 text-[#B8B8B8] cursor-pointer w-full">
                        <PlusSquare className="h-5 w-5" />
                        <span className="text-[10px] font-medium tracking-tight">List</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 text-[#B8B8B8] cursor-pointer w-full">
                        <Bell className="h-5 w-5" />
                        <span className="text-[10px] font-medium tracking-tight">Notification</span>
                    </button>

                    <button className="flex flex-col items-center gap-1 text-[#B8B8B8] cursor-pointer w-full">
                        <User className="h-5 w-5" />
                        <span className="text-[10px] font-medium tracking-tight">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    );
};