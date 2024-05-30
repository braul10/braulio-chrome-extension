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
  if (command === "open_url") {
    chrome.tabs.create(
      { url: "https://chatgpt.com/?model=gpt-4o&temporary-chat=true" },
      function (tab) {
        chrome.tabs.update(tab.id, { pinned: true });
      }
    );
  } else if (command === "open_maps_in_incognito") {
    chrome.windows.create(
      {
        url: "https://www.google.com/maps/@40.215729,-4.2352874,1520556m/data=!3m1!1e3?entry=ttu",
        incognito: true,
      },
      function (window) {
        console.log("Incognito window created with Google Maps");
      }
    );
  }
});
