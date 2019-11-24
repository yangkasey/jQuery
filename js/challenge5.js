// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }

// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }

// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }

console.log("here");
var imgs = $("img");
var msg = "Hover over an image below.";

var i = 0;
var i = i+1;

$.each(imgs, function(i) {
	if (i < imgs.length) {
		$(imgs[i]).hover(function() {
			$("#image").css("background-image", "url('"+imgs[i].src+"')");
			$("#image").text(imgs[i].alt);
		})
	$(imgs[i]).focus(function() {
		$("#image").css("background-image", "url('"+imgs[i].src+"')");
		$("#image").text(imgs[i].alt);
	})
	$(imgs[i]).mouseleave(function() {
		$("#image").css("background-image", "url('')");
		$('#image').text(msg);
	}) 
	$(imgs[i]).blur(function() {
		$("#image").css("background-image", "url('')");
		$('#image').text(msg);
	})
}})



