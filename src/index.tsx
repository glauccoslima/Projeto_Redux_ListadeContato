// Importando as bibliotecas e componentes necessários
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store' // Ajuste o caminho se necessário
import App from './App'
import reportWebVitals from './reportWebVitals'

// Inicializando a raiz da aplicação
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// Renderizando a aplicação dentro da raiz do DOM
root.render(
  <React.StrictMode>
    {/* Provedor Redux para fornecer acesso à store em toda a aplicação */}
    <Provider store={store}>
      {/* Componente principal da aplicação */}
      <App />
    </Provider>
  </React.StrictMode>
)

// Se você deseja começar a medir o desempenho no seu aplicativo, passe uma função
// para registrar resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals()
