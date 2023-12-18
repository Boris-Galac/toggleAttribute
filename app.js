const btn = document.querySelector(".btn");
const heading = document.querySelector(".heading");

function toggleActive(data, element) {
  const isActive = element.getAttribute(`data-${data}`);
  const condition = isActive === "true" ? "false" : "true";
  element.setAttribute(`data-${data}`, condition);
}

btn.addEventListener("click", () => {
  toggleActive("active", heading);
});
