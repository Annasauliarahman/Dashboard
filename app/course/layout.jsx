"use client"
import Container from "../components/container/container"
import Main from "./comp/main"
import NavLinkCourse from "./comp/navlinkcourse"
import Language from "./language/language"
import Event from "./comp/event"

import Blog from "./blog/blog"
 




const Layout = ({children}) => {
	return (
		<>
			
				<Container>
					<Main> 
						<NavLinkCourse />
						
					
								{children}
						<Language />
						
						<Event />
					</Main>
					
					
					
				</Container>
				<Blog>
				
				</Blog>
			
		</>
	)
}

export default Layout