export function CurrencyConverter(total){

    const converter = new Intl.NumberFormat('COL',{
        style : 'currency',
        currency : 'COP'
    })

    return converter.format(total);
}

export const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}:${m}`;
  }
  


