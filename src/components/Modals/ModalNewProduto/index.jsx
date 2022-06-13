import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../../api";

const ModalNewProduto = (props) => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");

  const handleSubmit = async () => {
    const newProduto = {
      nome,
      preco,
      descricao,
      foto,
    };
    const response = await api.post("/create-pao", newProduto);

    console.log(response);

    if (response.status !== 201) {
      return toast.error("Erro ao criar produto!");
    }

    toast.success("Produto criado com sucesso!");

    props.handleClose();
    props.getPaes();
  };
  return (
    <div className="modal-new-produto">
      <div className="modal-new-produto-header">
        <div className="modal-new-produto-header-title">
          <h3>Novo Produto</h3>
          <button onClick={props.handleClose}>X</button>
        </div>
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
        <button onClick={handleSubmit}>Adicionar</button>
      </div>
    </div>
  );
};

export default ModalNewProduto;
