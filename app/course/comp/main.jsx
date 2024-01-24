"use client"

import Image from "next/image"
import {AnimatePresence, motion} from "framer-motion"

const Main = ({children}) => {
	return (
		<>
			<div className="pt-4 bg-amber-50 w-full md:w-[572px] rounded-xl min-h-full pb-20 md:pb-30 ">
					<h1 className="font-bold text-center text-l md:text-xl">Welcome To Your Parent Portal</h1>
					
					<div className="mt-4 mx-auto md:w-[497px] md:h-[321px] rounded-xl">
						<Image
							className={'w-full h-full object-cover rounded-xl'}
							src={'/4h.jpg'}
							height={300}
							width={200}
							alt="Lemoll Qyuu"
						 />
					</div>
					
					{children}

				
					
					
				</div>
				
			
		</>
	)
}

export default Main