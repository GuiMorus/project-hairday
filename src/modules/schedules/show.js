import dayjs from "dayjs";

// Selecionando as sessões
const periodMorning = document.querySelector("#period-morning")
const periodAfternoon = document.querySelector("#period-afternoon")
const periodNight = document.querySelector("#period-night")

export function scheduleShow({dailySchedules}){
    try{
        // Limpando as informações
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        // Renderizando os agendamentos por periodo
        dailySchedules.forEach(schedule => {
            const item = document.createElement('li')
            const time = document.createElement('strong')
            const name = document.createElement('span')
            const icon = document.createElement('img')

            // Criando Informações
            item.setAttribute("date-id", schedule.id)
            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            // Criando icone
            icon.classList.add("cancel-icon")
            icon.setAttribute("src", "./src/assets/cancel.svg")
            icon.setAttribute("alt", "Cancelar")

            // Adicionando tempo, nome e icone na lista
            item.append(time, name, icon)

            // Obtém somente a hora
            const hour = dayjs(schedule.when).hour()

            // Renderiza o agendamento na sessão (manhã, tarde ou noite)
            if(hour <= 12){
                periodMorning.appendChild(item)
            }else if(hour > 12 && hour <= 18){
                periodAfternoon.appendChild(item)
            }else{
                periodNight.appendChild(item)
            }
        });

    }catch(error){
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}
