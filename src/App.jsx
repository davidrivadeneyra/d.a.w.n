import { useState } from 'react'

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
		  	<header className='h-28 flex justify-center items-center w-full'>
				<a href="#" className='flex justify-center items-center'>
					<img className='inline-block h-[22px]' src="/brand/logo.svg" alt="Logo D.A.W.N" />
				</a>
			</header>
			<section className="main-inner-section">
				<div className='lg:w-[530px] '>
					<h1 className="title-h1 title-color pb-3 lg:pb-8 pt-24"><span className='title-h2 block '>Survive the</span>  Darkness</h1>
					<p className="paragraph-primary paragraph-color pb-8">D.A.W.N: Darkness Awaits Withstand the Night is a fast-paced survival game where players face off against a relentless, evolving threat of zombies and reanimated former teammates in an open-ended simulation.</p>
					<h2 className='title-h4 title-color pb-4'>Be the First to Know!</h2>

					<form className='flex flex-col lg:flex-row gap-4 mb-4'>
						<div className="relative h-12 lg:h-14 w-full md:w-64 rounded-lg bg-white/[0.08] hover:bg-white/[0.1] border border-white/10  flex flex-col px-4 py-2 gap-1 cursor-pointer">
							<label className='text-[#EDF67D] left-4 top-[10px] text-xs lg:text-sm leading-none'>Your email*</label>
							<input className='bg-transparent text-xs lg:text-sm w-full without-ring leading-none text-stone-200' type="email" placeholder="zombie@mail.com" />
						</div>
						<div className="form-group">
							<button type="submit" className="btn">Join the Fight!</button>
						</div>	
					</form>

					<div className="wishlist-info flex lg:flex gap-2 ">
						<a href="#" className='flex gap-2 items-center'>
							<img src="/brand/steam-logo.svg" alt="Steam icon" className="steam-icon"/>
							<span className='button-font text-xs lg:text-sm  text-[#EDF67D]'>WISHLIST ON STEAM</span>
						</a>
							<span className='paragraph-secondary text-xs lg:text-sm'>Available: Apr 1, 2025</span>
						</div>

				</div>
			</section>

		
	</main>
	<main className="main-background">
		<div className='w-full section-gradiente-top'>
			<section className="main-inner-section pb-40">
					<h1 className="title-h2 title-color pt-24 pb-20 text-center">Roadmap</h1>
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
			

		
	</main>
	

	


    </>
  )
}

export default App
