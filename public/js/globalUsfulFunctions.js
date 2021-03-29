export function CurrencyConverter(total){

    const converter = new Intl.NumberFormat('COL',{
        style : 'currency',
        currency : 'COP'
    })

    return converter.format(total);
}



