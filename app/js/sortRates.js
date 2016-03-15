"use strict"

angular.module("app")
    .service("SortRates", function() {
        return {
            sort: function sort(rates, activeCurrencies) {
                let _rates = {}
                let keys = Object.keys(rates)

                keys.sort((a,b) => {
                    if(activeCurrencies.indexOf(a) > -1) {
                        return -1
                    }
                    return 1
                })

                for(let currency of keys) {
                    _rates[currency] = rates[currency]
                }

                return _rates;
            }
        }
    })