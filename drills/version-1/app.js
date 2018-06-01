const latestRateUrl = 'https://exchangeratesapi.io/api/latest?base=USD'
const $ul = document.querySelector('.dollar-conversion')
const $comparisonUl = document.querySelector('.comparison-rates')
const $form = document.querySelector('form')
const $label = document.querySelector('.comparison-date-title')

function loadPage() {
    fetch(latestRateUrl)
        .then(response => response.json())
        .then(listRates)
}
loadPage()

function inputDateComparison(date) {
    fetch(`https://exchangeratesapi.io/api/${date}?base=USD`)
        .then(response => response.json())
        .then(listComparisonRates)
}

function listRates(data) {
    const dataRates = Object.entries(data.rates)
    const eachRate = dataRates.map(rateArr => {
        return rateArr.reduce((priceObject, item, index) => {
            return {
                country: rateArr[0],
                price: rateArr[1]
            }
        }, {})
    })    
    eachRate.forEach(rate => {
        const $li = document.createElement('li')
        $li.className = "price-list-items"
        $li.innerHTML = `${rate.country}: ${rate.price}`
        $ul.appendChild($li)
        
    })
}

function listComparisonRates(data) {
    const dataRates = Object.entries(data.rates)
    const eachRate = dataRates.map(rateArr => {
        return rateArr.reduce((priceObject, item, index) => {
            return {
                country: rateArr[0],
                price: rateArr[1]
            }
        }, {})
    })    
    eachRate.forEach(rate => {
        const $li = document.createElement('li')
        $li.className = "price-list-items"
        $li.innerHTML = `${rate.country}: ${rate.price}`
        $comparisonUl.appendChild($li)
    })
}

$form.addEventListener("submit", event => {
    event.preventDefault();
    const inputDate = document.querySelector('#date-input')
    const inputValue = inputDate.value
    inputDateComparison(inputValue)
    $label.innerHTML = `${inputValue}: `
})
