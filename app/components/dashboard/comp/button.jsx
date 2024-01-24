import Link from "next/link";

export default function Button ({children, nama, href}) {
	return (
		<>
			<Link href={`${href}`} className="border border-black md:border-none bg-amber-50 md:bg-transparent transition-width my-1 md:mx-auto lg:ml-4 group hover:bg-amber-950 flex items-center w-12 h-10 md:h-10 lg:w-52 lg:hover:w-60 lg:h-8 rounded md:rounded-md lg:rounded-lg duration-300">
					
					{children}
					
					<h2 className="font-semibold mr-12 text-amber-950 group-hover:text-amber-50 hidden lg:block">{nama}</h2>
			</Link>
		</>
	)
}