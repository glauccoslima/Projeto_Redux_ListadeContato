import * as enums from '../../utils/enums/Tarefa'

type FiltroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState
})
