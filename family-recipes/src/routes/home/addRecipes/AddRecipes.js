import React, { useState } from "react";
import "./AddRecipes.css";
import Form from "react-bootstrap/Form"
import styled from "styled-components";
// import Ingredients from "../home/components/Ingredients";
import { FormLabel } from "react-bootstrap";
import axios from "axios";


import Header from '../components/Header'
import Footer from '../components/Footer'
import Ingredients from "../components/Ingredients";

const StyledDiv = styled.div `
 	padding: 10%;
`

const initialState = {
	id: 1,
	title: "",
	image_url: "something.com",
	source: "",
	contributor: "garrick",
	categories: ["easy", "asian", "noodles"], //= "easy asian Noodles".toLowerCase()split(" ")
	description:
		"A very easy recipe for when you have no time to get your nightly dose of carbs, sodium, and MSG.",
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
const AddRecipes = () => {
	const [form, setForm] = useState(initialState);


	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post(``);

	

	// const [ingredient, setIngredient] = useState({});
	const [recipeEdit, setRecipeEdit] = useState("");
	const [newIngredient, setNewIngredient] = useState({});
	const [recipe, setRecipe] = useState(initialState);
	const login = () => {
		// console.log();
	};

	const addIngredient = (recipe, ingredient) => {
		// console.log(recipes.ingredients);
		setRecipe({
			...recipe,
			ingredient: [...recipe.ingredients, ingredient],
		});
		// recipes.ingredients.setState({
		// 	ingredient_id: Date.now(),
		// 	name: "title",
		// 	quantity: 1,
		// 	unit: "package",
		// });

	};

	const change = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};
	return (
		<>
			<Header />

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
};

export default AddRecipes;