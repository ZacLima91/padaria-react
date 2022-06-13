import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../../api";

const ModalEditarProduct = (props) => {
  const [nome, setNome] = useState(props.product);
  console.log(props.id);
  const [preco, setPreco] = useState(props.preco);
  const [descricao, setDescricao] = useState(props.descricao);
  const [foto, setFoto] = useState(props.foto);
  const handleSubmit = async () => {
    const editedPao = {
      nome,
      preco,
      descricao,
      foto,
    };

    const response = await api.put(`update-pao/${props.id}`, editedPao);
    if (response.status === 200) {
      props.getPaes();
      props.handleClick();
      return toast.success("Produto editado com sucesso!");
    } else {
      props.handleClick();
      return toast.error("Erro ao editar produto!");
    }
  };

  return (
    <div className="modal-edit">
      <div className="modal-edit-container">
        <div className="modal-edit-header">
          <h3>
            Editar Produto<br></br> {props.product}
          </h3>
          <button onClick={props.handleClick} className="modal-edit-button">
            X
          </button>
        </div>
        <div className="modal-edit-body">
          <input
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            name="nome"
            type="text"
            placeholder="Nome do Produto"
          />
          <input
            value={preco}
            onChange={(event) => setPreco(event.target.value)}
            name="preco"
            type="number"
            placeholder="Preço do Produto"
          />
          <input
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            name="descricao"
            type="text"
            placeholder="Descrição do Produto"
          />
          <input
            value={foto}
            onChange={(event) => setFoto(event.target.value)}
            name="foto"
            type="text"
            placeholder="URL da Imagem do Produto"
          />
          <button onClick={handleSubmit}>Editar</button>
        </div>
      </div>
    </div>
  );
};
export default ModalEditarProduct;
