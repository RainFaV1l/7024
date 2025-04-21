import { ref, onMounted, mergeProps, unref, useSSRContext, withCtx, createVNode, computed, renderSlot, toDisplayString, resolveDynamicComponent, createBlock, openBlock, createTextVNode, Fragment, renderList, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderVNode, ssrRenderList } from "vue/server-renderer";
import { usePage, Head, Link, router, createInertiaApp } from "@inertiajs/vue3";
import gsap from "gsap";
import { PhotoIcon, VideoCameraIcon, GlobeAltIcon, CameraIcon, BuildingOfficeIcon, HomeModernIcon } from "@heroicons/vue/24/outline/index.js";
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
const _sfc_main$f = {
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
        }, _attrs))} data-v-3c704651><video class="w-full h-full object-cover" autoplay muted playsinline data-v-3c704651><source${ssrRenderAttr("src", unref(video))} type="video/mp4" data-v-3c704651></video></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Loader.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const LoaderComponent = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-3c704651"]]);
const _sfc_main$e = {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/App.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ Object.assign({ layout: _sfc_main$e }, {
  __name: "Development",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-dvh bg-dark flex justify-center items-center font-sans" }, _attrs))}><p class="text-4xl text-white">В разработке...</p></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Development.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "Title",
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/Group/Title.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ Object.assign({ layout: _sfc_main$e }, {
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
    const description = computed(() => {
      return {
        503: "Ведутся технические работы, зайдите позднее.",
        500: "Упс, что-то пошло не так на наших серверах.",
        404: "Извините, страница, которую вы ищете, не найдена.",
        403: "Извините, вам запрещен доступ к этой странице."
      }[props.status];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-dvh bg-dark flex justify-center items-center font-sans" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$c, {
        title: title.value,
        subtitle: description.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Errors/Error.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "circle-wrapper" }, _attrs))}><div class="circle"></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Circle.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CircleComponent = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$9 = {
  __name: "GroupSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative h-dvh bg-dark overflow-hidden section" }, _attrs))}>`);
      _push(ssrRenderComponent(CircleComponent, null, null, _parent));
      _push(`<div class="flex justify-center items-center h-full z-10">`);
      _push(ssrRenderComponent(_sfc_main$c, {
        title: "GROUP 7024",
        subtitle: "Необыкновенно"
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/Group/GroupSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
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
      _push(`<!--[--><header class="p-[40px]"><button class="text-[32px] uppercase text-white cursor-pointer link logo">${ssrInterpolate(__props.title)}</button></header><div class="w-full bg-white h-[1px] opacity-10"></div><!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/HeaderComponent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Sidebar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Service/ServiceIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
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
            _push2(ssrRenderComponent(_sfc_main$6, null, {
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
            _push2(`<div class="flex flex-col gap-[10px]" data-v-66db3069${_scopeId}><h2 class="text-[64px] uppercase text-white leading-[120%] opacity-80" data-v-66db3069${_scopeId}>${ssrInterpolate(__props.name)}</h2><p class="text-white leading-[140%] tracking-[1.5px] opacity-80" data-v-66db3069${_scopeId}>${ssrInterpolate(__props.description)}</p></div>`);
          } else {
            return [
              createVNode(_sfc_main$6, null, {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Service/ServiceText.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ServiceText = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-66db3069"]]);
const _sfc_main$4 = {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Service/ServiceItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
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
            _push2(ssrRenderComponent(_sfc_main$6, null, {
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
            _push2(`<h2 class="text-[64px] uppercase text-white leading-[120%]" data-v-87f2dfd5${_scopeId}>STUDIO<br data-v-87f2dfd5${_scopeId}>7024</h2><div class="flex flex-col gap-5" data-v-87f2dfd5${_scopeId}><!--[-->`);
            ssrRenderList(__props.services, (service) => {
              _push2(`<div data-v-87f2dfd5${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: service.link
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      name: service.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$6, { size: 45 }, {
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
                            createVNode(_sfc_main$6, { size: 45 }, {
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
                      createVNode(_sfc_main$4, {
                        name: service.name
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, { size: 45 }, {
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
              createVNode(_sfc_main$6, null, {
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
                        createVNode(_sfc_main$4, {
                          name: service.name
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, { size: 45 }, {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Common/Service/Service.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Service = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-87f2dfd5"]]);
const _sfc_main$2 = {
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
      _push(ssrRenderComponent(CircleComponent, null, null, _parent));
      _push(`<div class="z-10 h-full">`);
      _push(ssrRenderComponent(_sfc_main$8, { click: scrollToPreviousSection }, null, _parent));
      _push(`<div class="flex justify-between h-full">`);
      _push(ssrRenderComponent(_sfc_main$7, { click: scrollToPreviousSection }, null, _parent));
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sections/Companies/CompaniesSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ layout: _sfc_main$e }, {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "animation-container scroll-smooth",
        style: { "overflow-y": "scroll", "height": "100vh" }
      }, _attrs))}><div class="w-full">`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`</div><section class="section">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: _sfc_main$e }, {
  __name: "Studio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-dark-blue" }, _attrs))}>`);
      _push(ssrRenderComponent(CircleComponent, null, null, _parent));
      _push(`<div class="z-10 h-full">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        title: "Studio 7024",
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`<div class="flex justify-between h-full">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        click: () => unref(router).visit("/")
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Studio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Development.vue": __vite_glob_0_0, "./Pages/Errors/Error.vue": __vite_glob_0_1, "./Pages/Index.vue": __vite_glob_0_2, "./Pages/Studio.vue": __vite_glob_0_3 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
