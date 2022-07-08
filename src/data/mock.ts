import ListaTarefas from "../model/ListaTarefas";
import Tarefa from "../model/Tarefa";
import TipoFiltro from "../model/TipoFiltro";


const tarefasIniciais: Tarefa[] = [
    // Tarefa.criarAtiva(1, 'Estudar Next.'),
    // Tarefa.criarConcluida(2, 'Limpar carro.'),
    // Tarefa.criarAtiva(3, 'Comprar livro do mês.'),
    // Tarefa.criarAtiva(4, 'Outra tarefa qualquer.'),
    // Tarefa.criarConcluida(5, 'Limpar a casa.'),
    // Tarefa.criarAtiva(6, 'Vacinar a Lia.'),
]

export default new ListaTarefas(tarefasIniciais, TipoFiltro.NENHUM)