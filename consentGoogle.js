window.addEventListener("load", function () {
  try {
    const button = document.evaluate(
      "/html/body/c-wiz/div/div/div/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div/div/button",
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    if (button) {
      button.click();
    }
  } catch (error) {
    console.error("Error [consent google]:", error);
  }
});
