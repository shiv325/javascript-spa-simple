const wireHomeButton = (container, showAlert) => {
  const button = container.querySelector("#btnClick");

  button.addEventListener("click", () => {
    showAlert("clicked");
  });
};

export { wireHomeButton };
