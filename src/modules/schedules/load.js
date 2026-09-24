import { scheduleFetchByDay } from "../../services/schedule-fetch-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { scheduleShow } from "./show.js"

const selectedDate = document.querySelector("#date")

export async function schedulesDay(){
    const date = selectedDate.value

    // Buscando na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})

    // Exibindo os agendamentos
    scheduleShow({dailySchedules})

    // Renderiza as horas disponiveis
    hoursLoad({date, dailySchedules})
}
