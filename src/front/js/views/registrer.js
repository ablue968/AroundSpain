import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { All_countries } from "../resources/all_countries";

export const Register = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [country, setCountry] = useState("");
	const [languages, setLanguages] = useState("");

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
		//console.log(data);
		actions.newUser(data);
	};

	return (
		<div className="container">
			{/*esto no tiene mucho uso por ahora */}
			<h1>{params.id ? "Good to see you again!" : "Hello adventurer! Join us!"}</h1>
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
				<label htmlFor="languages">Languages</label>
				<div className="input-group mb-3 autocomplete-multivalue">
					<ul className="d-flex list-inline ">
						<li>
							<select
								className="custom-select"
								id="languages"
								name="languages"
								value={languages}
								onChange={event => setLanguages(event.target.value)}>
								<option value="DEFAULT">Languages</option>
								<All_countries />
							</select>
							<button type="button" className="btn btn-outline-dark btn-sm">
								go
							</button>
						</li>
						<li>
							you
							<button type="button" className="btn btn-outline-dark btn-sm">
								go
							</button>
						</li>
					</ul>
					<input
						type="text"
						name="languages"
						className="form-control"
						maxLength="15"
						placeholder="Which should I add?"
					/>
				</div>
				{/*---------------------------------------Publicity ----------------------------------------------------*/}
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Send me info please!!
					</label>
				</div>

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
	);
};
