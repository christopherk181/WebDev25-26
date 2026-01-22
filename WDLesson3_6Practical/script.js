// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function calculateAverage(){
    let g1 = parseFloat(document.getElementById("g1").value);
    let g2 = parseFloat(document.getElementById("g2").value);
    let g3 = parseFloat(document.getElementById("g3").value);
    let op = document.getElementById("output");
    let average = ((g1) + (g2) + (g3)) / 3;
    op.innerHTML = "Average is: " + average;
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function calculateSlope(){
    let x1 = parseFloat(document.getElementById("x1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let op = document.getElementById("output2");
    let slope = (((y2)-(y1))/((x2)-(x1)));
    op.innerHTML = "Slope is: " + slope;
}


// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.function calculateAverage(){
    function calculateBMI(){
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let op = document.getElementById("output3");
    let BMI = (((weight) / ((height)**2)) * 703) ;
    op.innerHTML = "BMI is: " + BMI;
    }