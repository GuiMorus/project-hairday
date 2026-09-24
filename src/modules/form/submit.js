import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new"
import { schedulesDay } from "../schedules/load.js"

// Conectando DOM
const form = document.querySelector('form')
const selectedDate = document.querySelector('#date')
const clientName = document.querySelector('#client')

// Iniciando variáveis
const dataAtual = dayjs(new Date()).format("YYYY-MM-DD")

// Configurando o input DATE
selectedDate.value = dataAtual      // Carregando data atual
selectedDate.min = dataAtual        // Colocando a data minima como atual, qualquer dia anterior é bloqueado

form.onsubmit = async (event) => {
    event.preventDefault()

    try{
        // Recuperando o nome do cliente
        const name = clientName.value.trim().toLowerCase()
        if(!name){
            return alert("Informe o nome do cliente")
        }

        // Pegar horário selecionado
        const hourSelected = document.querySelector(".hour-selected")

        // Verificado se há uma hora selecionada
        if(!hourSelected){
            return alert("Selecione a hora")
        }

        // Recuperar somente a hora
        const [hour] = hourSelected.textContent.split(":")

        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        // Gerando um ID
        const id = new Date().getTime()

        // Criando requisição para inserir na API
        await scheduleNew({id: id, name: name, when: when})

        // Recarregando os agengamentos
        await schedulesDay()
        clientName.value = ""       // Limpa o input de nome

    }catch(error){
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }

    
}
