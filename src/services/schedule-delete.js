import { apiConfig } from "./api-config";

export async function scheduleDelete({id}) {
    try{
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE"
        })

        alert("Agendamento cancelado com sucesso")
    }catch (error){
        alert("Não foi possóvel cancelar o agendamento")
        console.log(error)
    }
}
