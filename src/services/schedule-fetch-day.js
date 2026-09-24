import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({date}) {
    try{
        // Requisição dos agendamentos dentro da API
        const response = await fetch(`${apiConfig.baseURL}/schedules`)
        const data = await response.json()

        // Filtrando os agendamentos pelo dia
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules

    }catch(error){
        alert("Não foi possível buscar os agendamentos do dia selecionado")
        console.log(error)
    }
}
