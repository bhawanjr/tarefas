import { useState } from "react"
import Cabecalho from '../components/templates/Cabecalho'
import Conteudo from "../components/templates/Conteudo"
import Lista from "../components/lista/Lista"
import tarefasIniciais from '../data/mock'
import Formulario from "../components/formulario/Formulario"
import Tarefa from "../model/Tarefa"
import ListaTarefas from "../model/ListaTarefas"


export default function Home() {
  const [tarefas, setTarefas] = useState(tarefasIniciais)

  function novaTarefaCriada(novaTarefa: Tarefa) {
    setTarefas(tarefas.adicionarTarefa(novaTarefa))
  }

  function mudou(novasTarefas: ListaTarefas) {
    setTarefas(novasTarefas)
  }

  return (
    <div className={`flex flex-col h-screen bg-gray-300`}>
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada}/>
      </Cabecalho>
      <Conteudo>
        <Lista tarefas={tarefas} mudou={mudou} />
      </Conteudo>
    </div>
  )
}

//Gradiente legal em tons de cinza
//text-white bg-gradient-to-tr from-gray-600 to-gray-900