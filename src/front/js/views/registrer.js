import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

import { All_countries } from "../resources/all_countries";
import { All_Languages } from "../resources/all_languages";

import "../../styles/register.scss";

export const Register = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	// const [username, setUsername] = useState("");
	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [country, setCountry] = useState("");
	// const [languages, setLanguages] = useState("");

	const [username, setUsername] = useState("unocongafas");
	const [firstName, setFirstName] = useState("Alejandro");
	const [lastName, setLastName] = useState("Castaño González");
	const [email, setEmail] = useState("unocongafas@gmail.com");
	const [password, setPassword] = useState("12345678");
	const [country, setCountry] = useState("");
	const [languages, setLanguages] = useState("");

	let history = useHistory();

	const onSubmit = () => {
		const data = {
			username: username,
			firstName: firstName,
			lastName: lastName,
			email: email,
			country: country,
			languages: languages,
			password: password
		};

		actions.newUser(data, () => {
			history.push("/");
			//console.log("Estoy dentro de newUser");
		});
	};

	return (
		<main className=" d-flex justify-content-center row mt-5 mr-0">
			<div className="p-4" id="registerBackground">
				<h1 className=" text-center text-light bg-dark">Hello adventurer! Join us!</h1>
				<br />
				<form>
					{/*----------------------------------------Username ----------------------------------------------*/}
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							name="username"
							placeholder="Username"
							value={username}
							onChange={event => setUsername(event.target.value)}
						/>
					</div>
					{/*----------------------------------------First Name -------------------------------------------*/}
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							name="firstName"
							placeholder="First name"
							value={firstName}
							onChange={event => setFirstName(event.target.value)}
						/>
					</div>
					{/*------------------------------------------Last Name -----------------------------------------*/}
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							name="lastName"
							placeholder="Last name"
							value={lastName}
							onChange={event => setLastName(event.target.value)}
						/>
					</div>
					{/*--------------------------------------------Email --------------------------------------------*/}
					<div className="form-group">
						<input
							type="email"
							name="Email"
							className="form-control"
							id="exampleInputEmail1"
							placeholder="email@example.com"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
						<small id="emailHelp" className="form-text text-muted">
							We&prime;ll never share your email with anyone else.
						</small>
					</div>
					{/*-------------------------------------Password ---------------------------------------------------*/}
					<div className="input-group mb-3">
						<input
							type="password"
							name="Password"
							className="form-control"
							placeholder="Password"
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					{/*---------------------------------------Country ----------------------------------------------------*/}
					<div className="input-group mb-3">
						<select
							className="custom-select"
							id="inputGroupSelect01"
							name="countries"
							value={country}
							onChange={event => setCountry(event.target.value)}>
							<option value="DEFAULT">Do you visit us from where? Adventurer</option>
							<All_countries />
						</select>
					</div>
					{/*------------------------------------------languages------------------------------------------------- */}
					<div className="input-group mb-3">
						<select
							data-placeholder="Choose a Language..."
							className="custom-select"
							id="languages"
							name="languages"
							value={languages}
							onChange={event => setLanguages(event.target.value)}>
							<option value="DEFAULT">What language do you speak?</option>
							<All_Languages />
						</select>
					</div>
					{/*---------------------------------------Publicity ----------------------------------------------------*/}
					{/* creo que podemos borrar esto JP
                    <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                    Send me info please!!
                    </label>
                </div>*/}

					{/*preguntar acá la opción del avatar---> https://getbootstrap.com/docs/4.4/components/forms/#form-controls // https://getbootstrap.com/docs/4.4/components/input-group/#custom-file-input*/}

					<div className="d-flex justify-content-center">
						<Link to="/">
							<button className="btn btn-primary">Back home</button>
						</Link>
						<button type="button" className="btn btn-primary ml-5" onClick={() => onSubmit()}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};
