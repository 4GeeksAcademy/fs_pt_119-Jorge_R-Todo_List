import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component - 

// Necesitare 2 hoks (valor y actualizador)
const Home = () => {
	const [lista, setLista] = useState([])
	const [tarea, setTarea] = useState("")

	const agregaLista = (e) => {
		// coger valor taera y lo añadir a usesstate lista
		e.preventDefault()

		if (tarea.trim() === "") {
			return;
		}

		setLista([...lista, tarea])
		console.log([lista]);
		setTarea("");

	}

	const actulizaTarea = (valorInput) => {
		// actulaizar la tarea
		console.log(valorInput.target.value);
		setTarea(valorInput.target.value)

	}
	// hacer el formulario con  onsumbit en la etiqueta que abre
	return (
		<form
			onSubmit={agregaLista}
			className="">
			<div className="card mx-auto">
				<div className="card-body">
					<h1>
						Lista To-Do
					</h1>
					<ul className="list-group list-group-flush">
						<li className="list-group-item d-flex align-items-center justify-content-between">
							<input
								onChange={actulizaTarea}
								value={tarea}
								type="text"
								className="input border-0 shadow-none" />
						</li>
						{lista.length === 0
							? <li className="list-group-item"></li>

							: lista.map((item, index) => (
								<li key={index} className="TareaHTML list-group-item">
									{item}
									<button 
									type="button" 
									class="btn-close" 
									data-bs-dismiss="TareaHTML" 
									aria-label="Close">
										
									</button>
								</li>
							))
						}
						<li>
							<div className="card-footer text-body-secondary">
								 Tienes {lista.length} por hacer
								
							</div>
						</li>
					</ul>
				</div>
			</div>
		</form>
	);
};

export default Home;