import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../component/post.js";

import { Context } from "../store/appContext";

import "../../styles/home.scss";

export const CityPage = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	const [like, setLike] = useState("far fa-heart text-danger");

	const handleClick = () => {
		if (like === "far fa-heart text-danger") {
			setLike("fas fa-heart text-danger");
			actions.addFav("nombre de ciudad");
		} else {
			setLike("far fa-heart text-danger");
			actions.addFav("nombre de ciudad");
		}
	};
	return (
		<div className="container">
			<h1>
				{params.id}
				.cityName
			</h1>
			<div className="row">
				<div className="col-8 text-center">
					<img src="https://picsum.photos/800/500" />
					<button id="likeButton" onClick={handleClick}>
						<i className={like} />
					</button>
				</div>
				<div className="col-1" />
				<div className="col-3">
					<div className="text-left ">
						<h5>Población</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-left ">
						<h5>Temperatura más alta</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-left">
						<h5>Temperatura más baja</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-left ">
						<h5>Temperatura media</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-left">
						<h5>Caracteristica 5</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-left">
						<h5>Caracteristica 6</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
				</div>
			</div>
			<div className="row-12 post">
				<Post />
			</div>
		</div>
	);
};
