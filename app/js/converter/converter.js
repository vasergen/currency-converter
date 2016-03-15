"use strict"

angular.module('app', [])
    .component('converter', {
        bindings: {},
        controller: function(GetRates, SortRates) {
            this.isData = false
            this.selectedCurrency
            this.rates
            this.amount = 0
            this.activeCurrencies = ["USD", "PLN", "EUR", "RUB"]

            this.convert = function(from, to, amount) {
                return this.rates[to] / this.rates[from] * amount
            }

            this.isActiveCurrency = function(currency) {
                return this.activeCurrencies.indexOf(currency) > -1
            }

            this.updateShowCurrencies = function(currency) {
                if(!this.isActiveCurrency(currency)) {
                    return this.activeCurrencies.push(currency)
                }

                let index = this.activeCurrencies.indexOf(currency)
                this.activeCurrencies.splice(index, 1)
            }

            GetRates.get()
                .then((data) => {
                    this.rates = SortRates.sort(data.rates, this.activeCurrencies)
                    this.selectedCurrency = data.base
                    this.isData = true
                })
                .catch((e) => {
                    console.error(e)
                })
        },
        templateUrl: 'app/js/converter/converter.tmpl.html'
})
