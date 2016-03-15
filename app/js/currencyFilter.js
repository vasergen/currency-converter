"use strict"

angular.module("app")
    .filter('currencyRound', () => {
        return function(input) {
            return (parseFloat(input)).toFixed(2)
        }
    })