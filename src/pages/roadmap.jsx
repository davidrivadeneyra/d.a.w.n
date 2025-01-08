import { useState } from "react";
import ZombieWalking from '../components/zombie-walking'
import Footer from '../components/footer'
import PatchItem from '../components/path-item'

function Roadmap() {
  
  return (
    
    <>

      <main className="main-background">
      <header className="h-20 flex justify-center items-center w-full">
           <div className="main-inner-section">
           <a href="/" className="flex justify-center items-center">
                <img
                  className="inline-block h-8 md:h-10"
                  src="/brand/logo.svg"
                  alt="Logo DAWN"
                />
              </a>
           </div>
        </header>
        <section className="main-inner-section pb-32">
          <div className="pb-3 lg:pb-8 pt-28 flex flex-row">
 
            <div className="w-full">
              <h1 className="title-h2 title-color pb-14">
              Roadmap
              </h1>
              <div className="pb-20">
                <h3 className="title-h4 text-red-600 pb-2">Stage 1:</h3>
                <h2 className="title-h3 title-color pb-8">
                  Foundations of Survival
                </h2>
                <div className="path-section flex flex-col-reverse">
                  <div className="path-list flex flex-col gap-10">
                    <PatchItem
                      title="First Blood"
                      patchInfo="Patch 1.0 •"
                      description="Initial release, core zombie AI (Wretches), and basic player movement/combat."
                      dateStatus="done"
                      dateText="Release Date: October 11, 2024"
                    />
                    <PatchItem
                      title="Adapt or Die"
                      patchInfo="Patch 1.1 •"
                      description="Improved zombie AI, pathfinding, and player inventory
                      system."
                      dateStatus="done"
                      dateText="Release Date: October 25, 2024"
                    />
                    <PatchItem
                      title="Breaking Point"
                      patchInfo="Patch 1.2 •"
                      description="Zombie variants (fast and tough Wretches) and ranged weapons for players."
                      dateStatus="done"
                      dateText="Release Date: November 8, 2024"
                    />
                    <PatchItem
                      title="Defensive Measures"
                      patchInfo="Patch 1.3 •"
                      description="Player traps, simple crafting, and early progression mechanics."
                      dateStatus="done"
                      dateText="Release Date: November 22, 2024"
                    />
                  </div>
                </div>
              </div>
              <div  className="pb-20">
                <h3 className="title-h4 text-red-600 pb-2">Stage 2:</h3>
                <h2 className="title-h3 title-color pb-8">
                The Hunter’s Call
                </h2>
                <div className="path-section flex flex-col-reverse">
                  <div className="path-list flex flex-col gap-10">
                    <PatchItem
                      title="Rise of the Hunters"
                      patchInfo="Patch 2.0 •"
                      description="Hunters evolve from Wretches, introducing kill-based progression."
                      dateStatus="done"
                      dateText="Release Date: December 6, 2024"
                    />
                    <PatchItem
                      title="Silent Stalkers"
                      patchInfo="Patch 2.1 •"
                      description="Enhanced tracking for Hunters, player stats, and leaderboards."
                      dateStatus="done"
                      dateText="Release Date: December 20, 2024"
                    />
                    <PatchItem
                      title="The Hunt Begins"
                      patchInfo="Patch 2.2 •"
                      description="Advanced ranged combat for players, with improved tactical AI for Hunters."
                      dateStatus="progress"
                      dateText="Release Date: January 3, 2025"
                    />
                    <PatchItem
                      title="Echoes of Survival"
                      patchInfo="Patch 2.3 •"
                      description="Event system implementation, with real-time notifications for key zombie/player actions."
                      dateStatus="text"
                      dateText="Release Date: January 17, 2025"
                    />
                  </div>
                </div>
              </div>
              <div  className="pb-20">
                <h3 className="title-h4 text-red-600 pb-2">Stage 3:</h3>
                <h2 className="title-h3 title-color pb-8">
                Ravagers of the Wastes
                </h2>
                <div className="path-section flex flex-col-reverse">
                  <div className="path-list flex flex-col gap-10">
                    <PatchItem
                      title="Ravager’s Wrath"
                      patchInfo="Patch 3.0 •"
                      description="Ravagers emerge with the ability to break through defenses and remember player actions."
                      dateStatus="text"
                      dateText="Release Date: January 31, 2025"
                    />
                    <PatchItem
                      title="Hold the Line"
                      patchInfo="Patch 3.1 •"
                      description="Player base defenses and advanced traps for dealing with Ravagers."
                      dateStatus="text"
                      dateText="Release Date: February 14, 2025"
                    />
                    <PatchItem
                      title="Memories of the Dead"
                      patchInfo="Patch 3.2 •"
                      description="Tactical memory-based AI for Ravagers, allowing them to set ambushes."
                      dateStatus="text"
                      dateText="Release Date: February 28, 2025"
                    />
                    <PatchItem
                      title="Resourceful Resistance"
                      patchInfo="Patch 3.3 •"
                      description="Advanced resource gathering and more complex traps for players."
                      dateStatus="text"
                      dateText="Release Date: March 14, 2025"
                    />
                  </div>
                </div>
              </div>
            </div>



            <div className="w-full">
                <ZombieWalking 
                  modelPath="/assets/3D/zombie.glb"
                  playbackSpeed={1}
                  autoPlay={true}
                  animationName="all"
                  disable-zoom
              />
            </div>
          
          </div>
          <Footer></Footer>
        </section>
        
        
      </main>
 
    </>
  );
}

export default Roadmap;
