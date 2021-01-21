import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../img/Logo.png";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [userState, setUserState] = useState("LOGIN");

	const handlerUserState = () => {
		if (store.token != null) {
			setUserState("LOGOUT");
		} else {
			setUserState("LOGIN");
			console.log("ya hay toquen , hago click y fuera token");
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark d-flex justify-content-around">
			<div className="container-fluid row">
				<Link to="/">
					<h4>AroundSpain</h4>
				</Link>
				<div className="collapse navbar-collapse">
					<form className="d-flex col-8 ml-4">
						<input className="form-control" type="search" placeholder="Ciudad" aria-label="Search" />
						<button className="btn btn-outline-danger" type="submit">
							BUSCAR
						</button>
					</form>
				</div>
				<Dropdown>
					<Dropdown.Toggle variant="danger" id="dropdown-basic">
						<i className="fas fa-heart" />
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favorites.map((value, index) => {
							return (
								<Dropdown.Item
									key={index}
									className="dropdown-item d-flex justify-content-between"
									href="#">
									{value}
									<button
										onClick={() => actions.deleteFav(value)}
										type="btn"
										className="close"
										aria-label="Close">
										x
									</button>
								</Dropdown.Item>
							);
						})}
						<Dropdown.Item className="d-flex justify-content-center p-0">
							<button type="button" className="btn btn-info" onClick={() => actions.deleteAllFav()}>
								Clear all
							</button>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Link to="/about">
					<button type="btn" className="btn btn-info d-flex ml-2">
						ABOUT US
					</button>
				</Link>
				<Link to="/login">
					<button type="btn" className="btn btn-success ml-2" onClick={handlerUserState}>
						{userState}
					</button>
				</Link>
			</div>
		</nav>
	);
};
