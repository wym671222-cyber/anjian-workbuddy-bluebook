import DefaultTheme from "vitepress/theme";
import HomePage from "./components/HomePage.vue";

import "@fontsource/silkscreen/400.css";
import "@hackernoon/pixel-icon-library/fonts/iconfont.css";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("HomePage", HomePage);
  },
};
