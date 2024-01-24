import Image from "next/image";


const Dashboard = ({children}) => {
    return (
        //default itu size kecil, sm: size sedang md: size-besar
        <>
            <div className="fixed bottom-0  h-16 w-full bg-gradient-to-t from-amber-100  from-amber-100  md:left-0 md:w-20 md:h-screen md:bg-gradient-to-r md:from-amber-100 lg:w-80  ">
                {/* headline dan logo yang ada di dashboard */}
                <div className="flex items-center gap-2 md:pl-5 md:mb-10 md:py-5">
                    <Image
					className={'hidden md:block'}
                    src={'/icons8-logo-48.png'}
                    height={32}
                    width={32}
                    alt="Lemoll Qyuu"
                    />

                    <h1 className="text-xl font-bold hidden lg:block">Lemoll <span className="inline-block font-extralight">Qyu</span></h1>
                </div>

                {children}
				
            </div>
        </>
    );
}

export default Dashboard;