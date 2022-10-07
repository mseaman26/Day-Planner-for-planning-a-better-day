$(document).ready(function(){
   
    //variable for uptating the row colors
    var currentHour = (moment().format("H"))-4
    console.log(currentHour)
    //uptades currentHour and the displayed date/time and repopulates the rows every second
    //also redraws the page if the hour changes, in order to keep the color coding of the rows up to date!
    setInterval(function(){
        var previousHour = currentHour
        currentHour = (moment().format("H"))-4
        if(currentHour != previousHour){
            //redraw the rows
            $(".container").empty()
            populateRows(currentHour)
            populateTextAreas()
            console.log(currentHour)
            

        }
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a")) 

      
    }, 1000)

        //Retrieves saved text from local storage and adds it to the correct text areas on the planner
    function populateTextAreas(){
        for(var i=9; i <= 17; i++)
        //text areas were dynamically given IDs, which can be used here to add text, which is retrieved from local storage
        $("#text-area"+i).val(localStorage.getItem("text-area"+i))
    }
    //dynamically creates the rows for the planner
    function populateRows(presentTime){
        for(var i = 9;i<=17;i++){
            createRow(i, presentTime)
        }
    }
    //this function gets called by populateRows.  It is a function for populating one single row
    function createRow (hour, presentTime) {
        //I wanted each hour to be displayed with am and pm
        var amPm = "am"
        //military time is better for algorithmic purposes 
        var militaryTime = hour

        if(hour > 11){
            amPm = "pm"
        }
        if(hour>12){
            hour = hour-12
        }
        //creating the elements of each row
        var row1 = $("<div>")
        var text1 = $("<textarea>")
        var hour1 = $("<div>")
        var save1 = $("<button>")

        //giving each element a class, some of which utilize bootstrap 
        row1.addClass("row")
        text1.addClass("present col-md-10")
        hour1.addClass("hour col-md-1")
        save1.addClass("saveBtn col-md-1 ui-icon-disk")

        //the text areas are the only elements that needed an ID for the purposes of this assignment
        text1.attr("id", "text-area"+militaryTime)

        //color coding the row in accordance to what the current time is
        if(presentTime>militaryTime){
            text1.removeClass()
            text1.addClass("past col-md-10")
        }else if(presentTime == militaryTime){
            text1.removeClass()
            text1.addClass("present col-md-10")
        }else if(presentTime<militaryTime){
            text1.removeClass()
            text1.addClass("future col-md-10")
        }

        //adding text to the “hour” on the left side of the row and a little floppy disc icon on the save buttons
        hour1.text(hour+""+""+amPm)
        save1.text("💾")
        //adding the created elements to the page
        $(".container").append(row1)
        row1.append(hour1)
        row1.append(text1)
        row1.append(save1)

    }
    

    //Event listener for the save buttons
    $(".container").on("click", function(event){
        var task = ($(event.target).prev().val())
        localStorage.setItem((($(event.target).prev().attr("id"))), task)
    })

//=============================Code Exeution for loading page=============================
populateRows(currentHour)//<-----------------uses the actual current time
// populateRows(15)  //<-----------------------uses test values for presentTime if desired
populateTextAreas()
})
    

