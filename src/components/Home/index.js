import Card from "../Card";
import "./style.css";
import { useState } from "react";

const Home = (props) => {
  const [filterPao, setFilterPao] = useState([]);
  const paes = props.paes;

  const filterPaoList = (event) => {
    setFilterPao(
      paes.filter((pao) => {
        console.log(pao._id);
        return pao.nome
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  return (
    <div className="home">
      <h1>{props.category}</h1>
      <input
        className="filterPao"
        type="text"
        onChange={filterPaoList}
        placeholder="Buscar..."
      />
      <div className="cardsList">
      
        {
          filterPao.length > 0
          ? filterPao.map((elemento) => {
              return (
                <Card
                  key={elemento._id}
                  id={elemento._id}
                  name={elemento.nome}
                  image={elemento.foto}
                  description={elemento.descricao}
                  price={elemento.preco}
                  getPaes={props.getPaes}
                />
              );
            })
            : paes.map((elemento) => {
              return (
                <Card
                  key={elemento._id}
                  id={elemento._id}
                  name={elemento.nome}
                  image={elemento.foto}
                  description={elemento.descricao}
                  price={elemento.preco}
                  getPaes={props.getPaes}
                />
              );
            })}
      </div>
    </div>
  );
};
export default Home;
