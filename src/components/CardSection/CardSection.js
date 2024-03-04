import "./CardSection.css"
import logo from '../../images/Ball_icon.png';
import { React } from "react";


function CardSection({ children, handleGetPokemon}) {
	return (
		<section>
			<div className="card-new-container">
				<div className='card-new' onClick={handleGetPokemon}>
						<p className="card-new-text">Get New</p>
						<button className='card-new-button'>
							<img src={logo} alt="pokeball" className="card-new-button-image"></img>
						</button>
					</div>
			</div>
			<div className="card-items">
				{children}
			</div>
		</section>
	);
}
export default CardSection;