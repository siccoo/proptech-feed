import React from 'react';
import { Home, Search, Plus, Bell, User } from 'lucide-react';

export const MobileTabbar: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-900 bg-[#0B0C0F]/90 p-2 backdrop-blur-lg md:hidden">
            <div className="relative flex items-center justify-around px-2">

                <button className="flex flex-col items-center gap-0.5 text-emerald-400">
                    <Home className="h-5 w-5" />
                    <span className="text-[10px] font-medium">Feed</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300">
                    <Search className="h-5 w-5" />
                    <span className="text-[10px] font-medium">Search</span>
                </button>

                {/* Floating Add Button Center Hub */}
                <div className="relative -top-5">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform">
                        <Plus className="h-6 w-6 stroke-[3]" />
                    </button>
                </div>

                <button className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300">
                    <Bell className="h-5 w-5" />
                    <span className="text-[10px] font-medium">Notification</span>
                </button>

                <button className="flex flex-col items-center gap-0.5 text-zinc-500 hover:text-zinc-300">
                    <User className="h-5 w-5" />
                    <span className="text-[10px] font-medium">Profile</span>
                </button>

            </div>
        </div>
    );
};