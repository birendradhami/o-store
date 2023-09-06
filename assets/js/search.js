function sendToPage()
    {
        var input = document.getElementById("input").value;
        //alert(input);
        if (input == "clothing"){
            location.href = "/404.html";
            return false;
        }
        else if (input == "sad"){
            location.href = "suggestion_sad.html";
            return false;
        }
        else {
            alert('Invalid Input.');
        }
    } 