//import {getCurrencyConverter} from './updateDailyInfo.js'
import { CurrencyConverter } from '../globalUsfulFunctions.js'
import { getInfoToday } from '../getInfo.js'
import { updateDailyInfoBanner } from './updateDailyInfo.js'
import { updateDasBoard } from './updateMainDashBoard.js'
import { litenToChnagesInListSubContainers } from './clickHandelers.js'



window.addEventListener('load', (e) => {
    getInfoToday().then((dailyInfo) => {
        updateDailyInfoBanner(dailyInfo)
        updateDasBoard(dailyInfo)

    }).catch(err => console.log(err))


})



document.querySelector('.leftContainer').addEventListener("click", (e) => {
    getInfoToday().then((dailyInfo) => {
        litenToChnagesInListSubContainers(e, dailyInfo)
    }).catch(err => console.log(err))

});








