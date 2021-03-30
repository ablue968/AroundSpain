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
	console.log(localStorage.token);

	const handleShow = toggle => {
		setShow(toggle);
	};

	const allCities = store.cities.slice(0, 4).map((city, index) => {
		return <Card key={index} city={city} />;
	});

	const allCities2 = store.cities.map((city, index) => {
		return <Card key={index} city={city} />;
	});

	return (
		<div onMouseEnter={() => handleShow(true)} onMouseLeave={() => handleShow(false)} ref={confettiRef}>
			{store.token ? <Confetti recycle={false} numberOfPieces={500} width={width} height={height} /> : ""}
			<div className="overCarouselText">
				<h1 className="text-light lobster">Let&#39;s go Around Spain,</h1>
				<h3 className=" text-light lobster">come and be part of our big family!!</h3>
				<div className="spanishCouple">
					<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0Y5NjgxNjsiIGN4PSIyNTYiIGN5PSIyNTUuOTYiIHI9IjI1NS45NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0QxNTQxNTsiIGQ9Ik0zNjAuODg2LDQ4OS41MDZjODkuMDYtNDAuMDU5LDE1MS4wNzMtMTI5LjU1OSwxNTEuMDczLTIzMy41NDZjMC0xOS43MDktMi4yMzMtMzguODk2LTYuNDUtNTcuMzI3DQoJbC0xNDktMTM4LjQ3NUwxMDEuMDI0LDE4NC4zMzFsNjIuMjYzLDYyLjI2M2wtMjUuNzgxLDE5LjUzM0wzNjAuODg2LDQ4OS41MDZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRUZENDhGOyIgZD0iTTQ2MC43NjcsNDA5LjU1MWwtOC41MjQtMTcuNTM5bC0xNTIuOTU0LTM3LjUxN3YtMzAuNzgzaC04Ni41Nzd2MzAuNzgzTDU5Ljc1NywzOTIuMDEzDQoJbC04LjUyNCwxNy41MzlDOTcuOTMyLDQ3MS43MDksMTcyLjI2OSw1MTEuOTE5LDI1Niw1MTEuOTE5UzQxNC4wNjgsNDcxLjcxLDQ2MC43NjcsNDA5LjU1MXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFN0M0NkI7IiBkPSJNNDUyLjI0MywzOTIuMDEzbC0xNTIuOTU0LTM3LjUxN3YtMzAuNzgzbC00My4yNjgsMC4wODNWNTEyYy0wLjI0My0wLjA4My0wLjEzMi0wLjA4MS0wLjAyMS0wLjA4MQ0KCWM4My43MzIsMCwxNTguMDY4LTQwLjIwOSwyMDQuNzY3LTEwMi4zNjhMNDUyLjI0MywzOTIuMDEzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0UwRTBFMDsiIGQ9Ik00NTIuMjQzLDM5Mi4wMTNsLTE0MC40NTgtMzQuNDUyTDI1Niw0MTMuMzQ3bC01NS43ODUtNTUuNzg1TDU5Ljc1NywzOTIuMDEzbC04LjUyNCwxNy41MzkNCglDOTcuOTMyLDQ3MS43MDksMTcyLjI2OSw1MTEuOTE5LDI1Niw1MTEuOTE5czE1OC4wNjgtNDAuMjA5LDIwNC43NjctMTAyLjM2OEw0NTIuMjQzLDM5Mi4wMTN6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQzBDMEMwOyIgZD0iTTQ1Mi4yNDMsMzkyLjAxM0wzMTEuNzg1LDM1Ny41NkwyNTYsNDEzLjM0NmwtMC4zMzMtMC4zMzN2OTguOTAzYzAuMTExLDAsMC4yMjIsMC4wMDIsMC4zMzMsMC4wMDINCgljODMuNzMyLDAsMTU4LjA2OC00MC4yMDksMjA0Ljc2Ny0xMDIuMzY4TDQ1Mi4yNDMsMzkyLjAxM3oiLz4NCjxyZWN0IHg9IjI1OS41OCIgeT0iNDI2LjA4OCIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuODA1OCAwLjU5MjIgLTAuNTkyMiAtMC44MDU4IDc3NS42OTc2IDY3NC42MDk4KSIgc3R5bGU9ImZpbGw6I0E1MDAxODsiIHdpZHRoPSIzNS4zMDUiIGhlaWdodD0iNzYuODE4Ii8+DQo8cmVjdCB4PSIyMTcuMDkzIiB5PSI0MjYuMDczIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjgwNTggMC41OTIyIC0wLjU5MjIgMC44MDU4IDMyMC42NTM0IC00OC44MDk4KSIgc3R5bGU9ImZpbGw6I0QzMTYyODsiIHdpZHRoPSIzNS4zMDUiIGhlaWdodD0iNzYuODE4Ii8+DQo8cmVjdCB4PSIyMzguNDUzIiB5PSI0MTMuMzQ1IiBzdHlsZT0iZmlsbDojRjEzMzNGOyIgd2lkdGg9IjM1LjA5NCIgaGVpZ2h0PSIzNS41ODIiLz4NCjxnPg0KCTxyZWN0IHg9IjI1NiIgeT0iNDEzLjM3NSIgc3R5bGU9ImZpbGw6I0FFMjgzRjsiIHdpZHRoPSIxNy41NSIgaGVpZ2h0PSIzNS41NTciLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQUUyODNGOyIgZD0iTTIzOC40NTEsNTExLjMxOWM1LjgsMC4zOTMsMTEuNjUsMC42LDE3LjU1LDAuNmM1Ljg5OSwwLDExLjc1LTAuMjA3LDE3LjU1LTAuNnYtNjIuMzloLTM1LjA5OQ0KCQl2NjIuMzlIMjM4LjQ1MXoiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM5MzFDMzY7IiBkPSJNMjU2LDQ0OC45Mjl2NjIuOTg3Yy0wLjIyMiwwLTAuMTExLDAuMDAzLDAsMC4wMDNjNS44OTksMCwxMS43NS0wLjIwNywxNy41NS0wLjZ2LTYyLjM5SDI1NnoiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjI1Niw0MTMuMzQ3IDIxNS4wMDYsNDQ0LjI2MyAxNzIuNTI5LDM2NC4zNTEgMjAwLjIxNSwzNTcuNTYgIi8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojRTZFNkU2OyIgcG9pbnRzPSIyNTYsNDEzLjM0NyAyOTYuOTkzLDQ0NC4yNjMgMzM5LjQ3MiwzNjQuMzUxIDMxMS43ODYsMzU3LjU2ICIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRUZENDhGOyIgY3g9IjE1NS44NzYiIGN5PSIyNDMuOTQxIiByPSIyOC44MDMiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0U3QzQ2QjsiIGN4PSIzNTYuMTI0IiBjeT0iMjQzLjk0MSIgcj0iMjguODAzIi8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZFQ0IzOyIgZD0iTTI1Ni45NzIsMzM2LjU4MWgtMS45NDNjLTU0Ljc2MiwwLTk5LjE1Ni00NC4zOTQtOTkuMTU2LTk5LjE1NnYtNzguMTEyDQoJYzAtNTQuNzYyLDQ0LjM5NC05OS4xNTYsOTkuMTU2LTk5LjE1NmgxLjk0M2M1NC43NjIsMCw5OS4xNTYsNDQuMzk0LDk5LjE1Niw5OS4xNTZ2NzguMTEyDQoJQzM1Ni4xMjgsMjkyLjE4NywzMTEuNzM0LDMzNi41ODEsMjU2Ljk3MiwzMzYuNTgxeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0U4RDNBMDsiIGQ9Ik0yNTYsNjUuNTAzTDI1Niw2NS41MDNjLTAuMTEyLDAtMC4yMjIsMC4wMDQtMC4xMjQsMC4wMDR2MjcxLjA3NGgxLjA5Ng0KCWM1NC43NjIsMCw5OS4xNTYtNDQuMzk0LDk5LjE1Ni05OS4xNTZ2LTczLjcyOEMzNTYuMTI4LDEwOS40NjYsMzExLjI5OSw2NS41MDMsMjU2LDY1LjUwM3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjk0NTE7IiBkPSJNMjU1LjY2NywzMDIuOTUyYy0xNi44MTUsMC0zMC40OTUtMTMuNjgtMzAuNDk1LTMwLjQ5NWgxMS45OThjMCwxMC4xOTksOC4yOTgsMTguNDk3LDE4LjQ5NywxOC40OTcNCgljMTAuMTk5LDAsMTguNDk3LTguMjk4LDE4LjQ5Ny0xOC40OTdoMTEuOTk4QzI4Ni4xNjIsMjg5LjI3MiwyNzIuNDgyLDMwMi45NTIsMjU1LjY2NywzMDIuOTUyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Y3Njc0RjsiIGQ9Ik0yNTUuNjY3LDI5MC45NTRjMTAuMTk5LDAsMTguNDk3LTguMjk4LDE4LjQ5Ny0xOC40OTdoMTEuOTk4YzAsMTYuODE1LTEzLjY4LDMwLjQ5NS0zMC40OTUsMzAuNDk1DQoJVjI5MC45NTR6Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiMxQTFBMUE7IiBjeD0iMzEzLjAxMSIgY3k9IjIzOC4xOTIiIHI9IjEwLjgwMSIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojMzMzMzMzOyIgY3g9IjE5OC45ODkiIGN5PSIyMzguMTkyIiByPSIxMC44MDEiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFRkQ0OEY7IiBkPSJNMjYwLjgwMSwyNTIuNTQzSDI1MS4yYy03Ljk1NCwwLTE0LjQwMi02LjQ0OC0xNC40MDItMTQuNDAydi0yLjgxaDM4LjQwNXYyLjgxDQoJQzI3NS4yMDMsMjQ2LjA5NSwyNjguNzU1LDI1Mi41NDMsMjYwLjgwMSwyNTIuNTQzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0U3QzQ2QjsiIGQ9Ik0yNTUuOTM4LDIzNS4zMzJ2MTcuMjExaDQuODYzYzcuOTU0LDAsMTQuNDAyLTYuNDQ4LDE0LjQwMi0xNC40MDJ2LTIuODFIMjU1LjkzOHoiLz4NCjxyZWN0IHg9IjI4OC40OTUiIHk9IjIxMS4zMDciIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiB3aWR0aD0iNDQuNTc3IiBoZWlnaHQ9IjE0Ljg4NiIvPg0KPHJlY3QgeD0iMTc4LjkzMiIgeT0iMjExLjMwNyIgc3R5bGU9ImZpbGw6IzRENEQ0RDsiIHdpZHRoPSI0NC41NzciIGhlaWdodD0iMTQuODg2Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojMzMzMzMzOyIgcG9pbnRzPSIzNjYuMzcyLDE3OS42NiAxNDUuNjI4LDE3OS42NiAxNTUuNDkyLDYwLjE1NyAzNTYuNTA5LDYwLjE1NyAiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiMxQTFBMUE7IiBwb2ludHM9IjM1Ni41MDksNjAuMTU3IDI1NS42NjcsNjAuMTU3IDI1NS42NjcsMTc5LjY2IDM2Ni4zNzIsMTc5LjY2ICIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0YxMzMzRjsiIHBvaW50cz0iMTUwLjEwNywxMjUuNCAxNDUuNjI4LDE3OS42NiAzNjYuMzcyLDE3OS42NiAzNjEuODk0LDEyNS40ICIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0FFMjgzRjsiIHBvaW50cz0iMzYxLjg5NCwxMjUuNCAyNTUuNjY3LDEyNS40IDI1NS42NjcsMTc5LjY2IDM2Ni4zNzIsMTc5LjY2ICIvPg0KPHJlY3QgeD0iMTAxLjAyNCIgeT0iMTQ1LjEwNyIgc3R5bGU9ImZpbGw6IzFBMUExQTsiIHdpZHRoPSIzMDkuOTUxIiBoZWlnaHQ9IjM5LjIyNCIvPg0KPHJlY3QgeD0iMjU1LjY3IiB5PSIxNDUuMTA3IiB3aWR0aD0iMTU1LjMwNSIgaGVpZ2h0PSIzOS4yMjQiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiM0RDRENEQ7IiBwb2ludHM9IjMwNC4xMzEsMzA5LjMyNSAyODAuODMzLDI3Ni41MjUgMjMxLjE2OCwyNzYuNTI1IDIwNy44NywzMDkuMzI1IDE5MS41NjcsMjk3Ljc0NSANCgkyMjAuODQzLDI1Ni41MjggMjkxLjE1OCwyNTYuNTI4IDMyMC40MzQsMjk3Ljc0NSAiLz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBwb2ludHM9IjI5MS4xNTgsMjU2LjUyOCAyNTUuODM4LDI1Ni41MjggMjU1LjgzOCwyNzYuNTI1IDI4MC44MzMsMjc2LjUyNSAzMDQuMTMxLDMwOS4zMjUgDQoJMzIwLjQzNCwyOTcuNzQ1ICIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
					<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzM1Q0NGRjsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAwQkFGRjsiIGQ9Ik01MTIsMjU2YzAtMjIuNjE1LTIuOTQ2LTQ0LjUzOS04LjQ1MS02NS40MjVsLTkwLjY3Ni05MC42NzZsLTI4Mi41NCwxODYuNDM1bC0zLjI4NSw0NC4xMDENCglsMTc3LjAzNywxNzcuMDM3QzQyMi40ODEsNDg0Ljk2Nyw1MTIsMzgwLjk0Niw1MTIsMjU2eiIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRjEzMzNGOyIgY3g9IjM0MC4zMyIgY3k9IjE1OC4xOSIgcj0iOTMuMDYiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMxQTFBMUE7IiBkPSJNNDE4LjkyNCwyMjguNTI3TDQxOC45MjQsMjI4LjUyN2MwLTQ4LjQ3LTM5LjI5Mi04Ny43NjItODcuNzYxLTg3Ljc2MmgtNjguODM3DQoJYzQ4LjQ2OSwwLDg3Ljc2MSwzOS4yOTIsODcuNzYxLDg3Ljc2MWwwLDBjMCw0OC40Ny0zOS4yOTIsODcuNzYyLTg3Ljc2MSw4Ny43NjNoNjguODM3DQoJQzM3OS42MzIsMzE2LjI5LDQxOC45MjQsMjc2Ljk5Nyw0MTguOTI0LDIyOC41Mjd6Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNEMzk3NDY7IiBjeD0iMTU1Ljg2IiBjeT0iMjQzLjk4IiByPSIyOC44MDgiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0M0ODczRDsiIGN4PSIzNTYuMTQiIGN5PSIyNDMuOTgiIHI9IjI4LjgwOCIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGREMwMDsiIGQ9Ik0xNTcuOTQyLDM0NC40NTZjLTIyLjY4LDAtNDEuMTMyLTE4LjQ1Mi00MS4xMzItNDEuMTMyczE4LjQ1Mi00MS4xMzIsNDEuMTMyLTQxLjEzMg0KCXM0MS4xMzIsMTguNDUyLDQxLjEzMiw0MS4xMzJTMTgwLjYyMiwzNDQuNDU2LDE1Ny45NDIsMzQ0LjQ1NnogTTE1Ny45NDIsMjgyLjE5MmMtMTEuNjUyLDAtMjEuMTMyLDkuNDc5LTIxLjEzMiwyMS4xMzINCglzOS40NzksMjEuMTMyLDIxLjEzMiwyMS4xMzJzMjEuMTMyLTkuNDc5LDIxLjEzMi0yMS4xMzJTMTY5LjU5NSwyODIuMTkyLDE1Ny45NDIsMjgyLjE5MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkMwMDA7IiBkPSJNMzU0LjA1OCwzNDQuNDU2Yy0yMi42OCwwLTQxLjEzMi0xOC40NTItNDEuMTMyLTQxLjEzMnMxOC40NTItNDEuMTMyLDQxLjEzMi00MS4xMzINCglzNDEuMTMyLDE4LjQ1Miw0MS4xMzIsNDEuMTMyUzM3Ni43MzcsMzQ0LjQ1NiwzNTQuMDU4LDM0NC40NTZ6IE0zNTQuMDU4LDI4Mi4xOTJjLTExLjY1MiwwLTIxLjEzMiw5LjQ3OS0yMS4xMzIsMjEuMTMyDQoJczkuNDc5LDIxLjEzMiwyMS4xMzIsMjEuMTMyczIxLjEzMi05LjQ3OSwyMS4xMzItMjEuMTMyUzM2NS43MSwyODIuMTkyLDM1NC4wNTgsMjgyLjE5MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEMzk3NDY7IiBkPSJNNDYwLjc5OSw0MDkuNjE2bC04LjUyNS0xNy41NDJsLTE1Mi45NzgtMzcuNTIzdi0zMC43ODhoLTg2LjU5MXYzMC43ODhMNTkuNzI2LDM5Mi4wNzUNCglsLTguNTI1LDE3LjU0MkM5Ny45MDcsNDcxLjc4NCwxNzIuMjU1LDUxMiwyNTYsNTEyUzQxNC4wOTMsNDcxLjc4NSw0NjAuNzk5LDQwOS42MTZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQzQ4NzNEOyIgZD0iTTQ1Mi4yNzQsMzkyLjA3NWwtMTUyLjk3OC0zNy41MjN2LTMwLjc4OGgtNDMuNjI5djE4OC4yMzRjMC4xMTEsMCwwLjIyMiwwLjAwMiwwLjMzMywwLjAwMg0KCWM4My43NDUsMCwxNTguMDkzLTQwLjIxNSwyMDQuNzk5LTEwMi4zODRMNDUyLjI3NCwzOTIuMDc1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0U3QUY1QjsiIGQ9Ik0yNTYuOTcyLDMzNi42MzRoLTEuOTQzYy01NC43NzEsMC05OS4xNzItNDQuNDAxLTk5LjE3Mi05OS4xNzJ2LTc4LjEyNA0KCWMwLTU0Ljc3MSw0NC40MDEtOTkuMTcyLDk5LjE3Mi05OS4xNzJoMS45NDNjNTQuNzcxLDAsOTkuMTcyLDQ0LjQwMSw5OS4xNzIsOTkuMTcydjc4LjEyNA0KCUMzNTYuMTQzLDI5Mi4yMzMsMzExLjc0MywzMzYuNjM0LDI1Ni45NzIsMzM2LjYzNHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEMzk3NDY7IiBkPSJNMjU2LDYyLjkxN2MtMC4xMTIsMC0wLjIyMiwwLjAwNC0wLjMzMywwLjAwNHYyNzMuNzEzaDEuMzA1YzU0Ljc2OCwwLDk5LjE2Ni00NC4zOTYsOTkuMTcxLTk5LjE2Mg0KCXYtNzYuMzQ2QzM1Ni4xNDMsMTA2Ljg4NywzMTEuMzA4LDYyLjkxNywyNTYsNjIuOTE3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzFBMUExQTsiIGQ9Ik0yNTYsNjAuMTY3TDI1Niw2MC4xNjdjLTU1LjMwOCwwLTEwMC4xNDMsNDMuOTctMTAwLjE0Myw5OC4yMXY3Ny4wMzMNCgljMC01NC4yNCw0NC44MzYtOTguMjEsMTAwLjE0My05OC4yMWwwLDBjNTUuMzA4LDAsMTAwLjE0Myw0My45NywxMDAuMTQzLDk4LjIxdi03Ny4wMzNDMzU2LjE0MywxMDQuMTM3LDMxMS4zMDgsNjAuMTY3LDI1Niw2MC4xNjd6DQoJIi8+DQo8cGF0aCBkPSJNMjU2LDYwLjE2N0wyNTYsNjAuMTY3Yy0wLjExMiwwLTAuMjIyLDAuMDA0LTAuMzMzLDAuMDA0djc3LjAzM2MwLjExMSwwLDAuMjIyLTAuMDA0LDAuMzMzLTAuMDA0bDAsMA0KCWM1NS4zMDgsMCwxMDAuMTQzLDQzLjk3LDEwMC4xNDMsOTguMjF2LTc3LjAzM0MzNTYuMTQzLDEwNC4xMzcsMzExLjMwOCw2MC4xNjcsMjU2LDYwLjE2N3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRjY4Mzg7IiBkPSJNMjU2LDg1LjI1N0wyNTYsODUuMjU3Yy01NS4zMDgsMC0xMDAuMTQzLDQzLjk3LTEwMC4xNDMsOTguMjF2MjUuNTIyDQoJYzAtNTQuMjQsNDQuODM1LTk4LjIxLDEwMC4xNDMtOTguMjFsMCwwYzU1LjMwOCwwLDEwMC4xNDMsNDMuOTcsMTAwLjE0Myw5OC4yMXYtMjUuNTIyQzM1Ni4xNDMsMTI5LjIyNiwzMTEuMzA4LDg1LjI1NywyNTYsODUuMjU3eg0KCSIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0FFNEUzMjsiIGQ9Ik0yNTYsODUuMjU3Yy0wLjExMSwwLTAuMjIyLDAuMDA0LTAuMzMzLDAuMDA0djI1LjUyMmMwLjExMSwwLDAuMjIyLTAuMDA0LDAuMzMzLTAuMDA0DQoJYzU1LjMwOCwwLDEwMC4xNDMsNDMuOTcsMTAwLjE0Myw5OC4yMXYtMjUuNTIyQzM1Ni4xNDMsMTI5LjIyNiwzMTEuMzA4LDg1LjI1NywyNTYsODUuMjU3eiIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojMUExQTFBOyIgY3g9IjMxMy4wMiIgY3k9IjIyOS44NSIgcj0iMTAuODAzIi8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBjeD0iMTk4Ljk4IiBjeT0iMjI5Ljg1IiByPSIxMC44MDMiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEODk3NDE7IiBkPSJNMjU2LjM1NCwyNTcuNjQyaC0wLjcwOGMtNi4xNTYsMC0xMS4xNDYtNC45OS0xMS4xNDYtMTEuMTQ2di02LjA2OGgyM3Y2LjA2OA0KCUMyNjcuNSwyNTIuNjUxLDI2Mi41MSwyNTcuNjQyLDI1Ni4zNTQsMjU3LjY0MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDNDg3M0Q7IiBkPSJNMjU1LjY2NywyNDAuNDI4djE3LjIxNGgwLjY4N2M2LjE1NiwwLDExLjE0Ni00Ljk5LDExLjE0Ni0xMS4xNDZ2LTYuMDY4TDI1NS42NjcsMjQwLjQyOA0KCUwyNTUuNjY3LDI0MC40Mjh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjEzMzNGOyIgZD0iTTQ1Mi4yNzQsMzkyLjA3NWwtOTcuMjgtMjMuODYxYy03LjMyOSw0OC4wODctNDguODU5LDg0LjkyOS05OC45OTQsODQuOTI5DQoJcy05MS42NjUtMzYuODQyLTk4Ljk5NS04NC45MjlsLTk3LjI4LDIzLjg2MUw1MS4yLDQwOS42MTdDOTcuOTA3LDQ3MS43ODQsMTcyLjI1NSw1MTIsMjU2LDUxMnMxNTguMDkzLTQwLjIxNSwyMDQuNzk5LTEwMi4zODQNCglMNDUyLjI3NCwzOTIuMDc1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0FFMjgzRjsiIGQ9Ik00NTIuMjc0LDM5Mi4wNzVsLTk3LjI4LTIzLjg2MWMtNy4zMjksNDguMDg3LTQ4Ljg1OSw4NC45MjktOTguOTk0LDg0LjkyOQ0KCWMtMC4xMTIsMC0wLjIyMi0wLjAwNy0wLjMzMy0wLjAwOHY1OC44NjJjMC4xMTEsMCwwLjIyMiwwLjAwMiwwLjMzMywwLjAwMmM4My43NDUsMCwxNTguMDkzLTQwLjIxNSwyMDQuNzk5LTEwMi4zODQNCglMNDUyLjI3NCwzOTIuMDc1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRDg2MzsiIGQ9Ik0zMDYuOTIsMzU2LjQyMkMzMDQuMDAxLDQwMS44NTMsMjgxLjg3Miw0MzguNSwyNTYsNDM4LjVzLTQ4LjAwMS0zNi42NDctNTAuOTItODIuMDc4bC0xOS42OTksNC44MzINCgljMS45NDUsMjMuNDUsOC40MTcsNDUuMjE2LDE4LjczLDYyLjQzM0MyMTcuNTU4LDQ0Ni4xMzYsMjM1Ljk4NSw0NTguNSwyNTYsNDU4LjVzMzguNDQyLTEyLjM2NCw1MS44ODktMzQuODEzDQoJYzEwLjMxMy0xNy4yMTcsMTYuNzg1LTM4Ljk4MywxOC43My02Mi40MzNMMzA2LjkyLDM1Ni40MjJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkZDRjM1OyIgZD0iTTMwNi45MiwzNTYuNDIyQzMwNC4wMDEsNDAxLjg1MywyODEuODcyLDQzOC41LDI1Niw0MzguNWMtMC4xMTIsMC0wLjIyMi0wLjAxMy0wLjMzMy0wLjAxNXYyMC4wMDgNCgljMC4xMTEsMCwwLjIyMiwwLjAwNiwwLjMzMywwLjAwNmMyMC4wMTUsMCwzOC40NDItMTIuMzY0LDUxLjg4OS0zNC44MTNjMTAuMzEzLTE3LjIxNywxNi43ODUtMzguOTgzLDE4LjczLTYyLjQzM0wzMDYuOTIsMzU2LjQyMnoiDQoJLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTMzM0Y7IiBkPSJNMjU1LjY2NywzMDNjLTE2LjgxOCwwLTMwLjUtMTMuNjgyLTMwLjUtMzAuNWgxMmMwLDEwLjIwMSw4LjI5OSwxOC41LDE4LjUsMTguNQ0KCXMxOC41LTguMjk5LDE4LjUtMTguNWgxMkMyODYuMTY3LDI4OS4zMTgsMjcyLjQ4NSwzMDMsMjU1LjY2NywzMDN6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQUUyODNGOyIgZD0iTTI1NS42NjcsMjkxYzEwLjIwMSwwLDE4LjUtOC4yOTksMTguNS0xOC41aDEyYzAsMTYuODE4LTEzLjY4MiwzMC41LTMwLjUsMzAuNUwyNTUuNjY3LDI5MQ0KCUwyNTUuNjY3LDI5MXoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
				</div>
			</div>
			<h1 className="col-12 text-center mt-5 bgtitles text-light lobsterHome">The Most Visited!!</h1>
			<div className="container-fluid row d-flex justify-content-center mx-auto">{allCities}</div>
			<h2 className="text-center text-light mt-5 lobsterHome ">Check all of our cities!!</h2>
			<div className="container-fluid row d-flex justify-content-center mx-auto otherCities">{allCities2}</div>
		</div>
	);
};
