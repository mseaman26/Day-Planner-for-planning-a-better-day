# Day-Planner-for-planning-a-better-day
This program is a functioning planner for typical business hours.  It allows the user to type in plans for each hour, click a save button, and have those plans persist, thanks to local storage.  It displays the current date and time at the top, which updates every second. The rows for each hour of the day are color-coded to represent past hours, the present hour, and future hours.  When the hour changes, the color coding of the rows will change on their own without requiring the page to be refreshed.  

## Overview of the Application
<img src="assets/Word Day Planner.png" width = 600px>

## Link to the Deployed Application
https://mseaman26.github.io/Day-Planner-for-planning-a-better-day/

## Languages Used
This project involved writing code solely in Javascript.  It features use of JQuery.  The pre-existing code was written in HTML and CSS, and featured bootstrap styling

## Notable Features
-This project utilizes a third-party API, called Moment.js.  This allows access to data regarding the exact current time.  
-This project features a sigle event listener that utilizes the .target method to make multiple buttons carry out unique tasks
-Using local storage, the user can count on their saved plans to be there regardless of a page refresh
-The page updates in real time, including the date/time at the top, as well as the color coding of the rows

## Notable Methods
-A setInterval function is used to keep the time updating once every second. There is code that looks for a change in value of the hour, which triggers the re-coloring of the rows
-The elements on this page were created and given attributes dynamically, reducing the lines of code required for the project
-As mentioned earlier, there is a single event listener that handles all of the save buttons by utilizing the .target method
-I wrote code to differentiate both military time (useful for most of the algorithms) and standard time (looks better on the displays). I could have used Moment.js for both of these values, but I enjoyed writing the code for the standard time.
-class names that adhere to bootstrap functionality, allowing for simpler styling, particularly the grid layout
-Utilizing multiple formats from Moment.js

## My favorite Bit of Code in This project
This piece of code is responsible for the live updating of the date at the top of the page (every second) and the live re-coloring of the rows (every hour)
```javascript
    var currentHour = (moment().format("H"))
    //uptades currentHour and the displayes date/time every second
    //also redraws the page if the hour changes, in order to keep the color coding of the rows up to date!
    setInterval(function(){
        var previousHour = currentHour
        currentHour = (moment().format("H"))
        if(currentHour != previousHour){
            //redraw the rows
            $(".container").empty()
            populateRows(currentHour)
            populateTextAreas()
        }
        $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"))  
    }, 1000)
```
And here is the code that does the color coding for past, present, and future.  It works in conjunction with pre-defined CSS class selectors
```javascript
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
```

## Learning Points From This Project
-Although this project is simpler than some of the previous, I feel like I learned to keep the code more organized
-I learned to pseudo code more and to relax and think before I code
-This was my first project with JQuery and a third-party API

## -By Mike Seaman
