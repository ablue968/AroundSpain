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
			<div className="overCarouselText">
				<h1 className="text-light lobster">Let&#39;s go Around Spain </h1>
				<h3 className=" text-light lobster">Come and be part of our big family</h3>
				<img
					className="flag"
					src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0ibTEyIDI3Ljc1MWgxMDR2NzIuNDk3aC0xMDR6IiBmaWxsPSIjZmVkOTUzIi8+PHBhdGggZD0ibTEyIDI3Ljc1MWgxMDR2MTcuODY2aC0xMDR6IiBmaWxsPSIjZDYwYTJlIi8+PHBhdGggZD0ibTEyIDgyLjYxN2gxMDR2MTcuODY2aC0xMDR6IiBmaWxsPSIjZDYwYTJlIi8+PGcgZmlsbD0iIzZmYTQ0YSI+PHBhdGggZD0ibTQwLjU0MiA1My42MzJhMS43NTEgMS43NTEgMCAwIDAgLTIuNDcyLS4xMTJsLTIuODIgMi41OHYtMS4yODdhMS43NSAxLjc1IDAgMCAwIC0zLjUgMHYxLjI4N2wtMi44Mi0yLjU4YTEuNzUgMS43NSAwIDAgMCAtMi4zNiAyLjU4NWwyLjQxOCAyLjIwOGgtLjhhMS43NSAxLjc1IDAgMCAwIC0xLjc1IDEuNzV2MTAuNjI1YTEuNzUgMS43NSAwIDAgMCAxLjI1NyAxLjY3OGwzLjYgMS4wNTlhNy44IDcuOCAwIDAgMCA0LjQxNSAwbDMuNi0xLjA1OWExLjc0OSAxLjc0OSAwIDAgMCAxLjI1Ni0xLjY3OHYtMTAuNjI1YTEuNzQ5IDEuNzQ5IDAgMCAwIC0xLjc1LTEuNzVoLS44bDIuNDE4LTIuMjA4YTEuNzUgMS43NSAwIDAgMCAuMTA4LTIuNDczeiIvPjxwYXRoIGQ9Im0yMi4zNDQgNTguMzEzYTEuNzQ5IDEuNzQ5IDAgMCAwIC0xLjc1IDEuNzV2MTMuMTI1YTEuNzUgMS43NSAwIDAgMCAzLjUgMHYtMTMuMTI1YTEuNzUgMS43NSAwIDAgMCAtMS43NS0xLjc1eiIvPjxwYXRoIGQ9Im00NC42NTYgNTguMzEzYTEuNzUgMS43NSAwIDAgMCAtMS43NSAxLjc1djEzLjEyNWExLjc1IDEuNzUgMCAwIDAgMy41IDB2LTEzLjEyNWExLjc0OSAxLjc0OSAwIDAgMCAtMS43NS0xLjc1eiIvPjwvZz48cGF0aCBkPSJtMzAuMjUgOTguNWgtLjYyNWExLjc1IDEuNzUgMCAwIDAgMCAzLjVoLjYyNWExLjc1IDEuNzUgMCAwIDAgMC0zLjV6Ii8+PHBhdGggZD0ibTExNiAyNmgtMTA0YTEuNzUgMS43NSAwIDAgMCAwIDMuNWgxMDIuMjV2NTEuMzY3aC0xMDAuNXYtMzMuNWg4My42MjVhMS43NSAxLjc1IDAgMCAwIDAtMy41aC04My42MjV2LTguMDlhMS43NSAxLjc1IDAgMCAwIC0zLjUgMHY2NC40NzJhMS43NTEgMS43NTEgMCAwIDAgMS43NSAxLjc1MWgxMC4zNDRhMS43NSAxLjc1IDAgMCAwIDAtMy41aC04LjU5NHYtMTQuMTMzaDEwMC41djE0LjEzM2gtNzcuMjVhMS43NSAxLjc1IDAgMCAwIDAgMy41aDc5YTEuNzUxIDEuNzUxIDAgMCAwIDEuNzUtMS43NXYtNzIuNWExLjc1MSAxLjc1MSAwIDAgMCAtMS43NS0xLjc1eiIvPjxwYXRoIGQ9Im0xMDYuMjUgNDcuMzY3YTEuNzUgMS43NSAwIDAgMCAwLTMuNWgtMS42MjVhMS43NSAxLjc1IDAgMCAwIDAgMy41eiIvPjxwYXRoIGQ9Im00MC41NDIgNTMuNjMyYTEuNzUxIDEuNzUxIDAgMCAwIC0yLjQ3Mi0uMTEybC0yLjgyIDIuNTh2LTEuMjg3YTEuNzUgMS43NSAwIDAgMCAtMy41IDB2MS4yODdsLTIuODItMi41OGExLjc1IDEuNzUgMCAwIDAgLTIuMzYgMi41ODVsMi40MTggMi4yMDhoLS44YTEuNzUgMS43NSAwIDAgMCAtMS43NSAxLjc1djEwLjYyNWExLjc1IDEuNzUgMCAwIDAgMS4yNTcgMS42NzhsMy42IDEuMDU5YTcuOCA3LjggMCAwIDAgNC40MTUgMGwzLjYtMS4wNTlhMS43NDkgMS43NDkgMCAwIDAgMS4yNTYtMS42Nzh2LTEwLjYyNWExLjc0OSAxLjc0OSAwIDAgMCAtMS43NS0xLjc1aC0uOGwyLjQxOC0yLjIwOGExLjc1IDEuNzUgMCAwIDAgLjEwOC0yLjQ3M3ptLTMuNDggMTUuNzQ2LTIuMzQzLjY4OWE0LjMwNyA0LjMwNyAwIDAgMSAtMi40MzkgMGwtMi4zNDMtLjY4OXYtNy41NjVoNy4xMjV6Ii8+PHBhdGggZD0ibTIwLjU5NCA2MC4wNjN2MTMuMTI1YTEuNzUgMS43NSAwIDAgMCAzLjUgMHYtMTMuMTI1YTEuNzUgMS43NSAwIDAgMCAtMy41IDB6Ii8+PHBhdGggZD0ibTQyLjkwNiA2MC4wNjN2MTMuMTI1YTEuNzUgMS43NSAwIDAgMCAzLjUgMHYtMTMuMTI1YTEuNzUgMS43NSAwIDAgMCAtMy41IDB6Ii8+PC9zdmc+"
				/>
			</div>
			<h1 className="col-12 text-center mt-5 bgtitles text-light lobsterHome">The Most Visited!!</h1>
			<div className="container-fluid row d-flex justify-content-center mx-auto">{allCities}</div>
			<h1 className="text-center text-light mt-5 lobsterHome">Check all of our cities!!</h1>
			<div className="container-fluid row d-flex justify-content-center mx-auto">{allCities2}</div>
		</div>
	);
};
