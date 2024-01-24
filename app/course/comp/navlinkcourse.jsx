import Link from "next/link"
export default function navlink (){
	
	return (
		<>
			<div className="h-[42px] mt-8 md:mt-5 w-full flex justify-around items-center">
						<div className="w-1/2 flex justify-between">
							<Link href={"/course/reading"} className="font-extralight hover:border-b border-amber-950">Reading</Link>
							<Link href={'/course/story'} className="font-extralight hover:border-b border-amber-950">Story</Link>
							<Link href={'/course/running'} className="font-extralight hover:border-b border-amber-950">Running</Link>
						</div>
						
						<Link href={''} className="font-reguler">News</Link>
			</div>

			
		</>
	)
}