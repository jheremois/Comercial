import React from 'react'

const Ecosis = ()=>{
	return(
		<div>
			<div className="bg-white py-16">
				<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
					<p className="text-xl text-center font-semibold uppercase text-gray-600 tracking-wider">
						Nuestro ecosistema de datos
					</p>
					<div className="mt-6 grid grid-cols-2 gap-7 md:grid-cols-4 lg:mt-8">
						<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
							<img src="/polkadot.svg"/>
						</div>
						<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
							<img src="/substrate.svg" alt="substrate"/>
						</div>
						<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
							<img src="/kasama.svg" alt="kasama"/>
						</div>
						<div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
							<img src="/subsocial.svg" alt="kasama"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Ecosis