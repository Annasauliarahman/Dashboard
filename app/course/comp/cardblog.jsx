import Link from "next/link"
export default function CardBlog ({title, txt, href}){
	return (
		<>
			<div className="relative bg-gradient-to-t from-amber-300  w-full h-[172px] rounded-xl">
			<div className="p-4  absolute bottom-0 w-full">
				<h1 className="font-extrabold text-xl font-amber-950">{title}</h1>
				<p className="font-amber-950">{txt}</p>
				<Link href={`${href}`} className="font-amber-950 font-light text-l">
					<p>See All</p>
				</Link>
			</div>
			</div>
		</>
	
	
	)
}