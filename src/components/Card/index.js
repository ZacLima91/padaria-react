import "./style.css";
import { useState } from "react";
import ModalDeletarProduto from "../Modals/ModalDeletarProduto/index";
import ModalEditarProduct from "../Modals/ModalEditarProduto";

const Card = (props) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleShowDelete = () => {
    setOpenDeleteModal(!openDeleteModal);
  }
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleShowEdit = () => {
    setOpenEditModal(!openEditModal);
  }
  
  return (
    <>
    <div className="card">
      <div className="card-Name">
        <h2>{props.name}</h2>
      </div>
      <div className="card-image">
        <img className="imagePao" src={props.image} alt={props.name} />
      </div>
      <div className="card-description">
        <p>{props.description}</p>
      </div>
      <div className="card-price">
        <p>R${props.price.toFixed(2)}</p>
        </div>
        <div className="card-buttons">
        <button onClick={handleShowEdit} className="card-button"> editar </button>
        <button className="card-button">+sacola</button>
        <button onClick={handleShowDelete} className="card-button">deletar </button>
      </div>
      </div>
      {openDeleteModal && (<ModalDeletarProduto getPaes={props.getPaes} product={props.name} id={props.id} handleClick={handleShowDelete} />)}
      {openEditModal && (<ModalEditarProduct getPaes={props.getPaes} product={props.name} preco={props.price} descricao={props.description} foto={props.image} id={props.id} handleClick={handleShowEdit} />)}
    </>
  );
};

export default Card;
