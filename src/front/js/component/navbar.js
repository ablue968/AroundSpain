import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
			<div className="container-fluid row">
				<a className="navbar-brand col-2" href="#">
					¿ÑOMADA?
				</a>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0" />
					<form className="d-flex col-8">
						<input className="form-control" type="search" placeholder="Ciudad" aria-label="Search" />
						<button className="btn btn-outline-danger" type="submit">
							Search
						</button>
					</form>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 col-2">
						<li className="nav-item">
							<a className="nav-link" href="#">
								ABOUT US
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" aria-disabled="true">
								LOGIN
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
