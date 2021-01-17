import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "../../styles/home.scss";

export const CityPage = () => {
	const params = useParams();
	const [like, setLike] = useState("far fa-heart text-danger");

	const handleClick = () => {
		if (like === "far fa-heart text-danger") setLike("fas fa-heart text-danger");
		else setLike("far fa-heart text-danger");
	};
	return (
		<div className="container">
			<div className="row">
				<div className="row align-items-center">
					<div className="col-2 text-center">
						<img src="https://picsum.photos/900/500" />
						<div id="likeButton" onClick={handleClick}>
							<i className={like} />
						</div>
					</div>
				</div>
			</div>
			<div className="col-6 text-center pr-5">
				<h1>
					{params.id}
					.cityName
				</h1>
			</div>

			<div className="row">
				<div className="col-2 text-center ">
					<h5>Población</h5>
					<p>
						city.Caracteristica
						{params.id}
					</p>
				</div>
				<div className="col-2 text-center ">
					<h5>Temperatura más alta</h5>
					<p>
						city.Caracteristica
						{params.id}
					</p>
				</div>
				<div className="col-2 text-center">
					<h5>Temperatura más baja</h5>
					<p>
						city.Caracteristica
						{params.id}
					</p>
				</div>
				<div className="col-2 text-center ">
					<h5>Temperatura media</h5>
					<p>
						city.Caracteristica
						{params.id}
					</p>
				</div>
				<div className="col-2 text-center">
					<h5>Caracteristica 5</h5>
					<p>
						city.Caracteristica
						{params.id}
					</p>
				</div>
				<div className="col-2 text-center">
					<h5>Caracteristica 6</h5>
					<p>
						city.Caracteristica
						{params.id}
					</p>
				</div>
			</div>
		</div>
	);
};
