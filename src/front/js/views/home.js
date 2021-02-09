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
		if (store.loginUser > 0) {
			actions.getLikesUser(store.loginUser);
		}
	}, []);

	useEffect(() => {
		setHeight(confettiRef.current.clientHeight);
		setWidth(confettiRef.current.clientWidth);
	}, []);

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
		<div onMOuseEnter={() => handleShow(true)} onMouseLeave={() => handleShow(false)} ref={confettiRef}>
			{store.token ? <Confetti recycle={false} numberOfPieces={500} width={width} height={height} /> : ""}
			<h1 className="col-12 text-center mt-5 bgtitles text-light lobsterHome">The Most Visited!!</h1>
			<div className="container-fluid row d-flex justify-content-center mx-auto">{allCities}</div>
			<h1 className="text-center text-light mt-5 lobsterHome">Check all of our cities!!</h1>
			<div className="container-fluid row d-flex justify-content-center mx-auto">{allCities2}</div>
		</div>
	);
};
