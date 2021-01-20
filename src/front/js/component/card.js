import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

export const Card = getcities => {
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
		<div className="card d-flex flex-column topCityCard" key={id}>
			<Link to="/city" onMouseOver={info}>
				<p>{city_Name}</p>
				<img src={image} className="card-img-top" alt={city_Name} />
			</Link>
			<button id="likeButton" onClick={() => handleClick(event)}>
				<i className={like} title={city_Name} />
			</button>
		</div>
	);
};
