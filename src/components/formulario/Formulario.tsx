import { useState } from "react"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tarefa from "../../model/Tarefa"

interface FormularioProps {
    novaTarefaCriada: (Tarefa: Tarefa) => void
}

export default function Formulario(props: FormularioProps) {
    const [descricao, setDescriao] = useState('')

    function criarNovaTarefa() {
        if (descricao?.trim().length > 0) {
            const novaTarefa = Tarefa.criarAtiva(Math.random(), descricao)
            props.novaTarefaCriada(novaTarefa)
            setDescriao('')
        }
    }

    return (
        <div className="flex flex-1 justify-center items-center">
            <input 
                placeholder="Informe sua próxima tarefa"
                value={descricao} 
                onChange={e => setDescriao(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? criarNovaTarefa() : false}
                className={`
                    w-1/2 py-2 px-3 rounded-lg border-2 text-2xl
                    border-purple-300 focus:outline
                    focus:ring-2 focus:ring-purple-600    
            `}/>
            <button 
                onClick={criarNovaTarefa}
                className={`
                    ml-3 px-5 py-4 focus:outline-none rounded-lg
                    bg-purple-600 text-white text-xl
            `}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}