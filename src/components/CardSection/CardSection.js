import "./CardSection.css"
import logo from '../../images/Ball_icon.png';
import { getFlavor, getPokemon } from "../../utils/api";
import { React } from "react";

function CardSection({ children }) {
	const handleGetPokemon = () => {
		const max = 1000;
		const randomInteger = Math.floor(Math.random() * max);
		console.log(randomInteger);
		getPokemon(randomInteger)
			.then((data) => {
				console.log(data.species.name)
				console.log(data.sprites.front_default)
				console.log(data.types[0].type.name)
				const type2 = data.types[1] ? data.types[1].type.name : "none"
				console.log(type2)
			})
			.catch((data) => {
				console.error(data);
			});
		getFlavor(randomInteger)
			.then((data) => {
				console.log(data.flavor_text_entries)
				console.log(data.flavor_text_entries[0].flavor_text)
			})
	}
	return (
		<section>
			<div className="card-items">
				<div className='card-new' onClick={handleGetPokemon}>
					<p className="card-new-text">Get New</p>
					<button className='card-new-button'>
						<img src={logo} alt="pokeball" className="card-new-button-image"></img>
					</button>
				</div>
				{children}
			</div>
		</section>
	);
}
export default CardSection;