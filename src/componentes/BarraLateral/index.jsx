import { styled } from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

import homeAtivo from "/icones/home-ativo.png";
import homeInativo from "/icones/home-inativo.png";
import novasAtivo from "/icones/novas-ativo.png";
import novasInativo from "/icones/novas-inativo.png";
import vistasAtivo from "/icones/mais-vistas-ativo.png";
import vistasInativo from "/icones/mais-vistas-inativo.png";
import curtidaAtivo from "/icones/mais-curtidas-ativo.png";
import curtidaInativo from "/icones/mais-curtidas-inativo.png";
import surpreendaAtivo from "/icones/surpreenda-me-ativo.png";
import surpreendaInativo from "/icones/surpreenda-me-inativo.png";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo={homeAtivo}
            iconeInativo={homeInativo}
            ativo={true}
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo={vistasAtivo}
            iconeInativo={vistasInativo}
            ativo={false}
          >
            Mais vistas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo={curtidaAtivo}
            iconeInativo={curtidaInativo}
            ativo={false}
          >
            Mais curtidas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo={novasAtivo}
            iconeInativo={novasInativo}
            ativo={false}
          >
            Novas
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo={surpreendaAtivo}
            iconeInativo={surpreendaInativo}
            ativo={false}
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
