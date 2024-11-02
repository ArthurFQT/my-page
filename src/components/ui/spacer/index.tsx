import React from 'react';

// Definição de interface para as props do componente Spacer
interface SpacerProps {
  height?: string;  // Altura é opcional e do tipo string
  width?: string;   // Largura é opcional e do tipo string
}

// Componente Spacer com tipagem para as props
const Spacer: React.FC<SpacerProps> = ({ height = '1em', width = '1em' }) => {
  // Estilos para aplicar o espaçamento
  const style = {
    height,  // Usa o valor de height ou o padrão de '1em'
    width,   // Usa o valor de width ou o padrão de '1em'
    display: 'block',  // Garante que o componente é tratado como um bloco
  };

  // Retorna uma div com os estilos aplicados
  return <div style={style} />;
};

export default Spacer;
