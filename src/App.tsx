import { Navbar } from './components/Navbar';
import { LeftSidebar } from './components/LeftSidebar';
import { ListingFeed } from './components/ListingFeed';
import { RightSidebar } from './components/RightSidebar';
import { MobileTabBar } from './components/MobileTabBar';

function App() {
  return (
    <div className="min-h-screen text-zinc-100 font-open-runde selection:bg-[#2F8F63] selection:text-zinc-950">
      <Navbar />
      
      {/* Structural responsive layout split system */}
      <div className="mx-auto flex max-w-[1440px] bg-[#141517] items-start justify-center pb-20 md:pb-0">
        <LeftSidebar />
        <main className="flex-1 min-w-0">
          <ListingFeed />
        </main>
        <RightSidebar />
      </div>

      <MobileTabBar />
    </div>
  );
}

export default App;