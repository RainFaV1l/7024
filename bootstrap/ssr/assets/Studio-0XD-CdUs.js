import { ref, onMounted, mergeProps, unref, useSSRContext, withCtx, createVNode, renderSlot, toDisplayString, createTextVNode, resolveDynamicComponent, createBlock, openBlock, computed, onUnmounted, watch, reactive, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { usePage, Head, Link, router } from "@inertiajs/vue3";
import { ArrowUpRightIcon, PhotoIcon, RocketLaunchIcon, HomeModernIcon, VideoCameraIcon, GlobeAltIcon, CameraIcon, BuildingOfficeIcon, WindowIcon } from "@heroicons/vue/24/outline/index.js";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import IMask from "imask";
import axios from "axios";
import { useToast } from "vue-toast-notification";
const video = "/build/assets/loader-BnLZGpJd.mp4";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$t = {
  __name: "Loader",
  __ssrInlineRender: true,
  setup(__props) {
    const showLoader = ref(true);
    const isFadingOut = ref(false);
    const showContent = ref(false);
    onMounted(() => {
      setTimeout(() => {
        isFadingOut.value = true;
        setTimeout(() => {
          showLoader.value = false;
          showContent.value = true;
        }, 1e3);
      }, 3e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (showLoader.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: [
            "fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000",
            isFadingOut.value ? "opacity-0" : "opacity-100"
          ]
        }, _attrs))} data-v-f68f6dac><video class="w-full h-full object-cover" autoplay muted playsinline data-v-f68f6dac><source${ssrRenderAttr("src", unref(video))} type="video/mp4" data-v-f68f6dac></video></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Loader.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const Loader = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-f68f6dac"]]);
const _sfc_main$s = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: unref(page).props.title
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<meta name="name" content="Your page description"${_scopeId}><meta name="description" content="Your page description"${_scopeId}>`);
          } else {
            return [
              createVNode("meta", {
                name: "name",
                content: "Your page description"
              }),
              createVNode("meta", {
                name: "description",
                content: "Your page description"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(Loader, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/App.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = /* @__PURE__ */ Object.assign({ layout: _sfc_main$s }, {
  __name: "Development",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-dvh bg-dark flex justify-center items-center font-sans" }, _attrs))}><p class="text-4xl text-white">В разработке...</p></div>`);
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Development.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "ButtonComponent",
  __ssrInlineRender: true,
  props: {
    link: {
      type: String,
      required: false
    },
    click: {
      type: Function,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "outline"
    },
    buttonType: {
      type: String,
      required: false,
      default: "button"
    },
    px: {
      type: Number,
      required: false,
      default: 36
    },
    py: {
      type: Number,
      required: false,
      default: 18
    }
  },
  setup(__props) {
    const types = [
      "outline",
      "fill"
    ];
    const props = __props;
    const getClassByType = (type) => {
      if (types.includes(type)) {
        switch (type) {
          case "outline":
            return "text-white hover:bg-white hover:text-dark";
          case "fill":
            return "bg-white text-dark hover:bg-transparent hover:text-white";
        }
      }
    };
    const getBaseClasses = (type) => {
      return `rounded-[4px] uppercase text-base border border-white leading-[140%] tracking-[1.5px] transition ` + getClassByType(type);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Link), {
        style: [
          __props.link ? null : { display: "none" },
          { paddingLeft: `${__props.px}px`, paddingRight: `${__props.px}px`, paddingTop: `${__props.py}px`, paddingBottom: `${__props.py}px` }
        ],
        href: __props.link,
        class: getBaseClasses(props.type)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<button type="button" style="${ssrRenderStyle([
        __props.click && __props.buttonType === "button" ? null : { display: "none" },
        { paddingLeft: `${__props.px}px`, paddingRight: `${__props.px}px`, paddingTop: `${__props.py}px`, paddingBottom: `${__props.py}px` }
      ])}" class="${ssrRenderClass(getBaseClasses(props.type))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button><button type="submit" style="${ssrRenderStyle([
        __props.click && __props.buttonType === "submit" ? null : { display: "none" },
        { paddingLeft: `${__props.px}px`, paddingRight: `${__props.px}px`, paddingTop: `${__props.py}px`, paddingBottom: `${__props.py}px` }
      ])}" class="${ssrRenderClass(getBaseClasses(props.type))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button><!--]-->`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ButtonComponent.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _sfc_main$p = {
  __name: "ArrowLink",
  __ssrInlineRender: true,
  props: {
    link: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-[15px] group" }, _attrs))}><div class="w-full bg-white h-[1px] opacity-10"></div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/public",
        class: "px-[30px] flex items-center justify-between"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-lg text-white opacity-80 leading-[150%] tracking-[2px]"${_scopeId}>${ssrInterpolate(__props.name)}</p><div class="relative flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ArrowUpRightIcon), { class: "absolute top-1/2 -translate-1/2 size-[20px] text-white opacity-80 icon transition-all duration-300 ease-in-out group-hover:-translate-y-[75%]" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("p", { class: "text-lg text-white opacity-80 leading-[150%] tracking-[2px]" }, toDisplayString(__props.name), 1),
              createVNode("div", { class: "relative flex items-center" }, [
                createVNode(unref(ArrowUpRightIcon), { class: "absolute top-1/2 -translate-1/2 size-[20px] text-white opacity-80 icon transition-all duration-300 ease-in-out group-hover:-translate-y-[75%]" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ArrowLink.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "About",
  __ssrInlineRender: true,
  props: {
    link: {
      type: [String, Function],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    longDescription: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: false,
      default: "top"
    }
  },
  setup(__props) {
    const allowedPositions = [
      "top",
      "center"
    ];
    const props = __props;
    const getClasses = (position) => {
      if (allowedPositions.includes(position)) {
        switch (position) {
          case "top":
            return "justify-start";
          case "center":
            return "justify-center";
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between" }, _attrs))}><div class="basis-[33%]"><div class="${ssrRenderClass([getClasses(props.position), "flex flex-col items-start gap-[40px] p-[40px] h-full"])}"><p class="text-white opacity-80 leading-[150%] tracking-[2px] w-[400px]">${ssrInterpolate(props.description)}</p>`);
      _push(ssrRenderComponent(_sfc_main$q, {
        link: props.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full bg-white h-[1px] opacity-10"></div></div><div class="basis-[67%] flex flex-col justify-between border-l border-b border-dark-border"><p class="w-[638px] text-white opacity-80 leading-[150%] tracking-[2px] py-[100px] px-[40px]">${ssrInterpolate(props.longDescription)}</p>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        name: "Смотреть примеры работ",
        link: "/",
        class: "pb-[15px]"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dilesta/Components/About.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {
  __name: "Services",
  __ssrInlineRender: true,
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between" }, _attrs))}><div class="p-[40px] w-full"><h2 class="uppercase text-4xl text-white">Наши услуги</h2><div class="mt-[40px] flex flex-wrap gap-[30px]"><!--[-->`);
      ssrRenderList(__props.services, (service) => {
        _push(`<div class="flex flex-col gap-[30px] p-[40px] pb-[70px] transition-all duration-300 ease-in-out w-[49%] last:w-[100%] border border-service-border hover:border-white backdrop-blur-[100px] rounded-[7px]"><div class="flex rounded-[7px] items-center justify-center size-[64px] border border-service-border shadow-inner-service">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), { class: "size-[20px] text-white" }, null), _parent);
        _push(`</div><div class="flex flex-col gap-[15px]"><h3 class="text-4xl text-white">${ssrInterpolate(service.title)}</h3><p class="text-lg leading-[150%] tracking-[2px] text-white opacity-80 w-[600px]">${ssrInterpolate(service.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dilesta/Components/Services.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  __name: "HeaderComponent",
  __ssrInlineRender: true,
  props: {
    click: {
      type: Function,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: "GROUP 7024"
    },
    isIndex: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative min-h-[129px]" }, _attrs))}><div class="${ssrRenderClass([__props.isIndex ? "absolute" : "fixed", "w-full z-10 backdrop-blur-2xl"])}"><header class="p-[40px]"><button class="text-[32px] uppercase text-white cursor-pointer">${ssrInterpolate(__props.title)}</button></header><div class="w-full bg-white h-[1px] opacity-10"></div></div></div>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeaderComponent.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    click: {
      type: Function,
      required: true
    },
    isIndex: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [__props.isIndex ? "w-[11%]" : "w-[9%]", "relative flex flex-col justify-start"]
      }, _attrs))}><div class="${ssrRenderClass([__props.isIndex ? "absolute" : "fixed", "h-full flex flex-col justify-start"])}"><div class="${ssrRenderClass([__props.isIndex ? "absolute right-0" : "fixed left-[9%]", "w-[1px] bg-white opacity-10 h-full"])}"></div><div class="flex items-start justify-start flex-col gap-[60px] p-[50px]"><div class="block cursor-pointer"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM43 7L1 7V9L43 9V7Z" fill="white" fill-opacity="0.8"></path></svg></div><div class="text-white text-lg uppercase tracking-[1.5px] opacity-80 whitespace-nowrap transform -rotate-90 -ml-14 mt-12 cursor-pointer">GROUP 7024 </div></div><div class="${ssrRenderClass([__props.isIndex ? "absolute left-[40px] top-[760px]" : "fixed left-[40px] bottom-[40px]", "flex items-center gap-[15px]"])}">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "hover:opacity-60 transition-all ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M18.6228 25.2147C10.6458 25.2147 6.09583 19.746 5.90625 10.646H9.90208C10.0333 17.3252 12.9791 20.1543 15.3124 20.7377V10.646H19.0751V16.4064C21.3792 16.1585 23.7998 13.5335 24.6164 10.646H28.379C27.7519 14.2043 25.1269 16.8293 23.2603 17.9085C25.1269 18.7835 28.1167 21.0731 29.2542 25.2147H25.1124C24.2228 22.4439 22.0063 20.3002 19.0751 20.0085V25.2147H18.6228Z" fill="white"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "35",
                height: "35",
                viewBox: "0 0 35 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M18.6228 25.2147C10.6458 25.2147 6.09583 19.746 5.90625 10.646H9.90208C10.0333 17.3252 12.9791 20.1543 15.3124 20.7377V10.646H19.0751V16.4064C21.3792 16.1585 23.7998 13.5335 24.6164 10.646H28.379C27.7519 14.2043 25.1269 16.8293 23.2603 17.9085C25.1269 18.7835 28.1167 21.0731 29.2542 25.2147H25.1124C24.2228 22.4439 22.0063 20.3002 19.0751 20.0085V25.2147H18.6228Z",
                  fill: "white"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "hover:opacity-60 transition-all ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.91539 17.3179C13.0174 15.1022 16.4139 13.6299 18.1195 12.9156C22.9737 10.8893 23.9941 10.5395 24.6501 10.5249C24.7959 10.5249 25.1166 10.5541 25.3352 10.729C25.5101 10.8748 25.5539 11.0643 25.583 11.21C25.6122 11.3558 25.6413 11.6619 25.6122 11.8952C25.3498 14.6648 24.2128 21.385 23.6297 24.4753C23.3819 25.7873 22.9008 26.2246 22.4343 26.2683C21.4139 26.3558 20.6413 25.5978 19.6647 24.9564C18.1195 23.9506 17.2594 23.3237 15.758 22.3325C14.0233 21.1955 15.1457 20.5686 16.137 19.5482C16.3994 19.2858 20.8746 15.2042 20.962 14.8398C20.9766 14.796 20.9766 14.6211 20.8746 14.5336C20.7725 14.4462 20.6268 14.4753 20.5101 14.5045C20.3498 14.5336 17.9008 16.1663 13.1341 19.3879C12.4343 19.8689 11.8075 20.1022 11.239 20.0876C10.6122 20.073 9.41685 19.7377 8.51306 19.4462C7.41977 19.0963 6.54513 18.9068 6.61802 18.2946C6.66175 17.9739 7.09907 17.6532 7.91539 17.3179Z" fill="white"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "35",
                height: "35",
                viewBox: "0 0 35 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M7.91539 17.3179C13.0174 15.1022 16.4139 13.6299 18.1195 12.9156C22.9737 10.8893 23.9941 10.5395 24.6501 10.5249C24.7959 10.5249 25.1166 10.5541 25.3352 10.729C25.5101 10.8748 25.5539 11.0643 25.583 11.21C25.6122 11.3558 25.6413 11.6619 25.6122 11.8952C25.3498 14.6648 24.2128 21.385 23.6297 24.4753C23.3819 25.7873 22.9008 26.2246 22.4343 26.2683C21.4139 26.3558 20.6413 25.5978 19.6647 24.9564C18.1195 23.9506 17.2594 23.3237 15.758 22.3325C14.0233 21.1955 15.1457 20.5686 16.137 19.5482C16.3994 19.2858 20.8746 15.2042 20.962 14.8398C20.9766 14.796 20.9766 14.6211 20.8746 14.5336C20.7725 14.4462 20.6268 14.4753 20.5101 14.5045C20.3498 14.5336 17.9008 16.1663 13.1341 19.3879C12.4343 19.8689 11.8075 20.1022 11.239 20.0876C10.6122 20.073 9.41685 19.7377 8.51306 19.4462C7.41977 19.0963 6.54513 18.9068 6.61802 18.2946C6.66175 17.9739 7.09907 17.6532 7.91539 17.3179Z",
                  fill: "white"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidebar.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "circle-wrapper" }, _attrs))}><div class="circle"></div></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Circle.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Circle = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$j = {
  __name: "Title",
  __ssrInlineRender: true,
  props: {
    title: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="p-[40px] w-full"><h1 class="uppercase text-[64px] text-white">${ssrInterpolate(props.title)}</h1></div><div class="w-full bg-white h-[1px] opacity-10"></div></div>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Title.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "InputComponent",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value)
    },
    error: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const inputRef = ref(null);
    let mask = null;
    const inputClasses = computed(() => {
      let base = `
    w-full bg-transparent placeholder:text-white placeholder:opacity-80 text-white
    text-leading-tracking transition-all duration-300 ease-in-out
    border rounded-[4px] outline-0 focus:border-white
  `;
      let sizeClass = "";
      if (props.size === "sm") {
        sizeClass = "text-sm py-2 px-3";
      } else if (props.size === "lg") {
        sizeClass = "text-lg py-4 px-6";
      } else {
        sizeClass = "text-base py-[17px] px-[30px]";
      }
      let borderColor = props.error ? "border-red-500" : "border-dark-border";
      let disabledClass = props.disabled ? "opacity-50 cursor-not-allowed" : "";
      return `${base} ${sizeClass} ${borderColor} ${disabledClass}`;
    });
    onMounted(() => {
      if (inputRef.value && props.type === "tel") {
        mask = IMask(inputRef.value, {
          mask: "+{7} (000) 000-00-00",
          lazy: true
        });
        mask.on("accept", () => {
          emit("update:modelValue", mask.value);
        });
      }
    });
    onUnmounted(() => {
      if (mask) {
        mask.destroy();
      }
    });
    watch(() => props.modelValue, (newValue) => {
      if (mask) {
        if (mask.value !== newValue) {
          mask.updateOptions({ lazy: false });
          mask.value = newValue;
        }
      } else if (inputRef.value) {
        inputRef.value.value = newValue;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.type === "tel") {
        _push(`<input${ssrRenderAttrs(mergeProps({
          ref_key: "inputRef",
          ref: inputRef,
          placeholder: __props.placeholder,
          type: "text",
          readonly: __props.readonly,
          disabled: __props.disabled,
          class: inputClasses.value
        }, _attrs))}>`);
      } else {
        _push(`<input${ssrRenderAttrs(mergeProps({
          ref_key: "inputRef",
          ref: inputRef,
          placeholder: __props.placeholder,
          type: __props.type,
          readonly: __props.readonly,
          disabled: __props.disabled,
          value: __props.modelValue,
          class: inputClasses.value
        }, _attrs))}>`);
      }
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/InputComponent.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "Application",
  __ssrInlineRender: true,
  setup(__props) {
    const checked = ref(true);
    const page = usePage();
    const toast = useToast();
    const form = reactive({
      name: "",
      phone: "",
      type: page.props.type
    });
    const submit = async () => {
      if (!checked.value) {
        toast.error("Согласитесь с нашими условиями.", { duration: 3e3 });
        return;
      }
      try {
        await axios.post("/application/create", form);
        toast.success("Заявка отправлена!", { duration: 8e3 });
        Object.assign(form, { name: "", phone: "" });
      } catch (error) {
        if (error.response.status === 422) {
          toast.error("Заполните поля корректно", { duration: 3e3 });
        } else {
          toast.error("Ошибка сервера, попробуйте позже", { duration: 3e3 });
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "border-t border-t-dark-border",
        id: "application"
      }, _attrs))}><div class="flex flex-col gap-[40px]"><div class="flex justify-between items-center border-b border-b-dark-border"><div class="py-[74px] px-[40px] flex items-center justify-items-start w-[42%] border-r border-r-dark-border"><h2 class="uppercase text-4xl text-white">Заявка</h2></div><div class="w-[58%] pr-[206px] px-[40px]"><p class="text-white opacity-80 leading-[150%] tracking-[2px]">Оставьте заявку, чтобы обсудить ваш проект или получить бесплатную консультацию от наших специалистов!</p></div></div><div class="px-[40px] pb-[40px]"><form class="flex flex-col items-start gap-[40px]"><div class="flex items-center gap-[30px] w-full max-w-[85%]">`);
      _push(ssrRenderComponent(_sfc_main$i, {
        placeholder: "Имя",
        modelValue: form.name,
        "onUpdate:modelValue": ($event) => form.name = $event
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, {
        placeholder: "Телефон",
        modelValue: form.phone,
        "onUpdate:modelValue": ($event) => form.phone = $event,
        type: "tel"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-[15px]"><div class="inline-flex items-center cursor-pointer"><input id="privacy" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(checked.value) ? ssrLooseContain(checked.value, null) : checked.value) ? " checked" : ""} class="peer hidden"><label for="privacy" class="w-[24px] h-[24px] border border-dark-border rounded-[2px] cursor-pointer bg-transparent flex items-center justify-center peer-checked:border-white peer-checked:bg-white transition">`);
      if (checked.value) {
        _push(`<svg class="w-4 h-4 text-dark" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</label></div><label for="privacy" class="text-white opacity-80"> Согласен с `);
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "underline hover:opacity-50 transition-all duration-300 ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` политикой конфиденциальности `);
          } else {
            return [
              createTextVNode(" политикой конфиденциальности ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</label></div>`);
      _push(ssrRenderComponent(_sfc_main$q, {
        type: "fill",
        click: () => submit(),
        px: 58,
        py: 18
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Записаться`);
          } else {
            return [
              createTextVNode("Записаться")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Application.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "FooterComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const menus = [
      {
        external: false,
        name: "Навигация",
        items: [
          {
            link: "/",
            name: "Group 7024"
          },
          {
            link: "/dilesta",
            name: "Dilesta"
          },
          {
            link: "/module",
            name: "Module"
          },
          {
            link: "/studio",
            name: "Studio 7024"
          }
        ]
      },
      {
        external: true,
        name: "Контакты",
        items: [
          {
            link: "tel:+79544355465",
            name: "+7 (954) 435-54-65"
          },
          {
            link: "mailto:group7024@mail.ru",
            name: "group7024@mail.ru"
          }
        ]
      },
      {
        external: true,
        name: "Наши работы",
        items: [
          {
            link: "",
            name: "Behance"
          },
          {
            link: "",
            name: "Pinterest"
          },
          {
            link: "",
            name: "Vimeo"
          },
          {
            link: "",
            name: "Youtube"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative z-10 border-t border-t-dark-border h-[320px] mt-[50px]" }, _attrs))}><div class="flex items-center h-full"><div class="flex flex-col pt-[50px] gap-[40px] px-[50px] border-r h-full border-r-dark-border w-[30%]"><div class="flex flex-col gap-[15px]"><h2 class="text-[32px] text-white">GROUP 7024</h2><p class="text-sm text-white opacity-80 text-leading-tracking">© 2025 GROUP 7024. All Rights Reserved.</p></div><div class="flex items-center gap-[15px]">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "hover:opacity-60 transition-all ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M18.6228 25.2147C10.6458 25.2147 6.09583 19.746 5.90625 10.646H9.90208C10.0333 17.3252 12.9791 20.1543 15.3124 20.7377V10.646H19.0751V16.4064C21.3792 16.1585 23.7998 13.5335 24.6164 10.646H28.379C27.7519 14.2043 25.1269 16.8293 23.2603 17.9085C25.1269 18.7835 28.1167 21.0731 29.2542 25.2147H25.1124C24.2228 22.4439 22.0063 20.3002 19.0751 20.0085V25.2147H18.6228Z" fill="white"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "35",
                height: "35",
                viewBox: "0 0 35 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M18.6228 25.2147C10.6458 25.2147 6.09583 19.746 5.90625 10.646H9.90208C10.0333 17.3252 12.9791 20.1543 15.3124 20.7377V10.646H19.0751V16.4064C21.3792 16.1585 23.7998 13.5335 24.6164 10.646H28.379C27.7519 14.2043 25.1269 16.8293 23.2603 17.9085C25.1269 18.7835 28.1167 21.0731 29.2542 25.2147H25.1124C24.2228 22.4439 22.0063 20.3002 19.0751 20.0085V25.2147H18.6228Z",
                  fill: "white"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "",
        class: "hover:opacity-60 transition-all ease-in-out"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path fill-rule="evenodd" clip-rule="evenodd" d="M7.91539 17.3179C13.0174 15.1022 16.4139 13.6299 18.1195 12.9156C22.9737 10.8893 23.9941 10.5395 24.6501 10.5249C24.7959 10.5249 25.1166 10.5541 25.3352 10.729C25.5101 10.8748 25.5539 11.0643 25.583 11.21C25.6122 11.3558 25.6413 11.6619 25.6122 11.8952C25.3498 14.6648 24.2128 21.385 23.6297 24.4753C23.3819 25.7873 22.9008 26.2246 22.4343 26.2683C21.4139 26.3558 20.6413 25.5978 19.6647 24.9564C18.1195 23.9506 17.2594 23.3237 15.758 22.3325C14.0233 21.1955 15.1457 20.5686 16.137 19.5482C16.3994 19.2858 20.8746 15.2042 20.962 14.8398C20.9766 14.796 20.9766 14.6211 20.8746 14.5336C20.7725 14.4462 20.6268 14.4753 20.5101 14.5045C20.3498 14.5336 17.9008 16.1663 13.1341 19.3879C12.4343 19.8689 11.8075 20.1022 11.239 20.0876C10.6122 20.073 9.41685 19.7377 8.51306 19.4462C7.41977 19.0963 6.54513 18.9068 6.61802 18.2946C6.66175 17.9739 7.09907 17.6532 7.91539 17.3179Z" fill="white"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                width: "35",
                height: "35",
                viewBox: "0 0 35 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M7.91539 17.3179C13.0174 15.1022 16.4139 13.6299 18.1195 12.9156C22.9737 10.8893 23.9941 10.5395 24.6501 10.5249C24.7959 10.5249 25.1166 10.5541 25.3352 10.729C25.5101 10.8748 25.5539 11.0643 25.583 11.21C25.6122 11.3558 25.6413 11.6619 25.6122 11.8952C25.3498 14.6648 24.2128 21.385 23.6297 24.4753C23.3819 25.7873 22.9008 26.2246 22.4343 26.2683C21.4139 26.3558 20.6413 25.5978 19.6647 24.9564C18.1195 23.9506 17.2594 23.3237 15.758 22.3325C14.0233 21.1955 15.1457 20.5686 16.137 19.5482C16.3994 19.2858 20.8746 15.2042 20.962 14.8398C20.9766 14.796 20.9766 14.6211 20.8746 14.5336C20.7725 14.4462 20.6268 14.4753 20.5101 14.5045C20.3498 14.5336 17.9008 16.1663 13.1341 19.3879C12.4343 19.8689 11.8075 20.1022 11.239 20.0876C10.6122 20.073 9.41685 19.7377 8.51306 19.4462C7.41977 19.0963 6.54513 18.9068 6.61802 18.2946C6.66175 17.9739 7.09907 17.6532 7.91539 17.3179Z",
                  fill: "white"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex pt-[50px] h-full items-start justify-center gap-[70px] border-r border-r-dark-border px-[70px] w-[48%]"><!--[-->`);
      ssrRenderList(menus, (menu) => {
        _push(`<div class="flex flex-col gap-2"><h4 class="font-bold uppercase text-white text-base text-leading-tracking mb-[15px] opacity-80">${ssrInterpolate(menu.name)}</h4><!--[-->`);
        ssrRenderList(menu.items, (item, key) => {
          _push(ssrRenderComponent(unref(Link), {
            style: !menu.external ? null : { display: "none" },
            href: item.link,
            key,
            class: "uppercase text-white opacity-80 text-sm text-leading-tracking mb-[15px] hover:opacity-40 transition-all duration-300 ease-in-out"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(menu.items, (item, key) => {
          _push(`<a style="${ssrRenderStyle(menu.external ? null : { display: "none" })}"${ssrRenderAttr("href", item.link)} href="#" class="uppercase text-white opacity-80 text-sm text-leading-tracking mb-[15px] hover:opacity-40 transition-all duration-300 ease-in-out">${ssrInterpolate(item.name)}</a>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="w-[22%]"></div></div></footer>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FooterComponent.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const description$2 = "Проектирование и строительство зданий и сооружений";
const longDescription$1 = "Мы – команда профессионалов с многолетним опытом в проектировании и строительстве объектов различного назначения. Наши проекты отличаются инновационным подходом, качеством и надежностью!";
const link$2 = "/dilesta#application";
const label$2 = "Консультация";
const _sfc_main$f = /* @__PURE__ */ Object.assign({ layout: _sfc_main$s }, {
  __name: "Dilesta",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        id: 1,
        title: "Проектирование",
        description: "Разработка архитектурных и инженерных проектов с учетом всех норм и требований.",
        icon: PhotoIcon
      },
      {
        id: 2,
        title: "Строительство",
        description: "Комплексное строительство объектов «под ключ» с контролем качества на каждом этапе.",
        icon: RocketLaunchIcon
      },
      {
        id: 3,
        title: "Комплексные решения",
        description: "Полное сопровождение проекта от идеи до сдачи объекта в эксплуатацию.",
        icon: HomeModernIcon
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-dilesta-dark" }, _attrs))}>`);
      _push(ssrRenderComponent(Circle, null, null, _parent));
      _push(`<div class="z-10 h-full">`);
      _push(ssrRenderComponent(_sfc_main$m, {
        title: "Group 7024",
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`<div class="flex justify-between w-full">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`<div class="flex flex-col w-[91%]">`);
      _push(ssrRenderComponent(_sfc_main$j, { title: "Dilesta" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$o, {
        label: label$2,
        description: description$2,
        link: link$2,
        "long-description": longDescription$1,
        position: "center"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$n, { services }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$g, { class: "bg-dilesta-dark" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dilesta/Dilesta.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "TitleComponent",
  __ssrInlineRender: true,
  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-[10px] text-left cursor-pointer" }, _attrs))}><h1 class="uppercase text-8xl text-white link">${ssrInterpolate(__props.title)}</h1><p class="ml-1 text-white opacity-80 text-lg">${ssrInterpolate(__props.subtitle)}</p></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Components/TitleComponent.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = /* @__PURE__ */ Object.assign({ layout: _sfc_main$s }, {
  __name: "Error",
  __ssrInlineRender: true,
  props: { status: Number },
  setup(__props) {
    const props = __props;
    const title = computed(() => {
      return {
        503: "503",
        500: "500",
        404: "404",
        403: "403"
      }[props.status];
    });
    const description2 = computed(() => {
      return {
        503: "Ведутся технические работы, зайдите позднее.",
        500: "Упс, что-то пошло не так на наших серверах.",
        404: "Извините, страница, которую вы ищете, не найдена.",
        403: "Извините, вам запрещен доступ к этой странице."
      }[props.status];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-dvh bg-dark flex justify-center items-center font-sans" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$e, {
        title: title.value,
        subtitle: description2.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Errors/Error.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "ServiceIcon",
  __ssrInlineRender: true,
  props: {
    size: {
      type: Number,
      required: false,
      default: 64
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: [{ width: __props.size + "px", height: __props.size + "px" }, { "background-color": "rgba(39, 40, 45, 0.01)", "border-color": "rgba(255, 255, 255, 0.2)", "box-shadow": "inset 0 0 8px rgba(255, 255, 255, 0.25)" }],
        class: "rounded-[7px] border border-white flex justify-center items-center"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Service/ServiceIcon.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "ServiceText",
  __ssrInlineRender: true,
  props: {
    name: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    link: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.link,
        class: "p-[40px] rounded-[7px] backdrop-blur-[100px] border border-white flex flex-col items-start gap-[20px] h-full item cursor-pointer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$c, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-[10px]" data-v-8de73840${_scopeId}><h2 class="text-[64px] uppercase text-white leading-[120%] opacity-80" data-v-8de73840${_scopeId}>${ssrInterpolate(__props.name)}</h2><p class="text-white leading-[140%] tracking-[1.5px] opacity-80" data-v-8de73840${_scopeId}>${ssrInterpolate(__props.description)}</p></div>`);
          } else {
            return [
              createVNode(_sfc_main$c, null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ]),
                _: 3
              }),
              createVNode("div", { class: "flex flex-col gap-[10px]" }, [
                createVNode("h2", { class: "text-[64px] uppercase text-white leading-[120%] opacity-80" }, toDisplayString(__props.name), 1),
                createVNode("p", { class: "text-white leading-[140%] tracking-[1.5px] opacity-80" }, toDisplayString(__props.description), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Service/ServiceText.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ServiceText = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-8de73840"]]);
const _sfc_main$a = {
  __name: "ServiceItem",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-[15px]" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<p class="text-lg leading-[140%] text-white opacity-80 tracking-[1.5px]">${ssrInterpolate(__props.name)}</p></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Service/ServiceItem.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Service",
  __ssrInlineRender: true,
  props: {
    link: {
      required: true,
      type: String
    },
    services: {
      required: true,
      type: Array
    },
    icon: {
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.link,
        class: "p-[40px] rounded-[7px] backdrop-blur-[100px] border border-white flex flex-col items-start gap-[30px] item cursor-pointer"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$c, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(__props.icon), { class: "size-[26px] text-white" }, null), _parent3, _scopeId2);
                } else {
                  return [
                    (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { class: "size-[26px] text-white" }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2 class="text-[64px] uppercase text-white leading-[120%]" data-v-763ec40e${_scopeId}>STUDIO<br data-v-763ec40e${_scopeId}>7024</h2><div class="flex flex-col gap-5" data-v-763ec40e${_scopeId}><!--[-->`);
            ssrRenderList(__props.services, (service) => {
              _push2(`<div data-v-763ec40e${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: service.link
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      name: service.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$c, { size: 45 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(service.icon), { class: "size-[20px] text-white" }, null), _parent5, _scopeId4);
                              } else {
                                return [
                                  (openBlock(), createBlock(resolveDynamicComponent(service.icon), { class: "size-[20px] text-white" }))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$c, { size: 45 }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(service.icon), { class: "size-[20px] text-white" }))
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$a, {
                        name: service.name
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$c, { size: 45 }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(service.icon), { class: "size-[20px] text-white" }))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["name"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(_sfc_main$c, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { class: "size-[26px] text-white" }))
                ]),
                _: 1
              }),
              createVNode("h2", { class: "text-[64px] uppercase text-white leading-[120%]" }, [
                createTextVNode("STUDIO"),
                createVNode("br"),
                createTextVNode("7024")
              ]),
              createVNode("div", { class: "flex flex-col gap-5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.services, (service) => {
                  return openBlock(), createBlock("div", {
                    key: service.id
                  }, [
                    createVNode(unref(Link), {
                      href: service.link
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$a, {
                          name: service.name
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$c, { size: 45 }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(resolveDynamicComponent(service.icon), { class: "size-[20px] text-white" }))
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["name"])
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Service/Service.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Service = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-763ec40e"]]);
const _sfc_main$8 = {
  __name: "CompaniesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        id: 1,
        name: "Монтаж",
        icon: PhotoIcon,
        link: "/"
      },
      {
        id: 2,
        name: "Видеосъемка",
        icon: VideoCameraIcon,
        link: "/"
      },
      {
        id: 3,
        name: "Разработка сайтов",
        icon: GlobeAltIcon,
        link: "/"
      }
    ];
    const scrollToPreviousSection = () => {
      const container = document.querySelector(".animation-container");
      const sections = gsap.utils.toArray(".section");
      const currentScroll = container.scrollTop;
      let prevSection = sections.find((section) => section.offsetTop < currentScroll);
      if (!prevSection) {
        prevSection = sections[0];
      }
      gsap.to(container, {
        scrollTo: { y: prevSection.offsetTop, container, autoKill: false },
        duration: 1,
        ease: "power1.inOut"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative h-dvh bg-dark overflow-hidden section" }, _attrs))}>`);
      _push(ssrRenderComponent(Circle, null, null, _parent));
      _push(`<div class="z-10 h-full">`);
      _push(ssrRenderComponent(_sfc_main$m, {
        click: scrollToPreviousSection,
        "is-index": true
      }, null, _parent));
      _push(`<div class="h-full flex justify-between">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        click: scrollToPreviousSection,
        "is-index": true
      }, null, _parent));
      _push(`<div class="grid grid-cols-3 p-[40px] gap-[30px] h-[87%] w-full">`);
      _push(ssrRenderComponent(Service, {
        link: "/studio",
        services,
        icon: unref(CameraIcon)
      }, null, _parent));
      _push(`<div class="col-span-2 flex flex-col gap-[30px]">`);
      _push(ssrRenderComponent(ServiceText, {
        link: "/dilesta",
        description: "Проектирование и строительство зданий и сооружений",
        name: "DILESTA"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(BuildingOfficeIcon), { class: "size-[26px] text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(BuildingOfficeIcon), { class: "size-[26px] text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ServiceText, {
        link: "/module",
        description: "Строительство модульных зданий",
        name: "MODULE"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(HomeModernIcon), { class: "size-[26px] text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(HomeModernIcon), { class: "size-[26px] text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Components/CompaniesSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "GroupSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative h-dvh bg-dark overflow-hidden section" }, _attrs))}>`);
      _push(ssrRenderComponent(Circle, null, null, _parent));
      _push(`<div class="flex justify-center items-center h-full z-10">`);
      _push(ssrRenderComponent(_sfc_main$e, {
        title: "GROUP 7024",
        subtitle: "Необыкновенно"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Components/GroupSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ layout: _sfc_main$s }, {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    usePage();
    gsap.registerPlugin(ScrollToPlugin);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "animation-container scroll-smooth",
        style: { "overflow-y": "scroll", "height": "100vh" }
      }, _attrs))}><div class="w-full">`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`</div><section class="section">`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "About",
  __ssrInlineRender: true,
  props: {
    link: {
      type: [String, Function],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    longDescription: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: false,
      default: "top"
    }
  },
  setup(__props) {
    const allowedPositions = [
      "top",
      "center"
    ];
    const props = __props;
    const getClasses = (position) => {
      if (allowedPositions.includes(position)) {
        switch (position) {
          case "top":
            return "justify-start";
          case "center":
            return "justify-center";
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between" }, _attrs))}><div class="basis-[50%]"><div class="${ssrRenderClass([getClasses(props.position), "flex flex-col items-start gap-[40px] p-[40px] h-full"])}"><p class="text-white opacity-80 leading-[150%] tracking-[2px] w-[400px]">${props.description ?? ""}</p>`);
      _push(ssrRenderComponent(_sfc_main$q, {
        link: props.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full bg-white h-[1px] opacity-10"></div></div><div class="basis-[50%] flex flex-col justify-start border-l border-b border-dark-border"><p class="w-[638px] text-white opacity-80 leading-[150%] tracking-[2px] py-[40px] pb-[140px] px-[40px]">${ssrInterpolate(props.longDescription)}</p></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Module/Components/About.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const exampleImage = "/build/assets/example-DYBaYUcw.jpg";
const _sfc_main$4 = {
  __name: "Example",
  __ssrInlineRender: true,
  props: {
    link: {
      type: [String, Function],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between" }, _attrs))}><div class="flex flex-col justify-between basis-[50.05%]"><div class="flex flex-col gap-[30px] border-r border-r-dark-border py-[40px] px-[40px]"><h2 class="uppercase text-4xl text-white">${ssrInterpolate(__props.title)}</h2><p class="text-white opacity-80 leading-[150%] tracking-[2px]">${ssrInterpolate(__props.description)}</p></div>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        name: "Смотреть все",
        link: "",
        class: "pb-[15px]"
      }, null, _parent));
      _push(`</div><div class="flex flex-col justify-between basis-[50%]"><div class="h-[464px] w-[710px]"><img${ssrRenderAttr("src", unref(exampleImage))} alt="Пример" class="h-full w-full object-cover block"></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Module/Components/Example.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const description$1 = "Быстро.<br>Надежно.<br>Инновационно.";
const longDescription = "«Модульные здания» – это современное решение для создания жилых, коммерческих и промышленных объектов. Благодаря заводской сборке основных конструкций, сокращаются сроки строительства и снижаются затраты, не теряя при этом в качестве и долговечности. ";
const link$1 = "/module#application";
const label$1 = "Заказать услугу";
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ layout: _sfc_main$s }, {
  __name: "Module",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-module-dark" }, _attrs))}>`);
      _push(ssrRenderComponent(Circle, null, null, _parent));
      _push(`<div class="z-10 h-full">`);
      _push(ssrRenderComponent(_sfc_main$m, {
        title: "Group 7024",
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`<div class="flex justify-between w-full">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`<div class="flex flex-col w-[91%]">`);
      _push(ssrRenderComponent(_sfc_main$j, { title: "Module" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        label: label$1,
        description: description$1,
        link: link$1,
        "long-description": longDescription
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        title: "Примеры работ",
        description: "Мы адаптируем проекты под индивидуальные потребности заказчика,\n                             гарантируя высокие стандарты надежности и энергоэффективности.",
        link: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$g, { class: "bg-module-dark" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Module/Module.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "About",
  __ssrInlineRender: true,
  props: {
    link: {
      type: [String, Function],
      required: true
    },
    description: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: false,
      default: "top"
    }
  },
  setup(__props) {
    const allowedPositions = [
      "top",
      "center"
    ];
    const props = __props;
    const getClasses = (position) => {
      if (allowedPositions.includes(position)) {
        switch (position) {
          case "top":
            return "justify-start";
          case "center":
            return "justify-center";
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between" }, _attrs))}><div class="basis-[67%]"><div class="${ssrRenderClass([getClasses(props.position), "flex flex-col items-start gap-[40px] p-[40px] h-full"])}"><p class="text-white opacity-80 leading-[150%] tracking-[2px]">${ssrInterpolate(props.description)}</p>`);
      _push(ssrRenderComponent(_sfc_main$q, {
        link: props.link
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full bg-white h-[1px] opacity-10"></div></div><div class="basis-[33%]"><div class="py-[40px] border-l border-b border-dark-border"><div class="flex flex-col gap-[15px]">`);
      _push(ssrRenderComponent(_sfc_main$p, {
        name: "Behance",
        link: "/"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        name: "Pinterest",
        link: "/"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        name: "Vimeo",
        link: "/"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, {
        name: "Youtube",
        link: "/"
      }, null, _parent));
      _push(`<div class="w-full bg-white h-[1px] opacity-10 transition-all duration-300 ease-in-out group-hover:opacity-100"></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Studio/Components/About.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-between" }, _attrs))}><div class="basis-[67.25%] p-[40px] border-r border-r-dark-border"><h2 class="uppercase text-4xl text-white">Наши услуги</h2><div class="mt-[40px] flex flex-col gap-[30px]"><!--[-->`);
      ssrRenderList(__props.services, (service) => {
        _push(`<div class="flex flex-col gap-[30px] p-[40px] transition-all duration-300 ease-in-out border border-service-border hover:border-white backdrop-blur-[100px] rounded-[7px]"><div class="flex rounded-[7px] items-center justify-center size-[64px] border border-service-border shadow-inner-service">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), { class: "size-[20px] text-white" }, null), _parent);
        _push(`</div><div class="flex flex-col gap-[15px]"><h3 class="text-4xl text-white">${ssrInterpolate(service.title)}</h3><p class="text-lg leading-[150%] tracking-[2px] text-white opacity-80">${ssrInterpolate(service.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="basis-[33%]"></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Studio/Components/Services.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const description = "Креативная студия, специализирующаяся на видеосъемке, профессиональном монтаже и разработке современных сайтов. Мы превращаем идеи в яркий визуальный контент, создаем динамичные ролики и стильные веб-проекты, которые привлекают аудиторию.";
const link = "/studio#application";
const label = "Заказать услугу";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: _sfc_main$s }, {
  __name: "Studio",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        id: 1,
        title: "Монтаж видео",
        description: "Наши специалисты обеспечивают стильный и профессиональный монтаж видео, который делает любой материал живым и привлекательным.",
        icon: PhotoIcon
      },
      {
        id: 2,
        title: "Видеосъёмка",
        description: "Используем профессиональное оборудование и продуманный сценарий, чтобы ваш видеоконтент был максимально эффективным и запоминающимся.",
        icon: VideoCameraIcon
      },
      {
        id: 3,
        title: "Разработка сайтов",
        description: "Создаем современные сайты, которые не просто красиво выглядят, но и отлично работают на бизнес-задачи наших клиентов. Сочетание привлекательного дизайна и максимальной эффективности",
        icon: WindowIcon
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-dark-blue" }, _attrs))}>`);
      _push(ssrRenderComponent(Circle, null, null, _parent));
      _push(`<div class="z-10 h-full">`);
      _push(ssrRenderComponent(_sfc_main$m, {
        title: "Group 7024",
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`<div class="flex justify-between w-full">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`<div class="flex flex-col w-[91%]">`);
      _push(ssrRenderComponent(_sfc_main$j, { title: "Studio 7024" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        label,
        description,
        link
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { services }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$g, { class: "bg-dark-blue" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Studio/Studio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_14 as _,
  __vite_glob_0_13 as a,
  __vite_glob_0_12 as b,
  __vite_glob_0_11 as c,
  __vite_glob_0_10 as d,
  __vite_glob_0_9 as e,
  __vite_glob_0_8 as f,
  __vite_glob_0_7 as g,
  __vite_glob_0_6 as h,
  __vite_glob_0_5 as i,
  __vite_glob_0_4 as j,
  __vite_glob_0_3 as k,
  __vite_glob_0_2 as l,
  __vite_glob_0_1 as m,
  __vite_glob_0_0 as n
};
