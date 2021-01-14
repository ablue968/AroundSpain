import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = () => {
		{
			/*buscar para que muestre error al tener menos de 5 caracteres, quizás con catch error? en la api?*/
		}
		if (username != "") {
			const data = {
				username: username,
				password: password
			};
			console.log(data);
		}
	};

	return (
		<main className="d-flex justify-content-center row mt-5">
			<div className="col-2">
				<h1 className="d-flex justify-content-center mb-3">Login</h1>
				<div className="text-center">
					<h2>Username</h2>
					<input value={username} type="text" onChange={() => setUsername(event.target.value)} />
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
