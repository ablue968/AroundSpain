import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Post } from "../component/post.js";

import { Context } from "../store/appContext";
import { CollapseInfo } from "../component/collapseInfo";

import "../../styles/home.scss";
import "../../styles/city.scss";
import "../../styles/all.scss";

export const CityPage = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	const [like, setLike] = useState("far fa-heart text-danger");
	const [detail, setDetail] = useState({});
	const [postText, setPostText] = useState();
	const [wheatherInformation, setWheaterInformation] = useState();

	useEffect(
		() => {
			const foo = async () => {
				let title = params.city_name;

				if (store.cities.length != 0) {
					let currentCity = await actions.cityDetail(title);
					setDetail(currentCity);
					actions.postCity(currentCity.id);
					title = title.replace(/\s+/g, "_");
					actions.getCityInfo(title);
				}
			};
			foo();
		},
		[store.cities]
	);

	const postsList = store.posts.map((element, index) => {
		return <Post post={element} key={index} />;
	});

	function onSubmit() {
		const data = {
			cityId: detail.id,
			text: postText
		};
		actions.publishPost(data);
	}

	// const cityInfo = store.cities[params.appContext];

	// const handleClick = () => {
	// 	if (detail.city_name in store.favorites) {
	// 		console.log("ya lo tenemos");
	// 		setLike("fas fa-heart text-danger");
	// 	}
	// 	if (like == "far fa-heart text-danger") {
	// 		setLike("fas fa-heart text-danger");
	// 		actions.addFav(detail.city_name);
	// 	} else {
	// 		setLike("far fa-heart text-danger");
	// 		actions.deleteFav(detail.city_name);
	// 	}
	// };

	//console.log(store.cityWeather);
	//console.log(store.cityInfo);

	return (
		<div className="container p-0 cityMarginTop">
			<h1 className="text-light text-center lobster mb-4">{detail.city_name}</h1>
			<div className="row  mx-auto">
				<div className="col-8 mb-3 p-0">
					<img className="img-thumbnail" src={detail.image} />
					{/* <button id="likeButton" className="card-img-overlay likeButtonCity ml-2" onClick={handleClick}>
						<i className={like} />
					</button> */}
				</div>
				<div className="col-4 mx-auto mb-3">
					<div className="text-light">
						<h5 className="lobster">Population</h5>
						<p>{store.cityWeather.municipio ? store.cityWeather.municipio.POBLACION_MUNI : "loading"}</p>
					</div>
					<div className="text-light">
						<h5 className="lobster">highest temperature</h5>
						<p>{store.cityWeather.temperaturas ? store.cityWeather.temperaturas.max : "loading"}</p>
					</div>
					<div className="text-light">
						<h5 className="lobster">Lowest temperature</h5>
						<p>{store.cityWeather.temperaturas ? store.cityWeather.temperaturas.min : "loading"}</p>
					</div>
					<div className="text-light">
						<h5 className="lobster">Population density</h5>
						<p>
							{store.cityWeather.municipio
								? Math.round(
										store.cityWeather.municipio.POBLACION_MUNI /
											store.cityWeather.municipio.SUPERFICIE
								  ) + " people/m2"
								: "loading"}
						</p>
					</div>
					<div className="text-light">
						<h5 className="lobster">Cost of living</h5>
						<p>{detail.cost_of_living}</p>
					</div>
					<div className="d-flex flex-column-reverse col-12 mb-4">
						{store.token ? (
							<form>
								<div className="form-group">
									<textarea
										className="form-control"
										id="exampleFormControlTextarea1"
										rows="3"
										onChange={event => setPostText(event.target.value)}
									/>
								</div>
								<button type="button" className="btn btn-secondary" onClick={() => onSubmit()}>
									Submit
								</button>
							</form>
						) : null}
					</div>
				</div>
				{/* INFO */}
				<CollapseInfo />

				{/* <div className="container text-light card d-flex row cardBg">
                    <div className=" infoIcon text-center mb-4">
                        <i className="fas fa-info " />
                    </div>
                    <h5>{store.cityInfo}</h5>
                    <a href={store.goWiki} target="_blank" rel="noopener noreferrer">
                        Take me to wiki
                    </a>
                </div> */}

				{/* POST */}

				<div className="container d-flex row">
					<p>Posts</p>
					<div className="col-12 bg-postArea">
						<div className="paraElTituloEnPost" />
						{postsList}
					</div>
				</div>
			</div>
		</div>
	);
};
