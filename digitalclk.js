function clk()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var dy=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;

        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm} ${am_pm}`
    document.getElementById("time").innerHTML=fullTime
    document.getElementById("sec").innerHTML=ss
    if(mm==0)
    {
        mm="Jan"
    }
    else if(mm==1)
    {
        mm="Feb"
    }
    else if(mm==2)
    {
        mm="Mar"
    }
    else if(mm==3)
    {
        mm="Apr"
    }
    else if(mm==4)
    {
        mm="May"
    }
    else if(mm==5)
    {
        mm="Jun"
    }
    else if(mm==6)
    {
        mm="Jul"
    }
    else if(mm==7)
    {
        mm="Aug"
    }
    else if(mm==8)
    {
        mm="Sept"
    }
    else if(mm==9)
    {
        mm="Oct"
    }
    else if(mm==10)
    {
        mm="Nov"
    }
    else if(mm==11)
    {
        mm="Dec"
    }
    var fullDate=`${dd}/${mo}/${yy}`
    var bdy=document.querySelector("body")
    document.getElementById("date").innerHTML=fullDate

    switch(dy)
    {
        case 0: dy="Sunday"
        bdy.style.backgroundImage="url(sun.jpg)"
        break;
        case 1: dy="Monday"
        bdy.style.backgroundImage="url(mon.jpg)"
        break;
        case 2: dy="Tuesday"
        bdy.style.backgroundImage="url(tue.jpg)"
        break;
        case 3: dy="Wednesday"
        bdy.style.backgroundImage="url(wed.jpg)"
        break;
        case 4: dy="Thursday"
        bdy.style.backgroundImage="url(thu.jpg)"
        break;
        case 5: dy="Friday"
        bdy.style.backgroundImage="url(fri.jpg)"
        break;
        case 6: dy="Saturday"
        bdy.style.backgroundImage="url(sat.jpg)"
        break;
    }
    document.getElementById("day").innerHTML=dy
    setTimeout(clk,1000);
}
function greet()
{
    var date=new Date()
    var time=date.getHours()
    // var time=10;
    if(time>=5&&time<12)
    {
        document.getElementById("msg").innerHTML="Good Morning!!"
        document.getElementById("vid").src="sunrise.mp4"
        document.getElementById("container").style.backgroundColor="rgba(219, 245, 255, 0.619)"
        document.getElementById("time").style.color="black"
        document.getElementById("date").style.color="darkblue"
        document.getElementById("day").style.color="darkblue"
        document.getElementById("sec").style.color="white"
    }
    else if(time>=12&&time<16)
    {
        document.getElementById("msg").innerHTML="Good Afternoon!!"
        document.getElementById("vid").src="afternoon.mp4"
    }
    else if(time>=16&&time<20)
    {
        document.getElementById("msg").innerHTML="Good Evening!!"
        document.getElementById("vid").src="evng.mp4"
        document.getElementById("container").style.backgroundColor="rgba(0, 0, 0, 0.5)"
        document.getElementById("time").style.color="white"
        document.getElementById("date").style.color="wheat"
        document.getElementById("day").style.color="wheat"
        document.getElementById("sec").style.color="black"
    }
    else
    {
        document.getElementById("msg").innerHTML="Good Night!!"
        document.getElementById("vid").src="night.mp4"
        document.getElementById("container").style.backgroundColor="rgba(0,0,0,0.57)"
        document.getElementById("time").style.color="white"
        document.getElementById("date").style.color="wheat"
        document.getElementById("day").style.color="wheat"
        document.getElementById("sec").style.color="black"
    }
}
greet()
function removeTheGreetWindow()
{
    document.getElementById("greet").style.display="none"
}
setTimeout(removeTheGreetWindow,5000)
function loadAlarm()
{
    document.getElementById("alarm").style.display="flex"
}
function removeAlarm()
{
    document.getElementById("alarm").style.display="none"
}
var audioFile=new Audio()
audioFile.src="./audio.mp3"
function setAlarm()
{
    var select=document.querySelectorAll("select")
    var userhh=select[0].value
    var usermm=select[1].value
    var useram_pm=select[2].value
    console.log(userhh,usermm,useram_pm)
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;

        }
    }
    if(hh==0)
    {
        hh=12;
    }
    console.log(hh,mm,am_pm)
    if(userhh==hh&&usermm==mm&&useram_pm==am_pm)
    {
        audioFile.play();
    }
    else
    {
        audioFile.pause()
    }
    setTimeout(setAlarm,1000)
    document.getElementById("alarm").style.display="none"   
}
    