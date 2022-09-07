import React from "react";

function bridge({ data }) {
	return (
		<div className="card">
			<div className="card-body">
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-text">
					<h4 className="card-title">{data.name}</h4>
					{data.length}<br />
					{data.built}<br />
					{data.region}<br />
					{data.description}<br />
					{data.feature}
				</div>
			</div>
		</div>
	);
}

export default bridge;
