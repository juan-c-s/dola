//import {getCurrencyConverter} from './updateDailyInfo.js'
import {CurrencyConverter} from '../globalUsfulFunctions.js'
import {getInfoToday} from '../getInfo.js'
import {updateDailyInfoBanner} from './updateDailyInfo.js'
import {updateDasBoard} from './updateMainDashBoard.js'
import {litenToChnagesInListSubContainers} from './clickHandelers.js'
const dailyInfo = getInfoToday();



window.addEventListener('load',(e)=>{
    updateDailyInfoBanner(dailyInfo.domicilios)
    updateDasBoard(dailyInfo.domicilios)
    
})

document.querySelector('.leftContainer').addEventListener("click", (e)=>{
    litenToChnagesInListSubContainers(e,dailyInfo.domicilios)
});







