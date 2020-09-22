import React from "react";
import './Sign/Sign.css'

import { Link } from "react-router-dom";

function Welcome() {
	return (
			<div className="welcome">
				<h1>
					Hello,{" "}
					{`${localStorage.getItem("firstName")}   ${ localStorage.getItem("lastName")}`}
				</h1>
				<Link to="/login">
					<button>Exit</button>
				</Link>
			</div>
	);
}

export default Welcome;