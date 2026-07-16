import { defineAsyncComponent } from "vue";
import DefaultTheme from "vitepress/theme-without-fonts";
import HomePage from "./components/HomePage.vue";

import "./fonts.css";
import "./style.css";

const copyTextWithFallback = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.fontSize = "12pt";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand("copy");
    } finally {
      textarea.remove();
    }
  }
};

const installReliableCopyButtons = () => {
  const browserWindow = window as typeof window & {
    __anjianReliableCopyButtonsInstalled?: boolean;
  };
  if (browserWindow.__anjianReliableCopyButtonsInstalled) return;
  browserWindow.__anjianReliableCopyButtonsInstalled = true;

  window.addEventListener(
    "click",
    async (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const button = target.closest<HTMLButtonElement>(
        'div[class*="language-"] > button.copy',
      );
      if (!button) return;

      event.stopImmediatePropagation();

      const parent = button.parentElement;
      const code = parent?.querySelector("pre code");
      if (!parent || !code) return;

      const clone = code.cloneNode(true) as HTMLElement;
      clone
        .querySelectorAll(".vp-copy-ignore, .diff.remove")
        .forEach((node) => node.remove());

      let text = clone.textContent || "";
      if (/language-(shellscript|shell|bash|sh|zsh)/.test(parent.className)) {
        text = text.replace(/^ *(\$|>) /gm, "").trim();
      }

      if (!(await copyTextWithFallback(text))) return;

      button.classList.add("copied");
      window.setTimeout(() => {
        button.classList.remove("copied");
        button.blur();
      }, 2000);
    },
    true,
  );
};

const scrollActiveSidebarItemIntoView = () => {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const sidebar = document.querySelector<HTMLElement>(".VPSidebar");
      const activeItem = sidebar?.querySelector<HTMLElement>(
        ".VPSidebarItem.is-active",
      );

      if (!sidebar || !activeItem) return;

      const sidebarRect = sidebar.getBoundingClientRect();
      const activeRect = activeItem.getBoundingClientRect();
      const isVisible =
        activeRect.top >= sidebarRect.top &&
        activeRect.bottom <= sidebarRect.bottom;

      if (!isVisible) {
        sidebar.scrollTo({
          top:
            sidebar.scrollTop +
            activeRect.top -
            sidebarRect.top -
            sidebar.clientHeight / 2 +
            activeRect.height / 2,
          behavior: "smooth",
        });
      }
    });
  });
};

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("HomePage", HomePage);
    app.component(
      "MermaidDiagram",
      defineAsyncComponent(() => import("./components/MermaidDiagram.vue")),
    );

    if (typeof window !== "undefined") {
      installReliableCopyButtons();

      const previousAfterRouteChange = router.onAfterRouteChange;

      router.onAfterRouteChange = async (to) => {
        await previousAfterRouteChange?.(to);
        scrollActiveSidebarItemIntoView();
      };

      scrollActiveSidebarItemIntoView();
    }
  },
};
