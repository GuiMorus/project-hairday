export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available')
    
    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            
            // Remove a classe hour-selected de todas as li não selecioandas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            // Adiciona a classe na li clicada
            selected.currentTarget.classList.add("hour-selected")
        })
    })
}
