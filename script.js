$(document).ready(function() { // $(document) the document element, The .ready() method tells the browser not to fire until the rest of the page has been loaded.
  $(".saveBtn").on("click", function() { // References the buttons with the "saveBtn" class. It uses the on() method- which handles all events. The first parameter is the event we are using "click". The second parameter is whatever code you want to fire when that event is heard.
    // get nearby values
    var value = $(this).siblings(".description").val(); // line 4 is referencing the value of the text area "description", within the time-block div.
    var time = $(this).parent().attr("id"); // References the  div with class time-block. So we can reference what time-block we are going to enter text in.
    // save in localStorage
    localStorage.setItem(time, value); // Take the values of the two variables we defined above, and save those values to localStorage.
  });
  function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours(); // moment() method calls for an entire date and time. Here we are only calling for the current hour, and setting that as our currentHour variable.
    // loop over time blocks
    $(".time-block").each(function() { // References the time-block div, and runs the function on each div with the time-block class.
      var blockHour = parseInt($(this).attr("id").split("-")[1]); //Take the value of currentHour, puts it in to an array, splits the value at the dashes, and then references index 1 of that array. This sets the hour for each block.
      // check if we've moved past this time
      if (blockHour < currentHour) { //Says if the value of blockHour is less than the value of currentHour run the statements below.
        $(this).addClass("past"); //add the css class of "past" to the text box of each hour. changes the background color to gray in this case.
      } 
      else if (blockHour === currentHour) { // If the current hour is equal to the block hour it will.
        $(this).removeClass("past"); // Remove the class "past" to all applicable text boxes
        $(this).addClass("present"); // Add the class "present" to all applicable text boxes
      } 
      else {
        $(this).removeClass("past"); // Removes the class "past" to all applicable text boxes
        $(this).removeClass("present"); // Removes the class "present" to all applicable text boxes
        $(this).addClass("future"); // Adds the class "future" to all applicable text boxes. This changes the background color to green-ish.
      }
    });
  }
  hourUpdater(); // Calls for the hourUpdater function.
  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000); // Indicates to run the hourUpdater function every 15 seconds. So css classes can be dynamically changed as needed.
  // These lines recall the data entered to each hour box from local storage. References to grab the hour-# divs, look within the description text area and assign the stored values to their respective divs.
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  // References the #curentDay p tag. Generates the current day, date and month on the top of the screen. 
  $("#currentDay").text(moment().format("dddd, MMMM Do")); // format() method allows us to select the way the time is displayed, the moment() method will generate the current day to be formatted, and .text will display it to the #currentDay div.
  //MMMM = March
  //dddd = Day
  //Do = Adds the "th, nd, rd" after a number


});