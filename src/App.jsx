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
					<h1 className="title-h1 pb-3 lg:pb-8 pt-24"><span className='title-h2 block'>Survive the</span>  Darkness</h1>
					<p className="paragraph-primary pb-8">D.A.W.N: Darkness Awaits Withstand the Night is a fast-paced survival game where players face off against a relentless, evolving threat of zombies and reanimated former teammates in an open-ended simulation.</p>
					<h2 className='title-h4 pb-6'>Be the First to Know!</h2>

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
	<main className="section-gradiente-top main-background">
			<section className="main-inner-section">
				<div className=''>
					<h1 className="title-h2 pt-24 pb-20 text-center">Roadmap</h1>
					<h3 className='title-h4 text-[#FAA275] pb-2'>Stage 1</h3>
					<span className='uppercase title-color paragraph-font pb-8 block'>Release Date: October 11, 2024</span>
					<h2 className='title-h3 pb-16'>Foundations of Survival</h2>
					
					<div className='path-section flex flex-col-reverse md:grid md:grid-cols-12 gap-16'>
						<div className='path-list flex flex-col gap-10 col-span-3'>
							<div className='path-item'>
								<span className='uppercase text-[#FAA275] paragraph-font-medium pb-2'>Patch 1.0</span>
								<h3 className='title-h4 pb-4'>First Blood</h3>
								<p className="paragraph-primary">Initial release, core zombie AI (Wretches), and basic player movement/combat.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase text-[#FAA275] paragraph-font-medium pb-2'>Patch 1.1</span>
								<h3 className='title-h4 pb-4'>Adapt or Die</h3>
								<p className="paragraph-primary">Improved zombie AI, pathfinding, and player inventory system.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase text-[#FAA275] paragraph-font-medium pb-2'>Patch 1.2</span>
								<h3 className='title-h4 pb-4'>Breaking Point</h3>
								<p className="paragraph-primary">Zombie variants (fast and tough Wretches) and ranged weapons for players.</p>
							</div>
							<div className='path-item'>
								<span className='uppercase text-[#FAA275] paragraph-font-medium pb-2'>Patch 1.3</span>
								<h3 className='title-h4 pb-4'>Defensive Measures</h3>
								<p className="paragraph-primary">Player traps, simple crafting, and early progression mechanics.</p>
							</div>
						</div>
						<div className='path-image col-span-9 relative visible'>

							<img src="/assets/img/02.jpg"  className='aspect-ratio-img absolute blur-2xl top-0 w-full z-0' alt="" />
							<img src="/assets/img/02.jpg" className='aspect-ratio-img relative rounded-3xl' alt="" />
						</div>
						

					</div>

					


					

				</div>
			</section>

		
	</main>
	

	


    </>
  )
}

export default App
