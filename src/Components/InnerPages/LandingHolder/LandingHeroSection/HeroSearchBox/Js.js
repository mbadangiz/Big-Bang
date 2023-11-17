export function MyComponent() {
  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      SearchModal.style.bottom = "-370px";
    } else SearchModal.style.bottom = "80px";
  };
}
