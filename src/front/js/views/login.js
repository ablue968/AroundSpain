import React, { useState, useContext, useEffect } from "react";

import { Context } from "../store/appContext";

import { Link, useHistory } from "react-router-dom";

import "../../styles/login.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("unocongafas@gmail.com");
	const [password, setPassword] = useState("12345678");

	const history = useHistory();

	const onSubmit = () => {
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

	const test =
		"https://media.istockphoto.com/photos/reconnection-to-nature-outdoor-meditation-and-digital-detox-picture-id1287917469?k=6&m=1287917469&s=612x612&w=0&h=hCFQwviSSlgnF87s8QRRYg8CZEFe9_1koJapj0vHwBU=";

	return (
		<main className="d-flex justify-content-center row">
			<div className="rowSpecial toBackGround">
				<div className="column">
					<img src="https://media.istockphoto.com/photos/young-happy-couple-taking-a-selfie-picture-id1296921239?k=6&m=1296921239&s=612x612&w=0&h=uGXjfBaQXe-I1UrsXPj2Oip0Pl-U6XLVQhRJnCf-jE8=" />
					<img src="https://media.istockphoto.com/photos/debod-at-sunset-temple-picture-id1297090081?k=6&m=1297090081&s=612x612&w=0&h=9-MuY-y3DeBvl04hCNb-5hONMuXtPA98xigui0ZUODM=" />
					<img src="https://media.istockphoto.com/photos/albarracin-historic-village-picture-id1291973714?k=6&m=1291973714&s=612x612&w=0&h=W3GRh-89lRDNJqtGE7yCbnE9aBlpmnoo7X1tp-FWeS8=" />
				</div>
				<div className="column">
					<img src="https://media.istockphoto.com/photos/consuegra-windmills-at-sunset-castilla-la-mancha-spain-picture-id1289275469?k=6&m=1289275469&s=612x612&w=0&h=mTi9MFbjoS5HEOegxViIi56ixL7_4SSf9SdcL7R_7-w=" />
					<img src="https://media.istockphoto.com/photos/barcelona-sunrise-at-the-street-picture-id1297842155?k=6&m=1297842155&s=612x612&w=0&h=nYLT5vRqmjlGotqbajRNrLZL2aWkt9Wt5ZyoYiHIgSI=" />
					<img src="https://media.istockphoto.com/photos/barcena-mayor-cantabria-spain-with-snow-picture-id1295850946?k=6&m=1295850946&s=612x612&w=0&h=rC2kzNGV3ThhmqMrOPBPJCMrpIlOgNyFsclt8y8z0Dg=" />
				</div>
				<div className="column">
					<img src="https://media.istockphoto.com/photos/olive-trees-in-a-olive-grove-picture-id1297447431?k=6&m=1297447431&s=612x612&w=0&h=9WIJARbQnvrrZxr5U1mFDGPXkA_3g00Y07DVP4ezVZM=" />
					<img src="https://media.istockphoto.com/photos/inner-cordoba-mosque-picture-id1291793326?k=6&m=1291793326&s=612x612&w=0&h=JE3veeUoaRula73vIiL4vlHaXAQN1Yn-iv5NGAv9Wk8=" />
					<img src="https://media.istockphoto.com/photos/group-of-friends-sitting-on-the-beach-at-sunsetsunrise-picture-id1297679197?k=6&m=1297679197&s=612x612&w=0&h=11Bh0-RnkTGgFleXhKq7OErWOCrQf355CMHTgF9c-HU=" />
				</div>
				<div className="column">
					<img src="https://media.istockphoto.com/photos/ancient-toledo-spain-picture-id1286887483?k=6&m=1286887483&s=612x612&w=0&h=v3NTUJnNZcFD0JbBAcH_F-ziV4nqQLtNzjEL7aIMgf4=" />
					<img src="https://media.istockphoto.com/photos/potes-cantabria-spain-picture-id1193137449?k=6&m=1193137449&s=612x612&w=0&h=kC5YOZiKucMIeEIc36kU50Y-5NB1b-PGTndxfDWMEPM=" />
					<img src="https://media.istockphoto.com/photos/the-alhambra-in-granada-spain-picture-id1215576111?k=6&m=1215576111&s=612x612&w=0&h=u7kQcrTK2PD3BsczQRKt0MFrPHGX5RT0kduQeccAmQQ=" />
				</div>
			</div>
			<div className="col-2 pt-2 pb-3 loginBackground">
				<h1 className="d-flex justify-content-center mb-3 text-light bg-dark">Login</h1>
				<div className="text-center">
					<h2 className="text-light bg-dark">Email</h2>
					<input value={email} type="text" onChange={() => setEmail(event.target.value)} />
				</div>
				<div className="text-center">
					<h2 className="text-light bg-dark">Password</h2>
					<input value={password} type="password" onChange={() => setPassword(event.target.value)} />
				</div>
				<div className="form-group form-check mt-3">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label text-light bg-dark" htmlFor="exampleCheck1">
						Remember my user!
					</label>
				</div>

				<div className="d-flex justify-content-center mt-2">
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
					<button type="button" onClick={() => onSubmit()} className="btn btn-primary ml-5">
						Submit
					</button>
				</div>
				<Link to="/register">
					<div className="mt-4 text-center ">
						<h5>Come and register!!</h5>
					</div>
				</Link>
			</div>
		</main>
	);
};
