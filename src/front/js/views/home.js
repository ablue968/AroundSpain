import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import "../../styles/all.scss";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";

import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllCities();
	}, []);

	const info = () => {
		console.log("Soy el onMouseOver");
	};

	const allCities = store.cities.slice(0, 4).map((city, index) => {
		return <Card key={index} city={city} />;
	});

	const allCities2 = store.cities.map((city, index) => {
		return <Card key={index} city={city} />;
	});

	return (
		<>
			<div className="container-fluid d-flex justify-content-center row mt-5">
				<h2 className="col-12 text-center text-light mt-5" id="lobster">
					The Most Visited!!
				</h2>
				{allCities}
			</div>
			<h2 className="text-center text-light mt-5" id="lobster">
				Check all of our cities!!
			</h2>
			<div className="container-fluid row d-flex justify-content-center">{allCities2}</div>
		</>
	);
};
