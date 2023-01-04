
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




