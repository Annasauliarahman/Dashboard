export default function layout({children}){
	return(
		<>
			<div className="w-[384px] h-[885px] bg-amber-50 hidden lg:block absolute right-8 top-0 p-4">
				{children}
			</div>
		</>
	)
}