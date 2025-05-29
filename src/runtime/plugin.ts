import { defineNuxtPlugin } from "#app";

import { computeNegativeBordersStylesForElement } from "negative-borders";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<
    HTMLElement,
    {
      size: string;
      color: string;
      position: "bottom" | "top" | "left" | "right";
      before?: boolean;
      after?: boolean;
    }
  >("negative-borders", {
    mounted(el, binding) {
      if (import.meta.server) return;

      el.dataset.negativeBordersSize = binding.value.size;
      el.dataset.negativeBordersColor = binding.value.color;
      el.dataset.negativeBordersPosition = binding.value.position;
      el.dataset.negativeBordersShowBefore =
        binding.value.before !== false ? "true" : "false";
      el.dataset.negativeBordersShowAfter =
        binding.value.after !== false ? "true" : "false";

      computeNegativeBordersStylesForElement(el);
    },
  });
});
