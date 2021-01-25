import React from "react";

import "../../styles/all.scss";

export const AboutUs = () => {
	return (
		<>
			<div className="d-flex justify-content-center text-light lobster mt-5">
				<h4>About Us!!</h4>
			</div>
			<div>
				<div className="d-flex justify-content-center mt-5">
					<img src="https://picsum.photos/id/1016/480/250" />
				</div>
				<p className="container text-light mt-5">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
					with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
		</>
	);
};
