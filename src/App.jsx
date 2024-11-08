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
					<p className="descriptions pb-8 color-descripcion">D.A.W.N: Darkness Awaits Withstand the Night is a fast-paced survival game where players face off against a relentless, evolving threat of zombies and reanimated former teammates in an open-ended simulation.</p>
					<h2 className='title-h4 pb-6'>Be the First to Know!</h2>

					<form className='flex gap-4 mb-4'>
						<div className="relative h-16 w-64 rounded-lg bg-white/[0.08] hover:bg-white/[0.1] border border-white/10  flex flex-col px-4 py-[10px] gap-1 cursor-pointer">
							<label className='text-[#EDF67D] left-4 top-[10px] text-sm'>Your email *</label>
							<input className='bg-transparent text-sm w-full without-ring' type="email" placeholder="zombie@mail.com" />
						</div>
						<div className="form-group">
							<button type="submit" className="bg-[#EDF67D] text-[#120D1D] uppercase h-16 w-64 rounded-lg button">Join the Fight!</button>
						</div>	
					</form>

					<div className="wishlist-info flex gap-2">
						<a href="#" className='flex gap-1'>
							<img src="/brand/steam-logo.svg" alt="Steam icon" className="steam-icon"/>
							<span className='button text-[#EDF67D]'>WISHLIST ON STEAM</span>
						
						</a>
							<span>Available: Apr 1, 2025</span>
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
