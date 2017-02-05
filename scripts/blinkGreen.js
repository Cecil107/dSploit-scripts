// Text is blinking green and red

<script type="text/javascript">
window.onload=function() {
	var isGreen = false;
	var selectAll = document.body;
	setInterval(function() {
		if (!isGreen) {
	        selectAll.style.color = "green";
	        isGreen = true;
	    } else {
	    	selectAll.style.color = "red";
	    	isGreen = false;
	    }
    }, 100);
}
</script>
