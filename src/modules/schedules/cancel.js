import { scheduleDelete } from "../../services/schedule-delete"
import { schedulesDay } from "./load"

const periods = document.querySelectorAll('.period')

// Gerando evento de click para cada lista
periods.forEach((period) => {
    period.addEventListener("click", async (event) =>{
        if(event.target.classList.contains("cancel-icon")){
            // Obtendo o elemento pai do target
            const item = event.target.closest("li")
            const id = item.getAttribute("date-id")
            
            // Fazendo requisição na API para deletar o agendamento
            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    await scheduleDelete({id})      // Deletando agendamento
                    schedulesDay()                  // Atualizando página
                }
            }
        }
    })
})
