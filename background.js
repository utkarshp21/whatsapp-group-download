chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "https://web.whatsapp.com/";
    chrome.tabs.create({
        url: newURL
    });
});