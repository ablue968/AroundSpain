import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Post } from "../component/post.js";

import { Context } from "../store/appContext";

import "../../styles/home.scss";
import "../../styles/city.scss";
import "../../styles/all.scss";

import { propTypes } from "react-bootstrap/esm/Image";

export const CityPage = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	const [like, setLike] = useState("far fa-heart text-danger");
	const [detail, setDetail] = useState({});

	useEffect(() => {
		setDetail(actions.cityDetail(params.city_name));
<<<<<<< HEAD
=======

>>>>>>> c850abdec9fc60d9124f2102e8876f7767ea36cc
		actions.postCity(params.city_id);
	}, []);

	const postsList = store.posts.map((element, index) => {
		return <Post post={element} key={index} />;
	});

	console.log("SOY EL POSTLIST", postsList);
	console.log("Store del post", store.posts);

	// const cityInfo = store.cities[params.appContext];

	const handleClick = () => {
		if (detail.city_name in store.favorites) {
			console.log("ya lo tenemos");
			setLike("fas fa-heart text-danger");
		}
		if (like == "far fa-heart text-danger") {
			setLike("fas fa-heart text-danger");
			actions.addFav(detail.city_name);
		} else {
			setLike("far fa-heart text-danger");
			actions.deleteFav(detail.city_name);
		}
	};

	return (
		<div className="container p-0">
			<h1 className="text-light text-center col-8" id="lobster">
				{detail.city_name}
			</h1>
			<div className="row">
				<div className="col-8 text-center mb-3 p-0">
					<img className="img-thumbnail" src={detail.image} />
					{/* <button id="likeButton" className="card-img-overlay likeButtonCity ml-2" onClick={handleClick}>
						<i className={like} />
					</button> */}
				</div>
				<div className="col-3">
					<div className="text-light">
						<h5 id="lobster">Population</h5>
						<p>{detail.population}</p>
					</div>
					<div className="text-light">
						<h5 id="lobster">highest temperature</h5>
						<p>{detail.average_highest_temp}</p>
					</div>
					<div className="text-light">
						<h5 id="lobster">Lowest temperature</h5>
						<p>{detail.average_lowest_temp}</p>
					</div>
					<div className="text-light">
						<h5 id="lobster">Population density</h5>
						<p>{detail.population_density}</p>
					</div>
					<div className="text-light">
						<h5 id="lobster">Cost of living</h5>
						<p>{detail.cost_of_living}</p>
					</div>
				</div>
				<div className="d-flex flex-column-reverse col-12">
					{postsList}
					<p>EL POST</p>
				</div>
			</div>
		</div>
	);
};
