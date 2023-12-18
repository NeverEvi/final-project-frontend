//import "./CardModal.css";
import React, { useContext } from "react";

const CardModal = ({ selectedCard, flavor, onClose, onClickout, onDelete }) => {
	//const deleteButtonClassName = `modal__deleteButton ${
	//	!isOwn && "modal__deleteButton_hidden"
	//}`;
	return (
		<div className={`modal`} onClick={onClickout}>
			<div className="modal__content">
				<button
					type="button"
					onClick={onClose}
					className="modal__closeButton"
				></button>
				<img
					src={selectedCard.sprite}
					alt={selectedCard.name}
					className="modal__image"
				/>
				<div className="modal__info">
					<div className="modal__info-name">
						{selectedCard.name}
						<p
							className="modal__deleteButton"//{deleteButtonClassName}
							onClick={onDelete}
							id={`${selectedCard._id}`}
						>
							Set Free
						</p>
					</div>
                    <div>{selectedCard.type1} {selectedCard.type2}</div>
					<div>{flavor}</div>
				</div>
			</div>
		</div>
	);
};
export default CardModal;