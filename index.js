var seconds=0;
var minutes=0;
var interval;
function Start()
{
    if(interval===undefined)
    {
        interval=setInterval(TinhThoiGian,1000);
    } 
}
function Stop()
{
    clearInterval(interval);
    interval=undefined;
}
function Reset()
{
    clearInterval(interval);
    document.getElementById("time").innerHTML = `00:00`;
    seconds=0;
    minutes=0;
    interval=undefined;
}
function TinhThoiGian()
{
    var secondsOutput;
    var minutesOutput;
    seconds+=1;
    if(seconds==60)
    {
        seconds=0;
        minutes+=1;
    }
    // Hien thi thoi gian dung dinh dang
    if(seconds<=9)
    {
        secondsOutput=`0${seconds}`;
    }
    else
    {
        secondsOutput=`${seconds}`;
    }
    if(minutes<=9)
    {
        minutesOutput=`0${minutes}`;
    }
    else
    {
        minutesOutput=`${minutes}`;
    }
    document.getElementById("time").innerHTML = `${minutesOutput}:${secondsOutput}`;
}