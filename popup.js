// Get the current active tab
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let url = tabs[0].url;
    let statusElement = document.getElementById('status');

    // Check if the URL starts with HTTPS or HTTP
    if (url.startsWith('https://')) {
        statusElement.textContent = 'This site is using HTTPS.';
        statusElement.style.color = 'green';
    } else if (url.startsWith('http://')) {
        statusElement.textContent = 'This site is using HTTP.';
        statusElement.style.color = 'red';
    } else {
        statusElement.textContent = 'This site does not use HTTP/HTTPS.';
        statusElement.style.color = 'orange';
    }
});