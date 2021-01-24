import React, { useContext, useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import "../../styles/all.scss";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";

import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [height, setHeight] = useState(null);
	const [width, setWidth] = useState(null);
	const [show, setShow] = useState(null);
	const confettiRef = useRef(null);

	useEffect(() => {
		actions.getAllCities();
	}, []);

	useEffect(() => {
		setHeight(confettiRef.current.clientHeight);
		setWidth(confettiRef.current.clientWidth);
	});

	const handleShow = toggle => {
		setShow(toggle);
	};

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
		<div className="mt5">
			<div
				className="container-fluid d-flex justify-content-center row mx-auto"
				onMOuseEnter={() => handleShow(true)}
				onMouseLeave={() => handleShow(false)}
				ref={confettiRef}>
				<h2 className="col-12 text-center mt-5 bgtitles text-light lobster">The Most Visited!!</h2>
				{allCities}
			</div>
			<h2 className="text-center text-light mt-5 lobster">Check all of our cities!!</h2>
			<div
				className="container-fluid row d-flex justify-content-center"
				onMOuseEnter={() => handleShow(true)}
				onMouseLeave={() => handleShow(false)}
				ref={confettiRef}>
				{allCities2}
			</div>
			<Confetti recycle={show} numberOfPieces={200} width={width} height={height} />
		</div>
	);
};
