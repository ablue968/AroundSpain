import React, { useState, useContext, useEffect } from "react";

import { Context } from "../store/appContext";

import { Link, useHistory } from "react-router-dom";

import "../../styles/login.scss";
import { Background_images } from "../resources/backgroundImages";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("unocongafas@gmail.com");
	const [password, setPassword] = useState("12345678");

	const history = useHistory();

	const onSubmit = () => {
		if (email != "") {
			const data = {
				email: email,
				password: password
			};
			console.log(data);
			actions.login(data, () => {
				history.push("/");
			});
		}
	};

	useEffect(() => {
		actions.logOut();
	}, []);

	return (
		<main className="d-flex justify-content-center row">
			<div className="rowSpecial toBackGround">
				<Background_images />
			</div>
			<div className="col-2 pt-2 pb-3 loginBackground">
				<h1 className="d-flex justify-content-center mb-3 text-light bg-dark">Login</h1>
				<div className="text-center">
					<h2 className="text-light bg-dark">Email</h2>
					<input value={email} type="text" onChange={() => setEmail(event.target.value)} />
				</div>
				<div className="text-center">
					<h2 className="text-light bg-dark">Password</h2>
					<input value={password} type="password" onChange={() => setPassword(event.target.value)} />
				</div>
				<div className="form-group form-check mt-3">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label text-light bg-dark" htmlFor="exampleCheck1">
						Remember my user!
					</label>
				</div>

				<div className="d-flex justify-content-center mt-2">
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
					<button type="button" onClick={() => onSubmit()} className="btn btn-primary ml-5">
						Submit
					</button>
				</div>
				<Link to="/register">
					<div className="mt-4 text-center ">
						<h5>Come and register!!</h5>
					</div>
				</Link>
			</div>
		</main>
	);
};
