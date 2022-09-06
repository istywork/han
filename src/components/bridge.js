import React from "react";

function bridge(props) {
	return (
		<div>
			<figure class="figure">
				<img src="..." class="figure-img img-fluid rounded" alt="..." />
				<figcaption class="figure-caption">
					{props.name}
				</figcaption>
			</figure>
		</div>
	);
}

export default bridge;
