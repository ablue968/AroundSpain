import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

import { All_countries } from "../resources/all_countries";
import { All_Languages } from "../resources/all_languages";

import "../../styles/register.scss";
import "../../styles/all.scss";
import { Background_images } from "../resources/backgroundImages";

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
			history.push("/login");
			//console.log("Estoy dentro de newUser");
		});
	};

	return (
		<main className=" container-fluid d-flex justify-content-center row mx-auto ">
			<div className="rowSpecial toBackGround">
				<Background_images />
			</div>
			<div className="p-4 registerBackground d-flex justify-content-center">
				<div className=" mr-3">
					<h1 className=" text-center text-light lobster helloBox mb-0 ">
						Hello adventurer! &nbsp; Join us!
					</h1>
				</div>
				<form>
					{/*----------------------------------------Username ----------------------------------------------*/}
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text specialColor" id="addon-wrapping">
								<i className="fas fa-user pr-2 text-white" />
							</span>
						</div>
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
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text specialColor" id="addon-wrapping">
								<i className="fas fa-envelope pr-2 text-white" />
							</span>
						</div>
						<input
							type="email"
							name="Email"
							className="form-control"
							placeholder="email@example.com"
							id="exampleInputEmail1"
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<small id="emailHelp" className="form-text text-light input-group mb-3">
						We&prime;ll never share your email with anyone else.
					</small>
					{/*-------------------------------------Password ---------------------------------------------------*/}
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text specialColor" id="addon-wrapping">
								<i className="fas fa-key pr-2 text-white" />
							</span>
						</div>
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
				</form>
				<div className="d-flex flex-column ml-4">
					<Link to="/">
						<button className="btn btn-outline-info btn-lg lobster ">Back home</button>
					</Link>
					<button
						type="button"
						className="btn lobster text-light btn-lg specialColor mt-auto p-2 bd-highlight"
						onClick={() => onSubmit()}>
						Submit
					</button>
				</div>
			</div>
		</main>
	);
};
