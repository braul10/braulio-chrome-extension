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
      "/html/body/c-wiz/div/div/div/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div/div/button",
    );
    await clickButton(
      "/html/body/div[1]/div[3]/div[8]/div[9]/div/div/div[1]/div[1]/ul/li[1]/button",
      1000
    );
    await clickButton(
      "/html/body/div[1]/div[3]/div[8]/div[25]/div/div[2]/ul/div[2]/button",
      100
    );
    await clickButton(
      '//*[@id="settings"]/div/div[2]/ul/div[3]/li/div/button',
      100
    );
  } catch (error) {
    console.error("Error [consent google]:", error);
  }
});
