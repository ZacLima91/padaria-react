import "./style.css";
import { toast } from "react-hot-toast";
import api from "../../../api";

const ModalDeletarProduto = (props) => {
  const deleteProduct = async () => {
    const response = await api.delete(`/delete-pao/${props.id}`);
    if (response.status === 204) {
      toast.success("Produto deletado com sucesso!");
      props.getPaes();
      props.handleClick();
    } else {
      toast.error("Erro ao deletar produto!");
      props.handleClick();
    }
  };
  return (
    <>
      <div className="modal-deletar-produto">
        <div className="modal-deletar-produto-container">
          <div className="modal-deletar-produto-header">
            <h3>Deletar Produto</h3>
          </div>
          <div className="modal-deletar-produto-body">
            <p>Deseja realmente deletar o produto {props.product}?</p>
          </div>
          <div className="modal-deletar-produto-footer">
            <button
              onClick={props.handleClick}
              className="modal-deletar-produto-button"
            >
              Cancelar
            </button>
            <button
              onClick={deleteProduct}
              className="modal-deletar-produto-button"
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalDeletarProduto;
