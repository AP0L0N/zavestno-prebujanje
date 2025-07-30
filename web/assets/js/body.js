var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
    }function r() {
        return (r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];for (var i in n) {
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                }
            }return t;
        }).apply(this, arguments);
    }e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;var o,
        a,
        l,
        h,
        c,
        u,
        f,
        d,
        _,
        g,
        p,
        m,
        v,
        E,
        T,
        y,
        C,
        I,
        A,
        b,
        D,
        S,
        w,
        N,
        O,
        k,
        P = function (t) {
        var e = !1;function n(e) {
            var n = this,
                s = !1;return t(this).one(i.TRANSITION_END, function () {
                s = !0;
            }), setTimeout(function () {
                s || i.triggerTransitionEnd(n);
            }, e), this;
        }var i = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
                do {
                    t += ~~(1e6 * Math.random());
                } while (document.getElementById(t));return t;
            }, getSelectorFromElement: function getSelectorFromElement(e) {
                var n,
                    i = e.getAttribute("data-target");i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));try {
                    return t(document).find(i).length > 0 ? i : null;
                } catch (t) {
                    return null;
                }
            }, reflow: function reflow(t) {
                return t.offsetHeight;
            }, triggerTransitionEnd: function triggerTransitionEnd(n) {
                t(n).trigger(e.end);
            }, supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(e);
            }, isElement: function isElement(t) {
                return (t[0] || t).nodeType;
            }, typeCheckConfig: function typeCheckConfig(t, e, n) {
                for (var s in n) {
                    if (Object.prototype.hasOwnProperty.call(n, s)) {
                        var r = n[s],
                            o = e[s],
                            a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".');
                    }
                }var l;
            } };return e = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = { bindType: e.end, delegateType: e.end, handle: function handle(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            } }), i;
    }(e),
        L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = { CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + ".data-api" }, f = "alert", d = "fade", _ = "show", g = function () {
        function t(t) {
            this._element = t;
        }var e = t.prototype;return e.close = function (t) {
            t = t || this._element;var e = this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
        }, e.dispose = function () {
            o.removeData(this._element, l), this._element = null;
        }, e._getRootElement = function (t) {
            var e = P.getSelectorFromElement(t),
                n = !1;return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n;
        }, e._triggerCloseEvent = function (t) {
            var e = o.Event(u.CLOSE);return o(t).trigger(e), e;
        }, e._removeElement = function (t) {
            var e = this;o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) {
                return e._destroyElement(t, n);
            }).emulateTransitionEnd(150) : this._destroyElement(t);
        }, e._destroyElement = function (t) {
            o(t).detach().trigger(u.CLOSED).remove();
        }, t._jQueryInterface = function (e) {
            return this.each(function () {
                var n = o(this),
                    i = n.data(l);i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this);
            });
        }, t._handleDismiss = function (t) {
            return function (e) {
                e && e.preventDefault(), t.close(this);
            };
        }, s(t, null, [{ key: "VERSION", get: function get() {
                return "4.0.0";
            } }]), t;
    }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function () {
        return o.fn[a] = c, g._jQueryInterface;
    }, g),
        R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + E + T, FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T }, k = function () {
        function t(t) {
            this._element = t;
        }var e = t.prototype;return e.toggle = function () {
            var t = !0,
                e = !0,
                n = p(this._element).closest(D)[0];if (n) {
                var i = p(this._element).find(S)[0];if (i) {
                    if ("radio" === i.type) if (i.checked && p(this._element).hasClass(C)) t = !1;else {
                        var s = p(n).find(w)[0];s && p(s).removeClass(C);
                    }if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;i.checked = !p(this._element).hasClass(C), p(i).trigger("change");
                    }i.focus(), e = !1;
                }
            }e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C);
        }, e.dispose = function () {
            p.removeData(this._element, v), this._element = null;
        }, t._jQueryInterface = function (e) {
            return this.each(function () {
                var n = p(this).data(v);n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]();
            });
        }, s(t, null, [{ key: "VERSION", get: function get() {
                return "4.0.0";
            } }]), t;
    }(), p(document).on(O.CLICK_DATA_API, b, function (t) {
        t.preventDefault();var e = t.target;p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle");
    }).on(O.FOCUS_BLUR_DATA_API, b, function (t) {
        var e = p(t.target).closest(N)[0];p(e).toggleClass(A, /^focus(in)?$/.test(t.type));
    }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function () {
        return p.fn[m] = y, k._jQueryInterface;
    }, k),
        j = function (t) {
        var e = "carousel",
            n = "bs.carousel",
            i = "." + n,
            o = t.fn[e],
            a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
            l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
            h = "next",
            c = "prev",
            u = "left",
            f = "right",
            d = { SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load" + i + ".data-api", CLICK_DATA_API: "click" + i + ".data-api" },
            _ = "carousel",
            g = "active",
            p = "slide",
            m = "carousel-item-right",
            v = "carousel-item-left",
            E = "carousel-item-next",
            T = "carousel-item-prev",
            y = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
            C = function () {
            function o(e, n) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners();
            }var C = o.prototype;return C.next = function () {
                this._isSliding || this._slide(h);
            }, C.nextWhenVisible = function () {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next();
            }, C.prev = function () {
                this._isSliding || this._slide(c);
            }, C.pause = function (e) {
                e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
            }, C.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
            }, C.to = function (e) {
                var n = this;this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(d.SLID, function () {
                    return n.to(e);
                });else {
                    if (i === e) return this.pause(), void this.cycle();var s = e > i ? h : c;this._slide(s, this._items[e]);
                }
            }, C.dispose = function () {
                t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
            }, C._getConfig = function (t) {
                return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
            }, C._addEventListeners = function () {
                var e = this;this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
                    return e._keydown(t);
                }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
                    return e.pause(t);
                }).on(d.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                }), "ontouchstart" in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                    }, 500 + e._config.interval);
                }));
            }, C._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
                        t.preventDefault(), this.prev();break;case 39:
                        t.preventDefault(), this.next();}
            }, C._getItemIndex = function (e) {
                return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e);
            }, C._getItemByDirection = function (t, e) {
                var n = t === h,
                    i = t === c,
                    s = this._getItemIndex(e),
                    r = this._items.length - 1;if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;var o = (s + (t === c ? -1 : 1)) % this._items.length;return -1 === o ? this._items[this._items.length - 1] : this._items[o];
            }, C._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e),
                    s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),
                    r = t.Event(d.SLIDE, { relatedTarget: e, direction: n, from: s, to: i });return t(this._element).trigger(r), r;
            }, C._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n = this._indicatorsElement.children[this._getItemIndex(e)];n && t(n).addClass(g);
                }
            }, C._slide = function (e, n) {
                var i,
                    s,
                    r,
                    o = this,
                    a = t(this._element).find(y.ACTIVE_ITEM)[0],
                    l = this._getItemIndex(a),
                    c = n || a && this._getItemByDirection(e, a),
                    _ = this._getItemIndex(c),
                    C = Boolean(this._interval);if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g)) this._isSliding = !1;else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
                    this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);var I = t.Event(d.SLID, { relatedTarget: c, direction: r, from: l, to: _ });P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function () {
                        t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function () {
                            return t(o._element).trigger(I);
                        }, 0);
                    }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle();
                }
            }, o._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n),
                        s = r({}, a, t(this).data());"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (s = r({}, s, e));var l = "string" == typeof e ? e : s.slide;if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);else if ("string" == typeof l) {
                        if ("undefined" == typeof i[l]) throw new TypeError('No method named "' + l + '"');i[l]();
                    } else s.interval && (i.pause(), i.cycle());
                });
            }, o._dataApiClickHandler = function (e) {
                var i = P.getSelectorFromElement(this);if (i) {
                    var s = t(i)[0];if (s && t(s).hasClass(_)) {
                        var a = r({}, t(s).data(), t(this).data()),
                            l = this.getAttribute("data-slide-to");l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault();
                    }
                }
            }, s(o, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0";
                } }, { key: "Default", get: function get() {
                    return a;
                } }]), o;
        }();return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
            t(y.DATA_RIDE).each(function () {
                var e = t(this);C._jQueryInterface.call(e, e.data());
            });
        }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
            return t.fn[e] = o, C._jQueryInterface;
        }, C;
    }(e),
        H = function (t) {
        var e = "collapse",
            n = "bs.collapse",
            i = "." + n,
            o = t.fn[e],
            a = { toggle: !0, parent: "" },
            l = { toggle: "boolean", parent: "(string|element)" },
            h = { SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + ".data-api" },
            c = "show",
            u = "collapse",
            f = "collapsing",
            d = "collapsed",
            _ = "width",
            g = "height",
            p = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
            m = function () {
            function i(e, n) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
                    var r = i[s],
                        o = P.getSelectorFromElement(r);null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r));
                }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
            }var o = i.prototype;return o.toggle = function () {
                t(this._element).hasClass(c) ? this.hide() : this.show();
            }, o.show = function () {
                var e,
                    s,
                    r = this;if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
                    var o = t.Event(h.SHOW);if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                        e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));var a = this._getDimension();t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);var l = function l() {
                            t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN);
                        };if (P.supportsTransitionEnd()) {
                            var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px";
                        } else l();
                    }
                }
            }, o.hide = function () {
                var e = this;if (!this._isTransitioning && t(this._element).hasClass(c)) {
                    var n = t.Event(h.HIDE);if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0) for (var s = 0; s < this._triggerArray.length; s++) {
                            var r = this._triggerArray[s],
                                o = P.getSelectorFromElement(r);if (null !== o) t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1);
                        }this.setTransitioning(!0);var a = function a() {
                            e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN);
                        };this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a();
                    }
                }
            }, o.setTransitioning = function (t) {
                this._isTransitioning = t;
            }, o.dispose = function () {
                t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
            }, o._getConfig = function (t) {
                return (t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t;
            }, o._getDimension = function () {
                return t(this._element).hasClass(_) ? _ : g;
            }, o._getParent = function () {
                var e = this,
                    n = null;P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return t(n).find(s).each(function (t, n) {
                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n]);
                }), n;
            }, o._addAriaAndCollapsedClass = function (e, n) {
                if (e) {
                    var i = t(e).hasClass(c);n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i);
                }
            }, i._getTargetFromElement = function (e) {
                var n = P.getSelectorFromElement(e);return n ? t(n)[0] : null;
            }, i._jQueryInterface = function (e) {
                return this.each(function () {
                    var s = t(this),
                        o = s.data(n),
                        l = r({}, a, s.data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
                        if ("undefined" == typeof o[e]) throw new TypeError('No method named "' + e + '"');o[e]();
                    }
                });
            }, s(i, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0";
                } }, { key: "Default", get: function get() {
                    return a;
                } }]), i;
        }();return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();var i = t(this),
                s = P.getSelectorFromElement(this);t(s).each(function () {
                var e = t(this),
                    s = e.data(n) ? "toggle" : i.data();m._jQueryInterface.call(e, s);
            });
        }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
            return t.fn[e] = o, m._jQueryInterface;
        }, m;
    }(e),
        W = function (t) {
        var e = "dropdown",
            i = "bs.dropdown",
            o = "." + i,
            a = ".data-api",
            l = t.fn[e],
            h = new RegExp("38|40|27"),
            c = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click" + o + a, KEYDOWN_DATA_API: "keydown" + o + a, KEYUP_DATA_API: "keyup" + o + a },
            u = "disabled",
            f = "show",
            d = "dropup",
            _ = "dropright",
            g = "dropleft",
            p = "dropdown-menu-right",
            m = "dropdown-menu-left",
            v = "position-static",
            E = '[data-toggle="dropdown"]',
            T = ".dropdown form",
            y = ".dropdown-menu",
            C = ".navbar-nav",
            I = ".dropdown-menu .dropdown-item:not(.disabled)",
            A = "top-start",
            b = "top-end",
            D = "bottom-start",
            S = "bottom-end",
            w = "right-start",
            N = "left-start",
            O = { offset: 0, flip: !0, boundary: "scrollParent" },
            k = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" },
            L = function () {
            function a(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
            }var l = a.prototype;return l.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass(u)) {
                    var e = a._getParentFromElement(this._element),
                        i = t(this._menu).hasClass(f);if (a._clearMenus(), !i) {
                        var s = { relatedTarget: this._element },
                            r = t.Event(c.SHOW, s);if (t(e).trigger(r), !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o = this._element;t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig());
                            }"ontouchstart" in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s));
                        }
                    }
                }
            }, l.dispose = function () {
                t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
            }, l.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
            }, l._addEventListeners = function () {
                var e = this;t(this._element).on(c.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle();
                });
            }, l._getConfig = function (n) {
                return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
            }, l._getMenuElement = function () {
                if (!this._menu) {
                    var e = a._getParentFromElement(this._element);this._menu = t(e).find(y)[0];
                }return this._menu;
            }, l._getPlacement = function () {
                var e = t(this._element).parent(),
                    n = D;return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n;
            }, l._detectNavbar = function () {
                return t(this._element).closest(".navbar").length > 0;
            }, l._getPopperConfig = function () {
                var t = this,
                    e = {};return "function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e;
                } : e.offset = this._config.offset, { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
            }, a._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this).data(i);if (n || (n = new a(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null), t(this).data(i, n)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
                    }
                });
            }, a._clearMenus = function (e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                    var r = a._getParentFromElement(n[s]),
                        o = t(n[s]).data(i),
                        l = { relatedTarget: n[s] };if (o) {
                        var h = o._menu;if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                            var u = t.Event(c.HIDE, l);t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)));
                        }
                    }
                }
            }, a._getParentFromElement = function (e) {
                var n,
                    i = P.getSelectorFromElement(e);return i && (n = t(i)[0]), n || e.parentNode;
            }, a._dataApiKeydownHandler = function (e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
                    var n = a._getParentFromElement(this),
                        i = t(n).hasClass(f);if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                        var s = t(n).find(I).get();if (0 !== s.length) {
                            var r = s.indexOf(e.target);38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus();
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t(n).find(E)[0];t(o).trigger("focus");
                        }t(this).trigger("click");
                    }
                }
            }, s(a, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0";
                } }, { key: "Default", get: function get() {
                    return O;
                } }, { key: "DefaultType", get: function get() {
                    return k;
                } }]), a;
        }();return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) {
            e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle");
        }).on(c.CLICK_DATA_API, T, function (t) {
            t.stopPropagation();
        }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
            return t.fn[e] = l, L._jQueryInterface;
        }, L;
    }(e),
        M = function (t) {
        var e = "modal",
            n = "bs.modal",
            i = "." + n,
            o = t.fn.modal,
            a = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            l = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            h = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, FOCUSIN: "focusin" + i, RESIZE: "resize" + i, CLICK_DISMISS: "click.dismiss" + i, KEYDOWN_DISMISS: "keydown.dismiss" + i, MOUSEUP_DISMISS: "mouseup.dismiss" + i, MOUSEDOWN_DISMISS: "mousedown.dismiss" + i, CLICK_DATA_API: "click" + i + ".data-api" },
            c = "modal-scrollbar-measure",
            u = "modal-backdrop",
            f = "modal-open",
            d = "fade",
            _ = "show",
            g = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
            p = function () {
            function o(e, n) {
                this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
            }var p = o.prototype;return p.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t);
            }, p.show = function (e) {
                var n = this;if (!this._isTransitioning && !this._isShown) {
                    P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);var i = t.Event(h.SHOW, { relatedTarget: e });t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
                        return n.hide(t);
                    }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                        t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                        });
                    }), this._showBackdrop(function () {
                        return n._showElement(e);
                    }));
                }
            }, p.hide = function (e) {
                var n = this;if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var i = t.Event(h.HIDE);if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function (t) {
                            return n._hideModal(t);
                        }).emulateTransitionEnd(300) : this._hideModal();
                    }
                }
            }, p.dispose = function () {
                t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
            }, p.handleUpdate = function () {
                this._adjustDialog();
            }, p._getConfig = function (t) {
                return t = r({}, a, t), P.typeCheckConfig(e, t, l), t;
            }, p._showElement = function (e) {
                var n = this,
                    i = P.supportsTransitionEnd() && t(this._element).hasClass(d);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();var s = t.Event(h.SHOWN, { relatedTarget: e }),
                    r = function r() {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s);
                };i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r();
            }, p._enforceFocus = function () {
                var e = this;t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus();
                });
            }, p._setEscapeEvent = function () {
                var e = this;this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide());
                }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS);
            }, p._setResizeEvent = function () {
                var e = this;this._isShown ? t(window).on(h.RESIZE, function (t) {
                    return e.handleUpdate(t);
                }) : t(window).off(h.RESIZE);
            }, p._hideModal = function () {
                var e = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN);
                });
            }, p._removeBackdrop = function () {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
            }, p._showBackdrop = function (e) {
                var n = this,
                    i = t(this._element).hasClass(d) ? d : "";if (this._isShown && this._config.backdrop) {
                    var s = P.supportsTransitionEnd() && i;if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide());
                    }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e) return;if (!s) return void e();t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150);
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(_);var r = function r() {
                        n._removeBackdrop(), e && e();
                    };P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r();
                } else e && e();
            }, p._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
            }, p._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
            }, p._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
            }, p._setScrollbar = function () {
                var e = this;if (this._isBodyOverflowing) {
                    t(g.FIXED_CONTENT).each(function (n, i) {
                        var s = t(i)[0].style.paddingRight,
                            r = t(i).css("padding-right");t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
                    }), t(g.STICKY_CONTENT).each(function (n, i) {
                        var s = t(i)[0].style.marginRight,
                            r = t(i).css("margin-right");t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
                    }), t(g.NAVBAR_TOGGLER).each(function (n, i) {
                        var s = t(i)[0].style.marginRight,
                            r = t(i).css("margin-right");t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px");
                    });var n = document.body.style.paddingRight,
                        i = t("body").css("padding-right");t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                }
            }, p._resetScrollbar = function () {
                t(g.FIXED_CONTENT).each(function (e, n) {
                    var i = t(n).data("padding-right");"undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right");
                }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
                    var i = t(n).data("margin-right");"undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right");
                });var e = t("body").data("padding-right");"undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right");
            }, p._getScrollbarWidth = function () {
                var t = document.createElement("div");t.className = c, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
            }, o._jQueryInterface = function (e, i) {
                return this.each(function () {
                    var s = t(this).data(n),
                        a = r({}, o.Default, t(this).data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e);if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
                        if ("undefined" == typeof s[e]) throw new TypeError('No method named "' + e + '"');s[e](i);
                    } else a.show && s.show(i);
                });
            }, s(o, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0";
                } }, { key: "Default", get: function get() {
                    return a;
                } }]), o;
        }();return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
            var i,
                s = this,
                o = P.getSelectorFromElement(this);o && (i = t(o)[0]);var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();var l = t(i).one(h.SHOW, function (e) {
                e.isDefaultPrevented() || l.one(h.HIDDEN, function () {
                    t(s).is(":visible") && s.focus();
                });
            });p._jQueryInterface.call(t(i), a, this);
        }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
            return t.fn.modal = o, p._jQueryInterface;
        }, p;
    }(e),
        U = function (t) {
        var e = "tooltip",
            i = "bs.tooltip",
            o = "." + i,
            a = t.fn[e],
            l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            h = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
            c = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
            u = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
            f = "show",
            d = "out",
            _ = { HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, INSERTED: "inserted" + o, CLICK: "click" + o, FOCUSIN: "focusin" + o, FOCUSOUT: "focusout" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o },
            g = "fade",
            p = "show",
            m = ".tooltip-inner",
            v = ".arrow",
            E = "hover",
            T = "focus",
            y = "click",
            C = "manual",
            I = function () {
            function a(t, e) {
                if ("undefined" == typeof n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
            }var I = a.prototype;return I.enable = function () {
                this._isEnabled = !0;
            }, I.disable = function () {
                this._isEnabled = !1;
            }, I.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled;
            }, I.toggle = function (e) {
                if (this._isEnabled) if (e) {
                    var n = this.constructor.DATA_KEY,
                        i = t(e.currentTarget).data(n);i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
                } else {
                    if (t(this.getTipElement()).hasClass(p)) return void this._leave(null, this);this._enter(null, this);
                }
            }, I.dispose = function () {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
            }, I.show = function () {
                var e = this;if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");var i = t.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);var s = t.contains(this.element.ownerDocument.documentElement, this.element);if (i.isDefaultPrevented() || !s) return;var r = this.getTipElement(),
                        o = P.getUID(this.constructor.NAME);r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        h = this._getAttachment(l);this.addAttachmentClass(h);var c = !1 === this.config.container ? document.body : t(this.config.container);t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, { placement: h, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: v }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
                        }, onUpdate: function onUpdate(t) {
                            e._handlePopperPlacementChange(t);
                        } }), t(r).addClass(p), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);var u = function u() {
                        e.config.animation && e._fixTransition();var n = e._hoverState;e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e);
                    };P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u();
                }
            }, I.hide = function (e) {
                var n = this,
                    i = this.getTipElement(),
                    s = t.Event(this.constructor.Event.HIDE),
                    r = function r() {
                    n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e();
                };t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "");
            }, I.update = function () {
                null !== this._popper && this._popper.scheduleUpdate();
            }, I.isWithContent = function () {
                return Boolean(this.getTitle());
            }, I.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e);
            }, I.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip;
            }, I.setContent = function () {
                var e = t(this.getTipElement());this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p);
            }, I.setElementContent = function (e, n) {
                var i = this.config.html;"object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n);
            }, I.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
            }, I._getAttachment = function (t) {
                return c[t.toUpperCase()];
            }, I._setListeners = function () {
                var e = this;this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                        return e.toggle(t);
                    });else if (n !== C) {
                        var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;t(e.element).on(i, e.config.selector, function (t) {
                            return e._enter(t);
                        }).on(s, e.config.selector, function (t) {
                            return e._leave(t);
                        });
                    }t(e.element).closest(".modal").on("hide.bs.modal", function () {
                        return e.hide();
                    });
                }), this.config.selector ? this.config = r({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
            }, I._fixTitle = function () {
                var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
            }, I._enter = function (e, n) {
                var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    n._hoverState === f && n.show();
                }, n.config.delay.show) : n.show());
            }, I._leave = function (e, n) {
                var i = this.constructor.DATA_KEY;(n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    n._hoverState === d && n.hide();
                }, n.config.delay.hide) : n.hide());
            }, I._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) {
                    if (this._activeTrigger[t]) return !0;
                }return !1;
            }, I._getConfig = function (n) {
                return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n;
            }, I._getDelegateConfig = function () {
                var t = {};if (this.config) for (var e in this.config) {
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                }return t;
            }, I._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(l);null !== n && n.length > 0 && e.removeClass(n.join(""));
            }, I._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
            }, I._fixTransition = function () {
                var e = this.getTipElement(),
                    n = this.config.animation;null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n);
            }, a._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this).data(i),
                        s = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');n[e]();
                    }
                });
            }, s(a, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0";
                } }, { key: "Default", get: function get() {
                    return u;
                } }, { key: "NAME", get: function get() {
                    return e;
                } }, { key: "DATA_KEY", get: function get() {
                    return i;
                } }, { key: "Event", get: function get() {
                    return _;
                } }, { key: "EVENT_KEY", get: function get() {
                    return o;
                } }, { key: "DefaultType", get: function get() {
                    return h;
                } }]), a;
        }();return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
            return t.fn[e] = a, I._jQueryInterface;
        }, I;
    }(e),
        x = function (t) {
        var e = "popover",
            n = "bs.popover",
            i = "." + n,
            o = t.fn[e],
            a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            l = r({}, U.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
            h = r({}, U.DefaultType, { content: "(string|element|function)" }),
            c = "fade",
            u = "show",
            f = ".popover-header",
            d = ".popover-body",
            _ = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i },
            g = function (r) {
            var o, g;function p() {
                return r.apply(this, arguments) || this;
            }g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;var m = p.prototype;return m.isWithContent = function () {
                return this.getTitle() || this._getContent();
            }, m.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-popover-" + e);
            }, m.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip;
            }, m.setContent = function () {
                var e = t(this.getTipElement());this.setElementContent(e.find(f), this.getTitle());var n = this._getContent();"function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u);
            }, m._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content;
            }, m._cleanTipClass = function () {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(a);null !== n && n.length > 0 && e.removeClass(n.join(""));
            }, p._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n),
                        s = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null;if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
                        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
                    }
                });
            }, s(p, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0";
                } }, { key: "Default", get: function get() {
                    return l;
                } }, { key: "NAME", get: function get() {
                    return e;
                } }, { key: "DATA_KEY", get: function get() {
                    return n;
                } }, { key: "Event", get: function get() {
                    return _;
                } }, { key: "EVENT_KEY", get: function get() {
                    return i;
                } }, { key: "DefaultType", get: function get() {
                    return h;
                } }]), p;
        }(U);return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
            return t.fn[e] = o, g._jQueryInterface;
        }, g;
    }(e),
        K = function (t) {
        var e = "scrollspy",
            n = "bs.scrollspy",
            i = "." + n,
            o = t.fn[e],
            a = { offset: 10, method: "auto", target: "" },
            l = { offset: "number", method: "string", target: "(string|element)" },
            h = { ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + ".data-api" },
            c = "dropdown-item",
            u = "active",
            f = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
            d = "offset",
            _ = "position",
            g = function () {
            function o(e, n) {
                var i = this;this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
                    return i._process(t);
                }), this.refresh(), this._process();
            }var g = o.prototype;return g.refresh = function () {
                var e = this,
                    n = this._scrollElement === this._scrollElement.window ? d : _,
                    i = "auto" === this._config.method ? n : this._config.method,
                    s = i === _ ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
                    var n,
                        r = P.getSelectorFromElement(e);if (r && (n = t(r)[0]), n) {
                        var o = n.getBoundingClientRect();if (o.width || o.height) return [t(n)[i]().top + s, r];
                    }return null;
                }).filter(function (t) {
                    return t;
                }).sort(function (t, e) {
                    return t[0] - e[0];
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1]);
                });
            }, g.dispose = function () {
                t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
            }, g._getConfig = function (n) {
                if ("string" != typeof (n = r({}, a, n)).target) {
                    var i = t(n.target).attr("id");i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
                }return P.typeCheckConfig(e, n, l), n;
            }, g._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }, g._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }, g._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }, g._process = function () {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var s = this._offsets.length; s--;) {
                        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s]);
                    }
                }
            }, g._activate = function (e) {
                this._activeTarget = e, this._clear();var n = this._selector.split(",");n = n.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                });var i = t(n.join(","));i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, { relatedTarget: e });
            }, g._clear = function () {
                t(this._selector).filter(f.ACTIVE).removeClass(u);
            }, o._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n);if (i || (i = new o(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), t(this).data(n, i)), "string" == typeof e) {
                        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');i[e]();
                    }
                });
            }, s(o, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0";
                } }, { key: "Default", get: function get() {
                    return a;
                } }]), o;
        }();return t(window).on(h.LOAD_DATA_API, function () {
            for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--;) {
                var i = t(e[n]);g._jQueryInterface.call(i, i.data());
            }
        }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
            return t.fn[e] = o, g._jQueryInterface;
        }, g;
    }(e),
        V = function (t) {
        var e = "bs.tab",
            n = "." + e,
            i = t.fn.tab,
            r = { HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, CLICK_DATA_API: "click.bs.tab.data-api" },
            o = "dropdown-menu",
            a = "active",
            l = "disabled",
            h = "fade",
            c = "show",
            u = ".dropdown",
            f = ".nav, .list-group",
            d = ".active",
            _ = "> li > .active",
            g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            p = ".dropdown-toggle",
            m = "> .dropdown-menu .active",
            v = function () {
            function n(t) {
                this._element = t;
            }var i = n.prototype;return i.show = function () {
                var e = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
                    var n,
                        i,
                        s = t(this._element).closest(f)[0],
                        o = P.getSelectorFromElement(this._element);if (s) {
                        var h = "UL" === s.nodeName ? _ : d;i = (i = t.makeArray(t(s).find(h)))[i.length - 1];
                    }var c = t.Event(r.HIDE, { relatedTarget: this._element }),
                        u = t.Event(r.SHOW, { relatedTarget: i });if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
                        o && (n = t(o)[0]), this._activate(this._element, s);var g = function g() {
                            var n = t.Event(r.HIDDEN, { relatedTarget: e._element }),
                                s = t.Event(r.SHOWN, { relatedTarget: i });t(i).trigger(n), t(e._element).trigger(s);
                        };n ? this._activate(n, n.parentNode, g) : g();
                    }
                }
            }, i.dispose = function () {
                t.removeData(this._element, e), this._element = null;
            }, i._activate = function (e, n, i) {
                var s = this,
                    r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0],
                    o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h),
                    a = function a() {
                    return s._transitionComplete(e, r, i);
                };r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a();
            }, i._transitionComplete = function (e, n, i) {
                if (n) {
                    t(n).removeClass(c + " " + a);var s = t(n.parentNode).find(m)[0];s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1);
                }if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
                    var r = t(e).closest(u)[0];r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0);
                }i && i();
            }, n._jQueryInterface = function (i) {
                return this.each(function () {
                    var s = t(this),
                        r = s.data(e);if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
                        if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');r[i]();
                    }
                });
            }, s(n, null, [{ key: "VERSION", get: function get() {
                    return "4.0.0";
                } }]), n;
        }();return t(document).on(r.CLICK_DATA_API, g, function (e) {
            e.preventDefault(), v._jQueryInterface.call(t(this), "show");
        }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () {
            return t.fn.tab = i, v._jQueryInterface;
        }, v;
    }(e);!function (t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) {
    'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function () {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e);
    }function t(e, t) {
        if (1 !== e.nodeType) return [];var o = getComputedStyle(e, null);return t ? o[t] : o;
    }function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
    }function n(e) {
        if (!e) return document.body;switch (e.nodeName) {case 'HTML':case 'BODY':
                return e.ownerDocument.body;case '#document':
                return e.body;}var i = t(e),
            r = i.overflow,
            p = i.overflowX,
            s = i.overflowY;return (/(auto|scroll)/.test(r + s + p) ? e : n(o(e))
        );
    }function r(e) {
        var o = e && e.offsetParent,
            i = o && o.nodeName;return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(o.nodeName) && 'static' === t(o, 'position') ? r(o) : o : e ? e.ownerDocument.documentElement : document.documentElement;
    }function p(e) {
        var t = e.nodeName;return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e);
    }function s(e) {
        return null === e.parentNode ? e : s(e.parentNode);
    }function d(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = o ? e : t,
            n = o ? t : e,
            a = document.createRange();a.setStart(i, 0), a.setEnd(n, 0);var l = a.commonAncestorContainer;if (e !== l && t !== l || i.contains(n)) return p(l) ? l : r(l);var f = s(e);return f.host ? d(f.host, t) : d(e, s(t).host);
    }function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
            o = 'top' === t ? 'scrollTop' : 'scrollLeft',
            i = e.nodeName;if ('BODY' === i || 'HTML' === i) {
            var n = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || n;return r[o];
        }return e[o];
    }function l(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = a(t, 'top'),
            n = a(t, 'left'),
            r = o ? -1 : 1;return e.top += i * r, e.bottom += i * r, e.left += n * r, e.right += n * r, e;
    }function f(e, t) {
        var o = 'x' === t ? 'Left' : 'Top',
            i = 'Left' == o ? 'Right' : 'Bottom';return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + i + 'Width'], 10);
    }function m(e, t, o, i) {
        return J(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], ie() ? o['offset' + e] + i['margin' + ('Height' === e ? 'Top' : 'Left')] + i['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
    }function h() {
        var e = document.body,
            t = document.documentElement,
            o = ie() && getComputedStyle(t);return { height: m('Height', e, t, o), width: m('Width', e, t, o) };
    }function c(e) {
        return se({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }function g(e) {
        var o = {};if (ie()) try {
            o = e.getBoundingClientRect();var i = a(e, 'top'),
                n = a(e, 'left');o.top += i, o.left += n, o.bottom += i, o.right += n;
        } catch (e) {} else o = e.getBoundingClientRect();var r = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
            p = 'HTML' === e.nodeName ? h() : {},
            s = p.width || e.clientWidth || r.right - r.left,
            d = p.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            m = e.offsetHeight - d;if (l || m) {
            var g = t(e);l -= f(g, 'x'), m -= f(g, 'y'), r.width -= l, r.height -= m;
        }return c(r);
    }function u(e, o) {
        var i = ie(),
            r = 'HTML' === o.nodeName,
            p = g(e),
            s = g(o),
            d = n(e),
            a = t(o),
            f = parseFloat(a.borderTopWidth, 10),
            m = parseFloat(a.borderLeftWidth, 10),
            h = c({ top: p.top - s.top - f, left: p.left - s.left - m, width: p.width, height: p.height });if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
            var u = parseFloat(a.marginTop, 10),
                b = parseFloat(a.marginLeft, 10);h.top -= f - u, h.bottom -= f - u, h.left -= m - b, h.right -= m - b, h.marginTop = u, h.marginLeft = b;
        }return (i ? o.contains(d) : o === d && 'BODY' !== d.nodeName) && (h = l(h, o)), h;
    }function b(e) {
        var t = e.ownerDocument.documentElement,
            o = u(e, t),
            i = J(t.clientWidth, window.innerWidth || 0),
            n = J(t.clientHeight, window.innerHeight || 0),
            r = a(t),
            p = a(t, 'left'),
            s = { top: r - o.top + o.marginTop, left: p - o.left + o.marginLeft, width: i, height: n };return c(s);
    }function w(e) {
        var i = e.nodeName;return 'BODY' === i || 'HTML' === i ? !1 : 'fixed' === t(e, 'position') || w(o(e));
    }function y(e, t, i, r) {
        var p = { top: 0, left: 0 },
            s = d(e, t);if ('viewport' === r) p = b(s);else {
            var a;'scrollParent' === r ? (a = n(o(t)), 'BODY' === a.nodeName && (a = e.ownerDocument.documentElement)) : 'window' === r ? a = e.ownerDocument.documentElement : a = r;var l = u(a, s);if ('HTML' === a.nodeName && !w(s)) {
                var f = h(),
                    m = f.height,
                    c = f.width;p.top += l.top - l.marginTop, p.bottom = m + l.top, p.left += l.left - l.marginLeft, p.right = c + l.left;
            } else p = l;
        }return p.left += i, p.top += i, p.right -= i, p.bottom -= i, p;
    }function E(e) {
        var t = e.width,
            o = e.height;return t * o;
    }function v(e, t, o, i, n) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf('auto')) return e;var p = y(o, i, r, n),
            s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
            d = Object.keys(s).map(function (e) {
            return se({ key: e }, s[e], { area: E(s[e]) });
        }).sort(function (e, t) {
            return t.area - e.area;
        }),
            a = d.filter(function (e) {
            var t = e.width,
                i = e.height;return t >= o.clientWidth && i >= o.clientHeight;
        }),
            l = 0 < a.length ? a[0].key : d[0].key,
            f = e.split('-')[1];return l + (f ? '-' + f : '');
    }function O(e, t, o) {
        var i = d(t, o);return u(o, i);
    }function L(e) {
        var t = getComputedStyle(e),
            o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            n = { width: e.offsetWidth + i, height: e.offsetHeight + o };return n;
    }function x(e) {
        var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
        });
    }function S(e, t, o) {
        o = o.split('-')[0];var i = L(e),
            n = { width: i.width, height: i.height },
            r = -1 !== ['right', 'left'].indexOf(o),
            p = r ? 'top' : 'left',
            s = r ? 'left' : 'top',
            d = r ? 'height' : 'width',
            a = r ? 'width' : 'height';return n[p] = t[p] + t[d] / 2 - i[d] / 2, n[s] = o === s ? t[s] - i[a] : t[x(s)], n;
    }function T(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }function D(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function (e) {
            return e[t] === o;
        });var i = T(e, function (e) {
            return e[t] === o;
        });return e.indexOf(i);
    }function C(t, o, i) {
        var n = void 0 === i ? t : t.slice(0, D(t, 'name', i));return n.forEach(function (t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i = t['function'] || t.fn;t.enabled && e(i) && (o.offsets.popper = c(o.offsets.popper), o.offsets.reference = c(o.offsets.reference), o = i(o, t));
        }), o;
    }function N() {
        if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = O(this.state, this.popper, this.reference), e.placement = v(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = 'absolute', e = C(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
        }
    }function k(e, t) {
        return e.some(function (e) {
            var o = e.name,
                i = e.enabled;return i && o === t;
        });
    }function W(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var i = t[n],
                r = i ? '' + i + o : e;if ('undefined' != typeof document.body.style[r]) return r;
        }return null;
    }function P() {
        return this.state.isDestroyed = !0, k(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.left = '', this.popper.style.position = '', this.popper.style.top = '', this.popper.style[W('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
    }function B(e) {
        var t = e.ownerDocument;return t ? t.defaultView : window;
    }function H(e, t, o, i) {
        var r = 'BODY' === e.nodeName,
            p = r ? e.ownerDocument.defaultView : e;p.addEventListener(t, o, { passive: !0 }), r || H(n(p.parentNode), t, o, i), i.push(p);
    }function A(e, t, o, i) {
        o.updateBound = i, B(e).addEventListener('resize', o.updateBound, { passive: !0 });var r = n(e);return H(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
    }function I() {
        this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate));
    }function M(e, t) {
        return B(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound);
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
    }function R() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state));
    }function U(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }function Y(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = '';-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && U(t[o]) && (i = 'px'), e.style[o] = t[o] + i;
        });
    }function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var i = t[o];!1 === i ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
        });
    }function F(e, t, o) {
        var i = T(e, function (e) {
            var o = e.name;return o === t;
        }),
            n = !!i && e.some(function (e) {
            return e.name === o && e.enabled && e.order < i.order;
        });if (!n) {
            var r = '`' + t + '`';console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
        }return n;
    }function K(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
    }function q(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            o = ae.indexOf(e),
            i = ae.slice(o + 1).concat(ae.slice(0, o));return t ? i.reverse() : i;
    }function V(e, t, o, i) {
        var n = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +n[1],
            p = n[2];if (!r) return e;if (0 === p.indexOf('%')) {
            var s;switch (p) {case '%p':
                    s = o;break;case '%':case '%r':default:
                    s = i;}var d = c(s);return d[t] / 100 * r;
        }if ('vh' === p || 'vw' === p) {
            var a;return a = 'vh' === p ? J(document.documentElement.clientHeight, window.innerHeight || 0) : J(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
        }return r;
    }function z(e, t, o, i) {
        var n = [0, 0],
            r = -1 !== ['right', 'left'].indexOf(i),
            p = e.split(/(\+|\-)/).map(function (e) {
            return e.trim();
        }),
            s = p.indexOf(T(p, function (e) {
            return -1 !== e.search(/,|\s/);
        }));p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d = /\s*,\s*|\s+/,
            a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];return a = a.map(function (e, i) {
            var n = (1 === i ? !r : r) ? 'height' : 'width',
                p = !1;return e.reduce(function (e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
            }, []).map(function (e) {
                return V(e, n, t, o);
            });
        }), a.forEach(function (e, t) {
            e.forEach(function (o, i) {
                U(o) && (n[t] += o * ('-' === e[i - 1] ? -1 : 1));
            });
        }), n;
    }function G(e, t) {
        var o,
            i = t.offset,
            n = e.placement,
            r = e.offsets,
            p = r.popper,
            s = r.reference,
            d = n.split('-')[0];return o = U(+i) ? [+i, 0] : z(i, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
    }for (var _ = Math.min, X = Math.floor, J = Math.max, Q = 'undefined' != typeof window && 'undefined' != typeof document, Z = ['Edge', 'Trident', 'Firefox'], $ = 0, ee = 0; ee < Z.length; ee += 1) {
        if (Q && 0 <= navigator.userAgent.indexOf(Z[ee])) {
            $ = 1;break;
        }
    }var i,
        te = Q && window.Promise,
        oe = te ? function (e) {
        var t = !1;return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e();
            }));
        };
    } : function (e) {
        var t = !1;return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e();
            }, $));
        };
    },
        ie = function ie() {
        return void 0 == i && (i = -1 !== navigator.appVersion.indexOf('MSIE 10')), i;
    },
        ne = function ne(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    },
        re = function () {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++) {
                o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
            }
        }return function (t, o, i) {
            return o && e(t.prototype, o), i && e(t, i), t;
        };
    }(),
        pe = function pe(e, t, o) {
        return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
    },
        se = Object.assign || function (e) {
        for (var t, o = 1; o < arguments.length; o++) {
            for (var i in t = arguments[o], t) {
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
        }return e;
    },
        de = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
        ae = de.slice(3),
        le = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
        fe = function () {
        function t(o, i) {
            var n = this,
                r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};ne(this, t), this.scheduleUpdate = function () {
                return requestAnimationFrame(n.update);
            }, this.update = oe(this.update.bind(this)), this.options = se({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(se({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                n.options.modifiers[e] = se({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return se({ name: e }, n.options.modifiers[e]);
            }).sort(function (e, t) {
                return e.order - t.order;
            }), this.modifiers.forEach(function (t) {
                t.enabled && e(t.onLoad) && t.onLoad(n.reference, n.popper, n.options, t, n.state);
            }), this.update();var p = this.options.eventsEnabled;p && this.enableEventListeners(), this.state.eventsEnabled = p;
        }return re(t, [{ key: 'update', value: function value() {
                return N.call(this);
            } }, { key: 'destroy', value: function value() {
                return P.call(this);
            } }, { key: 'enableEventListeners', value: function value() {
                return I.call(this);
            } }, { key: 'disableEventListeners', value: function value() {
                return R.call(this);
            } }]), t;
    }();return fe.Utils = ('undefined' == typeof window ? global : window).PopperUtils, fe.placements = de, fe.Defaults = { placement: 'bottom', eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = t.split('-')[1];if (i) {
                        var n = e.offsets,
                            r = n.reference,
                            p = n.popper,
                            s = -1 !== ['bottom', 'top'].indexOf(o),
                            d = s ? 'left' : 'top',
                            a = s ? 'width' : 'height',
                            l = { start: pe({}, d, r[d]), end: pe({}, d, r[d] + r[a] - p[a]) };e.offsets.popper = se({}, p, l[i]);
                    }return e;
                } }, offset: { order: 200, enabled: !0, fn: G, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
                    var o = t.boundariesElement || r(e.instance.popper);e.instance.reference === o && (o = r(o));var i = y(e.instance.popper, e.instance.reference, t.padding, o);t.boundaries = i;var n = t.priority,
                        p = e.offsets.popper,
                        s = { primary: function primary(e) {
                            var o = p[e];return p[e] < i[e] && !t.escapeWithReference && (o = J(p[e], i[e])), pe({}, e, o);
                        }, secondary: function secondary(e) {
                            var o = 'right' === e ? 'left' : 'top',
                                n = p[o];return p[e] > i[e] && !t.escapeWithReference && (n = _(p[o], i[e] - ('right' === e ? p.width : p.height))), pe({}, o, n);
                        } };return n.forEach(function (e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';p = se({}, p, s[t](e));
                    }), e.offsets.popper = p, e;
                }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
                    var t = e.offsets,
                        o = t.popper,
                        i = t.reference,
                        n = e.placement.split('-')[0],
                        r = X,
                        p = -1 !== ['top', 'bottom'].indexOf(n),
                        s = p ? 'right' : 'bottom',
                        d = p ? 'left' : 'top',
                        a = p ? 'width' : 'height';return o[s] < r(i[d]) && (e.offsets.popper[d] = r(i[d]) - o[a]), o[d] > r(i[s]) && (e.offsets.popper[d] = r(i[s])), e;
                } }, arrow: { order: 500, enabled: !0, fn: function fn(e, o) {
                    var i;if (!F(e.instance.modifiers, 'arrow', 'keepTogether')) return e;var n = o.element;if ('string' == typeof n) {
                        if (n = e.instance.popper.querySelector(n), !n) return e;
                    } else if (!e.instance.popper.contains(n)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;var r = e.placement.split('-')[0],
                        p = e.offsets,
                        s = p.popper,
                        d = p.reference,
                        a = -1 !== ['left', 'right'].indexOf(r),
                        l = a ? 'height' : 'width',
                        f = a ? 'Top' : 'Left',
                        m = f.toLowerCase(),
                        h = a ? 'left' : 'top',
                        g = a ? 'bottom' : 'right',
                        u = L(n)[l];d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)), d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]), e.offsets.popper = c(e.offsets.popper);var b = d[m] + d[l] / 2 - u / 2,
                        w = t(e.instance.popper),
                        y = parseFloat(w['margin' + f], 10),
                        E = parseFloat(w['border' + f + 'Width'], 10),
                        v = b - e.offsets.popper[m] - y - E;return v = J(_(s[l] - u, v), 0), e.arrowElement = n, e.offsets.arrow = (i = {}, pe(i, m, Math.round(v)), pe(i, h, ''), i), e;
                }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
                    if (k(e.instance.modifiers, 'inner')) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var o = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        i = e.placement.split('-')[0],
                        n = x(i),
                        r = e.placement.split('-')[1] || '',
                        p = [];switch (t.behavior) {case le.FLIP:
                            p = [i, n];break;case le.CLOCKWISE:
                            p = q(i);break;case le.COUNTERCLOCKWISE:
                            p = q(i, !0);break;default:
                            p = t.behavior;}return p.forEach(function (s, d) {
                        if (i !== s || p.length === d + 1) return e;i = e.placement.split('-')[0], n = x(i);var a = e.offsets.popper,
                            l = e.offsets.reference,
                            f = X,
                            m = 'left' === i && f(a.right) > f(l.left) || 'right' === i && f(a.left) < f(l.right) || 'top' === i && f(a.bottom) > f(l.top) || 'bottom' === i && f(a.top) < f(l.bottom),
                            h = f(a.left) < f(o.left),
                            c = f(a.right) > f(o.right),
                            g = f(a.top) < f(o.top),
                            u = f(a.bottom) > f(o.bottom),
                            b = 'left' === i && h || 'right' === i && c || 'top' === i && g || 'bottom' === i && u,
                            w = -1 !== ['top', 'bottom'].indexOf(i),
                            y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u);(m || b || y) && (e.flipped = !0, (m || b) && (i = p[d + 1]), y && (r = K(r)), e.placement = i + (r ? '-' + r : ''), e.offsets.popper = se({}, e.offsets.popper, S(e.instance.popper, e.offsets.reference, e.placement)), e = C(e.instance.modifiers, e, 'flip'));
                    }), e;
                }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function fn(e) {
                    var t = e.placement,
                        o = t.split('-')[0],
                        i = e.offsets,
                        n = i.popper,
                        r = i.reference,
                        p = -1 !== ['left', 'right'].indexOf(o),
                        s = -1 === ['top', 'left'].indexOf(o);return n[p ? 'left' : 'top'] = r[o] - (s ? n[p ? 'width' : 'height'] : 0), e.placement = x(t), e.offsets.popper = c(n), e;
                } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
                    if (!F(e.instance.modifiers, 'hide', 'preventOverflow')) return e;var t = e.offsets.reference,
                        o = T(e.instance.modifiers, function (e) {
                        return 'preventOverflow' === e.name;
                    }).boundaries;if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide) return e;e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
                    } else {
                        if (!1 === e.hide) return e;e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
                    }return e;
                } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
                    var o = t.x,
                        i = t.y,
                        n = e.offsets.popper,
                        p = T(e.instance.modifiers, function (e) {
                        return 'applyStyle' === e.name;
                    }).gpuAcceleration;void 0 !== p && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,
                        d,
                        a = void 0 === p ? t.gpuAcceleration : p,
                        l = r(e.instance.popper),
                        f = g(l),
                        m = { position: n.position },
                        h = { left: X(n.left), top: X(n.top), bottom: X(n.bottom), right: X(n.right) },
                        c = 'bottom' === o ? 'top' : 'bottom',
                        u = 'right' === i ? 'left' : 'right',
                        b = W('transform');if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == u ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[u] = 0, m.willChange = 'transform';else {
                        var w = 'bottom' == c ? -1 : 1,
                            y = 'right' == u ? -1 : 1;m[c] = d * w, m[u] = s * y, m.willChange = c + ', ' + u;
                    }var E = { "x-placement": e.placement };return e.attributes = se({}, E, e.attributes), e.styles = se({}, m, e.styles), e.arrowStyles = se({}, e.offsets.arrow, e.arrowStyles), e;
                }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
                    return Y(e.instance.popper, e.styles), j(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e;
                }, onLoad: function onLoad(e, t, o, i, n) {
                    var r = O(n, t, e),
                        p = v(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);return t.setAttribute('x-placement', p), Y(t, { position: 'absolute' }), o;
                }, gpuAcceleration: void 0 } } }, fe;
});
//# sourceMappingURL=popper.min.js.map

/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function (factory) {
    // eslint-disable-line no-extra-semi
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function ($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function _parse(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function _rows(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function () {
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function _parseOptions(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function (options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function (key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function (elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function () {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function () {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function () {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function (key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function () {
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function () {
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, targetHeight - verticalPadding + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function () {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop(scrollTop / htmlHeight * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function () {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function () {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function () {
            this.matchHeight(true);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(null, matchHeight._groups);
        }
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function _update(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function () {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function (throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function () {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);
    setTimeout(function () {

        $(matchHeight._update);
    }, 200);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function (event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function (event) {
        matchHeight._update(true, event);
    });
});

/*! smooth-scroll v16.0.3 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function (e, t) {
    "function" == typeof define && define.amd ? define([], function () {
        return t(e);
    }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t(e) : e.SmoothScroll = t(e);
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, function (C) {
    "use strict";
    var L = { ignore: "[data-scroll-ignore]", header: null, topOnEmptyHash: !0, speed: 500, speedAsDuration: !1, durationMax: null, durationMin: null, clip: !0, offset: 0, easing: "easeInOutCubic", customEasing: null, updateURL: !0, popstate: !0, emitEvents: !0 },
        H = function H() {
        var n = {};return Array.prototype.forEach.call(arguments, function (e) {
            for (var t in e) {
                if (!e.hasOwnProperty(t)) return;n[t] = e[t];
            }
        }), n;
    },
        r = function r(e) {
        "#" === e.charAt(0) && (e = e.substr(1));for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o;) {
            if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
        }return "#" + r;
    },
        q = function q() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    },
        x = function x(e) {
        return e ? (t = e, parseInt(C.getComputedStyle(t).height, 10) + e.offsetTop) : 0;var t;
    },
        Q = function Q(e, t, n, o) {
        if (t.emitEvents && "function" == typeof C.CustomEvent) {
            var a = new CustomEvent(e, { bubbles: !0, detail: { anchor: n, toggle: o } });document.dispatchEvent(a);
        }
    };return function (o, e) {
        var I,
            a,
            M,
            A,
            w = {};w.cancelScroll = function (e) {
            cancelAnimationFrame(A), A = null, e || Q("scrollCancel", I);
        }, w.animateScroll = function (i, s, e) {
            w.cancelScroll();var c = H(I || L, e || {}),
                u = "[object Number]" === Object.prototype.toString.call(i),
                t = u || !i.tagName ? null : i;if (u || t) {
                var l = C.pageYOffset;c.header && !M && (M = document.querySelector(c.header));var n,
                    o,
                    a,
                    d,
                    r,
                    f,
                    m,
                    h,
                    p = x(M),
                    g = u ? i : function (e, t, n, o) {
                    var a = 0;if (e.offsetParent) for (; a += e.offsetTop, e = e.offsetParent;) {}return a = Math.max(a - t - n, 0), o && (a = Math.min(a, q() - C.innerHeight)), a;
                }(t, p, parseInt("function" == typeof c.offset ? c.offset(i, s) : c.offset, 10), c.clip),
                    y = g - l,
                    v = q(),
                    S = 0,
                    E = (n = y, a = (o = c).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && a > o.durationMax ? o.durationMax : o.durationMin && a < o.durationMin ? o.durationMin : parseInt(a, 10)),
                    b = function b(e, t) {
                    var n,
                        o,
                        a,
                        r = C.pageYOffset;if (e == t || r == t || (l < t && C.innerHeight + r) >= v) return w.cancelScroll(!0), o = t, a = u, 0 === (n = i) && document.body.focus(), a || (n.focus(), document.activeElement !== n && (n.setAttribute("tabindex", "-1"), n.focus(), n.style.outline = "none"), C.scrollTo(0, o)), Q("scrollStop", c, i, s), !(A = d = null);
                },
                    O = function O(e) {
                    var t, n, o;d || (d = e), S += e - d, f = l + y * (n = r = 1 < (r = 0 === E ? 0 : S / E) ? 1 : r, "easeInQuad" === (t = c).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), t.customEasing && (o = t.customEasing(n)), o || n), C.scrollTo(0, Math.floor(f)), b(f, g) || (A = C.requestAnimationFrame(O), d = e);
                };0 === C.pageYOffset && C.scrollTo(0, 0), m = i, h = c, u || history.pushState && h.updateURL && history.pushState({ smoothScroll: JSON.stringify(h), anchor: m.id }, document.title, m === document.documentElement ? "#top" : "#" + m.id), Q("scrollStart", c, i, s), w.cancelScroll(!0), C.requestAnimationFrame(O);
            }
        };var t = function t(e) {
            if (!("matchMedia" in C && C.matchMedia("(prefers-reduced-motion)").matches) && !e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(I.ignore) && a.hostname === C.location.hostname && a.pathname === C.location.pathname && /#/.test(a.href)) {
                var t,
                    n = r(a.hash);if ("#" === n) {
                    if (!I.topOnEmptyHash) return;t = document.documentElement;
                } else t = document.querySelector(n);(t = t || "#top" !== n ? t : document.documentElement) && (e.preventDefault(), function (e) {
                    if (history.replaceState && e.updateURL && !history.state) {
                        var t = C.location.hash;t = t || "", history.replaceState({ smoothScroll: JSON.stringify(e), anchor: t || C.pageYOffset }, document.title, t || C.location.href);
                    }
                }(I), w.animateScroll(t, a));
            }
        },
            n = function n(e) {
            if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(I)) {
                var t = history.state.anchor;"string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || w.animateScroll(t, null, { updateURL: !1 });
            }
        };w.destroy = function () {
            I && (document.removeEventListener("click", t, !1), C.removeEventListener("popstate", n, !1), w.cancelScroll(), A = M = a = I = null);
        };return function () {
            if (!("querySelector" in document && "addEventListener" in C && "requestAnimationFrame" in C && "closest" in C.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";w.destroy(), I = H(L, e || {}), M = I.header ? document.querySelector(I.header) : null, document.addEventListener("click", t, !1), I.updateURL && I.popstate && C.addEventListener("popstate", n, !1);
        }(), w;
    };
});
!function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
    "use strict";
    var e = window.Slick || {};(e = function () {
        var e = 0;return function (t, o) {
            var s,
                n = this;n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(t), appendDots: i(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(e, t) {
                    return i('<button type="button" />').text(t + 1);
                }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
        };
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
    }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
        var s = this;if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
        }), s.$slidesCache = s.$slides, s.reinit();
    }, e.prototype.animateHeight = function () {
        var i = this;if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({ height: e }, i.options.speed);
        }
    }, e.prototype.animateSlide = function (e, t) {
        var o = {},
            s = this;s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function step(i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
            }, complete: function complete() {
                t && t.call();
            } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
            s.disableTransition(), t.call();
        }, s.options.speed));
    }, e.prototype.getNavTarget = function () {
        var e = this,
            t = e.options.asNavFor;return t && null !== t && (t = i(t).not(e.$slider)), t;
    }, e.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.each(function () {
            var t = i(this).slick("getSlick");t.unslicked || t.slideHandler(e, !0);
        });
    }, e.prototype.applyTransition = function (i) {
        var e = this,
            t = {};!1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }, e.prototype.autoPlay = function () {
        var i = this;i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }, e.prototype.autoPlayClear = function () {
        var i = this;i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }, e.prototype.autoPlayIterator = function () {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
    }, e.prototype.buildArrows = function () {
        var e = this;!0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
    }, e.prototype.buildDots = function () {
        var e,
            t,
            o = this;if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            }o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
        }
    }, e.prototype.buildOut = function () {
        var e = this;e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
    }, e.prototype.buildRows = function () {
        var i,
            e,
            t,
            o,
            s,
            n,
            r,
            l = this;if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);n.get(c) && a.appendChild(n.get(c));
                    }d.appendChild(a);
                }o.appendChild(d);
            }l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
        }
    }, e.prototype.checkResponsive = function (e, t) {
        var o,
            s,
            n,
            r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;for (o in r.breakpoints) {
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            }null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
        }
    }, e.prototype.changeSlide = function (e, t) {
        var o,
            s,
            n,
            r = this,
            l = i(e.currentTarget);switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);break;case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);break;case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");break;default:
                return;}
    }, e.prototype.checkNavigable = function (i) {
        var e, t;if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
            if (i < e[o]) {
                i = t;break;
            }t = e[o];
        }return i;
    }, e.prototype.cleanUpEvents = function () {
        var e = this;e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }, e.prototype.cleanUpSlideEvents = function () {
        var e = this;e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }, e.prototype.cleanUpRows = function () {
        var i,
            e = this;e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
    }, e.prototype.clickHandler = function (i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }, e.prototype.destroy = function (e) {
        var t = this;t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            i(this).attr("style", i(this).data("originalStyling"));
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
    }, e.prototype.disableTransition = function (i) {
        var e = this,
            t = {};t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }, e.prototype.fadeSlide = function (i, e) {
        var t = this;!1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function () {
            t.disableTransition(i), e.call();
        }, t.options.speed));
    }, e.prototype.fadeSlideOut = function (i) {
        var e = this;!1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
        var e = this;null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
    }, e.prototype.focusHandler = function () {
        var e = this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();var o = i(this);setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
            }, 0);
        });
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
        return this.currentSlide;
    }, e.prototype.getDotCount = function () {
        var i = this,
            e = 0,
            t = 0,
            o = 0;if (!0 === i.options.infinite) {
            if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
                ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
            }
        } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
            ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);return o - 1;
    }, e.prototype.getLeft = function (i) {
        var e,
            t,
            o,
            s,
            n = this,
            r = 0;return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
    }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
        return this.options[i];
    }, e.prototype.getNavigableIndexes = function () {
        var i,
            e = this,
            t = 0,
            o = 0,
            s = [];for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
            s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        }return s;
    }, e.prototype.getSlick = function () {
        return this;
    }, e.prototype.getSlideCount = function () {
        var e,
            t,
            o = this;return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
    }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
    }, e.prototype.init = function (e) {
        var t = this;i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
    }, e.prototype.initADA = function () {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function (i) {
            return i >= 0 && i < e.slideCount;
        });e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s });
        }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
            var n = o[s];i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
        }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
            e.$slides.eq(s).attr("tabindex", 0);
        }e.activateADA();
    }, e.prototype.initArrowEvents = function () {
        var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }, e.prototype.initDotEvents = function () {
        var e = this;!0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }, e.prototype.initSlideEvents = function () {
        var e = this;e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }, e.prototype.initializeEvents = function () {
        var e = this;e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
    }, e.prototype.initUI = function () {
        var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }, e.prototype.keyHandler = function (i) {
        var e = this;i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
    }, e.prototype.lazyLoad = function () {
        function e(e) {
            i("img[data-lazy]", e).each(function () {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");r.onload = function () {
                    e.animate({ opacity: 0 }, 100, function () {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        }), n.$slider.trigger("lazyLoaded", [n, e, t]);
                    });
                }, r.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
                }, r.src = t;
            });
        }var t,
            o,
            s,
            n = this;if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
            r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        }e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
    }, e.prototype.loadSlider = function () {
        var i = this;i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }, e.prototype.next = e.prototype.slickNext = function () {
        this.changeSlide({ data: { message: "next" } });
    }, e.prototype.orientationChange = function () {
        var i = this;i.checkResponsive(), i.setPosition();
    }, e.prototype.pause = e.prototype.slickPause = function () {
        var i = this;i.autoPlayClear(), i.paused = !0;
    }, e.prototype.play = e.prototype.slickPlay = function () {
        var i = this;i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
    }, e.prototype.postSlide = function (e) {
        var t = this;t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }, e.prototype.prev = e.prototype.slickPrev = function () {
        this.changeSlide({ data: { message: "previous" } });
    }, e.prototype.preventDefault = function (i) {
        i.preventDefault();
    }, e.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;var t,
            o,
            s,
            n,
            r,
            l = this,
            d = i("img[data-lazy]", l.$slider);d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                l.progressiveLazyLoad(e + 1);
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
    }, e.prototype.refresh = function (e) {
        var t,
            o,
            s = this;o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }, e.prototype.registerBreakpoints = function () {
        var e,
            t,
            o,
            s = this,
            n = s.options.responsive || null;if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";for (e in n) {
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) {
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    }s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
                }
            }s.breakpoints.sort(function (i, e) {
                return s.options.mobileFirst ? i - e : e - i;
            });
        }
    }, e.prototype.reinit = function () {
        var e = this;e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
    }, e.prototype.resize = function () {
        var e = this;i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50));
    }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
        var o = this;if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
    }, e.prototype.setCSS = function (i) {
        var e,
            t,
            o = this,
            s = {};!0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
    }, e.prototype.setDimensions = function () {
        var i = this;!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }, e.prototype.setFade = function () {
        var e,
            t = this;t.$slides.each(function (o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
        }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }, e.prototype.setHeight = function () {
        var i = this;if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height", e);
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function () {
        var e,
            t,
            o,
            s,
            n,
            r = this,
            l = !1;if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
            r.options[i] = e;
        });else if ("responsive" === n) for (t in s) {
            if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
                for (e = r.options.responsive.length - 1; e >= 0;) {
                    r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                }r.options.responsive.push(s[t]);
            }
        }l && (r.unload(), r.reinit());
    }, e.prototype.setPosition = function () {
        var i = this;i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
    }, e.prototype.setProps = function () {
        var i = this,
            e = document.body.style;i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
    }, e.prototype.setSlideClasses = function (i) {
        var e,
            t,
            o,
            s,
            n = this;if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));"ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
    }, e.prototype.setupInfinite = function () {
        var e,
            t,
            o,
            s = this;if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
                t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            }for (e = 0; e < o + s.slideCount; e += 1) {
                t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            }s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                i(this).attr("id", "");
            });
        }
    }, e.prototype.interrupt = function (i) {
        var e = this;i || e.autoPlay(), e.interrupted = i;
    }, e.prototype.selectHandler = function (e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
    }, e.prototype.slideHandler = function (i, e, t) {
        var o,
            s,
            n,
            r,
            l,
            d = null,
            a = this;if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o);
        }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
            a.postSlide(o);
        }) : a.postSlide(o));else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
                a.postSlide(s);
            })) : a.postSlide(s), void a.animateHeight();!0 !== t ? a.animateSlide(d, function () {
                a.postSlide(s);
            }) : a.postSlide(s);
        }
    }, e.prototype.startLoad = function () {
        var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
    }, e.prototype.swipeDirection = function () {
        var i,
            e,
            t,
            o,
            s = this;return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
    }, e.prototype.swipeEnd = function (i) {
        var e,
            t,
            o = this;if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {case "left":case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;break;case "right":case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;}"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
    }, e.prototype.swipeHandler = function (i) {
        var e = this;if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {case "start":
                e.swipeStart(i);break;case "move":
                e.swipeMove(i);break;case "end":
                e.swipeEnd(i);}
    }, e.prototype.swipeMove = function (i) {
        var e,
            t,
            o,
            s,
            n,
            r,
            l = this;return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
    }, e.prototype.swipeStart = function (i) {
        var e,
            t = this;if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
        var i = this;null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
    }, e.prototype.unload = function () {
        var e = this;i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, e.prototype.unslick = function (i) {
        var e = this;e.$slider.trigger("unslick", [e, i]), e.destroy();
    }, e.prototype.updateArrows = function () {
        var i = this;Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, e.prototype.updateDots = function () {
        var i = this;null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
    }, e.prototype.visibility = function () {
        var i = this;i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
    }, i.fn.slick = function () {
        var i,
            t,
            o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;for (i = 0; i < r; i++) {
            if ("object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        }return o;
    };
});

/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
    "use strict";
    function i(i, r, a) {
        function h(t, e, n) {
            var o,
                r = "$()." + i + '("' + e + '")';return t.each(function (t, h) {
                var u = a.data(h, i);if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);var d = u[e];if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");var l = d.apply(u, n);o = void 0 === o ? l : o;
            }), void 0 !== o ? o : t;
        }function u(t, e) {
            t.each(function (t, n) {
                var o = a.data(n, i);o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o));
            });
        }a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);return h(this, t, e);
            }return u(this, t), this;
        }, n(a));
    }function n(t) {
        !t || t && t.bridget || (t.bridget = i);
    }var o = Array.prototype.slice,
        r = t.console,
        s = "undefined" == typeof r ? function () {} : function (t) {
        r.error(t);
    };return n(e || t.jQuery), i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
    function t() {}var e = t.prototype;return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];return -1 == n.indexOf(e) && n.push(e), this;
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};return n[e] = !0, this;
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            var n = i.indexOf(e);return -1 != n && i.splice(n, 1), this;
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            i = i.slice(0), e = e || [];for (var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var r = i[o],
                    s = n && n[r];s && (this.off(t, r), delete n[r]), r.apply(this, e);
            }return this;
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents;
    }, t;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
    "use strict";
    function t(t) {
        var e = parseFloat(t),
            i = -1 == t.indexOf("%") && !isNaN(e);return i && e;
    }function e() {}function i() {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; u > e; e++) {
            var i = h[e];t[i] = 0;
        }return t;
    }function n(t) {
        var e = getComputedStyle(t);return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
    }function o() {
        if (!d) {
            d = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(e);var o = n(e);s = 200 == Math.round(t(o.width)), r.isBoxSizeOuter = s, i.removeChild(e);
        }
    }function r(e) {
        if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
            var r = n(e);if ("none" == r.display) return i();var a = {};a.width = e.offsetWidth, a.height = e.offsetHeight;for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                var c = h[l],
                    f = r[c],
                    m = parseFloat(f);a[c] = isNaN(m) ? 0 : m;
            }var p = a.paddingLeft + a.paddingRight,
                g = a.paddingTop + a.paddingBottom,
                y = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                E = d && s,
                b = t(r.width);b !== !1 && (a.width = b + (E ? 0 : p + _));var x = t(r.height);return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a;
        }
    }var s,
        a = "undefined" == typeof console ? e : function (t) {
        console.error(t);
    },
        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = h.length,
        d = !1;return r;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n + "MatchesSelector";if (t[o]) return o;
        }
    }();return function (e, i) {
        return e[t](i);
    };
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
    var i = {};i.extend = function (t, e) {
        for (var i in e) {
            t[i] = e[i];
        }return t;
    }, i.modulo = function (t, e) {
        return (t % e + e) % e;
    };var n = Array.prototype.slice;i.makeArray = function (t) {
        if (Array.isArray(t)) return t;if (null === t || void 0 === t) return [];var e = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length;return e ? n.call(t) : [t];
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);-1 != i && t.splice(i, 1);
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) {
            if (t = t.parentNode, e(t, i)) return t;
        }
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, i.filterFindElements = function (t, n) {
        t = i.makeArray(t);var o = [];return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!n) return void o.push(t);e(t, n) && o.push(t);for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) {
                    o.push(i[r]);
                }
            }
        }), o;
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;var n = t.prototype[e],
            o = e + "Timeout";t.prototype[e] = function () {
            var t = this[o];clearTimeout(t);var e = arguments,
                r = this;this[o] = setTimeout(function () {
                n.apply(r, e), delete r[o];
            }, i);
        };
    }, i.docReady = function (t) {
        var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
        }).toLowerCase();
    };var o = t.console;return i.htmlInit = function (e, n) {
        i.docReady(function () {
            var r = i.toDashed(n),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                h = document.querySelectorAll(".js-" + r),
                u = i.makeArray(a).concat(i.makeArray(h)),
                d = s + "-options",
                l = t.jQuery;u.forEach(function (t) {
                var i,
                    r = t.getAttribute(s) || t.getAttribute(d);try {
                    i = r && JSON.parse(r);
                } catch (a) {
                    return void (o && o.error("Error parsing " + s + " on " + t.className + ": " + a));
                }var h = new e(t, i);l && l.data(t, n, h);
            });
        });
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
    "use strict";
    function i(t) {
        for (var e in t) {
            return !1;
        }return e = null, !0;
    }function n(t, e) {
        t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
    }function o(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase();
        });
    }var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        h = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s],
        u = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" },
        d = n.prototype = Object.create(t.prototype);d.constructor = n, d._create = function () {
        this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, d.getSize = function () {
        this.size = e(this.element);
    }, d.css = function (t) {
        var e = this.element.style;for (var i in t) {
            var n = u[i] || i;e[n] = t[i];
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = t[e ? "left" : "right"],
            o = t[i ? "top" : "bottom"],
            r = parseFloat(n),
            s = parseFloat(o),
            a = this.layout.size;-1 != n.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s;
    }, d.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            o = i ? "paddingLeft" : "paddingRight",
            r = i ? "left" : "right",
            s = i ? "right" : "left",
            a = this.position.x + t[o];e[r] = this.getXValue(a), e[s] = "";var h = n ? "paddingTop" : "paddingBottom",
            u = n ? "top" : "bottom",
            d = n ? "bottom" : "top",
            l = this.position.y + t[h];e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
    }, d._transitionTo = function (t, e) {
        this.getPosition();var i = this.position.x,
            n = this.position.y,
            o = t == this.position.x && e == this.position.y;if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();var r = t - i,
            s = e - n,
            a = {};a.transform = this.getTranslate(r, s), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e);
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);for (var e in t.onTransitionEnd) {
            t.onTransitionEnd[e].call(this);
        }
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);var e = this._transn;for (var i in t.onTransitionEnd) {
            e.onEnd[i] = t.onTransitionEnd[i];
        }for (i in t.to) {
            e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        }if (t.from) {
            this.css(t.from);var n = this.element.offsetHeight;n = null;
        }this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
    };var l = "opacity," + o(a);d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(h, this, !1);
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t);
    };var c = { "-webkit-transform": "transform" };d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                n = c[t.propertyName] || t.propertyName;if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                var o = e.onEnd[n];o.call(this), delete e.onEnd[n];
            }this.emitEvent("transitionEnd", [this]);
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1;
    }, d._removeStyles = function (t) {
        var e = {};for (var i in t) {
            e[i] = "";
        }this.css(e);
    };var f = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return d.removeTransitionStyles = function () {
        this.css(f);
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
    }, d.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem();
        }), void this.hide()) : void this.removeElem();
    }, d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];if (e.opacity) return "opacity";for (var i in e) {
            return i;
        }
    }, d.hide = function () {
        this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
    }, d.destroy = function () {
        this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
    }, n;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
        return e(t, i, n, o, r);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, n, o) {
    "use strict";
    function r(t, e) {
        var i = n.getQueryElement(t);if (!i) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);var o = ++l;this.element.outlayerGUID = o, c[o] = this, this._create();var r = this._getOption("initLayout");r && this.layout();
    }function s(t) {
        function e() {
            t.apply(this, arguments);
        }return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
    }function a(t) {
        if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            n = e && e[2];if (!i.length) return 0;i = parseFloat(i);var o = m[n] || 1;return i * o;
    }var h = t.console,
        u = t.jQuery,
        d = function d() {},
        l = 0,
        c = {};r.namespace = "outlayer", r.Item = o, r.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var f = r.prototype;n.extend(f, e.prototype), f.option = function (t) {
        n.extend(this.options, t);
    }, f._getOption = function (t) {
        var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
    }, r.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, f._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);var t = this._getOption("resize");t && this.bindResize();
    }, f.reloadItems = function () {
        this.items = this._itemize(this.element.children);
    }, f._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
            var r = e[o],
                s = new i(r, this);n.push(s);
        }return n;
    }, f._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
    }, f.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element;
        });
    }, f.layout = function () {
        this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
    }, f._init = f.layout, f._resetLayout = function () {
        this.getSize();
    }, f.getSize = function () {
        this.size = i(this.element);
    }, f._getMeasurement = function (t, e) {
        var n,
            o = this.options[t];o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0;
    }, f.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, f._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored;
        });
    }, f._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];t.forEach(function (t) {
                var n = this._getItemLayoutPosition(t);n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n);
            }, this), this._processLayoutQueue(i);
        }
    }, f._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
    }, f._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
        }, this);
    }, f.updateStagger = function () {
        var t = this.options.stagger;return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
    }, f._positionItem = function (t, e, i, n, o) {
        n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
    }, f._postLayout = function () {
        this.resizeContainer();
    }, f.resizeContainer = function () {
        var t = this._getOption("resizeContainer");if (t) {
            var e = this._getContainerSize();e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
    }, f._getContainerSize = d, f._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
        }
    }, f._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e]);
        }function n() {
            s++, s == r && i();
        }var o = this,
            r = e.length;if (!e || !r) return void i();var s = 0;e.forEach(function (e) {
            e.once(t, n);
        });
    }, f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;if (this.emitEvent(t, n), u) if (this.$element = this.$element || u(this.element), e) {
            var o = u.Event(e);o.type = t, this.$element.trigger(o, i);
        } else this.$element.trigger(t, i);
    }, f.ignore = function (t) {
        var e = this.getItem(t);e && (e.isIgnored = !0);
    }, f.unignore = function (t) {
        var e = this.getItem(t);e && delete e.isIgnored;
    }, f.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
    }, f.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            n.removeFrom(this.stamps, t), this.unignore(t);
        }, this);
    }, f._find = function (t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0;
    }, f._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, f._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
    }, f._manageStamp = d, f._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            n = this._boundingRect,
            o = i(t),
            r = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom };return r;
    }, f.handleEvent = n.handleEvent, f.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0;
    }, f.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1;
    }, f.onresize = function () {
        this.resize();
    }, n.debounceMethod(r, "onresize", 100), f.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, f.needsResizeLayout = function () {
        var t = i(this.element),
            e = this.size && t;return e && t.innerWidth !== this.size.innerWidth;
    }, f.addItems = function (t) {
        var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
    }, f.appended = function (t) {
        var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
    }, f.prepended = function (t) {
        var e = this._itemize(t);if (e.length) {
            var i = this.items.slice(0);this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
        }
    }, f.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal();
            });
        }
    }, f.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.hide();
            });
        }
    }, f.revealItemElements = function (t) {
        var e = this.getItems(t);this.reveal(e);
    }, f.hideItemElements = function (t) {
        var e = this.getItems(t);this.hide(e);
    }, f.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];if (i.element == t) return i;
        }
    }, f.getItems = function (t) {
        t = n.makeArray(t);var e = [];return t.forEach(function (t) {
            var i = this.getItem(t);i && e.push(i);
        }, this), e;
    }, f.remove = function (t) {
        var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), n.removeFrom(this.items, t);
        }, this);
    }, f.destroy = function () {
        var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy();
        }), this.unbindResize();var e = this.element.outlayerGUID;delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace);
    }, r.data = function (t) {
        t = n.getQueryElement(t);var e = t && t.outlayerGUID;return e && c[e];
    }, r.create = function (t, e) {
        var i = s(r);return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i;
    };var m = { ms: 1, s: 1e3 };return r.Item = o, r;
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
    var i = t.create("masonry");i.compatOptions.fitWidth = "isFitWidth";var n = i.prototype;return n._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
            this.colYs.push(0);
        }this.maxY = 0, this.horizontalColIndex = 0;
    }, n.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;this.columnWidth = i && e(i).outerWidth || this.containerWidth;
        }var n = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / n,
            s = n - o % n,
            a = s && 1 > s ? "round" : "floor";r = Math[a](r), this.cols = Math.max(r, 1);
    }, n.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            n = e(i);this.containerWidth = n && n.innerWidth;
    }, n._getItemLayoutPosition = function (t) {
        t.getSize();var e = t.size.outerWidth % this.columnWidth,
            i = e && 1 > e ? "round" : "ceil",
            n = Math[i](t.size.outerWidth / this.columnWidth);n = Math.min(n, this.cols);for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = { x: this.columnWidth * r.col, y: r.y }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) {
            this.colYs[u] = a;
        }return s;
    }, n._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);return { col: e.indexOf(i), y: i };
    }, n._getTopColGroup = function (t) {
        if (2 > t) return this.colYs;for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            e[n] = this._getColGroupY(n, t);
        }return e;
    }, n._getColGroupY = function (t, e) {
        if (2 > e) return this.colYs[t];var i = this.colYs.slice(t, t + e);return Math.max.apply(Math, i);
    }, n._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
            n = t > 1 && i + t > this.cols;i = n ? 0 : i;var o = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) };
    }, n._manageStamp = function (t) {
        var i = e(t),
            n = this._getElementOffset(t),
            o = this._getOption("originLeft"),
            r = o ? n.left : n.right,
            s = r + i.outerWidth,
            a = Math.floor(r / this.columnWidth);a = Math.max(0, a);var h = Math.floor(s / this.columnWidth);h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) {
            this.colYs[l] = Math.max(d, this.colYs[l]);
        }
    }, n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
    }, n._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
            t++;
        }return (this.cols - t) * this.columnWidth - this.gutter;
    }, n.needsResizeLayout = function () {
        var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
    }, i;
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';return t.each(function (t, u) {
                var h = a.data(u, i);if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);var d = h[e];if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");var l = d.apply(h, o);n = void 0 === n ? l : n;
            }), void 0 !== n ? n : t;
        }function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
            });
        }a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);return u(this, t, e);
            }return h(this, t), this;
        }, o(a));
    }function o(t) {
        !t || t && t.bridget || (t.bridget = i);
    }var n = Array.prototype.slice,
        s = t.console,
        r = "undefined" == typeof s ? function () {} : function (t) {
        s.error(t);
    };return o(e || t.jQuery), i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
    function t() {}var e = t.prototype;return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                o = i[t] = i[t] || [];return o.indexOf(e) == -1 && o.push(e), this;
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
                o = i[t] = i[t] || {};return o[e] = !0, this;
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            var o = i.indexOf(e);return o != -1 && i.splice(o, 1), this;
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];if (i && i.length) {
            i = i.slice(0), e = e || [];for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n],
                    r = o && o[s];r && (this.off(t, s), delete o[s]), s.apply(this, e);
            }return this;
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents;
    }, t;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
    "use strict";
    function t(t) {
        var e = parseFloat(t),
            i = t.indexOf("%") == -1 && !isNaN(e);return i && e;
    }function e() {}function i() {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
            var i = u[e];t[i] = 0;
        }return t;
    }function o(t) {
        var e = getComputedStyle(t);return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
    }function n() {
        if (!d) {
            d = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(e);var n = o(e);r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e);
        }
    }function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
            var s = o(e);if ("none" == s.display) return i();var a = {};a.width = e.offsetWidth, a.height = e.offsetHeight;for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l],
                    c = s[f],
                    m = parseFloat(c);a[f] = isNaN(m) ? 0 : m;
            }var p = a.paddingLeft + a.paddingRight,
                y = a.paddingTop + a.paddingBottom,
                g = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth,
                I = d && r,
                x = t(s.width);x !== !1 && (a.width = x + (I ? 0 : p + _));var S = t(s.height);return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
        }
    }var r,
        a = "undefined" == typeof console ? e : function (t) {
        console.error(t);
    },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length,
        d = !1;return s;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i],
                n = o + "MatchesSelector";if (t[n]) return n;
        }
    }();return function (e, i) {
        return e[t](i);
    };
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
    var i = {};i.extend = function (t, e) {
        for (var i in e) {
            t[i] = e[i];
        }return t;
    }, i.modulo = function (t, e) {
        return (t % e + e) % e;
    };var o = Array.prototype.slice;i.makeArray = function (t) {
        if (Array.isArray(t)) return t;if (null === t || void 0 === t) return [];var e = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length;return e ? o.call(t) : [t];
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);i != -1 && t.splice(i, 1);
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) {
            if (t = t.parentNode, e(t, i)) return t;
        }
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, i.filterFindElements = function (t, o) {
        t = i.makeArray(t);var n = [];return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);e(t, o) && n.push(t);for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
                    n.push(i[s]);
                }
            }
        }), n;
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;var o = t.prototype[e],
            n = e + "Timeout";t.prototype[e] = function () {
            var t = this[n];clearTimeout(t);var e = arguments,
                s = this;this[n] = setTimeout(function () {
                o.apply(s, e), delete s[n];
            }, i);
        };
    }, i.docReady = function (t) {
        var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
        }).toLowerCase();
    };var n = t.console;return i.htmlInit = function (e, o) {
        i.docReady(function () {
            var s = i.toDashed(o),
                r = "data-" + s,
                a = document.querySelectorAll("[" + r + "]"),
                u = document.querySelectorAll(".js-" + s),
                h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options",
                l = t.jQuery;h.forEach(function (t) {
                var i,
                    s = t.getAttribute(r) || t.getAttribute(d);try {
                    i = s && JSON.parse(s);
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
                }var u = new e(t, i);l && l.data(t, o, u);
            });
        });
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
    "use strict";
    function i(t) {
        for (var e in t) {
            return !1;
        }return e = null, !0;
    }function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
    }function n(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase();
        });
    }var s = document.documentElement.style,
        r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
        h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
        d = o.prototype = Object.create(t.prototype);d.constructor = o, d._create = function () {
        this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;this[e] && this[e](t);
    }, d.getSize = function () {
        this.size = e(this.element);
    }, d.css = function (t) {
        var e = this.element.style;for (var i in t) {
            var o = h[i] || i;e[o] = t[i];
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element),
            e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = t[e ? "left" : "right"],
            n = t[i ? "top" : "bottom"],
            s = parseFloat(o),
            r = parseFloat(n),
            a = this.layout.size;o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r;
    }, d.layoutPosition = function () {
        var t = this.layout.size,
            e = {},
            i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop"),
            n = i ? "paddingLeft" : "paddingRight",
            s = i ? "left" : "right",
            r = i ? "right" : "left",
            a = this.position.x + t[n];e[s] = this.getXValue(a), e[r] = "";var u = o ? "paddingTop" : "paddingBottom",
            h = o ? "top" : "bottom",
            d = o ? "bottom" : "top",
            l = this.position.y + t[u];e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
    }, d._transitionTo = function (t, e) {
        this.getPosition();var i = this.position.x,
            o = this.position.y,
            n = t == this.position.x && e == this.position.y;if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();var s = t - i,
            r = e - o,
            a = {};a.transform = this.getTranslate(s, r), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
            o = this.layout._getOption("originTop");return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e);
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);for (var e in t.onTransitionEnd) {
            t.onTransitionEnd[e].call(this);
        }
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);var e = this._transn;for (var i in t.onTransitionEnd) {
            e.onEnd[i] = t.onTransitionEnd[i];
        }for (i in t.to) {
            e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        }if (t.from) {
            this.css(t.from);var o = this.element.offsetHeight;o = null;
        }this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
    };var l = "opacity," + n(a);d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1);
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t);
    };var f = { "-webkit-transform": "transform" };d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn,
                o = f[t.propertyName] || t.propertyName;if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];n.call(this), delete e.onEnd[o];
            }this.emitEvent("transitionEnd", [this]);
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
    }, d._removeStyles = function (t) {
        var e = {};for (var i in t) {
            e[i] = "";
        }this.css(e);
    };var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return d.removeTransitionStyles = function () {
        this.css(c);
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem();
        }), void this.hide()) : void this.removeElem();
    }, d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("visibleStyle");e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];if (e.opacity) return "opacity";for (var i in e) {
            return i;
        }
    }, d.hide = function () {
        this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
            e = {},
            i = this.getHideRevealTransitionEndProperty("hiddenStyle");e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
    }, d.destroy = function () {
        this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
    }, o;
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
        return e(t, i, o, n, s);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);var n = ++l;this.element.outlayerGUID = n, f[n] = this, this._create();var s = this._getOption("initLayout");s && this.layout();
    }function r(t) {
        function e() {
            t.apply(this, arguments);
        }return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
    }function a(t) {
        if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
            i = e && e[1],
            o = e && e[2];if (!i.length) return 0;i = parseFloat(i);var n = m[o] || 1;return i * n;
    }var u = t.console,
        h = t.jQuery,
        d = function d() {},
        l = 0,
        f = {};s.namespace = "outlayer", s.Item = n, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var c = s.prototype;o.extend(c, e.prototype), c.option = function (t) {
        o.extend(this.options, t);
    }, c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
    }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, c._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);var t = this._getOption("resize");t && this.bindResize();
    }, c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
    }, c._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n],
                r = new i(s, this);o.push(r);
        }return o;
    }, c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
    }, c.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element;
        });
    }, c.layout = function () {
        this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
    }, c._init = c.layout, c._resetLayout = function () {
        this.getSize();
    }, c.getSize = function () {
        this.size = i(this.element);
    }, c._getMeasurement = function (t, e) {
        var o,
            n = this.options[t];n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0;
    }, c.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored;
        });
    }, c._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];t.forEach(function (t) {
                var o = this._getItemLayoutPosition(t);o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
            }, this), this._processLayoutQueue(i);
        }
    }, c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
    }, c._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
        }, this);
    }, c.updateStagger = function () {
        var t = this.options.stagger;return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
    }, c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
    }, c._postLayout = function () {
        this.resizeContainer();
    }, c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");if (t) {
            var e = this._getContainerSize();e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
        }
    }, c._emitCompleteOnItems = function (t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e]);
        }function o() {
            r++, r == s && i();
        }var n = this,
            s = e.length;if (!e || !s) return void i();var r = 0;e.forEach(function (e) {
            e.once(t, o);
        });
    }, c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
            var n = h.Event(e);n.type = t, this.$element.trigger(n, i);
        } else this.$element.trigger(t, i);
    }, c.ignore = function (t) {
        var e = this.getItem(t);e && (e.isIgnored = !0);
    }, c.unignore = function (t) {
        var e = this.getItem(t);e && delete e.isIgnored;
    }, c.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
    }, c.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            o.removeFrom(this.stamps, t), this.unignore(t);
        }, this);
    }, c._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
    }, c._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
            e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
    }, c._manageStamp = d, c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
            o = this._boundingRect,
            n = i(t),
            s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };return s;
    }, c.handleEvent = o.handleEvent, c.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0;
    }, c.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1;
    }, c.onresize = function () {
        this.resize();
    }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, c.needsResizeLayout = function () {
        var t = i(this.element),
            e = this.size && t;return e && t.innerWidth !== this.size.innerWidth;
    }, c.addItems = function (t) {
        var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
    }, c.appended = function (t) {
        var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
    }, c.prepended = function (t) {
        var e = this._itemize(t);if (e.length) {
            var i = this.items.slice(0);this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
        }
    }, c.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal();
            });
        }
    }, c.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();t.forEach(function (t, i) {
                t.stagger(i * e), t.hide();
            });
        }
    }, c.revealItemElements = function (t) {
        var e = this.getItems(t);this.reveal(e);
    }, c.hideItemElements = function (t) {
        var e = this.getItems(t);this.hide(e);
    }, c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];if (i.element == t) return i;
        }
    }, c.getItems = function (t) {
        t = o.makeArray(t);var e = [];return t.forEach(function (t) {
            var i = this.getItem(t);i && e.push(i);
        }, this), e;
    }, c.remove = function (t) {
        var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), o.removeFrom(this.items, t);
        }, this);
    }, c.destroy = function () {
        var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy();
        }), this.unbindResize();var e = this.element.outlayerGUID;delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
    }, s.data = function (t) {
        t = o.getQueryElement(t);var e = t && t.outlayerGUID;return e && f[e];
    }, s.create = function (t, e) {
        var i = r(s);return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
    };var m = { ms: 1, s: 1e3 };return s.Item = n, s;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function (t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments);
    }var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;i._create = function () {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();var t = this.layout.options.getSortData,
                e = this.layout._sorters;for (var i in t) {
                var o = e[i];this.sortData[i] = o(this.element, this);
            }
        }
    };var n = i.destroy;return i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
    }, e;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function (t, e) {
    "use strict";
    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
    }var o = i.prototype,
        n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];return n.forEach(function (t) {
        o[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments);
        };
    }), o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
            i = this.isotope.size && e;return i && e.innerHeight != this.isotope.size.innerHeight;
    }, o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
    }, o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
    }, o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
    }, o.getSegmentSize = function (t, e) {
        var i = t + e,
            o = "outer" + e;if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();this[i] = n && n[o] || this.isotope.size["inner" + e];
        }
    }, o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];return e && e.element && t(e.element);
    }, o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
    }, o.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size;
    }, i.modes = {}, i.create = function (t, e) {
        function n() {
            i.apply(this, arguments);
        }return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n;
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
    var i = t.create("masonry");i.compatOptions.fitWidth = "isFitWidth";var o = i.prototype;return o._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
            this.colYs.push(0);
        }this.maxY = 0, this.horizontalColIndex = 0;
    }, o.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0],
                i = t && t.element;this.columnWidth = i && e(i).outerWidth || this.containerWidth;
        }var o = this.columnWidth += this.gutter,
            n = this.containerWidth + this.gutter,
            s = n / o,
            r = o - n % o,
            a = r && r < 1 ? "round" : "floor";s = Math[a](s), this.cols = Math.max(s, 1);
    }, o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
            i = t ? this.element.parentNode : this.element,
            o = e(i);this.containerWidth = o && o.innerWidth;
    }, o._getItemLayoutPosition = function (t) {
        t.getSize();var e = t.size.outerWidth % this.columnWidth,
            i = e && e < 1 ? "round" : "ceil",
            o = Math[i](t.size.outerWidth / this.columnWidth);o = Math.min(o, this.cols);for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) {
            this.colYs[h] = a;
        }return r;
    }, o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
            i = Math.min.apply(Math, e);return { col: e.indexOf(i), y: i };
    }, o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
            e[o] = this._getColGroupY(o, t);
        }return e;
    }, o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];var i = this.colYs.slice(t, t + e);return Math.max.apply(Math, i);
    }, o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
            o = t > 1 && i + t > this.cols;i = o ? 0 : i;var n = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) };
    }, o._manageStamp = function (t) {
        var i = e(t),
            o = this._getElementOffset(t),
            n = this._getOption("originLeft"),
            s = n ? o.left : o.right,
            r = s + i.outerWidth,
            a = Math.floor(s / this.columnWidth);a = Math.max(0, a);var u = Math.floor(r / this.columnWidth);u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
            this.colYs[l] = Math.max(d, this.colYs[l]);
        }
    }, o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
    }, o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
            t++;
        }return (this.cols - t) * this.columnWidth - this.gutter;
    }, o.needsResizeLayout = function () {
        var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
        o = i.prototype,
        n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };for (var s in e.prototype) {
        n[s] || (o[s] = e.prototype[s]);
    }var r = o.measureColumns;o.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this);
    };var a = o._getOption;return o._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
    }, i;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
        i = e.prototype;return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);var o = { x: this.x, y: this.y };return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
    }, i._getContainerSize = function () {
        return { height: this.maxY };
    }, e;
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
        i = e.prototype;return i._resetLayout = function () {
        this.y = 0;
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
            i = this.y;return this.y += t.size.outerHeight, { x: e, y: i };
    }, i._getContainerSize = function () {
        return { height: this.y };
    }, e;
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a);
    }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
}(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
        return function (i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n],
                    r = i.sortData[s],
                    a = o.sortData[s];if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e,
                        h = u ? 1 : -1;return (r > a ? 1 : -1) * h;
                }
            }return 0;
        };
    }var u = t.jQuery,
        h = String.prototype.trim ? function (t) {
        return t.trim();
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "");
    },
        d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });d.Item = s, d.LayoutMode = r;var l = d.prototype;l._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];for (var t in r.modes) {
            this._initLayoutMode(t);
        }
    }, l.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this);
    }, l._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];o.id = this.itemGUID++;
        }return this._updateItemsSortData(t), t;
    }, l._initLayoutMode = function (t) {
        var e = r.modes[t],
            i = this.options[t] || {};this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
    }, l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
    }, l._layout = function () {
        var t = this._getIsInstant();this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
    }, l.arrange = function (t) {
        this.option(t), this._getIsInstant();var e = this._filter(this.items);this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
    }, l._init = l.arrange, l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
    }, l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
            e = void 0 !== t ? t : !this._isLayoutInited;return this._isInstant = e, e;
    }, l._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }var e,
            i,
            o,
            n = this;this.once("layoutComplete", function () {
            e = !0, t();
        }), this.once("hideComplete", function () {
            i = !0, t();
        }), this.once("revealComplete", function () {
            o = !0, t();
        });
    }, l._filter = function (t) {
        var e = this.options.filter;e = e || "*";for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];if (!a.isIgnored) {
                var u = s(a);u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
            }
        }return { matches: i, needReveal: o, needHide: n };
    }, l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t);
        } : "function" == typeof t ? function (e) {
            return t(e.element);
        } : function (e) {
            return o(e.element, t);
        };
    }, l.updateSortData = function (t) {
        var e;t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
    }, l._getSorters = function () {
        var t = this.options.getSortData;for (var e in t) {
            var i = t[e];this._sorters[e] = f(i);
        }
    }, l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];o.updateSortData();
        }
    };var f = function () {
        function t(t) {
            if ("string" != typeof t) return t;var i = h(t).split(" "),
                o = i[0],
                n = o.match(/^\[(.+)\]$/),
                s = n && n[1],
                r = e(s, o),
                a = d.sortDataParsers[i[1]];return t = a ? function (t) {
                return t && a(r(t));
            } : function (t) {
                return t && r(t);
            };
        }function e(t, e) {
            return t ? function (e) {
                return e.getAttribute(t);
            } : function (t) {
                var i = t.querySelector(e);return i && i.textContent;
            };
        }return t;
    }();d.sortDataParsers = { parseInt: function (_parseInt) {
            function parseInt(_x) {
                return _parseInt.apply(this, arguments);
            }

            parseInt.toString = function () {
                return _parseInt.toString();
            };

            return parseInt;
        }(function (t) {
            return parseInt(t, 10);
        }), parseFloat: function (_parseFloat) {
            function parseFloat(_x2) {
                return _parseFloat.apply(this, arguments);
            }

            parseFloat.toString = function () {
                return _parseFloat.toString();
            };

            return parseFloat;
        }(function (t) {
            return parseFloat(t);
        }) }, l._sort = function () {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));var e = a(this.sortHistory, this.options.sortAscending);this.filteredItems.sort(e);
        }
    }, l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++) {
            if (t[e] != this.sortHistory[e]) return !1;
        }return !0;
    }, l._mode = function () {
        var t = this.options.layoutMode,
            e = this.modes[t];if (!e) throw new Error("No layout mode: " + t);return e.options = this.options[t], e;
    }, l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
    }, l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
    }, l._getContainerSize = function () {
        return this._mode()._getContainerSize();
    }, l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
    }, l.appended = function (t) {
        var e = this.addItems(t);if (e.length) {
            var i = this._filterRevealAdded(e);this.filteredItems = this.filteredItems.concat(i);
        }
    }, l.prepended = function (t) {
        var e = this._itemize(t);if (e.length) {
            this._resetLayout(), this._manageStamps();var i = this._filterRevealAdded(e);this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
        }
    }, l._filterRevealAdded = function (t) {
        var e = this._filter(t);return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
    }, l.insert = function (t) {
        var e = this.addItems(t);if (e.length) {
            var i,
                o,
                n = e.length;for (i = 0; i < n; i++) {
                o = e[i], this.element.appendChild(o.element);
            }var s = this._filter(e).matches;for (i = 0; i < n; i++) {
                e[i].isLayoutInstant = !0;
            }for (this.arrange(), i = 0; i < n; i++) {
                delete e[i].isLayoutInstant;
            }this.reveal(s);
        }
    };var c = l.remove;return l.remove = function (t) {
        t = n.makeArray(t);var e = this.getItems(t);c.call(this, t);for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];n.removeFrom(this.filteredItems, s);
        }
    }, l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];e.sortData.random = Math.random();
        }this.options.sortBy = "random", this._sort(), this._layout();
    }, l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;this.options.transitionDuration = 0;var o = t.apply(this, e);return this.options.transitionDuration = i, o;
    }, l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element;
        });
    }, d;
});
/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function (a, b) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], b);else if ("undefined" != typeof exports) b(module, exports);else {
        var c = { exports: {} };b(c, c.exports), a.WOW = c.exports;
    }
}(this, function (a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }function d(a, b) {
        return b.indexOf(a) >= 0;
    }function e(a, b) {
        for (var c in b) {
            if (null == a[c]) {
                var d = b[c];a[c] = d;
            }
        }return a;
    }function f(a) {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        );
    }function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
            c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
            d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
            e = void 0;return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;
    }function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]();
    }function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c;
    }function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
    }function k() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }Object.defineProperty(b, "__esModule", { value: !0 });var l,
        m,
        n = function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
            }
        }return function (b, c, d) {
            return c && a(b.prototype, c), d && a(b, d), b;
        };
    }(),
        o = window.WeakMap || window.MozWeakMap || function () {
        function a() {
            c(this, a), this.keys = [], this.values = [];
        }return n(a, [{ key: "get", value: function value(a) {
                for (var b = 0; b < this.keys.length; b++) {
                    var c = this.keys[b];if (c === a) return this.values[b];
                }
            } }, { key: "set", value: function value(a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                    var d = this.keys[c];if (d === a) return this.values[c] = b, this;
                }return this.keys.push(a), this.values.push(b), this;
            } }]), a;
    }(),
        p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function () {
        function a() {
            c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."));
        }return n(a, [{ key: "observe", value: function value() {} }]), a;
    }(), l.notSupported = !0, m),
        q = window.getComputedStyle || function (a) {
        var b = /(\-([a-z]){1})/g;return { getPropertyValue: function getPropertyValue(c) {
                "float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function (a, b) {
                    return b.toUpperCase();
                });var d = a.currentStyle;return (null != d ? d[c] : void 0) || null;
            } };
    },
        r = function () {
        function a() {
            var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];c(this, a), this.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null, resetAnimation: !0 }, this.animate = function () {
                return "requestAnimationFrame" in window ? function (a) {
                    return window.requestAnimationFrame(a);
                } : function (a) {
                    return a();
                };
            }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o(), this.wowEvent = g(this.config.boxClass);
        }return n(a, [{ key: "init", value: function value() {
                this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = [];
            } }, { key: "start", value: function value() {
                var a = this;if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length) if (this.disabled()) this.resetStyle();else for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b];this.applyStyle(c, !0);
                }if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
                    var d = new p(function (b) {
                        for (var c = 0; c < b.length; c++) {
                            for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                var f = d.addedNodes[e];a.doSync(f);
                            }
                        }
                    });d.observe(document.body, { childList: !0, subtree: !0 });
                }
            } }, { key: "stop", value: function value() {
                this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval);
            } }, { key: "sync", value: function value() {
                p.notSupported && this.doSync(this.element);
            } }, { key: "doSync", value: function value(a) {
                if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
                    a = a.parentNode || a;for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                        var e = b[c];d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0);
                    }
                }
            } }, { key: "show", value: function value(a) {
                return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)), a;
            } }, { key: "applyStyle", value: function value(a, b) {
                var c = this,
                    d = a.getAttribute("data-wow-duration"),
                    e = a.getAttribute("data-wow-delay"),
                    f = a.getAttribute("data-wow-iteration");return this.animate(function () {
                    return c.customStyle(a, b, d, e, f);
                });
            } }, { key: "resetStyle", value: function value() {
                for (var a = 0; a < this.boxes.length; a++) {
                    var b = this.boxes[a];b.style.visibility = "visible";
                }
            } }, { key: "resetAnimation", value: function value(a) {
                if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                    var b = a.target || a.srcElement;b.className = b.className.replace(this.config.animateClass, "").trim();
                }
            } }, { key: "customStyle", value: function value(a, b, c, d, e) {
                return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a;
            } }, { key: "vendorSet", value: function value(a, b) {
                for (var c in b) {
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];a["" + c] = d;for (var e = 0; e < this.vendors.length; e++) {
                            var f = this.vendors[e];a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                        }
                    }
                }
            } }, { key: "vendorCSS", value: function value(a, b) {
                for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];d = d || c.getPropertyCSSValue("-" + f + "-" + b);
                }return d;
            } }, { key: "animationName", value: function value(a) {
                var b = void 0;try {
                    b = this.vendorCSS(a, "animation-name").cssText;
                } catch (c) {
                    b = q(a).getPropertyValue("animation-name");
                }return "none" === b ? "" : b;
            } }, { key: "cacheAnimationName", value: function value(a) {
                return this.animationNameCache.set(a, this.animationName(a));
            } }, { key: "cachedAnimationName", value: function value(a) {
                return this.animationNameCache.get(a);
            } }, { key: "scrollHandler", value: function value() {
                this.scrolled = !0;
            } }, { key: "scrollCallback", value: function value() {
                if (this.scrolled) {
                    this.scrolled = !1;for (var a = [], b = 0; b < this.boxes.length; b++) {
                        var c = this.boxes[b];if (c) {
                            if (this.isVisible(c)) {
                                this.show(c);continue;
                            }a.push(c);
                        }
                    }this.boxes = a, this.boxes.length || this.config.live || this.stop();
                }
            } }, { key: "offsetTop", value: function value(a) {
                for (; void 0 === a.offsetTop;) {
                    a = a.parentNode;
                }for (var b = a.offsetTop; a.offsetParent;) {
                    a = a.offsetParent, b += a.offsetTop;
                }return b;
            } }, { key: "isVisible", value: function value(a) {
                var b = a.getAttribute("data-wow-offset") || this.config.offset,
                    c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                    d = c + Math.min(this.element.clientHeight, k()) - b,
                    e = this.offsetTop(a),
                    f = e + a.clientHeight;return d >= e && f >= c;
            } }, { key: "disabled", value: function value() {
                return !this.config.mobile && f(navigator.userAgent);
            } }]), a;
    }();b["default"] = r, a.exports = b["default"];
});
/*
 jQuery animateNumber plugin v0.0.14
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function (d) {
    var r = function r(b) {
        return b.split("").reverse().join("");
    },
        m = { numberStep: function numberStep(b, a) {
            var e = Math.floor(b);d(a.elem).text(e);
        } },
        g = function g(b) {
        var a = b.elem;a.nodeType && a.parentNode && (a = a._animateNumberSetter, a || (a = m.numberStep), a(b.now, b));
    };d.Tween && d.Tween.propHooks ? d.Tween.propHooks.number = { set: g } : d.fx.step.number = g;d.animateNumber = { numberStepFactories: { append: function append(b) {
                return function (a, e) {
                    var f = Math.floor(a);d(e.elem).prop("number", a).text(f + b);
                };
            }, separator: function separator(b, a, e) {
                b = b || " ";
                a = a || 3;e = e || "";return function (f, k) {
                    var u = 0 > f,
                        c = Math.floor((u ? -1 : 1) * f).toString(),
                        n = d(k.elem);if (c.length > a) {
                        for (var h = c, l = a, m = h.split("").reverse(), c = [], p, s, q, t = 0, g = Math.ceil(h.length / l); t < g; t++) {
                            p = "";for (q = 0; q < l; q++) {
                                s = t * l + q;if (s === h.length) break;p += m[s];
                            }c.push(p);
                        }h = c.length - 1;l = r(c[h]);c[h] = r(parseInt(l, 10).toString());c = c.join(b);c = r(c);
                    }n.prop("number", f).text((u ? "-" : "") + c + e);
                };
            } } };d.fn.animateNumber = function () {
        for (var b = arguments[0], a = d.extend({}, m, b), e = d(this), f = [a], k = 1, g = arguments.length; k < g; k++) {
            f.push(arguments[k]);
        }if (b.numberStep) {
            var c = this.each(function () {
                this._animateNumberSetter = b.numberStep;
            }),
                n = a.complete;a.complete = function () {
                c.each(function () {
                    delete this._animateNumberSetter;
                });n && n.apply(this, arguments);
            };
        }return e.animate.apply(e, f);
    };
})(jQuery);

$(document).ready(function () {
    "use strict";
    /* === Footer Instagram === */

    (function () {
        $('#footer-instagram').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 8,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
        });
    })();
    /* === menu drop-down === */
    (function () {
        $('#food-feature-carousel').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            prevArrow: '<i class="fa fa-angle-left left"></i>',
            nextArrow: '<i class="fa fa-angle-right right"></i> ',
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    })();
    (function () {
        $('.related-post-carousel-items').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            autoPlay: true,
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    })();
    (function () {
        $('.archi-feature-category').slick({
            centerMode: true,
            slidesToShow: 3,
            centerPadding: '60px',
            prevArrow: '<i class="fa fa-angle-left left"></i>',
            nextArrow: '<i class="fa fa-angle-right right"></i> ',
            responsive: [{
                breakpoint: 800,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    })();
    (function () {
        $('.popular-post-slider').slick({
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 2,
            dots: true,
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }]
        });
    })();
    /* === Search === */
    (function () {
        $('.top-search a').click(function (e) {
            e.preventDefault();
            //when the notification icon is clicked open the menu
            $(this).toggleClass('active');
            $('.show-search').fadeToggle(function () {
                //then bind the close event to html so it closes when you mouse off it.
                $('html').bind('click', function () {
                    $('.show-search').fadeOut(function () {
                        //once html has been clicked and the menu has closed, unbind the html click so nothing else has to lag up
                        $('html').unbind('click');
                    });
                    $('.top-search a').removeClass('active');
                });
                $('.show-search').bind('click', function (e) {
                    e.stopPropagation();
                });
            });
        });
    })();
    (function () {
        if (screen.width > 768) {
            var $dropdown = $(".nav .dropdown");
            $dropdown.mousemove(function () {
                $(this).addClass("open");
            });
            $dropdown.mouseleave(function () {
                $dropdown.removeClass("open");
            });
        }
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
            // Avoid following the href location when clicking
            event.preventDefault();
            // Avoid having the menu to close when clicking
            event.stopPropagation();
            // Re-add .open to parent sub-menu item
            $(this).parent().addClass('open');
            $(this).parent().find("ul").parent().find("li.dropdown").toggle('open');
            /* $(this).parent().find("ul").parent().find("li.dropdown").removeClass('open');*/
        });
    })();
    //scroll top

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
        $('.scroll-up a').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    })();
}());

var $isotope = null;

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return false;
}

function sortList(select) {

    if ($isotope !== null) {

        if (select.value === "alpha-asc") {

            $isotope.isotope({
                sortBy: 'name',
                sortAscending: true
            });
        } else if (select.value === "alpha-desc") {

            $isotope.isotope({
                sortBy: 'name',
                sortAscending: false
            });
        } else if (select.value === "created-asc") {

            $isotope.isotope({
                sortBy: 'original-order',
                sortAscending: false
            });
        } else if (select.value === "created-desc") {

            $isotope.isotope({
                sortBy: 'original-order',
                sortAscending: true
            });
        }
    }
}

function filterCategory(button, category) {

    if ($isotope !== null) {

        var category_buttons = document.querySelectorAll(".category-button");

        Array.prototype.forEach.call(category_buttons, function (item) {

            classie.remove(item, "btn-primary");

            if (!classie.has(item, "btn-default")) {

                classie.add(item, "btn-default");
            }
        });

        classie.remove(button, "btn-default");
        classie.add(button, "btn-primary");

        $isotope.isotope({ filter: category === "*" ? "*" : '.' + category });
    } else throw "Isotope not set.";
}

function handleIsotope() {

    var isotope = document.querySelectorAll(".isotope");

    Array.prototype.forEach.call(isotope, function (item) {

        $isotope = jQuery(item).isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'fitRows',
            getSortData: {
                name: '.name'
            }
        });
    });
}

function handleMasonry() {

    var masonry_exists = document.querySelectorAll(".masonry-grid").length;

    if (masonry_exists > 0) {

        return new Masonry('.masonry-grid', {
            itemSelector: '.masonry-item'
        });
    } else return false;
}

function showElement(element) {

    setTimeout(function () {

        jQuery(element).removeClass("opacity-0");
    }, 150);
}

function handleSlickSlides() {

    var slider_section = document.querySelectorAll("section.main-slider");

    if (slider_section !== null && typeof slider_section !== "undefined") {

        Array.prototype.forEach.call(slider_section, function (section) {

            var slider = section.querySelector(".slick-slider");
            var navigation = section.querySelector(".slick-navigation");

            jQuery(slider).on('init', showElement(section));
            jQuery(slider).on('reInit', showElement(section));

            jQuery(slider).slick({
                autoplay: true,
                dots: true,
                fade: true,
                cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
                swipeToSlide: true,
                arrows: true,
                appendArrows: navigation,
                appendDots: navigation,
                nextArrow: "<button type=\"button\" class=\"slick-next\">></button>",
                prevArrow: "<button type=\"button\" class=\"slick-prev\"><</button>"

            });
        });
    }

    slider_section = document.querySelector("section.members-slider");

    if (slider_section !== null && typeof slider_section !== "undefined") {

        var slider = slider_section.querySelector(".slick-slider");
        var navigation = slider_section.querySelector(".slick-navigation");

        jQuery(slider).on('init', showElement(slider_section));
        jQuery(slider).on('reInit', showElement(slider_section));

        jQuery(slider).slick({
            autoplay: true,
            dots: true,
            swipeToSlide: true,
            arrows: true,
            appendArrows: navigation,
            appendDots: navigation,
            nextArrow: "<button type=\"button\" class=\"slick-next\">></button>",
            prevArrow: "<button type=\"button\" class=\"slick-prev\"><</button>",
            rows: 2,
            slidesPerRow: 6,
            responsive: [{
                breakpoint: 768,
                settings: {
                    rows: 2,
                    slidesPerRow: 3
                }
            }, {
                breakpoint: 992,
                settings: {
                    rows: 2,
                    slidesPerRow: 4
                }
            }, {
                breakpoint: 576,
                settings: {
                    rows: 2,
                    slidesPerRow: 2
                }
            }]

        });
    }
}

function handleWOWAnimations() {

    new WOW().init();
}

function handleSmoothScroll() {

    new SmoothScroll('a[href*="#"]');
}

function closeModal(modalId, disable, daysDisabled) {

    if (disable !== null && typeof disable !== "undefined" && disable) {

        setCookie("dm_" + modalId, 1, daysDisabled);
    }

    var modal = document.querySelector("#" + modalId);

    if (modal === null || typeof modal === "undefined") {

        throw "#" + modalId + " does not exist.";
    }

    modal.style.display = "none";
}

function showModal(modalId) {
    var forced = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    var modal = document.querySelector("#" + modalId);

    if (modal === null || typeof modal === "undefined") {

        throw "#" + modalId + " does not exist.";
    }

    if (!getCookie("dm_" + modalId) || forced) {

        modal.style.display = "block";
    }
}

function confirmCookies() {

    closeModal("cookieConsentModal", true, 365);

    setCookie("c_enabled", 1, 365);

    dataLayer.push({
        'event': 'cookies_set'
    });

    if (!window.location.href.includes("prijava-na-e-novice")) {

        setTimeout(function () {

            showModal("newsletterModal");
        }, 7000);
    }
}

function formatMoney(amount) {
    var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
    var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ",";

    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        var negativeSign = amount < 0 ? "-" : "";

        var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        var j = i.length > 3 ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e);
    }
}

function animateCount() {

    var count_animations = document.querySelectorAll(".animate-count");
    var numbers = document.querySelector(".numbers");

    var hT = jQuery(numbers).offset().top,
        hH = jQuery(numbers).outerHeight(),
        wH = jQuery(window).height(),
        wS = jQuery(this).scrollTop();
    if (wS > hT + hH - wH) {

        window.removeEventListener("scroll", animateCount);

        Array.prototype.forEach.call(count_animations, function (node) {

            var value = node.innerText;
            value = value.split('.').join("");
            value = value.replace("€", "");
            value = value.trim();

            jQuery(node).animateNumber({
                number: value,
                numberStep: function numberStep(now, tween) {
                    var floored_number = Math.floor(now),
                        target = jQuery(tween.elem);

                    target.text(formatMoney(floored_number, 0, ",", ".") + (classie.has(node, "add-euro") ? ' €' : ""));
                }
            }, 2000);
        });
    }
}

jQuery(document).ready(function () {

    try {

        handleSlickSlides();
    } catch (e) {

        console.log("handleSlickSlides", e);
    }

    try {

        handleMasonry();
    } catch (e) {

        console.log("handleMasonry", e);
    }

    try {

        handleWOWAnimations();
    } catch (e) {

        console.log("handleWOWAnimations", e);
    }

    try {

        handleIsotope();
    } catch (e) {

        console.log("handleIsotope", e);
    }

    try {

        if (!getCookie("c_enabled") && !window.location.href.includes("legal/pogoji-uporabe")) {

            showModal("cookieConsentModal", true);
        } else if (getCookie("c_enabled")) {

            confirmCookies();
        }
    } catch (e) {

        console.log("handleCookies", e);
    }

    try {

        handleSmoothScroll();
    } catch (e) {

        console.log("handleSmoothScroll", e);
    }

    try {

        var count_animations = document.querySelectorAll(".animate-count");

        if (count_animations.length > 0) {

            window.addEventListener("scroll", animateCount);
        }
    } catch (e) {

        console.log("animateCount", e);
    }
});
