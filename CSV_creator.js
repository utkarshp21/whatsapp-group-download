function convertToCSV(dict) {
    //Convert array of objects to CSV 
    var str = 'Contact Number,Member Name,Country Code' + '\r\n';;

    for ( key in dict) {
        var line = '';
		line=key
        for ( val in dict[key]) {
            if (line != '') line += ','

            line += dict[key][val];
        }
        str += line + '\r\n';
    }
    return str;
}

function exportCSVFile(items, fileTitle) {

    if(fileTitle==""){
		fileTitle="Contacts";
	}
    var csv = this.convertToCSV(items);

    var exportedFilename = fileTitle + '.csv';

    var link = document.createElement("a");
    var url = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    link.setAttribute("href", url);
    link.setAttribute("download", exportedFilename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
}







