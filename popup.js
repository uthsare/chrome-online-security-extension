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

function displayActivities(activities) {
    const activitiesDiv = document.getElementById('activities');
    activitiesDiv.innerHTML = '';
    activities.forEach(activity => {
        const div = document.createElement('div');
        div.className = 'activity';
        div.textContent = `Visited ${activity.url} on ${activity.timestamp}`;
        activitiesDiv.appendChild(div);
    });
}

// Load existing activities on popup open
chrome.storage.local.get({ activities: [] }, (result) => {
    displayActivities(result.activities);
});