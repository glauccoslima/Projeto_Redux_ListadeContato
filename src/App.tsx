// Importando as dependências e componentes necessários
import React from 'react'
import ContactList from './components/ContactList/ContactList'
import GlobalStyles from './components/layouts/pages/styles/GlobalStyles'

// Definição do componente App
const App: React.FC = () => {
  return (
    <div>
      {/* Aplicando estilos globais ao componente */}
      <GlobalStyles />

      {/* Renderizando o componente de lista de contatos */}
      <ContactList />
    </div>
  )
}

// Exporta o componente App como padrão para ser usado em outros lugares
export default App
