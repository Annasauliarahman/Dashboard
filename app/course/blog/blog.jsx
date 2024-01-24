import Layout from "./layout"
import Card from "../comp/cardblog"

const Blog = () => {
	return (
		<>
			<Layout>
				<Card title="Tentang Kamu" txt="Tentang dulu yang pernah terucap" href="/" />
				
				<Card title="Aku" txt="Sebuah pemikiran tanpa mengarah" href="/" />
				
				<Card title="Lakon" txt="Seseorang yang telah memutuskan" href="/" />
			</Layout>
		</>
	)
}

export default Blog;