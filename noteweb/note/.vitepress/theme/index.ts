import Theme from "vitepress/theme";
// import { h, watch } from "vue";
// import HomePage from "./components/HomePage.vue";

import './rainbow.css'
import './vars.css'
import './overrides.css'
import "./index.css";
import "uno.css";

let homePageStyle: HTMLStyleElement | undefined

export default {
  ...Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     "home-features-after": () => h(HomePage),
  //   });
  // },
  // enhanceApp({ router }) {
  //   if (typeof window === "undefined") return;
  //   watch(
  //     () => router.route.data.relativePath,
  //     () => updateHomePageStyle(location.pathname === "/"),
  //     { immediate: true }
  //   );
  // },
};

if (typeof window !== "undefined") {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome"))
    document.documentElement.classList.add("browser-chrome");
  else if (browser.includes("firefox"))
    document.documentElement.classList.add("browser-firefox");
  else if (browser.includes("safari"))
    document.documentElement.classList.add("browser-safari");
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;

    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;

    homePageStyle.remove();
    homePageStyle = undefined;
  }
}

// setTimeout(()=>{this.document.querySelector("a")},0)
// document.addEventListener("visibilitychange", function () {
//   if (document.visibilityState === "hidden") {
//     document.title = "死鬼~去哪了o(╥﹏╥)o";
//   } else {
//     document.title = "欢迎使用";
//   }
// });