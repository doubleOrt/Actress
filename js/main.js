

function changeNavColor(navBarClassName) {
// body scroll is the current y scroll offset of the body
var bodyScroll = document.body.scrollTop;
// these conditional changes the color of the navigation bar if bodyscroll is bigger than the window height

if(bodyScroll + 45 >= document.getElementById("secondDiv").offsetTop) {
for(var i = 0;i<document.getElementsByClassName(navBarClassName).length;i++) {
document.getElementsByClassName(navBarClassName)[i].style.color = "lightgrey";
document.getElementsByClassName(navBarClassName)[i].children[0].style.backgroundColor = "lightgrey";
}


for(var d = 0;d<document.getElementById("circles").children.length;d++) {
document.getElementById("circles").children[d].className = "";
}
document.getElementById("circles").children[1].className = "active";

}
else {
for(var i = 0;i<document.getElementsByClassName(navBarClassName).length;i++) {
document.getElementsByClassName(navBarClassName)[i].style.color = "white";
document.getElementsByClassName(navBarClassName)[i].children[0].style.backgroundColor = "white";
}

for(var d = 0;d<document.getElementById("circles").children.length;d++) {
document.getElementById("circles").children[d].className = "";
}
document.getElementById("circles").children[0].className = "active";

}

if(bodyScroll >= document.getElementById("secondDiv").offsetTop) {
for(var i = 0;i<document.getElementsByClassName(navBarClassName).length;i++) {
document.getElementsByClassName(navBarClassName)[i].style.color = "lightgrey";
document.getElementsByClassName(navBarClassName)[i].children[0].style.backgroundColor = "lightgrey";
document.getElementsByClassName(navBarClassName)[i].style.textShadow = "none";
document.getElementsByClassName(navBarClassName)[i].children[0].style.boxShadow = "none";
}
document.getElementById("navBar").children[0].children[1].children[0].style.color = "grey";
document.getElementById("navBar").children[0].children[1].children[0].children[0].style.backgroundColor = "grey";
}

if(bodyScroll + 300 >= document.getElementById("secondDiv").offsetTop) {
for(var d = 0;d<document.getElementById("circles").children.length;d++) {
document.getElementById("circles").children[d].className = "";
}
document.getElementById("circles").children[1].className = "active";
}
else {

for(var d = 0;d<document.getElementById("circles").children.length;d++) {
document.getElementById("circles").children[d].className = "";
}
document.getElementById("circles").children[0].className = "active";

}

if(bodyScroll + 300 >= document.getElementById("thirdDiv").offsetTop) {
for(var d = 0;d<document.getElementById("circles").children.length;d++) {
document.getElementById("circles").children[d].className = "";
}
document.getElementById("circles").children[2].className = "active";
}



if(bodyScroll + 300 >= document.getElementById("fourthDiv").offsetTop) {
for(var d = 0;d<document.getElementById("circles").children.length;d++) {
document.getElementById("circles").children[d].className = "";
}
document.getElementById("circles").children[3].className = "active";
}

// add shadow to active nav element

if(bodyScroll >= document.getElementById("fifthDiv").offsetTop) {
for(var i = 0;i<document.getElementsByClassName(navBarClassName).length;i++) {
document.getElementsByClassName(navBarClassName)[i].style.color = "white";
document.getElementsByClassName(navBarClassName)[i].children[0].style.backgroundColor = "white";
}

document.getElementById("navBar").children[0].children[2].children[0].style.textShadow = "0 0 10px white,0 0 10px white";
document.getElementById("navBar").children[0].children[2].children[0].children[0].style.boxShadow = "0 0 10px white,0 0 10px white";
}

// change active circle to fifth circle

if(bodyScroll + 300 >= document.getElementById("fifthDiv").offsetTop) {
for(var d = 0;d<document.getElementById("circles").children.length;d++) {
document.getElementById("circles").children[d].className = "";
}
document.getElementById("circles").children[4].className = "active";

}

// change active circle to sixth circle

if(bodyScroll + 300 >= document.getElementById("sixthDiv").offsetTop) {
for(var d = 0;d<document.getElementById("circles").children.length;d++) {
document.getElementById("circles").children[d].className = "";
}
document.getElementById("circles").children[5].className = "active";
}

}






var arrOfHovered = [];

function triHovered() {
event.target.style.webkitFilter = "grayscale(100%)";
}








var scrollInterval;
var theOffset = 0;

function scrollTo(targetElem,minus,intervalTime) {
event.preventDefault();
if(scrollInterval == undefined){
theOffset = document.getElementById(targetElem).offsetTop;
scrollInterval = setInterval(function(){scrollSubtle(document.body.scrollTop,minus,minus);},intervalTime);
}
}

function scrollSubtle(currentOffset,elemPosNeg,elemPos) {

if(currentOffset == theOffset) {
clearInterval(scrollInterval,1);
scrollInterval = undefined;
}

else {
if(theOffset > currentOffset) {
if(theOffset - currentOffset < 50) {
document.body.scrollTop += (theOffset - currentOffset) - elemPosNeg;
clearInterval(scrollInterval,1);
scrollInterval = undefined;
return;
}
document.body.scrollTop += 25;
}

else {
if(currentOffset - theOffset < 50) {
document.body.scrollTop -= (currentOffset - theOffset) + elemPos;
clearInterval(scrollInterval,1);
scrollInterval = undefined;
return;
}
document.body.scrollTop -= 25;
}
}
}

var movieDescriptions0 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada nibh sapien, suscipit varius elit sollicitudin varius. Maecenas vel tincidunt nisl. In feugiat, lectus sit amet ornare fringilla, erat ante tincidunt nisl, sed mattis massa augue vitae erat.";
var movieDescriptions1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ultrices dolor. Nullam interdum porttitor tempor. Pellentesque malesuada euismod massa vitae ullamcorper. ";
var movieDescriptions2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget ultrices dolor. Nullam interdum porttitor tempor. Pellentesque malesuada euismod massa vitae ullamcorper. Etiam neque turpis, bibendum quis imperdiet eu, porta nec sapien. Maecenas et lorem sed libero porta malesuada.";
var descriptionsArr = [movieDescriptions0,movieDescriptions1,movieDescriptions2];

var prevHovered;
var curPara;
var curParaIndex = movieDescriptions0;

function changeContents(contentParent) {

var contentsParent = document.getElementById(contentParent);
var hoveredMovie = event.target.getAttribute("data-movie");
if(prevHovered == hoveredMovie) {
return;
}
prevHovered = hoveredMovie;
contentsParent.children[0].innerHTML = hoveredMovie;

if(hoveredMovie == "game of thrones") {
contentsParent.children[1].innerHTML = movieDescriptions0;
return;
}

var splicedOr = false;
var paraIndex = Math.floor(Math.random()*descriptionsArr.length);
var pastParaIndex = descriptionsArr[paraIndex];
if(curParaIndex == descriptionsArr[paraIndex]) {
splicedOr = true;
descriptionsArr.splice(paraIndex,1);
paraIndex = Math.floor(Math.random()*descriptionsArr.length);
}
curParaIndex = descriptionsArr[paraIndex];

contentsParent.children[1].innerHTML = descriptionsArr[paraIndex];

if(splicedOr == true) {
descriptionsArr.push(pastParaIndex);
}
}



$("#socialMediaToggle").click(function(){
    $("#seventhDiv").slideToggle();
 $('html, body').animate({
        scrollTop: $("#seventhDiv").offset().top
    }, 500);
	if($("#bottomChevron").attr("class") == "fa fa-chevron-circle-down") {
	
	$("#bottomChevron").removeClass("fa fa-chevron-circle-down");
	$("#bottomChevron").addClass("fa fa-chevron-circle-up");
	
	}
	
	else {
	$("#bottomChevron").removeClass("fa fa-chevron-circle-up");
	$("#bottomChevron").addClass("fa fa-chevron-circle-down");
	}
});

