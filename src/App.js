import React from "react";
import Article from "./Article";
import data from "./data";

function App() {
	return (
		<main>
			<nav>
				<div className="nav-center">
					<h1>overreacted</h1>
					<button className="btn">Toggle</button>
				</div>
			</nav>
			<section className="articles">
				{data.map((item, index) => {
					return <Article key={item.id} {...item} />;
				})}
			</section>
		</main>
	);
}

export default App;
