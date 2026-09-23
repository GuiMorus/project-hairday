import dayjs from "dayjs"

// Conectando DOM
const form = document.querySelector('form')
const selectedDate = document.querySelector('#date')

// Iniciando variáveis
const dataAtual = dayjs(new Date()).format("YYYY-MM-DD")

// Configurando o input DATE
selectedDate.value = dataAtual      // Carregando data atual
selectedDate.min = dataAtual        // Colocando a data minima como atual, qualquer dia anterior é bloqueado

form.onsubmit = (event) => {
    event.preventDefault()
}
