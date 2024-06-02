function clickButton(xpath, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const button = document.evaluate(
        xpath,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      if (button) {
        button.click();
      }
      resolve();
    }, delay);
  });
}

window.addEventListener("load", async function () {
  try {
    await clickButton(
      "/html/body/ytd-app/ytd-consent-bump-v2-lightbox/tp-yt-paper-dialog/div[4]/div[2]/div[6]/div[1]/ytd-button-renderer[1]/yt-button-shape/button",
      200
    );
  } catch (error) {
    console.error("Error [reject youtube cookies]:", error);
  }
});
