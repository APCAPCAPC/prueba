$(window).load(function() {
    setTimeout("$('.loader').fadeOut('slow');console.log('cleaning loading gif')",400);
});

function changecolor(x) {
	var l = document.getElementById("1");
	l.style.className = "red";
	document.getElementById("1").style.className="red";
}