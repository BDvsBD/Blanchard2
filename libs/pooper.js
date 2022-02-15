/**
 * @popperjs/core v2.11.0 - MIT License
 */

"use strict";
! function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {})
}(this, (function (e) {
  function t(e) {
    return null == e ? window : "[object Window]" !== e.toString() ? (e = e.ownerDocument) && e.defaultView || window : e
  }

  function n(e) {
    return e instanceof t(e).Element || e instanceof Element
  }

  function o(e) {
    return e instanceof t(e).HTMLElement || e instanceof HTMLElement
  }

  function r(e) {
    return "undefined" != typeof ShadowRoot && (e instanceof t(e).ShadowRoot || e instanceof ShadowRoot)
  }

  function i(e, t) {
    void 0 === t && (t = !1);
    var n = e.getBoundingClientRect(),
      r = 1,
      i = 1;
    return o(e) && t && (t = e.offsetHeight, 0 < (e = e.offsetWidth) && (r = I(n.width) / e || 1), 0 < t && (i = I(n.height) / t || 1)), {
      width: n.width / r,
      height: n.height / i,
      top: n.top / i,
      right: n.right / r,
      bottom: n.bottom / i,
      left: n.left / r,
      x: n.left / r,
      y: n.top / i
    }
  }

  function a(e) {
    return {
      scrollLeft: (e = t(e)).pageXOffset,
      scrollTop: e.pageYOffset
    }
  }

  function s(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
  }

  function f(e) {
    return ((n(e) ? e.ownerDocument : e.document) || window.document).documentElement
  }

  function p(e) {
    return i(f(e)).left + a(e).scrollLeft
  }

  function c(e) {
    return t(e).getComputedStyle(e)
  }

  function l(e) {
    return e = c(e), /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
  }

  function u(e, n, r) {
    void 0 === r && (r = !1);
    var c, u = o(n);
    if (c = o(n)) {
      var d = n.getBoundingClientRect();
      c = I(d.width) / n.offsetWidth || 1, d = I(d.height) / n.offsetHeight || 1, c = 1 !== c || 1 !== d
    }
    d = c, c = f(n), e = i(e, d), d = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var h = {
      x: 0,
      y: 0
    };
    return (u || !u && !r) && (("body" !== s(n) || l(c)) && (d = n !== t(n) && o(n) ? {
      scrollLeft: n.scrollLeft,
      scrollTop: n.scrollTop
    } : a(n)), o(n) ? ((h = i(n, !0)).x += n.clientLeft, h.y += n.clientTop) : c && (h.x = p(c))), {
      x: e.left + d.scrollLeft - h.x,
      y: e.top + d.scrollTop - h.y,
      width: e.width,
      height: e.height
    }
  }

  function d(e) {
    var t = i(e),
      n = e.offsetWidth,
      o = e.offsetHeight;
    return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - o) && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    }
  }

  function h(e) {
    return "html" === s(e) ? e : e.assignedSlot || e.parentNode || (r(e) ? e.host : null) || f(e)
  }

  function m(e) {
    return 0 <= ["html", "body", "#document"].indexOf(s(e)) ? e.ownerDocument.body : o(e) && l(e) ? e : m(h(e))
  }

  function v(e, n) {
    var o;
    void 0 === n && (n = []);
    var r = m(e);
    return e = r === (null == (o = e.ownerDocument) ? void 0 : o.body), o = t(r), r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r, n = n.concat(r), e ? n : n.concat(v(h(r)))
  }

  function g(e) {
    return o(e) && "fixed" !== c(e).position ? e.offsetParent : null
  }

  function y(e) {
    for (var n = t(e), r = g(e); r && 0 <= ["table", "td", "th"].indexOf(s(r)) && "static" === c(r).position;) r = g(r);
    if (r && ("html" === s(r) || "body" === s(r) && "static" === c(r).position)) return n;
    if (!r) e: {
      if (r = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox"), -1 === navigator.userAgent.indexOf("Trident") || !o(e) || "fixed" !== c(e).position)
        for (e = h(e); o(e) && 0 > ["html", "body"].indexOf(s(e));) {
          var i = c(e);
          if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || r && "filter" === i.willChange || r && i.filter && "none" !== i.filter) {
            r = e;
            break e
          }
          e = e.parentNode
        }
      r = null
    }
    return r || n
  }

  function b(e) {
    function t(e) {
      o.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) {
        o.has(e) || (e = n.get(e)) && t(e)
      })), r.push(e)
    }
    var n = new Map,
      o = new Set,
      r = [];
    return e.forEach((function (e) {
      n.set(e.name, e)
    })), e.forEach((function (e) {
      o.has(e.name) || t(e)
    })), r
  }

  function w(e) {
    var t;
    return function () {
      return t || (t = new Promise((function (n) {
        Promise.resolve().then((function () {
          t = void 0, n(e())
        }))
      }))), t
    }
  }

  function x(e) {
    return e.split("-")[0]
  }

  function O(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && r(n))
      do {
        if (t && e.isSameNode(t)) return !0;
        t = t.parentNode || t.host
      } while (t);
    return !1
  }

  function j(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    })
  }

  function E(e, o) {
    if ("viewport" === o) {
      o = t(e);
      var r = f(e);
      o = o.visualViewport;
      var s = r.clientWidth;
      r = r.clientHeight;
      var l = 0,
        u = 0;
      o && (s = o.width, r = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = o.offsetLeft, u = o.offsetTop)), e = j(e = {
        width: s,
        height: r,
        x: l + p(e),
        y: u
      })
    } else n(o) ? ((e = i(o)).top += o.clientTop, e.left += o.clientLeft, e.bottom = e.top + o.clientHeight, e.right = e.left + o.clientWidth, e.width = o.clientWidth, e.height = o.clientHeight, e.x = e.left, e.y = e.top) : (u = f(e), e = f(u), s = a(u), o = null == (r = u.ownerDocument) ? void 0 : r.body, r = V(e.scrollWidth, e.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), l = V(e.scrollHeight, e.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), u = -s.scrollLeft + p(u), s = -s.scrollTop, "rtl" === c(o || e).direction && (u += V(e.clientWidth, o ? o.clientWidth : 0) - r), e = j({
      width: r,
      height: l,
      x: u,
      y: s
    }));
    return e
  }

  function D(e, t, r) {
    return t = "clippingParents" === t ? function (e) {
      var t = v(h(e)),
        r = 0 <= ["absolute", "fixed"].indexOf(c(e).position),
        i = r && o(e) ? y(e) : e;
      return n(i) ? t.filter((function (e) {
        return n(e) && O(e, i) && "body" !== s(e) && (!r || "static" !== c(e).position)
      })) : []
    }(e) : [].concat(t), (r = (r = [].concat(t, [r])).reduce((function (t, n) {
      return n = E(e, n), t.top = V(n.top, t.top), t.right = N(n.right, t.right), t.bottom = N(n.bottom, t.bottom), t.left = V(n.left, t.left), t
    }), E(e, r[0]))).width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
  }

  function A(e) {
    return e.split("-")[1]
  }

  function L(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y"
  }

  function P(e) {
    var t = e.reference,
      n = e.element,
      o = (e = e.placement) ? x(e) : null;
    e = e ? A(e) : null;
    var r = t.x + t.width / 2 - n.width / 2,
      i = t.y + t.height / 2 - n.height / 2;
    switch (o) {
      case "top":
        r = {
          x: r,
          y: t.y - n.height
        };
        break;
      case "bottom":
        r = {
          x: r,
          y: t.y + t.height
        };
        break;
      case "right":
        r = {
          x: t.x + t.width,
          y: i
        };
        break;
      case "left":
        r = {
          x: t.x - n.width,
          y: i
        };
        break;
      default:
        r = {
          x: t.x,
          y: t.y
        }
    }
    if (null != (o = o ? L(o) : null)) switch (i = "y" === o ? "height" : "width", e) {
      case "start":
        r[o] -= t[i] / 2 - n[i] / 2;
        break;
      case "end":
        r[o] += t[i] / 2 - n[i] / 2
    }
    return r
  }

  function M(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, e)
  }

  function k(e, t) {
    return t.reduce((function (t, n) {
      return t[n] = e, t
    }), {})
  }

  function W(e, t) {
    void 0 === t && (t = {});
    var o = t;
    t = void 0 === (t = o.placement) ? e.placement : t;
    var r = o.boundary,
      a = void 0 === r ? "clippingParents" : r,
      s = void 0 === (r = o.rootBoundary) ? "viewport" : r;
    r = void 0 === (r = o.elementContext) ? "popper" : r;
    var p = o.altBoundary,
      c = void 0 !== p && p;
    o = M("number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, _)), p = e.rects.popper, a = D(n(c = e.elements[c ? "popper" === r ? "reference" : "popper" : r]) ? c : c.contextElement || f(e.elements.popper), a, s), c = P({
      reference: s = i(e.elements.reference),
      element: p,
      strategy: "absolute",
      placement: t
    }), p = j(Object.assign({}, p, c)), s = "popper" === r ? p : s;
    var l = {
      top: a.top - s.top + o.top,
      bottom: s.bottom - a.bottom + o.bottom,
      left: a.left - s.left + o.left,
      right: s.right - a.right + o.right
    };
    if (e = e.modifiersData.offset, "popper" === r && e) {
      var u = e[t];
      Object.keys(l).forEach((function (e) {
        var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
          n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
        l[e] += u[n] * t
      }))
    }
    return l
  }

  function B() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some((function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect)
    }))
  }

  function H(e) {
    void 0 === e && (e = {});
    var t = e.defaultModifiers,
      o = void 0 === t ? [] : t,
      r = void 0 === (e = e.defaultOptions) ? X : e;
    return function (e, t, i) {
      function a() {
        f.forEach((function (e) {
          return e()
        })), f = []
      }
      void 0 === i && (i = r);
      var s = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, X, r),
          modifiersData: {},
          elements: {
            reference: e,
            popper: t
          },
          attributes: {},
          styles: {}
        },
        f = [],
        p = !1,
        c = {
          state: s,
          setOptions: function (i) {
            return i = "function" == typeof i ? i(s.options) : i, a(), s.options = Object.assign({}, r, s.options, i), s.scrollParents = {
              reference: n(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
              popper: v(t)
            }, i = function (e) {
              var t = b(e);
              return z.reduce((function (e, n) {
                return e.concat(t.filter((function (e) {
                  return e.phase === n
                })))
              }), [])
            }(function (e) {
              var t = e.reduce((function (e, t) {
                var n = e[t.name];
                return e[t.name] = n ? Object.assign({}, n, t, {
                  options: Object.assign({}, n.options, t.options),
                  data: Object.assign({}, n.data, t.data)
                }) : t, e
              }), {});
              return Object.keys(t).map((function (e) {
                return t[e]
              }))
            }([].concat(o, s.options.modifiers))), s.orderedModifiers = i.filter((function (e) {
              return e.enabled
            })), s.orderedModifiers.forEach((function (e) {
              var t = e.name,
                n = e.options;
              n = void 0 === n ? {} : n, "function" == typeof (e = e.effect) && (t = e({
                state: s,
                name: t,
                instance: c,
                options: n
              }), f.push(t || function () {}))
            })), c.update()
          },
          forceUpdate: function () {
            if (!p) {
              var e = s.elements,
                t = e.reference;
              if (B(t, e = e.popper))
                for (s.rects = {
                    reference: u(t, y(e), "fixed" === s.options.strategy),
                    popper: d(e)
                  }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function (e) {
                    return s.modifiersData[e.name] = Object.assign({}, e.data)
                  })), t = 0; t < s.orderedModifiers.length; t++)
                  if (!0 === s.reset) s.reset = !1, t = -1;
                  else {
                    var n = s.orderedModifiers[t];
                    e = n.fn;
                    var o = n.options;
                    o = void 0 === o ? {} : o, n = n.name, "function" == typeof e && (s = e({
                      state: s,
                      options: o,
                      name: n,
                      instance: c
                    }) || s)
                  }
            }
          },
          update: w((function () {
            return new Promise((function (e) {
              c.forceUpdate(), e(s)
            }))
          })),
          destroy: function () {
            a(), p = !0
          }
        };
      return B(e, t) ? (c.setOptions(i).then((function (e) {
        !p && i.onFirstUpdate && i.onFirstUpdate(e)
      })), c) : c
    }
  }

  function T(e) {
    var n, o = e.popper,
      r = e.popperRect,
      i = e.placement,
      a = e.variation,
      s = e.offsets,
      p = e.position,
      l = e.gpuAcceleration,
      u = e.adaptive,
      d = e.roundOffsets;
    if (e = e.isFixed, !0 === d) {
      d = s.y;
      var h = window.devicePixelRatio || 1;
      d = {
        x: I(s.x * h) / h || 0,
        y: I(d * h) / h || 0
      }
    } else d = "function" == typeof d ? d(s) : s;
    d = void 0 === (d = (h = d).x) ? 0 : d, h = void 0 === (h = h.y) ? 0 : h;
    var m = s.hasOwnProperty("x");
    s = s.hasOwnProperty("y");
    var v, g = "left",
      b = "top",
      w = window;
    if (u) {
      var x = y(o),
        O = "clientHeight",
        j = "clientWidth";
      x === t(o) && ("static" !== c(x = f(o)).position && "absolute" === p && (O = "scrollHeight", j = "scrollWidth")), "top" !== i && ("left" !== i && "right" !== i || "end" !== a) || (b = "bottom", h -= (e && w.visualViewport ? w.visualViewport.height : x[O]) - r.height, h *= l ? 1 : -1), "left" !== i && ("top" !== i && "bottom" !== i || "end" !== a) || (g = "right", d -= (e && w.visualViewport ? w.visualViewport.width : x[j]) - r.width, d *= l ? 1 : -1)
    }
    return o = Object.assign({
      position: p
    }, u && K), l ? Object.assign({}, o, ((v = {})[b] = s ? "0" : "", v[g] = m ? "0" : "", v.transform = 1 >= (w.devicePixelRatio || 1) ? "translate(" + d + "px, " + h + "px)" : "translate3d(" + d + "px, " + h + "px, 0)", v)) : Object.assign({}, o, ((n = {})[b] = s ? h + "px" : "", n[g] = m ? d + "px" : "", n.transform = "", n))
  }

  function R(e) {
    return e.replace(/left|right|bottom|top/g, (function (e) {
      return ee[e]
    }))
  }

  function S(e) {
    return e.replace(/start|end/g, (function (e) {
      return te[e]
    }))
  }

  function C(e, t, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    }
  }

  function q(e) {
    return ["top", "right", "bottom", "left"].some((function (t) {
      return 0 <= e[t]
    }))
  }
  var V = Math.max,
    N = Math.min,
    I = Math.round,
    _ = ["top", "bottom", "right", "left"],
    F = _.reduce((function (e, t) {
      return e.concat([t + "-start", t + "-end"])
    }), []),
    U = [].concat(_, ["auto"]).reduce((function (e, t) {
      return e.concat([t, t + "-start", t + "-end"])
    }), []),
    z = "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),
    X = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    },
    Y = {
      passive: !0
    },
    G = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var n = e.state,
          o = e.instance,
          r = (e = e.options).scroll,
          i = void 0 === r || r,
          a = void 0 === (e = e.resize) || e,
          s = t(n.elements.popper),
          f = [].concat(n.scrollParents.reference, n.scrollParents.popper);
        return i && f.forEach((function (e) {
            e.addEventListener("scroll", o.update, Y)
          })), a && s.addEventListener("resize", o.update, Y),
          function () {
            i && f.forEach((function (e) {
              e.removeEventListener("scroll", o.update, Y)
            })), a && s.removeEventListener("resize", o.update, Y)
          }
      },
      data: {}
    },
    J = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state;
        t.modifiersData[e.name] = P({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement
        })
      },
      data: {}
    },
    K = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    },
    Q = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = void 0 === (e = n.gpuAcceleration) || e;
        var o = n.adaptive;
        o = void 0 === o || o, n = void 0 === (n = n.roundOffsets) || n, e = {
          placement: x(t.placement),
          variation: A(t.placement),
          popper: t.elements.popper,
          popperRect: t.rects.popper,
          gpuAcceleration: e,
          isFixed: "fixed" === t.options.strategy
        }, null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, T(Object.assign({}, e, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: n
        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, T(Object.assign({}, e, {
          offsets: t.modifiersData.arrow,
          position: "absolute",
          adaptive: !1,
          roundOffsets: n
        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-placement": t.placement
        })
      },
      data: {}
    },
    Z = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach((function (e) {
          var n = t.styles[e] || {},
            r = t.attributes[e] || {},
            i = t.elements[e];
          o(i) && s(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function (e) {
            var t = r[e];
            !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
          })))
        }))
      },
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0"
            },
            arrow: {
              position: "absolute"
            },
            reference: {}
          };
        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach((function (e) {
              var r = t.elements[e],
                i = t.attributes[e] || {};
              e = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) {
                return e[t] = "", e
              }), {}), o(r) && s(r) && (Object.assign(r.style, e), Object.keys(i).forEach((function (e) {
                r.removeAttribute(e)
              })))
            }))
          }
      },
      requires: ["computeStyles"]
    },
    $ = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          o = void 0 === (e = e.options.offset) ? [0, 0] : e,
          r = (e = U.reduce((function (e, n) {
            var r = t.rects,
              i = x(n),
              a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
              s = "function" == typeof o ? o(Object.assign({}, r, {
                placement: n
              })) : o;
            return r = (r = s[0]) || 0, s = ((s = s[1]) || 0) * a, i = 0 <= ["left", "right"].indexOf(i) ? {
              x: s,
              y: r
            } : {
              x: r,
              y: s
            }, e[n] = i, e
          }), {}))[t.placement],
          i = r.x;
        r = r.y, null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += r), t.modifiersData[n] = e
      }
    },
    ee = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    },
    te = {
      start: "end",
      end: "start"
    },
    ne = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        if (e = e.name, !t.modifiersData[e]._skip) {
          var o = n.mainAxis;
          o = void 0 === o || o;
          var r = n.altAxis;
          r = void 0 === r || r;
          var i = n.fallbackPlacements,
            a = n.padding,
            s = n.boundary,
            f = n.rootBoundary,
            p = n.altBoundary,
            c = n.flipVariations,
            l = void 0 === c || c,
            u = n.allowedAutoPlacements;
          c = x(n = t.options.placement), i = i || (c !== n && l ? function (e) {
            if ("auto" === x(e)) return [];
            var t = R(e);
            return [S(e), t, S(t)]
          }(n) : [R(n)]);
          var d = [n].concat(i).reduce((function (e, n) {
            return e.concat("auto" === x(n) ? function (e, t) {
              void 0 === t && (t = {});
              var n = t.boundary,
                o = t.rootBoundary,
                r = t.padding,
                i = t.flipVariations,
                a = t.allowedAutoPlacements,
                s = void 0 === a ? U : a,
                f = A(t.placement);
              0 === (i = (t = f ? i ? F : F.filter((function (e) {
                return A(e) === f
              })) : _).filter((function (e) {
                return 0 <= s.indexOf(e)
              }))).length && (i = t);
              var p = i.reduce((function (t, i) {
                return t[i] = W(e, {
                  placement: i,
                  boundary: n,
                  rootBoundary: o,
                  padding: r
                })[x(i)], t
              }), {});
              return Object.keys(p).sort((function (e, t) {
                return p[e] - p[t]
              }))
            }(t, {
              placement: n,
              boundary: s,
              rootBoundary: f,
              padding: a,
              flipVariations: l,
              allowedAutoPlacements: u
            }) : n)
          }), []);
          n = t.rects.reference, i = t.rects.popper;
          var h = new Map;
          c = !0;
          for (var m = d[0], v = 0; v < d.length; v++) {
            var g = d[v],
              y = x(g),
              b = "start" === A(g),
              w = 0 <= ["top", "bottom"].indexOf(y),
              O = w ? "width" : "height",
              j = W(t, {
                placement: g,
                boundary: s,
                rootBoundary: f,
                altBoundary: p,
                padding: a
              });
            if (b = w ? b ? "right" : "left" : b ? "bottom" : "top", n[O] > i[O] && (b = R(b)), O = R(b), w = [], o && w.push(0 >= j[y]), r && w.push(0 >= j[b], 0 >= j[O]), w.every((function (e) {
                return e
              }))) {
              m = g, c = !1;
              break
            }
            h.set(g, w)
          }
          if (c)
            for (o = function (e) {
                var t = d.find((function (t) {
                  if (t = h.get(t)) return t.slice(0, e).every((function (e) {
                    return e
                  }))
                }));
                if (t) return m = t, "break"
              }, r = l ? 3 : 1; 0 < r && "break" !== o(r); r--);
          t.placement !== m && (t.modifiersData[e]._skip = !0, t.placement = m, t.reset = !0)
        }
      },
      requiresIfExists: ["offset"],
      data: {
        _skip: !1
      }
    },
    oe = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = e.name;
        var o = n.mainAxis,
          r = void 0 === o || o,
          i = void 0 !== (o = n.altAxis) && o,
          a = void 0 === (o = n.tether) || o,
          s = void 0 === (o = n.tetherOffset) ? 0 : o,
          f = W(t, {
            boundary: n.boundary,
            rootBoundary: n.rootBoundary,
            padding: n.padding,
            altBoundary: n.altBoundary
          }),
          p = x(t.placement),
          c = A(t.placement),
          l = !c,
          u = L(p);
        n = "x" === u ? "y" : "x", o = t.modifiersData.popperOffsets;
        var h = t.rects.reference,
          m = t.rects.popper,
          v = "number" == typeof (s = "function" == typeof s ? s(Object.assign({}, t.rects, {
            placement: t.placement
          })) : s) ? {
            mainAxis: s,
            altAxis: s
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, s),
          g = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null;
        if (s = {
            x: 0,
            y: 0
          }, o) {
          if (r) {
            var b, w = "y" === u ? "top" : "left",
              O = "y" === u ? "bottom" : "right",
              j = "y" === u ? "height" : "width",
              E = (r = o[u]) + f[w],
              D = r - f[O],
              P = a ? -m[j] / 2 : 0,
              M = "start" === c ? h[j] : m[j];
            c = "start" === c ? -m[j] : -h[j];
            var k = t.elements.arrow;
            k = a && k ? d(k) : {
              width: 0,
              height: 0
            };
            var B = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            };
            w = B[w], O = B[O], k = V(0, N(h[j], k[j])), M = l ? h[j] / 2 - P - k - w - v.mainAxis : M - k - w - v.mainAxis, l = l ? -h[j] / 2 + P + k + O + v.mainAxis : c + k + O + v.mainAxis, j = (j = t.elements.arrow && y(t.elements.arrow)) ? "y" === u ? j.clientTop || 0 : j.clientLeft || 0 : 0, P = null != (b = null == g ? void 0 : g[u]) ? b : 0, b = r + l - P, E = a ? N(E, r + M - P - j) : E, b = a ? V(D, b) : D, b = V(E, N(r, b)), o[u] = b, s[u] = b - r
          }
          var H;
          if (i) r = "y" === n ? "height" : "width", b = (i = o[n]) + f["x" === u ? "top" : "left"], f = i - f["x" === u ? "bottom" : "right"], p = -1 !== ["top", "left"].indexOf(p), u = null != (H = null == g ? void 0 : g[n]) ? H : 0, H = p ? b : i - h[r] - m[r] - u + v.altAxis, h = p ? i + h[r] + m[r] - u - v.altAxis : f, a && p ? H = (H = V(H, N(i, h))) > h ? h : H : H = V(a ? H : b, N(i, a ? h : f)), o[n] = H, s[n] = H - i;
          t.modifiersData[e] = s
        }
      },
      requiresIfExists: ["offset"]
    },
    re = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t, n = e.state,
          o = e.name,
          r = e.options,
          i = n.elements.arrow,
          a = n.modifiersData.popperOffsets,
          s = x(n.placement);
        if (e = L(s), s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width", i && a) {
          r = M("number" != typeof (r = "function" == typeof (r = r.padding) ? r(Object.assign({}, n.rects, {
            placement: n.placement
          })) : r) ? r : k(r, _));
          var f = d(i),
            p = "y" === e ? "top" : "left",
            c = "y" === e ? "bottom" : "right",
            l = n.rects.reference[s] + n.rects.reference[e] - a[e] - n.rects.popper[s];
          a = a[e] - n.rects.reference[e], a = (i = (i = y(i)) ? "y" === e ? i.clientHeight || 0 : i.clientWidth || 0 : 0) / 2 - f[s] / 2 + (l / 2 - a / 2), s = V(r[p], N(a, i - f[s] - r[c])), n.modifiersData[o] = ((t = {})[e] = s, t.centerOffset = s - a, t)
        }
      },
      effect: function (e) {
        var t = e.state;
        if (null != (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)) {
          if ("string" == typeof e && !(e = t.elements.popper.querySelector(e))) return;
          O(t.elements.popper, e) && (t.elements.arrow = e)
        }
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    },
    ie = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state;
        e = e.name;
        var n = t.rects.reference,
          o = t.rects.popper,
          r = t.modifiersData.preventOverflow,
          i = W(t, {
            elementContext: "reference"
          }),
          a = W(t, {
            altBoundary: !0
          });
        n = C(i, n), o = C(a, o, r), r = q(n), a = q(o), t.modifiersData[e] = {
          referenceClippingOffsets: n,
          popperEscapeOffsets: o,
          isReferenceHidden: r,
          hasPopperEscaped: a
        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
          "data-popper-reference-hidden": r,
          "data-popper-escaped": a
        })
      }
    },
    ae = H({
      defaultModifiers: [G, J, Q, Z]
    }),
    se = [G, J, Q, Z, $, ne, oe, re, ie],
    fe = H({
      defaultModifiers: se
    });
  e.applyStyles = Z, e.arrow = re, e.computeStyles = Q, e.createPopper = fe, e.createPopperLite = ae, e.defaultModifiers = se, e.detectOverflow = W, e.eventListeners = G, e.flip = ne, e.hide = ie, e.offset = $, e.popperGenerator = H, e.popperOffsets = J, e.preventOverflow = oe, Object.defineProperty(e, "__esModule", {
    value: !0
  })
}));
//# sourceMappingURL=popper.min.js.map
