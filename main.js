let input = document.getElementById('input')
const submitter = document.getElementById('submit')
const output = document.getElementById('output')
const inputCopy = document.getElementById('inputCopy')

const unitSelect = document.getElementById('unitSelect')

let remainder
let remainderToHours
let remainderToMins
let remainderToMinsToSecs
let remainderToSecs

let unit


submitter.addEventListener('mousedown', checker)

window.addEventListener('keydown', keys)

function keys(e){
    if (e.keyCode == 13){
        checker()
    } else {
        return
    }
}


function checker() {
    input = document.getElementById('input').value

    unit = unitSelect.options[unitSelect.selectedIndex].value;

    if (unit == 'seconds') {
        inputCopy.innerText = input+' seconds is ..'
        convert()
    } else if (unit == 'minutes') {
        inputCopy.innerText = input+' minutes is ..'
        input = input * 60
        convert()
    } else if (unit == 'hours') {
        inputCopy.innerText = input+' hours is ..'
        input = input * 3600
        convert()
    } else if (unit == 'days') {
        inputCopy.innerText = input+' days is ..'
        input = input*86400 
        convert()
    }

}


function convert(){

    
    output.innerText = ''

    if (input >= 60 && input < 3600) { //mins 
        input = input / 60
        

        remainder = (input % 1)
        remainderToSecs = remainder*60

        if (remainderToSecs > 0) {
            output.innerText = Math.trunc(input) + ' minutes and '+Math.round(remainderToSecs)+' seconds '
        } else {
           output.innerText = input + ' minutes '
        }

    }
    else if (input >= 3600 && input < 86400) { // hours
        input = input / 3600
    
        remainder = (input % 1) 
       
        remainderToMins = remainder*60
        
        if (remainderToMins > 0) { //remainder mins
            remainderToMinsToSecs = (remainderToMins % 1)
            remainderToSecs = remainderToMinsToSecs*60
            remainderToSecs = Math.round(remainderToSecs)
            
                if (remainderToSecs > 0) {
                   output.innerText = Math.trunc(input) + ' hours '+Math.trunc(remainderToMins)+' minutes and '+ remainderToSecs+ ' seconds '

                    


                } else {
                    output.innerText = Math.trunc(input) + ' hours and '+Math.round(remainderToMins)+' minutes '
                   
                }

        } else {
        output.innerText = input + ' hours'
        }    
         
                
    } else if (input >= 86400){ // days

        input = input / 86400 

        remainder = (input % 1) // hours
        
        remainderToHours = remainder*24 // it's day to hours!

        if (remainderToHours > 0) {
           
            remainder = (remainderToHours % 1)
            remainderToMins = remainder*60

            
           
                if (remainderToMins > 0) {
                    remainderToMinsToSecs = (remainderToMins % 1)
                    remainderToSecs = remainderToMinsToSecs*60
                    remainderToSecs = Math.round(remainderToSecs)

                    if (remainderToSecs > 0) {
                        output.innerText = Math.trunc(input) +' days '+ Math.trunc(remainderToHours) + ' hours '+Math.trunc(remainderToMins)+' minutes and '+remainderToSecs+ ' seconds'
                    } else {
                        output.innerText = Math.trunc(input) +' days '+ Math.trunc(remainderToHours) + ' hours and '+Math.trunc(remainderToMins)+'  minutes'
                    }

                } else {
                    output.innerText = Math.trunc(input )+' days '+ Math.trunc(remainderToHours) + ' hours'
                   
                }
        } else {
            output.innerHTML = input + ' days'
        }
        

    } else if (input > 0){
        output.innerHTML = input + ' seconds'
    }   

}









