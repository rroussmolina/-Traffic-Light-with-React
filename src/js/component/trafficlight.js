import React, { useState } from "react";

export const TrafficLights = () => {
	//state
	const [color, setColor] = useState("");
	//variables de seleccion
	let selecRed = "red";
	let selecYellow = "yellow";
	let selecGreen = "green";
	//asignar la clase selected del css a la seleccion del color
	if (color == "red") {
		selecRed = "selected";
	}
	if (color == "yellow") {
		selecYellow = "selected";
	}
	if (color == "green") {
		selecGreen = "selected";
	}

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light " + selecRed}
					onClick={() =>
						color == "red" ? setColor("") : setColor("red")
					}></div>
				<div
					className={"yellow light " + selecYellow}
					onClick={() =>
						color == "yellow" ? setColor("") : setColor("yellow")
					}></div>
				<div
					className={"green light " + selecGreen}
					onClick={() =>
						color == "green" ? setColor("") : setColor("green")
					}></div>
			</div>
		</div>
	);
};
