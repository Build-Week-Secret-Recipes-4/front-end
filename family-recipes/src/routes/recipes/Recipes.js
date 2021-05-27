import React from "react";
import axios from "axios";

const Recipes = (props) => {
	const logout = () => {
		localStorage.clear();
		props.history.push("/");
	};
	const handleGetRecipes = () => {
		axios
			.get("api")
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div>
				<h1>Hello User</h1>
				<button onClick={logout}>Logout</button>
				<button onClick={handleGetRecipes}>Get Recipes</button>
			</div>
			<div></div>
		</div>
	);
};

export default Recipes;
