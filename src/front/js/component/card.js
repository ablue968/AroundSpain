import React from "react";
import Card from "react-bootstrap/Card";

export const Cards = () =>
	["Light"].map((variant, idx) => (
		<Card
			bg={variant.toLowerCase()}
			key={idx}
			text={variant.toLowerCase() === "light" ? "dark" : "white"}
			style={{ width: "18rem" }}
			className="mb-2">
			<Card.Header>Header</Card.Header>
			<Card.Body>
				<Card.Title>{variant} Card Title </Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
			</Card.Body>
		</Card>
	));
