$(document).ready(function(){
    //display date and time at the top
    //TODO: delete hours and minutes


    // $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, H:mm:ss a"))
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))
    
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
        var save1 = $("<div>")



        row1.addClass("row")
        text1.addClass("present col-md-10")
        hour1.addClass("hour col-md-1")
        save1.addClass("saveBtn col-md-1 ui-icon-disk")

        row1.attr("id", "row"+militaryTime)
        console.log(row1.attr("id"))


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
    
    // populateRows((moment().format("H")))
    populateRows(12)  //used to test different time values
})






//=========================Moments example========================================
// $(document).ready(function () {

//     // Static

//     // The first basic method of Moment.js is the moment() method. Use this to get today's info!
//     console.log(moment());

//     console.log(moment().format());

//     // Using moment format, there are different ways that we can display todays date!
//     $("#date").text(moment());
//     $("#date-formatted").text(moment().format());
//     $("#date-my").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

//     $("#day-week").text(moment().format('do'));
//     $("#day-month").text(moment().format('Do'));
//     $("#day-year").text(moment().format('DDDo'))

//     // Current Time
//     // Here we want to use setInterval to constantly update the time
//     let updateTime = function () {
//         let currentTime = moment().format('h:mm:ss')
//         $("#time").text(currentTime)
//     }

//     // Here we will get the number of hours in the year
//     let updateHour = function () {
//         let date = moment().dayOfYear()
//         let yearHours = date * 24
//         let todayHours = moment().hour();
//         let sumHours = yearHours + todayHours
//         $("#hours").text(sumHours)
//     }

//     // Here we will get the number of minutes in the week
//     let updateMinutes = function () {
//         let date = moment().weekday();
//         let weekMinutes = (date * 24 * 60) + (moment().minute());
//         $("#minutes").text(weekMinutes);
//     }

//     // Here we will get the number of seconds in the day
//     let updateSeconds = function () {
//         let todayHours = moment().hour();
//         let todaySeconds = todayHours * 60 * 60;
//         let thisSecond = moment().second();
//         let sumSeconds = thisSecond + todaySeconds;
//         $("#seconds").text(sumSeconds);
//     }

//     let countdown = function () {

//         // Friday
//         let friday = moment().day("fr")._d

//         // convert this into day of the year
//         let fridayDate = moment(friday).dayOfYear();

//         // This will get the milliseconds of Friday
//         let fridayMils = fridayDate * 24 * 60 * 60 * 1000
//         // Turn into seconds

//         // Today
//         // Turn into milliseconds

//         let date = moment().dayOfYear()
//         let yearMils = date * 24 * 60 * 60 * 1000
//         let todayMils = moment().hour() * 60 * 60 * 1000;
//         let thisMilsSecond = moment().second() * 1000;
//         let thisMils = moment().millisecond();

//         // This value should be increasing over time
//         let sumMils = yearMils + todayMils + thisMilsSecond + thisMils;

//         let ms = fridayMils - sumMils;
//         $("#countdown").text(ms)
//     }

//     // To initally set the times, we will call the functions
//     updateTime();
//     updateHour();
//     updateMinutes();
//     updateSeconds();
//     countdown();

//     // To continuously call the functions, we will use setInterval
//     setInterval(updateTime, 1000);
//     setInterval(updateHour, 1000);
//     setInterval(updateMinutes, 1000);
//     setInterval(updateSeconds, 1000);
//     setInterval(countdown, 1);

// })