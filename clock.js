clock();
setInterval("clock",1000);
function clock(){
    document.getElementById("clock").innerHTML="The Current Time is "+new Date().toLocaleTimeString();
}