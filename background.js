chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        const activityData = {
            url: tab.url,
            title: tab.title,
            timestamp: new Date().toISOString(),
        };

        // Store activity data in local storage
        chrome.storage.local.get({ activities: [] }, (result) => {
            const activities = result.activities;
            activities.push(activityData);
            chrome.storage.local.set({ activities: activities });
        });
    }
});