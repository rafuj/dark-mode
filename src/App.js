import React, { useEffect, useState } from "react";
import Article from "./Article";
import data from "./data";
const getStorage = () => {
	let theme = "light-theme";
	if (localStorage.getItem("theme")) {
		theme = localStorage.getItem("theme");
	}
	return theme;
};
function App() {
	const [theme, setTheme] = useState(getStorage());

	const toggleFunction = () => {
		if (theme === "light-theme") {
			setTheme("dark-theme");
		} else {
			setTheme("light-theme");
		}
	};

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<main>
			<nav>
				<div className="nav-center">
					<h1>overreacted</h1>
					<button className="btn" onClick={toggleFunction}>
						Toggle
					</button>
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
