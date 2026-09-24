import {schedulesDay} from "../schedules/load"

// Selecionar o input de data
const selectedDate = document.querySelector('#date')

// Carregar a lista de horários
selectedDate.onchange = () => schedulesDay()
