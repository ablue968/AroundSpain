import React, { useState, useContext } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Context } from "../store/appContext";

export const CollapseInfo = () => {
	const [open, setOpen] = useState(false);
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container text-light card d-flex row cardBg">
				<button
					className=" infoIcon  text-light  text-center mb-4"
					onClick={() => setOpen(!open)}
					aria-controls="example-collapse-text"
					aria-expanded={open}>
					<i className="fas fa-info " />
				</button>
				<Collapse in={open}>
					<div className="row">
						<div id="example-collapse-text col-5">
							<h5 className="pl-5 pr-5">{store.cityInfo}</h5>
							<a
								className="d-flex flex-row-reverse bd-highlight pr-5 lobster"
								href={store.goWiki}
								target="_blank"
								rel="noopener noreferrer">
								Take me to wiki
							</a>
						</div>
					</div>
				</Collapse>
			</div>
		</>
	);
};
