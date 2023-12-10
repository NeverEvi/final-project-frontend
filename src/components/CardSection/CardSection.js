function CardSection({ children }) {
	return (
		<section>
			<div className="card-items">{children}</div>
		</section>
	);
}
export default CardSection;