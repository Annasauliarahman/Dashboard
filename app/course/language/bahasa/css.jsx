import Image from "next/image"

export default function Css(){
	return(
		<>
			<div className="flex items-center justify-center mt-4 mx-auto md:w-[497px] md:h-[321px] rounded-xl">
					<Image
					className="w-full h-full object-cover rounded-xl"
						src={"/2h.jpg"}
						height={200}
						width={300}
						alt="Language-image"
					/>
					
				</div>
		</>
	
	
	)


}