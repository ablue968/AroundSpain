import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

export const Post = props => {
	const { post } = props;
	console.log(post);
	return (
		<Jumbotron className="mb-1">
			<h1>{post.user_first_name}</h1>
			{post.text}
		</Jumbotron>
	);
};

Post.propTypes = {
	post: PropTypes.object
};
