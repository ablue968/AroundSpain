import React, { useContext, useState, useEffect, useRef } from "react";

import { Link, useHistory } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../img/logo3.png";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [userState, setUserState] = useState("LOGIN");

	const [dropped, setDropped] = useState(false);
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const history = useHistory();
	const searchRef = useRef();
	const dropRef = useRef();

	const handlerUserState = () => {
		if (store.token != null) {
			setUserState("LOGOUT");
		} else {
			setUserState("LOGIN");
			console.log("ya hay toquen , hago click y fuera token");
		}
	};

	function searchCities(search) {
		console.log("Soy el search", store.cities);
		const filteredCities = store.cities.filter(city => {
			console.log("Soy city", city);
			return city.city_name.toLowerCase().includes(search.toLowerCase());
		});
		console.log("Soy Filtered", filteredCities);
		setSearch(search);
		setResults(filteredCities);
	}

	const searchResult = results.map((city, index) => {
		//devuelvo diferentes li segun los city que haya
		return (
			<li
				className="my-1"
				key={index}
				//cuando le de click borro mi busqueda y con history.push busco segun el globaId
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
		<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark d-flex justify-content-around">
			<div className="container-fluid row">
				<Link to="/">
					<img src={logo} />
				</Link>
				<div className="collapse navbar-collapse">
					<form className="d-flex col-8 ml-4">
						{/*<input className="form-control" type="search" placeholder="Ciudad" aria-label="Search" />
						<button className="btn btn-outline-danger" type="submit">
							BUSCAR
						</button>*/}
						{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */}{" "}
						<div ref={searchRef} className="col-6 mx-auto d-none d-md-flex">
							<input
								className="form-control"
								type="text"
								placeholder="search..."
								value={search}
								onChange={e => searchCities(e.target.value)}
								// onBlur={e => setSearch("")}
							/>
							{/*Si mi longitud es menor que dos no voy a entrar a esto, en el momento que sea mayor que dos entro.*/}
							{search.length > 2 && (
								<div className={"search-options"}>
									<ul>
										{/*Recorro de mi store los searcResultos y le pregunto si hay algo y si si entro dentro y si no , no muestro ningun resultado */}

										{searchResult}
									</ul>
								</div>
							)}
						</div>
						<div className="auto" id="auto" />
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
										aria-label="Close"
									/>
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
