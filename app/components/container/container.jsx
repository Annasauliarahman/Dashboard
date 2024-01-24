"use client";
import {motion, AnimatePresence} from "framer-motion"

export default function Container({children}) {
	return (
		<>
			<div className="p-2 md:ml-20 md:p-0 lg:ml-80">
			<AnimatePresence>
			 <motion.div
			 initial={{opacity: 0, y: 15}}
			 animate={{opacity: 1, y: 0}}
			 exist={{opacity: 0, y: 15}}
			 transition={{delay:0.5}}
			 >
			 
			{children}
			
			</motion.div>
			</AnimatePresence>
			</div>
		</>
	);
}

