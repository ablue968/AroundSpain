import React, { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/all.scss";
import "../../styles/cards.scss";

{
	/*no está funcionando bien la card, no veo muy bien como resolverlo */
}

export const Card = props => {
	const { store, actions } = useContext(Context);

	const { city } = props;

	const [background, setBackgroung] = useState("card-img-top");
	const [showCardText, setShowCardText] = useState(false);

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

	const setCardBackground = (effect, text) => {
		setBackgroung(effect);
		setShowCardText(text);
	};

	return (
		<>
			<div className="card d-flex flex-column topCityCard">
				<img
					src={city.image}
					className={background}
					alt={city.city_name}
					onMouseEnter={() => setCardBackground("card-img-top toBlur", true)}
					onMouseOut={() => setCardBackground("card-img-top", false)}
				/>
				{showCardText ? (
					<>
						<h5
							className="text-right d-flex lobster "
							onMouseEnter={() => setCardBackground("card-img-top toBlur", true)}
							onMouseOut={() => setCardBackground("card-img-top", false)}>
							{city.city_name}
						</h5>
						<h5
							className="d-flex btn-block"
							id="likeButton"
							onClick={() => handleClick(event)}
							onMouseEnter={() => setCardBackground("card-img-top toBlur", true)}
							onMouseOut={() => setCardBackground("card-img-top", false)}>
							<i className={like} title={city.city_name} />
						</h5>
						<Link to={`/city/${city.city_name}`}>
							<span>take me there!!</span>
						</Link>
					</>
				) : (
					""
				)}
			</div>
		</>
	);
};
Card.propTypes = {
	city: PropTypes.object
};
