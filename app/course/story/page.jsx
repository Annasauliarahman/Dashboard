"use client";
import Image from "next/image"
import {motion, AnimatePresence} from "framer-motion"

export default function Story() {
	return (
		<>
		<AnimatePresence>
						 <motion.div
						 initial={{opacity: 0, y: 20}}
						 animate={{opacity: 1, y: 0}}
						 exist={{opacity: 0, y: 20}}
						 transition={{delay:0.5}}
						 >
						 
							<div className="p-5 md:p-10 md:flex md:items-center md:justify-between">
										<div className="mb-[20px] md:mb-[0px] w-full h-[215px] md:w-[189px] md:h-[264px]">
											<Image
												className={"w-full h-full object-cover rounded-xl"}
												src={'/4h.jpg'}
												height={400}
												width={200}
												alt="Lemoll Qyuu"
											/>
										</div>
										<div className="flex flex-col justify-between gap-1">
											<div className="mb-[20px] md:mb-[0px] w-full h-[215px] md:w-[298px] md:h-[127px]">
												<Image
													className={"w-full h-full object-cover rounded-xl"}
													src={'/1v.jpg'}
													height={200}
													width={400}
													alt="Lemoll Qyuu"
												/>
											</div>
											<div className="w-full h-[215px] md:w-[298px] md:h-[127px]">
												<Image
													className={"w-full h-full object-cover rounded-xl"}
													src={'/3h.jpg'}
													height={200}
													width={400}
													alt="Lemoll Qyuu"
												/>
											</div>
										</div>
							</div>
							
						
						</motion.div>
		</AnimatePresence>
			
		</>
	)
}