import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Post } from "../component/post.js";

import { Context } from "../store/appContext";

import "../../styles/home.scss";
import "../../styles/city.scss";
import { propTypes } from "react-bootstrap/esm/Image";

export const CityPage = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	const [like, setLike] = useState("far fa-heart text-danger");

	useEffect(() => {
		actions.postCity(params.id);
	}, []);

	const postsList = store.posts.map((element, index) => {
		return <Post post={element} key={index} />;
	});

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
		<div className="container p-0">
			<h1 className="text-light">
				{params.id}
				.cityName
			</h1>
			<div className="row">
				<div className="col-8 text-center mb-3 p-0">
					<img className="img-thumbnail" src="https://picsum.photos/1200/800" />
					<button id="likeButton" className="card-img-overlay likeButtonCity ml-2" onClick={handleClick}>
						<i className={like} />
					</button>
				</div>
				<div className="col-3">
					<div className="text-light">
						<h5>Población</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-light">
						<h5>Temperatura más alta</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-light">
						<h5>Temperatura más baja</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-light">
						<h5>Temperatura media</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-light">
						<h5>Caracteristica 5</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
					<div className="text-light">
						<h5>Caracteristica 6</h5>
						<p>
							city.Caracteristica
							{params.id}
						</p>
					</div>
				</div>
				<div className="d-flex flex-column-reverse col-12">{postsList}</div>
			</div>
		</div>
	);
};
