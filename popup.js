document.getElementById('openChatGPT').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://chatgpt.com/?model=gpt-4o&temporary-chat=true' });
});
document.getElementById('openMaps').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://www.google.com/maps/@40.215729,-4.2352874,1520556m/data=!3m1!1e3?entry=ttu' });
});
document.getElementById('openGithub').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://github.com/orgs/Innogando/repositories' });
});
document.getElementById('openX').addEventListener('click', function() {
    chrome.tabs.create({ url: 'https://x.com/home' });
});
document.getElementById('openExtensions').addEventListener('click', function() {
    chrome.tabs.create({ url: 'chrome://extensions' });
});