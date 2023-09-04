import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /*
    Reset de estilos padrão do navegador:
    Remove margens e paddings padrões e define o box-sizing
    para 'border-box', garantindo que padding e bordas não adicionem
    ao tamanho total dos elementos.
  */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /*
    Estilos globais para o elemento <body>:
    - Define a fonte padrão e cores de fundo e texto.
    - Ajusta a altura da linha para melhor legibilidade.
  */
  body {
    font-family: 'Arial', sans-serif; /* Fonte padrão para todo o documento. */
    background-color: #f4f4f4; /* Cor de fundo geral, clara para facilitar a leitura. */
    color: #333; /* Cor de texto padrão. */
    line-height: 1.6;
  }

  /*
    Estilos para o elemento <p> (parágrafo):
    - Define margens superior e inferior.
    - Ajusta as margens para telas menores para otimizar o espaço.
  */
  p {
    margin-bottom: 5px;
    margin-top: 5px;

    /* Estilos específicos para telas de até 768px de largura. */
    @media (max-width: 768px) {
      margin-bottom: 1px;
      margin-top: 1px;
    }
  }

  /*
    Estilos para os elementos de cabeçalho (h1-h6):
    - Define uma margem inferior para distanciá-los de outros elementos.
  */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1.5rem;
  }

  /*
    Estilos para os links (<a>):
    - Define uma cor padrão e remove a decoração de texto.
    - Adiciona um sublinhado no hover para indicar interatividade.
  */
  a {
    color: #0077cc;
    text-decoration: none;

    /* Estilo para o estado hover dos links. */
    &:hover {
      text-decoration: underline;
    }
  }

  /* Adicione quaisquer outros estilos globais conforme necessário. */
`

export default GlobalStyles
