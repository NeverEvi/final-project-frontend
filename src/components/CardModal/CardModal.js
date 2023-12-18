import "./CardModal.css";
import React from "react";

const CardModal = ({ selectedCard, selectedFlavor, onClose, onClickout, handleDeleteItem, isSearch }) => {
	const deleteButtonClassName = `modal__deleteButton ${
		isSearch===1 && "modal__element_hidden"
	}`;
	const typeClassName = `modal__info-type ${
		!selectedCard.type2 && "modal__element_hidden"
	}`;
	const typesClassName = `modal__info-types ${
		!selectedCard.type2 && "modal__info-types-single"
	}`;
	
	return (
		<div className={`modal`} onClick={onClickout}>
			<div className="modal__content">
				<button
					type="button"
					onClick={onClose}
					className="modal__closeButton"
				>X</button>
				<img
					src={selectedCard.sprite}
					alt={selectedCard.name}
					className="modal__image"
				/>
				<div className="modal__info">
					<p  className="modal__info-name">{selectedCard.name.toUpperCase()}</p>
                    <div className={typesClassName}>
						<label className="modal__info-type">{selectedCard.type1}</label>
						{selectedCard.type2 ? <label className={typeClassName}>{selectedCard.type2}</label> : <p></p>}
					</div>
					<div className="modal__info-flavor">
						{selectedFlavor}
					</div>
					<p
							className={deleteButtonClassName}
							//onClick={onDelete}
							onClick={() => handleDeleteItem(selectedCard)}
							//id={`${selectedCard._id}`}
						>
							Set Free
						</p>
				</div>
			</div>
		</div>
	);
};
export default CardModal;