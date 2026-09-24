import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
    try{
        // Requisição para enviar os dados do agendamento para a API
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })

        alert("Agendamento realizado com sucesso!")

    }catch(error){
        alert("Não foi possível agendar")
        console.log(error)
    }
    
}
