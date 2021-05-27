import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

import Ingredients from "../../routes/home/components/Ingredients";

const initialState = {
	id: 1,
	title: "",
	image_url: "url",
	source: "",
	contributor: "erik",
	categories: ["easy", "eggs", "noodles"], //= "easy eggs Noodles".toLowerCase()split(" ")
	description:
		"an easy egg and noodle dish.",
	ingredients: [
		{
			//ingredient_id: 1,
			name: "water",
			quantity: 2,
			unit: "cup",
		},
		{
			//ingredient_id: 666,
			name: "packaged ramen",
			quantity: 1,
			unit: "package",
		},
	],
	steps: [
		{
			step_number: 1,
			instructions:
				"Put water in microwave safe container and heat on high for 5 minutes or until boiling.",
		},
		{
			step_number: 2,
			instructions: "Open flavor packet, empty contents into water, and stir.",
		},
		{
			step_number: 3,
			instructions:
				"Place uncooked noodles into broth, cover, and let sit for 5 minutes.  You may heat it further in microwave, stirring occasionally.",
		},
		{
			step_number: 4,
			instructions: "Allow to cool safely and enjoy.",
		},
	],
};
const EditRecipes = () => {
	const [form, setForm] = useState(initialState);

	const [recipes, setRecipes] = useState([]);
	const [selectedReciepe, setSelectedReciepe] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post(``);
	};

	const change = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	useEffect(() => {
		axios
			.get(`api`)
			.then((res) => {
				setRecipes(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	const StyledDiv = styled.div`
		padding: 10%;
	`;
	return (
		<section id="two">
			<h2>Edit Recipes</h2>
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
			{selectedReciepe ? (
				<Form onSubmit={handleSubmit}>
					<StyledDiv id="main">
						<Form.Group size="lg" controlId="username">
							<Form.Label>Title:</Form.Label>
							<Form.Control
								autoFocus
								type="text"
								value={form.title}
								onChange={change}
							/>
						</Form.Group>
						<Form.Group size="lg" controlId="username">
							<Form.Label>Image:</Form.Label>
							<Form.Control
								type="text"
								value={form.image_url}
								onChange={change}
							/>
						</Form.Group>
						<Form.Group size="lg" controlId="source">
							<Form.Label>Source:</Form.Label>
							<Form.Control type="text" value={form.source} onChange={change} />
						</Form.Group>
						<Form.Group size="lg" controlId="source">
							<Form.Label>Categories:</Form.Label>​
							<Form.Control
								type="text"
								value={form.categories}
								onChange={change}
							/>
						</Form.Group>
						<Form.Group size="lg" controlId="description">
							<Form.Label>Description:</Form.Label>
							<Form.Control
								type="text"
								value={form.description}
								onChange={change}
							/>
						</Form.Group>

						{form.ingredients.map((ing) => (
							<p key={ing.name}>{ing.name}</p>
						))}
						<Ingredients
							ingredients={form.ingredients}
							setForm={setForm}
							form={form}
						/>

						<h2>Directions</h2>
						{initialState.steps.map((step, index) => {
							return (
								<Form.Group key={index} size="lg" controlId="description">
									<Form.Label>Step Number: {step.step_number}</Form.Label>
									<Form.Control type="text" value={step.instructions} />
								</Form.Group>
							);
						})}
						<button onClick={handleSubmit} type="submit">
							Submit
						</button>
					</StyledDiv>
				</Form>
			) : null}
		</section>
	);
};

export default EditRecipes;
