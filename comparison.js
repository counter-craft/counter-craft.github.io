document.querySelectorAll(".image-comparison").forEach((comparison) => {
  const slider = comparison.querySelector(".comparison-slider");
  if (!(slider instanceof HTMLInputElement)) {
    return;
  }

  comparison.style.setProperty("--comparison-position", `${slider.value}%`);
  slider.addEventListener("input", () => {
    comparison.style.setProperty("--comparison-position", `${slider.value}%`);
  });
});
