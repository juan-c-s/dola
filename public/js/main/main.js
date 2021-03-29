//import {getCurrencyConverter} from './updateDailyInfo.js'
import {CurrencyConverter} from '../globalUsfulFunctions.js'
import {getInfoToday} from './getInfo.js'
import {updateDailyInfoBanner} from './updateDailyInfo.js'



window.addEventListener('load',(e)=>{

    updateDailyInfoBanner(getInfoToday().domicilios)
})






