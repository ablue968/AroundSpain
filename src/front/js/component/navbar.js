import React, { useContext, useState, useEffect, useRef } from "react";

import { Link, useHistory } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../img/logo8.png";

import { Context } from "../store/appContext";

import "../../styles/navbar.scss";
import "../../styles/all.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [userState, setUserState] = useState("LOGIN");

	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const history = useHistory();
	const searchRef = useRef();

	function searchCities(search) {
		const filteredCities = store.cities.filter(city => {
			return city.city_name.toLowerCase().includes(search.toLowerCase());
		});
		setSearch(search);
		setResults(filteredCities);
	}

	const searchResult = results.map((city, index) => {
		//devuelvo diferentes li segun los city que haya
		return (
			<li
				className="my-1"
				key={index}
				//cuando le de click borro mi busqueda y con history.push busco segun el city_name
				onClick={() => {
					setSearch("");
					history.push(`/city/${city.city_name}`);
				}}>
				{/*Muestrolos nombre buscados */}
				{city.city_name}
			</li>
		);
	});

	return (
		<nav className="navbar navbar-expand-lg navbar d-flex  justify-content-around">
			{" "}
			{/*bg-light*/}
			<div className="container-fluid row">
				<Link to="/">
					<img className="logo" src={logo} />
				</Link>

				<form className="d-flex ml-4">
					{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */}{" "}
					<div ref={searchRef} className="col-6 mx-auto d-none d-md-flex">
						<input
							className="form-control inputSpecial"
							type="text"
							placeholder="Looking for next destination?"
							value={search}
							onChange={e => searchCities(e.target.value)}
							// onBlur={e => setSearch("")}
						/>
						{/*Si mi longitud es menor que dos no voy a entrar a esto, en el momento que sea mayor que dos entro.*/}
						{search.length > 2 && (
							<div className="search-options">
								<ul>
									{/*Recorro de mi store los searcResultos y le pregunto si hay algo y si si entro dentro y si no , no muestro ningun resultado */}

									{searchResult}
								</ul>
							</div>
						)}
					</div>
				</form>
				<div className="d-flex justify-content-end">
					{store.token ? (
						<Dropdown>
							<Dropdown.Toggle className="pl-1 favoriteColor" id="dropdown-basic">
								<i className="fas fa-heart text-danger" />
								<span className="lobster">My Favorites</span>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{store.favorites.map((value, index) => {
									return (
										<Dropdown.Item
											key={index}
											className="dropdown-item d-flex justify-content-between"
											href="#">
											<Link to={`/city/${value}`}>{value}</Link>
											<button
												onClick={() => actions.deleteFav(value)}
												type="btn"
												className="close"
												aria-label="Close">
												<i className="fas fa-minus-circle text-danger" />
											</button>
										</Dropdown.Item>
									);
								})}
								<Dropdown.Item className="d-flex justify-content-center p-0">
									<button
										type="button"
										className="btn btn-info lobster"
										onClick={() => actions.deleteAllFav()}>
										Clear all
									</button>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					) : (
						""
					)}
					<Link to="/about">
						<button type="btn" className="btn btn-outline-light d-flex justify-content-center d-flex ml-2">
							ABOUT US
						</button>
					</Link>
					<Link to="/login">
						<button type="btn" className="btn ml-2 text-light specialColor">
							{store.token ? "Logout" : "Sign In"}
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
