import { ref, onMounted, mergeProps, unref, useSSRContext, withCtx, createVNode, computed, renderSlot, toDisplayString, resolveDynamicComponent, createBlock, openBlock, createTextVNode, Fragment, renderList, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderVNode, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { usePage, Head, Link, router, createInertiaApp } from "@inertiajs/vue3";
import gsap from "gsap";
import { PhotoIcon, VideoCameraIcon, GlobeAltIcon, CameraIcon, BuildingOfficeIcon, HomeModernIcon, ArrowUpRightIcon, WindowIcon } from "@heroicons/vue/24/outline/index.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const video = "/build/assets/loader-BnLZGpJd.mp4";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$k = {
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
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Loader.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Loader = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-f68f6dac"]]);
const _sfc_main$j = {
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
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/App.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ Object.assign({ layout: _sfc_main$j }, {
  __name: "Development",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-dvh bg-dark flex justify-center items-center font-sans" }, _attrs))}><p class="text-4xl text-white">В разработке...</p></div>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Development.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index/Components/TitleComponent.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = /* @__PURE__ */ Object.assign({ layout: _sfc_main$j }, {
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
      _push(ssrRenderComponent(_sfc_main$h, {
        title: title.value,
        subtitle: description2.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Errors/Error.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "circle-wrapper" }, _attrs))}><div class="circle"></div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Circle.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Circle = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$e = {
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
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><header class="p-[40px]"><button class="text-[32px] uppercase text-white cursor-pointer">${ssrInterpolate(__props.title)}</button></header><div class="w-full bg-white h-[1px] opacity-10"></div><!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeaderComponent.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    click: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[9%] relative h-dvh flex flex-col justify-start" }, _attrs))}><div class="absolute right-0 h-full w-[1px] bg-white opacity-10"></div><div class="flex items-start justify-start flex-col gap-[60px] p-[50px]"><div class="block cursor-pointer"><svg width="43" height="16" viewBox="0 0 43 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM43 7L1 7V9L43 9V7Z" fill="white" fill-opacity="0.8"></path></svg></div><div class="text-white text-lg uppercase tracking-[1.5px] opacity-80 whitespace-nowrap transform -rotate-90 -ml-14 mt-12 cursor-pointer">GROUP 7024 </div></div></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidebar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
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
      _push(ssrRenderComponent(_sfc_main$e, { click: scrollToPreviousSection }, null, _parent));
      _push(`<div class="flex justify-between h-full">`);
      _push(ssrRenderComponent(_sfc_main$d, { click: scrollToPreviousSection }, null, _parent));
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
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
      _push(ssrRenderComponent(_sfc_main$h, {
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
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = /* @__PURE__ */ Object.assign({ layout: _sfc_main$j }, {
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
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "ButtonComponent",
  __ssrInlineRender: true,
  props: {
    link: {
      type: String,
      required: false,
      default: "/"
    },
    click: {
      type: Function,
      required: false
    },
    type: {
      type: String,
      required: false,
      default: "outline"
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
            return "hover:bg-white hover:text-dark";
          case "fill":
            return "bg-white text-dark hover:{bg-transparent text-white}";
        }
      }
    };
    const getBaseClasses = (type) => {
      return "px-[36px] py-[18px] uppercase text-base border border-white text-white leading-[140%] tracking-[1.5px] transition " + getClassByType(type);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Link), {
        style: __props.link ? null : { display: "none" },
        href: "/public",
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
      _push(`<button type="button" style="${ssrRenderStyle(__props.click ? null : { display: "none" })}" class="${ssrRenderClass(getBaseClasses(props.type))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ButtonComponent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ArrowLink.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
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
      _push(ssrRenderComponent(_sfc_main$5, {
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
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Behance",
        link: "/"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Pinterest",
        link: "/"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Vimeo",
        link: "/"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        name: "Youtube",
        link: "/"
      }, null, _parent));
      _push(`<div class="w-full bg-white h-[1px] opacity-10 transition-all duration-300 ease-in-out group-hover:opacity-100"></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Studio/Components/About.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
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
        _push(`<div class="flex flex-col gap-[30px] p-[40px] border border-service-border backdrop-blur-[100px] rounded-[7px]"><div class="flex rounded-[7px] items-center justify-center size-[64px] border border-service-border shadow-inner-service">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), { class: "size-[20px] text-white" }, null), _parent);
        _push(`</div><div class="flex flex-col gap-[15px]"><h3 class="text-4xl text-white">${ssrInterpolate(service.title)}</h3><p class="text-lg leading-[140%] tracking-[1.5px] text-white opacity-80">${ssrInterpolate(service.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="basis-[33%]"></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Studio/Components/Services.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Title.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const description = "Креативная студия, специализирующаяся на видеосъемке, профессиональном монтаже и разработке современных сайтов. Мы превращаем идеи в яркий визуальный контент, создаем динамичные ролики и стильные веб-проекты, которые привлекают аудиторию.";
const link = "/#application";
const label = "Заказать услугу";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: _sfc_main$j }, {
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
      _push(ssrRenderComponent(_sfc_main$e, {
        title: "Studio 7024",
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`<div class="flex justify-between">`);
      _push(ssrRenderComponent(_sfc_main$d, {
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`<div class="flex flex-col">`);
      _push(ssrRenderComponent(_sfc_main$1, { title: "STUDIO 7024" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label,
        description,
        link
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { services }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Studio/Studio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Development.vue": __vite_glob_0_0, "./Pages/Errors/Error.vue": __vite_glob_0_1, "./Pages/Index/Components/CompaniesSection.vue": __vite_glob_0_2, "./Pages/Index/Components/GroupSection.vue": __vite_glob_0_3, "./Pages/Index/Components/TitleComponent.vue": __vite_glob_0_4, "./Pages/Index/Index.vue": __vite_glob_0_5, "./Pages/Studio/Components/About.vue": __vite_glob_0_6, "./Pages/Studio/Components/Services.vue": __vite_glob_0_7, "./Pages/Studio/Studio.vue": __vite_glob_0_8 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
