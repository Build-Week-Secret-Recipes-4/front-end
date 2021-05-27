import React, { useState, useEffect } from "react";
import axios from "axios";

const Favorites = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios
			.get(`api`)
			.then((res) => {
				console.log(res.data);
				setRecipes(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<section id="two">
			<h2>Our Favorite Recipes</h2>
			<div className="row">
				{recipes.map((recipe) => {
					return (
						<article key={recipe.id} className="col-6 col-12-xsmall work-item">
							<a href="/login" className="image fit thumb">
								<img src={recipe.image_url} alt="" />
							</a>
							<h3>{recipe.title}</h3>
							<p>{recipe.description}</p>
						</article>
					);
				})}
			</div>
			<ul className="actions">
				<li>
					<a href="/login" className="button">
						More Recipes
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Favorites;
