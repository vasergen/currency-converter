"use strict"

angular.module('app')
    .service('GetRates', function($http) {
        let url = "http://api.fixer.io/latest?base=USD&callback=JSON_CALLBACK"

        this.get = function() {
            return $http({
                method: 'JSONP',
                url: url
            })
                .then(response => response.data)
                .then((data) => {
                    data.rates["USD"] = 1
                    return data
                })
        }
    })
