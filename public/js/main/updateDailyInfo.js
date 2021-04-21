import { CurrencyConverter } from '../globalUsfulFunctions.js'

export function updateDailyInfoBanner(domisList) {
    console.log(domisList)
    const costoDomiciliosHoy = document.getElementById('costoDomiciliosHoy');
    const dineroPagadoADomicliariosHoy = document.getElementById('dineroPagadoADomicliariosHoy');
    const numeroDeDomiciosHoy = document.getElementById('numeroDeDomiciosHoy');

    const countTotalConstoDomis = () => {
        let totalCounter = 0;
        domisList.forEach((domicilio) => {
            totalCounter += domicilio.costo;
        })

        return CurrencyConverter(totalCounter)

    }

    const countTotalDineroPagado = () => {
        let totalCounter = 0;
        domisList.forEach((domicilio) => {
            totalCounter += domicilio.efectivo

        })

        return CurrencyConverter(totalCounter)

    }

    const countTotalDomicilios = () => {
        return domisList.length
    }

    costoDomiciliosHoy.innerHTML = countTotalConstoDomis();
    dineroPagadoADomicliariosHoy.innerHTML = countTotalDineroPagado();
    numeroDeDomiciosHoy.innerHTML = countTotalDomicilios();

}