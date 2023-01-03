
$(document).ready(function(){
  $(".saveBtn").on("click",function() {

    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    console.log('value:', value);
    console.log('time:', time);

    localStorage.setItem(time, value);
  })
});

$(start)

function start() {
  $("#currentDay").text(dayjs().format("dddd, MMMM Do"));
  setTimeColor();
  setInterval(setTimeColor, 60000);

  $(".time-block").each(function(){
    var blockId = $(this).attr("id");
    $("#" + blockId + " textarea").text(localStorage.getItem(dayjs().format("DDDDYYYY")+blockId));
  });
}

function setTimeColor() {
  $(".time-block").each(function() {
    var hourSquare = parseInt($(this).attr("id").replace("hour-",""));
    var currentSquare = parseInt(dayjs().format("H"));

    $(this).removeClass("past present future");
    if(hourSquare < currentSquare) {
      $(this).addClass("past");
    } else if (hourSquare > currentSquare) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

setTimeColor();

setInterval(function(){
  setTimeColor();
}, 15000);

// Retrieves user input from local storage and displays it in the correct time slot.

var hour9 = localStorage.getItem("hour-9");
$("#hour-9 .description").val(hour9);

var hour10 = localStorage.getItem("hour-10");
$("#hour-10 .description").val(hour10);

var hour11 = localStorage.getItem("hour-11");
$("#hour-11 .description").val(hour11);

var hour12 = localStorage.getItem("hour-12");
$("#hour-12 .description").val(hour12);

var hour13 = localStorage.getItem("hour-13");
$("#hour-13 .description").val(hour13);

var hour14 = localStorage.getItem("hour-14");
$("#hour-14 .description").val(hour14);

var hour15 = localStorage.getItem("hour-15");
$("#hour-15 .description").val(hour15);

var hour16 = localStorage.getItem("hour-16");
$("#hour-16 .description").val(hour16);

var hour17 = localStorage.getItem("hour-17");
$("#hour-17 .description").val(hour17);

