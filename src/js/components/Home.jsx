import React, { useState } from "react";

const Home = () => {
	const [lista, setLista] = useState([])
	const [tarea, setTarea] = useState("")

	const agregaLista = (e) => {

		e.preventDefault()
		if (tarea.trim() === "") {
			return;
		}

		setLista([...lista, tarea])
		setTarea("");
	}

	const borraLista = (index) => {

		setLista(lista.filter((_, indexLista) => indexLista !== index));
	}

	const actulizaTarea = (valorInput) => {

		setTarea(valorInput.target.value)
	}

	return (
		<form
			onSubmit={agregaLista}
			className=" ">
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
								className="PrimerValor input border-0 shadow-none"
								placeholder="Agrega tu tarea..."
							/>
						</li>
						{lista.length === 0 ? (
							<li className="TareaHTML list-group-item"></li>
						) : (
							lista.map((item, index) => (
								<li
									key={index}
									className="list-group-item d-flex justify-content-between align-items-center"
								>
									{item}

									<button
										type="button"
										className="btn-close"
										aria-label="Close"
										onClick={() => borraLista(index)}
									></button>
								</li>
							))
						)}
						<div className="card-footer text-body-secondary">

							Tienes {lista.length} por hacer

						</div>
					</ul>
				</div>
			</div>
		</form>
	);
};

export default Home;