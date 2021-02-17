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

	const onLogin = () => {
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
		<main className=" container-fluid d-flex justify-content-center row mx-auto">
			<div className="rowSpecial toBackGround">
				<Background_images />
			</div>
			<div className="pt-2 pb-3 text-light signInBackground">
				<div className="signInMainColor">
					<h1 className=" pl-3 mb-5 text-light lobster">Sign in</h1>
					<div className="mt-4">
						<div className="input-group flex-nowrap">
							<div className="input-group-prepend">
								<span className="input-group-text specialColor" id="addon-wrapping">
									<i className="fas fa-user pr-2 text-white" />
								</span>
							</div>
							<input
								value={email}
								type="text"
								className="form-control "
								placeholder="Email"
								aria-label="Email"
								aria-describedby="addon-wrapping"
								onChange={() => setEmail(event.target.value)}
							/>
						</div>
					</div>
					<div className="mt-4">
						<div className="input-group flex-nowrap">
							<div className="input-group-prepend">
								<span className="input-group-text specialColor" id="addon-wrapping">
									<i className="fas fa-key pr-2 text-white" />
								</span>
							</div>
							<input
								value={password}
								type="password"
								className="form-control "
								placeholder="Password"
								aria-label="Password"
								aria-describedby="addon-wrapping"
								onChange={() => setPassword(event.target.value)}
							/>
						</div>
					</div>
					<div className="d-flex justify-content-center mt-5">
						<Link to="/">
							<button className="btn btn-outline-info btn-lg lobster">Back home</button>
						</Link>
						<button
							type="button"
							onClick={() => onLogin()}
							className="btn ml-5 lobster text-light btn-lg specialColor ">
							Login
						</button>
					</div>
					<div className=" px-auto text-center text-light lobster">
						<h5 className="registerStyle">
							Not a member yet?. &nbsp;
							<Link to="/register" style={{ textDecoration: "none" }}>
								Come and register!!
							</Link>
						</h5>
					</div>
				</div>
			</div>
		</main>
	);
};
