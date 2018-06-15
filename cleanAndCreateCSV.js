
function convertToCSV(objArray) {
    var array =  JSON.parse(objArray) 
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}
function exportCSVFile(header, items, fileTitle) {
    if (header) {
		//Opositte if Push, adds elements to the begining
        items.unshift(header);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

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




var header = {
    name: 'Name', // remove commas to avoid errors
    number: "Number",
    country_code: "Country Code",
};

items = [
 {name:"Himanish ", number :"888888888",country_code:"80"},
 {name:"Utkarsh ", number :"9555991205",country_code:"+91"},
 {name:"Utkarsh ", number :"9555991205",country_code:"+91"},
 {name:"Utkarsh ", number :"9555991205",country_code:"+91"}
];


var fileTitle = 'GroupContacts';
exportCSVFile(header, items, fileTitle); 