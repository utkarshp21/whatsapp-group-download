
function convertToCSV(dict) {
    
    var str = 'Number,Name,Country Code' + '\r\n';;

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

    var csv = this.convertToCSV(items);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
	//Needed for IE as it always attempts to download blob[data] rather than from some url
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}







