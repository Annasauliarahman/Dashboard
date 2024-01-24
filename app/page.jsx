import Container from "./components/container/container"
import Image from "next/image"

export default function Home() {
  return (
    <>
		<Container>
		
			<div className="rounded-2xl p-5 flex flex-col justify-between relative w-full h-[338px] md:h-[346px] md:w-[576px] lg:w-[650px] bg-amber-50">
				<div>
					<h1 className="text-[2rem] font-bold">Welcome My Dashboard</h1>
					<p className="mt-2 text-l">Watch, Play, Portfolio <br/>It's here</p>
				</div>
				<button className="w-40 h-14 md:w-[235px] lg:w-[265px] rounded-lg text-amber-50 bg-amber-950">Start</button>
				
				<Image
					className={'absolute h-[338px] w-[195px] md:h-[346px] md:w-[172] right-0 top-0'}
                    src={"/2v.png"}
                    height={300}
                    width={200}
                    alt="Lemoll Qyuu"
          />
				
					
			</div>
			
			
			
		</Container>
    </>
  )
}
