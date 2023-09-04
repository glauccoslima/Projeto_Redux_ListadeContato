import styled from 'styled-components'
import { RiAddCircleLine } from 'react-icons/ri'
import { BsSave } from 'react-icons/bs'

// Título principal, geralmente usado para seções ou títulos de página.
export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
`

// Estilos base para botões. Estes estilos são reutilizados em diferentes botões para manter a consistência.
const ButtonStyles = `
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;
`

// Container principal para a lista de contatos. Estilizado para ter sombra, bordas arredondadas, etc.
export const ContactListContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  // Estilos para telas menores para manter o design responsivo
  @media (max-width: 768px) {
    padding: 10px;
  }
`

// Cabeçalho para a lista de contatos. Pode conter botões, títulos, etc.
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  // Estilos para telas menores
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`

// Botão para adicionar novos contatos. Utiliza os estilos base de ButtonStyles.
export const AddContactButton = styled.button`
  ${ButtonStyles}
  background-color: #2196f3;
  color: white;

  &:hover {
    background-color: #1976d2;
  }
`
export const StyledRiAddCircleLineIcon = styled(RiAddCircleLine)`
  font-size: 10px; // Este é o tamanho do ícone
  display: inline-flex; // Isso faz com que o ícone se comporte como um elemento inline
  align-items: center; // Isso centraliza verticalmente o ícone em relação ao texto
`

export const StyledBsSaveIcon = styled(BsSave)`
  font-size: 10px; // Este é o tamanho do ícone
  display: inline-flex; // Isso faz com que o ícone se comporte como um elemento inline
  align-items: center; // Isso centraliza verticalmente o ícone em relação ao texto
`

// Botão para salvar a edição ou adição de um contato.
export const SaveButton = styled.button`
  ${ButtonStyles}
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #388e3c;
  }
`

// Campo de entrada geral. Usado para inserção de texto pelo usuário.
export const InputField = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

// Container do formulário, contendo campos de entrada e botões.
export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

// Container específico para a barra de pesquisa.
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

// Campo de pesquisa. Derivado do campo de entrada geral, sem alterações adicionais.
export const SearchField = styled(InputField)``

// Botão específico para a ação de pesquisa.
export const SearchButton = styled.button`
  ${ButtonStyles}
  background-color: #4caf50;
  color: white;

  &:hover {
    background-color: #388e3c;
  }
`

// Container para os itens da lista de contatos.
export const ContactItemsContainer = styled.div`
  margin-top: 20px;
`

// Mensagem a ser exibida quando não há contatos na lista.
export const NoContactsMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
`

// Botão para remover um contato da lista.
export const RemoveButton = styled.button`
  ${ButtonStyles}
  background-color: #f44336;
  color: white;

  &:hover {
    background-color: #da190b;
  }
`

// Botão para editar as informações de um contato.
export const EditButton = styled.button`
  ${ButtonStyles}
  background-color: #ffa000;
  color: white;

  &:hover {
    background-color: #ff8f00;
  }
`

// Botão para cancelar a edição de um contato.
export const CancelEditButton = styled.button`
  ${ButtonStyles}
  background-color: #bdbdbd;
  color: white;

  &:hover {
    background-color: #9e9e9e;
  }
`

// Container para um único contato, mostrando seus detalhes.
export const ContactContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;

  // Estilos para telas menores
  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
    gap: 5px;
  }
`
