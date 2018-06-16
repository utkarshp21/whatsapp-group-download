$('#app').on("click",'._1WBXd', function () {
    setTimeout(addButton, 100);
});

var addButton = function () {

    var button_tag = document.createElement("div");
    button_tag.innerHTML = '<div id="DownloadButton" class="_14oqx" role="button"><div class="DcItJ"><div class="_3WCza"><span class="_3LL06">Download Group Contacts</span></div></div></div>';
    
    var menu_dom = document.getElementsByClassName("AfVTG")[0].children[3];
    menu_dom.prepend(button_tag);
     
    $("#DownloadButton").click(function () {
         downloadInfo()
    });
}

var downloadInfo = function () {
        
        var body_elem = document.getElementsByTagName("BODY")[0];

        var loading_elem = document.createElement("div");

        loading_elem.innerHTML = '<div id="loadingElem" style="width:100%;height:100%;background-color: #2321217a;z-index: 10000;position: absolute;color: white;text-align: center;font-weight: 400;font-size: 22px;"><h2 style="position: relative;top: 50%;transform: translateY(-50%);">Downloading Contacts.....</h2></div>';
        body_elem.prepend(loading_elem)
        
        var objDiv = $("._2sNbV")[0]
        
        objDiv.scrollTop = objDiv.scrollHeight;
        
        var group_dict = {}

        $(objDiv).scroll(function () {
                
             var contact_obj = document.getElementsByClassName("_2sNbV")[0].getElementsByClassName("_1CRb5 _34vig")[4].children[1].children[0].children
             for (var i = 0; i < contact_obj.length; i++) {
                var base_path = contact_obj[i].children[0].children[0];
                var contact_number = base_path.children[1].children[0].children[0].children[0].innerText;
                
                if (!(contact_number in group_dict)) {
                     var name_path = base_path.children[1].children[1].children[1].children[0].children[0];
                     
                     if (name_path) {
                         var display_name = name_path.innerText;
                     }else{
                         var display_name = null;
                     }
                   
                    var country_code = ''
                    
                    
                    if(contact_number[0] == "+"){
                        for(var i=0 ; i<3 ; i++){
                            if (contact_number[i] != ' '){
                                country_code += contact_number[i];
                            }else{
                                break;
                            }
                        }
                    }
                       
                    group_dict[contact_number] = {
                         "display_name":display_name,
                         "country_code":country_code
                     }
                }                
             }
        });
         
        $(objDiv).animate({
            scrollTop: $(objDiv).offset().top,
        }, 4000
        ,function () {
            $("#loadingElem").remove();
            console.log(group_dict)
            console.log(Object.keys(group_dict).length)
        });
       
}