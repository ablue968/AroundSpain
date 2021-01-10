import React, { Component } from "react";

export const Images = () => (
	<images className="images">
		<div className="row">
			<div clasName="col-12">
				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					<ol className="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
						<li data-target="#carouselExampleIndicators" data-slide-to="1" />
						<li data-target="#carouselExampleIndicators" data-slide-to="2" />
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="d-block w-100" src="https://picsum.photos/seed/picsum/900/400" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src="https://picsum.photos/id/237/900/400" />
						</div>
						<div className="carousel-item">
							<img className="d-block w-100" src="https://picsum.photos/seed/picsum/900/400" />
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	</images>
);
