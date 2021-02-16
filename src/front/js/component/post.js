import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

import "../../styles/post.scss";

export const Post = props => {
	const { post } = props;
	return (
		<div className="mb-1 posted">
			<div className="postConfig">
				<p>{post.user_name}:</p>

				<p>{post.text}</p>
			</div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object
};
