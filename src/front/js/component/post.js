import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

import "../../styles/post.scss";

export const Post = props => {
	const { post } = props;
	return (
		<div className="postConfig">
			<p>
				<strong>{post.user_name}</strong> - <small>{post.created_at}</small>
			</p>
			<p>{post.text}</p>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object
};
