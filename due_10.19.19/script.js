var now = moment();
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

function timeHour(){
    for (var i=9;i<17; i++){
        var tRow = $("<tr>");
        var hour=$("hour")
        $(".hour").text (i + ":00")
        tRow.append(hour)
    }
}

function timeColor(now){
    if (moment().hour()<now){
        $(textarea).addclass (".past")
    }
    if (moment().hour()>now){
        $(textarea).addclass (".future")
    }
    if (moment().hour()===now){
        $(textarea).addclass (".present")
    }
}

timeHour()
timeColor(now)
