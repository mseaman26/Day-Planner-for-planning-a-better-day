$(document).ready(function(){
    //display date and time at the top
    //TODO: delete hours and minutes


    //variable for uptating the row colors
    var currentHour 
    //uptades currentHour and the displayed date/time and repopulates the rows every second
    setInterval(function(){
        currentHour = moment().format("H")
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a")) 
      
    }, 1000)

    function populateTextAreas(){
        for(var i=9; i <= 17; i++)
        $("#text-area"+i).val(localStorage.getItem("text-area"+i))
    }
    function populateRows(presentTime){
        for(var i = 9;i<=17;i++){
            createRow(i, presentTime)
        }
    }
    function createRow (hour, presentTime) {

        var amPm = "am"
        var militaryTime = hour

        if(hour > 11){
            amPm = "pm"
        }
        if(hour>12){
            hour = hour-12
        }

        var row1 = $("<div>")
        var text1 = $("<textarea>")
        var hour1 = $("<div>")
        var save1 = $("<button>")



        row1.addClass("row")
        text1.addClass("present col-md-10")
        hour1.addClass("hour col-md-1")
        save1.addClass("saveBtn col-md-1 ui-icon-disk")

        text1.attr("id", "text-area"+militaryTime)

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

        hour1.text(hour+""+""+amPm)
        save1.text("💾")

        $(".container").append(row1)
        row1.append(hour1)
        row1.append(text1)
        row1.append(save1)

    }
    

    //================Event listener for save buttons========================
    $(".container").on("click", function(event){
        var task = ($(event.target).prev().val())
        localStorage.setItem((($(event.target).prev().attr("id"))), task)
    })
    
//=============================Code Exeution for loading page=============================
populateRows((moment().format("H")))//<-----------------uses the actual current time
// populateRows(15)  //<-----------------------uses test values for presentTime if desired
populateTextAreas()
})
    

