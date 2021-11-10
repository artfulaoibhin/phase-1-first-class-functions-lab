const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}
   
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function(){
        return integer*integer
    }
}
const fareDoubler = fare => fare * 2

const fareTripler = fare => fare * 3

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers); 
}