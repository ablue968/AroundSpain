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
						<div id="example-collapse-text col-2">
							<p>{store.cityInfo}</p>
							<a
								className="d-flex flex-row-reverse bd-highlight"
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
