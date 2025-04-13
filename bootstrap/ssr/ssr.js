import { mergeProps, useSSRContext, withCtx, unref, createVNode, renderSlot, ref, onMounted, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import gsap from "gsap";
import { CameraIcon, PhotoIcon, VideoCameraIcon, GlobeAltIcon, BuildingOfficeIcon, HomeModernIcon } from "@heroicons/vue/24/outline/index.js";
import { Link, usePage, Head, createInertiaApp } from "@inertiajs/vue3";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$b = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "circle-wrapper" }, _attrs))}><div class="circle"></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/CircleComponent.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const CircleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$a = {
  __name: "GroupSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative h-dvh bg-dark overflow-hidden section" }, _attrs))}>`);
      _push(ssrRenderComponent(CircleComponent, null, null, _parent));
      _push(`<div class="flex justify-center items-center h-full z-10"><div class="flex flex-col gap-[10px] text-left"><h1 class="uppercase text-8xl text-white link">GROUP 7024</h1><p class="ml-1 text-white opacity-80 text-lg">Необыкновенно</p></div></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/GroupSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "HeaderComponent",
  __ssrInlineRender: true,
  props: {
    click: {
      type: Function,
      required: false,
      default: "/"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="p-[40px]"><button class="text-[32px] uppercase text-white cursor-pointer link logo"> GROUP 7024 </button></header><div class="w-full bg-white h-[1px] opacity-10"></div><!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/HeaderComponent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "SidebarComponent",
  __ssrInlineRender: true,
  props: {
    click: {
      type: Function,
      required: false,
      default: "/"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[9%] relative h-dvh flex flex-col justify-start" }, _attrs))}><div class="absolute right-0 h-full w-[1px] bg-white opacity-10"></div><div class="flex items-start justify-start flex-col gap-[60px] p-[50px]"><div class="link block"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM43 7L1 7V9L43 9V7Z" fill="white" fill-opacity="0.8"></path></svg></div><div class="text-white text-lg uppercase tracking-[1.5px] opacity-80 whitespace-nowrap transform -rotate-90 -ml-14 mt-12">GROUP 7024 </div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/SidebarComponent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "ProjectIcon",
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Project/ProjectIcon.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "ProjectItem",
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Project/ProjectItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Project",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-[40px] h-[613px] rounded-[7px] backdrop-blur-[100px] border border-white flex flex-col items-start gap-[30px] link item" }, _attrs))} data-v-f58c42d9>`);
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(CameraIcon), { class: "size-[26px] text-white" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(CameraIcon), { class: "size-[26px] text-white" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="text-[64px] uppercase text-white leading-[120%]" data-v-f58c42d9>STUDIO 7024</h2><div class="flex flex-col gap-5" data-v-f58c42d9>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, { name: "Монтаж" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, { size: 45 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PhotoIcon), { class: "size-[20px] text-white" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(PhotoIcon), { class: "size-[20px] text-white" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, { size: 45 }, {
                      default: withCtx(() => [
                        createVNode(unref(PhotoIcon), { class: "size-[20px] text-white" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, { name: "Монтаж" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, { size: 45 }, {
                    default: withCtx(() => [
                      createVNode(unref(PhotoIcon), { class: "size-[20px] text-white" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, { name: "Видеосъемка" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, { size: 45 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(VideoCameraIcon), { class: "size-[20px] text-white" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(VideoCameraIcon), { class: "size-[20px] text-white" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, { size: 45 }, {
                      default: withCtx(() => [
                        createVNode(unref(VideoCameraIcon), { class: "size-[20px] text-white" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, { name: "Видеосъемка" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, { size: 45 }, {
                    default: withCtx(() => [
                      createVNode(unref(VideoCameraIcon), { class: "size-[20px] text-white" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, { name: "Разработка сайтов" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, { size: 45 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(GlobeAltIcon), { class: "size-[20px] text-white" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(GlobeAltIcon), { class: "size-[20px] text-white" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, { size: 45 }, {
                      default: withCtx(() => [
                        createVNode(unref(GlobeAltIcon), { class: "size-[20px] text-white" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, { name: "Разработка сайтов" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, { size: 45 }, {
                    default: withCtx(() => [
                      createVNode(unref(GlobeAltIcon), { class: "size-[20px] text-white" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Project/Project.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Project = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f58c42d9"]]);
const _sfc_main$4 = {
  __name: "ProjectText",
  __ssrInlineRender: true,
  props: {
    name: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-[40px] rounded-[7px] backdrop-blur-[100px] border border-white flex flex-col items-start gap-[20px] h-[290px] link item" }, _attrs))} data-v-2960074f>`);
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="flex flex-col gap-[10px]" data-v-2960074f><h2 class="text-[64px] uppercase text-white leading-[120%] opacity-80" data-v-2960074f>${ssrInterpolate(__props.name)}</h2><p class="text-white leading-[140%] tracking-[1.5px] opacity-80" data-v-2960074f>${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Project/ProjectText.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProjectText = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2960074f"]]);
const _sfc_main$3 = {
  __name: "CompaniesSection",
  __ssrInlineRender: true,
  setup(__props) {
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
      _push(ssrRenderComponent(CircleComponent, null, null, _parent));
      _push(`<div class="z-10">`);
      _push(ssrRenderComponent(_sfc_main$9, { click: scrollToPreviousSection }, null, _parent));
      _push(`<div class="flex justify-between">`);
      _push(ssrRenderComponent(_sfc_main$8, { click: scrollToPreviousSection }, null, _parent));
      _push(`<div class="grid grid-cols-3 p-[40px] gap-[30px]">`);
      _push(ssrRenderComponent(Project, null, null, _parent));
      _push(`<div class="col-span-2 flex flex-col gap-[30px]">`);
      _push(ssrRenderComponent(ProjectText, {
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
      _push(ssrRenderComponent(ProjectText, {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/CompaniesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const video = "/build/assets/loader-BnLZGpJd.mp4";
const _sfc_main$2 = {
  __name: "LoaderComponent",
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
        }, _attrs))} data-v-3c704651><video class="w-full h-full object-cover" autoplay muted playsinline data-v-3c704651><source${ssrRenderAttr("src", unref(video))} type="video/mp4" data-v-3c704651></video></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/LoaderComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LoaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3c704651"]]);
const _sfc_main$1 = {
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
      _push(ssrRenderComponent(LoaderComponent, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: _sfc_main$1 }, {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollToPlugin);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "animation-container scroll-smooth",
        style: { "overflow-y": "scroll", "height": "100vh" }
      }, _attrs))}><div class="w-full">`);
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(`</div><section class="section">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Index.vue": __vite_glob_0_0 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
