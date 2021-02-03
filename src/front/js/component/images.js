import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../../styles/all.scss";

export const MyCarousel = () => (
	<Carousel>
		<Carousel.Item interval={5000}>
			<img
				className="d-block mx-auto"
				src="https://res.cloudinary.com/weekendesk/images/s--5pkII89S--/c_fill,f_auto,g_auto,h_400,q_50,w_1920/rljufxzqw8g1atgkjeyo/feria-de-abril-en-sevilla.jpg"
				alt="First slide"
				width="90%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3 className="carouselLobster" id="carousel">
					Sevilla
				</h3>
				<p className="carouselLobster">Feria de Abril</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
			<img
				className="d-block mx-auto"
				src="https://www.visitvalencia.com/sites/default/files/styles/listados_full/public/_dsc5403_4.jpg?itok=GUMyvM3v"
				alt="Second slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3 className="carouselLobster" id="carousel">
					Valencia
				</h3>
				<p className="carouselLobster">Fallas</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
			<img
				className="d-block mx-auto"
				src="https://res.cloudinary.com/weekendesk/images/s--5iWy3B19--/c_fill,f_auto,g_auto,h_400,q_50,w_1920/yitnohdffn3jk5jxcqch/piromusical.jpg"
				alt="Third slide"
				width="100%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3 className="carouselLobster" id="carousel">
					Barcelona
				</h3>
				<p className="carouselLobster">Fiesta de la Mercé</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={3000}>
			<img
				className="d-block mx-auto"
				src="https://traductorjurado-madrid.es/wp-content/uploads/2018/02/Plaza-Mayor.jpg"
				alt="First slide"
				width="90%"
				height="400px"
			/>
			<Carousel.Caption>
				<h3 className="carouselLobster" id="carousel">
					Madrid
				</h3>
				<a href="https://es.wikipedia.org/wiki/Plaza_Mayor_de_Madrid" className="carouselLobster">
					Plaza Mayor
				</a>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
);
