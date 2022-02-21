var slider = document.getElementById("priceRange");
var output = document.getElementById("price");
output.innerHTML = slider.value;
slider.oninput = function printPrice() {
  output.innerHTML = this.value;
}