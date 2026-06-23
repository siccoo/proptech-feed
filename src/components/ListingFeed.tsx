import React from 'react';
import { MapPin, Tag, Heart, MessageSquare, Send, Bookmark, CheckCircle, ChevronLeft, ChevronRight, Image as ImageIcon, Play } from 'lucide-react';
import type { Post } from '../types/feed';

// Mock Data conforming strictly to visual assets
const mockStories = [
  { name: 'Alex', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  { name: 'Jordan', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
  { name: 'Taylor', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150' },
  { name: 'Jamie', avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150' },
  { name: 'Jordan', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150' },
  { name: 'Emerson...', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
  { name: 'Sydney', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150' },
  { name: 'Quinn', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
];

const mockPosts: Post[] = [
  {
    id: '1',
    user: { name: 'Maurice U', role: 'Individual', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150' },
    timestamp: 'Just Now',
    type: 'General',
    content: 'How is everyone holding up with the flooding in Lekki this week? Stay safe out there — and let me know if anyone needs a temporary place to crash 🙏',
    location: 'Lekki Phase 1, Lagos',
    likes: 8,
    commentsCount: 8,
    likedBy: ['miracle.h'],
    topComment: { user: 'tunde_b', text: 'Roads around Admiralty are still bad. Thanks for checking in 🙏' }
  },
  {
    id: '2',
    user: { name: 'Stranger Dan', role: 'Agent', isVerified: true, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' },
    timestamp: '12m',
    type: 'Property',
    content: 'Newly serviced 3-bedroom apartment with fitted kitchen, parking for 3 cars, and 24/7 power. Inspection opens this Saturday.',
    location: 'Lekki Phase 1, Lagos',
    status: 'For Sale',
    media: [{ type: 'image', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800' }],
    likes: 23,
    commentsCount: 3,
    likedBy: ['miracle.h'],
    topComment: { user: 'miracle.h', text: 'Is the rent negotiable? Interested for my client.' }
  },
  {
    id: '3',
    user: { name: 'Ima Ntuen', role: 'Owner', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    timestamp: '13h',
    type: 'Property',
    content: 'Newly Looking for a 2-bedroom apartment in Yaba or Akoka. Must have constant water and parking for one car. Moving in by end of next month.',
    location: 'Lekki Phase 1, Lagos',
    status: 'For Rent',
    media: [{ type: 'video', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800', duration: '0:20' }],
    likes: 1,
    commentsCount: 0,
    likedBy: ['miracle.h']
  }
];

export const ListingFeed: React.FC = () => {
  return (
    <div className="flex-1 max-w-2xl px-4 py-4 space-y-4 mx-auto w-full">
      
      {/* Stories / Avatars Carousel */}
      <div className="flex gap-3.5 overflow-x-auto pb-1 scrollbar-none">
        {mockStories.map((story, idx) => (
          <div key={idx} className="flex flex-col items-center flex-shrink-0 cursor-pointer">
            <div className="h-[62px] w-[62px] rounded-full border-2 border-emerald-400 p-[2px]">
              <img src={story.avatar} alt={story.name} className="h-full w-full rounded-full object-cover" />
            </div>
            <span className="text-xs text-zinc-400 mt-1.5 max-w-[64px] truncate">{story.name}</span>
          </div>
        ))}
      </div>

      {/* Share Box / Create Post Component */}
      <div className="rounded-2xl bg-[#141517] p-4 border border-zinc-900">
        <div className="flex gap-4 border-b border-zinc-800/80 pb-3 mb-4 text-xs font-semibold">
          <button className="text-zinc-400 flex items-center gap-1.5">🏢 Property</button>
          <button className="text-emerald-400 border-b-2 border-emerald-400 pb-3 -mb-[13px] flex items-center gap-1.5">💬 General</button>
          <button className="text-zinc-400 flex items-center gap-1.5">🙋‍♂️ Request</button>
        </div>
        <div className="flex gap-3">
          <div className="h-9 w-9 rounded-full bg-zinc-700 overflow-hidden flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Current User" className="object-cover h-full w-full" />
          </div>
          <div className="w-full space-y-3">
            <input 
              type="text" 
              placeholder="Share an update, ask a question, say hi..." 
              className="w-full bg-transparent text-sm text-zinc-200 outline-none placeholder-zinc-500"
            />
            <div className="flex items-center justify-between pt-1">
              <button className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors">
                <MapPin className="h-3.5 w-3.5 text-zinc-500" /> Location
              </button>
              <button className="rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold text-zinc-950 hover:bg-emerald-500 transition-colors">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feed Dynamic Item Cards */}
      <div className="space-y-4">
        {mockPosts.map((post) => (
          <article key={post.id} className="rounded-2xl bg-[#141517] p-4 border border-zinc-900/60 space-y-3.5">
            
            {/* Header section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={post.user.avatar} alt={post.user.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-zinc-200">{post.user.name}</span>
                    {post.user.isVerified && <CheckCircle className="h-3.5 w-3.5 fill-blue-500 text-[#141517]" />}
                    {post.user.role && (
                      <span className="text-[11px] text-zinc-500 before:content-['•'] before:mx-1 font-medium">
                        {post.user.role}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500">{post.type} • {post.timestamp}</p>
                </div>
              </div>
              <button className="text-zinc-600 hover:text-zinc-400">•••</button>
            </div>

            {/* Description Body */}
            <p className="text-sm leading-relaxed text-zinc-300 whitespace-pre-line">{post.content}</p>

            {/* Tags / Meta properties info row */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {post.location && (
                <span className="flex items-center gap-1 rounded-full bg-zinc-800/40 px-2.5 py-1 text-zinc-400">
                  <MapPin className="h-3 w-3" /> {post.location}
                </span>
              )}
              {post.status && (
                <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold ${
                  post.status === 'For Sale' ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'
                }`}>
                  <Tag className="h-3 w-3" /> {post.status}
                </span>
              )}
            </div>

            {/* Gallery Frame & Media Renderer */}
            {post.media && post.media.length > 0 && (
              <div className="relative overflow-hidden rounded-xl bg-zinc-950 max-h-[380px] group aspect-video">
                <img src={post.media[0].url} alt="Post content file" className="h-full w-full object-cover" />
                
                {post.media[0].type === 'video' && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 transition-transform group-hover:scale-105">
                      <Play className="h-5 w-5 fill-white ml-0.5" />
                    </button>
                    <span className="absolute bottom-3 left-3 rounded bg-zinc-900/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {post.media[0].duration}
                    </span>
                  </div>
                )}

                {/* Micro pagination dots over image */}
                <div className="absolute bottom-3 right-0 left-0 flex justify-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                </div>
              </div>
            )}

            {/* Interaction Utility Controls */}
            <div className="flex items-center justify-between border-t border-zinc-800/50 pt-3 text-zinc-400">
              <div className="flex items-center gap-5">
                <button className="flex items-center gap-1.5 text-xs font-medium hover:text-red-400 transition-colors">
                  <Heart className="h-4 w-4" /> {post.likes}
                </button>
                <button className="flex items-center gap-1.5 text-xs font-medium hover:text-emerald-400 transition-colors">
                  <MessageSquare className="h-4 w-4" /> {post.commentsCount}
                </button>
                <button className="flex items-center gap-1.5 text-xs font-medium hover:text-blue-400 transition-colors">
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <button className="hover:text-zinc-200">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>

            {/* Multi-tier social context preview */}
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <div className="flex -space-x-1.5">
                <span className="h-4 w-4 rounded-full bg-zinc-600 ring-2 ring-[#141517] overflow-hidden"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50" className="object-cover"/></span>
                <span className="h-4 w-4 rounded-full bg-zinc-500 ring-2 ring-[#141517] overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50" className="object-cover"/></span>
              </div>
              <p>Liked by <span className="font-semibold text-zinc-400">{post.likedBy[0]}</span> and {post.likes + 14} others</p>
            </div>

            {/* Inline Micro Comments Thread */}
            {post.topComment && (
              <div className="rounded-xl bg-[#1A1B1E]/60 p-3 text-xs space-y-1">
                <p className="text-zinc-400">
                  <span className="font-bold text-zinc-300 mr-1.5">{post.topComment.user}</span>
                  {post.topComment.text}
                </p>
                <button className="text-[10px] text-zinc-500 hover:underline">View all comments</button>
              </div>
            )}

            {/* Bottom inline interaction reply frame input */}
            <div className="flex items-center gap-2 pt-1">
              <div className="h-6 w-6 rounded-full bg-zinc-700 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="" className="object-cover h-full w-full" />
              </div>
              <input 
                type="text" 
                placeholder="Add a comment..." 
                className="flex-1 bg-transparent text-xs text-zinc-300 outline-none placeholder-zinc-600"
              />
              <button className="text-[11px] font-bold text-zinc-500 hover:text-emerald-400 transition-colors">Reply</button>
            </div>

          </article>
        ))}
      </div>

    </div>
  );
};