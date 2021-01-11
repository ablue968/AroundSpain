import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<main className="d-flex justify-content-center row">
			<div className="col-2">
				<h1 className="d-flex justify-content-center">Login</h1>
				<br />
				<h2>Username</h2>
				<input type="text" />
				<h2>Password</h2>
				<input type="password" />
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Remember my user!
					</label>
				</div>

				<div className="d-flex justify-content-center">
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
					<button type="submit" className="btn btn-primary ml-5">
						Submit
					</button>
				</div>
			</div>
		</main>
	);
};
