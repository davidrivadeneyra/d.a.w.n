import { useState } from "react";
import ButtonIcon from "./components/button-icon";
import BlinkDot from "./components/blink-dot";

function MainPage() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="video-container">
          <video
            className="w-auto h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/demo.mp4" type="video/mp4"/>
          </video>
      </div>
      <main className="main main-background flex flex-col justify-between">
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
        
        <section className="main-inner-section pb-14 w-full">
          <div className="lg:w-[530px]">
            <h1 className="title-h2 title-color pb-3 lg:pb-8 pt-44">
              <span className="title-h2 block ">Survive the</span> Darkness
            </h1>
            <p className="paragraph-primary paragraph-color pb-6">
              DAWN: Darkness Awaits Withstand the Night is a fast-paced
              survival game where players face off against a relentless,
              evolving threat of zombies and reanimated former teammates in an
              open-ended simulation. <span className="button-font title-color ">Available: Apr 1, 2025</span>
            </p>
            </div>


            <div className="wishlist-info mb-8 justify-between flex flex-col md:flex-row gap-4">
              <div className="flex gap-4 flex-col md:flex-row">
                <a href="/register" className="btn btn-primary"
                >Pre-Register for Beta
                </a>
                <a href="https://store.steampowered.com/agecheck/app/1938500/" className="btn btn-secondary"
                >Wishlist on Steam
                </a>
              </div>
              

              <div className="flex gap-4">
                <ButtonIcon
                  imgSrc="/brand/discord-logo.svg"
                  imgAlt="Logo de Discord"
                />
                <ButtonIcon
                  imgSrc="/brand/reddit-logo.svg"
                  imgAlt="Logo de Discord"
                />
                <ButtonIcon
                  imgSrc="/brand/x-logo.svg"
                  imgAlt="Logo de Discord"
                />
                <ButtonIcon
                  imgSrc="/brand/youtube-logo.svg"
                  imgAlt="Logo de Discord"
                />
              </div>

            </div>

            <footer className="flex justify-between">
              <div className="flex gap-4">
                
                <a href="/roadmap" className="paragraph-secondary text-[0.625rem] text-white/60 
              hover:text-white">
                <span className="flex justify-center items-center gap-1"><BlinkDot></BlinkDot> Roadmap</span>
                
                </a>
                <a href="/privacy-policy" className="paragraph-secondary text-[0.625rem] text-white/60 
              hover:text-white ">Privacy Policy
                </a>
              </div>
              
              <span className="paragraph-secondary text-[0.625rem] text-white/60">
            ©DAWN {currentYear}
              </span>
            </footer>
        </section>
      </main>
    </>
  );
}

export default MainPage;
