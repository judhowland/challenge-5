
// store localStorage for time and text
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem(time, text);
});

// add currentday at top of the browser
$("#currentDay").text(moment().format("dddd, MMM DD, YYYY"));

// load all items from localStorage
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

var auditAppts = function() {
    var currentHour = moment().hours();
    console.log(currentHour);

    $(".time-block").each(function() {
        var apptTime = parseInt($(this).attr("id"));
        
        if (currentHour > apptTime) {
            $(this).addClass("past");
        }
        else if (currentHour === apptTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
};

auditAppts();