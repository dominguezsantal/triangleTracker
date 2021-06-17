$(document).ready(function() {
        //user variable are declared up here on page load
        let sideOne = $("input#firstNum").val();
        let sideTwo = $("input#secondNum").val();
        let sideThree = $("input#thirdNum").val();

    $("form#triangles").submit(function (event) {
        event.preventDefault(); //stop refresh
        console.log("form submitted.")
        //code goes here :)
        function triangle(sideOne, sideTwo, sidethree) {

            //test to see if the user didn't submit the form correctly (not a triangle or bad side input)
            if (Number.isInteger(sideOne) && Number.isInteger(sideTwo) && Number.isInteger(sideThree)){

            

            if (sideOne === sideTwo && sideTwo === sidethree && sideOne === sidethree) {
                // return "equilateral";
                console.log("equilateral");
            }
            else if (sideOne === sideTwo || sideOne === sidethree || sideTwo === sidethree) {
                // return "isoceles";
                console.log("isoceles");
            }
            else if (sideOne !== sideTwo || sideOne !== sidethree || sideTwo !== sidethree) {
                // return "scalene :(";
                console.log("scalene");
            } 
        }
    } 
    // else {
    //     console.log("Error... You did something wrong. Try downloading more RAM.");
    // }
    });
});