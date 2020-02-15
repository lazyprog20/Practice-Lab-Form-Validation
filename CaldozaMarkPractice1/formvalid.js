function practicef(){
    alert("Application has successfully submitted!");
}

function titleLimit(input){
    if (input.value.length >= 60){
        alert("Title should only have less than 60 characters!");
        input.value = "";
    }
}

function dateCheck1(startDate){
    let endVal = document.getElementById('endDate').value;

    if(startDate.value >= endVal && endVal != ""){
        alert("Starting Date should be behind the final date!");
        startDate.value = "";
    }
}

function dateCheck2(endDate){
    let startVal = document.getElementById('startDate').value;

    if(startVal >= endDate.value){
        alert("Final Date should be ahead from the starting date!");
        endDate.value = "";
    }
}