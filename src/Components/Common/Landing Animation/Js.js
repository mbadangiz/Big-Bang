export function MyComponent() {
  const Box3 = document.querySelector(".items");
  const Box2 = document.querySelector(".items2");
  const Box1 = document.querySelector(".items1");
  // const Box1 = document.querySelector(".items1");
  window.onscroll = function () {
    if (window.pageYOffset > 200) {
      SearchModal.style.bottom = "-370px";
    } else SearchModal.style.bottom = "80px";

    if (window.pageYOffset > 400) {
      Box1.className = "items show w-full flex-row-all-center gap-10 mt-5";
    } else Box1.className = "w-full opacity-0";

    if (window.pageYOffset > 800) {
      Box2.className = "items show w-full flex-row-all-center gap-10 mt-5";
    } else Box2.className = "w-full opacity-0";

    if (window.pageYOffset > 1400) {
      Box3.className = "items show w-full flex-row-all-center gap-10 mt-5";
    } else Box3.className = "w-full opacity-0";
  };
}
