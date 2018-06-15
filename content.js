
$('#app').on("click", "[title='Menu']", function () {
	$("ul._3s1D4:contains(Group info)").append('<li tabindex="-1" class="_10anr vidHz _28zBA" id="DownloadButton" data-animate-dropdown-item="true" style="opacity: 1; transform: translateY(0px);"><div class="_3lSL5 _2dGjP" role="button" title="Download Info">Download Contact Info</div></li>');
    $("#DownloadButton").click(function () {
        downloadInfo()
    });
});

var downloadInfo = function () {
        
        var objDiv = $("._2sNbV")[0]
        
        objDiv.scrollTop = objDiv.scrollHeight;
        
        var group_dict = {}

        $(objDiv).scroll(function () {
                
             var contact_obj = document.getElementsByClassName("_2sNbV")[0].getElementsByClassName("_1CRb5 _34vig")[4].children[1].children[0].children
             for (var i = 0; i < contact_obj.length; i++) {
                var base_path = contact_obj[i].children[0].children[0]
                var contact_number = base_path.children[1].children[0].children[0].children[0].innerText
                
                if (!(contact_number in group_dict)) {
                     var name_path = base_path.children[1].children[1].children[1].children[0].children[0]
                     
                     if (name_path) {
                         var display_name = name_path.innerText
                     }else{
                         var display_name = null
                     }
                     
                    //  var display_picture = base_path.children[0].children[0].children[0].attributes["src"]
                         
                     group_dict[contact_number] = {
                         display_name
                        //  display_picture
                     }
                }                
             }
        });
         
        $(objDiv).animate({
            scrollTop: $(objDiv).offset().top,
        }, 5000
        ,function () {
            console.log(group_dict)
            console.log(Object.keys(group_dict).length)
        });
       
}