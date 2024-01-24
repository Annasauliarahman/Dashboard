import Image from "next/image"
import ButtonDashboard from "../comp/buttonSoc"
import IconDash from "../../icon/dashboard"
import IconMember from "../../icon/member"
import IconCourse from "../../icon/course"
import IconContact from "../../icon/contact"
import IconPortfolio from "../../icon/portfolio"


export default function Button () {
    return (
        <>
            <div className="mt-6 sm:hidden md:py-2 mt-2 md:block flex justify-around md:flex-col ">
			
			<h2 className="text-amber-950 font-bold md:hidden lg:block lg:ml-5 mb-2">Social Media</h2>
                
					
				<ButtonDashboard nama="Message">
					<IconMember className={"w-5 h-5 mx-auto lg:ml-2 fill-amber-950"} />
				</ButtonDashboard>
				
				<ButtonDashboard nama="Activity">
					<IconCourse className={"w-5 h-5 mx-auto lg:ml-2 "} />
				</ButtonDashboard>

            </div>
        </>
    )
}

