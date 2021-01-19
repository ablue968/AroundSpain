import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export const Post = props => (
	<Jumbotron fluid>
		<Container>
			<h1>Soy un comentario</h1>
			<p />

			<p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
		</Container>
	</Jumbotron>
);
