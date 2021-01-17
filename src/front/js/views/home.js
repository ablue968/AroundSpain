import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";

export const Home = () => {
	const { store, actions } = useContext(Context);

	// useEffect(()=>{
	//     actions.getPlanets();
	// },[]) que pasa si yo pongo [store]?

	const info = () => {
		return console.log("hola");
	};

	return (
		<>
			{/*<Dropdown>      ESTE ES UN BUTON
				<Dropdown.Toggle variant="warning" id="dropdown-basic">
					<i className="fas fa-filter" />
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item eventKey="1">Action</Dropdown.Item>
					<Dropdown.Item eventKey="2">Another action</Dropdown.Item>
					<Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
				</Dropdown.Menu>
            </Dropdown>*/}

			{
				//ESTE ES OTRO BOTON
			}
			<div>
				{["Warning"].map(variant => (
					<SplitButton
						key={variant}
						id={`dropdown-split-variants-"Warning"`}
						variant={variant.toLowerCase()}
						title="Filter">
						<Dropdown.Item eventKey="1">Más habitantes</Dropdown.Item>
						<Dropdown.Item eventKey="2">Menos habitantes</Dropdown.Item>
						<Dropdown.Item eventKey="3">Con playa</Dropdown.Item>
						<Dropdown.Item eventKey="4">Con Montaña</Dropdown.Item>
						<Dropdown.Item eventKey="5">Más frio</Dropdown.Item>
						<Dropdown.Item eventKey="6">Más caluroso</Dropdown.Item>
						<Dropdown.Item eventKey="7" active>
							{" "}
							Esto es un itme activado{" "}
						</Dropdown.Item>
					</SplitButton>
				))}
			</div>

			<div className="container-fluid d-flex justify-content-center row mb-3">
				<h2 className="col-12 text-center">Los más buscados</h2>
				<Link
					to="/city"
					onMouseOver={info}
					className="card col-2"
					style={{ width: "18rem", marginLeft: "2rem", marginTop: "2rem", padding: "0px" }}>
					<img src="https://picsum.photos/id/267/200/200" className="card-img-top" alt="..." />
				</Link>

				<div
					className="card col-2"
					style={{ width: "18rem", marginLeft: "2rem", marginTop: "2rem", padding: "0px" }}>
					<img src="https://picsum.photos/id/277/200/200" className="card-img-top" alt="..." />
				</div>
				<div
					className="card col-2"
					style={{ width: "18rem", marginLeft: "2rem", marginTop: "2rem", padding: "0px" }}>
					<img src="https://picsum.photos/id/267/200/200" className="card-img-top" alt="..." />
				</div>

				<div
					className="card col-2"
					style={{ width: "18rem", marginLeft: "2rem", marginTop: "2rem", padding: "0px" }}>
					<img src="https://picsum.photos/id/277/200/200" className="card-img-top" alt="..." />
				</div>
			</div>
			<h2 className="text-center">Elige el próximo destino</h2>
			<div className="container row">
				<div
					className="card col-2"
					style={{ width: "18rem", marginLeft: "2rem", marginTop: "2rem", padding: "0px" }}>
					<img src="https://picsum.photos/id/267/200/200" className="card-img-top" alt="..." />
				</div>

				<div
					className="card col-2"
					style={{ width: "18rem", marginLeft: "2rem", marginTop: "2rem", padding: "0px" }}>
					<img src="https://picsum.photos/id/277/200/200" className="card-img-top" alt="..." />
				</div>
				<div
					className="card col-2"
					style={{ width: "18rem", marginLeft: "2rem", marginTop: "2rem", padding: "0px" }}>
					<img src="https://picsum.photos/id/267/200/200" className="card-img-top" alt="..." />
				</div>

				<div
					className="card col-2"
					style={{ width: "18rem", marginLeft: "2rem", marginTop: "2rem", padding: "0px" }}>
					<img src="https://picsum.photos/id/277/200/200" className="card-img-top" alt="..." />
				</div>
			</div>
		</>
	);
};

{
	/* <div className="peopleDiv row flex-row flex-nowrap">
                {store.planets.map((planet, index) =>
                    {const {name , climate, population} = planet;
                    return(
                        <div key={index} className="card col-3">
                        <img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <p>Name :{name}</p>
                            <p>Climate :{climate}</p>
                            <p>Population: {population}</p>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-outline-primary">Learn more!</button>
                                <button className="btn btn-outline-warning">♡</button>
                            </div>
                        </div>
                    </div>
                    )}
                )}

            </div> */
}
