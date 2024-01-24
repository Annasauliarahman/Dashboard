import Link from "next/link"

export default function Event () {
	return (
		<>
			<div className="mt-8 flex w-full item-center h-10 justify-between px-5 md:px-10">
				<h1 className="font-bold text-l">Upcoming Event</h1>
				
				<Link className="font-extrabold text-l" href={"#"}>
					News
				</Link>
			</div>
			
		</>
	)
}