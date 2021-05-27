import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Dashboard from "./routes/dashboard/Dashboard";

import Home from "./routes/home/Home";

import Login from "./routes/home/login/Login";

import Register from "./routes/home/register/Register";
import Recipes from "../src/routes/recipes/Recipes";
import PrivateRoute from "../src/routes/PrivateRoute";
import AddRecipes from "./routes/home/addrecipes/AddRecipes";
import EditRecipes from "./routes/editRecipes/EditRecipes";

function App() {
	// const [user, setUser] = useState({});
	return (
		<Switch>
			<PrivateRoute
				path="/account"
				history={useHistory()}
				component={Dashboard}
			/>
			<PrivateRoute path="/recipes/add" component={AddRecipes}>
				{" "}
				<AddRecipes />{" "}
			</PrivateRoute>
			<PrivateRoute to="/recipes/:id/edit" component={EditRecipes} />

			<Route path="/account" component={Dashboard} />
			<Route path="/add" > <AddRecipes/> </Route>
			{/* <PrivateRoute to="/recipes/:id/edit" /> */}

			<Route path="/recipes/:id" />
			<Route path="/recipes" component={Recipes} history={useHistory()} />
			<Route
				path="/login"
				// setUser={setUser}
				history={useHistory()}
				component={Login}
			/>
			<Route path="/register" history={useHistory()} component={Register} />
			<Route exact path="/" component={Home} />
		</Switch>
	);

}

export default App;