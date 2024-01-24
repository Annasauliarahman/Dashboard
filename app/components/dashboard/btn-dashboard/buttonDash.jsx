import Image from "next/image"
import ButtonDashboard from "../comp/button"
import IconDash from "../../icon/dashboard"
import IconMember from "../../icon/member"
import IconCourse from "../../icon/course"
import IconContact from "../../icon/contact"
import IconPortfolio from "../../icon/portfolio"


export default function Button () {
    return (
        <>
            <div className="mt-2 flex justify-around md:flex-col ">
                
				<ButtonDashboard nama="Dashboard" href="/">
					<IconDash className={"w-5 h-5 mx-auto lg:ml-2 fill-amber-950 group-hover:fill-amber-50"} />
				</ButtonDashboard>
					
				<ButtonDashboard nama="Member" href="/member">
					<IconMember className={"w-5 h-5 mx-auto lg:ml-2 fill-amber-950 group-hover:fill-amber-50"} />
				</ButtonDashboard>
				
				<ButtonDashboard nama="Course" href="/course/reading">
					<IconCourse className={"w-5 h-5 mx-auto lg:ml-2    group-hover:fill-amber-50"} />
				</ButtonDashboard>
				
				<ButtonDashboard nama="Services" href="/service">
					<IconContact className={"w-5 h-5 mx-auto lg:ml-2 fill-amber-950 group-hover:fill-amber-50"} />
				</ButtonDashboard>
				
				<ButtonDashboard nama="Portfolio" href="/portfolio">
					<IconPortfolio className={"w-5 h-5 mx-auto lg:ml-2 fill-amber-950 group-hover:fill-amber-50"} />
				</ButtonDashboard>

            </div>
        </>
    )
}

