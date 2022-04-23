import React from "react"
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { IconeTema } from "./UI";

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconeTema src={utilidades} alt="Restaurante" />,
    Saude: <IconeTema src={saude} alt="Restaurante" />,
    Transporte: <IconeTema src={transporte} alt="Restaurante" />,
    Default: <IconeTema src={outros} alt="Restaurante" />,
  };

  return Images[type] || Images.Default;
}