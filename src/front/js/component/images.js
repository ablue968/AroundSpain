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
