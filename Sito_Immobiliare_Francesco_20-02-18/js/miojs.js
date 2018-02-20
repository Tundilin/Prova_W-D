
var slideIndex = 1;

function plusDivs(slider, n) {
    showDivs(slider, slideIndex += n);
}

function showDivs(slider, n) {
    var i;
	var x = new Array();
	var y = 0;
	while (document.getElementById(slider).getElementsByClassName("card-img-top")[y] != null){
		x[y] = document.getElementById(slider).getElementsByClassName("card-img-top")[y]; /* mettere i due attaccati vuol dire considerare solamente gli elementi di classe immagine discendenti dall'id scritto */
		y++;
	}

    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}