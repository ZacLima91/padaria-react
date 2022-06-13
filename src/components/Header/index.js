import "./style.css";
import logoSacola from "../../assets/icon/sacola-de-compras.png";
import logoAdd from "../../assets/icon/add-produto.png";
import { useState } from "react";
import ModalNewProduto from "../Modals/ModalNewProduto";
const Header = ({getPaes}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <header>
        <h1 className="title">Padaria</h1>
        <div className="header-buttons">
          <img className="logoSacola" src={logoSacola} alt="Logo Sacola" />
          <img
            onClick={handleClick}
            className="logoAdd"
            src={logoAdd}
            alt="Logo Add Produto"
          />
        </div>
      </header>
      {open && <ModalNewProduto handleClose={handleClick} getPaes={getPaes} />}
    </>
  );
};

export default Header;
