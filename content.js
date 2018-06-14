$('#app').on("click", "[title='Menu']", function () {
	
		//Menu Specific :Contains
		$("ul._3s1D4:contains(Group info)").append('<li tabindex="-1" class="_10anr vidHz _28zBA" id="DownloadButton" data-animate-dropdown-item="true" style="opacity: 1; transform: translateY(0px);"><div class="_3lSL5 _2dGjP" role="button" title="Download Info">Download Contact Info</div></li>');
    $("#DownloadButton").click(function () {
        console.log("Button Clicked")
    });

});

