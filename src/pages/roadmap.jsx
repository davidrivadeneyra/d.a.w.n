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
              <div>
                <h3 className="title-h4 text-red-600 pb-2">Stage 1:</h3>
                <h2 className="title-h3 title-color pb-8">
                  Foundations of Survival
                </h2>
                <div className="path-section flex flex-col-reverse">
                  <div className="path-list flex flex-col gap-10">
                    <PatchItem
                      title="First Blood"
                      patchInfo="Patch 1.0 •"
                      description="Descripción de la nueva característica"
                      dateStatus="text"
                      dateText="Release Date: October 11, 2024"
                    />
                   
                    <div className="path-item">
                      <h3 className="title-h4 title-color pb-2">Adapt or Die</h3>
                      <span className="inline text-zinc-500 paragraph-primary pb-2">
                      Patch 1.1 • <span className="date">Release Date: October 25, 2024</span>
                      </span>
                      <p className="paragraph-primary paragraph-color ">
                      Improved zombie AI, pathfinding, and player inventory
                      system.
                      </p>
                    </div>
                    <div className="path-item">
                      <h3 className="title-h4 title-color pb-2">Breaking Point</h3>
                      <span className="inline text-zinc-500 paragraph-primary pb-2">
                      Patch 1.2 • <span className="date">Release Date: November 8, 2024</span>
                      </span>
                      <p className="paragraph-primary paragraph-color ">
                      Zombie variants (fast and tough Wretches) and ranged weapons for players.
                      </p>
                    </div>
                    <div className="path-item">
                      <h3 className="title-h4 title-color pb-2">Defensive Measures</h3>
                      <span className="inline text-zinc-500 paragraph-primary pb-2">
                      Patch 1.3 • <span className="date">Release Date: November 22, 2024</span>
                      </span>
                      <p className="paragraph-primary paragraph-color ">
                      Player traps, simple crafting, and early progression mechanics.
                      </p>
                    </div>

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
