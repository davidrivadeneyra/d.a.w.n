import { useState } from 'react'
import NewsLetterForm from './components/NewsLetterForm'

function App() {
  return (
    <>
		<div className="absolute vh-85 w-full overflow-hidden">
			<div className="inset-0 -z-10">
				<video 
				className="h-full w-full object-cover"
				autoPlay 
				muted 
				loop 
				playsInline
				>
				<source src="/assets/demo.mp4" type="video/mp4"/>
				</video>
			</div>
			</div>
	<main className="main main-background">
		  	<header className='h-20 flex justify-center items-center w-full'>
				<a href="#" className='flex justify-center items-center'>
					<img className='inline-block h-6 md:h-[32px]' src="/brand/logo-light.svg" alt="Logo D.A.W.N" />
				</a>
			</header>
			<section className="main-inner-section pb-32">
				<div className='lg:w-[530px] '>
					<h1 className="title-h1 title-color pb-3 lg:pb-8 pt-44"><span className='title-h2 block '>Survive the</span>  Darkness</h1>
					<p className="paragraph-primary paragraph-color pb-8">D.A.W.N: Darkness Awaits Withstand the Night is a fast-paced survival game where players face off against a relentless, evolving threat of zombies and reanimated former teammates in an open-ended simulation.</p>
					<NewsLetterForm/>

					<div className="wishlist-info flex lg:flex gap-2 ">
						<a target='_black'  href="https://store.steampowered.com/agecheck/app/1938500/" className='flex gap-2 items-center'>
							<img src="/brand/steam-logo.svg" alt="Steam icon" className="steam-icon"/>
							<span className='button-font text-xs lg:text-sm  text-[#EDF67D]'>WISHLIST ON STEAM</span>
						</a>
							<span className='paragraph-secondary text-xs lg:text-sm'>Available: Apr 1, 2025</span>
						</div>

				</div>
			</section>

		
	</main>
	<div className="main-background">
		<div className='w-full section-gradiente-top'>
			<section className="main-inner-section pb-40">
					<h1 className="title-h2 title-color pt-24 pb-20 text-center uppercase">D.A.W.N Roadmap</h1>
					<h3 className='title-h4 paragraph-orange-500 pb-2'>Stage 1:</h3>
					
					<h2 className='title-h3 title-color pb-8 md:pb-16'>Foundations of Survival</h2>
					
					<div className='path-section flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-16'>
						<div className='path-list flex flex-col gap-10 col-span-3'>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 1.0</span>
								<h3 className='title-h4 title-color pb-4'>First Blood</h3>
								<span className='paragraph-medium title-color block'>Release Date: October 11, 2024</span>
								<p className="paragraph-primary paragraph-color ">Initial release, core zombie AI (Wretches), and basic player movement/combat.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 1.1</span>
								<h3 className='title-h4 title-color pb-4'>Adapt or Die</h3>
								<span className='paragraph-medium title-color block'>Release Date: October 25, 2024</span>
								<p className="paragraph-primary paragraph-color ">Improved zombie AI, pathfinding, and player inventory system.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 1.2</span>
								<h3 className='title-h4 title-color pb-4'>Breaking Point</h3>
								<span className='paragraph-medium title-color block'>Release Date: November 8, 2024</span>
								<p className="paragraph-primary paragraph-color ">Zombie variants (fast and tough Wretches) and ranged weapons for players.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 1.3</span>
								<h3 className='title-h4 title-color pb-4'>Defensive Measures</h3>
								<span className='paragraph-medium title-color block'>Release Date: November 22, 2024</span>
								<p className="paragraph-primary paragraph-color ">Player traps, simple crafting, and early progression mechanics.</p>
							</div>
						</div>
						<div className='path-image col-span-9 relative visible'>
							<img src="/assets/img/02.jpg"  className='aspect-ratio-img absolute blur-2xl top-0 w-full z-0' alt="" />
							<img src="/assets/img/02.jpg" className='aspect-ratio-img relative rounded-3xl' alt="" />
						</div>
					</div>

			</section>
		</div>
		{/* PATH 2 */}
		<div className='w-full section-gradiente-bottom'>
			<section className="main-inner-section pb-40">
				<div className=''>
					<h3 className='title-h4 paragraph-orange-500 pb-2'>Stage 2:</h3>
					
					<h2 className='title-h3 title-color pb-8 md:pb-16'>The Hunter’s Call</h2>
					
					<div className='path-section flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-16'>
						<div className='path-list flex flex-col gap-10 col-span-3'>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 2.0</span>
								<h3 className='title-h4 title-color pb-4'>Rise of the Hunters</h3>
								<span className='paragraph-medium title-color block'>Release Date: December 6, 2024</span>
								<p className="paragraph-primary paragraph-color ">Hunters evolve from Wretches, introducing kill-based progression.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 2.1</span>
								<h3 className='title-h4 title-color pb-4'>Silent Stalkers</h3>
								<span className='paragraph-medium title-color block'>Release Date: December 20, 2024</span>
								<p className="paragraph-primary paragraph-color ">Enhanced tracking for Hunters, player stats, and leaderboards.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 2.2</span>
								<h3 className='title-h4 title-color pb-4'>The Hunt Begins</h3>
								<span className='paragraph-medium title-color block'>Release Date: January 3, 2025</span>
								<p className="paragraph-primary paragraph-color ">Advanced ranged combat for players, with improved tactical AI for Hunters.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 2.3</span>
								<h3 className='title-h4 title-color pb-4'>Echoes of Survival</h3>
								<span className='paragraph-medium title-color block'>Release Date: January 17, 2025</span>
								<p className="paragraph-primary paragraph-color ">Event system implementation, with real-time notifications for key zombie/player actions.</p>
							</div>
						</div>
						<div className='path-image col-span-9 relative visible'>
							<img src="/assets/img/01.jpg"  className='aspect-ratio-img absolute blur-2xl top-0 w-full z-0' alt="" />
							<img src="/assets/img/01.jpg" className='aspect-ratio-img relative rounded-3xl' alt="" />
						</div>
					</div>
				</div>
			</section>
		</div>
		{/* CTA */}
		<div className='py-40 section-image'>
			<section className="main-inner-section pt-40">
				<div className=''>
				<div className='lg:w-[530px] '>
					<h1 className="title-h2 title-color pb-3 lg:pb-8 pt-24">Be the First to Know!</h1>

					<NewsLetterForm/>

					<div className="wishlist-info flex lg:flex gap-2 ">
						<a target='_black' href="https://store.steampowered.com/agecheck/app/1938500/" className='flex gap-2 items-center'>
							<img src="/brand/steam-logo.svg" alt="Steam icon" className="steam-icon"/>
							<span className='button-font text-xs lg:text-sm  text-[#EDF67D]'>WISHLIST ON STEAM</span>
						</a>
							<span className='paragraph-secondary text-xs lg:text-sm'>Available: Apr 1, 2025</span>
						</div>

				</div>
					

				</div>
			</section>
		</div>
		{/* PATH 3 */}
		<div className='w-full section-gradiente-top'>
			<section className="main-inner-section py-40">
				<div className=''>
					<h3 className='title-h4 paragraph-orange-500 pb-2'>Stage 3:</h3>
					
					<h2 className='title-h3 title-color pb-8 md:pb-16'>Ravagers of the Wastes</h2>
					
					<div className='path-section flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-16'>
						<div className='path-list flex flex-col gap-10 col-span-3'>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 3.0</span>
								<h3 className='title-h4 title-color pb-4'>Ravager’s Wrath</h3>
								<span className='paragraph-medium title-color block'>Release Date: January 31, 2025</span>
								<p className="paragraph-primary paragraph-color ">Ravagers emerge with the ability to break through defenses and remember player action.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 3.1</span>
								<h3 className='title-h4 title-color pb-4'>Hold the Line</h3>
								<span className='paragraph-medium title-color block'>Release Date: February 14, 2025</span>
								<p className="paragraph-primary paragraph-color ">Player base defenses and advanced traps for dealing with Ravagers.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 3.2</span>
								<h3 className='title-h4 title-color pb-4'>Memories of the Dead</h3>
								<span className='paragraph-medium title-color block'>Release Date: February 28, 2025</span>
								<p className="paragraph-primary paragraph-color ">Tactical memory-based AI for Ravagers, allowing them to set ambushes.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 3.3</span>
								<h3 className='title-h4 title-color pb-4'>Resourceful Resistance</h3>
								<span className='paragraph-medium title-color block'>Release Date: March 14, 2025</span>
								<p className="paragraph-primary paragraph-color ">Advanced resource gathering and more complex traps for players.</p>
							</div>
						</div>
						<div className='path-image col-span-9 relative visible'>
							<img src="/assets/img/03.jpg"  className='aspect-ratio-img absolute blur-2xl top-0 w-full z-0' alt="" />
							<img src="/assets/img/03.jpg" className='aspect-ratio-img relative rounded-3xl' alt="" />
						</div>
					</div>
				</div>
			</section>
			
		</div>
		{/* PATH 4 */}
		<div className='w-full'>
				<section className="main-inner-section pb-40">
					<div className=''>
						<h3 className='title-h4 paragraph-orange-500 pb-2'>Stage 4:</h3>
						
						<h2 className='title-h3 title-color pb-8 md:pb-16'>Lords of the Horde</h2>
						
						<div className='path-section flex flex-col-reverse md:grid md:grid-cols-12 gap-8 md:gap-16'>
							<div className='path-list flex flex-col gap-10 col-span-3'>
								<div className='path-item'>
									<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 4.0</span>
									<h3 className='title-h4 title-color pb-4'>Alpha Ascendant</h3>
									<span className='paragraph-medium title-color block'>Release Date: March 28, 2025</span>
									<p className="paragraph-primary paragraph-color ">ntroduction of Alphas as horde leaders, boosting other zombies’ abilities.</p>
								</div>
								<div className='path-item'>
									<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 4.1</span>
									<h3 className='title-h4 title-color pb-4'>March of the Juggernauts</h3>
									<span className='paragraph-medium title-color block'>Release Date: April 11, 2025</span>
									<p className="paragraph-primary paragraph-color ">Juggernauts emerge, leading massive hordes and breaking through defenses.</p>
								</div>
								<div className='path-item'>
									<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 4.2</span>
									<h3 className='title-h4 title-color pb-4'>The Reanimated Rise</h3>
									<span className='paragraph-medium title-color block'>Release Date: April 25, 2025</span>
									<p className="paragraph-primary paragraph-color ">Reanimation system, where fallen zombies return with enhanced abilities.</p>
								</div>
								<div className='path-item'>
									<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 2.3</span>
									<h3 className='title-h4 title-color pb-4'>Follow the Leader</h3>
									<span className='paragraph-medium title-color block'>Release Date: May 9, 2025</span>
									<p className="paragraph-primary paragraph-color ">Leadership boosts for reanimated zombies when near Alphas or Juggernauts.</p>
								</div>
							</div>
							<div className='path-image col-span-9 relative visible'>
								<img src="/assets/img/05.jpg"  className='aspect-ratio-img absolute blur-2xl top-0 w-full z-0' alt="" />
								<img src="/assets/img/05.jpg" className='aspect-ratio-img relative rounded-3xl' alt="" />
							</div>
						</div>
					</div>
				</section>
		</div>
		{/* PATH 5 */}
		<div className='w-full section-gradiente-bottom'>
				<section className="main-inner-section pb-40">
					<div className=''>
						<h3 className='title-h4 paragraph-orange-500 pb-2'>Stage 5:</h3>
						
						<h2 className='title-h3 title-color pb-8 md:pb-16'>Endgame Awakening</h2>
						
						<div className='path-section flex flex-col-reverse  md:flex-col gap-8 md:gap-16'>
							<div className='path-list flex flex-col gap-10 md:grid md:grid-cols-3'>
								<div className='path-item'>
									<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 5.0</span>
									<h3 className='title-h4 title-color pb-4'>Evolved Beyond Death</h3>
									<span className='paragraph-medium title-color block'>Release Date: May 23, 2025</span>
									<p className="paragraph-primary paragraph-color ">Final evolution forms for zombies, with max-level Alphas and Juggernauts.</p>
								</div>
								<div className='path-item'>
									<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 5.1</span>
									<h3 className='title-h4 title-color pb-4'>Nuclear Dawn</h3>
									<span className='paragraph-medium title-color block'>Release Date: June 6, 2025</span>
									<p className="paragraph-primary paragraph-color ">Nuke activation system and extraction mechanics for players to escape.</p>
								</div>
								<div className='path-item'>
									<span className='uppercase paragraph-orange-500 paragraph-medium pb-2'>Patch 5.2</span>
									<h3 className='title-h4 title-color pb-4'>The Final Test</h3>
									<span className='paragraph-medium title-color block'>Release Date: June 20, 2025</span>
									<p className="paragraph-primary paragraph-color ">Endgame balancing, where players face the toughest evolved zombies.</p>
								</div>
							</div>
							<div className='path-image col-span-9 relative visible'>
								<img src="/assets/img/06.jpg"  className='aspect-ratio-img absolute blur-2xl top-0 w-full z-0' alt="" />
								<img src="/assets/img/06.jpg" className='aspect-ratio-img relative rounded-3xl' alt="" />
							</div>
						</div>
					</div>
				</section>
		</div>
		{/* LAST CTA */}
		<footer className="main footer-image ">
			<div className='main py-40'>
				<section className="main-inner-section">
					<div className=''>
						<h1 className="title-h1 title-color pb-3 lg:pb-8 pt-24"><span className='title-h2 block'>Get D.A.W.N </span>on Steam</h1>
						<NewsLetterForm/>

						<div className="wishlist-info flex lg:flex gap-2 ">
							<a target='_black' href="https://store.steampowered.com/agecheck/app/1938500/" className='flex gap-2 items-center'>
								<img src="/brand/steam-logo.svg" alt="Steam icon" className="steam-icon"/>
								<span className='button-font text-xs lg:text-sm  text-[#EDF67D]'>WISHLIST ON STEAM</span>
							</a>
								<span className='paragraph-secondary text-xs lg:text-sm'>Available: Apr 1, 2025</span>
							</div>

					</div>
					<div>
						<p className='paragraph-color text-center pt-32 pb-4'>© 2024 Half Byte Games LLC. All Rights Reserved.</p>
						<div className='flex gap-8 justify-center paragraph-yellow-500'>
							<a target='_black' href="https://x.com/DawnOfficialHQ" className='transition ease-in-out delay-150 hover:scale-110 hover:color-[#F6FF89] duration-300' >X</a>
							<a target='_black' href="https://discord.com/invite/F6f7J357uX" className='transition ease-in-out delay-150 hover:scale-110 hover:color-[#F6FF89] duration-300' >Discord</a>
							<a target='_black' href="https://www.youtube.com/@halfbytegamesllc5419" className='transition ease-in-out delay-150 hover:scale-110 hover:color-[#F6FF89] duration-300' >YouTube</a>
						</div>
					</div>
				</section>
			</div>
			
		</footer>

	</div>
	

	


    </>
  )
}

export default App
