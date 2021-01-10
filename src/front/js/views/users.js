import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { All_countries } from "../resources/all_countries";

export const Users = () => {
	const params = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
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
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
				{/*----------------------------------------First Name -------------------------------------------*/}
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						name="firstName"
						placeholder="First name"
						aria-label="First name"
						aria-describedby="basic-addon1"
					/>
				</div>
				{/*------------------------------------------Last Name -----------------------------------------*/}
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						name="lastName"
						placeholder="Last name"
						aria-label="Last name"
						aria-describedby="basic-addon1"
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
						aria-describedby="emailHelp"
					/>
					<small id="emailHelp" className="form-text text-muted">
						We&prime;ll never share your email with anyone else.
					</small>
				</div>
				{/*-------------------------------------Password ---------------------------------------------------*/}
				<div className="input-group mb-3">
					<input
						type="text"
						name="Password"
						className="form-control"
						placeholder="Password"
						aria-label="Password"
						aria-describedby="basic-addon1"
					/>
				</div>
				{/*---------------------------------------Country ----------------------------------------------------*/}
				<div className="input-group mb-3">
					<select className="custom-select" id="inputGroupSelect01" name="countries">
						<option selected>Do you visit us from where? Adventurer</option>
						<All_countries />
					</select>
				</div>
				{/*------------------------------------------languages------------------------------------------------- */}
				<label htmlFor="languages">Languages</label>
				<div className="input-group mb-3 autocomplete-multivalue">
					<ul className="d-flex list-inline ">
						<li>
							hello {/*<-----xq aparece esto?? */}
							<button type="button" className="btn btn-outline-dark btn-sm">
								x
							</button>
						</li>
						<li>
							you
							<button type="button" className="btn btn-outline-dark btn-sm">
								x
							</button>
						</li>
					</ul>
					<input
						type="text"
						name="languages"
						className="form-control"
						maxLength="15"
						placeholder="Which should I add?"
						aria-label="languages"
						aria-describedby="basic-addon1"
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
					<button type="submit" className="btn btn-primary ml-5">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};
