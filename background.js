chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "viewPassword",
    title: "VER CONTRASINAL",
    contexts: ["editable"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "viewPassword") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: togglePasswordVisibility,
    });
  }
});

function togglePasswordVisibility() {
  const activeElement = document.activeElement;
  if (
    activeElement &&
    activeElement.tagName === "INPUT" &&
    activeElement.type === "password"
  ) {
    activeElement.type = "text";
  }
}

chrome.commands.onCommand.addListener(function (command) {
  if (command === "open_chatgpt") {
    chrome.tabs.create(
      { url: "https://chatgpt.com/?model=gpt-4o&temporary-chat=true" },
      function (tab) {
        chrome.tabs.update(tab.id, { pinned: true });
      }
    );
  } else if (command === "open_maps_in_incognito") {
    chrome.windows.getCurrent({ populate: false }, function (currentWindow) {
      url =
        "https://www.google.com/maps/@40.215729,-4.2352874,1520556m/data=!3m1!1e3?entry=ttu";
      if (currentWindow.incognito) {
        chrome.tabs.create({
          url: url,
        });
      } else {
        chrome.windows.create({
          url: url,
          incognito: true,
        });
      }
    });
  } else if (command === "open_github") {
    chrome.tabs.create({ url: "https://github.com/braul10" });
  } else if (command === "openIncognitoAndClose") {
    chrome.windows.getCurrent((currentWindow) => {
      chrome.windows.create({ incognito: true }, (newWindow) => {
        chrome.windows.remove(currentWindow.id);
      });
    });
  }
});
