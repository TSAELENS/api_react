import { useContext } from "react";
import { tokensContext } from "../provider";

const Home = () => {
	const [state, dispatch] = useContext(tokensContext);

	return (
		<>
			<h1>Home Page</h1>

			{/* <section>
				<h2>Posts</h2>

				{state.blogPosts.map((post, index) => (
					<article key={index} className="post">
						<h3>{post.title}</h3>
						<div className="img-wrapper">
							<img src={`img/${post.image}`} alt={post.title} />
						</div>
						<p>{post.description}</p>
						<p>{post.date}</p>
					</article>
				))}
			</section> */}
		</>
	);
};

export default Home;
