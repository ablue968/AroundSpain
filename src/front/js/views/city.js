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
	const [detail, setDetail] = useState({});

	useEffect(() => {
		setDetail(actions.cityDetail(params.city_name));
		// actions.postCity(params.id);
	}, []);

	const postsList = store.posts.map((element, index) => {
		return <Post post={element} key={index} />;
	});

	// const cityInfo = store.cities[params.appContext];

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
			<h1 className="text-light">{detail.city_name}</h1>
			<div className="row">
				<div className="col-8 text-center mb-3 p-0">
					<img className="img-thumbnail" src={detail.image} />
					<button id="likeButton" className="card-img-overlay likeButtonCity ml-2" onClick={handleClick}>
						<i className={like} />
					</button>
				</div>
				<div className="col-3">
					<div className="text-light">
						<h5>Population</h5>
						<p>{detail.population}</p>
					</div>
					<div className="text-light">
						<h5>highest temperature</h5>
						<p>{detail.average_highest_temp}</p>
					</div>
					<div className="text-light">
						<h5>Lowest temperature</h5>
						<p>{detail.average_lowest_temp}</p>
					</div>
					<div className="text-light">
						<h5>Population density</h5>
						<p>{detail.population_density}</p>
					</div>
					<div className="text-light">
						<h5>Cost of living</h5>
						<p>{detail.cost_of_living}</p>
					</div>
				</div>
				<div className="d-flex flex-column-reverse col-12">{postsList}</div>
			</div>
		</div>
	);
};
