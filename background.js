console.log("Parker and JD's day at the coffee shop.");
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("We changed the color to green.");
    });
});