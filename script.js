$(start);

function start() {
  $("#currentDay").text(dayjs().format("dddd, MMMM Do"));
  setTimeColor();
  setInterval(setTimeColor, 60000);

  $(".time-block").each(function(){
    var blockId = $(this).attr("id");
    $("#" + blockId + " textarea").text(localStorage.getItem(dayjs().format("DDDDYYYY")+blockId));
  });

  $(".saveBtn").on("click",saveEvent);
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

function saveEvent(event) {
  var hourId = $(this).parent().attr("id");
  localstorage.setItem(moment().format("DDYYYY")+hourId, $("#"+hourId+"textarea").val());
}
