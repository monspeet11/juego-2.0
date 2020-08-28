import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  OrangeText,
  CloseCross,
} from "../MasterCss";

import { ReactComponent as Paper } from "../../assets/paper.svg";
import { ReactComponent as Apple } from "../../assets/apple-core.svg";
import { ReactComponent as Shirt } from "../../assets/shirt.svg";
import { ReactComponent as Walk } from "../../assets/walk.svg";
import { ReactComponent as DrinksCan } from "../../assets/drinks-can.svg";
import { ReactComponent as PlasticBag } from "../../assets/plastic-bag.svg";
import { ReactComponent as PlasticBottle } from "../../assets/plastic-bottle.svg";
import { ReactComponent as TV } from "../../assets/tv.svg";
import { ReactComponent as Tap } from "../../assets/tap.svg";

const FunFactsBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  display: block;
  z-index: 3000;
  border-radius: 25px;
  border: 2px solid #08345c;
  filter: drop-shadow(4px 4px 4px #08345c);
  text-align: center;
`;

const FactList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;

  li {
    line-height: 1.5em;
    // padding-bottom: 1em;
  }
`;

const Flexy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const ExtLink = styled.a`
  color: #ff8a00;
`;

const FunFactsModal = ({ handleClose }) => {
  return (
    <FunFactsBox>
      <CloseCross onClick={handleClose} />
      <PageHeader>Acerca del reciclaje</PageHeader>
      <MessageBox primary>
        <BoxMessage>
          <p>
            Todos los recursos naturales que usamos y la basura que creamos está
            dañando al planeta y a los animales que lo comparten con nosotros.
          </p>

          <p>
            Esto puede sonar aterrador, ¡pero hay algo que todos podemos hacer
            al respecto!
          </p>

          <p>
            Nosotros podemos<OrangeText>REDUCIR, REUTILIZAR</OrangeText> y{" "}
            <OrangeText>RECICLAR</OrangeText>, para evitar que nuestra basura se
            vaya en vertederos malolientes o terminando en el océano.
          </p>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p>
            <OrangeText>REDUCIR</OrangeText>
          </p>

          <FactList>
            <li> Cuando esté comprando, compre solo lo que necesita. </li>
            <li>
              {" "}
              ¿Puede comprar en una tienda de comestibles sin desperdicio?{" "}
            </li>
            <li>
              Trate de caminar más en lugar de usar el automóvil. Tus padres
              usarán menos gasolina!
            </li>
            <li>
              {""}
              Cierre el grifo cuando se cepille los dientes y desperdiciará
              menos agua
            </li>
            <li>
              Apague el televisor, la consola de juegos y los elementos
              eléctricos para reducir tu uso de energía
            </li>
          </FactList>

          <Flexy>
            <Walk width="150px" height="150px" />
            <Tap width="150px" height="150px" />
            <TV width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p>
            <OrangeText>REUTILIZAR</OrangeText>
          </p>

          <FactList>
            <li>
              Lleve consigo una bolsa reutilizable de por vida o una bolsa vieja
              cuando yendo a las tiendas
            </li>
            <li>
              Cuando algo se rompe, vea si puede repararlo en lugar de tirarlo a
              la basura
            </li>
            <li>
              Si no se puede reparar, ¡vea si puede encontrarle un nuevo uso!
            </li>
            <li> Dar artículos no deseados a organizaciones benéficas </li>
            <li>
              Reutilice el papel de desecho: siempre puede usar ambos lados de
              una hoja de papel para dibujar!
            </li>
          </FactList>

          <Flexy>
            <PlasticBag width="150px" height="150px" />
            <Shirt width="150px" height="150px" />
            <Paper width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p>
            <OrangeText>RECICLAR</OrangeText>
          </p>

          <FactList>
            <li>
              Siempre vea si puede comprar cosas hechas con materiales
              reciclados.
            </li>
            <li>
              Clasifique toda su basura para que el vidrio, latas, plástico y el
              papel se puede reciclar
            </li>
            <li>
              Piense en qué otras cosas se pueden reciclar en su local. centro
              de reciclaje, como baterías, cartuchos de tinta y ropa
            </li>
            <li> Use desechos de la cocina para hacer abono para el jardín </li>
          </FactList>

          <Flexy>
            <PlasticBottle width="150px" height="150px" />
            <DrinksCan width="150px" height="150px" />
            <Apple width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          Descubra más sobre cómo reciclar en su área local y reducir los
          desechos visitando{" "}
          <ExtLink href="https://www.recyclenow.com/" target="blank">
            Reciclar ahora
          </ExtLink>
          .
        </BoxMessage>
      </MessageBox>

      <Button primary handleClick={handleClose} label="Close"></Button>
    </FunFactsBox>
  );
};

export default FunFactsModal;
