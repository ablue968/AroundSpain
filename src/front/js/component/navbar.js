import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark d-flex justify-content-around">
			<div className="container-fluid row">
				<Link to="/">
					<h4>AroundSpain</h4>
				</Link>
				<div className="collapse navbar-collapse">
					<form className="d-flex col-8 ml-4">
						<input className="form-control" type="search" placeholder="Ciudad" aria-label="Search" />
						<button className="btn btn-outline-danger" type="submit">
							BUSCAR
						</button>
					</form>
				</div>
				<Dropdown>
					<Dropdown.Toggle variant="danger" id="dropdown-basic">
						<i className="fas fa-heart" />
						{/* <i className="far fa-heart" /> */}
					</Dropdown.Toggle>
					<Dropdown.Menu>
						{store.favorites.map((value, index) => {
							return (
								<Dropdown.Item key={index} className="dropdown-item" href="#">
									{value}
									<button
										onClick={() => actions.deleteList(value)}
										type="btn"
										className="close"
										aria-label="Close">
										x
									</button>
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>
				<Link to="/about">
					<button type="btn" className="btn btn-info d-flex ml-2">
						ABOUT US
					</button>
				</Link>
				<Link to="/login">
					<button type="btn" className="btn btn-success ml-2">
						LOGIN
					</button>
				</Link>
			</div>
		</nav>
	);
};

{
	/*{store.favorites.map((value, index) => {
                            return (
                                <Dropdown.Item  key={index} class="dropdown-item" href="#">
                                    {value}
                                    <button onClick={() => actions.deleteList(value)} type="button" className="close" aria-label="Close">
                                        x
                                    </button>
                                    <Dropdown.Divider />
                                </Dropdown.Item> */
}
{
	/* <Dropdown.Item eventKey="1">Action</Dropdown.Item>
						<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
						<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item eventKey="4">Separated link</Dropdown.Item> */
}
