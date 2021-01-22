import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export const MyCarousel = () => (
	<Carousel className="mb-3">
		<Carousel.Item interval={3000}>
			<img
				className="d-block mx-auto"
				src="https://res.cloudinary.com/weekendesk/images/s--5pkII89S--/c_fill,f_auto,g_auto,h_400,q_50,w_1920/rljufxzqw8g1atgkjeyo/feria-de-abril-en-sevilla.jpg"
				alt="First slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3>Sevilla</h3>
				<p>Feria de Abril</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<img
				className="d-block mx-auto"
				src="https://www.visitvalencia.com/sites/default/files/styles/listados_full/public/_dsc5403_4.jpg?itok=GUMyvM3v"
				alt="Second slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3>Valencia</h3>
				<p>Fallas</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<img
				className="d-block mx-auto"
				src="https://res.cloudinary.com/weekendesk/images/s--5iWy3B19--/c_fill,f_auto,g_auto,h_400,q_50,w_1920/yitnohdffn3jk5jxcqch/piromusical.jpg"
				alt="Third slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3>Barcelona</h3>
				<p>Fiesta de la Mercé</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<img
				className="d-block mx-auto"
				src="https://eraseunhotel.com/wp-content/uploads/2018/05/san-isidro-2018-programacion-espectaculos-pirotecnicos-retiro.jpg"
				alt="First slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3>Madrid</h3>
				<p>San Isidro</p>
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
