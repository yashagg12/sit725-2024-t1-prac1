
var selectElement = document.getElementById('myselect');
var dis = document.getElementById("hiddendiv");
var dis2 = document.getElementById("hiddendiv2");


var S718O = document.getElementsByClassName("S718O");
dis.addEventListener('click', function(){
        var selectOption = selectElement.value;
        if(selectOption === 'SIT-718')
        {
                var message = "LECTURE --> Tuesday --> 9 AM - 10.50 AM\n";
                    message += "WORKSHOP --> Thursday --> 4 PM - 6 PM";

                alert(message);
        }
        else if(selectOption === 'SIT-719')
        {
                var message = "LECTURE --> Tuesday --> 1 PM - 2 PM\n";
                    message += "WORKSHOP --> FRIDAY --> 3 PM - 5 PM";

                alert(message);
        }
        else if(selectOption === 'SIT-725')
        {
                var message = "LECTURE --> Tuesday --> 4 PM - 6 PM\n";
                message += "WORKSHOP --> Monday --> 2 PM - 4 PM";

            alert(message);
        }
        else{
                var message = "LECTURE --> Tuesday --> NO LECTURE FOR THIS UNIT\n";
                    message += "WORKSHOP --> Thursday --> 4 PM - 6 PM";

                alert(message);
        }
});
dis2.addEventListener('click', function(){
        var selectOption = selectElement.value;
        if(selectOption === 'SIT-718')
        {
                var message = "LECTURE --> NO OFFLINE LECTURE FOR THIS UNIT\n";
                    message += "WORKSHOP --> Wednesday --> 4 PM - 6 PM";

                alert(message);
        }
        else if(selectOption === 'SIT-719')
        {
                var message = "LECTURE --> NO OFFLINE LECTURE FOR THIS UNIT\n";
                    message += "WORKSHOP --> Wednesday --> 9 PM - 11 PM";

                alert(message);
        }
        else if(selectOption === 'SIT-725')
        {
                var message = "LECTURE --> NO OFFLINE LECTURE FOR THIS UNIT\n";
                    message += "WORKSHOP --> Wednesday --> 1 PM - 2 PM";

                alert(message);
        }
        else{
                var message = "LECTURE --> NO OFFLINE LECTURE FOR THIS UNIT\n";
                    message += "WORKSHOP --> Thursday --> 5 PM - 8 PM";

                alert(message);
        }
});
selectElement.addEventListener("change", function() {
        
        dis.style.display = 'block';
        dis2.style.display = 'block';
     });