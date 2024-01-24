import Container from "../components/container/container"
import NavLinkService from "./navigasi/navlinkservice"
const Layout = ({children}) => {
	return (
		<>
			<Container>
				<NavLinkService />
				{children}
			</Container>
		</>
	)
}

export default Layout