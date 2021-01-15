import React, { useState, useContext } from "react";

import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("unocongafas@gmail.com");
	const [password, setPassword] = useState("12345678");

	const onSubmit = () => {
		{
			/*buscar para que muestre error al tener menos de 5 caracteres, quizás con catch error? en la api?*/
		}
		if (email != "") {
			const data = {
				email: email,
				password: password
			};
			console.log(data);
			actions.login(data);
		}
	};

	return (
		<main className="d-flex justify-content-center row mt-5">
			<div className="col-2">
				<h1 className="d-flex justify-content-center mb-3">Login</h1>
				<div className="text-center">
					<h2>Email</h2>
					<input value={email} type="text" onChange={() => setUsername(event.target.value)} />
				</div>
				<div className="text-center">
					<h2>Password</h2>
					<input
						value={password}
						type="password"
						width="100%"
						onChange={() => setPassword(event.target.value)}
					/>
				</div>
				<div className="form-group form-check mt-3">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Remember my user!
					</label>
				</div>

				<div className="d-flex justify-content-center mt-2">
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
					{/*acá debe haber una ternaria que al evaluar la data, si es true te lanze al inicio y cambie el botón de login por logout*/}
					<button type="button" onClick={() => onSubmit()} className="btn btn-primary ml-5">
						Submit
					</button>
				</div>
				<Link to="/register">
					<div className="mt-4 text-center">
						<h5>Come and register!!</h5>
					</div>
				</Link>
			</div>
		</main>
	);
};
