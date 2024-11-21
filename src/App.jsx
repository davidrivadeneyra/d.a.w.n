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
						<div className="relative h-12 lg:h-14 w-full md:w-64 rounded-lg bg-white/[0.08] hover:bg-white/[0.1] border border-white/10  flex flex-col px-4 py-2 lg:py-[10px] gap-2 cursor-pointer">
							<label className='text-[#EDF67D] left-4 top-[10px] text-xs lg:text-sm leading-none'>Your email*</label>
							<input className='bg-transparent text-xs lg:text-sm w-full without-ring leading-none' type="email" placeholder="zombie@mail.com" />
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
	<div className='h-60'></div>
		<div className='h-60'></div>
		<div className='h-60'></div>
		<div className='h-60'></div>
		<div className='h-60'></div>
		<div className='h-60'></div>

	


    </>
  )
}

export default App
