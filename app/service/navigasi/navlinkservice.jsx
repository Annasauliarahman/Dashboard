import Link from "next/link"

export default function NavLinkService () {
	return (
		<>
			<div> 
				<Link href="/service/about">
					About
				</Link>
				<Link href="/service/work">
					Work
				</Link>
			</div>
		</>
	)
} 