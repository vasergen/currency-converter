"use strict"

angular.module('app')
    .service('GetRates', function($http) {
        let url = "http://api.fixer.io/latest?base=USD"

        this.get = function() {
            return $http.get(url)
                .then(response => response.data)
                .then((data) => {
                    data.rates["USD"] = 1
                    return data
                })
        }
    })
