import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const initialForm = {
	name: "",
	quantity: 0,
	unit: "",
};

const Ingredients = (props) => {
	console.log(props);
	const [newIngredient, setNewIngredient] = useState(initialForm);
	const { setForm, form } = props;
	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewIngredient({
			...newIngredient,
			[name]: value,
		});
	};
	const addIngredient = (e) => {
		e.preventDefault();
		setForm({
			...form,
			ingredients: [...props.ingredients, newIngredient],
		});
		setNewIngredient(initialForm);
	};
	return (
		<form onSubmit={addIngredient}>
			<h2>Ingredients</h2>
			<Form.Group size="lg" controlId="ingredients_name">
				<Form.Label>Name:</Form.Label>
				<Form.Control
					type="text"
					value={newIngredient.name}
					onChange={handleChange}
				/>
			</Form.Group>
			<Form.Group size="lg" controlId="ingredients_quantity">
				<Form.Label>quantity:</Form.Label>
				<Form.Control
					type="text"
					value={newIngredient.quantity}
					onChange={handleChange}
				/>
			</Form.Group>
			<Form.Label>Unit:</Form.Label>
			<select name="unit" value={newIngredient.unit} onChange={handleChange}>
				<option>Cups</option>
				<option>Tablespoons</option>
				<option>Teaspoons</option>
				<option>Ounces</option>
				<option>Packages</option>
			</select>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default Ingredients;