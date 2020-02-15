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
    let endVal = document.getElementById('endDate');
    let postDate = document.getElementById('postDate');

    if(postDate.value == ""){
        if(startDate.value >= endVal.value && endVal.value != ""){
            alert("Starting Date should be behind the final date!");
            startDate.value = "";
        }
    }else if(postDate.value != ""){
        if(startDate.value <= postDate.value){
            alert("Starting Date should be ahead of posting date!");
            startDate.value = "";
            postDate.value = "";       
        }
    }
}

function dateCheck2(endDate){
    let startVal = document.getElementById('startDate').value;

    if(startVal >= endDate.value){
        alert("Final Date should be ahead from the starting date!");
        endDate.value = "";
    }
}

function dateCheck3(postDate){
    let startVal = document.getElementById('startDate').value;

    if(postDate.value >= startVal && startVal != ""){
        alert("Posting Date should be before the starting date!");
        postDate.value = "";
    }else if(startVal == ""){
        alert("Select a start date of event first!");
        postDate.value = "";
    }
}