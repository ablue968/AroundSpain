import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	// useEffect(()=>{
	//     actions.getPlanets();
	// },[]) que pasa si yo pongo [store]?

	return (
		<>
			<div className="container-fluid d-flex justify-content-center row mb-3">
				<h2 className="col-12 text-center">Los más buscados</h2>
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
