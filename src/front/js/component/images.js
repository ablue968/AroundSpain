import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export const MyCarousel = () => (
	<Carousel className="mb-3">
		<Carousel.Item interval={3000}>
			<img
				className="d-block mx-auto"
				src="https://picsum.photos/seed/picsum/900/400"
				alt="First slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3 />
				<p />
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<img
				className="d-block mx-auto"
				src="https://i.picsum.photos/id/1033/2048/1365.jpg?hmac=zEuPfX7t6U866nzXjWF41bf-uxkKOnf1dDrHXmhcK-Q"
				alt="Second slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3 />
				<p />
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<img
				className="d-block mx-auto"
				src="https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs"
				alt="Third slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3 />
				<p />
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<img
				className="d-block mx-auto"
				src="https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE"
				alt="First slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3 />
				<p />
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
);

// const _ = () => (
// 	<images className="images">
// 		<div className="row">
// 			<div clasName="col-12">
// 				<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
// 					<ol className="carousel-indicators">
// 						<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
// 						<li data-target="#carouselExampleIndicators" data-slide-to="1" />
// 						<li data-target="#carouselExampleIndicators" data-slide-to="2" />
// 					</ol>
// 					<div className="carousel-inner">
// 						<div className="carousel-item active">
// 							<img className="d-block w-100" src="https://picsum.photos/seed/picsum/900/400" />
// 						</div>
// 						<div className="carousel-item">
// 							<img className="d-block w-100" src="https://picsum.photos/id/237/900/400" />
// 						</div>
// 						<div className="carousel-item">
// 							<img className="d-block w-100" src="https://picsum.photos/seed/picsum/900/400" />
// 						</div>
// 					</div>
// 					<a
// 						className="carousel-control-prev"
// 						href="#carouselExampleIndicators"
// 						role="button"
// 						data-slide="prev">
// 						<span className="carousel-control-prev-icon" aria-hidden="true" />
// 						<span className="sr-only">Previous</span>
// 					</a>
// 					<a
// 						className="carousel-control-next"
// 						href="#carouselExampleIndicators"
// 						role="button"
// 						data-slide="next">
// 						<span className="carousel-control-next-icon" aria-hidden="true" />
// 						<span className="sr-only">Next</span>
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	</images>
// );
