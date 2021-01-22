import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/all.scss";

export const Card = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory;
	const { city } = props;

	const [like, setLike] = useState("far fa-heart text-danger");
	const handleClick = event => {
		if (like == "far fa-heart text-danger") {
			setLike("fas fa-heart text-danger");
			actions.addFav(event.target.title);
		} else {
			setLike("far fa-heart text-danger");
			actions.deleteFav(event.target.title);
		}
	};

	return (
		<div className="card d-flex flex-column topCityCard">
			<img
				src={city.image}
				className="card-img-top"
				alt={city.city_name}
				// onClick={() => history.push(`/city/${city.city_name}`)}
			/>
			<div className="card-img-overlay d-flex flex-column  pt-2">
				<p className="text-center" id="lobster">
					{city.city_name}
				</p>
			</div>
			<div
				className="card-img-overlay d-flex flex-column  pt-2"
				onClick={() => history.push(`/city/${city.city_name}`)}>
				<button id="likeButton" onClick={() => handleClick(event)}>
					<i className={like} title={city.city_name} />
				</button>
			</div>
		</div>
	);
};
Card.propTypes = {
	city: PropTypes.object
};
