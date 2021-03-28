import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/all.scss";
import "../../styles/cards.scss";

export const Card = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const { city } = props;
	const favoritesInFlux = store.favorites;

	const [background, setBackgroung] = useState("card-img-top");
	const [showCardText, setShowCardText] = useState(false);

	const handleClick = () => {
		console.log(city.city_name);
		favoritesInFlux.includes(city.city_name) ? actions.deleteFav(city.city_name) : actions.addFav(city.city_name);
	};

	const setCardBackground = (effect, text) => {
		setBackgroung(effect);
		setShowCardText(text);
	};

	const info = (
		<>
			<div className="anchor">
				<div
					className="d-flex btn-block cardHeart likeButton"
					onMouseEnter={() => setCardBackground("card-img-top toBlur", true)}
					onMouseOut={() => setCardBackground("card-img-top", false)}
					onClick={() => handleClick(event)}>
					<i
						className={
							favoritesInFlux.includes(city.city_name)
								? "fas fa-heart text-danger"
								: "far fa-heart text-danger"
						}
						title={city.city_name}
					/>
				</div>
			</div>
		</>
	);

	return (
		<div>
			<div
				className="d-flex flex-column topCityCard"
				onMouseOut={() => setCardBackground("card-img-top", false)}
				onMouseEnter={() => setCardBackground("card-img-top toBlur", true)}>
				<img
					src={city.image}
					className={background}
					alt={city.city_name}
					onClick={() => history.push(`/city/${city.city_name}`)}
					onMouseEnter={() => setCardBackground("card-img-top toBlur", true)}
				/>
				{showCardText ? info : ""}
			</div>
			<h5 className="text-light text-center mx-auto lobster overlay-h5">{city.city_name}</h5>
		</div>
	);
};
Card.propTypes = {
	city: PropTypes.object
};
