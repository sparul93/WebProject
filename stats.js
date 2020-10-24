document.getElementsByClassName("lastmodified")[0].innerHTML+=new Date(document.lastModified);

var date = new Date();
var opening= new Date().setHours(8);
var closing= new Date().setHours(20);
var elem=document.getElementById("openstatus");
if(date>opening && date<closing){
    elem.innerHTML+="We Are Open";
    elem.style.color="green";

}else{
   elem.innerHTML+="We Are Closed";
   elem.style.color="red";
}