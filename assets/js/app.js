/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 687:
/***/ (function(module) {

/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7
 */
!function (e, t) {
  if (true) module.exports = t();else { var a, i; }
}(self, function () {
  return function () {
    "use strict";

    var e = {
      8741: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
        t.default = i;
      },
      3976: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a,
            n = (a = i(5581)) && a.__esModule ? a : {
          default: a
        };
        var r = {
          _maxTestPos: 500,
          placeholder: "_",
          optionalmarker: ["[", "]"],
          quantifiermarker: ["{", "}"],
          groupmarker: ["(", ")"],
          alternatormarker: "|",
          escapeChar: "\\",
          mask: null,
          regex: null,
          oncomplete: function () {},
          onincomplete: function () {},
          oncleared: function () {},
          repeat: 0,
          greedy: !1,
          autoUnmask: !1,
          removeMaskOnSubmit: !1,
          clearMaskOnLostFocus: !0,
          insertMode: !0,
          insertModeVisual: !0,
          clearIncomplete: !1,
          alias: null,
          onKeyDown: function () {},
          onBeforeMask: null,
          onBeforePaste: function (e, t) {
            return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
          },
          onBeforeWrite: null,
          onUnMask: null,
          showMaskOnFocus: !0,
          showMaskOnHover: !0,
          onKeyValidation: function () {},
          skipOptionalPartCharacter: " ",
          numericInput: !1,
          rightAlign: !1,
          undoOnEscape: !0,
          radixPoint: "",
          _radixDance: !1,
          groupSeparator: "",
          keepStatic: null,
          positionCaretOnTab: !0,
          tabThrough: !1,
          supportsInputType: ["text", "tel", "url", "password", "search"],
          ignorables: [n.default.BACKSPACE, n.default.TAB, n.default["PAUSE/BREAK"], n.default.ESCAPE, n.default.PAGE_UP, n.default.PAGE_DOWN, n.default.END, n.default.HOME, n.default.LEFT, n.default.UP, n.default.RIGHT, n.default.DOWN, n.default.INSERT, n.default.DELETE, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
          isComplete: null,
          preValidation: null,
          postValidation: null,
          staticDefinitionSymbol: void 0,
          jitMasking: !1,
          nullable: !0,
          inputEventOnly: !1,
          noValuePatching: !1,
          positionCaretOnClick: "lvp",
          casing: null,
          inputmode: "text",
          importDataAttributes: !0,
          shiftPositions: !0,
          usePrototypeDefinitions: !0,
          validationEventTimeOut: 3e3,
          substitutes: {}
        };
        t.default = r;
      },
      7392: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        t.default = {
          9: {
            validator: "[0-9\uff10-\uff19]",
            definitionSymbol: "*"
          },
          a: {
            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            definitionSymbol: "*"
          },
          "*": {
            validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
          }
        };
      },
      253: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function (e, t, i) {
          if (void 0 === i) return e.__data ? e.__data[t] : null;
          e.__data = e.__data || {}, e.__data[t] = i;
        };
      },
      3776: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Event = void 0, t.off = function (e, t) {
          var i, a;

          function n(e, t, n) {
            if (e in i == !0) if (a.removeEventListener ? a.removeEventListener(e, n, !1) : a.detachEvent && a.detachEvent("on" + e, n), "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(n), 1);else i[e][t].splice(i[e][t].indexOf(n), 1);
          }

          function r(e, a) {
            var n,
                r,
                o = [];
            if (e.length > 0) {
              if (void 0 === t) for (n = 0, r = i[e][a].length; n < r; n++) o.push({
                ev: e,
                namespace: a && a.length > 0 ? a : "global",
                handler: i[e][a][n]
              });else o.push({
                ev: e,
                namespace: a && a.length > 0 ? a : "global",
                handler: t
              });
            } else if (a.length > 0) for (var l in i) for (var s in i[l]) if (s === a) if (void 0 === t) for (n = 0, r = i[l][s].length; n < r; n++) o.push({
              ev: l,
              namespace: s,
              handler: i[l][s][n]
            });else o.push({
              ev: l,
              namespace: s,
              handler: t
            });
            return o;
          }

          if (u(this[0]) && e) {
            i = this[0].eventRegistry, a = this[0];

            for (var o = e.split(" "), l = 0; l < o.length; l++) for (var s = o[l].split("."), c = r(s[0], s[1]), f = 0, d = c.length; f < d; f++) n(c[f].ev, c[f].namespace, c[f].handler);
          }

          return this;
        }, t.on = function (e, t) {
          function i(e, i) {
            n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on" + e, t), a[e] = a[e] || {}, a[e][i] = a[e][i] || [], a[e][i].push(t);
          }

          if (u(this[0])) for (var a = this[0].eventRegistry, n = this[0], r = e.split(" "), o = 0; o < r.length; o++) {
            var l = r[o].split("."),
                s = l[0],
                c = l[1] || "global";
            i(s, c);
          }
          return this;
        }, t.trigger = function (e) {
          if (u(this[0])) for (var t = this[0].eventRegistry, i = this[0], a = "string" == typeof e ? e.split(" ") : [e.type], r = 0; r < a.length; r++) {
            var l = a[r].split("."),
                s = l[0],
                c = l[1] || "global";

            if (void 0 !== document && "global" === c) {
              var f,
                  d,
                  p = {
                bubbles: !0,
                cancelable: !0,
                detail: arguments[1]
              };

              if (document.createEvent) {
                try {
                  if ("input" === s) p.inputType = "insertText", f = new InputEvent(s, p);else f = new CustomEvent(s, p);
                } catch (e) {
                  (f = document.createEvent("CustomEvent")).initCustomEvent(s, p.bubbles, p.cancelable, p.detail);
                }

                e.type && (0, n.default)(f, e), i.dispatchEvent(f);
              } else (f = document.createEventObject()).eventType = s, f.detail = arguments[1], e.type && (0, n.default)(f, e), i.fireEvent("on" + f.eventType, f);
            } else if (void 0 !== t[s]) if (arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1), "global" === c) for (var h in t[s]) for (d = 0; d < t[s][h].length; d++) t[s][h][d].apply(i, arguments);else for (d = 0; d < t[s][c].length; d++) t[s][c][d].apply(i, arguments);
          }
          return this;
        };
        var a,
            n = s(i(600)),
            r = s(i(9380)),
            o = s(i(4963)),
            l = s(i(8741));

        function s(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        function u(e) {
          return e instanceof Element;
        }

        t.Event = a, "function" == typeof r.default.CustomEvent ? t.Event = a = r.default.CustomEvent : l.default && (t.Event = a = function (e, t) {
          t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
        }, a.prototype = r.default.Event.prototype);
      },
      600: function (e, t) {
        function i(e) {
          return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, i(e);
        }

        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function e() {
          var t,
              a,
              n,
              r,
              o,
              l,
              s = arguments[0] || {},
              u = 1,
              c = arguments.length,
              f = !1;
          "boolean" == typeof s && (f = s, s = arguments[u] || {}, u++);
          "object" !== i(s) && "function" != typeof s && (s = {});

          for (; u < c; u++) if (null != (t = arguments[u])) for (a in t) n = s[a], r = t[a], s !== r && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, l = n && Array.isArray(n) ? n : []) : l = n && "[object Object]" === Object.prototype.toString.call(n) ? n : {}, s[a] = e(f, l, r)) : void 0 !== r && (s[a] = r));

          return s;
        };
      },
      4963: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = l(i(600)),
            n = l(i(9380)),
            r = l(i(253)),
            o = i(3776);

        function l(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var s = n.default.document;

        function u(e) {
          return e instanceof u ? e : this instanceof u ? void (null != e && e !== n.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new u(e);
        }

        u.prototype = {
          on: o.on,
          off: o.off,
          trigger: o.trigger
        }, u.extend = a.default, u.data = r.default, u.Event = o.Event;
        var c = u;
        t.default = c;
      },
      9845: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.ua = t.mobile = t.iphone = t.iemobile = t.ie = void 0;
        var a,
            n = (a = i(9380)) && a.__esModule ? a : {
          default: a
        };
        var r = n.default.navigator && n.default.navigator.userAgent || "",
            o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0,
            l = ("ontouchstart" in n.default),
            s = /iemobile/i.test(r),
            u = /iphone/i.test(r) && !s;
        t.iphone = u, t.iemobile = s, t.mobile = l, t.ie = o, t.ua = r;
      },
      7184: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function (e) {
          return e.replace(i, "\\$1");
        };
        var i = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
      },
      6030: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.EventHandlers = void 0;
        var a,
            n = i(8711),
            r = (a = i(5581)) && a.__esModule ? a : {
          default: a
        },
            o = i(9845),
            l = i(7215),
            s = i(7760),
            u = i(4713);

        function c(e, t) {
          var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];

          if (!i) {
            if (Array.isArray(e) || (i = function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return f(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === i && e.constructor && (i = e.constructor.name);
              if ("Map" === i || "Set" === i) return Array.from(e);
              if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return f(e, t);
            }(e)) || t && e && "number" == typeof e.length) {
              i && (e = i);

              var a = 0,
                  n = function () {};

              return {
                s: n,
                n: function () {
                  return a >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[a++]
                  };
                },
                e: function (e) {
                  throw e;
                },
                f: n
              };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          var r,
              o = !0,
              l = !1;
          return {
            s: function () {
              i = i.call(e);
            },
            n: function () {
              var e = i.next();
              return o = e.done, e;
            },
            e: function (e) {
              l = !0, r = e;
            },
            f: function () {
              try {
                o || null == i.return || i.return();
              } finally {
                if (l) throw r;
              }
            }
          };
        }

        function f(e, t) {
          (null == t || t > e.length) && (t = e.length);

          for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];

          return a;
        }

        var d = {
          keydownEvent: function (e) {
            var t = this.inputmask,
                i = t.opts,
                a = t.dependencyLib,
                c = t.maskset,
                f = this,
                d = a(f),
                p = e.keyCode,
                h = n.caret.call(t, f),
                v = i.onKeyDown.call(this, e, n.getBuffer.call(t), h, i);
            if (void 0 !== v) return v;
            if (p === r.default.BACKSPACE || p === r.default.DELETE || o.iphone && p === r.default.BACKSPACE_SAFARI || e.ctrlKey && p === r.default.X && !("oncut" in f)) e.preventDefault(), l.handleRemove.call(t, f, p, h), (0, s.writeBuffer)(f, n.getBuffer.call(t, !0), c.p, e, f.inputmask._valueGet() !== n.getBuffer.call(t).join(""));else if (p === r.default.END || p === r.default.PAGE_DOWN) {
              e.preventDefault();
              var m = n.seekNext.call(t, n.getLastValidPosition.call(t));
              n.caret.call(t, f, e.shiftKey ? h.begin : m, m, !0);
            } else p === r.default.HOME && !e.shiftKey || p === r.default.PAGE_UP ? (e.preventDefault(), n.caret.call(t, f, 0, e.shiftKey ? h.begin : 0, !0)) : i.undoOnEscape && p === r.default.ESCAPE && !0 !== e.altKey ? ((0, s.checkVal)(f, !0, !1, t.undoValue.split("")), d.trigger("click")) : p !== r.default.INSERT || e.shiftKey || e.ctrlKey || void 0 !== t.userOptions.insertMode ? !0 === i.tabThrough && p === r.default.TAB ? !0 === e.shiftKey ? (h.end = n.seekPrevious.call(t, h.end, !0), !0 === u.getTest.call(t, h.end - 1).match.static && h.end--, h.begin = n.seekPrevious.call(t, h.end, !0), h.begin >= 0 && h.end > 0 && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : (h.begin = n.seekNext.call(t, h.begin, !0), h.end = n.seekNext.call(t, h.begin, !0), h.end < c.maskLength && h.end--, h.begin <= c.maskLength && (e.preventDefault(), n.caret.call(t, f, h.begin, h.end))) : e.shiftKey || i.insertModeVisual && !1 === i.insertMode && (p === r.default.RIGHT ? setTimeout(function () {
              var e = n.caret.call(t, f);
              n.caret.call(t, f, e.begin);
            }, 0) : p === r.default.LEFT && setTimeout(function () {
              var e = n.translatePosition.call(t, f.inputmask.caretPos.begin);
              n.translatePosition.call(t, f.inputmask.caretPos.end);
              t.isRTL ? n.caret.call(t, f, e + (e === c.maskLength ? 0 : 1)) : n.caret.call(t, f, e - (0 === e ? 0 : 1));
            }, 0)) : l.isSelection.call(t, h) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, n.caret.call(t, f, h.begin, h.begin));
            t.ignorable = i.ignorables.includes(p);
          },
          keypressEvent: function (e, t, i, a, o) {
            var u = this.inputmask || this,
                c = u.opts,
                f = u.dependencyLib,
                d = u.maskset,
                p = u.el,
                h = f(p),
                v = e.keyCode;
            if (!(!0 === t || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || u.ignorable)) return v === r.default.ENTER && u.undoValue !== u._valueGet(!0) && (u.undoValue = u._valueGet(!0), setTimeout(function () {
              h.trigger("change");
            }, 0)), u.skipInputEvent = !0, !0;

            if (v) {
              44 !== v && 46 !== v || 3 !== e.location || "" === c.radixPoint || (v = c.radixPoint.charCodeAt(0));
              var m,
                  g = t ? {
                begin: o,
                end: o
              } : n.caret.call(u, p),
                  k = String.fromCharCode(v);
              k = c.substitutes[k] || k, d.writeOutBuffer = !0;
              var y = l.isValid.call(u, g, k, a, void 0, void 0, void 0, t);

              if (!1 !== y && (n.resetMaskSet.call(u, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(u, y.pos.begin ? y.pos.begin : y.pos), d.p = m), m = c.numericInput && void 0 === y.caret ? n.seekPrevious.call(u, m) : m, !1 !== i && (setTimeout(function () {
                c.onKeyValidation.call(p, v, y);
              }, 0), d.writeOutBuffer && !1 !== y)) {
                var b = n.getBuffer.call(u);
                (0, s.writeBuffer)(p, b, m, e, !0 !== t);
              }

              if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
            }
          },
          keyupEvent: function (e) {
            var t = this.inputmask;
            !t.isComposing || e.keyCode !== r.default.KEY_229 && e.keyCode !== r.default.ENTER || t.$el.trigger("input");
          },
          pasteEvent: function (e) {
            var t,
                i = this.inputmask,
                a = i.opts,
                r = i._valueGet(!0),
                o = n.caret.call(i, this);

            i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
            var l = r.substr(0, o.begin),
                u = r.substr(o.end, r.length);
            if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u;else {
              if (!e.clipboardData || !e.clipboardData.getData) return !0;
              r = l + e.clipboardData.getData("text/plain") + u;
            }
            var f = r;

            if (i.isRTL) {
              f = f.split("");
              var d,
                  p = c(n.getBufferTemplate.call(i));

              try {
                for (p.s(); !(d = p.n()).done;) {
                  var h = d.value;
                  f[0] === h && f.shift();
                }
              } catch (e) {
                p.e(e);
              } finally {
                p.f();
              }

              f = f.join("");
            }

            if ("function" == typeof a.onBeforePaste) {
              if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
              f || (f = r);
            }

            (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
          },
          inputFallBackEvent: function (e) {
            var t = this.inputmask,
                i = t.opts,
                a = t.dependencyLib;

            var l = this,
                c = l.inputmask._valueGet(!0),
                f = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""),
                p = n.caret.call(t, l, void 0, void 0, !0);

            if (f !== c) {
              c = function (e, i, a) {
                if (o.iemobile) {
                  var r = i.replace(n.getBuffer.call(t).join(""), "");

                  if (1 === r.length) {
                    var l = i.split("");
                    l.splice(a.begin, 0, r), i = l.join("");
                  }
                }

                return i;
              }(0, c, p);

              var h = function (e, a, r) {
                for (var o, l, s, c = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = c.length >= d.length ? c.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], k = "~"; c.length < h;) c.push(k);

                for (; d.length < h;) d.push(k);

                for (; f.length < v;) f.unshift(k);

                for (; p.length < v;) p.unshift(k);

                var y = c.concat(f),
                    b = d.concat(p);

                for (l = 0, o = y.length; l < o; l++) switch (s = u.getPlaceholder.call(t, n.translatePosition.call(t, l)), m) {
                  case "insertText":
                    b[l - 1] === y[l] && r.begin == y.length - 1 && g.push(y[l]), l = o;
                    break;

                  case "insertReplacementText":
                  case "deleteContentBackward":
                    y[l] === k ? r.end++ : l = o;
                    break;

                  default:
                    y[l] !== b[l] && (y[l + 1] !== k && y[l + 1] !== s && void 0 !== y[l + 1] || (b[l] !== s || b[l + 1] !== k) && b[l] !== k ? b[l + 1] === k && b[l] === y[l + 1] ? (m = "insertText", g.push(y[l]), r.begin--, r.end--) : y[l] !== s && y[l] !== k && (y[l + 1] === k || b[l] !== y[l] && b[l + 1] === y[l + 1]) ? (m = "insertReplacementText", g.push(y[l]), r.begin--) : y[l] === k ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, l), !0) || b[l] === i.radixPoint) && r.end++) : l = o : (m = "insertText", g.push(y[l]), r.begin--, r.end--));
                }

                return {
                  action: m,
                  data: g,
                  caret: r
                };
              }(c, f, p);

              switch ((l.inputmask.shadowRoot || l.ownerDocument).activeElement !== l && l.focus(), (0, s.writeBuffer)(l, n.getBuffer.call(t)), n.caret.call(t, l, p.begin, p.end, !0), h.action) {
                case "insertText":
                case "insertReplacementText":
                  h.data.forEach(function (e, i) {
                    var n = new a.Event("keypress");
                    n.keyCode = e.charCodeAt(0), t.ignorable = !1, d.keypressEvent.call(l, n);
                  }), setTimeout(function () {
                    t.$el.trigger("keyup");
                  }, 0);
                  break;

                case "deleteContentBackward":
                  var v = new a.Event("keydown");
                  v.keyCode = r.default.BACKSPACE, d.keydownEvent.call(l, v);
                  break;

                default:
                  (0, s.applyInputValue)(l, c);
              }

              e.preventDefault();
            }
          },
          compositionendEvent: function (e) {
            var t = this.inputmask;
            t.isComposing = !1, t.$el.trigger("input");
          },
          setValueEvent: function (e) {
            var t = this.inputmask,
                i = this,
                a = e && e.detail ? e.detail[0] : arguments[1];
            void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
          },
          focusEvent: function (e) {
            var t = this.inputmask,
                i = t.opts,
                a = this,
                r = a.inputmask._valueGet();

            i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || l.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || d.clickEvent.apply(a, [e, !0]), t.undoValue = t._valueGet(!0);
          },
          invalidEvent: function (e) {
            this.inputmask.validationEvent = !0;
          },
          mouseleaveEvent: function () {
            var e = this.inputmask,
                t = e.opts,
                i = this;
            e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, s.HandleNativePlaceholder)(i, e.originalPlaceholder);
          },
          clickEvent: function (e, t) {
            var i = this.inputmask,
                a = this;

            if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
              var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
              void 0 !== r && n.caret.call(i, a, r);
            }
          },
          cutEvent: function (e) {
            var t = this.inputmask,
                i = t.maskset,
                a = this,
                o = n.caret.call(t, a),
                u = t.isRTL ? n.getBuffer.call(t).slice(o.end, o.begin) : n.getBuffer.call(t).slice(o.begin, o.end),
                c = t.isRTL ? u.reverse().join("") : u.join("");
            window.navigator.clipboard ? window.navigator.clipboard.writeText(c) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", c), l.handleRemove.call(t, a, r.default.DELETE, o), (0, s.writeBuffer)(a, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
          },
          blurEvent: function (e) {
            var t = this.inputmask,
                i = t.opts,
                a = (0, t.dependencyLib)(this),
                r = this;

            if (r.inputmask) {
              (0, s.HandleNativePlaceholder)(r, t.originalPlaceholder);

              var o = r.inputmask._valueGet(),
                  u = n.getBuffer.call(t).slice();

              "" !== o && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && o === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), !1 === l.isComplete.call(t, u) && (setTimeout(function () {
                a.trigger("incomplete");
              }, 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), (0, s.writeBuffer)(r, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), a.trigger("change"));
            }
          },
          mouseenterEvent: function () {
            var e = this.inputmask,
                t = e.opts,
                i = this;

            if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
              var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
              e.placeholder !== a && i.placeholder !== e.originalPlaceholder && (e.originalPlaceholder = i.placeholder), t.showMaskOnHover && (0, s.HandleNativePlaceholder)(i, a);
            }
          },
          submitEvent: function () {
            var e = this.inputmask,
                t = e.opts;
            e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), t.clearIncomplete && !1 === l.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout(function () {
              (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
            }, 0));
          },
          resetEvent: function () {
            var e = this.inputmask;
            e.refreshValue = !0, setTimeout(function () {
              (0, s.applyInputValue)(e.el, e._valueGet(!0));
            }, 0);
          }
        };
        t.EventHandlers = d;
      },
      9716: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.EventRuler = void 0;
        var a = l(i(2394)),
            n = l(i(5581)),
            r = i(8711),
            o = i(7760);

        function l(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var s = {
          on: function (e, t, i) {
            var l = e.inputmask.dependencyLib,
                s = function (t) {
              t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
              var s,
                  u = this,
                  c = u.inputmask,
                  f = c ? c.opts : void 0;

              if (void 0 === c && "FORM" !== this.nodeName) {
                var d = l.data(u, "_inputmask_opts");
                l(u).off(), d && new a.default(d).mask(u);
              } else {
                if (["submit", "reset", "setvalue"].includes(t.type) || "FORM" === this.nodeName || !(u.disabled || u.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === n.default.TAB))) {
                  switch (t.type) {
                    case "input":
                      if (!0 === c.skipInputEvent || t.inputType && "insertCompositionText" === t.inputType) return c.skipInputEvent = !1, t.preventDefault();
                      break;

                    case "keydown":
                      c.skipKeyPressEvent = !1, c.skipInputEvent = c.isComposing = t.keyCode === n.default.KEY_229;
                      break;

                    case "keyup":
                    case "compositionend":
                      c.isComposing && (c.skipInputEvent = !1);
                      break;

                    case "keypress":
                      if (!0 === c.skipKeyPressEvent) return t.preventDefault();
                      c.skipKeyPressEvent = !0;
                      break;

                    case "click":
                    case "focus":
                      return c.validationEvent ? (c.validationEvent = !1, e.blur(), (0, o.HandleNativePlaceholder)(e, (c.isRTL ? r.getBufferTemplate.call(c).slice().reverse() : r.getBufferTemplate.call(c)).join("")), setTimeout(function () {
                        e.focus();
                      }, f.validationEventTimeOut), !1) : (s = arguments, setTimeout(function () {
                        e.inputmask && i.apply(u, s);
                      }, 0), !1);
                  }

                  var p = i.apply(u, arguments);
                  return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                }

                t.preventDefault();
              }
            };

            ["submit", "reset"].includes(t) ? (s = s.bind(e), null !== e.form && l(e.form).on(t, s)) : l(e).on(t, s), e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
          },
          off: function (e, t) {
            if (e.inputmask && e.inputmask.events) {
              var i = e.inputmask.dependencyLib,
                  a = e.inputmask.events;

              for (var n in t && ((a = [])[t] = e.inputmask.events[t]), a) {
                for (var r = a[n]; r.length > 0;) {
                  var o = r.pop();
                  ["submit", "reset"].includes(n) ? null !== e.form && i(e.form).off(n, o) : i(e).off(n, o);
                }

                delete e.inputmask.events[n];
              }
            }
          }
        };
        t.EventRuler = s;
      },
      219: function (e, t, i) {
        var a = d(i(2394)),
            n = d(i(5581)),
            r = d(i(7184)),
            o = i(8711),
            l = i(4713);

        function s(e) {
          return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, s(e);
        }

        function u(e, t) {
          return function (e) {
            if (Array.isArray(e)) return e;
          }(e) || function (e, t) {
            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == i) return;
            var a,
                n,
                r = [],
                o = !0,
                l = !1;

            try {
              for (i = i.call(e); !(o = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
            } catch (e) {
              l = !0, n = e;
            } finally {
              try {
                o || null == i.return || i.return();
              } finally {
                if (l) throw n;
              }
            }

            return r;
          }(e, t) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return c(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(e);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
          }(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }

        function c(e, t) {
          (null == t || t > e.length) && (t = e.length);

          for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];

          return a;
        }

        function f(e, t) {
          for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        function d(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var p = a.default.dependencyLib,
            h = function () {
          function e(t, i, a) {
            !function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }(this, e), this.mask = t, this.format = i, this.opts = a, this._date = new Date(1, 0, 1), this.initDateObject(t, this.opts);
          }

          var t, i, a;
          return t = e, (i = [{
            key: "date",
            get: function () {
              return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), this._date;
            }
          }, {
            key: "initDateObject",
            value: function (e, t) {
              var i;

              for (P(t).lastIndex = 0; i = P(t).exec(this.format);) {
                var a = new RegExp("\\d+$").exec(i[0]),
                    n = a ? i[0][0] + "x" : i[0],
                    r = void 0;

                if (void 0 !== e) {
                  if (a) {
                    var o = P(t).lastIndex,
                        l = O(i.index, t);
                    P(t).lastIndex = o, r = e.slice(0, e.indexOf(l.nextMatch[0]));
                  } else r = e.slice(0, n.length);

                  e = e.slice(r.length);
                }

                Object.prototype.hasOwnProperty.call(g, n) && this.setValue(this, r, n, g[n][2], g[n][1]);
              }
            }
          }, {
            key: "setValue",
            value: function (e, t, i, a, n) {
              if (void 0 !== t && (e[a] = "ampm" === a ? t : t.replace(/[^0-9]/g, "0"), e["raw" + a] = t.replace(/\s/g, "_")), void 0 !== n) {
                var r = e[a];
                ("day" === a && 29 === parseInt(r) || "month" === a && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), "day" === a && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === a && (m = !0), "year" === a && (m = !0, r.length < 4 && (r = _(r, 4, !0))), "" === r || isNaN(r) || n.call(e._date, r), "ampm" === a && n.call(e._date, r);
              }
            }
          }, {
            key: "reset",
            value: function () {
              this._date = new Date(1, 0, 1);
            }
          }, {
            key: "reInit",
            value: function () {
              this._date = void 0, this.date;
            }
          }]) && f(t.prototype, i), a && f(t, a), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e;
        }(),
            v = new Date().getFullYear(),
            m = !1,
            g = {
          d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
          dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function () {
            return _(Date.prototype.getDate.call(this), 2);
          }],
          ddd: [""],
          dddd: [""],
          m: ["[1-9]|1[012]", function (e) {
            var t = e ? parseInt(e) : 0;
            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
          }, "month", function () {
            return Date.prototype.getMonth.call(this) + 1;
          }],
          mm: ["0[1-9]|1[012]", function (e) {
            var t = e ? parseInt(e) : 0;
            return t > 0 && t--, Date.prototype.setMonth.call(this, t);
          }, "month", function () {
            return _(Date.prototype.getMonth.call(this) + 1, 2);
          }],
          mmm: [""],
          mmmm: [""],
          yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function () {
            return _(Date.prototype.getFullYear.call(this), 2);
          }],
          yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function () {
            return _(Date.prototype.getFullYear.call(this), 4);
          }],
          h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
          hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function () {
            return _(Date.prototype.getHours.call(this), 2);
          }],
          hx: [function (e) {
            return "[0-9]{".concat(e, "}");
          }, Date.prototype.setHours, "hours", function (e) {
            return Date.prototype.getHours;
          }],
          H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
          HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function () {
            return _(Date.prototype.getHours.call(this), 2);
          }],
          Hx: [function (e) {
            return "[0-9]{".concat(e, "}");
          }, Date.prototype.setHours, "hours", function (e) {
            return function () {
              return _(Date.prototype.getHours.call(this), e);
            };
          }],
          M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
          MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function () {
            return _(Date.prototype.getMinutes.call(this), 2);
          }],
          s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
          ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function () {
            return _(Date.prototype.getSeconds.call(this), 2);
          }],
          l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function () {
            return _(Date.prototype.getMilliseconds.call(this), 3);
          }],
          L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function () {
            return _(Date.prototype.getMilliseconds.call(this), 2);
          }],
          t: ["[ap]", y, "ampm", b, 1],
          tt: ["[ap]m", y, "ampm", b, 2],
          T: ["[AP]", y, "ampm", b, 1],
          TT: ["[AP]M", y, "ampm", b, 2],
          Z: [".*", void 0, "Z", function () {
            var e = this.toString().match(/\((.+)\)/)[1];
            e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map(function (e) {
              return u(e, 1)[0];
            }).join(""));
            return e;
          }],
          o: [""],
          S: [""]
        },
            k = {
          isoDate: "yyyy-mm-dd",
          isoTime: "HH:MM:ss",
          isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
          isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        };

        function y(e) {
          var t = this.getHours();
          e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
        }

        function b() {
          var e = this.getHours();
          return (e = e || 12) >= 12 ? "PM" : "AM";
        }

        function x(e) {
          var t = new RegExp("\\d+$").exec(e[0]);

          if (t && void 0 !== t[0]) {
            var i = g[e[0][0] + "x"].slice("");
            return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
          }

          if (g[e[0]]) return g[e[0]];
        }

        function P(e) {
          if (!e.tokenizer) {
            var t = [],
                i = [];

            for (var a in g) if (/\.*x$/.test(a)) {
              var n = a[0] + "\\d+";
              -1 === i.indexOf(n) && i.push(n);
            } else -1 === t.indexOf(a[0]) && t.push(a[0]);

            e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", e.tokenizer = new RegExp(e.tokenizer, "g");
          }

          return e.tokenizer;
        }

        function E(e, t, i) {
          if (!m) return !0;
          if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;

          if ("29" == e.day) {
            var a = O(t.pos, i);
            if ("yyyy" === a.targetMatch[0] && t.pos - a.targetMatchIndex == 2) return t.remove = t.pos + 1, t;
          } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", e.date.setDate(3), e.date.setMonth(1), t.insert = [{
            pos: t.pos,
            c: "0"
          }, {
            pos: t.pos + 1,
            c: t.c
          }], t.caret = o.seekNext.call(this, t.pos + 1), t;

          return !1;
        }

        function S(e, t, i, a) {
          var n,
              o,
              l = "";

          for (P(i).lastIndex = 0; n = P(i).exec(e);) {
            if (void 0 === t) {
              if (o = x(n)) l += "(" + o[0] + ")";else switch (n[0]) {
                case "[":
                  l += "(";
                  break;

                case "]":
                  l += ")?";
                  break;

                default:
                  l += (0, r.default)(n[0]);
              }
            } else if (o = x(n)) {
              if (!0 !== a && o[3]) l += o[3].call(t.date);else o[2] ? l += t["raw" + o[2]] : l += n[0];
            } else l += n[0];
          }

          return l;
        }

        function _(e, t, i) {
          for (e = String(e), t = t || 2; e.length < t;) e = i ? e + "0" : "0" + e;

          return e;
        }

        function w(e, t, i) {
          return "string" == typeof e ? new h(e, t, i) : e && "object" === s(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
        }

        function M(e, t) {
          return S(t.inputFormat, {
            date: e
          }, t);
        }

        function O(e, t) {
          var i,
              a,
              n = 0,
              r = 0;

          for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat);) {
            var o = new RegExp("\\d+$").exec(a[0]);

            if ((n += r = o ? parseInt(o[0]) : a[0].length) >= e + 1) {
              i = a, a = P(t).exec(t.inputFormat);
              break;
            }
          }

          return {
            targetMatchIndex: n - r,
            nextMatch: a,
            targetMatch: i
          };
        }

        a.default.extendAliases({
          datetime: {
            mask: function (e) {
              return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), e.regex = S(e.inputFormat, void 0, e), e.min = w(e.min, e.inputFormat, e), e.max = w(e.max, e.inputFormat, e), null;
            },
            placeholder: "",
            inputFormat: "isoDateTime",
            displayFormat: null,
            outputFormat: null,
            min: null,
            max: null,
            skipOptionalPartCharacter: "",
            i18n: {
              dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
              ordinalSuffix: ["st", "nd", "rd", "th"]
            },
            preValidation: function (e, t, i, a, n, r, o, l) {
              if (l) return !0;

              if (isNaN(i) && e[t] !== i) {
                var s = O(t, n);

                if (s.nextMatch && s.nextMatch[0] === i && s.targetMatch[0].length > 1) {
                  var u = g[s.targetMatch[0]][0];
                  if (new RegExp(u).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", {
                    fuzzy: !0,
                    buffer: e,
                    refreshFromBuffer: {
                      start: t - 1,
                      end: t + 1
                    },
                    pos: t + 1
                  };
                }
              }

              return !0;
            },
            postValidation: function (e, t, i, a, n, r, o, s) {
              var u, c;
              if (o) return !0;
              if (!1 === a && (((u = O(t + 1, n)).targetMatch && u.targetMatchIndex === t && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]] || (u = O(t + 2, n)).targetMatch && u.targetMatchIndex === t + 1 && u.targetMatch[0].length > 1 && void 0 !== g[u.targetMatch[0]]) && (c = g[u.targetMatch[0]][0]), void 0 !== c && (void 0 !== r.validPositions[t + 1] && new RegExp(c).test(i + "0") ? (e[t] = i, e[t + 1] = "0", a = {
                pos: t + 2,
                caret: t
              }) : new RegExp(c).test("0" + i) && (e[t] = "0", e[t + 1] = i, a = {
                pos: t + 2
              })), !1 === a)) return a;

              if (a.fuzzy && (e = a.buffer, t = a.pos), (u = O(t, n)).targetMatch && u.targetMatch[0] && void 0 !== g[u.targetMatch[0]]) {
                var f = g[u.targetMatch[0]];
                c = f[0];
                var d = e.slice(u.targetMatchIndex, u.targetMatchIndex + u.targetMatch[0].length);
                if (!1 === new RegExp(c).test(d.join("")) && 2 === u.targetMatch[0].length && r.validPositions[u.targetMatchIndex] && r.validPositions[u.targetMatchIndex + 1] && (r.validPositions[u.targetMatchIndex + 1].input = "0"), "year" == f[2]) for (var p = l.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], delete r.validPositions[h];
              }

              var m = a,
                  k = w(e.join(""), n.inputFormat, n);
              return m && k.date.getTime() == k.date.getTime() && (n.prefillYear && (m = function (e, t, i) {
                if (e.year !== e.rawyear) {
                  var a = v.toString(),
                      n = e.rawyear.replace(/[^0-9]/g, ""),
                      r = a.slice(0, n.length),
                      o = a.slice(n.length);

                  if (2 === n.length && n === r) {
                    var l = new Date(v, e.month - 1, e.day);
                    e.day == l.getDate() && (!i.max || i.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), e.year = a, t.insert = [{
                      pos: t.pos + 1,
                      c: o[0]
                    }, {
                      pos: t.pos + 2,
                      c: o[1]
                    }]);
                  }
                }

                return t;
              }(k, m, n)), m = function (e, t, i, a, n) {
                if (!t) return t;

                if (t && i.min && i.min.date.getTime() == i.min.date.getTime()) {
                  var r;

                  for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat);) {
                    var o;

                    if ((o = x(r)) && o[3]) {
                      for (var l = o[1], s = e[o[2]], u = i.min[o[2]], c = i.max ? i.max[o[2]] : u, f = [], d = !1, p = 0; p < u.length; p++) void 0 !== a.validPositions[p + r.index] || d ? (f[p] = s[p], d = d || s[p] > u[p]) : (f[p] = u[p], "year" === o[2] && s.length - 1 == p && u != c && (f = (parseInt(f.join("")) + 1).toString().split("")), "ampm" === o[2] && u != c && i.min.date.getTime() > e.date.getTime() && (f[p] = c[p]));

                      l.call(e._date, f.join(""));
                    }
                  }

                  t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                }

                return t && i.max && i.max.date.getTime() == i.max.date.getTime() && (t = i.max.date.getTime() >= e.date.getTime()), t;
              }(k, m = E.call(this, k, m, n), n, r)), void 0 !== t && m && a.pos !== t ? {
                buffer: S(n.inputFormat, k, n).split(""),
                refreshFromBuffer: {
                  start: t,
                  end: a.pos
                },
                pos: a.caret || a.pos
              } : m;
            },
            onKeyDown: function (e, t, i, a) {
              e.ctrlKey && e.keyCode === n.default.RIGHT && (this.inputmask._valueSet(M(new Date(), a)), p(this).trigger("setvalue"));
            },
            onUnMask: function (e, t, i) {
              return t ? S(i.outputFormat, w(e, i.inputFormat, i), i, !0) : t;
            },
            casing: function (e, t, i, a) {
              return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
            },
            onBeforeMask: function (e, t) {
              return "[object Date]" === Object.prototype.toString.call(e) && (e = M(e, t)), e;
            },
            insertMode: !1,
            shiftPositions: !1,
            keepStatic: !1,
            inputmode: "numeric",
            prefillYear: !0
          }
        });
      },
      3851: function (e, t, i) {
        var a,
            n = (a = i(2394)) && a.__esModule ? a : {
          default: a
        },
            r = i(8711),
            o = i(4713);
        n.default.extendDefinitions({
          A: {
            validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            casing: "upper"
          },
          "&": {
            validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
            casing: "upper"
          },
          "#": {
            validator: "[0-9A-Fa-f]",
            casing: "upper"
          }
        });
        var l = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");

        function s(e, t, i, a, n) {
          return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, l.test(e);
        }

        n.default.extendAliases({
          cssunit: {
            regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
          },
          url: {
            regex: "(https?|ftp)://.*",
            autoUnmask: !1,
            keepStatic: !1,
            tabThrough: !0
          },
          ip: {
            mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
            definitions: {
              i: {
                validator: s
              },
              j: {
                validator: s
              },
              k: {
                validator: s
              },
              l: {
                validator: s
              }
            },
            onUnMask: function (e, t, i) {
              return e;
            },
            inputmode: "decimal",
            substitutes: {
              ",": "."
            }
          },
          email: {
            mask: function (e) {
              var t = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                  i = t;
              if (e.separator) for (var a = 0; a < e.quantifier; a++) i += "[".concat(e.separator).concat(t, "]");
              return i;
            },
            greedy: !1,
            casing: "lower",
            separator: null,
            quantifier: 5,
            skipOptionalPartCharacter: "",
            onBeforePaste: function (e, t) {
              return (e = e.toLowerCase()).replace("mailto:", "");
            },
            definitions: {
              "*": {
                validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
              },
              "-": {
                validator: "[0-9A-Za-z-]"
              }
            },
            onUnMask: function (e, t, i) {
              return e;
            },
            inputmode: "email"
          },
          mac: {
            mask: "##:##:##:##:##:##"
          },
          vin: {
            mask: "V{13}9{4}",
            definitions: {
              V: {
                validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                casing: "upper"
              }
            },
            clearIncomplete: !0,
            autoUnmask: !0
          },
          ssn: {
            mask: "999-99-9999",
            postValidation: function (e, t, i, a, n, l, s) {
              var u = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
              return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""));
            }
          }
        });
      },
      207: function (e, t, i) {
        var a = l(i(2394)),
            n = l(i(5581)),
            r = l(i(7184)),
            o = i(8711);

        function l(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var s = a.default.dependencyLib;

        function u(e, t) {
          for (var i = "", n = 0; n < e.length; n++) a.default.prototype.definitions[e.charAt(n)] || t.definitions[e.charAt(n)] || t.optionalmarker[0] === e.charAt(n) || t.optionalmarker[1] === e.charAt(n) || t.quantifiermarker[0] === e.charAt(n) || t.quantifiermarker[1] === e.charAt(n) || t.groupmarker[0] === e.charAt(n) || t.groupmarker[1] === e.charAt(n) || t.alternatormarker === e.charAt(n) ? i += "\\" + e.charAt(n) : i += e.charAt(n);

          return i;
        }

        function c(e, t, i, a) {
          if (e.length > 0 && t > 0 && (!i.digitsOptional || a)) {
            var n = e.indexOf(i.radixPoint),
                r = !1;
            i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === n && (e.push(i.radixPoint), n = e.length - 1);

            for (var o = 1; o <= t; o++) isFinite(e[n + o]) || (e[n + o] = "0");
          }

          return r && e.push(i.negationSymbol.back), e;
        }

        function f(e, t) {
          var i = 0;

          if ("+" === e) {
            for (i in t.validPositions);

            i = o.seekNext.call(this, parseInt(i));
          }

          for (var a in t.tests) if ((a = parseInt(a)) >= i) for (var n = 0, r = t.tests[a].length; n < r; n++) if ((void 0 === t.validPositions[a] || "-" === e) && t.tests[a][n].match.def === e) return a + (void 0 !== t.validPositions[a] && "-" !== e ? 1 : 0);

          return i;
        }

        function d(e, t) {
          var i = -1;

          for (var a in t.validPositions) {
            var n = t.validPositions[a];

            if (n && n.match.def === e) {
              i = parseInt(a);
              break;
            }
          }

          return i;
        }

        function p(e, t, i, a, n) {
          var r = t.buffer ? t.buffer.indexOf(n.radixPoint) : -1,
              o = (-1 !== r || a && n.jitMasking) && new RegExp(n.definitions[9].validator).test(e);
          return n._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
            insert: {
              pos: r === i ? r + 1 : r,
              c: n.radixPoint
            },
            pos: i
          } : o;
        }

        a.default.extendAliases({
          numeric: {
            mask: function (e) {
              e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
              var t = "0",
                  i = e.radixPoint;
              !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, e.numericInput = !0);
              var a,
                  n = "[+]";

              if (n += u(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), n += e._mask(e)) : n += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                var o = e.digits.toString().split(",");
                isFinite(o[0]) && o[1] && isFinite(o[1]) ? n += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = n + i + t + "{0," + e.digits + "}", e.keepStatic = !0) : n += i + t + "{" + e.digits + "}");
              } else e.inputmode = "numeric";

              return n += u(e.suffix, e), n += "[-]", a && (n = [a + u(e.suffix, e) + "[-]", n]), e.greedy = !1, function (e) {
                void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, r.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
              }(e), "" !== e.radixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), n;
            },
            _mask: function (e) {
              return "(" + e.groupSeparator + "999){+|1}";
            },
            digits: "*",
            digitsOptional: !0,
            enforceDigitsOnBlur: !1,
            radixPoint: ".",
            positionCaretOnClick: "radixFocus",
            _radixDance: !0,
            groupSeparator: "",
            allowMinus: !0,
            negationSymbol: {
              front: "-",
              back: ""
            },
            prefix: "",
            suffix: "",
            min: null,
            max: null,
            SetMaxOnOverflow: !1,
            step: 1,
            inputType: "text",
            unmaskAsNumber: !1,
            roundingFN: Math.round,
            inputmode: "decimal",
            shortcuts: {
              k: "1000",
              m: "1000000"
            },
            placeholder: "0",
            greedy: !1,
            rightAlign: !0,
            insertMode: !0,
            autoUnmask: !1,
            skipOptionalPartCharacter: "",
            usePrototypeDefinitions: !1,
            stripLeadingZeroes: !0,
            definitions: {
              0: {
                validator: p
              },
              1: {
                validator: p,
                definitionSymbol: "9"
              },
              9: {
                validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                definitionSymbol: "*"
              },
              "+": {
                validator: function (e, t, i, a, n) {
                  return n.allowMinus && ("-" === e || e === n.negationSymbol.front);
                }
              },
              "-": {
                validator: function (e, t, i, a, n) {
                  return n.allowMinus && e === n.negationSymbol.back;
                }
              }
            },
            preValidation: function (e, t, i, a, n, r, o, l) {
              if (!1 !== n.__financeInput && i === n.radixPoint) return !1;
              var s = e.indexOf(n.radixPoint),
                  u = t;

              if (t = function (e, t, i, a, n) {
                return n._radixDance && n.numericInput && t !== n.negationSymbol.back && e <= i && (i > 0 || t == n.radixPoint) && (void 0 === a.validPositions[e - 1] || a.validPositions[e - 1].input !== n.negationSymbol.back) && (e -= 1), e;
              }(t, i, s, r, n), "-" === i || i === n.negationSymbol.front) {
                if (!0 !== n.allowMinus) return !1;
                var c = !1,
                    p = d("+", r),
                    h = d("-", r);
                return -1 !== p && (c = [p, h]), !1 !== c ? {
                  remove: c,
                  caret: u - n.negationSymbol.back.length
                } : {
                  insert: [{
                    pos: f.call(this, "+", r),
                    c: n.negationSymbol.front,
                    fromIsValid: !0
                  }, {
                    pos: f.call(this, "-", r),
                    c: n.negationSymbol.back,
                    fromIsValid: void 0
                  }],
                  caret: u + n.negationSymbol.back.length
                };
              }

              if (i === n.groupSeparator) return {
                caret: u
              };
              if (l) return !0;
              if (-1 !== s && !0 === n._radixDance && !1 === a && i === n.radixPoint && void 0 !== n.digits && (isNaN(n.digits) || parseInt(n.digits) > 0) && s !== t) return {
                caret: n._radixDance && t === s - 1 ? s + 1 : s
              };
              if (!1 === n.__financeInput) if (a) {
                if (n.digitsOptional) return {
                  rewritePosition: o.end
                };

                if (!n.digitsOptional) {
                  if (o.begin > s && o.end <= s) return i === n.radixPoint ? {
                    insert: {
                      pos: s + 1,
                      c: "0",
                      fromIsValid: !0
                    },
                    rewritePosition: s
                  } : {
                    rewritePosition: s + 1
                  };
                  if (o.begin < s) return {
                    rewritePosition: o.begin - 1
                  };
                }
              } else if (!n.showMaskOnHover && !n.showMaskOnFocus && !n.digitsOptional && n.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                rewritePosition: s
              };
              return {
                rewritePosition: t
              };
            },
            postValidation: function (e, t, i, a, n, r, o) {
              if (!1 === a) return a;
              if (o) return !0;

              if (null !== n.min || null !== n.max) {
                var l = n.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, n, {
                  unmaskAsNumber: !0
                }));
                if (null !== n.min && l < n.min && (l.toString().length > n.min.toString().length || l < 0)) return !1;
                if (null !== n.max && l > n.max) return !!n.SetMaxOnOverflow && {
                  refreshFromBuffer: !0,
                  buffer: c(n.max.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                };
              }

              return a;
            },
            onUnMask: function (e, t, i) {
              if ("" === t && !0 === i.nullable) return t;
              var a = e.replace(i.prefix, "");
              return a = (a = a.replace(i.suffix, "")).replace(new RegExp((0, r.default)(i.groupSeparator), "g"), ""), "" !== i.placeholder.charAt(0) && (a = a.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== a.indexOf(i.radixPoint) && (a = a.replace(r.default.call(this, i.radixPoint), ".")), a = (a = a.replace(new RegExp("^" + (0, r.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, r.default)(i.negationSymbol.back) + "$"), ""), Number(a)) : a;
            },
            isComplete: function (e, t) {
              var i = (t.numericInput ? e.slice().reverse() : e).join("");
              return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, r.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, r.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, r.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, r.default)(t.radixPoint), ".")), isFinite(i);
            },
            onBeforeMask: function (e, t) {
              var i = t.radixPoint || ",";
              isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
              var a = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front,
                  n = e.split(i),
                  o = n[0].replace(/[^\-0-9]/g, ""),
                  l = n.length > 1 ? n[1].replace(/[^0-9]/g, "") : "",
                  s = n.length > 1;
              e = o + ("" !== l ? i + l : l);
              var u = 0;

              if ("" !== i && (u = t.digitsOptional ? t.digits < l.length ? t.digits : l.length : t.digits, "" !== l || !t.digitsOptional)) {
                var f = Math.pow(10, u || 1);
                e = e.replace((0, r.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(u)), e = e.toString().replace(".", i);
              }

              if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), null !== t.min || null !== t.max) {
                var d = e.toString().replace(i, ".");
                null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
              }

              return a && "-" !== e.charAt(0) && (e = "-" + e), c(e.toString().split(""), u, t, s).join("");
            },
            onBeforeWrite: function (e, t, i, a) {
              function n(e, t) {
                if (!1 !== a.__financeInput || t) {
                  var i = e.indexOf(a.radixPoint);
                  -1 !== i && e.splice(i, 1);
                }

                if ("" !== a.groupSeparator) for (; -1 !== (i = e.indexOf(a.groupSeparator));) e.splice(i, 1);
                return e;
              }

              var o, l;
              if (a.stripLeadingZeroes && (l = function (e, t) {
                var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, r.default)(t.negationSymbol.front) + "?" : "") + (0, r.default)(t.prefix) + ")(.*)(" + (0, r.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, r.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")),
                    a = i ? i[2] : "",
                    n = !1;
                return a && (a = a.split(t.radixPoint.charAt(0))[0], n = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), !(!n || !(n[0].length > 1 || n[0].length > 0 && n[0].length < a.length)) && n;
              }(t, a))) for (var u = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, d = l[0].length - f; d > 0; d--) delete this.maskset.validPositions[u + d], delete t[u + d];
              if (e) switch (e.type) {
                case "blur":
                case "checkval":
                  if (null !== a.min) {
                    var p = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                      unmaskAsNumber: !0
                    }));
                    if (null !== a.min && p < a.min) return {
                      refreshFromBuffer: !0,
                      buffer: c(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                    };
                  }

                  if (t[t.length - 1] === a.negationSymbol.front) {
                    var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, r.default)(a.negationSymbol.front) + "?" : "") + (0, r.default)(a.prefix) + ")(.*)(" + (0, r.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, r.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(n(t.slice(), !0).reverse().join(""));
                    0 == (h ? h[2] : "") && (o = {
                      refreshFromBuffer: !0,
                      buffer: [0]
                    });
                  } else if ("" !== a.radixPoint) {
                    t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), o = {
                      refreshFromBuffer: !0,
                      buffer: n(t)
                    }));
                  }

                  if (a.enforceDigitsOnBlur) {
                    var v = (o = o || {}) && o.buffer || t.slice().reverse();
                    o.refreshFromBuffer = !0, o.buffer = c(v, a.digits, a, !0).reverse();
                  }

              }
              return o;
            },
            onKeyDown: function (e, t, i, a) {
              var r,
                  o,
                  l = s(this),
                  u = String.fromCharCode(e.keyCode).toLowerCase();
              if ((o = a.shortcuts && a.shortcuts[u]) && o.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(o)), l.trigger("setvalue"), !1;
              if (e.ctrlKey) switch (e.keyCode) {
                case n.default.UP:
                  return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(a.step)), l.trigger("setvalue"), !1;

                case n.default.DOWN:
                  return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(a.step)), l.trigger("setvalue"), !1;
              }

              if (!e.shiftKey && (e.keyCode === n.default.DELETE || e.keyCode === n.default.BACKSPACE || e.keyCode === n.default.BACKSPACE_SAFARI) && i.begin !== t.length) {
                if (t[e.keyCode === n.default.DELETE ? i.begin - 1 : i.end] === a.negationSymbol.front) return r = t.slice().reverse(), "" !== a.negationSymbol.front && r.shift(), "" !== a.negationSymbol.back && r.pop(), l.trigger("setvalue", [r.join(""), i.begin]), !1;

                if (!0 === a._radixDance) {
                  var f = t.indexOf(a.radixPoint);

                  if (a.digitsOptional) {
                    if (0 === f) return (r = t.slice().reverse()).pop(), l.trigger("setvalue", [r.join(""), i.begin >= r.length ? r.length : i.begin]), !1;
                  } else if (-1 !== f && (i.begin < f || i.end < f || e.keyCode === n.default.DELETE && i.begin === f)) return i.begin !== i.end || e.keyCode !== n.default.BACKSPACE && e.keyCode !== n.default.BACKSPACE_SAFARI || i.begin++, (r = t.slice().reverse()).splice(r.length - i.begin, i.begin - i.end + 1), r = c(r, a.digits, a).join(""), l.trigger("setvalue", [r, i.begin >= r.length ? f + 1 : i.begin]), !1;
                }
              }
            }
          },
          currency: {
            prefix: "",
            groupSeparator: ",",
            alias: "numeric",
            digits: 2,
            digitsOptional: !1
          },
          decimal: {
            alias: "numeric"
          },
          integer: {
            alias: "numeric",
            inputmode: "numeric",
            digits: 0
          },
          percentage: {
            alias: "numeric",
            min: 0,
            max: 100,
            suffix: " %",
            digits: 0,
            allowMinus: !1
          },
          indianns: {
            alias: "numeric",
            _mask: function (e) {
              return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
            },
            groupSeparator: ",",
            radixPoint: ".",
            placeholder: "0",
            digits: 2,
            digitsOptional: !1
          }
        });
      },
      9380: function (e, t, i) {
        var a;
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = ((a = i(8741)) && a.__esModule ? a : {
          default: a
        }).default ? window : {};
        t.default = n;
      },
      7760: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.HandleNativePlaceholder = function (e, t) {
          var i = e ? e.inputmask : this;

          if (s.ie) {
            if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
              var a = o.getBuffer.call(i).slice(),
                  n = e.inputmask._valueGet();

              if (n !== t) {
                var r = o.getLastValidPosition.call(i);
                -1 === r && n === o.getBufferTemplate.call(i).join("") ? a = [] : -1 !== r && f.call(i, a), p(e, a);
              }
            }
          } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
        }, t.applyInputValue = c, t.checkVal = d, t.clearOptionalTail = f, t.unmaskedvalue = function (e) {
          var t = e ? e.inputmask : this,
              i = t.opts,
              a = t.maskset;

          if (e) {
            if (void 0 === e.inputmask) return e.value;
            e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
          }

          var n = [],
              r = a.validPositions;

          for (var l in r) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(a.metadata) && !0 !== r[l].generatedInput) && n.push(r[l].input);

          var s = 0 === n.length ? "" : (t.isRTL ? n.reverse() : n).join("");

          if ("function" == typeof i.onUnMask) {
            var u = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
            s = i.onUnMask.call(t, u, s, i);
          }

          return s;
        }, t.writeBuffer = p;
        var a,
            n = (a = i(5581)) && a.__esModule ? a : {
          default: a
        },
            r = i(4713),
            o = i(8711),
            l = i(7215),
            s = i(9845),
            u = i(6030);

        function c(e, t) {
          var i = e ? e.inputmask : this,
              a = i.opts;
          e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), d(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
        }

        function f(e) {
          e.length = 0;

          for (var t, i = r.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift());) e.push(t);

          return e;
        }

        function d(e, t, i, a, n) {
          var s = e ? e.inputmask : this,
              c = s.maskset,
              f = s.opts,
              d = s.dependencyLib,
              h = a.slice(),
              v = "",
              m = -1,
              g = void 0,
              k = f.skipOptionalPartCharacter;
          f.skipOptionalPartCharacter = "", o.resetMaskSet.call(s), c.tests = {}, m = f.radixPoint ? o.determineNewCaretPosition.call(s, {
            begin: 0,
            end: 0
          }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, c.p = m, s.caretPos = {
            begin: m
          };
          var y = [],
              b = s.caretPos;

          if (h.forEach(function (e, t) {
            if (void 0 !== e) {
              var a = new d.Event("_checkval");
              a.keyCode = e.toString().charCodeAt(0), v += e;
              var n = o.getLastValidPosition.call(s, void 0, !0);
              !function (e, t) {
                for (var i = r.getMaskTemplate.call(s, !0, 0).slice(e, o.seekNext.call(s, e, !1, !1)).join("").replace(/'/g, ""), a = i.indexOf(t); a > 0 && " " === i[a - 1];) a--;

                var n = 0 === a && !o.isMask.call(s, e) && (r.getTest.call(s, e).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e).match.static && r.getTest.call(s, e).match.nativeDef === "'" + t.charAt(0) || " " === r.getTest.call(s, e).match.nativeDef && (r.getTest.call(s, e + 1).match.nativeDef === t.charAt(0) || !0 === r.getTest.call(s, e + 1).match.static && r.getTest.call(s, e + 1).match.nativeDef === "'" + t.charAt(0)));

                if (!n && a > 0 && !o.isMask.call(s, e, !1, !0)) {
                  var l = o.seekNext.call(s, e);
                  s.caretPos.begin < l && (s.caretPos = {
                    begin: l
                  });
                }

                return n;
              }(m, v) ? (g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, s.caretPos.begin)) && (m = s.caretPos.begin + 1, v = "") : g = u.EventHandlers.keypressEvent.call(s, a, !0, !1, i, n + 1), g ? (void 0 !== g.pos && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static && void 0 === c.validPositions[g.pos].alternation && (y.push(g.pos), s.isRTL || (g.forwardPosition = g.pos + 1)), p.call(s, void 0, o.getBuffer.call(s), g.forwardPosition, a, !1), s.caretPos = {
                begin: g.forwardPosition,
                end: g.forwardPosition
              }, b = s.caretPos) : void 0 === c.validPositions[t] && h[t] === r.getPlaceholder.call(s, t) && o.isMask.call(s, t, !0) ? s.caretPos.begin++ : s.caretPos = b;
            }
          }), y.length > 0) {
            var x,
                P,
                E = o.seekNext.call(s, -1, void 0, !1);
            if (!l.isComplete.call(s, o.getBuffer.call(s)) && y.length <= E || l.isComplete.call(s, o.getBuffer.call(s)) && y.length > 0 && y.length !== E && 0 === y[0]) for (var S = E; void 0 !== (x = y.shift());) {
              var _ = new d.Event("_checkval");

              if ((P = c.validPositions[x]).generatedInput = !0, _.keyCode = P.input.charCodeAt(0), (g = u.EventHandlers.keypressEvent.call(s, _, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && c.validPositions[g.pos] && !0 === c.validPositions[g.pos].match.static) y.push(g.pos);else if (!g) break;
              S++;
            }
          }

          t && p.call(s, e, o.getBuffer.call(s), g ? g.forwardPosition : s.caretPos.begin, n || new d.Event("checkval"), n && ("input" === n.type && s.undoValue !== o.getBuffer.call(s).join("") || "paste" === n.type)), f.skipOptionalPartCharacter = k;
        }

        function p(e, t, i, a, r) {
          var s = e ? e.inputmask : this,
              u = s.opts,
              c = s.dependencyLib;

          if (a && "function" == typeof u.onBeforeWrite) {
            var f = u.onBeforeWrite.call(s, a, t, i, u);

            if (f) {
              if (f.refreshFromBuffer) {
                var d = f.refreshFromBuffer;
                l.refreshFromBuffer.call(s, !0 === d ? d : d.start, d.end, f.buffer || t), t = o.getBuffer.call(s, !0);
              }

              void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
            }
          }

          if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || o.caret.call(s, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.keyCode === n.default.DELETE || a.keyCode === n.default.BACKSPACE)), !0 === r)) {
            var p = c(e),
                h = e.inputmask._valueGet();

            e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout(function () {
              h === o.getBufferTemplate.call(s).join("") ? p.trigger("cleared") : !0 === l.isComplete.call(s, t) && p.trigger("complete");
            }, 0);
          }
        }
      },
      2394: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0, i(7149), i(3194);
        var a = i(157),
            n = m(i(4963)),
            r = m(i(9380)),
            o = i(2391),
            l = i(4713),
            s = i(8711),
            u = i(7215),
            c = i(7760),
            f = i(9716),
            d = m(i(7392)),
            p = m(i(3976)),
            h = m(i(8741));

        function v(e) {
          return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, v(e);
        }

        function m(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var g = r.default.document,
            k = "_inputmask_opts";

        function y(e, t, i) {
          if (h.default) {
            if (!(this instanceof y)) return new y(e, t, i);
            this.dependencyLib = n.default, this.el = void 0, this.events = {}, this.maskset = void 0, !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, e && (t.alias = e)), this.opts = n.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipKeyPressEvent = !1, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.originalPlaceholder = void 0, this.isComposing = !1;
          }
        }

        function b(e, t, i) {
          var a = y.prototype.aliases[e];
          return a ? (a.alias && b(a.alias, void 0, i), n.default.extend(!0, i, a), n.default.extend(!0, i, t), !0) : (null === i.mask && (i.mask = e), !1);
        }

        y.prototype = {
          dataAttribute: "data-inputmask",
          defaults: p.default,
          definitions: d.default,
          aliases: {},
          masksCache: {},

          get isRTL() {
            return this.opts.isRTL || this.opts.numericInput;
          },

          mask: function (e) {
            var t = this;
            return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [e] : Array.isArray(e) ? e : Array.from(e)).forEach(function (e, i) {
              var l = n.default.extend(!0, {}, t.opts);

              if (function (e, t, i, a) {
                function o(t, n) {
                  var o = "" === a ? t : a + "-" + t;
                  null !== (n = void 0 !== n ? n : e.getAttribute(o)) && ("string" == typeof n && (0 === t.indexOf("on") ? n = r.default[n] : "false" === n ? n = !1 : "true" === n && (n = !0)), i[t] = n);
                }

                if (!0 === t.importDataAttributes) {
                  var l,
                      s,
                      u,
                      c,
                      f = e.getAttribute(a);
                  if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), s) for (c in u = void 0, s) if ("alias" === c.toLowerCase()) {
                    u = s[c];
                    break;
                  }

                  for (l in o("alias", u), i.alias && b(i.alias, i, t), t) {
                    if (s) for (c in u = void 0, s) if (c.toLowerCase() === l.toLowerCase()) {
                      u = s[c];
                      break;
                    }
                    o(l, u);
                  }
                }

                n.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), t.isRTL = !0);
                return Object.keys(i).length;
              }(e, l, n.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                var s = (0, o.generateMaskSet)(l, t.noMasksCache);
                void 0 !== s && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = l, e.inputmask.noMasksCache = t.noMasksCache, e.inputmask.userOptions = n.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, e.inputmask.$el = (0, n.default)(e), e.inputmask.maskset = s, n.default.data(e, k, t.userOptions), a.mask.call(e.inputmask));
              }
            }), e && e[0] && e[0].inputmask || this;
          },
          option: function (e, t) {
            return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (n.default.extend(this.userOptions, e), this.el && !0 !== t && this.mask(this.el), this) : void 0;
          },
          unmaskedvalue: function (e) {
            if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), void 0 === this.el || void 0 !== e) {
              var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
              c.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, s.getBuffer.call(this), 0, this.opts);
            }

            return c.unmaskedvalue.call(this, this.el);
          },
          remove: function () {
            if (this.el) {
              n.default.data(this.el, k, null);
              var e = this.opts.autoUnmask ? (0, c.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
              e !== s.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                get: this.__valueGet,
                set: this.__valueSet,
                configurable: !0
              }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
            }

            return this.el;
          },
          getemptymask: function () {
            return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), s.getBufferTemplate.call(this).join("");
          },
          hasMaskedValue: function () {
            return !this.opts.autoUnmask;
          },
          isComplete: function () {
            return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), u.isComplete.call(this, s.getBuffer.call(this));
          },
          getmetadata: function () {
            if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
              var e = l.getMaskTemplate.call(this, !0, 0, !1).join("");
              return this.maskset.metadata.forEach(function (t) {
                return t.mask !== e || (e = t, !1);
              }), e;
            }

            return this.maskset.metadata;
          },
          isValid: function (e) {
            if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), e) {
              var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
              c.checkVal.call(this, void 0, !0, !1, t);
            } else e = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");

            for (var i = s.getBuffer.call(this), a = s.determineLastRequiredPosition.call(this), n = i.length - 1; n > a && !s.isMask.call(this, n); n--);

            return i.splice(a, n + 1 - a), u.isComplete.call(this, i) && e === (this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join(""));
          },
          format: function (e, t) {
            this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
            var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
            c.checkVal.call(this, void 0, !0, !1, i);
            var a = this.isRTL ? s.getBuffer.call(this).slice().reverse().join("") : s.getBuffer.call(this).join("");
            return t ? {
              value: a,
              metadata: this.getmetadata()
            } : a;
          },
          setValue: function (e) {
            this.el && (0, n.default)(this.el).trigger("setvalue", [e]);
          },
          analyseMask: o.analyseMask
        }, y.extendDefaults = function (e) {
          n.default.extend(!0, y.prototype.defaults, e);
        }, y.extendDefinitions = function (e) {
          n.default.extend(!0, y.prototype.definitions, e);
        }, y.extendAliases = function (e) {
          n.default.extend(!0, y.prototype.aliases, e);
        }, y.format = function (e, t, i) {
          return y(t).format(e, i);
        }, y.unmask = function (e, t) {
          return y(t).unmaskedvalue(e);
        }, y.isValid = function (e, t) {
          return y(t).isValid(e);
        }, y.remove = function (e) {
          "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach(function (e) {
            e.inputmask && e.inputmask.remove();
          });
        }, y.setValue = function (e, t) {
          "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [e] : e).forEach(function (e) {
            e.inputmask ? e.inputmask.setValue(t) : (0, n.default)(e).trigger("setvalue", [t]);
          });
        }, y.dependencyLib = n.default, r.default.Inputmask = y;
        var x = y;
        t.default = x;
      },
      5296: function (e, t, i) {
        function a(e) {
          return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, a(e);
        }

        var n = h(i(9380)),
            r = h(i(2394)),
            o = h(i(8741));

        function l(e, t) {
          for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
          }
        }

        function s(e, t) {
          if (t && ("object" === a(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          }(e);
        }

        function u(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return u = function (e) {
            if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
            var i;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, a);
            }

            function a() {
              return c(e, arguments, p(this).constructor);
            }

            return a.prototype = Object.create(e.prototype, {
              constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), d(a, e);
          }, u(e);
        }

        function c(e, t, i) {
          return c = f() ? Reflect.construct : function (e, t, i) {
            var a = [null];
            a.push.apply(a, t);
            var n = new (Function.bind.apply(e, a))();
            return i && d(n, i.prototype), n;
          }, c.apply(null, arguments);
        }

        function f() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }

        function d(e, t) {
          return d = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e;
          }, d(e, t);
        }

        function p(e) {
          return p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }, p(e);
        }

        function h(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }

        var v = n.default.document;

        if (o.default && v && v.head && v.head.attachShadow && n.default.customElements && void 0 === n.default.customElements.get("input-mask")) {
          var m = function (e) {
            !function (e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              Object.defineProperty(e, "prototype", {
                value: Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                  }
                }),
                writable: !1
              }), t && d(e, t);
            }(c, e);
            var t,
                i,
                a,
                n,
                o,
                u = (t = c, i = f(), function () {
              var e,
                  a = p(t);

              if (i) {
                var n = p(this).constructor;
                e = Reflect.construct(a, arguments, n);
              } else e = a.apply(this, arguments);

              return s(this, e);
            });

            function c() {
              var e;
              !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
              }(this, c);
              var t = (e = u.call(this)).getAttributeNames(),
                  i = e.attachShadow({
                mode: "closed"
              }),
                  a = v.createElement("input");

              for (var n in a.type = "text", i.appendChild(a), t) Object.prototype.hasOwnProperty.call(t, n) && a.setAttribute(t[n], e.getAttribute(t[n]));

              var o = new r.default();
              return o.dataAttribute = "", o.mask(a), a.inputmask.shadowRoot = i, e;
            }

            return a = c, n && l(a.prototype, n), o && l(a, o), Object.defineProperty(a, "prototype", {
              writable: !1
            }), a;
          }(u(HTMLElement));

          n.default.customElements.define("input-mask", m);
        }
      },
      2391: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.analyseMask = function (e, t, i) {
          var a,
              o,
              l,
              s,
              u,
              c,
              f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,
              d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
              p = !1,
              h = new n.default(),
              v = [],
              m = [],
              g = !1;

          function k(e, a, n) {
            n = void 0 !== n ? n : e.matches.length;
            var o = e.matches[n - 1];
            if (t) 0 === a.indexOf("[") || p && /\\d|\\s|\\w/i.test(a) || "." === a ? e.matches.splice(n++, 0, {
              fn: new RegExp(a, i.casing ? "i" : ""),
              static: !1,
              optionality: !1,
              newBlockMarker: void 0 === o ? "master" : o.def !== a,
              casing: null,
              def: a,
              placeholder: void 0,
              nativeDef: a
            }) : (p && (a = a[a.length - 1]), a.split("").forEach(function (t, a) {
              o = e.matches[n - 1], e.matches.splice(n++, 0, {
                fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                static: !0,
                optionality: !1,
                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                casing: null,
                def: i.staticDefinitionSymbol || t,
                placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                nativeDef: (p ? "'" : "") + t
              });
            })), p = !1;else {
              var l = i.definitions && i.definitions[a] || i.usePrototypeDefinitions && r.default.prototype.definitions[a];
              l && !p ? e.matches.splice(n++, 0, {
                fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function () {
                  this.test = l.validator;
                }() : new RegExp("."),
                static: l.static || !1,
                optionality: l.optional || !1,
                newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || a),
                casing: l.casing,
                def: l.definitionSymbol || a,
                placeholder: l.placeholder,
                nativeDef: a,
                generated: l.generated
              }) : (e.matches.splice(n++, 0, {
                fn: /[a-z]/i.test(i.staticDefinitionSymbol || a) ? new RegExp("[" + (i.staticDefinitionSymbol || a) + "]", i.casing ? "i" : "") : null,
                static: !0,
                optionality: !1,
                newBlockMarker: void 0 === o ? "master" : o.def !== a && !0 !== o.static,
                casing: null,
                def: i.staticDefinitionSymbol || a,
                placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
                nativeDef: (p ? "'" : "") + a
              }), p = !1);
            }
          }

          function y() {
            if (v.length > 0) {
              if (k(s = v[v.length - 1], o), s.isAlternator) {
                u = v.pop();

                for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);

                v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
              }
            } else k(h, o);
          }

          function b(e) {
            var t = new n.default(!0);
            return t.openGroup = !1, t.matches = e, t;
          }

          function x() {
            if ((l = v.pop()).openGroup = !1, void 0 !== l) {
              if (v.length > 0) {
                if ((s = v[v.length - 1]).matches.push(l), s.isAlternator) {
                  for (var e = (u = v.pop()).matches[0].matches ? u.matches[0].matches.length : 1, t = 0; t < u.matches.length; t++) u.matches[t].isGroup = !1, u.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (u.matches[t].matches ? u.matches[t].matches.length : 1) && (i.keepStatic = !0), e = u.matches[t].matches ? u.matches[t].matches.length : 1;

                  v.length > 0 ? (s = v[v.length - 1]).matches.push(u) : h.matches.push(u);
                }
              } else h.matches.push(l);
            } else y();
          }

          function P(e) {
            var t = e.pop();
            return t.isQuantifier && (t = b([e.pop(), t])), t;
          }

          t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);

          for (; a = t ? d.exec(e) : f.exec(e);) {
            if (o = a[0], t) {
              switch (o.charAt(0)) {
                case "?":
                  o = "{0,1}";
                  break;

                case "+":
                case "*":
                  o = "{" + o + "}";
                  break;

                case "|":
                  if (0 === v.length) {
                    var E = b(h.matches);
                    E.openGroup = !0, v.push(E), h.matches = [], g = !0;
                  }

              }

              if ("\\d" === o) o = "[0-9]";
            }

            if (p) y();else switch (o.charAt(0)) {
              case "$":
              case "^":
                t || y();
                break;

              case i.escapeChar:
                p = !0, t && y();
                break;

              case i.optionalmarker[1]:
              case i.groupmarker[1]:
                x();
                break;

              case i.optionalmarker[0]:
                v.push(new n.default(!1, !0));
                break;

              case i.groupmarker[0]:
                v.push(new n.default(!0));
                break;

              case i.quantifiermarker[0]:
                var S = new n.default(!1, !1, !0),
                    _ = (o = o.replace(/[{}?]/g, "")).split("|"),
                    w = _[0].split(","),
                    M = isNaN(w[0]) ? w[0] : parseInt(w[0]),
                    O = 1 === w.length ? M : isNaN(w[1]) ? w[1] : parseInt(w[1]),
                    T = isNaN(_[1]) ? _[1] : parseInt(_[1]);

                "*" !== M && "+" !== M || (M = "*" === O ? 0 : 1), S.quantifier = {
                  min: M,
                  max: O,
                  jit: T
                };
                var C = v.length > 0 ? v[v.length - 1].matches : h.matches;

                if ((a = C.pop()).isAlternator) {
                  C.push(a), C = a.matches;
                  var A = new n.default(!0),
                      D = C.pop();
                  C.push(A), C = A.matches, a = D;
                }

                a.isGroup || (a = b([a])), C.push(a), C.push(S);
                break;

              case i.alternatormarker:
                if (v.length > 0) {
                  var j = (s = v[v.length - 1]).matches[s.matches.length - 1];
                  c = s.openGroup && (void 0 === j.matches || !1 === j.isGroup && !1 === j.isAlternator) ? v.pop() : P(s.matches);
                } else c = P(h.matches);

                if (c.isAlternator) v.push(c);else if (c.alternatorGroup ? (u = v.pop(), c.alternatorGroup = !1) : u = new n.default(!1, !1, !1, !0), u.matches.push(c), v.push(u), c.openGroup) {
                  c.openGroup = !1;
                  var B = new n.default(!0);
                  B.alternatorGroup = !0, v.push(B);
                }
                break;

              default:
                y();
            }
          }

          g && x();

          for (; v.length > 0;) l = v.pop(), h.matches.push(l);

          h.matches.length > 0 && (!function e(a) {
            a && a.matches && a.matches.forEach(function (n, r) {
              var o = a.matches[r + 1];
              (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && n && n.isGroup && (n.isGroup = !1, t || (k(n, i.groupmarker[0], 0), !0 !== n.openGroup && k(n, i.groupmarker[1]))), e(n);
            });
          }(h), m.push(h));
          (i.numericInput || i.isRTL) && function e(t) {
            for (var a in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, a)) {
              var n = parseInt(a);

              if (t.matches[a].isQuantifier && t.matches[n + 1] && t.matches[n + 1].isGroup) {
                var r = t.matches[a];
                t.matches.splice(a, 1), t.matches.splice(n + 1, 0, r);
              }

              void 0 !== t.matches[a].matches ? t.matches[a] = e(t.matches[a]) : t.matches[a] = ((o = t.matches[a]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), o);
            }

            var o;
            return t;
          }(m[0]);
          return m;
        }, t.generateMaskSet = function (e, t) {
          var i;

          function n(e, i, n) {
            var o,
                l,
                s = !1;

            if (null !== e && "" !== e || ((s = null !== n.regex) ? e = (e = n.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, e = ".*")), 1 === e.length && !1 === n.greedy && 0 !== n.repeat && (n.placeholder = ""), n.repeat > 0 || "*" === n.repeat || "+" === n.repeat) {
              var u = "*" === n.repeat ? 0 : "+" === n.repeat ? 1 : n.repeat;
              e = n.groupmarker[0] + e + n.groupmarker[1] + n.quantifiermarker[0] + u + "," + n.repeat + n.quantifiermarker[1];
            }

            return l = s ? "regex_" + n.regex : n.numericInput ? e.split("").reverse().join("") : e, null !== n.keepStatic && (l = "ks_" + n.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (o = {
              mask: e,
              maskToken: r.default.prototype.analyseMask(e, s, n),
              validPositions: {},
              _buffer: void 0,
              buffer: void 0,
              tests: {},
              excludes: {},
              metadata: i,
              maskLength: void 0,
              jitOffset: {}
            }, !0 !== t && (r.default.prototype.masksCache[l] = o, o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : o = a.default.extend(!0, {}, r.default.prototype.masksCache[l]), o;
          }

          "function" == typeof e.mask && (e.mask = e.mask(e));

          if (Array.isArray(e.mask)) {
            if (e.mask.length > 1) {
              null === e.keepStatic && (e.keepStatic = !0);
              var o = e.groupmarker[0];
              return (e.isRTL ? e.mask.reverse() : e.mask).forEach(function (t) {
                o.length > 1 && (o += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? o += t.mask : o += t;
              }), n(o += e.groupmarker[1], e.mask, e);
            }

            e.mask = e.mask.pop();
          }

          i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? n(e.mask.mask, e.mask, e) : n(e.mask, e.mask, e);
          null === e.keepStatic && (e.keepStatic = !1);
          return i;
        };
        var a = o(i(4963)),
            n = o(i(9695)),
            r = o(i(2394));

        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          };
        }
      },
      157: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.mask = function () {
          var e = this,
              t = this.opts,
              i = this.el,
              a = this.dependencyLib;
          l.EventRuler.off(i);

          var f = function (t, i) {
            "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.default.ENTER);
            var s = t.getAttribute("type"),
                u = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
            if (!u) if ("input" === t.tagName.toLowerCase()) {
              var c = document.createElement("input");
              c.setAttribute("type", s), u = "text" === c.type, c = null;
            } else u = "partial";
            return !1 !== u ? function (t) {
              var n, s;

              function u() {
                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== r.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, r.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, r.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
              }

              function c(e) {
                s.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
              }

              if (!t.inputmask.__valueGet) {
                if (!0 !== i.noValuePatching) {
                  if (Object.getOwnPropertyDescriptor) {
                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                    f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                      get: u,
                      set: c,
                      configurable: !0
                    })) : "input" !== t.tagName.toLowerCase() && (n = function () {
                      return this.textContent;
                    }, s = function (e) {
                      this.textContent = e;
                    }, Object.defineProperty(t, "value", {
                      get: u,
                      set: c,
                      configurable: !0
                    }));
                  } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), s = t.__lookupSetter__("value"), t.__defineGetter__("value", u), t.__defineSetter__("value", c));

                  t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                }

                t.inputmask._valueGet = function (t) {
                  return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                }, t.inputmask._valueSet = function (t, i) {
                  s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                }, void 0 === n && (n = function () {
                  return this.value;
                }, s = function (e) {
                  this.value = e;
                }, function (t) {
                  if (a.valHooks && (void 0 === a.valHooks[t] || !0 !== a.valHooks[t].inputmaskpatch)) {
                    var n = a.valHooks[t] && a.valHooks[t].get ? a.valHooks[t].get : function (e) {
                      return e.value;
                    },
                        l = a.valHooks[t] && a.valHooks[t].set ? a.valHooks[t].set : function (e, t) {
                      return e.value = t, e;
                    };
                    a.valHooks[t] = {
                      get: function (t) {
                        if (t.inputmask) {
                          if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                          var a = n(t);
                          return -1 !== r.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? a : "";
                        }

                        return n(t);
                      },
                      set: function (e, t) {
                        var i = l(e, t);
                        return e.inputmask && (0, o.applyInputValue)(e, t), i;
                      },
                      inputmaskpatch: !0
                    };
                  }
                }(t.type), function (t) {
                  l.EventRuler.on(t, "mouseenter", function () {
                    var t = this.inputmask._valueGet(!0);

                    t !== (e.isRTL ? r.getBuffer.call(e).reverse() : r.getBuffer.call(e)).join("") && (0, o.applyInputValue)(this, t);
                  });
                }(t));
              }
            }(t) : t.inputmask = void 0, u;
          }(i, t);

          if (!1 !== f) {
            e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === ["cc-number", "cc-exp"].indexOf(i.autocomplete), s.iphone && (t.insertModeVisual = !1), l.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), l.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), l.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), l.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), l.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), l.EventRuler.on(i, "click", c.EventHandlers.clickEvent), l.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), l.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), l.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), l.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), l.EventRuler.on(i, "complete", t.oncomplete), l.EventRuler.on(i, "incomplete", t.onincomplete), l.EventRuler.on(i, "cleared", t.oncleared), !0 !== t.inputEventOnly && (l.EventRuler.on(i, "keydown", c.EventHandlers.keydownEvent), l.EventRuler.on(i, "keypress", c.EventHandlers.keypressEvent), l.EventRuler.on(i, "keyup", c.EventHandlers.keyupEvent)), (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), l.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent), l.EventRuler.on(i, "compositionend", c.EventHandlers.compositionendEvent)), l.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), r.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
            var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;

            if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
              (0, o.applyInputValue)(i, i.inputmask._valueGet(!0), t);
              var p = r.getBuffer.call(e).slice();
              !1 === u.isComplete.call(e, p) && t.clearIncomplete && r.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === r.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, o.writeBuffer)(i, p), d === i && r.caret.call(e, i, r.seekNext.call(e, r.getLastValidPosition.call(e)));
            }
          }
        };
        var a,
            n = (a = i(5581)) && a.__esModule ? a : {
          default: a
        },
            r = i(8711),
            o = i(7760),
            l = i(9716),
            s = i(9845),
            u = i(7215),
            c = i(6030);
      },
      9695: function (e, t) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = function (e, t, i, a) {
          this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = a || !1, this.quantifier = {
            min: 1,
            max: 1
          };
        };
      },
      3194: function () {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
          value: function (e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                a = i.length >>> 0;
            if (0 === a) return !1;

            for (var n = 0 | t, r = Math.max(n >= 0 ? n : a - Math.abs(n), 0); r < a;) {
              if (i[r] === e) return !0;
              r++;
            }

            return !1;
          }
        });
      },
      7149: function () {
        function e(t) {
          return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, e(t);
        }

        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function (e) {
          return e.__proto__;
        } : function (e) {
          return e.constructor.prototype;
        });
      },
      8711: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.caret = function (e, t, i, a, n) {
          var r,
              o = this,
              l = this.opts;
          if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, i = r.endOffset) : document.selection && document.selection.createRange && (r = document.selection.createRange(), t = 0 - r.duplicate().moveStart("character", -e.inputmask._valueGet().length), i = t + r.text.length), {
            begin: a ? t : u.call(o, t),
            end: a ? i : u.call(o, i)
          };

          if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), "number" == typeof t) {
            t = a ? t : u.call(o, t), i = "number" == typeof (i = a ? i : u.call(o, i)) ? i : t;
            var s = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
            if (e.scrollLeft = s > e.scrollWidth ? s : 0, e.inputmask.caretPos = {
              begin: t,
              end: i
            }, l.insertModeVisual && !1 === l.insertMode && t === i && (n || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i);else if (window.getSelection) {
              if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                var c = document.createTextNode("");
                e.appendChild(c);
              }

              r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), r.collapse(!0);
              var f = window.getSelection();
              f.removeAllRanges(), f.addRange(r);
            } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), r.moveStart("character", t), r.select());
          }
        }, t.determineLastRequiredPosition = function (e) {
          var t,
              i,
              r = this,
              l = this.maskset,
              s = this.dependencyLib,
              u = a.getMaskTemplate.call(r, !0, o.call(r), !0, !0),
              c = u.length,
              f = o.call(r),
              d = {},
              p = l.validPositions[f],
              h = void 0 !== p ? p.locator.slice() : void 0;

          for (t = f + 1; t < u.length; t++) i = a.getTestTemplate.call(r, t, h, t - 1), h = i.locator.slice(), d[t] = s.extend(!0, {}, i);

          var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;

          for (t = c - 1; t > f && ((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && n.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== a.getTests.call(r, t)[0].def)) && u[t] === a.getPlaceholder.call(r, t, i.match); t--) c--;

          return e ? {
            l: c,
            def: d[c] ? d[c].match : void 0
          } : c;
        }, t.determineNewCaretPosition = function (e, t, i) {
          var n = this,
              u = this.maskset,
              c = this.opts;
          t && (n.isRTL ? e.end = e.begin : e.begin = e.end);

          if (e.begin === e.end) {
            switch (i = i || c.positionCaretOnClick) {
              case "none":
                break;

              case "select":
                e = {
                  begin: 0,
                  end: r.call(n).length
                };
                break;

              case "ignore":
                e.end = e.begin = s.call(n, o.call(n));
                break;

              case "radixFocus":
                if (function (e) {
                  if ("" !== c.radixPoint && 0 !== c.digits) {
                    var t = u.validPositions;

                    if (void 0 === t[e] || t[e].input === a.getPlaceholder.call(n, e)) {
                      if (e < s.call(n, -1)) return !0;
                      var i = r.call(n).indexOf(c.radixPoint);

                      if (-1 !== i) {
                        for (var o in t) if (t[o] && i < o && t[o].input !== a.getPlaceholder.call(n, o)) return !1;

                        return !0;
                      }
                    }
                  }

                  return !1;
                }(e.begin)) {
                  var f = r.call(n).join("").indexOf(c.radixPoint);
                  e.end = e.begin = c.numericInput ? s.call(n, f) : f;
                  break;
                }

              default:
                var d = e.begin,
                    p = o.call(n, d, !0),
                    h = s.call(n, -1 !== p || l.call(n, 0) ? p : -1);
                if (d <= h) e.end = e.begin = l.call(n, d, !1, !0) ? d : s.call(n, d);else {
                  var v = u.validPositions[p],
                      m = a.getTestTemplate.call(n, h, v ? v.match.locator : void 0, v),
                      g = a.getPlaceholder.call(n, h, m.match);

                  if ("" !== g && r.call(n)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !l.call(n, h, c.keepStatic, !0) && m.match.def === g) {
                    var k = s.call(n, h);
                    (d >= k || d === h) && (h = k);
                  }

                  e.end = e.begin = h;
                }
            }

            return e;
          }
        }, t.getBuffer = r, t.getBufferTemplate = function () {
          var e = this.maskset;
          void 0 === e._buffer && (e._buffer = a.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
          return e._buffer;
        }, t.getLastValidPosition = o, t.isMask = l, t.resetMaskSet = function (e) {
          var t = this.maskset;
          t.buffer = void 0, !0 !== e && (t.validPositions = {}, t.p = 0);
        }, t.seekNext = s, t.seekPrevious = function (e, t) {
          var i = this,
              n = e - 1;
          if (e <= 0) return 0;

          for (; n > 0 && (!0 === t && (!0 !== a.getTest.call(i, n).match.newBlockMarker || !l.call(i, n, void 0, !0)) || !0 !== t && !l.call(i, n, void 0, !0));) n--;

          return n;
        }, t.translatePosition = u;
        var a = i(4713),
            n = i(7215);

        function r(e) {
          var t = this.maskset;
          return void 0 !== t.buffer && !0 !== e || (t.buffer = a.getMaskTemplate.call(this, !0, o.call(this), !0), void 0 === t._buffer && (t._buffer = t.buffer.slice())), t.buffer;
        }

        function o(e, t, i) {
          var a = this.maskset,
              n = -1,
              r = -1,
              o = i || a.validPositions;

          for (var l in void 0 === e && (e = -1), o) {
            var s = parseInt(l);
            o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (n = s), s >= e && (r = s));
          }

          return -1 === n || n == e ? r : -1 == r || e - n < r - e ? n : r;
        }

        function l(e, t, i) {
          var n = this,
              r = this.maskset,
              o = a.getTestTemplate.call(n, e).match;
          if ("" === o.def && (o = a.getTest.call(n, e).match), !0 !== o.static) return o.fn;
          if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;

          if (!0 !== t && e > -1) {
            if (i) {
              var l = a.getTests.call(n, e);
              return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
            }

            var s = a.determineTestTemplate.call(n, e, a.getTests.call(n, e)),
                u = a.getPlaceholder.call(n, e, s.match);
            return s.match.def !== u;
          }

          return !1;
        }

        function s(e, t, i) {
          var n = this;
          void 0 === i && (i = !0);

          for (var r = e + 1; "" !== a.getTest.call(n, r).match.def && (!0 === t && (!0 !== a.getTest.call(n, r).match.newBlockMarker || !l.call(n, r, void 0, !0)) || !0 !== t && !l.call(n, r, void 0, i));) r++;

          return r;
        }

        function u(e) {
          var t = this.opts,
              i = this.el;
          return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = Math.abs(this._valueGet().length - e)), e;
        }
      },
      4713: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.determineTestTemplate = u, t.getDecisionTaker = o, t.getMaskTemplate = function (e, t, i, a, n) {
          var r = this,
              o = this.opts,
              c = this.maskset,
              f = o.greedy;
          n && o.greedy && (o.greedy = !1, r.maskset.tests = {});
          t = t || 0;
          var p,
              h,
              v,
              m,
              g = [],
              k = 0;

          do {
            if (!0 === e && c.validPositions[k]) v = n && c.validPositions[k].match.optionality && void 0 === c.validPositions[k + 1] && (!0 === c.validPositions[k].generatedInput || c.validPositions[k].input == o.skipOptionalPartCharacter && k > 0) ? u.call(r, k, d.call(r, k, p, k - 1)) : c.validPositions[k], h = v.match, p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : l.call(r, k, h));else {
              v = s.call(r, k, p, k - 1), h = v.match, p = v.locator.slice();
              var y = !0 !== a && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
              (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || c.validPositions[k - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && c.tests[k] && 1 === c.tests[k].length) || !1 === y || void 0 === y || "number" == typeof y && isFinite(y) && y > k ? g.push(!1 === i ? h.nativeDef : l.call(r, k, h)) : m = !1;
            }
            k++;
          } while (!0 !== h.static || "" !== h.def || t > k);

          "" === g[g.length - 1] && g.pop();
          !1 === i && void 0 !== c.maskLength || (c.maskLength = k - 1);
          return o.greedy = f, g;
        }, t.getPlaceholder = l, t.getTest = c, t.getTestTemplate = s, t.getTests = d, t.isSubsetOf = f;
        var a,
            n = (a = i(2394)) && a.__esModule ? a : {
          default: a
        };

        function r(e, t) {
          var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
          if ("" !== i) for (; i.length < t;) i += "0";
          return i;
        }

        function o(e) {
          var t = e.locator[e.alternation];
          return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
        }

        function l(e, t, i) {
          var a = this.opts,
              n = this.maskset;
          if (void 0 !== (t = t || c.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;

          if (!0 === t.static) {
            if (e > -1 && void 0 === n.validPositions[e]) {
              var r,
                  o = d.call(this, e),
                  l = [];
              if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var s = 0; s < o.length; s++) if ("" !== o[s].match.def && !0 !== o[s].match.optionality && !0 !== o[s].match.optionalQuantifier && (!0 === o[s].match.static || void 0 === r || !1 !== o[s].match.fn.test(r.match.def, n, e, !0, a)) && (l.push(o[s]), !0 === o[s].match.static && (r = o[s]), l.length > 1 && /[0-9a-bA-Z]/.test(l[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
            }

            return t.def;
          }

          return a.placeholder.charAt(e % a.placeholder.length);
        }

        function s(e, t, i) {
          return this.maskset.validPositions[e] || u.call(this, e, d.call(this, e, t ? t.slice() : t, i));
        }

        function u(e, t) {
          var i = this.opts,
              a = function (e, t) {
            var i = 0,
                a = !1;
            t.forEach(function (e) {
              e.match.optionality && (0 !== i && i !== e.match.optionality && (a = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
            }), i && (0 == e || 1 == t.length ? i = 0 : a || (i = 0));
            return i;
          }(e, t);

          e = e > 0 ? e - 1 : 0;
          var n,
              o,
              l,
              s = r(c.call(this, e));
          i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && t.pop();

          for (var u = 0; u < t.length; u++) {
            var f = t[u];
            n = r(f, s.length);
            var d = Math.abs(n - s);
            (void 0 === o || "" !== n && d < o || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, l = f);
          }

          return l;
        }

        function c(e, t) {
          var i = this.maskset;
          return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
        }

        function f(e, t, i) {
          function a(e) {
            for (var t, i = [], a = -1, n = 0, r = e.length; n < r; n++) if ("-" === e.charAt(n)) for (t = e.charCodeAt(n + 1); ++a < t;) i.push(String.fromCharCode(a));else a = e.charCodeAt(n), i.push(e.charAt(n));

            return i.join("");
          }

          return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== a(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g, "")));
        }

        function d(e, t, i) {
          var a,
              r,
              o = this,
              l = this.dependencyLib,
              s = this.maskset,
              c = this.opts,
              d = this.el,
              p = s.maskToken,
              h = t ? i : 0,
              v = t ? t.slice() : [0],
              m = [],
              g = !1,
              k = t ? t.join("") : "";

          function y(t, i, r, o) {
            function l(r, o, u) {
              function p(e, t) {
                var i = 0 === t.matches.indexOf(e);
                return i || t.matches.every(function (a, n) {
                  return !0 === a.isQuantifier ? i = p(e, t.matches[n - 1]) : Object.prototype.hasOwnProperty.call(a, "matches") && (i = p(e, a)), !i;
                }), i;
              }

              function v(e, t, i) {
                var a, n;

                if ((s.tests[e] || s.validPositions[e]) && (s.tests[e] || [s.validPositions[e]]).every(function (e, r) {
                  if (e.mloc[t]) return a = e, !1;
                  var o = void 0 !== i ? i : e.alternation,
                      l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                  return (void 0 === n || l < n) && -1 !== l && (a = e, n = l), !0;
                }), a) {
                  var r = a.locator[a.alternation];
                  return (a.mloc[t] || a.mloc[r] || a.locator).slice((void 0 !== i ? i : a.alternation) + 1);
                }

                return void 0 !== i ? v(e, t) : void 0;
              }

              function b(e, t) {
                var i = e.alternation,
                    a = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                if (!a && i > t.alternation) for (var n = t.alternation; n < i; n++) if (e.locator[n] !== t.locator[n]) {
                  i = n, a = !0;
                  break;
                }

                if (a) {
                  e.mloc = e.mloc || {};
                  var r = e.locator[i];

                  if (void 0 !== r) {
                    if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), void 0 !== t) {
                      for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);

                      e.locator[i] = Object.keys(e.mloc).join(",");
                    }

                    return !0;
                  }

                  e.alternation = void 0;
                }

                return !1;
              }

              function x(e, t) {
                if (e.locator.length !== t.locator.length) return !1;

                for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;

                return !0;
              }

              if (h > e + c._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;

              if (h === e && void 0 === r.matches) {
                if (m.push({
                  match: r,
                  locator: o.reverse(),
                  cd: k,
                  mloc: {}
                }), !r.optionality || void 0 !== u || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || n.default.prototype.definitions[r.nativeDef] && n.default.prototype.definitions[r.nativeDef].optional)) return !0;
                g = !0, h = e;
              } else if (void 0 !== r.matches) {
                if (r.isGroup && u !== r) {
                  if (r = l(t.matches[t.matches.indexOf(r) + 1], o, u)) return !0;
                } else if (r.isOptional) {
                  var P = r,
                      E = m.length;

                  if (r = y(r, i, o, u)) {
                    if (m.forEach(function (e, t) {
                      t >= E && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                    }), a = m[m.length - 1].match, void 0 !== u || !p(a, P)) return !0;
                    g = !0, h = e;
                  }
                } else if (r.isAlternator) {
                  var S,
                      _ = r,
                      w = [],
                      M = m.slice(),
                      O = o.length,
                      T = !1,
                      C = i.length > 0 ? i.shift() : -1;

                  if (-1 === C || "string" == typeof C) {
                    var A,
                        D = h,
                        j = i.slice(),
                        B = [];
                    if ("string" == typeof C) B = C.split(",");else for (A = 0; A < _.matches.length; A++) B.push(A.toString());

                    if (void 0 !== s.excludes[e]) {
                      for (var R = B.slice(), L = 0, I = s.excludes[e].length; L < I; L++) {
                        var F = s.excludes[e][L].toString().split(":");
                        o.length == F[1] && B.splice(B.indexOf(F[0]), 1);
                      }

                      0 === B.length && (delete s.excludes[e], B = R);
                    }

                    (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && D >= c.keepStatic) && (B = B.slice(0, 1));

                    for (var N = 0; N < B.length; N++) {
                      A = parseInt(B[N]), m = [], i = "string" == typeof C && v(h, A, O) || j.slice();
                      var V = _.matches[A];
                      if (V && l(V, [A].concat(o), u)) r = !0;else if (0 === N && (T = !0), V && V.matches && V.matches.length > _.matches[0].matches.length) break;
                      S = m.slice(), h = D, m = [];

                      for (var G = 0; G < S.length; G++) {
                        var H = S[G],
                            K = !1;
                        H.match.jit = H.match.jit || T, H.alternation = H.alternation || O, b(H);

                        for (var U = 0; U < w.length; U++) {
                          var $ = w[U];

                          if ("string" != typeof C || void 0 !== H.alternation && B.includes(H.locator[H.alternation].toString())) {
                            if (H.match.nativeDef === $.match.nativeDef) {
                              K = !0, b($, H);
                              break;
                            }

                            if (f(H, $, c)) {
                              b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H));
                              break;
                            }

                            if (f($, H, c)) {
                              b($, H);
                              break;
                            }

                            if (Z = $, !0 === (Q = H).match.static && !0 !== Z.match.static && Z.match.fn.test(Q.match.def, s, e, !1, c, !1)) {
                              x(H, $) || void 0 !== d.inputmask.userOptions.keepStatic ? b(H, $) && (K = !0, w.splice(w.indexOf($), 0, H)) : c.keepStatic = !0;
                              break;
                            }
                          }
                        }

                        K || w.push(H);
                      }
                    }

                    m = M.concat(w), h = e, g = m.length > 0, r = w.length > 0, i = j.slice();
                  } else r = l(_.matches[C] || t.matches[C], [C].concat(o), u);

                  if (r) return !0;
                } else if (r.isQuantifier && u !== t.matches[t.matches.indexOf(r) - 1]) for (var q = r, z = i.length > 0 ? i.shift() : 0; z < (isNaN(q.quantifier.max) ? z + 1 : q.quantifier.max) && h <= e; z++) {
                  var W = t.matches[t.matches.indexOf(q) - 1];

                  if (r = l(W, [z].concat(o), W)) {
                    if ((a = m[m.length - 1].match).optionalQuantifier = z >= q.quantifier.min, a.jit = (z + 1) * (W.matches.indexOf(a) + 1) > q.quantifier.jit, a.optionalQuantifier && p(a, W)) {
                      g = !0, h = e;
                      break;
                    }

                    return a.jit && (s.jitOffset[e] = W.matches.length - W.matches.indexOf(a)), !0;
                  }
                } else if (r = y(r, i, o, u)) return !0;
              } else h++;

              var Q, Z;
            }

            for (var u = i.length > 0 ? i.shift() : 0; u < t.matches.length; u++) if (!0 !== t.matches[u].isQuantifier) {
              var p = l(t.matches[u], [u].concat(r), o);
              if (p && h === e) return p;
              if (h > e) break;
            }
          }

          if (e > -1) {
            if (void 0 === t) {
              for (var b, x = e - 1; void 0 === (b = s.validPositions[x] || s.tests[x]) && x > -1;) x--;

              void 0 !== b && x > -1 && (v = function (e, t) {
                var i,
                    a = [];
                return Array.isArray(t) || (t = [t]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (a = u.call(o, e, t.slice()).locator.slice()).length && (a = t[0].locator.slice()) : t.forEach(function (e) {
                  "" !== e.def && (0 === a.length ? (i = e.alternation, a = e.locator.slice()) : e.locator[i] && -1 === a[i].toString().indexOf(e.locator[i]) && (a[i] += "," + e.locator[i]));
                })), a;
              }(x, b), k = v.join(""), h = x);
            }

            if (s.tests[e] && s.tests[e][0].cd === k) return s.tests[e];

            for (var P = v.shift(); P < p.length; P++) {
              if (y(p[P], v, [P]) && h === e || h > e) break;
            }
          }

          return (0 === m.length || g) && m.push({
            match: {
              fn: null,
              static: !0,
              optionality: !1,
              casing: null,
              def: "",
              placeholder: ""
            },
            locator: [],
            mloc: {},
            cd: k
          }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), r = s.tests[e]), m.forEach(function (e) {
            e.match.optionality = !1;
          }), r;
        }
      },
      7215: function (e, t, i) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.alternate = s, t.checkAlternationMatch = function (e, t, i) {
          for (var a, n = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], l = 0; l < o.length; l++) -1 !== (a = e.indexOf(o[l])) && e.splice(a, 1);

          for (var s = 0; s < e.length; s++) if (n.includes(e[s])) {
            r = !0;
            break;
          }

          return r;
        }, t.handleRemove = function (e, t, i, a, l) {
          var u = this,
              c = this.maskset,
              f = this.opts;

          if ((f.numericInput || u.isRTL) && (t === r.default.BACKSPACE ? t = r.default.DELETE : t === r.default.DELETE && (t = r.default.BACKSPACE), u.isRTL)) {
            var d = i.end;
            i.end = i.begin, i.begin = d;
          }

          var p,
              h = o.getLastValidPosition.call(u, void 0, !0);
          i.end >= o.getBuffer.call(u).length && h >= i.end && (i.end = h + 1);
          t === r.default.BACKSPACE ? i.end - i.begin < 1 && (i.begin = o.seekPrevious.call(u, i.begin)) : t === r.default.DELETE && i.begin === i.end && (i.end = o.isMask.call(u, i.end, !0, !0) ? i.end + 1 : o.seekNext.call(u, i.end) + 1);

          if (!1 !== (p = m.call(u, i))) {
            if (!0 !== a && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(u, i.begin).match.def.indexOf("|")) {
              var v = s.call(u, !0);

              if (v) {
                var g = void 0 !== v.caret ? v.caret : v.pos ? o.seekNext.call(u, v.pos.begin ? v.pos.begin : v.pos) : o.getLastValidPosition.call(u, -1, !0);
                (t !== r.default.DELETE || i.begin > g) && i.begin;
              }
            }

            !0 !== a && (c.p = t === r.default.DELETE ? i.begin + p : i.begin, c.p = o.determineNewCaretPosition.call(u, {
              begin: c.p,
              end: c.p
            }, !1, !1 === f.insertMode && t === r.default.BACKSPACE ? "none" : void 0).begin);
          }
        }, t.isComplete = c, t.isSelection = f, t.isValid = d, t.refreshFromBuffer = h, t.revalidateMask = m;
        var a,
            n = i(4713),
            r = (a = i(5581)) && a.__esModule ? a : {
          default: a
        },
            o = i(8711),
            l = i(6030);

        function s(e, t, i, a, r, l) {
          var u,
              c,
              f,
              p,
              h,
              v,
              m,
              g,
              k,
              y,
              b,
              x = this,
              P = this.dependencyLib,
              E = this.opts,
              S = x.maskset,
              _ = P.extend(!0, {}, S.validPositions),
              w = P.extend(!0, {}, S.tests),
              M = !1,
              O = !1,
              T = void 0 !== r ? r : o.getLastValidPosition.call(x);

          if (l && (y = l.begin, b = l.end, l.begin > l.end && (y = l.end, b = l.begin)), -1 === T && void 0 === r) u = 0, c = (p = n.getTest.call(x, u)).alternation;else for (; T >= 0; T--) if ((f = S.validPositions[T]) && void 0 !== f.alternation) {
            if (p && p.locator[f.alternation] !== f.locator[f.alternation]) break;
            u = T, c = S.validPositions[u].alternation, p = f;
          }

          if (void 0 !== c) {
            m = parseInt(u), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, n.getDecisionTaker)(p) + ":" + p.alternation);
            var C = [],
                A = -1;

            for (h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (C.push(t), A = C.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < y || h >= b) && C.push(v.input), delete S.validPositions[h];

            for (-1 === A && void 0 !== t && (C.push(t), A = C.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10;) {
              for (S.tests = {}, o.resetMaskSet.call(x, !0), M = !0, h = 0; h < C.length && (g = M.caret || o.getLastValidPosition.call(x, void 0, !0) + 1, k = C[h], M = d.call(x, g, k, !1, a, !0)); h++) h === A && (O = M), 1 == e && M && (O = {
                caretPos: h
              });

              if (M) break;

              if (o.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, {}, _), S.tests = P.extend(!0, {}, w), !S.excludes[m]) {
                O = s.call(x, e, t, i, a, m - 1, l);
                break;
              }

              var D = (0, n.getDecisionTaker)(p);

              if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                O = s.call(x, e, t, i, a, m - 1, l);
                break;
              }

              for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < o.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
            }
          }

          return O && !1 === E.keepStatic || delete S.excludes[m], O;
        }

        function u(e, t, i) {
          var a = this.opts,
              n = this.maskset;

          switch (a.casing || t.casing) {
            case "upper":
              e = e.toUpperCase();
              break;

            case "lower":
              e = e.toLowerCase();
              break;

            case "title":
              var o = n.validPositions[i - 1];
              e = 0 === i || o && o.input === String.fromCharCode(r.default.SPACE) ? e.toUpperCase() : e.toLowerCase();
              break;

            default:
              if ("function" == typeof a.casing) {
                var l = Array.prototype.slice.call(arguments);
                l.push(n.validPositions), e = a.casing.apply(this, l);
              }

          }

          return e;
        }

        function c(e) {
          var t = this,
              i = this.opts,
              a = this.maskset;
          if ("function" == typeof i.isComplete) return i.isComplete(e, i);

          if ("*" !== i.repeat) {
            var r = !1,
                l = o.determineLastRequiredPosition.call(t, !0),
                s = o.seekPrevious.call(t, l.l);

            if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
              r = !0;

              for (var u = 0; u <= s; u++) {
                var c = n.getTestTemplate.call(t, u).match;

                if (!0 !== c.static && void 0 === a.validPositions[u] && !0 !== c.optionality && !0 !== c.optionalQuantifier || !0 === c.static && e[u] !== n.getPlaceholder.call(t, u, c)) {
                  r = !1;
                  break;
                }
              }
            }

            return r;
          }
        }

        function f(e) {
          var t = this.opts.insertMode ? 0 : 1;
          return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
        }

        function d(e, t, i, a, r, l, p) {
          var g = this,
              k = this.dependencyLib,
              y = this.opts,
              b = g.maskset;
          i = !0 === i;
          var x = e;

          function P(e) {
            if (void 0 !== e) {
              if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [e.remove]), e.remove.sort(function (e, t) {
                return t.pos - e.pos;
              }).forEach(function (e) {
                m.call(g, {
                  begin: e,
                  end: e + 1
                });
              }), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [e.insert]), e.insert.sort(function (e, t) {
                return e.pos - t.pos;
              }).forEach(function (e) {
                "" !== e.c && d.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
              }), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                var t = e.refreshFromBuffer;
                h.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
              }

              void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
            }

            return e;
          }

          function E(t, i, r) {
            var l = !1;
            return n.getTests.call(g, t).every(function (s, c) {
              var d = s.match;

              if (o.getBuffer.call(g, !0), !1 !== (l = (!d.jit || void 0 !== b.validPositions[o.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, r, y, f.call(g, e)) : (i === d.def || i === y.skipOptionalPartCharacter) && "" !== d.def && {
                c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                pos: t
              }))) {
                var p = void 0 !== l.c ? l.c : i,
                    h = t;
                return p = p === y.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, !0 !== (l = P(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === m.call(g, e, k.extend({}, s, {
                  input: u.call(g, p, d, h)
                }), a, h) && (l = !1), !1);
              }

              return !0;
            }), l;
          }

          void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);

          var S = !0,
              _ = k.extend(!0, {}, b.validPositions);

          if (!1 === y.keepStatic && void 0 !== b.excludes[x] && !0 !== r && !0 !== a) for (var w = x; w < (g.isRTL ? e.begin : e.end); w++) void 0 !== b.excludes[w] && (b.excludes[w] = void 0, delete b.tests[w]);

          if ("function" == typeof y.preValidation && !0 !== a && !0 !== l && (S = P(S = y.preValidation.call(g, o.getBuffer.call(g), x, t, f.call(g, e), y, b, e, i || r))), !0 === S) {
            if (S = E(x, t, i), (!i || !0 === a) && !1 === S && !0 !== l) {
              var M = b.validPositions[x];

              if (!M || !0 !== M.match.static || M.match.def !== t && t !== y.skipOptionalPartCharacter) {
                if (y.insertMode || void 0 === b.validPositions[o.seekNext.call(g, x)] || e.end > x) {
                  var O = !1;
                  if (b.jitOffset[x] && void 0 === b.validPositions[o.seekNext.call(g, x)] && !1 !== (S = d.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== r && (S.caret = x), O = !0), e.end > x && (b.validPositions[x] = void 0), !O && !o.isMask.call(g, x, y.keepStatic && 0 === x)) for (var T = x + 1, C = o.seekNext.call(g, x, !1, 0 !== x); T <= C; T++) if (!1 !== (S = E(T, t, i))) {
                    S = v.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                    break;
                  }
                }
              } else S = {
                caret: o.seekNext.call(g, x)
              };
            }

            !1 !== S || !y.keepStatic || !c.call(g, o.getBuffer.call(g)) && 0 !== x || i || !0 === r ? f.call(g, e) && b.tests[x] && b.tests[x].length > 1 && y.keepStatic && !i && !0 !== r && (S = s.call(g, !0)) : S = s.call(g, x, t, i, a, void 0, e), !0 === S && (S = {
              pos: x
            });
          }

          if ("function" == typeof y.postValidation && !0 !== a && !0 !== l) {
            var A = y.postValidation.call(g, o.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, y, b, i, p);
            void 0 !== A && (S = !0 === A ? S : A);
          }

          S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === l ? (o.resetMaskSet.call(g, !0), b.validPositions = k.extend(!0, {}, _)) : v.call(g, void 0, x, !0);
          var D = P(S);
          void 0 !== g.maxLength && o.getBuffer.call(g).length > g.maxLength && !a && (o.resetMaskSet.call(g, !0), b.validPositions = k.extend(!0, {}, _), D = !1);
          return D;
        }

        function p(e, t, i) {
          for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), l = 0; l < o.length; l++) {
            if (o[l].match && (o[l].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[l].match.nativeDef === t.match.nativeDef || i.regex && !o[l].match.static && o[l].match.fn.test(t.input))) {
              r = !0;
              break;
            }

            if (o[l].match && o[l].match.def === t.match.nativeDef) {
              r = void 0;
              break;
            }
          }

          return !1 === r && void 0 !== a.jitOffset[e] && (r = p.call(this, e + a.jitOffset[e], t, i)), r;
        }

        function h(e, t, i) {
          var a,
              n,
              r = this,
              s = this.maskset,
              u = this.opts,
              c = this.dependencyLib,
              f = u.skipOptionalPartCharacter,
              d = r.isRTL ? i.slice().reverse() : i;
          if (u.skipOptionalPartCharacter = "", !0 === e) o.resetMaskSet.call(r), s.tests = {}, e = 0, t = i.length, n = o.determineNewCaretPosition.call(r, {
            begin: 0,
            end: 0
          }, !1).begin;else {
            for (a = e; a < t; a++) delete s.validPositions[a];

            n = e;
          }
          var p = new c.Event("keypress");

          for (a = e; a < t; a++) {
            p.keyCode = d[a].toString().charCodeAt(0), r.ignorable = !1;
            var h = l.EventHandlers.keypressEvent.call(r, p, !0, !1, !1, n);
            !1 !== h && void 0 !== h && (n = h.forwardPosition);
          }

          u.skipOptionalPartCharacter = f;
        }

        function v(e, t, i) {
          var a = this,
              r = this.maskset,
              l = this.dependencyLib;
          if (void 0 === e) for (e = t - 1; e > 0 && !r.validPositions[e]; e--);

          for (var s = e; s < t; s++) {
            if (void 0 === r.validPositions[s] && !o.isMask.call(a, s, !1)) if (0 == s ? n.getTest.call(a, s) : r.validPositions[s - 1]) {
              var u = n.getTests.call(a, s).slice();
              "" === u[u.length - 1].match.def && u.pop();
              var c,
                  f = n.determineTestTemplate.call(a, s, u);

              if (f && (!0 !== f.match.jit || "master" === f.match.newBlockMarker && (c = r.validPositions[s + 1]) && !0 === c.match.optionalQuantifier) && ((f = l.extend({}, f, {
                input: n.getPlaceholder.call(a, s, f.match, !0) || f.match.def
              })).generatedInput = !0, m.call(a, s, f, !0), !0 !== i)) {
                var p = r.validPositions[t].input;
                return r.validPositions[t] = void 0, d.call(a, t, p, !0, !0);
              }
            }
          }
        }

        function m(e, t, i, a) {
          var r = this,
              l = this.maskset,
              s = this.opts,
              u = this.dependencyLib;

          function c(e, t, i) {
            var a = t[e];

            if (void 0 !== a && !0 === a.match.static && !0 !== a.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
              var n = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1],
                  r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
              return n && r;
            }

            return !1;
          }

          var f = 0,
              h = void 0 !== e.begin ? e.begin : e,
              v = void 0 !== e.end ? e.end : e,
              m = !0;

          if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, h !== v || s.insertMode && void 0 !== l.validPositions[a] && void 0 === i || void 0 === t || t.match.optionalQuantifier || t.match.optionality) {
            var g,
                k = u.extend(!0, {}, l.validPositions),
                y = o.getLastValidPosition.call(r, void 0, !0);

            for (l.p = h, g = y; g >= h; g--) delete l.validPositions[g], void 0 === t && delete l.tests[g + 1];

            var b,
                x,
                P = a,
                E = P;

            for (t && (l.validPositions[a] = u.extend(!0, {}, t), E++, P++), g = t ? v : v - 1; g <= y; g++) {
              if (void 0 !== (b = k[g]) && !0 !== b.generatedInput && (g >= v || g >= h && c(g, k, {
                begin: h,
                end: v
              }))) {
                for (; "" !== n.getTest.call(r, E).match.def;) {
                  if (!1 !== (x = p.call(r, E, b, s)) || "+" === b.match.def) {
                    "+" === b.match.def && o.getBuffer.call(r, !0);
                    var S = d.call(r, E, b.input, "+" !== b.match.def, !0);
                    if (m = !1 !== S, P = (S.pos || E) + 1, !m && x) break;
                  } else m = !1;

                  if (m) {
                    void 0 === t && b.match.static && g === e.begin && f++;
                    break;
                  }

                  if (!m && o.getBuffer.call(r), E > l.maskLength) break;
                  E++;
                }

                "" == n.getTest.call(r, E).match.def && (m = !1), E = P;
              }

              if (!m) break;
            }

            if (!m) return l.validPositions = u.extend(!0, {}, k), o.resetMaskSet.call(r, !0), !1;
          } else t && n.getTest.call(r, a).match.cd === t.match.cd && (l.validPositions[a] = u.extend(!0, {}, t));

          return o.resetMaskSet.call(r, !0), f;
        }
      },
      5581: function (e) {
        e.exports = JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}');
      }
    },
        t = {};

    function i(a) {
      var n = t[a];
      if (void 0 !== n) return n.exports;
      var r = t[a] = {
        exports: {}
      };
      return e[a](r, r.exports, i), r.exports;
    }

    var a = {};
    return function () {
      var e,
          t = a;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0, i(3851), i(219), i(207), i(5296);
      var n = ((e = i(2394)) && e.__esModule ? e : {
        default: e
      }).default;
      t.default = n;
    }(), a;
  }();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./src/js/module/mobileMenu.js
var menu = function menu() {
  var burger = document.querySelector(".menu");
  var menuContent = document.querySelector(".menu__body");
  var body = document.querySelector("body");
  burger.addEventListener("click", function () {
    menuContent.classList.toggle("_open");
    burger.classList.toggle("_open");
    body.classList.toggle("_lock"); // if (!menuContent.classList.contains("_open")) {
    //   menuContent.classList.add("_open");
    // }
    // if (!body.classList.contains("_lock")) {
    //   body.classList.add("_lock");
    // }
  }); // closeMenu.addEventListener("click", () => {
  //   if (menuContent.classList.contains("_open")) {
  //     menuContent.classList.remove("_open");
  //   }
  //   if (body.classList.contains("_lock")) {
  //     body.classList.remove("_lock");
  //   }
  // });
}; // burger.forEach((button, index) => {
//   button.addEventListener("click", (e) => {
//     if (button === e.target) {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }
//   });
// });


/* harmony default export */ var mobileMenu = (menu);
;// CONCATENATED MODULE: ./node_modules/lightgallery/lightgallery.es5.js
/*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */


var lGEvents = {
  afterAppendSlide: 'lgAfterAppendSlide',
  init: 'lgInit',
  hasVideo: 'lgHasVideo',
  containerResize: 'lgContainerResize',
  updateSlides: 'lgUpdateSlides',
  afterAppendSubHtml: 'lgAfterAppendSubHtml',
  beforeOpen: 'lgBeforeOpen',
  afterOpen: 'lgAfterOpen',
  slideItemLoad: 'lgSlideItemLoad',
  beforeSlide: 'lgBeforeSlide',
  afterSlide: 'lgAfterSlide',
  posterClick: 'lgPosterClick',
  dragStart: 'lgDragStart',
  dragMove: 'lgDragMove',
  dragEnd: 'lgDragEnd',
  beforeNextSlide: 'lgBeforeNextSlide',
  beforePrevSlide: 'lgBeforePrevSlide',
  beforeClose: 'lgBeforeClose',
  afterClose: 'lgAfterClose',
  rotateLeft: 'lgRotateLeft',
  rotateRight: 'lgRotateRight',
  flipHorizontal: 'lgFlipHorizontal',
  flipVertical: 'lgFlipVertical',
  autoplay: 'lgAutoplay',
  autoplayStart: 'lgAutoplayStart',
  autoplayStop: 'lgAutoplayStop'
};
var lightGalleryCoreSettings = {
  mode: 'lg-slide',
  easing: 'ease',
  speed: 400,
  licenseKey: '0000-0000-000-0000',
  height: '100%',
  width: '100%',
  addClass: '',
  startClass: 'lg-start-zoom',
  backdropDuration: 300,
  container: '',
  startAnimationDuration: 400,
  zoomFromOrigin: true,
  hideBarsDelay: 0,
  showBarsAfter: 10000,
  slideDelay: 0,
  supportLegacyBrowser: true,
  allowMediaOverlap: false,
  videoMaxSize: '1280-720',
  loadYouTubePoster: true,
  defaultCaptionHeight: 0,
  ariaLabelledby: '',
  ariaDescribedby: '',
  resetScrollPosition: true,
  hideScrollbar: false,
  closable: true,
  swipeToClose: true,
  closeOnTap: true,
  showCloseIcon: true,
  showMaximizeIcon: false,
  loop: true,
  escKey: true,
  keyPress: true,
  trapFocus: true,
  controls: true,
  slideEndAnimation: true,
  hideControlOnEnd: false,
  mousewheel: false,
  getCaptionFromTitleOrAlt: true,
  appendSubHtmlTo: '.lg-sub-html',
  subHtmlSelectorRelative: false,
  preload: 2,
  numberOfSlideItemsInDom: 10,
  selector: '',
  selectWithin: '',
  nextHtml: '',
  prevHtml: '',
  index: 0,
  iframeWidth: '100%',
  iframeHeight: '100%',
  iframeMaxWidth: '100%',
  iframeMaxHeight: '100%',
  download: true,
  counter: true,
  appendCounterTo: '.lg-toolbar',
  swipeThreshold: 50,
  enableSwipe: true,
  enableDrag: true,
  dynamic: false,
  dynamicEl: [],
  extraProps: [],
  exThumbImage: '',
  isMobile: undefined,
  mobileSettings: {
    controls: false,
    showCloseIcon: false,
    download: false
  },
  plugins: [],
  strings: {
    closeGallery: 'Close gallery',
    toggleMaximize: 'Toggle maximize',
    previousSlide: 'Previous slide',
    nextSlide: 'Next slide',
    download: 'Download',
    playVideo: 'Play video'
  }
};

function initLgPolyfills() {
  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: null
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    window.CustomEvent = CustomEvent;
  })();

  (function () {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
  })();
}

var lgQuery =
/** @class */
function () {
  function lgQuery(selector) {
    this.cssVenderPrefixes = ['TransitionDuration', 'TransitionTimingFunction', 'Transform', 'Transition'];
    this.selector = this._getSelector(selector);
    this.firstElement = this._getFirstEl();
    return this;
  }

  lgQuery.generateUUID = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };

  lgQuery.prototype._getSelector = function (selector, context) {
    if (context === void 0) {
      context = document;
    }

    if (typeof selector !== 'string') {
      return selector;
    }

    context = context || document;
    var fl = selector.substring(0, 1);

    if (fl === '#') {
      return context.querySelector(selector);
    } else {
      return context.querySelectorAll(selector);
    }
  };

  lgQuery.prototype._each = function (func) {
    if (!this.selector) {
      return this;
    }

    if (this.selector.length !== undefined) {
      [].forEach.call(this.selector, func);
    } else {
      func(this.selector, 0);
    }

    return this;
  };

  lgQuery.prototype._setCssVendorPrefix = function (el, cssProperty, value) {
    // prettier-ignore
    var property = cssProperty.replace(/-([a-z])/gi, function (s, group1) {
      return group1.toUpperCase();
    });

    if (this.cssVenderPrefixes.indexOf(property) !== -1) {
      el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
      el.style['webkit' + property] = value;
      el.style['moz' + property] = value;
      el.style['ms' + property] = value;
      el.style['o' + property] = value;
    } else {
      el.style[property] = value;
    }
  };

  lgQuery.prototype._getFirstEl = function () {
    if (this.selector && this.selector.length !== undefined) {
      return this.selector[0];
    } else {
      return this.selector;
    }
  };

  lgQuery.prototype.isEventMatched = function (event, eventName) {
    var eventNamespace = eventName.split('.');
    return event.split('.').filter(function (e) {
      return e;
    }).every(function (e) {
      return eventNamespace.indexOf(e) !== -1;
    });
  };

  lgQuery.prototype.attr = function (attr, value) {
    if (value === undefined) {
      if (!this.firstElement) {
        return '';
      }

      return this.firstElement.getAttribute(attr);
    }

    this._each(function (el) {
      el.setAttribute(attr, value);
    });

    return this;
  };

  lgQuery.prototype.find = function (selector) {
    return $LG(this._getSelector(selector, this.selector));
  };

  lgQuery.prototype.first = function () {
    if (this.selector && this.selector.length !== undefined) {
      return $LG(this.selector[0]);
    } else {
      return $LG(this.selector);
    }
  };

  lgQuery.prototype.eq = function (index) {
    return $LG(this.selector[index]);
  };

  lgQuery.prototype.parent = function () {
    return $LG(this.selector.parentElement);
  };

  lgQuery.prototype.get = function () {
    return this._getFirstEl();
  };

  lgQuery.prototype.removeAttr = function (attributes) {
    var attrs = attributes.split(' ');

    this._each(function (el) {
      attrs.forEach(function (attr) {
        return el.removeAttribute(attr);
      });
    });

    return this;
  };

  lgQuery.prototype.wrap = function (className) {
    if (!this.firstElement) {
      return this;
    }

    var wrapper = document.createElement('div');
    wrapper.className = className;
    this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
    this.firstElement.parentNode.removeChild(this.firstElement);
    wrapper.appendChild(this.firstElement);
    return this;
  };

  lgQuery.prototype.addClass = function (classNames) {
    if (classNames === void 0) {
      classNames = '';
    }

    this._each(function (el) {
      // IE doesn't support multiple arguments
      classNames.split(' ').forEach(function (className) {
        if (className) {
          el.classList.add(className);
        }
      });
    });

    return this;
  };

  lgQuery.prototype.removeClass = function (classNames) {
    this._each(function (el) {
      // IE doesn't support multiple arguments
      classNames.split(' ').forEach(function (className) {
        if (className) {
          el.classList.remove(className);
        }
      });
    });

    return this;
  };

  lgQuery.prototype.hasClass = function (className) {
    if (!this.firstElement) {
      return false;
    }

    return this.firstElement.classList.contains(className);
  };

  lgQuery.prototype.hasAttribute = function (attribute) {
    if (!this.firstElement) {
      return false;
    }

    return this.firstElement.hasAttribute(attribute);
  };

  lgQuery.prototype.toggleClass = function (className) {
    if (!this.firstElement) {
      return this;
    }

    if (this.hasClass(className)) {
      this.removeClass(className);
    } else {
      this.addClass(className);
    }

    return this;
  };

  lgQuery.prototype.css = function (property, value) {
    var _this = this;

    this._each(function (el) {
      _this._setCssVendorPrefix(el, property, value);
    });

    return this;
  }; // Need to pass separate namespaces for separate elements


  lgQuery.prototype.on = function (events, listener) {
    var _this = this;

    if (!this.selector) {
      return this;
    }

    events.split(' ').forEach(function (event) {
      if (!Array.isArray(lgQuery.eventListeners[event])) {
        lgQuery.eventListeners[event] = [];
      }

      lgQuery.eventListeners[event].push(listener);

      _this.selector.addEventListener(event.split('.')[0], listener);
    });
    return this;
  }; // @todo - test this


  lgQuery.prototype.once = function (event, listener) {
    var _this = this;

    this.on(event, function () {
      _this.off(event);

      listener(event);
    });
    return this;
  };

  lgQuery.prototype.off = function (event) {
    var _this = this;

    if (!this.selector) {
      return this;
    }

    Object.keys(lgQuery.eventListeners).forEach(function (eventName) {
      if (_this.isEventMatched(event, eventName)) {
        lgQuery.eventListeners[eventName].forEach(function (listener) {
          _this.selector.removeEventListener(eventName.split('.')[0], listener);
        });
        lgQuery.eventListeners[eventName] = [];
      }
    });
    return this;
  };

  lgQuery.prototype.trigger = function (event, detail) {
    if (!this.firstElement) {
      return this;
    }

    var customEvent = new CustomEvent(event.split('.')[0], {
      detail: detail || null
    });
    this.firstElement.dispatchEvent(customEvent);
    return this;
  }; // Does not support IE


  lgQuery.prototype.load = function (url) {
    var _this = this;

    fetch(url).then(function (res) {
      return res.text();
    }).then(function (html) {
      _this.selector.innerHTML = html;
    });
    return this;
  };

  lgQuery.prototype.html = function (html) {
    if (html === undefined) {
      if (!this.firstElement) {
        return '';
      }

      return this.firstElement.innerHTML;
    }

    this._each(function (el) {
      el.innerHTML = html;
    });

    return this;
  };

  lgQuery.prototype.append = function (html) {
    this._each(function (el) {
      if (typeof html === 'string') {
        el.insertAdjacentHTML('beforeend', html);
      } else {
        el.appendChild(html);
      }
    });

    return this;
  };

  lgQuery.prototype.prepend = function (html) {
    this._each(function (el) {
      el.insertAdjacentHTML('afterbegin', html);
    });

    return this;
  };

  lgQuery.prototype.remove = function () {
    this._each(function (el) {
      el.parentNode.removeChild(el);
    });

    return this;
  };

  lgQuery.prototype.empty = function () {
    this._each(function (el) {
      el.innerHTML = '';
    });

    return this;
  };

  lgQuery.prototype.scrollTop = function (scrollTop) {
    if (scrollTop !== undefined) {
      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop;
      return this;
    } else {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
  };

  lgQuery.prototype.scrollLeft = function (scrollLeft) {
    if (scrollLeft !== undefined) {
      document.body.scrollLeft = scrollLeft;
      document.documentElement.scrollLeft = scrollLeft;
      return this;
    } else {
      return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }
  };

  lgQuery.prototype.offset = function () {
    if (!this.firstElement) {
      return {
        left: 0,
        top: 0
      };
    }

    var rect = this.firstElement.getBoundingClientRect();
    var bodyMarginLeft = $LG('body').style().marginLeft; // Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value

    return {
      left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
      top: rect.top + this.scrollTop()
    };
  };

  lgQuery.prototype.style = function () {
    if (!this.firstElement) {
      return {};
    }

    return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
  }; // Width without padding and border even if box-sizing is used.


  lgQuery.prototype.width = function () {
    var style = this.style();
    return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  }; // Height without padding and border even if box-sizing is used.


  lgQuery.prototype.height = function () {
    var style = this.style();
    return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
  };

  lgQuery.eventListeners = {};
  return lgQuery;
}();

function $LG(selector) {
  initLgPolyfills();
  return new lgQuery(selector);
}

var defaultDynamicOptions = ['src', 'sources', 'subHtml', 'subHtmlUrl', 'html', 'video', 'poster', 'slideName', 'responsive', 'srcset', 'sizes', 'iframe', 'downloadUrl', 'download', 'width', 'facebookShareUrl', 'tweetText', 'iframeTitle', 'twitterShareUrl', 'pinterestShareUrl', 'pinterestText', 'fbHtml', 'disqusIdentifier', 'disqusUrl']; // Convert html data-attribute to camalcase

function convertToData(attr) {
  // FInd a way for lgsize
  if (attr === 'href') {
    return 'src';
  }

  attr = attr.replace('data-', '');
  attr = attr.charAt(0).toLowerCase() + attr.slice(1);
  attr = attr.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return attr;
}

var utils = {
  /**
   * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
   */
  getSize: function (el, container, spacing, defaultLgSize) {
    if (spacing === void 0) {
      spacing = 0;
    }

    var LGel = $LG(el);
    var lgSize = LGel.attr('data-lg-size') || defaultLgSize;

    if (!lgSize) {
      return;
    }

    var isResponsiveSizes = lgSize.split(','); // if at-least two viewport sizes are available

    if (isResponsiveSizes[1]) {
      var wWidth = window.innerWidth;

      for (var i = 0; i < isResponsiveSizes.length; i++) {
        var size_1 = isResponsiveSizes[i];
        var responsiveWidth = parseInt(size_1.split('-')[2], 10);

        if (responsiveWidth > wWidth) {
          lgSize = size_1;
          break;
        } // take last item as last option


        if (i === isResponsiveSizes.length - 1) {
          lgSize = size_1;
        }
      }
    }

    var size = lgSize.split('-');
    var width = parseInt(size[0], 10);
    var height = parseInt(size[1], 10);
    var cWidth = container.width();
    var cHeight = container.height() - spacing;
    var maxWidth = Math.min(cWidth, width);
    var maxHeight = Math.min(cHeight, height);
    var ratio = Math.min(maxWidth / width, maxHeight / height);
    return {
      width: width * ratio,
      height: height * ratio
    };
  },

  /**
   * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
   * @param {jQuery Element}
   * @returns {String} Transform CSS string
   */
  getTransform: function (el, container, top, bottom, imageSize) {
    if (!imageSize) {
      return;
    }

    var LGel = $LG(el).find('img').first();

    if (!LGel.get()) {
      return;
    }

    var containerRect = container.get().getBoundingClientRect();
    var wWidth = containerRect.width; // using innerWidth to include mobile safari bottom bar

    var wHeight = container.height() - (top + bottom);
    var elWidth = LGel.width();
    var elHeight = LGel.height();
    var elStyle = LGel.style();
    var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
    var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
    var scX = elWidth / imageSize.width;
    var scY = elHeight / imageSize.height;
    var transform = 'translate3d(' + (x *= -1) + 'px, ' + (y *= -1) + 'px, 0) scale3d(' + scX + ', ' + scY + ', 1)';
    return transform;
  },
  getIframeMarkup: function (iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
    var title = iframeTitle ? 'title="' + iframeTitle + '"' : '';
    return "<div class=\"lg-video-cont lg-has-iframe\" style=\"width:" + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + "\">\n                    <iframe class=\"lg-object\" frameborder=\"0\" " + title + " src=\"" + src + "\"  allowfullscreen=\"true\"></iframe>\n                </div>";
  },
  getImgMarkup: function (index, src, altAttr, srcset, sizes, sources) {
    var srcsetAttr = srcset ? "srcset=\"" + srcset + "\"" : '';
    var sizesAttr = sizes ? "sizes=\"" + sizes + "\"" : '';
    var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + " class=\"lg-object lg-image\" data-index=\"" + index + "\" src=\"" + src + "\" />";
    var sourceTag = '';

    if (sources) {
      var sourceObj = typeof sources === 'string' ? JSON.parse(sources) : sources;
      sourceTag = sourceObj.map(function (source) {
        var attrs = '';
        Object.keys(source).forEach(function (key) {
          // Do not remove the first space as it is required to separate the attributes
          attrs += " " + key + "=\"" + source[key] + "\"";
        });
        return "<source " + attrs + "></source>";
      });
    }

    return "" + sourceTag + imgMarkup;
  },
  // Get src from responsive src
  getResponsiveSrc: function (srcItms) {
    var rsWidth = [];
    var rsSrc = [];
    var src = '';

    for (var i = 0; i < srcItms.length; i++) {
      var _src = srcItms[i].split(' '); // Manage empty space


      if (_src[0] === '') {
        _src.splice(0, 1);
      }

      rsSrc.push(_src[0]);
      rsWidth.push(_src[1]);
    }

    var wWidth = window.innerWidth;

    for (var j = 0; j < rsWidth.length; j++) {
      if (parseInt(rsWidth[j], 10) > wWidth) {
        src = rsSrc[j];
        break;
      }
    }

    return src;
  },
  isImageLoaded: function (img) {
    if (!img) return false; // During the onload event, IE correctly identifies any images that
    // weren’t downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.

    if (!img.complete) {
      return false;
    } // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.


    if (img.naturalWidth === 0) {
      return false;
    } // No other way of checking: assume it’s ok.


    return true;
  },
  getVideoPosterMarkup: function (_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
    var videoClass = '';

    if (_isVideo && _isVideo.youtube) {
      videoClass = 'lg-has-youtube';
    } else if (_isVideo && _isVideo.vimeo) {
      videoClass = 'lg-has-vimeo';
    } else {
      videoClass = 'lg-has-html5';
    }

    return "<div class=\"lg-video-cont " + videoClass + "\" style=\"" + videoContStyle + "\">\n                <div class=\"lg-video-play-button\">\n                <svg\n                    viewBox=\"0 0 20 20\"\n                    preserveAspectRatio=\"xMidYMid\"\n                    focusable=\"false\"\n                    aria-labelledby=\"" + playVideoString + "\"\n                    role=\"img\"\n                    class=\"lg-video-play-icon\"\n                >\n                    <title>" + playVideoString + "</title>\n                    <polygon class=\"lg-video-play-icon-inner\" points=\"1,0 20,10 1,20\"></polygon>\n                </svg>\n                <svg class=\"lg-video-play-icon-bg\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle></svg>\n                <svg class=\"lg-video-play-icon-circle\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle>\n                </svg>\n            </div>\n            " + (dummyImg || '') + "\n            <img class=\"lg-object lg-video-poster\" src=\"" + _poster + "\" />\n        </div>";
  },
  getFocusableElements: function (container) {
    var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    var visibleElements = [].filter.call(elements, function (element) {
      var style = window.getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });
    return visibleElements;
  },

  /**
   * @desc Create dynamic elements array from gallery items when dynamic option is false
   * It helps to avoid frequent DOM interaction
   * and avoid multiple checks for dynamic elments
   *
   * @returns {Array} dynamicEl
   */
  getDynamicOptions: function (items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
    var dynamicElements = [];

    var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);

    [].forEach.call(items, function (item) {
      var dynamicEl = {};

      for (var i = 0; i < item.attributes.length; i++) {
        var attr = item.attributes[i];

        if (attr.specified) {
          var dynamicAttr = convertToData(attr.name);
          var label = '';

          if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
            label = dynamicAttr;
          }

          if (label) {
            dynamicEl[label] = attr.value;
          }
        }
      }

      var currentItem = $LG(item);
      var alt = currentItem.find('img').first().attr('alt');
      var title = currentItem.attr('title');
      var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find('img').first().attr('src');
      dynamicEl.thumb = thumb;

      if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
        dynamicEl.subHtml = title || alt || '';
      }

      dynamicEl.alt = alt || title || '';
      dynamicElements.push(dynamicEl);
    });
    return dynamicElements;
  },
  isMobile: function () {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  },

  /**
   * @desc Check the given src is video
   * @param {String} src
   * @return {Object} video type
   * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
   *
   * @todo - this information can be moved to dynamicEl to avoid frequent calls
   */
  isVideo: function (src, isHTML5VIdeo, index) {
    if (!src) {
      if (isHTML5VIdeo) {
        return {
          html5: true
        };
      } else {
        console.error('lightGallery :- data-src is not provided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/');
        return;
      }
    }

    var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
    var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
    var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);

    if (youtube) {
      return {
        youtube: youtube
      };
    } else if (vimeo) {
      return {
        vimeo: vimeo
      };
    } else if (wistia) {
      return {
        wistia: wistia
      };
    }
  }
}; // @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
// @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
// Unique id for each gallery

var lgId = 0;

var LightGallery =
/** @class */
function () {
  function LightGallery(element, options) {
    this.lgOpened = false;
    this.index = 0; // lightGallery modules

    this.plugins = []; // false when lightGallery load first slide content;

    this.lGalleryOn = false; // True when a slide animation is in progress

    this.lgBusy = false;
    this.currentItemsInDom = []; // Scroll top value before lightGallery is opened

    this.prevScrollTop = 0;
    this.bodyPaddingRight = 0;
    this.isDummyImageRemoved = false;
    this.dragOrSwipeEnabled = false;
    this.mediaContainerPosition = {
      top: 0,
      bottom: 0
    };

    if (!element) {
      return this;
    }

    lgId++;
    this.lgId = lgId;
    this.el = element;
    this.LGel = $LG(element);
    this.generateSettings(options);
    this.buildModules(); // When using dynamic mode, ensure dynamicEl is an array

    if (this.settings.dynamic && this.settings.dynamicEl !== undefined && !Array.isArray(this.settings.dynamicEl)) {
      throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
    }

    this.galleryItems = this.getItems();
    this.normalizeSettings(); // Gallery items

    this.init();
    this.validateLicense();
    return this;
  }

  LightGallery.prototype.generateSettings = function (options) {
    // lightGallery settings
    this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);

    if (this.settings.isMobile && typeof this.settings.isMobile === 'function' ? this.settings.isMobile() : utils.isMobile()) {
      var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);

      this.settings = __assign(__assign({}, this.settings), mobileSettings);
    }
  };

  LightGallery.prototype.normalizeSettings = function () {
    if (this.settings.slideEndAnimation) {
      this.settings.hideControlOnEnd = false;
    }

    if (!this.settings.closable) {
      this.settings.swipeToClose = false;
    } // And reset it on close to get the correct value next time


    this.zoomFromOrigin = this.settings.zoomFromOrigin; // At the moment, Zoom from image doesn't support dynamic options
    // @todo add zoomFromOrigin support for dynamic images

    if (this.settings.dynamic) {
      this.zoomFromOrigin = false;
    }

    if (!this.settings.container) {
      this.settings.container = document.body;
    } // settings.preload should not be grater than $item.length


    this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
  };

  LightGallery.prototype.init = function () {
    var _this = this;

    this.addSlideVideoInfo(this.galleryItems);
    this.buildStructure();
    this.LGel.trigger(lGEvents.init, {
      instance: this
    });

    if (this.settings.keyPress) {
      this.keyPress();
    }

    setTimeout(function () {
      _this.enableDrag();

      _this.enableSwipe();

      _this.triggerPosterClick();
    }, 50);
    this.arrow();

    if (this.settings.mousewheel) {
      this.mousewheel();
    }

    if (!this.settings.dynamic) {
      this.openGalleryOnItemClick();
    }
  };

  LightGallery.prototype.openGalleryOnItemClick = function () {
    var _this = this;

    var _loop_1 = function (index) {
      var element = this_1.items[index];
      var $element = $LG(element); // Using different namespace for click because click event should not unbind if selector is same object('this')
      // @todo manage all event listners - should have namespace that represent element

      var uuid = lgQuery.generateUUID();
      $element.attr('data-lg-id', uuid).on("click.lgcustom-item-" + uuid, function (e) {
        e.preventDefault();
        var currentItemIndex = _this.settings.index || index;

        _this.openGallery(currentItemIndex, element);
      });
    };

    var this_1 = this; // Using for loop instead of using bubbling as the items can be any html element.

    for (var index = 0; index < this.items.length; index++) {
      _loop_1(index);
    }
  };
  /**
   * Module constructor
   * Modules are build incrementally.
   * Gallery should be opened only once all the modules are initialized.
   * use moduleBuildTimeout to make sure this
   */


  LightGallery.prototype.buildModules = function () {
    var _this = this;

    this.settings.plugins.forEach(function (plugin) {
      _this.plugins.push(new plugin(_this, $LG));
    });
  };

  LightGallery.prototype.validateLicense = function () {
    if (!this.settings.licenseKey) {
      console.error('Please provide a valid license key');
    } else if (this.settings.licenseKey === '0000-0000-000-0000') {      
    }
  };

  LightGallery.prototype.getSlideItem = function (index) {
    return $LG(this.getSlideItemId(index));
  };

  LightGallery.prototype.getSlideItemId = function (index) {
    return "#lg-item-" + this.lgId + "-" + index;
  };

  LightGallery.prototype.getIdName = function (id) {
    return id + "-" + this.lgId;
  };

  LightGallery.prototype.getElementById = function (id) {
    return $LG("#" + this.getIdName(id));
  };

  LightGallery.prototype.manageSingleSlideClassName = function () {
    if (this.galleryItems.length < 2) {
      this.outer.addClass('lg-single-item');
    } else {
      this.outer.removeClass('lg-single-item');
    }
  };

  LightGallery.prototype.buildStructure = function () {
    var _this = this;

    var container = this.$container && this.$container.get();

    if (container) {
      return;
    }

    var controls = '';
    var subHtmlCont = ''; // Create controls

    if (this.settings.controls) {
      controls = "<button type=\"button\" id=\"" + this.getIdName('lg-prev') + "\" aria-label=\"" + this.settings.strings['previousSlide'] + "\" class=\"lg-prev lg-icon\"> " + this.settings.prevHtml + " </button>\n                <button type=\"button\" id=\"" + this.getIdName('lg-next') + "\" aria-label=\"" + this.settings.strings['nextSlide'] + "\" class=\"lg-next lg-icon\"> " + this.settings.nextHtml + " </button>";
    }

    if (this.settings.appendSubHtmlTo !== '.lg-item') {
      subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
    }

    var addClasses = '';

    if (this.settings.allowMediaOverlap) {
      // Do not remove space before last single quote
      addClasses += 'lg-media-overlap ';
    }

    var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : '';
    var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : '';
    var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? 'lg-inline' : '');
    var closeIcon = this.settings.closable && this.settings.showCloseIcon ? "<button type=\"button\" aria-label=\"" + this.settings.strings['closeGallery'] + "\" id=\"" + this.getIdName('lg-close') + "\" class=\"lg-close lg-icon\"></button>" : '';
    var maximizeIcon = this.settings.showMaximizeIcon ? "<button type=\"button\" aria-label=\"" + this.settings.strings['toggleMaximize'] + "\" id=\"" + this.getIdName('lg-maximize') + "\" class=\"lg-maximize lg-icon\"></button>" : '';
    var template = "\n        <div class=\"" + containerClassName + "\" id=\"" + this.getIdName('lg-container') + "\" tabindex=\"-1\" aria-modal=\"true\" " + ariaLabelledby + " " + ariaDescribedby + " role=\"dialog\"\n        >\n            <div id=\"" + this.getIdName('lg-backdrop') + "\" class=\"lg-backdrop\"></div>\n\n            <div id=\"" + this.getIdName('lg-outer') + "\" class=\"lg-outer lg-use-css3 lg-css3 lg-hide-items " + addClasses + " \">\n\n              <div id=\"" + this.getIdName('lg-content') + "\" class=\"lg-content\">\n                <div id=\"" + this.getIdName('lg-inner') + "\" class=\"lg-inner\">\n                </div>\n                " + controls + "\n              </div>\n                <div id=\"" + this.getIdName('lg-toolbar') + "\" class=\"lg-toolbar lg-group\">\n                    " + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === '.lg-outer' ? subHtmlCont : '') + "\n                <div id=\"" + this.getIdName('lg-components') + "\" class=\"lg-components\">\n                    " + (this.settings.appendSubHtmlTo === '.lg-sub-html' ? subHtmlCont : '') + "\n                </div>\n            </div>\n        </div>\n        ";
    $LG(this.settings.container).append(template);

    if (document.body !== this.settings.container) {
      $LG(this.settings.container).css('position', 'relative');
    }

    this.outer = this.getElementById('lg-outer');
    this.$lgComponents = this.getElementById('lg-components');
    this.$backdrop = this.getElementById('lg-backdrop');
    this.$container = this.getElementById('lg-container');
    this.$inner = this.getElementById('lg-inner');
    this.$content = this.getElementById('lg-content');
    this.$toolbar = this.getElementById('lg-toolbar');
    this.$backdrop.css('transition-duration', this.settings.backdropDuration + 'ms');
    var outerClassNames = this.settings.mode + " ";
    this.manageSingleSlideClassName();

    if (this.settings.enableDrag) {
      outerClassNames += 'lg-grab ';
    }

    this.outer.addClass(outerClassNames);
    this.$inner.css('transition-timing-function', this.settings.easing);
    this.$inner.css('transition-duration', this.settings.speed + 'ms');

    if (this.settings.download) {
      this.$toolbar.append("<a id=\"" + this.getIdName('lg-download') + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"" + this.settings.strings['download'] + "\" download class=\"lg-download lg-icon\"></a>");
    }

    this.counter();
    $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function () {
      _this.refreshOnResize();
    });
    this.hideBars();
    this.manageCloseGallery();
    this.toggleMaximize();
    this.initModules();
  };

  LightGallery.prototype.refreshOnResize = function () {
    if (this.lgOpened) {
      var currentGalleryItem = this.galleryItems[this.index];
      var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
      this.mediaContainerPosition = this.getMediaContainerPosition();
      var _a = this.mediaContainerPosition,
          top_1 = _a.top,
          bottom = _a.bottom;
      this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);

      if (__slideVideoInfo) {
        this.resizeVideoSlide(this.index, this.currentImageSize);
      }

      if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
        var imgStyle = this.getDummyImgStyles(this.currentImageSize);
        this.outer.find('.lg-current .lg-dummy-img').first().attr('style', imgStyle);
      }

      this.LGel.trigger(lGEvents.containerResize);
    }
  };

  LightGallery.prototype.resizeVideoSlide = function (index, imageSize) {
    var lgVideoStyle = this.getVideoContStyle(imageSize);
    var currentSlide = this.getSlideItem(index);
    currentSlide.find('.lg-video-cont').attr('style', lgVideoStyle);
  };
  /**
   * Update slides dynamically.
   * Add, edit or delete slides dynamically when lightGallery is opened.
   * Modify the current gallery items and pass it via updateSlides method
   * @note
   * - Do not mutate existing lightGallery items directly.
   * - Always pass new list of gallery items
   * - You need to take care of thumbnails outside the gallery if any
   * - user this method only if you want to update slides when the gallery is opened. Otherwise, use `refresh()` method.
   * @param items Gallery items
   * @param index After the update operation, which slide gallery should navigate to
   * @category lGPublicMethods
   * @example
   * const plugin = lightGallery();
   *
   * // Adding slides dynamically
   * let galleryItems = [
   * // Access existing lightGallery items
   * // galleryItems are automatically generated internally from the gallery HTML markup
   * // or directly from galleryItems when dynamic gallery is used
   *   ...plugin.galleryItems,
   *     ...[
   *       {
   *         src: 'img/img-1.png',
   *           thumb: 'img/thumb1.png',
   *         },
   *     ],
   *   ];
   *   plugin.updateSlides(
   *     galleryItems,
   *     plugin.index,
   *   );
   *
   *
   * // Remove slides dynamically
   * galleryItems = JSON.parse(
   *   JSON.stringify(updateSlideInstance.galleryItems),
   * );
   * galleryItems.shift();
   * updateSlideInstance.updateSlides(galleryItems, 1);
   * @see <a href="/demos/update-slides/">Demo</a>
   */


  LightGallery.prototype.updateSlides = function (items, index) {
    if (this.index > items.length - 1) {
      this.index = items.length - 1;
    }

    if (items.length === 1) {
      this.index = 0;
    }

    if (!items.length) {
      this.closeGallery();
      return;
    }

    var currentSrc = this.galleryItems[index].src;
    this.galleryItems = items;
    this.updateControls();
    this.$inner.empty();
    this.currentItemsInDom = [];
    var _index = 0; // Find the current index based on source value of the slide

    this.galleryItems.some(function (galleryItem, itemIndex) {
      if (galleryItem.src === currentSrc) {
        _index = itemIndex;
        return true;
      }

      return false;
    });
    this.currentItemsInDom = this.organizeSlideItems(_index, -1);
    this.loadContent(_index, true);
    this.getSlideItem(_index).addClass('lg-current');
    this.index = _index;
    this.updateCurrentCounter(_index);
    this.LGel.trigger(lGEvents.updateSlides);
  }; // Get gallery items based on multiple conditions


  LightGallery.prototype.getItems = function () {
    // Gallery items
    this.items = [];

    if (!this.settings.dynamic) {
      if (this.settings.selector === 'this') {
        this.items.push(this.el);
      } else if (this.settings.selector) {
        if (typeof this.settings.selector === 'string') {
          if (this.settings.selectWithin) {
            var selectWithin = $LG(this.settings.selectWithin);
            this.items = selectWithin.find(this.settings.selector).get();
          } else {
            this.items = this.el.querySelectorAll(this.settings.selector);
          }
        } else {
          this.items = this.settings.selector;
        }
      } else {
        this.items = this.el.children;
      }

      return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
    } else {
      return this.settings.dynamicEl || [];
    }
  };

  LightGallery.prototype.shouldHideScrollbar = function () {
    return this.settings.hideScrollbar && document.body === this.settings.container;
  };

  LightGallery.prototype.hideScrollbar = function () {
    if (!this.shouldHideScrollbar()) {
      return;
    }

    this.bodyPaddingRight = parseFloat($LG('body').style().paddingRight);
    var bodyRect = document.documentElement.getBoundingClientRect();
    var scrollbarWidth = window.innerWidth - bodyRect.width;
    $LG(document.body).css('padding-right', scrollbarWidth + this.bodyPaddingRight + 'px');
    $LG(document.body).addClass('lg-overlay-open');
  };

  LightGallery.prototype.resetScrollBar = function () {
    if (!this.shouldHideScrollbar()) {
      return;
    }

    $LG(document.body).css('padding-right', this.bodyPaddingRight + 'px');
    $LG(document.body).removeClass('lg-overlay-open');
  };
  /**
   * Open lightGallery.
   * Open gallery with specific slide by passing index of the slide as parameter.
   * @category lGPublicMethods
   * @param {Number} index  - index of the slide
   * @param {HTMLElement} element - Which image lightGallery should zoom from
   *
   * @example
   * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
   * const dynamicGallery = lightGallery($dynamicGallery, {
   *     dynamic: true,
   *     dynamicEl: [
   *         {
   *              src: 'img/1.jpg',
   *              thumb: 'img/thumb-1.jpg',
   *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
   *         },
   *         ...
   *     ],
   * });
   * $dynamicGallery.addEventListener('click', function () {
   *     // Starts with third item.(Optional).
   *     // This is useful if you want use dynamic mode with
   *     // custom thumbnails (thumbnails outside gallery),
   *     dynamicGallery.openGallery(2);
   * });
   *
   */


  LightGallery.prototype.openGallery = function (index, element) {
    var _this = this;

    if (index === void 0) {
      index = this.settings.index;
    } // prevent accidental double execution


    if (this.lgOpened) return;
    this.lgOpened = true;
    this.outer.removeClass('lg-hide-items');
    this.hideScrollbar(); // Add display block, but still has opacity 0

    this.$container.addClass('lg-show');
    var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
    this.currentItemsInDom = itemsToBeInsertedToDom;
    var items = '';
    itemsToBeInsertedToDom.forEach(function (item) {
      items = items + ("<div id=\"" + item + "\" class=\"lg-item\"></div>");
    });
    this.$inner.append(items);
    this.addHtml(index);
    var transform = '';
    this.mediaContainerPosition = this.getMediaContainerPosition();
    var _a = this.mediaContainerPosition,
        top = _a.top,
        bottom = _a.bottom;

    if (!this.settings.allowMediaOverlap) {
      this.setMediaContainerPosition(top, bottom);
    }

    var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;

    if (this.zoomFromOrigin && element) {
      this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
      transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
    }

    if (!this.zoomFromOrigin || !transform) {
      this.outer.addClass(this.settings.startClass);
      this.getSlideItem(index).removeClass('lg-complete');
    }

    var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
    setTimeout(function () {
      _this.outer.addClass('lg-components-open');
    }, timeout);
    this.index = index;
    this.LGel.trigger(lGEvents.beforeOpen); // add class lg-current to remove initial transition

    this.getSlideItem(index).addClass('lg-current');
    this.lGalleryOn = false; // Store the current scroll top value to scroll back after closing the gallery..

    this.prevScrollTop = $LG(window).scrollTop();
    setTimeout(function () {
      // Need to check both zoomFromOrigin and transform values as we need to set set the
      // default opening animation if user missed to add the lg-size attribute
      if (_this.zoomFromOrigin && transform) {
        var currentSlide_1 = _this.getSlideItem(index);

        currentSlide_1.css('transform', transform);
        setTimeout(function () {
          currentSlide_1.addClass('lg-start-progress lg-start-end-progress').css('transition-duration', _this.settings.startAnimationDuration + 'ms');

          _this.outer.addClass('lg-zoom-from-image');
        });
        setTimeout(function () {
          currentSlide_1.css('transform', 'translate3d(0, 0, 0)');
        }, 100);
      }

      setTimeout(function () {
        _this.$backdrop.addClass('in');

        _this.$container.addClass('lg-show-in');
      }, 10);
      setTimeout(function () {
        if (_this.settings.trapFocus && document.body === _this.settings.container) {
          _this.trapFocus();
        }
      }, _this.settings.backdropDuration + 50); // lg-visible class resets gallery opacity to 1

      if (!_this.zoomFromOrigin || !transform) {
        setTimeout(function () {
          _this.outer.addClass('lg-visible');
        }, _this.settings.backdropDuration);
      } // initiate slide function


      _this.slide(index, false, false, false);

      _this.LGel.trigger(lGEvents.afterOpen);
    });

    if (document.body === this.settings.container) {
      $LG('html').addClass('lg-on');
    }
  };
  /**
   * Note - Changing the position of the media on every slide transition creates a flickering effect.
   * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
   * if you have dynamic captions for each media,
   * you can provide an appropriate height for the captions via allowMediaOverlap option
   */


  LightGallery.prototype.getMediaContainerPosition = function () {
    if (this.settings.allowMediaOverlap) {
      return {
        top: 0,
        bottom: 0
      };
    }

    var top = this.$toolbar.get().clientHeight || 0;
    var subHtml = this.outer.find('.lg-components .lg-sub-html').get();
    var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
    var thumbContainer = this.outer.find('.lg-thumb-outer').get();
    var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
    var bottom = thumbHeight + captionHeight;
    return {
      top: top,
      bottom: bottom
    };
  };

  LightGallery.prototype.setMediaContainerPosition = function (top, bottom) {
    if (top === void 0) {
      top = 0;
    }

    if (bottom === void 0) {
      bottom = 0;
    }

    this.$content.css('top', top + 'px').css('bottom', bottom + 'px');
  };

  LightGallery.prototype.hideBars = function () {
    var _this = this; // Hide controllers if mouse doesn't move for some period


    setTimeout(function () {
      _this.outer.removeClass('lg-hide-items');

      if (_this.settings.hideBarsDelay > 0) {
        _this.outer.on('mousemove.lg click.lg touchstart.lg', function () {
          _this.outer.removeClass('lg-hide-items');

          clearTimeout(_this.hideBarTimeout); // Timeout will be cleared on each slide movement also

          _this.hideBarTimeout = setTimeout(function () {
            _this.outer.addClass('lg-hide-items');
          }, _this.settings.hideBarsDelay);
        });

        _this.outer.trigger('mousemove.lg');
      }
    }, this.settings.showBarsAfter);
  };

  LightGallery.prototype.initPictureFill = function ($img) {
    if (this.settings.supportLegacyBrowser) {
      try {
        picturefill({
          elements: [$img.get()]
        });
      } catch (e) {
        console.warn('lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.');
      }
    }
  };
  /**
   *  @desc Create image counter
   *  Ex: 1/10
   */


  LightGallery.prototype.counter = function () {
    if (this.settings.counter) {
      var counterHtml = "<div class=\"lg-counter\" role=\"status\" aria-live=\"polite\">\n                <span id=\"" + this.getIdName('lg-counter-current') + "\" class=\"lg-counter-current\">" + (this.index + 1) + " </span> /\n                <span id=\"" + this.getIdName('lg-counter-all') + "\" class=\"lg-counter-all\">" + this.galleryItems.length + " </span></div>";
      this.outer.find(this.settings.appendCounterTo).append(counterHtml);
    }
  };
  /**
   *  @desc add sub-html into the slide
   *  @param {Number} index - index of the slide
   */


  LightGallery.prototype.addHtml = function (index) {
    var subHtml;
    var subHtmlUrl;

    if (this.galleryItems[index].subHtmlUrl) {
      subHtmlUrl = this.galleryItems[index].subHtmlUrl;
    } else {
      subHtml = this.galleryItems[index].subHtml;
    }

    if (!subHtmlUrl) {
      if (subHtml) {
        // get first letter of sub-html
        // if first letter starts with . or # get the html form the jQuery object
        var fL = subHtml.substring(0, 1);

        if (fL === '.' || fL === '#') {
          if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) {
            subHtml = $LG(this.items).eq(index).find(subHtml).first().html();
          } else {
            subHtml = $LG(subHtml).first().html();
          }
        }
      } else {
        subHtml = '';
      }
    }

    if (this.settings.appendSubHtmlTo !== '.lg-item') {
      if (subHtmlUrl) {
        this.outer.find('.lg-sub-html').load(subHtmlUrl);
      } else {
        this.outer.find('.lg-sub-html').html(subHtml);
      }
    } else {
      var currentSlide = $LG(this.getSlideItemId(index));

      if (subHtmlUrl) {
        currentSlide.load(subHtmlUrl);
      } else {
        currentSlide.append("<div class=\"lg-sub-html\">" + subHtml + "</div>");
      }
    } // Add lg-empty-html class if title doesn't exist


    if (typeof subHtml !== 'undefined' && subHtml !== null) {
      if (subHtml === '') {
        this.outer.find(this.settings.appendSubHtmlTo).addClass('lg-empty-html');
      } else {
        this.outer.find(this.settings.appendSubHtmlTo).removeClass('lg-empty-html');
      }
    }

    this.LGel.trigger(lGEvents.afterAppendSubHtml, {
      index: index
    });
  };
  /**
   *  @desc Preload slides
   *  @param {Number} index - index of the slide
   * @todo preload not working for the first slide, Also, should work for the first and last slide as well
   */


  LightGallery.prototype.preload = function (index) {
    for (var i = 1; i <= this.settings.preload; i++) {
      if (i >= this.galleryItems.length - index) {
        break;
      }

      this.loadContent(index + i, false);
    }

    for (var j = 1; j <= this.settings.preload; j++) {
      if (index - j < 0) {
        break;
      }

      this.loadContent(index - j, false);
    }
  };

  LightGallery.prototype.getDummyImgStyles = function (imageSize) {
    if (!imageSize) return '';
    return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
  };

  LightGallery.prototype.getVideoContStyle = function (imageSize) {
    if (!imageSize) return '';
    return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
  };

  LightGallery.prototype.getDummyImageContent = function ($currentSlide, index, alt) {
    var $currentItem;

    if (!this.settings.dynamic) {
      $currentItem = $LG(this.items).eq(index);
    }

    if ($currentItem) {
      var _dummyImgSrc = void 0;

      if (!this.settings.exThumbImage) {
        _dummyImgSrc = $currentItem.find('img').first().attr('src');
      } else {
        _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
      }

      if (!_dummyImgSrc) return '';
      var imgStyle = this.getDummyImgStyles(this.currentImageSize);
      var dummyImgContent = "<img " + alt + " style=\"" + imgStyle + "\" class=\"lg-dummy-img\" src=\"" + _dummyImgSrc + "\" />";
      $currentSlide.addClass('lg-first-slide');
      this.outer.addClass('lg-first-slide-loading');
      return dummyImgContent;
    }

    return '';
  };

  LightGallery.prototype.setImgMarkup = function (src, $currentSlide, index) {
    var currentGalleryItem = this.galleryItems[index];
    var alt = currentGalleryItem.alt,
        srcset = currentGalleryItem.srcset,
        sizes = currentGalleryItem.sizes,
        sources = currentGalleryItem.sources; // Use the thumbnail as dummy image which will be resized to actual image size and
    // displayed on top of actual image

    var imgContent = '';
    var altAttr = alt ? 'alt="' + alt + '"' : '';

    if (this.isFirstSlideWithZoomAnimation()) {
      imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
    } else {
      imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
    }

    var imgMarkup = "<picture class=\"lg-img-wrap\"> " + imgContent + "</picture>";
    $currentSlide.prepend(imgMarkup);
  };

  LightGallery.prototype.onSlideObjectLoad = function ($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
    var mediaObject = $slide.find('.lg-object').first();

    if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) {
      onLoad();
    } else {
      mediaObject.on('load.lg error.lg', function () {
        onLoad && onLoad();
      });
      mediaObject.on('error.lg', function () {
        onError && onError();
      });
    }
  };
  /**
   *
   * @param $el Current slide item
   * @param index
   * @param delay Delay is 0 except first time
   * @param speed Speed is same as delay, except it is 0 if gallery is opened via hash plugin
   * @param isFirstSlide
   */


  LightGallery.prototype.onLgObjectLoad = function (currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
    var _this = this;

    this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function () {
      _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
    }, function () {
      currentSlide.addClass('lg-complete lg-complete_');
      currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
    });
  };

  LightGallery.prototype.triggerSlideItemLoad = function ($currentSlide, index, delay, speed, isFirstSlide) {
    var _this = this;

    var currentGalleryItem = this.galleryItems[index]; // Adding delay for video slides without poster for better performance and user experience
    // Videos should start playing once once the gallery is completely loaded

    var _speed = isFirstSlide && this.getSlideType(currentGalleryItem) === 'video' && !currentGalleryItem.poster ? speed : 0;

    setTimeout(function () {
      $currentSlide.addClass('lg-complete lg-complete_');

      _this.LGel.trigger(lGEvents.slideItemLoad, {
        index: index,
        delay: delay || 0,
        isFirstSlide: isFirstSlide
      });
    }, _speed);
  };

  LightGallery.prototype.isFirstSlideWithZoomAnimation = function () {
    return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
  }; // Add video slideInfo


  LightGallery.prototype.addSlideVideoInfo = function (items) {
    var _this = this;

    items.forEach(function (element, index) {
      element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);

      if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) {
        element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
      }
    });
  };
  /**
   *  Load slide content into slide.
   *  This is used to load content into slides that is not visible too
   *  @param {Number} index - index of the slide.
   *  @param {Boolean} rec - if true call loadcontent() function again.
   */


  LightGallery.prototype.loadContent = function (index, rec) {
    var _this = this;

    var currentGalleryItem = this.galleryItems[index];
    var $currentSlide = $LG(this.getSlideItemId(index));
    var poster = currentGalleryItem.poster,
        srcset = currentGalleryItem.srcset,
        sizes = currentGalleryItem.sizes,
        sources = currentGalleryItem.sources;
    var src = currentGalleryItem.src;
    var video = currentGalleryItem.video;

    var _html5Video = video && typeof video === 'string' ? JSON.parse(video) : video;

    if (currentGalleryItem.responsive) {
      var srcDyItms = currentGalleryItem.responsive.split(',');
      src = utils.getResponsiveSrc(srcDyItms) || src;
    }

    var videoInfo = currentGalleryItem.__slideVideoInfo;
    var lgVideoStyle = '';
    var iframe = !!currentGalleryItem.iframe;
    var isFirstSlide = !this.lGalleryOn; // delay for adding complete class. it is 0 except first time.

    var delay = 0;

    if (isFirstSlide) {
      if (this.zoomFromOrigin && this.currentImageSize) {
        delay = this.settings.startAnimationDuration + 10;
      } else {
        delay = this.settings.backdropDuration + 10;
      }
    }

    if (!$currentSlide.hasClass('lg-loaded')) {
      if (videoInfo) {
        var _a = this.mediaContainerPosition,
            top_2 = _a.top,
            bottom = _a.bottom;
        var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
        lgVideoStyle = this.getVideoContStyle(videoSize);
      }

      if (iframe) {
        var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
        $currentSlide.prepend(markup);
      } else if (poster) {
        var dummyImg = '';
        var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;

        if (hasStartAnimation) {
          dummyImg = this.getDummyImageContent($currentSlide, index, '');
        }

        var markup = utils.getVideoPosterMarkup(poster, dummyImg || '', lgVideoStyle, this.settings.strings['playVideo'], videoInfo);
        $currentSlide.prepend(markup);
      } else if (videoInfo) {
        var markup = "<div class=\"lg-video-cont \" style=\"" + lgVideoStyle + "\"></div>";
        $currentSlide.prepend(markup);
      } else {
        this.setImgMarkup(src, $currentSlide, index);

        if (srcset || sources) {
          var $img = $currentSlide.find('.lg-object');
          this.initPictureFill($img);
        }
      }

      if (poster || videoInfo) {
        this.LGel.trigger(lGEvents.hasVideo, {
          index: index,
          src: src,
          html5Video: _html5Video,
          hasPoster: !!poster
        });
      }

      this.LGel.trigger(lGEvents.afterAppendSlide, {
        index: index
      });

      if (this.lGalleryOn && this.settings.appendSubHtmlTo === '.lg-item') {
        this.addHtml(index);
      }
    } // For first time add some delay for displaying the start animation.


    var _speed = 0; // Do not change the delay value because it is required for zoom plugin.
    // If gallery opened from direct url (hash) speed value should be 0

    if (delay && !$LG(document.body).hasClass('lg-from-hash')) {
      _speed = delay;
    } // Only for first slide and zoomFromOrigin is enabled


    if (this.isFirstSlideWithZoomAnimation()) {
      setTimeout(function () {
        $currentSlide.removeClass('lg-start-end-progress lg-start-progress').removeAttr('style');
      }, this.settings.startAnimationDuration + 100);

      if (!$currentSlide.hasClass('lg-loaded')) {
        setTimeout(function () {
          if (_this.getSlideType(currentGalleryItem) === 'image') {
            var alt = currentGalleryItem.alt;
            var altAttr = alt ? 'alt="' + alt + '"' : '';
            $currentSlide.find('.lg-img-wrap').append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));

            if (srcset || sources) {
              var $img = $currentSlide.find('.lg-object');

              _this.initPictureFill($img);
            }
          }

          if (_this.getSlideType(currentGalleryItem) === 'image' || _this.getSlideType(currentGalleryItem) === 'video' && poster) {
            _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false); // load remaining slides once the slide is completely loaded


            _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function () {
              _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
            }, function () {
              _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
            });
          }
        }, this.settings.startAnimationDuration + 100);
      }
    } // SLide content has been added to dom


    $currentSlide.addClass('lg-loaded');

    if (!this.isFirstSlideWithZoomAnimation() || this.getSlideType(currentGalleryItem) === 'video' && !poster) {
      this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
    } // When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling


    if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass('lg-complete_') && !this.lGalleryOn) {
      setTimeout(function () {
        $currentSlide.addClass('lg-complete');
      }, this.settings.backdropDuration);
    } // Content loaded
    // Need to set lGalleryOn before calling preload function


    this.lGalleryOn = true;

    if (rec === true) {
      if (!$currentSlide.hasClass('lg-complete_')) {
        $currentSlide.find('.lg-object').first().on('load.lg error.lg', function () {
          _this.preload(index);
        });
      } else {
        this.preload(index);
      }
    }
  };
  /**
   * @desc Remove dummy image content and load next slides
   * Called only for the first time if zoomFromOrigin animation is enabled
   * @param index
   * @param $currentSlide
   * @param speed
   */


  LightGallery.prototype.loadContentOnFirstSlideLoad = function (index, $currentSlide, speed) {
    var _this = this;

    setTimeout(function () {
      $currentSlide.find('.lg-dummy-img').remove();
      $currentSlide.removeClass('lg-first-slide');

      _this.outer.removeClass('lg-first-slide-loading');

      _this.isDummyImageRemoved = true;

      _this.preload(index);
    }, speed + 300);
  };

  LightGallery.prototype.getItemsToBeInsertedToDom = function (index, prevIndex, numberOfItems) {
    var _this = this;

    if (numberOfItems === void 0) {
      numberOfItems = 0;
    }

    var itemsToBeInsertedToDom = []; // Minimum 2 items should be there

    var possibleNumberOfItems = Math.max(numberOfItems, 3);
    possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
    var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;

    if (this.galleryItems.length <= 3) {
      this.galleryItems.forEach(function (_element, index) {
        itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
      });
      return itemsToBeInsertedToDom;
    }

    if (index < (this.galleryItems.length - 1) / 2) {
      for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
      }

      var numberOfExistingItems = itemsToBeInsertedToDom.length;

      for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
      }
    } else {
      for (var idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
      }

      var numberOfExistingItems = itemsToBeInsertedToDom.length;

      for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
      }
    }

    if (this.settings.loop) {
      if (index === this.galleryItems.length - 1) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
      } else if (index === 0) {
        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
      }
    }

    if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
      itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
    }

    return itemsToBeInsertedToDom;
  };

  LightGallery.prototype.organizeSlideItems = function (index, prevIndex) {
    var _this = this;

    var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
    itemsToBeInsertedToDom.forEach(function (item) {
      if (_this.currentItemsInDom.indexOf(item) === -1) {
        _this.$inner.append("<div id=\"" + item + "\" class=\"lg-item\"></div>");
      }
    });
    this.currentItemsInDom.forEach(function (item) {
      if (itemsToBeInsertedToDom.indexOf(item) === -1) {
        $LG("#" + item).remove();
      }
    });
    return itemsToBeInsertedToDom;
  };
  /**
   * Get previous index of the slide
   */


  LightGallery.prototype.getPreviousSlideIndex = function () {
    var prevIndex = 0;

    try {
      var currentItemId = this.outer.find('.lg-current').first().attr('id');
      prevIndex = parseInt(currentItemId.split('-')[3]) || 0;
    } catch (error) {
      prevIndex = 0;
    }

    return prevIndex;
  };

  LightGallery.prototype.setDownloadValue = function (index) {
    if (this.settings.download) {
      var currentGalleryItem = this.galleryItems[index];
      var hideDownloadBtn = currentGalleryItem.downloadUrl === false || currentGalleryItem.downloadUrl === 'false';

      if (hideDownloadBtn) {
        this.outer.addClass('lg-hide-download');
      } else {
        var $download = this.getElementById('lg-download');
        this.outer.removeClass('lg-hide-download');
        $download.attr('href', currentGalleryItem.downloadUrl || currentGalleryItem.src);

        if (currentGalleryItem.download) {
          $download.attr('download', currentGalleryItem.download);
        }
      }
    }
  };

  LightGallery.prototype.makeSlideAnimation = function (direction, currentSlideItem, previousSlideItem) {
    var _this = this;

    if (this.lGalleryOn) {
      previousSlideItem.addClass('lg-slide-progress');
    }

    setTimeout(function () {
      // remove all transitions
      _this.outer.addClass('lg-no-trans');

      _this.outer.find('.lg-item').removeClass('lg-prev-slide lg-next-slide');

      if (direction === 'prev') {
        //prevslide
        currentSlideItem.addClass('lg-prev-slide');
        previousSlideItem.addClass('lg-next-slide');
      } else {
        // next slide
        currentSlideItem.addClass('lg-next-slide');
        previousSlideItem.addClass('lg-prev-slide');
      } // give 50 ms for browser to add/remove class


      setTimeout(function () {
        _this.outer.find('.lg-item').removeClass('lg-current');

        currentSlideItem.addClass('lg-current'); // reset all transitions

        _this.outer.removeClass('lg-no-trans');
      }, 50);
    }, this.lGalleryOn ? this.settings.slideDelay : 0);
  };
  /**
   * Goto a specific slide.
   * @param {Number} index - index of the slide
   * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
   * @param {Boolean} fromThumb - true if slide function called via thumbnail click
   * @param {String} direction - Direction of the slide(next/prev)
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  // to go to 3rd slide
   *  plugin.slide(2);
   *
   */


  LightGallery.prototype.slide = function (index, fromTouch, fromThumb, direction) {
    var _this = this;

    var prevIndex = this.getPreviousSlideIndex();
    this.currentItemsInDom = this.organizeSlideItems(index, prevIndex); // Prevent multiple call, Required for hsh plugin

    if (this.lGalleryOn && prevIndex === index) {
      return;
    }

    var numberOfGalleryItems = this.galleryItems.length;

    if (!this.lgBusy) {
      if (this.settings.counter) {
        this.updateCurrentCounter(index);
      }

      var currentSlideItem = this.getSlideItem(index);
      var previousSlideItem_1 = this.getSlideItem(prevIndex);
      var currentGalleryItem = this.galleryItems[index];
      var videoInfo = currentGalleryItem.__slideVideoInfo;
      this.outer.attr('data-lg-slide-type', this.getSlideType(currentGalleryItem));
      this.setDownloadValue(index);

      if (videoInfo) {
        var _a = this.mediaContainerPosition,
            top_3 = _a.top,
            bottom = _a.bottom;
        var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
        this.resizeVideoSlide(index, videoSize);
      }

      this.LGel.trigger(lGEvents.beforeSlide, {
        prevIndex: prevIndex,
        index: index,
        fromTouch: !!fromTouch,
        fromThumb: !!fromThumb
      });
      this.lgBusy = true;
      clearTimeout(this.hideBarTimeout);
      this.arrowDisable(index);

      if (!direction) {
        if (index < prevIndex) {
          direction = 'prev';
        } else if (index > prevIndex) {
          direction = 'next';
        }
      }

      if (!fromTouch) {
        this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
      } else {
        this.outer.find('.lg-item').removeClass('lg-prev-slide lg-current lg-next-slide');
        var touchPrev = void 0;
        var touchNext = void 0;

        if (numberOfGalleryItems > 2) {
          touchPrev = index - 1;
          touchNext = index + 1;

          if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
            // next slide
            touchNext = 0;
            touchPrev = numberOfGalleryItems - 1;
          } else if (index === numberOfGalleryItems - 1 && prevIndex === 0) {
            // prev slide
            touchNext = 0;
            touchPrev = numberOfGalleryItems - 1;
          }
        } else {
          touchPrev = 0;
          touchNext = 1;
        }

        if (direction === 'prev') {
          this.getSlideItem(touchNext).addClass('lg-next-slide');
        } else {
          this.getSlideItem(touchPrev).addClass('lg-prev-slide');
        }

        currentSlideItem.addClass('lg-current');
      } // Do not put load content in set timeout as it needs to load immediately when the gallery is opened


      if (!this.lGalleryOn) {
        this.loadContent(index, true);
      } else {
        setTimeout(function () {
          _this.loadContent(index, true); // Add title if this.settings.appendSubHtmlTo === lg-sub-html


          if (_this.settings.appendSubHtmlTo !== '.lg-item') {
            _this.addHtml(index);
          }
        }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
      }

      setTimeout(function () {
        _this.lgBusy = false;
        previousSlideItem_1.removeClass('lg-slide-progress');

        _this.LGel.trigger(lGEvents.afterSlide, {
          prevIndex: prevIndex,
          index: index,
          fromTouch: fromTouch,
          fromThumb: fromThumb
        });
      }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
    }

    this.index = index;
  };

  LightGallery.prototype.updateCurrentCounter = function (index) {
    this.getElementById('lg-counter-current').html(index + 1 + '');
  };

  LightGallery.prototype.updateCounterTotal = function () {
    this.getElementById('lg-counter-all').html(this.galleryItems.length + '');
  };

  LightGallery.prototype.getSlideType = function (item) {
    if (item.__slideVideoInfo) {
      return 'video';
    } else if (item.iframe) {
      return 'iframe';
    } else {
      return 'image';
    }
  };

  LightGallery.prototype.touchMove = function (startCoords, endCoords, e) {
    var distanceX = endCoords.pageX - startCoords.pageX;
    var distanceY = endCoords.pageY - startCoords.pageY;
    var allowSwipe = false;

    if (this.swipeDirection) {
      allowSwipe = true;
    } else {
      if (Math.abs(distanceX) > 15) {
        this.swipeDirection = 'horizontal';
        allowSwipe = true;
      } else if (Math.abs(distanceY) > 15) {
        this.swipeDirection = 'vertical';
        allowSwipe = true;
      }
    }

    if (!allowSwipe) {
      return;
    }

    var $currentSlide = this.getSlideItem(this.index);

    if (this.swipeDirection === 'horizontal') {
      e === null || e === void 0 ? void 0 : e.preventDefault(); // reset opacity and transition duration

      this.outer.addClass('lg-dragging'); // move current slide

      this.setTranslate($currentSlide, distanceX, 0); // move next and prev slide with current slide

      var width = $currentSlide.get().offsetWidth;
      var slideWidthAmount = width * 15 / 100;
      var gutter = slideWidthAmount - Math.abs(distanceX * 10 / 100);
      this.setTranslate(this.outer.find('.lg-prev-slide').first(), -width + distanceX - gutter, 0);
      this.setTranslate(this.outer.find('.lg-next-slide').first(), width + distanceX + gutter, 0);
    } else if (this.swipeDirection === 'vertical') {
      if (this.settings.swipeToClose) {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        this.$container.addClass('lg-dragging-vertical');
        var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
        this.$backdrop.css('opacity', opacity);
        var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
        this.setTranslate($currentSlide, 0, distanceY, scale, scale);

        if (Math.abs(distanceY) > 100) {
          this.outer.addClass('lg-hide-items').removeClass('lg-components-open');
        }
      }
    }
  };

  LightGallery.prototype.touchEnd = function (endCoords, startCoords, event) {
    var _this = this;

    var distance; // keep slide animation for any mode while dragg/swipe

    if (this.settings.mode !== 'lg-slide') {
      this.outer.addClass('lg-slide');
    } // set transition duration


    setTimeout(function () {
      _this.$container.removeClass('lg-dragging-vertical');

      _this.outer.removeClass('lg-dragging lg-hide-items').addClass('lg-components-open');

      var triggerClick = true;

      if (_this.swipeDirection === 'horizontal') {
        distance = endCoords.pageX - startCoords.pageX;
        var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);

        if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
          _this.goToNextSlide(true);

          triggerClick = false;
        } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
          _this.goToPrevSlide(true);

          triggerClick = false;
        }
      } else if (_this.swipeDirection === 'vertical') {
        distance = Math.abs(endCoords.pageY - startCoords.pageY);

        if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
          _this.closeGallery();

          return;
        } else {
          _this.$backdrop.css('opacity', 1);
        }
      }

      _this.outer.find('.lg-item').removeAttr('style');

      if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
        // Trigger click if distance is less than 5 pix
        var target = $LG(event.target);

        if (_this.isPosterElement(target)) {
          _this.LGel.trigger(lGEvents.posterClick);
        }
      }

      _this.swipeDirection = undefined;
    }); // remove slide class once drag/swipe is completed if mode is not slide

    setTimeout(function () {
      if (!_this.outer.hasClass('lg-dragging') && _this.settings.mode !== 'lg-slide') {
        _this.outer.removeClass('lg-slide');
      }
    }, this.settings.speed + 100);
  };

  LightGallery.prototype.enableSwipe = function () {
    var _this = this;

    var startCoords = {};
    var endCoords = {};
    var isMoved = false;
    var isSwiping = false;

    if (this.settings.enableSwipe) {
      this.$inner.on('touchstart.lg', function (e) {
        _this.dragOrSwipeEnabled = true;

        var $item = _this.getSlideItem(_this.index);

        if (($LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) && !_this.outer.hasClass('lg-zoomed') && !_this.lgBusy && e.targetTouches.length === 1) {
          isSwiping = true;
          _this.touchAction = 'swipe';

          _this.manageSwipeClass();

          startCoords = {
            pageX: e.targetTouches[0].pageX,
            pageY: e.targetTouches[0].pageY
          };
        }
      });
      this.$inner.on('touchmove.lg', function (e) {
        if (isSwiping && _this.touchAction === 'swipe' && e.targetTouches.length === 1) {
          endCoords = {
            pageX: e.targetTouches[0].pageX,
            pageY: e.targetTouches[0].pageY
          };

          _this.touchMove(startCoords, endCoords, e);

          isMoved = true;
        }
      });
      this.$inner.on('touchend.lg', function (event) {
        if (_this.touchAction === 'swipe') {
          if (isMoved) {
            isMoved = false;

            _this.touchEnd(endCoords, startCoords, event);
          } else if (isSwiping) {
            var target = $LG(event.target);

            if (_this.isPosterElement(target)) {
              _this.LGel.trigger(lGEvents.posterClick);
            }
          }

          _this.touchAction = undefined;
          isSwiping = false;
        }
      });
    }
  };

  LightGallery.prototype.enableDrag = function () {
    var _this = this;

    var startCoords = {};
    var endCoords = {};
    var isDraging = false;
    var isMoved = false;

    if (this.settings.enableDrag) {
      this.outer.on('mousedown.lg', function (e) {
        _this.dragOrSwipeEnabled = true;

        var $item = _this.getSlideItem(_this.index);

        if ($LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) {
          if (!_this.outer.hasClass('lg-zoomed') && !_this.lgBusy) {
            e.preventDefault();

            if (!_this.lgBusy) {
              _this.manageSwipeClass();

              startCoords = {
                pageX: e.pageX,
                pageY: e.pageY
              };
              isDraging = true; // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723

              _this.outer.get().scrollLeft += 1;
              _this.outer.get().scrollLeft -= 1; // *

              _this.outer.removeClass('lg-grab').addClass('lg-grabbing');

              _this.LGel.trigger(lGEvents.dragStart);
            }
          }
        }
      });
      $LG(window).on("mousemove.lg.global" + this.lgId, function (e) {
        if (isDraging && _this.lgOpened) {
          isMoved = true;
          endCoords = {
            pageX: e.pageX,
            pageY: e.pageY
          };

          _this.touchMove(startCoords, endCoords);

          _this.LGel.trigger(lGEvents.dragMove);
        }
      });
      $LG(window).on("mouseup.lg.global" + this.lgId, function (event) {
        if (!_this.lgOpened) {
          return;
        }

        var target = $LG(event.target);

        if (isMoved) {
          isMoved = false;

          _this.touchEnd(endCoords, startCoords, event);

          _this.LGel.trigger(lGEvents.dragEnd);
        } else if (_this.isPosterElement(target)) {
          _this.LGel.trigger(lGEvents.posterClick);
        } // Prevent execution on click


        if (isDraging) {
          isDraging = false;

          _this.outer.removeClass('lg-grabbing').addClass('lg-grab');
        }
      });
    }
  };

  LightGallery.prototype.triggerPosterClick = function () {
    var _this = this;

    this.$inner.on('click.lg', function (event) {
      if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) {
        _this.LGel.trigger(lGEvents.posterClick);
      }
    });
  };

  LightGallery.prototype.manageSwipeClass = function () {
    var _touchNext = this.index + 1;

    var _touchPrev = this.index - 1;

    if (this.settings.loop && this.galleryItems.length > 2) {
      if (this.index === 0) {
        _touchPrev = this.galleryItems.length - 1;
      } else if (this.index === this.galleryItems.length - 1) {
        _touchNext = 0;
      }
    }

    this.outer.find('.lg-item').removeClass('lg-next-slide lg-prev-slide');

    if (_touchPrev > -1) {
      this.getSlideItem(_touchPrev).addClass('lg-prev-slide');
    }

    this.getSlideItem(_touchNext).addClass('lg-next-slide');
  };
  /**
   * Go to next slide
   * @param {Boolean} fromTouch - true if slide function called via touch event
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  plugin.goToNextSlide();
   * @see <a href="/demos/methods/">Demo</a>
   */


  LightGallery.prototype.goToNextSlide = function (fromTouch) {
    var _this = this;

    var _loop = this.settings.loop;

    if (fromTouch && this.galleryItems.length < 3) {
      _loop = false;
    }

    if (!this.lgBusy) {
      if (this.index + 1 < this.galleryItems.length) {
        this.index++;
        this.LGel.trigger(lGEvents.beforeNextSlide, {
          index: this.index
        });
        this.slide(this.index, !!fromTouch, false, 'next');
      } else {
        if (_loop) {
          this.index = 0;
          this.LGel.trigger(lGEvents.beforeNextSlide, {
            index: this.index
          });
          this.slide(this.index, !!fromTouch, false, 'next');
        } else if (this.settings.slideEndAnimation && !fromTouch) {
          this.outer.addClass('lg-right-end');
          setTimeout(function () {
            _this.outer.removeClass('lg-right-end');
          }, 400);
        }
      }
    }
  };
  /**
   * Go to previous slides
   * @param {Boolean} fromTouch - true if slide function called via touch event
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery({});
   *  plugin.goToPrevSlide();
   * @see <a href="/demos/methods/">Demo</a>
   *
   */


  LightGallery.prototype.goToPrevSlide = function (fromTouch) {
    var _this = this;

    var _loop = this.settings.loop;

    if (fromTouch && this.galleryItems.length < 3) {
      _loop = false;
    }

    if (!this.lgBusy) {
      if (this.index > 0) {
        this.index--;
        this.LGel.trigger(lGEvents.beforePrevSlide, {
          index: this.index,
          fromTouch: fromTouch
        });
        this.slide(this.index, !!fromTouch, false, 'prev');
      } else {
        if (_loop) {
          this.index = this.galleryItems.length - 1;
          this.LGel.trigger(lGEvents.beforePrevSlide, {
            index: this.index,
            fromTouch: fromTouch
          });
          this.slide(this.index, !!fromTouch, false, 'prev');
        } else if (this.settings.slideEndAnimation && !fromTouch) {
          this.outer.addClass('lg-left-end');
          setTimeout(function () {
            _this.outer.removeClass('lg-left-end');
          }, 400);
        }
      }
    }
  };

  LightGallery.prototype.keyPress = function () {
    var _this = this;

    $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
      if (_this.lgOpened && _this.settings.escKey === true && e.keyCode === 27) {
        e.preventDefault();

        if (_this.settings.allowMediaOverlap && _this.outer.hasClass('lg-can-toggle') && _this.outer.hasClass('lg-components-open')) {
          _this.outer.removeClass('lg-components-open');
        } else {
          _this.closeGallery();
        }
      }

      if (_this.lgOpened && _this.galleryItems.length > 1) {
        if (e.keyCode === 37) {
          e.preventDefault();

          _this.goToPrevSlide();
        }

        if (e.keyCode === 39) {
          e.preventDefault();

          _this.goToNextSlide();
        }
      }
    });
  };

  LightGallery.prototype.arrow = function () {
    var _this = this;

    this.getElementById('lg-prev').on('click.lg', function () {
      _this.goToPrevSlide();
    });
    this.getElementById('lg-next').on('click.lg', function () {
      _this.goToNextSlide();
    });
  };

  LightGallery.prototype.arrowDisable = function (index) {
    // Disable arrows if settings.hideControlOnEnd is true
    if (!this.settings.loop && this.settings.hideControlOnEnd) {
      var $prev = this.getElementById('lg-prev');
      var $next = this.getElementById('lg-next');

      if (index + 1 === this.galleryItems.length) {
        $next.attr('disabled', 'disabled').addClass('disabled');
      } else {
        $next.removeAttr('disabled').removeClass('disabled');
      }

      if (index === 0) {
        $prev.attr('disabled', 'disabled').addClass('disabled');
      } else {
        $prev.removeAttr('disabled').removeClass('disabled');
      }
    }
  };

  LightGallery.prototype.setTranslate = function ($el, xValue, yValue, scaleX, scaleY) {
    if (scaleX === void 0) {
      scaleX = 1;
    }

    if (scaleY === void 0) {
      scaleY = 1;
    }

    $el.css('transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px) scale3d(' + scaleX + ', ' + scaleY + ', 1)');
  };

  LightGallery.prototype.mousewheel = function () {
    var _this = this;

    var lastCall = 0;
    this.outer.on('wheel.lg', function (e) {
      if (!e.deltaY || _this.galleryItems.length < 2) {
        return;
      }

      e.preventDefault();
      var now = new Date().getTime();

      if (now - lastCall < 1000) {
        return;
      }

      lastCall = now;

      if (e.deltaY > 0) {
        _this.goToNextSlide();
      } else if (e.deltaY < 0) {
        _this.goToPrevSlide();
      }
    });
  };

  LightGallery.prototype.isSlideElement = function (target) {
    return target.hasClass('lg-outer') || target.hasClass('lg-item') || target.hasClass('lg-img-wrap');
  };

  LightGallery.prototype.isPosterElement = function (target) {
    var playButton = this.getSlideItem(this.index).find('.lg-video-play-button').get();
    return target.hasClass('lg-video-poster') || target.hasClass('lg-video-play-button') || playButton && playButton.contains(target.get());
  };
  /**
   * Maximize minimize inline gallery.
   * @category lGPublicMethods
   */


  LightGallery.prototype.toggleMaximize = function () {
    var _this = this;

    this.getElementById('lg-maximize').on('click.lg', function () {
      _this.$container.toggleClass('lg-inline');

      _this.refreshOnResize();
    });
  };

  LightGallery.prototype.invalidateItems = function () {
    for (var index = 0; index < this.items.length; index++) {
      var element = this.items[index];
      var $element = $LG(element);
      $element.off("click.lgcustom-item-" + $element.attr('data-lg-id'));
    }
  };

  LightGallery.prototype.trapFocus = function () {
    var _this = this;

    this.$container.get().focus({
      preventScroll: true
    });
    $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
      if (!_this.lgOpened) {
        return;
      }

      var isTabPressed = e.key === 'Tab' || e.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      var focusableEls = utils.getFocusableElements(_this.$container.get());
      var firstFocusableEl = focusableEls[0];
      var lastFocusableEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  };

  LightGallery.prototype.manageCloseGallery = function () {
    var _this = this;

    if (!this.settings.closable) return;
    var mousedown = false;
    this.getElementById('lg-close').on('click.lg', function () {
      _this.closeGallery();
    });

    if (this.settings.closeOnTap) {
      // If you drag the slide and release outside gallery gets close on chrome
      // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
      this.outer.on('mousedown.lg', function (e) {
        var target = $LG(e.target);

        if (_this.isSlideElement(target)) {
          mousedown = true;
        } else {
          mousedown = false;
        }
      });
      this.outer.on('mousemove.lg', function () {
        mousedown = false;
      });
      this.outer.on('mouseup.lg', function (e) {
        var target = $LG(e.target);

        if (_this.isSlideElement(target) && mousedown) {
          if (!_this.outer.hasClass('lg-dragging')) {
            _this.closeGallery();
          }
        }
      });
    }
  };
  /**
   * Close lightGallery if it is opened.
   *
   * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
   * @return returns the estimated time to close gallery completely including the close animation duration
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  plugin.closeGallery();
   *
   */


  LightGallery.prototype.closeGallery = function (force) {
    var _this = this;

    if (!this.lgOpened || !this.settings.closable && !force) {
      return 0;
    }

    this.LGel.trigger(lGEvents.beforeClose);

    if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) {
      $LG(window).scrollTop(this.prevScrollTop);
    }

    var currentItem = this.items[this.index];
    var transform;

    if (this.zoomFromOrigin && currentItem) {
      var _a = this.mediaContainerPosition,
          top_4 = _a.top,
          bottom = _a.bottom;
      var _b = this.galleryItems[this.index],
          __slideVideoInfo = _b.__slideVideoInfo,
          poster = _b.poster;
      var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
      transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
    }

    if (this.zoomFromOrigin && transform) {
      this.outer.addClass('lg-closing lg-zoom-from-image');
      this.getSlideItem(this.index).addClass('lg-start-end-progress').css('transition-duration', this.settings.startAnimationDuration + 'ms').css('transform', transform);
    } else {
      this.outer.addClass('lg-hide-items'); // lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
      // If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts

      this.outer.removeClass('lg-zoom-from-image');
    } // Unbind all events added by lightGallery
    // @todo
    //this.$el.off('.lg.tm');


    this.destroyModules();
    this.lGalleryOn = false;
    this.isDummyImageRemoved = false;
    this.zoomFromOrigin = this.settings.zoomFromOrigin;
    clearTimeout(this.hideBarTimeout);
    this.hideBarTimeout = false;
    $LG('html').removeClass('lg-on');
    this.outer.removeClass('lg-visible lg-components-open'); // Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.

    this.$backdrop.removeClass('in').css('opacity', 0);
    var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
    this.$container.removeClass('lg-show-in'); // Once the closign animation is completed and gallery is invisible

    setTimeout(function () {
      if (_this.zoomFromOrigin && transform) {
        _this.outer.removeClass('lg-zoom-from-image');
      }

      _this.$container.removeClass('lg-show'); // Reset scrollbar


      _this.resetScrollBar(); // Need to remove inline opacity as it is used in the stylesheet as well


      _this.$backdrop.removeAttr('style').css('transition-duration', _this.settings.backdropDuration + 'ms');

      _this.outer.removeClass("lg-closing " + _this.settings.startClass);

      _this.getSlideItem(_this.index).removeClass('lg-start-end-progress');

      _this.$inner.empty();

      if (_this.lgOpened) {
        _this.LGel.trigger(lGEvents.afterClose, {
          instance: _this
        });
      }

      if (_this.$container.get()) {
        _this.$container.get().blur();
      }

      _this.lgOpened = false;
    }, removeTimeout + 100);
    return removeTimeout + 100;
  };

  LightGallery.prototype.initModules = function () {
    this.plugins.forEach(function (module) {
      try {
        module.init();
      } catch (err) {
        console.warn("lightGallery:- make sure lightGallery module is properly initiated");
      }
    });
  };

  LightGallery.prototype.destroyModules = function (destroy) {
    this.plugins.forEach(function (module) {
      try {
        if (destroy) {
          module.destroy();
        } else {
          module.closeGallery && module.closeGallery();
        }
      } catch (err) {
        console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
      }
    });
  };
  /**
   * Refresh lightGallery with new set of children.
   *
   * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
   *
   * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
   * @see <a href="/demos/dynamic-mode/">Demo</a>
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  // Delete or add children, then call
   *  plugin.refresh();
   *
   */


  LightGallery.prototype.refresh = function (galleryItems) {
    if (!this.settings.dynamic) {
      this.invalidateItems();
    }

    if (galleryItems) {
      this.galleryItems = galleryItems;
    } else {
      this.galleryItems = this.getItems();
    }

    this.updateControls();
    this.openGalleryOnItemClick();
    this.LGel.trigger(lGEvents.updateSlides);
  };

  LightGallery.prototype.updateControls = function () {
    this.addSlideVideoInfo(this.galleryItems);
    this.updateCounterTotal();
    this.manageSingleSlideClassName();
  };
  /**
   * Destroy lightGallery.
   * Destroy lightGallery and its plugin instances completely
   *
   * @description This method also calls CloseGallery function internally. Returns the time takes to completely close and destroy the instance.
   * In case if you want to re-initialize lightGallery right after destroying it, initialize it only once the destroy process is completed.
   * You can use refresh method most of the times.
   * @category lGPublicMethods
   * @example
   *  const plugin = lightGallery();
   *  plugin.destroy();
   *
   */


  LightGallery.prototype.destroy = function () {
    var _this = this;

    var closeTimeout = this.closeGallery(true);
    setTimeout(function () {
      _this.destroyModules(true);

      if (!_this.settings.dynamic) {
        _this.invalidateItems();
      }

      $LG(window).off(".lg.global" + _this.lgId);

      _this.LGel.off('.lg');

      _this.$container.remove();
    }, closeTimeout);
    return closeTimeout;
  };

  return LightGallery;
}();

function lightGallery(el, options) {
  return new LightGallery(el, options);
}

/* harmony default export */ var lightgallery_es5 = (lightGallery);
;// CONCATENATED MODULE: ./src/js/module/popup.js


var popup = function popup() {
  var popupBtn = document.querySelectorAll("[data-popup]");
  var body = document.querySelector("body");
  var popupWindow = document.querySelectorAll(".popup");

  var popupClose = function popupClose() {
    popupWindow.forEach(function (popup) {
      if (popup.classList.contains("popup__show")) {
        popup.classList.remove("popup__show");
      }
    });
  };

  popupBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      popupClose();
      var popupWindow = document.querySelector(btn.getAttribute("data-popup")); // const galleries = popupWindow.querySelector("[data-gallery]");

      var popupWindowWrapper = popupWindow.querySelector(".popup__wrapper");
      var popupWindowClose = popupWindow.querySelector(".popup__close");
      var btnCaptionValue = btn.getAttribute("data-caption");
      var videoCode = btn.getAttribute("data-youtube");
      var imgSrc = btn.getAttribute("data-src");
      var videoPlace = popupWindow.querySelector("[data-youtube-place]");

      if (btnCaptionValue) {
        var popupTitle = popupWindow.querySelector(".popup__title");
        popupTitle.textContent = btnCaptionValue;
      }

      if (videoCode) {
        videoPlace.innerHTML = "<iframe src=\"https://www.youtube.com/embed/".concat(videoCode, "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>");
      } else if (imgSrc) {
        videoPlace.innerHTML = "<img\n        src=\"".concat(imgSrc, "\"\n        alt=\"Image\"\n        class=\"popup-zoom__img\"\n      />");
      }

      popupWindow.classList.add("popup__show");
      body.classList.add("_lock");
      popupWindow.addEventListener("click", function (e) {
        var inputs = popupWindow.querySelectorAll("input");

        if (e.target == popupWindowWrapper || e.target == popupWindowClose) {
          popupWindow.classList.remove("popup__show");
          body.classList.remove("_lock");

          if (videoPlace) {
            videoPlace.innerHTML = "";
          }

          inputs.forEach(function (input) {
            input.value = "";
          });
        } else {
          return;
        }
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        var openPopup = document.querySelector(".popup__show");
        var inputs = document.querySelectorAll(".popup input");

        if (openPopup) {
          openPopup.classList.remove("popup__show");
          body.classList.remove("_lock");
          inputs.forEach(function (input) {
            input.value = "";
          });
        }
      }
    });
  });
};

/* harmony default export */ var module_popup = (popup);
;// CONCATENATED MODULE: ./src/js/module/zoomSlider.js
var zoomSlider = function zoomSlider() {
  var slider = document.querySelector(".zoom-slider");
  var slides = slider.querySelectorAll(".zoom-slider__slide");
  var sliderButtonPrev = slider.querySelector(".zoom-slider__button--prev");
  var sliderButtonNext = slider.querySelector(".zoom-slider__button--next");
  var currentIndex = 1;

  var slidesHide = function slidesHide() {
    slides.forEach(function (slide) {
      slide.classList.remove('_show');
    });
  };

  var nextSlide = function nextSlide() {
    slides.forEach(function (slide, index) {
      if (slide.classList.contains("_show")) {
        currentIndex = index;
      }
    });

    if (slides.length - 1 > currentIndex) {
      slides[currentIndex].classList.remove('_show');
      slides[currentIndex + 1].classList.add('_show');
    } else {
      slidesHide();
      slides[0].classList.add('_show');
    }
  };

  var prevSlide = function prevSlide() {
    slides.forEach(function (slide, index) {
      if (slide.classList.contains("_show")) {
        currentIndex = index;
      }
    });

    if (0 < currentIndex) {
      slides[currentIndex].classList.remove('_show');
      slides[currentIndex - 1].classList.add('_show');
    } else {
      slidesHide();
      slides[slides.length - 1].classList.add('_show');
    }
  };

  sliderButtonNext.addEventListener('click', function () {
    nextSlide();
  });
  sliderButtonPrev.addEventListener('click', function () {
    prevSlide();
  });
};

/* harmony default export */ var module_zoomSlider = (zoomSlider);
;// CONCATENATED MODULE: ./src/js/module/tabs.js
var tabs = function tabs() {
  var tabsButton = document.querySelectorAll("[data-tab-btn] > button");
  var tabsContainer = document.querySelectorAll("[data-tab-content] > div");

  var removeActive = function removeActive() {
    tabsButton.forEach(function (item) {
      if (item.classList.contains("_active")) {
        item.classList.remove("_active");
      }
    });
    tabsContainer.forEach(function (item) {
      if (item.classList.contains("_active")) {
        item.classList.remove("_active");
      }
    });
  };

  tabsButton.forEach(function (btn, index) {
    btn.addEventListener("click", function (e) {
      removeActive();
      btn.classList.add("_active");
      tabsContainer[index].classList.add("_active");
    });
  });
  tabsContainer.forEach(function (container, index) {
    container.addEventListener("click", function (e) {
      if (container.classList.contains("_active")) {
        var buttonNext = container.querySelector("[data-next]");
        var buttonPrev = container.querySelector("[data-prev]");

        if (buttonNext && e.target == buttonNext) {
          removeActive();
          tabsButton[index + 1].classList.add("_active");
          tabsContainer[index + 1].classList.add("_active");
        } else if (buttonPrev && e.target == buttonPrev) {
          removeActive();
          tabsButton[index - 1].classList.add("_active");
          tabsContainer[index - 1].classList.add("_active");
        }
      }
    });
  });
};

/* harmony default export */ var module_tabs = (tabs);
// EXTERNAL MODULE: ./node_modules/inputmask/dist/inputmask.js
var inputmask = __webpack_require__(687);
var inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);
;// CONCATENATED MODULE: ./src/js/libs/mask.js


var mask = function mask() {
  var telInput = document.querySelectorAll("input[type='tel']");
  var telMask = new (inputmask_default())("+7(999)999-99-99");
  telInput.forEach(function (input) {
    telMask.mask(input);
  });
};

/* harmony default export */ var libs_mask = (mask);
;// CONCATENATED MODULE: ./src/js/module/customSlider.js
var customSlider = function customSlider() {
  var sliderButton = document.querySelectorAll(".our-team-mini__card");
  var slides = document.querySelectorAll(".our-team-slider__slide");
  var buttonPrev = document.querySelector(".our-team-slider__button.our-team-slider__button--prev");
  var buttonNext = document.querySelector(".our-team-slider__button.our-team-slider__button--next");
  var sliderTotal = document.querySelector(".our-team-slider__total");
  var sliderCurrentSlide = document.querySelector(".our-team-slider__current");

  if (slides.length) {
    // Рендерим булеты навигации
    var renderSlidersBullet = function renderSlidersBullet() {
      for (var i = 0; i < slides.length; i++) {
        if (document.querySelectorAll(".first-faces__bullet").length !== slides.length) {
          var newElem = document.createElement("span");
          newElem.classList.add("first-faces__bullet");
          sliderPagination.append(newElem);
        }
      }

      var slidersBullets = document.querySelectorAll(".first-faces__bullet");
      slides.forEach(function (slide, index) {
        if (slide.classList.contains("_active")) {
          slidersBullets[index].classList.add("_active");
        }
      });
    }; // Убираем класс _active со всех элементов


    var removeActive = function removeActive() {
      var slidersBullets = document.querySelectorAll(".first-faces__bullet");
      sliderButton.forEach(function (slideButton) {
        if (slideButton.classList.contains("_active")) {
          slideButton.classList.remove("_active");
        }
      });
      slides.forEach(function (slide) {
        if (slide.classList.contains("_active")) {
          slide.classList.remove("_active");
        }
      }); // slidersBullets.forEach((bullet) => {
      //   if (bullet.classList.contains("_active")) {
      //     bullet.classList.remove("_active");
      //   }
      // });
    };

    var renderFraction = function renderFraction() {
      if (slides.length && sliderTotal) {
        sliderTotal.textContent = slides.length;
        slides.forEach(function (slide, index) {
          if (slide.classList.contains("_active")) {
            sliderCurrentSlide.textContent = index + 1;
          }
        });
      }
    };

    renderFraction(); // renderSlidersBullet();
    // слушатель на кнопку next

    buttonNext.addEventListener("click", function (e) {
      var currentSlide;
      slides.forEach(function (slide, index) {
        if (slide.classList.contains("_active")) {
          currentSlide = index;
        }
      });

      if (currentSlide == slides.length - 1) {
        currentSlide = -1;
      }

      removeActive();
      sliderButton[currentSlide + 1].classList.add("_active");
      slides[currentSlide + 1].classList.add("_active");
      renderFraction();
    }); // // слушатель на кнопку prev

    buttonPrev.addEventListener("click", function (e) {
      var slidersBullets = document.querySelectorAll(".first-faces__bullet");
      var currentSlide;
      slides.forEach(function (slide, index) {
        if (slide.classList.contains("_active")) {
          currentSlide = index;
        }
      });

      if (currentSlide == 0) {
        currentSlide = slides.length;
      }

      removeActive();
      sliderButton[currentSlide - 1].classList.add("_active");
      slides[currentSlide - 1].classList.add("_active");
      renderFraction();
    }); // По клику на мини слайдер сравниваем индекс и добавляем слайду с таким же индексом класс _active

    sliderButton.forEach(function (slideButton, index) {
      slideButton.addEventListener("click", function (e) {
        if (slideButton.classList.contains("_active")) {
          return;
        } else {
          removeActive();
          slideButton.classList.add("_active"); // slidersBullets[index].classList.add("_active");

          if (slides[index]) {
            slides[index].classList.add("_active");
          }
        }

        renderFraction();
      });
    });
  }
};

/* harmony default export */ var module_customSlider = (customSlider);
;// CONCATENATED MODULE: ./node_modules/ssr-window/ssr-window.esm.js
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */

/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}

function extend(target = {}, src = {}) {
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}

const ssrDocument = {
  body: {},

  addEventListener() {},

  removeEventListener() {},

  activeElement: {
    blur() {},

    nodeName: ''
  },

  querySelector() {
    return null;
  },

  querySelectorAll() {
    return [];
  },

  getElementById() {
    return null;
  },

  createEvent() {
    return {
      initEvent() {}

    };
  },

  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},

      setAttribute() {},

      getElementsByTagName() {
        return [];
      }

    };
  },

  createElementNS() {
    return {};
  },

  importNode() {
    return null;
  },

  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};

function ssr_window_esm_getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}

const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},

    pushState() {},

    go() {},

    back() {}

  },
  CustomEvent: function CustomEvent() {
    return this;
  },

  addEventListener() {},

  removeEventListener() {},

  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }

    };
  },

  Image() {},

  Date() {},

  screen: {},

  setTimeout() {},

  clearTimeout() {},

  matchMedia() {
    return {};
  },

  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }

    return setTimeout(callback, 0);
  },

  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }

    clearTimeout(id);
  }

};

function ssr_window_esm_getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}


;// CONCATENATED MODULE: ./node_modules/dom7/dom7.esm.js
/**
 * Dom7 4.0.4
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2022, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: January 11, 2022
 */

/* eslint-disable no-proto */

function makeReactive(obj) {
  const proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get() {
      return proto;
    },

    set(value) {
      proto.__proto__ = value;
    }

  });
}

class Dom7 extends Array {
  constructor(items) {
    if (typeof items === 'number') {
      super(items);
    } else {
      super(...(items || []));
      makeReactive(this);
    }
  }

}

function arrayFlat(arr = []) {
  const res = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      res.push(...arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}

function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}

function arrayUnique(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}

function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());
} // eslint-disable-next-line


function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  const a = [];
  const res = context.querySelectorAll(selector);

  for (let i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function dom7_esm_$(selector, context) {
  const window = ssr_window_esm_getWindow();
  const document = ssr_window_esm_getDocument();
  let arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    const html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      let toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      const tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (let i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

dom7_esm_$.fn = Dom7.prototype; // eslint-disable-next-line

function addClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.add(...classNames);
  });
  return this;
}

function removeClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    el.classList.remove(...classNames);
  });
  return this;
}

function toggleClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  this.forEach(el => {
    classNames.forEach(className => {
      el.classList.toggle(className);
    });
  });
}

function hasClass(...classes) {
  const classNames = arrayFlat(classes.map(c => c.split(' ')));
  return arrayFilter(this, el => {
    return classNames.filter(className => el.classList.contains(className)).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  let el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    const dataKey = el.getAttribute(`data-${key}`);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      const attr = el.attributes[i];

      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }

  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    const el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      const values = [];

      for (let i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
  }

  return this;
}

function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if (dom7_esm_$(target).is(targetSelector)) listener.apply(target, eventData);else {
      const parents = dom7_esm_$(target).parents(); // eslint-disable-line

      for (let k = 0; k < parents.length; k += 1) {
        if (dom7_esm_$(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  const events = eventType.split(' ');
  let j;

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  const events = eventType.split(' ');

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;

  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }

  function onceHandler(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger(...args) {
  const window = ssr_window_esm_getWindow();
  const events = args[0].split(' ');
  const eventData = args[1];

  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];

    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];

      if (window.CustomEvent) {
        const evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  const dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  const window = getWindow();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function dom7_esm_outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  const window = getWindow();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function dom7_esm_outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    const window = ssr_window_esm_getWindow();
    const document = ssr_window_esm_getDocument();
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = document.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window ? window.scrollY : el.scrollTop;
    const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  const window = getWindow();

  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  const window = ssr_window_esm_getWindow();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  const window = ssr_window_esm_getWindow();
  let i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (const prop in props) {
          this[i].style[prop] = props[prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach((el, index) => {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  const result = arrayFilter(this, callback);
  return dom7_esm_$(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function dom7_esm_text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  const window = ssr_window_esm_getWindow();
  const document = ssr_window_esm_getDocument();
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = dom7_esm_$(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  let child = this[0];
  let i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;

  if (index > length - 1) {
    return dom7_esm_$([]);
  }

  if (index < 0) {
    const returnIndex = length + index;
    if (returnIndex < 0) return dom7_esm_$([]);
    return dom7_esm_$([this[returnIndex]]);
  }

  return dom7_esm_$([this[index]]);
}

function append(...els) {
  let newChild;
  const document = ssr_window_esm_getDocument();

  for (let k = 0; k < els.length; k += 1) {
    newChild = els[k];

    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  dom7_esm_$(parent).append(this);
  return this;
}

function prepend(newChild) {
  const document = ssr_window_esm_getDocument();
  let i;
  let j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  dom7_esm_$(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  const before = dom7_esm_$(selector);

  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  const after = dom7_esm_$(selector);

  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && dom7_esm_$(this[0].nextElementSibling).is(selector)) {
        return dom7_esm_$([this[0].nextElementSibling]);
      }

      return dom7_esm_$([]);
    }

    if (this[0].nextElementSibling) return dom7_esm_$([this[0].nextElementSibling]);
    return dom7_esm_$([]);
  }

  return dom7_esm_$([]);
}

function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return dom7_esm_$([]);

  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if (dom7_esm_$(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);

    el = next;
  }

  return dom7_esm_$(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    const el = this[0];

    if (selector) {
      if (el.previousElementSibling && dom7_esm_$(el.previousElementSibling).is(selector)) {
        return dom7_esm_$([el.previousElementSibling]);
      }

      return dom7_esm_$([]);
    }

    if (el.previousElementSibling) return dom7_esm_$([el.previousElementSibling]);
    return dom7_esm_$([]);
  }

  return dom7_esm_$([]);
}

function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return dom7_esm_$([]);

  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if (dom7_esm_$(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);

    el = prev;
  }

  return dom7_esm_$(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function dom7_esm_parent(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if (dom7_esm_$(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return dom7_esm_$(parents);
}

function parents(selector) {
  const parents = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line

    while (parent) {
      if (selector) {
        if (dom7_esm_$(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }

      parent = parent.parentNode;
    }
  }

  return dom7_esm_$(parents);
}

function closest(selector) {
  let closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return dom7_esm_$([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  const foundElements = [];

  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);

    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return dom7_esm_$(foundElements);
}

function children(selector) {
  const children = []; // eslint-disable-line

  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].children;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector || dom7_esm_$(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return dom7_esm_$(children);
}

function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add(...els) {
  const dom = this;
  let i;
  let j;

  for (i = 0; i < els.length; i += 1) {
    const toAdd = dom7_esm_$(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];

    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
} // eslint-disable-next-line


function scrollTo(...args) {
  const window = getWindow();
  let [left, top, duration, easing, callback] = args;

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line

    let scrollLeft; // eslint-disable-line

    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      let done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop(...args) {
  let [top, duration, easing, callback] = args;

  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }

  const dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;

  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }

  const dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
} // eslint-disable-next-line


function animate(initialProps, initialParams) {
  const window = getWindow();
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],

    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },

    stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },

    done(complete) {
      a.animating = false;
      a.elements.each(el => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },

    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      const elements = []; // Define & Cache Initials & Units

      a.elements.each((el, index) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(prop => {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue
          };
        });
      });
      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(element => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(prop => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const {
              initialValue,
              finalValue,
              unit
            } = el[prop];
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            const currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }

  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;

  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  const els = this;

  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

const noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler(...args) {
    if (typeof args[0] === 'undefined') {
      for (let i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            dom7_esm_$(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on(name, ...args);
  }

  return eventHandler;
}

const click = shortcut('click');
const dom7_esm_blur = shortcut('blur');
const dom7_esm_focus = shortcut('focus');
const focusin = shortcut('focusin');
const focusout = shortcut('focusout');
const keyup = shortcut('keyup');
const keydown = shortcut('keydown');
const keypress = shortcut('keypress');
const dom7_esm_submit = shortcut('submit');
const change = shortcut('change');
const mousedown = shortcut('mousedown');
const mousemove = shortcut('mousemove');
const mouseup = shortcut('mouseup');
const mouseenter = shortcut('mouseenter');
const mouseleave = shortcut('mouseleave');
const mouseout = shortcut('mouseout');
const mouseover = shortcut('mouseover');
const touchstart = shortcut('touchstart');
const touchend = shortcut('touchend');
const touchmove = shortcut('touchmove');
const resize = shortcut('resize');
const dom7_esm_scroll = shortcut('scroll');
/* harmony default export */ var dom7_esm = ((/* unused pure expression or super */ null && (dom7_esm_$)));

;// CONCATENATED MODULE: ./node_modules/swiper/shared/dom.js

const Methods = {
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  attr: attr,
  removeAttr: removeAttr,
  transform: transform,
  transition: transition,
  on: on,
  off: off,
  trigger: trigger,
  transitionEnd: transitionEnd,
  outerWidth: dom7_esm_outerWidth,
  outerHeight: dom7_esm_outerHeight,
  styles: styles,
  offset: offset,
  css: css,
  each: each,
  html: html,
  text: dom7_esm_text,
  is: is,
  index: index,
  eq: eq,
  append: append,
  prepend: prepend,
  next: next,
  nextAll: nextAll,
  prev: prev,
  prevAll: prevAll,
  parent: dom7_esm_parent,
  parents: parents,
  closest: closest,
  find: find,
  children: children,
  filter: filter,
  remove: remove
};
Object.keys(Methods).forEach(methodName => {
  Object.defineProperty(dom7_esm_$.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ var dom = (dom7_esm_$);
;// CONCATENATED MODULE: ./node_modules/swiper/shared/utils.js


function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function utils_nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function utils_now() {
  return Date.now();
}

function utils_getComputedStyle(el) {
  const window = ssr_window_esm_getWindow();
  let style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function utils_getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  const window = ssr_window_esm_getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = utils_getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function utils_isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function utils_extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];

  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function utils_setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}

function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = ssr_window_esm_getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';

  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };

  const animate = () => {
    time = new Date().getTime();

    if (startTime === null) {
      startTime = time;
    }

    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }

    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });

    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }

    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };

  animate();
}


;// CONCATENATED MODULE: ./node_modules/swiper/shared/get-support.js

let support;

function calcSupport() {
  const window = ssr_window_esm_getWindow();
  const document = ssr_window_esm_getDocument();
  return {
    smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    passiveListener: function checkPassiveListener() {
      let supportsPassive = false;

      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          }

        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}


;// CONCATENATED MODULE: ./node_modules/swiper/shared/get-device.js


let deviceCached;

function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = ssr_window_esm_getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel'; // iPadOs 13 fix

  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }

  return deviceCached;
}


;// CONCATENATED MODULE: ./node_modules/swiper/shared/get-browser.js

let browser;

function calcBrowser() {
  const window = ssr_window_esm_getWindow();

  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}


;// CONCATENATED MODULE: ./node_modules/swiper/core/modules/resize/resize.js

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = ssr_window_esm_getWindow();
  let observer = null;
  let animationFrame = null;

  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };

  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });

        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };

  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }

    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };

  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };

  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }

    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/modules/observer/observer.js

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = ssr_window_esm_getWindow();

  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }

    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }

      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };

  const init = () => {
    if (!swiper.params.observer) return;

    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();

      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    } // Observe container


    attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  };

  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };

  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events-emitter.js
/* eslint-disable no-underscore-dangle */
/* harmony default export */ var events_emitter = ({
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },

  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },

  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },

  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },

  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }

});
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSize.js
function updateSize() {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlides.js

function updateSlides() {
  const swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  const params = swiper.params;
  const {
    $wrapperEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  }); // reset cssMode offsets

  if (params.centeredSlides && params.cssMode) {
    utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
    utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
  }

  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  } // Calc slides


  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;

  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);

    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }

      const slideStyles = getComputedStyle(slide[0]);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide[0];
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (params.setWrapperSize) {
    $wrapperEl.css({
      [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
  }

  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    const newSlidesGrid = [];

    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css({
      [key]: `${spaceBetween}px`
    });
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;

    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });

  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    utils_setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }

  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);

    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.$el.removeClass(backFaceHiddenClass);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateAutoHeight.js

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || dom([])).each(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesOffset.js
function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesProgress.js

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }

    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides.eq(i).addClass(params.slideVisibleClass);
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }

  swiper.visibleSlides = dom(swiper.visibleSlides);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateProgress.js
function updateProgress(translate) {
  const swiper = this;

  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object.assign(swiper, {
    progress,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesClasses.js
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    $wrapperEl,
    activeIndex,
    realIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
  let activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateActiveIndex.js
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid,
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object.assign(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateClickedSlide.js

function updateClickedSlide(e) {
  const swiper = this;
  const params = swiper.params;
  const slide = dom(e).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  let slideIndex;

  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(dom(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/update/index.js









/* harmony default export */ var update = ({
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/getTranslate.js

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    $wrapperEl
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  let currentTranslate = utils_getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/setTranslate.js
function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    $wrapperEl,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/minTranslate.js
function minTranslate() {
  return -this.snapGrid[0];
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/maxTranslate.js
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/translateTo.js

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    const isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/index.js





/* harmony default export */ var translate = ({
  getTranslate: getSwiperTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate,
  translateTo: translateTo
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/setTransition.js
function setTransition(duration, byController) {
  const swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionEmit.js
function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit(`transition${step}`);

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }

    swiper.emit(`slideChangeTransition${step}`);

    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionStart.js

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionEnd.js

function transitionEnd_transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/index.js



/* harmony default export */ var core_transition = ({
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd_transitionEnd
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideTo.js

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  const translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;

    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }

      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._swiperImmediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }

      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }

    return true;
  }

  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);

  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;

    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }

    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
  }

  return true;
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToLoop.js
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    const indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    const isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  const swiper = this;
  let newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideNext.js
/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  const swiper = this;
  const {
    animating,
    enabled,
    params
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;

  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }

  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slidePrev.js
/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  const swiper = this;
  const {
    params,
    animating,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  const translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });

    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }

  let prevIndex = 0;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }

  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideReset.js
/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToClosest.js
/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToClickedSlide.js


function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    $wrapperEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(dom(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
        utils_nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
      utils_nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/index.js







/* harmony default export */ var slide = ({
  slideTo: slideTo,
  slideToLoop: slideToLoop,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClosest: slideToClosest,
  slideToClickedSlide: slideToClickedSlide
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopCreate.js


function loopCreate() {
  const swiper = this;
  const document = ssr_window_esm_getDocument();
  const {
    params,
    $wrapperEl
  } = swiper; // Remove duplicated slides

  const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
  $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  let slides = $selector.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = dom(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $selector.append(blankNode);
      }

      slides = $selector.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((el, index) => {
    const slide = dom(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (let i = 0; i < appendSlides.length; i += 1) {
    $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopFix.js
function loopFix() {
  const swiper = this;
  swiper.emit('beforeLoopFix');
  const {
    activeIndex,
    slides,
    loopedSlides,
    allowSlidePrev,
    allowSlideNext,
    snapGrid,
    rtlTranslate: rtl
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopDestroy.js
function loopDestroy() {
  const swiper = this;
  const {
    $wrapperEl,
    params,
    slides
  } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/index.js



/* harmony default export */ var loop = ({
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/setGrabCursor.js
function setGrabCursor(moving) {
  const swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js
function unsetGrabCursor() {
  const swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/index.js


/* harmony default export */ var grab_cursor = ({
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchStart.js


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }

  function __closestFrom(el) {
    if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);

    if (!found && !el.getRootNode) {
      return null;
    }

    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  const swiper = this;
  const document = ssr_window_esm_getDocument();
  const window = ssr_window_esm_getWindow();
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }

  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let $targetEl = dom(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = dom(event.path[0]);
  }

  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = utils_now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    let preventDefault = true;

    if ($targetEl.is(data.focusableElements)) {
      preventDefault = false;

      if ($targetEl[0].nodeName === 'SELECT') {
        data.isTouched = false;
      }
    }

    if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }

  swiper.emit('touchStart', e);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchMove.js



function onTouchMove(event) {
  const document = ssr_window_esm_getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    if (!dom(e.target).is(data.focusableElements)) {
      swiper.allowClick = false;
    }

    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = utils_now();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop && !params.cssMode) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchEnd.js

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  const touchEndTime = utils_now();
  const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = utils_now();
  utils_nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (swiper.params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  } // Find current slide


  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];

  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  let rewindFirstIndex = null;
  let rewindLastIndex = null;

  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  } // Find current slide size


  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onResize.js
function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onClick.js
function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onScroll.js
function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/events/index.js







let dummyEventAttached = false;

function dummyEventListener() {}

const events = (swiper, method) => {
  const document = ssr_window_esm_getDocument();
  const {
    params,
    touchEvents,
    el,
    wrapperEl,
    device,
    support
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method; // Touch Events

  if (!support.touch) {
    el[domMethod](touchEvents.start, swiper.onTouchStart, false);
    document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
    document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
  } else {
    const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
    el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
      passive: false,
      capture
    } : capture);
    el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

    if (touchEvents.cancel) {
      el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }
};

function attachEvents() {
  const swiper = this;
  const document = ssr_window_esm_getDocument();
  const {
    params,
    support
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  if (support.touch && !dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }

  events(swiper, 'on');
}

function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}

/* harmony default export */ var core_events = ({
  attachEvents,
  detachEvents
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/setBreakpoint.js


const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};

function setBreakpoint() {
  const swiper = this;
  const {
    activeIndex,
    initialized,
    loopedSlides = 0,
    params,
    $el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(`${params.containerModifierClass}grid`);

    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      $el.addClass(`${params.containerModifierClass}grid-column`);
    }

    swiper.emitContainerClasses();
  } // Toggle navigation, pagination, scrollbar


  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;

    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }

    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  utils_extend(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/getBreakpoint.js

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }

  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = ssr_window_esm_getWindow();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }

    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];

    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/index.js


/* harmony default export */ var breakpoints = ({
  setBreakpoint: setBreakpoint,
  getBreakpoint: getBreakpoint
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/classes/addClasses.js
function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    $el,
    device,
    support
  } = swiper; // prettier-ignore

  const suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': !support.touch
  }, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  $el.addClass([...classNames].join(' '));
  swiper.emitContainerClasses();
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/classes/removeClasses.js
function removeClasses() {
  const swiper = this;
  const {
    $el,
    classNames
  } = swiper;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/classes/index.js


/* harmony default export */ var classes = ({
  addClasses: addClasses,
  removeClasses: removeClasses
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/images/loadImage.js


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  const window = ssr_window_esm_getWindow();
  let image;

  function onReady() {
    if (callback) callback();
  }

  const isPicture = dom(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/images/preloadImages.js
function preloadImages() {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/images/index.js


/* harmony default export */ var core_images = ({
  loadImage: loadImage,
  preloadImages: preloadImages
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/check-overflow/index.js
function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;

  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }

  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }

  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}

/* harmony default export */ var check_overflow = ({
  checkOverflow
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/defaults.js
/* harmony default export */ var defaults = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});
;// CONCATENATED MODULE: ./node_modules/swiper/core/moduleExtendParams.js

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }

    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];

    if (typeof moduleParams !== 'object' || moduleParams === null) {
      utils_extend(allModulesParams, obj);
      return;
    }

    if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
      params[moduleParamName] = {
        auto: true
      };
    }

    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      utils_extend(allModulesParams, obj);
      return;
    }

    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }

    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }

    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    utils_extend(allModulesParams, obj);
  };
}
;// CONCATENATED MODULE: ./node_modules/swiper/core/core.js
/* eslint no-param-reassign: "off" */






















const prototypes = {
  eventsEmitter: events_emitter,
  update: update,
  translate: translate,
  transition: core_transition,
  slide: slide,
  loop: loop,
  grabCursor: grab_cursor,
  events: core_events,
  breakpoints: breakpoints,
  checkOverflow: check_overflow,
  classes: classes,
  images: core_images
};
const extendedDefaults = {};

class Swiper {
  constructor() {
    let el;
    let params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }

    if (!params) params = {};
    params = utils_extend({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && dom(params.el).length > 1) {
      const swipers = [];
      dom(params.el).each(containerEl => {
        const newParams = utils_extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];

    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }

    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    }); // Extend defaults with modules params

    const swiperParams = utils_extend({}, defaults, allModulesParams); // Extend defaults with passed params

    swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = utils_extend({}, swiper.params);
    swiper.passedParams = utils_extend({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = dom; // Extend Swiper

    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: dom(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },

      isVertical() {
        return swiper.params.direction === 'vertical';
      },

      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        const desktop = ['pointerdown', 'pointermove', 'pointerup'];
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: utils_now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  }

  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  }

  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }

  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }

  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.each(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }

  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }

    if (exact === void 0) {
      exact = false;
    }

    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;

    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;

      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

          if (slideInView) {
            spv += 1;
          }
        }
      }
    }

    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    let translated;

    if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  }

  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    const swiper = this;
    const currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }

  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;

    if (swiper.rtl) {
      swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }

    swiper.update();
  }

  mount(el) {
    const swiper = this;
    if (swiper.mounted) return true; // Find el

    const $el = dom(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };

    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = dom(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = options => $el.children(options);

        return res;
      }

      if (!$el.children) {
        return dom($el).children(getWrapperSelector());
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    let $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      const document = ssr_window_esm_getDocument();
      const wrapper = document.createElement('div');
      $wrapperEl = dom(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
        $wrapperEl.append(slideEl);
      });
    }

    Object.assign(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  }

  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }

  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    const swiper = this;
    const {
      params,
      $el,
      $wrapperEl,
      slides
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      deleteProps(swiper);
    }

    swiper.destroyed = true;
    return null;
  }

  static extendDefaults(newDefaults) {
    utils_extend(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return defaults;
  }

  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;

    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }

  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  }

}

Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);
/* harmony default export */ var core = (Swiper);
;// CONCATENATED MODULE: ./node_modules/swiper/modules/virtual/virtual.js


function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };

  function renderSlide(slide, index) {
    const params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  }

  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;

    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }

    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }

      emit('virtualUpdate');
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset}px`);
      }

      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];

          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }

      return;
    }

    const prependIndexes = [];
    const appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }

    appendIndexes.forEach(index => {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort((a, b) => b - a).forEach(index => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
    onRendered();
  }

  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    update(true);
  }

  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const $cachedEl = cache[cachedIndex];
        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }

  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    update(true);
    swiper.slideTo(activeIndex, 0);
  }

  function removeAllSlides() {
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    update(true);
    swiper.slideTo(0, 0);
  }

  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    swiper.virtual.slides = swiper.params.virtual.slides;
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;

    if (!swiper.params.initialSlide) {
      update();
    }
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;

    if (swiper.params.cssMode) {
      setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/keyboard/keyboard.js
/* eslint-disable consistent-return */


function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = getDocument();
  const window = getWindow();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });

  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }

      const $el = swiper.$el;
      const swiperWidth = $el[0].clientWidth;
      const swiperHeight = $el[0].clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    emit('keyPress', kc);
    return undefined;
  }

  function enable() {
    if (swiper.keyboard.enabled) return;
    $(document).on('keydown', handle);
    swiper.keyboard.enabled = true;
  }

  function disable() {
    if (!swiper.keyboard.enabled) return;
    $(document).off('keydown', handle);
    swiper.keyboard.enabled = false;
  }

  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/mousewheel/mousewheel.js
/* eslint-disable consistent-return */



function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = getWindow();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = now();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];

  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY

    let pX = 0;
    let pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }

  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }

  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }

  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  }

  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  }

  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;
    const params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = $(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: now(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;

          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);

          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = nextTick(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = nextTick(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }

  function events(method) {
    let target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = $(swiper.params.mousewheel.eventsTarget);
    }

    target[method]('mouseenter', handleMouseEnter);
    target[method]('mouseleave', handleMouseLeave);
    target[method]('wheel', handle);
  }

  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }

    if (swiper.mousewheel.enabled) return false;
    events('on');
    swiper.mousewheel.enabled = true;
    return true;
  }

  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }

    if (!swiper.mousewheel.enabled) return false;
    events('off');
    swiper.mousewheel.enabled = false;
    return true;
  }

  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }

    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }

    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/shared/create-element-if-not-defined.js

function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = ssr_window_esm_getDocument();

  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

        if (!element) {
          element = document.createElement('div');
          element.className = checkProps[key];
          swiper.$el.append(element);
        }

        params[key] = element;
        originalParams[key] = element;
      }
    });
  }

  return params;
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/navigation/navigation.js


function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };

  function getEl(el) {
    let $el;

    if (el) {
      $el = dom(el);

      if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }

    return $el;
  }

  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;

    if ($el && $el.length > 0) {
      $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
      if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  }

  function update() {
    // Update Navigation Buttons
    if (swiper.params.loop) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }

  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }

  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }

  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', onPrevClick);
    }

    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  }

  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }

  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($nextEl) {
      $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }

    if ($prevEl) {
      $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    }
  });
  on('click', (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;

    if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;

      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }

      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }

      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }

      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
    init();
    update();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
    destroy();
  };

  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/shared/classes-to-selector.js
function classes_to_selector_classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/pagination/pagination.js



function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;

  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }

  function setSideBullets($bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }

  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el; // Current/Total

    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;

      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }

        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

      if ($el.length > 1) {
        bullets.each(bullet => {
          const $bullet = dom(bullet);
          const bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }

            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, 'prev');
            }

            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, 'next');
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);

          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              setSideBullets($firstDisplayedBullet, 'prev');
              setSideBullets($lastDisplayedBullet, 'next');
            }
          } else {
            setSideBullets($firstDisplayedBullet, 'prev');
            setSideBullets($lastDisplayedBullet, 'next');
          }
        }
      }

      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }

    if (params.type === 'fraction') {
      $el.find(classes_to_selector_classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(classes_to_selector_classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      let progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find(classes_to_selector_classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit('paginationRender', $el[0]);
    } else {
      emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  }

  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = '';

    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(classes_to_selector_classesToSelector(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      emit('paginationRender', swiper.pagination.$el[0]);
    }
  }

  function init() {
    swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let $el = dom(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

      if ($el.length > 1) {
        $el = $el.filter(el => {
          if (dom(el).parents('.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);
    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', classes_to_selector_classesToSelector(params.bulletClass), function onClick(e) {
        e.preventDefault();
        let index = dom(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }

  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', classes_to_selector_classesToSelector(params.bulletClass));
    }
  }

  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    if (!swiper.params.loop) {
      update();
    }
  });
  on('slidesLengthChange', () => {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on('snapGridLengthChange', () => {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.pagination;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const {
      $el
    } = swiper.pagination;

    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }

      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);

    if (swiper.pagination.$el) {
      swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
    }

    init();
    render();
    update();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);

    if (swiper.pagination.$el) {
      swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
    }

    destroy();
  };

  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/scrollbar/scrollbar.js




function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = getDocument();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null,
    $el: null,
    $dragEl: null
  };

  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl,
      progress
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      $dragEl[0].style.height = `${newSize}px`;
    }

    if (params.hide) {
      clearTimeout(timeout);
      $el[0].style.opacity = 1;
      timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  }

  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  }

  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      $dragEl,
      $el
    } = scrollbar;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function getPointerPosition(e) {
    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  }

  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      $el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    setDragPosition(e);
    clearTimeout(dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    emit('scrollbarDragStart', e);
  }

  function onDragMove(e) {
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el,
      $dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    emit('scrollbarDragMove', e);
  }

  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      $wrapperEl
    } = swiper;
    const {
      $el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = nextTick(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }

  function events(method) {
    const {
      scrollbar,
      touchEventsTouch,
      touchEventsDesktop,
      params,
      support
    } = swiper;
    const $el = scrollbar.$el;
    if (!$el) return;
    const target = $el[0];
    const activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

    if (!support.touch) {
      target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
      document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
      document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
    } else {
      target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
      target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
      target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
    }
  }

  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }

  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }

  function init() {
    const {
      scrollbar,
      $el: $swiperEl
    } = swiper;
    swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let $el = $(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);

    if ($dragEl.length === 0) {
      $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }

    Object.assign(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      enableDraggable();
    }

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  }

  function destroy() {
    const params = swiper.params.scrollbar;
    const $el = swiper.scrollbar.$el;

    if ($el) {
      $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }

    disableDraggable();
  }

  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      $el
    } = swiper.scrollbar;

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', () => {
    destroy();
  });

  const enable = () => {
    swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);

    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }

    init();
    updateSize();
    setTranslate();
  };

  const disable = () => {
    swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);

    if (swiper.scrollbar.$el) {
      swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
    }

    destroy();
  };

  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/parallax/parallax.js

function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });

  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const $el = $(el);
    const rtlFactor = rtl ? -1 : 1;
    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }

    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  };

  const setTranslate = () => {
    const {
      $el,
      slides,
      progress,
      snapGrid
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
      setTransform(el, progress);
    });
    slides.each((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
        setTransform(el, slideProgress);
      });
    });
  };

  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }

    const {
      $el
    } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
      const $parallaxEl = $(parallaxEl);
      let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  };

  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/zoom/zoom.js



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = getWindow();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let gesturesEnabled;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const gesture = {
    $slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    $imageEl: undefined,
    $imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },

    set(value) {
      if (scale !== value) {
        const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
        const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
        emit('zoomChange', value, imageEl, slideEl);
      }

      scale = value;
    }

  });

  function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  } // Events


  function onGestureStart(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    isScaling = true;
  }

  function onGestureChange(e) {
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }

    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function onGestureEnd(e) {
    const device = swiper.device;
    const support = swiper.support;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;

    if (!support.gestures) {
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      fakeGestureTouched = false;
      fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  }

  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  }

  function onTouchMove(e) {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
    } // Define if we need image drag


    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  }

  function onTransitionEnd() {
    const zoom = swiper.zoom;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  }

  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (e && e.target) {
        gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
      }

      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }

    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window.scrollX;
      offsetY = gesture.$slideEl.offset().top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  }

  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }

    zoom.scale = 1;
    currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  } // Toggle Zoom


  function zoomToggle(e) {
    const zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }

  function getListeners() {
    const support = swiper.support;
    const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  function getSlideSelector() {
    return `.${swiper.params.slideClass}`;
  }

  function toggleGestures(method) {
    const {
      passiveListener
    } = getListeners();
    const slideSelector = getSlideSelector();
    swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
    swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
    swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
  }

  function enableGestures() {
    if (gesturesEnabled) return;
    gesturesEnabled = true;
    toggleGestures('on');
  }

  function disableGestures() {
    if (!gesturesEnabled) return;
    gesturesEnabled = false;
    toggleGestures('off');
  } // Attach/Detach Events


  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const support = swiper.support;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    const support = swiper.support;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();
    const slideSelector = getSlideSelector(); // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
  }

  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd(e);
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/lazy/lazy.js


function Lazy(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  });
  swiper.lazy = {};
  let scrollHandlerAttached = false;
  let initialImageLoaded = false;

  function loadInSlide(index, loadInDuplicate) {
    if (loadInDuplicate === void 0) {
      loadInDuplicate = true;
    }

    const params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
    const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(imageEl => {
      const $imageEl = $(imageEl);
      $imageEl.addClass(params.loadingClass);
      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');
      const $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(sourceEl => {
              const $source = $(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();

        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            loadInSlide(duplicatedSlide.index(), false);
          }
        }

        emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  }

  function load() {
    const {
      $wrapperEl,
      params: swiperParams,
      slides,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;
    let slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return $(slideEl).attr('data-swiper-slide-index');
      }

      return $(slideEl).index();
    }

    if (!initialImageLoaded) initialImageLoaded = true;

    if (swiper.params.watchSlidesProgress) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
        const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
        loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) loadInSlide(i);
      }
    } else {
      loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        const amount = params.loadPrevNextAmount;
        const spv = Math.ceil(slidesPerView);
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (let i = activeIndex + spv; i < maxIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        } // Prev Slides


        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
      }
    }
  }

  function checkInViewOnLoad() {
    const window = getWindow();
    if (!swiper || swiper.destroyed) return;
    const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
    const isWindow = $scrollElement[0] === window;
    const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    const swiperOffset = swiper.$el.offset();
    const {
      rtlTranslate: rtl
    } = swiper;
    let inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (let i = 0; i < swiperCoord.length; i += 1) {
      const point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (inView) {
      load();
      $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
    } else if (!scrollHandlerAttached) {
      scrollHandlerAttached = true;
      $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
    }
  }

  on('beforeInit', () => {
    if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
      swiper.params.preloadImages = false;
    }
  });
  on('init', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('scroll', () => {
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
      load();
    }
  });
  on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('transitionStart', () => {
    if (swiper.params.lazy.enabled) {
      if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    }
  });
  on('transitionEnd', () => {
    if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
      if (swiper.params.lazy.checkInView) {
        checkInViewOnLoad();
      } else {
        load();
      }
    }
  });
  on('slideChange', () => {
    const {
      lazy,
      cssMode,
      watchSlidesProgress,
      touchReleaseOnEdges,
      resistanceRatio
    } = swiper.params;

    if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
      load();
    }
  });
  on('destroy', () => {
    if (!swiper.$el) return;
    swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
  });
  Object.assign(swiper.lazy, {
    load,
    loadInSlide
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/controller/controller.js
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  });
  swiper.controller = {
    control: undefined
  };

  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    let i1;
    let i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  } // xxx: for now i will just save one spline function to to


  function getInterpolateFunction(c) {
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  }

  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }

  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          nextTick(() => {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }

  function removeSpline() {
    if (!swiper.controller.control) return;

    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }

  on('beforeInit', () => {
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/a11y/a11y.js


function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  let liveRegion = null;

  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  }

  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }

    const randomChar = () => Math.round(16 * Math.random()).toString(16);

    return 'x'.repeat(size).replace(/x/g, randomChar);
  }

  function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
  }

  function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
  }

  function addElRole($el, role) {
    $el.attr('role', role);
  }

  function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
  }

  function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
  }

  function addElLabel($el, label) {
    $el.attr('aria-label', label);
  }

  function addElId($el, id) {
    $el.attr('id', id);
  }

  function addElLive($el, live) {
    $el.attr('aria-live', live);
  }

  function disableEl($el) {
    $el.attr('aria-disabled', true);
  }

  function enableEl($el) {
    $el.attr('aria-disabled', false);
  }

  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const $targetEl = $(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  }

  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        disableEl($prevEl);
        makeElNotFocusable($prevEl);
      } else {
        enableEl($prevEl);
        makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        disableEl($nextEl);
        makeElNotFocusable($nextEl);
      } else {
        enableEl($nextEl);
        makeElFocusable($nextEl);
      }
    }
  }

  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }

  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }

  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.each(bulletEl => {
      const $bulletEl = $(bulletEl);

      if (swiper.params.pagination.clickable) {
        makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          addElRole($bulletEl, 'button');
          addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      }

      if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
        $bulletEl.attr('aria-current', 'true');
      } else {
        $bulletEl.removeAttr('aria-current');
      }
    });
  }

  const initNavEl = ($el, wrapperId, message) => {
    makeElFocusable($el);

    if ($el[0].tagName !== 'BUTTON') {
      addElRole($el, 'button');
      $el.on('keydown', onEnterOrSpaceKey);
    }

    addElLabel($el, message);
    addElControls($el, wrapperId);
  };

  const handleFocus = e => {
    const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };

  const initSlides = () => {
    const params = swiper.params.a11y;

    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
    }

    addElRole($(swiper.slides), params.slideRole);
    const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;

    if (params.slideLabelMessage) {
      swiper.slides.each((slideEl, index) => {
        const $slideEl = $(slideEl);
        const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel($slideEl, ariaLabelMessage);
      });
    }
  };

  const init = () => {
    const params = swiper.params.a11y;
    swiper.$el.append(liveRegion); // Container

    const $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    const $wrapperEl = swiper.$wrapperEl;
    const wrapperId = params.id || $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId($wrapperEl, wrapperId);
    addElLive($wrapperEl, live); // Slide

    initSlides(); // Navigation

    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      initNavEl($nextEl, wrapperId, params.nextSlideMessage);
    }

    if ($prevEl && $prevEl.length) {
      initNavEl($prevEl, wrapperId, params.prevSlideMessage);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    } // Tab focus


    swiper.$el.on('focus', handleFocus, true);
  };

  function destroy() {
    if (liveRegion && liveRegion.length > 0) liveRegion.remove();
    let $nextEl;
    let $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', onEnterOrSpaceKey);
    } // Pagination


    if (hasClickablePagination()) {
      swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    } // Tab focus


    swiper.$el.off('focus', handleFocus, true);
  }

  on('beforeInit', () => {
    liveRegion = $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/history/history.js

function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};

  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };

  const getPathValues = urlOverride => {
    const window = getWindow();
    let location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };

  const setHistory = (key, index) => {
    const window = getWindow();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    const slide = swiper.slides.eq(index);
    let value = slugify(slide.attr('data-history'));

    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key}/${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }

    if (swiper.params.history.keepQuery) {
      value += location.search;
    }

    const currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };

  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };

  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };

  const init = () => {
    const window = getWindow();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) return;
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };

  const destroy = () => {
    const window = getWindow();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };

  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/hash-navigation/hash-navigation.js


function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = getDocument();
  const window = getWindow();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  });

  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  };

  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
      emit('hashSet');
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      emit('hashSet');
    }
  };

  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');

    if (hash) {
      const speed = 0;

      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      $(window).on('hashchange', onHashChange);
    }
  };

  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      $(window).off('hashchange', onHashChange);
    }
  };

  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/autoplay/autoplay.js
/* eslint no-underscore-dangle: "off" */

/* eslint no-use-before-define: "off" */


function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });

  function run() {
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(timeout);
    timeout = utils_nextTick(() => {
      let autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit('autoplay');
      } else {
        stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }

  function start() {
    if (typeof timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    emit('autoplayStart');
    run();
    return true;
  }

  function stop() {
    if (!swiper.autoplay.running) return false;
    if (typeof timeout === 'undefined') return false;

    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }

    swiper.autoplay.running = false;
    emit('autoplayStop');
    return true;
  }

  function pause(speed) {
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (timeout) clearTimeout(timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ['transitionend', 'webkitTransitionEnd'].forEach(event => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }

  function onVisibilityChange() {
    const document = ssr_window_esm_getDocument();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }

  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }

  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      emit('autoplayPause');
      pause();
    }

    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }

  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }

    swiper.autoplay.paused = false;
    emit('autoplayResume');
    run();
  }

  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on('mouseenter', onMouseEnter);
      swiper.$el.on('mouseleave', onMouseLeave);
    }
  }

  function detachMouseEvents() {
    swiper.$el.off('mouseenter', onMouseEnter);
    swiper.$el.off('mouseleave', onMouseLeave);
  }

  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = ssr_window_esm_getDocument();
      document.addEventListener('visibilitychange', onVisibilityChange);
      attachMouseEvents();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on('touchEnd', () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on('destroy', () => {
    detachMouseEvents();

    if (swiper.autoplay.running) {
      stop();
    }

    const document = ssr_window_esm_getDocument();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/thumbs/thumbs.js


function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };

  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && dom(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(dom(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  }

  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (utils_isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }

  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs

    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }

    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();

        if (typeof prevThumbsIndex === 'undefined') {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === 'undefined') {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }

        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }

  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    init();
    update(true);
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;

    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/free-mode/free-mode.js

function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });

  function onTouchStart() {
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }

  function onTouchMove() {
    const {
      touchEventsData: data,
      touches
    } = swiper; // Velocity

    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: now()
    });
  }

  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    const {
      params,
      $wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper; // Time diff

    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;

    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || now() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;

        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }

  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/shared/effect-init.js
function effect_init_effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }

    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;

    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows

      swiper.slides.each(slideEl => {
        const $slideEl = swiper.$(slideEl);
        $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
      }); // create new one

      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;

    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }

    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/shared/effect-target.js
function effect_target_effectTarget(effectParams, $slideEl) {
  if (effectParams.transformEl) {
    return $slideEl.find(effectParams.transformEl).css({
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden'
    });
  }

  return $slideEl;
}
;// CONCATENATED MODULE: ./node_modules/swiper/shared/effect-virtual-transition-end.js
function effect_virtual_transition_end_effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformEl,
    allSlides
  } = _ref;
  const {
    slides,
    activeIndex,
    $wrapperEl
  } = swiper;

  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let $transitionEndTarget;

    if (allSlides) {
      $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
    } else {
      $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
    }

    $transitionEndTarget.transitionEnd(() => {
      if (eventTriggered) return;
      if (!swiper || swiper.destroyed) return;
      eventTriggered = true;
      swiper.animating = false;
      const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

      for (let i = 0; i < triggerEvents.length; i += 1) {
        $wrapperEl.trigger(triggerEvents[i]);
      }
    });
  }
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-fade/effect-fade.js



function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset = $slideEl[0].swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      const $targetEl = effect_target_effectTarget(params, $slideEl);
      $targetEl.css({
        opacity: slideOpacity
      }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.fadeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration);
    effect_virtual_transition_end_effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  effect_init_effectInit({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cube/effect-cube.js


function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });

  const createSlideShadows = ($slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

    if (shadowBefore.length === 0) {
      shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
      $slideEl.append(shadowBefore);
    }

    if (shadowAfter.length === 0) {
      shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
      $slideEl.append(shadowAfter);
    }

    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
  };

  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.each(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows($(slideEl), progress, isHorizontal);
    });
  };

  const setTranslate = () => {
    const {
      $el,
      $wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: `${swiperWidth}px`
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        createSlideShadows($slideEl, progress, isHorizontal);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }

    const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
    $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };

  const setTransition = duration => {
    const {
      $el,
      slides
    } = swiper;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  };

  effectInit({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/shared/create-shadow.js

function create_shadow_createShadow(params, $slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
  const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
  let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

  if (!$shadowEl.length) {
    $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
    $shadowContainer.append($shadowEl);
  }

  return $shadowEl;
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-flip/effect-flip.js





function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
      transformEl: null
    }
  });

  const createSlideShadows = ($slideEl, progress, params) => {
    let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

    if (shadowBefore.length === 0) {
      shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }

    if (shadowAfter.length === 0) {
      shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }

    if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
    if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
  };

  const recreateShadows = () => {
    // Set shadows
    const params = swiper.params.flipEffect;
    swiper.slides.each(slideEl => {
      const $slideEl = $(slideEl);
      let progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }

      createSlideShadows($slideEl, progress, params);
    });
  };

  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      const offset = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (params.slideShadows) {
        createSlideShadows($slideEl, progress, params);
      }

      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.flipEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl
    });
  };

  effectInit({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js



function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true,
      transformEl: null
    }
  });

  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth; // Each slide offset from center

    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.coverflowEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  };

  effectInit({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-creative/effect-creative.js




function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      transformEl: null,
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });

  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };

  const setTranslate = () => {
    const {
      slides,
      $wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;

    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
    }

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;

      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
      }

      const offset = $slideEl[0].swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;

      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }

      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };

      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      } // set translate


      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      }); // set rotates

      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

      if (custom && data.shadow || !custom) {
        let $shadowEl = $slideEl.children('.swiper-slide-shadow');

        if ($shadowEl.length === 0 && data.shadow) {
          $shadowEl = createShadow(params, $slideEl);
        }

        if ($shadowEl.length) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }

      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(transform).css({
        opacity: opacityString
      });

      if (data.origin) {
        $targetEl.css('transform-origin', data.origin);
      }
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.creativeEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl,
      allSlides: true
    });
  };

  effectInit({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cards/effect-cards.js




function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      transformEl: null,
      rotate: true
    }
  });

  const setTranslate = () => {
    const {
      slides,
      activeIndex
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = swiper.translate;

    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideProgress = $slideEl[0].progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = $slideEl[0].swiperSlideOffset;

      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
      }

      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }

      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -2 * progress;
      let tXAdd = 8 - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }

      if (progress < 0) {
        // next
        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }

      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }

      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;

      if (params.slideShadows) {
        // Set shadows
        let $shadowEl = $slideEl.find('.swiper-slide-shadow');

        if ($shadowEl.length === 0) {
          $shadowEl = createShadow(params, $slideEl);
        }

        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const $targetEl = effectTarget(params, $slideEl);
      $targetEl.transform(transform);
    }
  };

  const setTransition = duration => {
    const {
      transformEl
    } = swiper.params.cardsEffect;
    const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
    $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
    effectVirtualTransitionEnd({
      swiper,
      duration,
      transformEl
    });
  };

  effectInit({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}
;// CONCATENATED MODULE: ./node_modules/swiper/swiper.esm.js
/**
 * Swiper 8.2.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 29, 2022
 */

























;// CONCATENATED MODULE: ./src/js/libs/sliders.js


var sliderSwiper = function sliderSwiper() {
  if (document.querySelector(".main-banner-slider__swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new core(".main-banner-slider__swiper", {
      modules: [Navigation, Autoplay],
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 30,
      allowTouchMove: true,
      autoHeight: true,
      loop: true,
      // autoplay: {
      //   delay: 2000,
      // }
      // breakpoints: {
      //   // when window width is >= 320px
      //   320: {
      //     slidesPerView: 3,
      //     spaceBetween: 15,
      //     direction: "horizontal",
      //   },
      //   // when window width is >= 640px
      //   1200: {
      //     slidesPerView: 5,
      //     spaceBetween: 20,
      //     direction: "horizontal",
      //   },
      // },
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".main-banner-slider__button.main-banner-slider__button--prev",
        nextEl: ".main-banner-slider__button.main-banner-slider__button--next"
      }
    });
  }

  if (document.querySelector(".reviews-slider-mini__swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    var reviewsSliderMini = new core(".reviews-slider-mini__swiper", {
      slidesPerView: 5,
      spaceBetween: 40,
      allowTouchMove: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 15,
          direction: "horizontal"
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
          direction: "horizontal"
        }
      }
    });
  }

  if (document.querySelector(".reviews-slider__swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new core(".reviews-slider__swiper", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, EffectFade, Thumb],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      speed: 500,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      // Эффекты
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: reviewsSliderMini
      },
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false,
      //   },
      // Пагинация
      pagination: {
        el: ".description-slider__pagination",
        clickable: true
      },
      // Скроллбар

      /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */
      // Кнопки "влево/вправо"
      //   navigation: {
      //     prevEl: ".portfolio-slider__button.portfolio-slider__button--prev",
      //     nextEl: ".portfolio-slider__button.portfolio-slider__button--next",
      //   },
      // Брейкпоинты

      /*
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
                */
      // События
      on: {}
    });
  }

  if (document.querySelector(".cases-slider__swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new core(".cases-slider__swiper", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, EffectFade],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      speed: 500,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      // Эффекты
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false,
      //   },
      // Пагинация
      pagination: {
        el: ".cases-slider__pagination",
        type: "fraction",
        renderFraction: function renderFraction(currentClass, totalClass) {
          return '<span class="' + currentClass + '">' + "1" + "</span>" + "<span class=" + "slider-line" + "></span>" + '<span class="' + totalClass + '">' + "2";
        }
      },
      // Скроллбар

      /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".cases-slider__button.cases-slider__button--prev",
        nextEl: ".cases-slider__button.cases-slider__button--next"
      },
      // Брейкпоинты

      /*
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
                */
      // События
      on: {}
    });
  }

  if (document.querySelector(".cases-main-slider__swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    var casesMainSlider = new core(".cases-main-slider__swiper", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая 
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 500,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: false,
      //preloadImages: false,
      //lazy: true,
      // Эффекты
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false,
      //   },
      // Пагинация
      // Скроллбар

      /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".cases-main-slider__button.cases-main-slider__button--prev",
        nextEl: ".cases-main-slider__button.cases-main-slider__button--next"
      },
      // Брейкпоинты
      breakpoints: {
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
          autoHeight: true
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      // События
      on: {}
    });
  }

  if (document.querySelector(".cases-main-slider-img__swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new core(".cases-main-slider-img__swiper", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Thumb],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      speed: 500,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      thumbs: {
        swiper: casesMainSlider
      },
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false,
      //   },      
      // Скроллбар

      /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".cases-main-slider-img__button.cases-main-slider-img__button--prev",
        nextEl: ".cases-main-slider-img__button.cases-main-slider-img__button--next"
      },
      // Брейкпоинты

      /*
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
                */
      // События
      on: {}
    });
  }

  if (document.querySelector(".popup-case-slider__swiper")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new core(".popup-case-slider__swiper", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: false,
      speed: 500,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      //   autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false,
      //   },
      // Скроллбар

      /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".popup-case-slider__button.popup-case-slider__button--prev",
        nextEl: ".popup-case-slider__button.popup-case-slider__button--next"
      },
      // Брейкпоинты

      /*
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                },
                */
      // События
      on: {}
    });
  }
};

/* harmony default export */ var sliders = (sliderSwiper);
;// CONCATENATED MODULE: ./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js
/*!
 * lightgallery | 2.5.0 | June 13th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var lg_zoom_es5_assign = function () {
  lg_zoom_es5_assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return lg_zoom_es5_assign.apply(this, arguments);
};

var zoomSettings = {
  scale: 1,
  zoom: true,
  actualSize: true,
  showZoomInOutIcons: false,
  actualSizeIcons: {
    zoomIn: 'lg-zoom-in',
    zoomOut: 'lg-zoom-out'
  },
  enableZoomAfter: 300,
  zoomPluginStrings: {
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    viewActualSize: 'View actual size'
  }
};
/**
 * List of lightGallery events
 * All events should be documented here
 * Below interfaces are used to build the website documentations
 * */

var lg_zoom_es5_lGEvents = {
  afterAppendSlide: 'lgAfterAppendSlide',
  init: 'lgInit',
  hasVideo: 'lgHasVideo',
  containerResize: 'lgContainerResize',
  updateSlides: 'lgUpdateSlides',
  afterAppendSubHtml: 'lgAfterAppendSubHtml',
  beforeOpen: 'lgBeforeOpen',
  afterOpen: 'lgAfterOpen',
  slideItemLoad: 'lgSlideItemLoad',
  beforeSlide: 'lgBeforeSlide',
  afterSlide: 'lgAfterSlide',
  posterClick: 'lgPosterClick',
  dragStart: 'lgDragStart',
  dragMove: 'lgDragMove',
  dragEnd: 'lgDragEnd',
  beforeNextSlide: 'lgBeforeNextSlide',
  beforePrevSlide: 'lgBeforePrevSlide',
  beforeClose: 'lgBeforeClose',
  afterClose: 'lgAfterClose',
  rotateLeft: 'lgRotateLeft',
  rotateRight: 'lgRotateRight',
  flipHorizontal: 'lgFlipHorizontal',
  flipVertical: 'lgFlipVertical',
  autoplay: 'lgAutoplay',
  autoplayStart: 'lgAutoplayStart',
  autoplayStop: 'lgAutoplayStop'
};

var lg_zoom_es5_Zoom =
/** @class */
function () {
  function Zoom(instance, $LG) {
    // get lightGallery core plugin instance
    this.core = instance;
    this.$LG = $LG;
    this.settings = lg_zoom_es5_assign(lg_zoom_es5_assign({}, zoomSettings), this.core.settings);
    return this;
  } // Append Zoom controls. Actual size, Zoom-in, Zoom-out


  Zoom.prototype.buildTemplates = function () {
    var zoomIcons = this.settings.showZoomInOutIcons ? "<button id=\"" + this.core.getIdName('lg-zoom-in') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomIn'] + "\" class=\"lg-zoom-in lg-icon\"></button><button id=\"" + this.core.getIdName('lg-zoom-out') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomIn'] + "\" class=\"lg-zoom-out lg-icon\"></button>" : '';

    if (this.settings.actualSize) {
      zoomIcons += "<button id=\"" + this.core.getIdName('lg-actual-size') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['viewActualSize'] + "\" class=\"" + this.settings.actualSizeIcons.zoomIn + " lg-icon\"></button>";
    }

    this.core.outer.addClass('lg-use-transition-for-zoom');
    this.core.$toolbar.first().append(zoomIcons);
  };
  /**
   * @desc Enable zoom option only once the image is completely loaded
   * If zoomFromOrigin is true, Zoom is enabled once the dummy image has been inserted
   *
   * Zoom styles are defined under lg-zoomable CSS class.
   */


  Zoom.prototype.enableZoom = function (event) {
    var _this = this; // delay will be 0 except first time


    var _speed = this.settings.enableZoomAfter + event.detail.delay; // set _speed value 0 if gallery opened from direct url and if it is first slide


    if (this.$LG('body').first().hasClass('lg-from-hash') && event.detail.delay) {
      // will execute only once
      _speed = 0;
    } else {
      // Remove lg-from-hash to enable starting animation.
      this.$LG('body').first().removeClass('lg-from-hash');
    }

    this.zoomableTimeout = setTimeout(function () {
      if (!_this.isImageSlide()) {
        return;
      }

      _this.core.getSlideItem(event.detail.index).addClass('lg-zoomable');

      if (event.detail.index === _this.core.index) {
        _this.setZoomEssentials();
      }
    }, _speed + 30);
  };

  Zoom.prototype.enableZoomOnSlideItemLoad = function () {
    // Add zoomable class
    this.core.LGel.on(lg_zoom_es5_lGEvents.slideItemLoad + ".zoom", this.enableZoom.bind(this));
  };

  Zoom.prototype.getModifier = function (rotateValue, axis, el) {
    var originalRotate = rotateValue;
    rotateValue = Math.abs(rotateValue);
    var transformValues = this.getCurrentTransform(el);

    if (!transformValues) {
      return 1;
    }

    var modifier = 1;

    if (axis === 'X') {
      var flipHorizontalValue = Math.sign(parseFloat(transformValues[0]));

      if (rotateValue === 0 || rotateValue === 180) {
        modifier = 1;
      } else if (rotateValue === 90) {
        if (originalRotate === -90 && flipHorizontalValue === 1 || originalRotate === 90 && flipHorizontalValue === -1) {
          modifier = -1;
        } else {
          modifier = 1;
        }
      }

      modifier = modifier * flipHorizontalValue;
    } else {
      var flipVerticalValue = Math.sign(parseFloat(transformValues[3]));

      if (rotateValue === 0 || rotateValue === 180) {
        modifier = 1;
      } else if (rotateValue === 90) {
        var sinX = parseFloat(transformValues[1]);
        var sinMinusX = parseFloat(transformValues[2]);
        modifier = Math.sign(sinX * sinMinusX * originalRotate * flipVerticalValue);
      }

      modifier = modifier * flipVerticalValue;
    }

    return modifier;
  };

  Zoom.prototype.getImageSize = function ($image, rotateValue, axis) {
    var imageSizes = {
      y: 'offsetHeight',
      x: 'offsetWidth'
    };

    if (Math.abs(rotateValue) === 90) {
      // Swap axis
      if (axis === 'x') {
        axis = 'y';
      } else {
        axis = 'x';
      }
    }

    return $image[imageSizes[axis]];
  };

  Zoom.prototype.getDragCords = function (e, rotateValue) {
    if (rotateValue === 90) {
      return {
        x: e.pageY,
        y: e.pageX
      };
    } else {
      return {
        x: e.pageX,
        y: e.pageY
      };
    }
  };

  Zoom.prototype.getSwipeCords = function (e, rotateValue) {
    var x = e.targetTouches[0].pageX;
    var y = e.targetTouches[0].pageY;

    if (rotateValue === 90) {
      return {
        x: y,
        y: x
      };
    } else {
      return {
        x: x,
        y: y
      };
    }
  };

  Zoom.prototype.getDragAllowedAxises = function (rotateValue, scale) {
    scale = scale || this.scale || 1;
    var allowY = this.imageYSize * scale > this.containerRect.height;
    var allowX = this.imageXSize * scale > this.containerRect.width;

    if (rotateValue === 90) {
      return {
        allowX: allowY,
        allowY: allowX
      };
    } else {
      return {
        allowX: allowX,
        allowY: allowY
      };
    }
  };
  /**
   *
   * @param {Element} el
   * @return matrix(cos(X), sin(X), -sin(X), cos(X), 0, 0);
   * Get the current transform value
   */


  Zoom.prototype.getCurrentTransform = function (el) {
    if (!el) {
      return;
    }

    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue('-webkit-transform') || st.getPropertyValue('-moz-transform') || st.getPropertyValue('-ms-transform') || st.getPropertyValue('-o-transform') || st.getPropertyValue('transform') || 'none';

    if (tm !== 'none') {
      return tm.split('(')[1].split(')')[0].split(',');
    }

    return;
  };

  Zoom.prototype.getCurrentRotation = function (el) {
    if (!el) {
      return 0;
    }

    var values = this.getCurrentTransform(el);

    if (values) {
      return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI)); // If you want rotate in 360
      //return (angle < 0 ? angle + 360 : angle);
    }

    return 0;
  };

  Zoom.prototype.setZoomEssentials = function () {
    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
    var rotateEl = this.core.getSlideItem(this.core.index).find('.lg-img-rotate').first().get();
    this.rotateValue = this.getCurrentRotation(rotateEl);
    this.imageYSize = this.getImageSize($image.get(), this.rotateValue, 'y');
    this.imageXSize = this.getImageSize($image.get(), this.rotateValue, 'x');
    this.containerRect = this.core.outer.get().getBoundingClientRect();
    this.modifierX = this.getModifier(this.rotateValue, 'X', rotateEl);
    this.modifierY = this.getModifier(this.rotateValue, 'Y', rotateEl);
  };
  /**
   * @desc Image zoom
   * Translate the wrap and scale the image to get better user experience
   *
   * @param {String} scale - Zoom decrement/increment value
   */


  Zoom.prototype.zoomImage = function (scale) {
    // Find offset manually to avoid issue after zoom
    var offsetX = (this.containerRect.width - this.imageXSize) / 2 + this.containerRect.left;
    var _a = this.core.mediaContainerPosition,
        top = _a.top,
        bottom = _a.bottom;
    var topBottomSpacing = Math.abs(top - bottom) / 2;
    var offsetY = (this.containerRect.height - this.imageYSize - topBottomSpacing * this.modifierX) / 2 + this.scrollTop + this.containerRect.top;
    var originalX;
    var originalY;

    if (scale === 1) {
      this.positionChanged = false;
    }

    var dragAllowedAxises = this.getDragAllowedAxises(Math.abs(this.rotateValue), scale);
    var allowY = dragAllowedAxises.allowY,
        allowX = dragAllowedAxises.allowX;

    if (this.positionChanged) {
      originalX = this.left / (this.scale - 1);
      originalY = this.top / (this.scale - 1);
      this.pageX = Math.abs(originalX) + offsetX;
      this.pageY = Math.abs(originalY) + offsetY;
      this.positionChanged = false;
    }

    var possibleSwipeCords = this.getPossibleSwipeDragCords(this.rotateValue, scale);

    var _x = offsetX - this.pageX;

    var _y = offsetY - this.pageY;

    var x = (scale - 1) * _x;
    var y = (scale - 1) * _y;

    if (allowX) {
      if (this.isBeyondPossibleLeft(x, possibleSwipeCords.minX)) {
        x = possibleSwipeCords.minX;
      } else if (this.isBeyondPossibleRight(x, possibleSwipeCords.maxX)) {
        x = possibleSwipeCords.maxX;
      }
    } else {
      if (scale > 1) {
        if (x < possibleSwipeCords.minX) {
          x = possibleSwipeCords.minX;
        } else if (x > possibleSwipeCords.maxX) {
          x = possibleSwipeCords.maxX;
        }
      }
    }

    if (allowY) {
      if (this.isBeyondPossibleTop(y, possibleSwipeCords.minY)) {
        y = possibleSwipeCords.minY;
      } else if (this.isBeyondPossibleBottom(y, possibleSwipeCords.maxY)) {
        y = possibleSwipeCords.maxY;
      }
    } else {
      // If the translate value based on index of beyond the viewport, utilize the available space to prevent image being cut out
      if (scale > 1) {
        //If image goes beyond viewport top, use the minim possible translate value
        if (y < possibleSwipeCords.minY) {
          y = possibleSwipeCords.minY;
        } else if (y > possibleSwipeCords.maxY) {
          y = possibleSwipeCords.maxY;
        }
      }
    }

    this.setZoomStyles({
      x: x,
      y: y,
      scale: scale
    });
  };
  /**
   * @desc apply scale3d to image and translate to image wrap
   * @param {style} X,Y and scale
   */


  Zoom.prototype.setZoomStyles = function (style) {
    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
    var $dummyImage = this.core.outer.find('.lg-current .lg-dummy-img').first();
    var $imageWrap = $image.parent();
    this.scale = style.scale;
    $image.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
    $dummyImage.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
    var transform = 'translate3d(' + style.x + 'px, ' + style.y + 'px, 0)';
    $imageWrap.css('transform', transform);
    this.left = style.x;
    this.top = style.y;
  };
  /**
   * @param index - Index of the current slide
   * @param event - event will be available only if the function is called on clicking/taping the imags
   */


  Zoom.prototype.setActualSize = function (index, event) {
    var _this = this; // Allow zoom only on image


    if (!this.isImageSlide() || this.core.outer.hasClass('lg-first-slide-loading')) {
      return;
    }

    var scale = this.getCurrentImageActualSizeScale();

    if (this.core.outer.hasClass('lg-zoomed')) {
      this.scale = 1;
    } else {
      this.scale = this.getScale(scale);
    }

    this.setPageCords(event);
    this.beginZoom(this.scale);
    this.zoomImage(this.scale);
    setTimeout(function () {
      _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
    }, 10);
  };

  Zoom.prototype.getNaturalWidth = function (index) {
    var $image = this.core.getSlideItem(index).find('.lg-image').first();
    var naturalWidth = this.core.galleryItems[index].width;
    return naturalWidth ? parseFloat(naturalWidth) : $image.get().naturalWidth;
  };

  Zoom.prototype.getActualSizeScale = function (naturalWidth, width) {
    var _scale;

    var scale;

    if (naturalWidth > width) {
      _scale = naturalWidth / width;
      scale = _scale || 2;
    } else {
      scale = 1;
    }

    return scale;
  };

  Zoom.prototype.getCurrentImageActualSizeScale = function () {
    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
    var width = $image.get().offsetWidth;
    var naturalWidth = this.getNaturalWidth(this.core.index) || width;
    return this.getActualSizeScale(naturalWidth, width);
  };

  Zoom.prototype.getPageCords = function (event) {
    var cords = {};

    if (event) {
      cords.x = event.pageX || event.targetTouches[0].pageX;
      cords.y = event.pageY || event.targetTouches[0].pageY;
    } else {
      var containerRect = this.core.outer.get().getBoundingClientRect();
      cords.x = containerRect.width / 2 + containerRect.left;
      cords.y = containerRect.height / 2 + this.scrollTop + containerRect.top;
    }

    return cords;
  };

  Zoom.prototype.setPageCords = function (event) {
    var pageCords = this.getPageCords(event);
    this.pageX = pageCords.x;
    this.pageY = pageCords.y;
  }; // If true, zoomed - in else zoomed out


  Zoom.prototype.beginZoom = function (scale) {
    this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');

    if (scale > 1) {
      this.core.outer.addClass('lg-zoomed');
      var $actualSize = this.core.getElementById('lg-actual-size');
      $actualSize.removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut);
    } else {
      this.resetZoom();
    }

    return scale > 1;
  };

  Zoom.prototype.getScale = function (scale) {
    var actualSizeScale = this.getCurrentImageActualSizeScale();

    if (scale < 1) {
      scale = 1;
    } else if (scale > actualSizeScale) {
      scale = actualSizeScale;
    }

    return scale;
  };

  Zoom.prototype.init = function () {
    var _this = this;

    if (!this.settings.zoom) {
      return;
    }

    this.buildTemplates();
    this.enableZoomOnSlideItemLoad();
    var tapped = null;
    this.core.outer.on('dblclick.lg', function (event) {
      if (!_this.$LG(event.target).hasClass('lg-image')) {
        return;
      }

      _this.setActualSize(_this.core.index, event);
    });
    this.core.outer.on('touchstart.lg', function (event) {
      var $target = _this.$LG(event.target);

      if (event.targetTouches.length === 1 && $target.hasClass('lg-image')) {
        if (!tapped) {
          tapped = setTimeout(function () {
            tapped = null;
          }, 300);
        } else {
          clearTimeout(tapped);
          tapped = null;
          event.preventDefault();

          _this.setActualSize(_this.core.index, event);
        }
      }
    }); // Update zoom on resize and orientationchange

    this.core.LGel.on(lg_zoom_es5_lGEvents.containerResize + ".zoom " + lg_zoom_es5_lGEvents.rotateRight + ".zoom " + lg_zoom_es5_lGEvents.rotateLeft + ".zoom " + lg_zoom_es5_lGEvents.flipHorizontal + ".zoom " + lg_zoom_es5_lGEvents.flipVertical + ".zoom", function () {
      if (!_this.core.lgOpened || !_this.isImageSlide()) return;

      _this.setPageCords();

      _this.setZoomEssentials();

      _this.zoomImage(_this.scale);
    }); // Update zoom on resize and orientationchange

    this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function () {
      if (!_this.core.lgOpened) return;
      _this.scrollTop = _this.$LG(window).scrollTop();
    });
    this.core.getElementById('lg-zoom-out').on('click.lg', function () {
      if (_this.core.outer.find('.lg-current .lg-image').get()) {
        _this.scale -= _this.settings.scale;
        _this.scale = _this.getScale(_this.scale);

        _this.beginZoom(_this.scale);

        _this.zoomImage(_this.scale);
      }
    });
    this.core.getElementById('lg-zoom-in').on('click.lg', function () {
      _this.zoomIn();
    });
    this.core.getElementById('lg-actual-size').on('click.lg', function () {
      _this.setActualSize(_this.core.index);
    });
    this.core.LGel.on(lg_zoom_es5_lGEvents.beforeOpen + ".zoom", function () {
      _this.core.outer.find('.lg-item').removeClass('lg-zoomable');
    });
    this.core.LGel.on(lg_zoom_es5_lGEvents.afterOpen + ".zoom", function () {
      _this.scrollTop = _this.$LG(window).scrollTop(); // Set the initial value center

      _this.pageX = _this.core.outer.width() / 2;
      _this.pageY = _this.core.outer.height() / 2 + _this.scrollTop;
      _this.scale = 1;
    }); // Reset zoom on slide change

    this.core.LGel.on(lg_zoom_es5_lGEvents.afterSlide + ".zoom", function (event) {
      var prevIndex = event.detail.prevIndex;
      _this.scale = 1;
      _this.positionChanged = false;

      _this.resetZoom(prevIndex);

      if (_this.isImageSlide()) {
        _this.setZoomEssentials();
      }
    }); // Drag option after zoom

    this.zoomDrag();
    this.pinchZoom();
    this.zoomSwipe(); // Store the zoomable timeout value just to clear it while closing

    this.zoomableTimeout = false;
    this.positionChanged = false;
  };

  Zoom.prototype.zoomIn = function (scale) {
    // Allow zoom only on image
    if (!this.isImageSlide()) {
      return;
    }

    if (scale) {
      this.scale = scale;
    } else {
      this.scale += this.settings.scale;
    }

    this.scale = this.getScale(this.scale);
    this.beginZoom(this.scale);
    this.zoomImage(this.scale);
  }; // Reset zoom effect


  Zoom.prototype.resetZoom = function (index) {
    this.core.outer.removeClass('lg-zoomed lg-zoom-drag-transition');
    var $actualSize = this.core.getElementById('lg-actual-size');
    var $item = this.core.getSlideItem(index !== undefined ? index : this.core.index);
    $actualSize.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn);
    $item.find('.lg-img-wrap').first().removeAttr('style');
    $item.find('.lg-image').first().removeAttr('style');
    this.scale = 1;
    this.left = 0;
    this.top = 0; // Reset pagx pagy values to center

    this.setPageCords();
  };

  Zoom.prototype.getTouchDistance = function (e) {
    return Math.sqrt((e.targetTouches[0].pageX - e.targetTouches[1].pageX) * (e.targetTouches[0].pageX - e.targetTouches[1].pageX) + (e.targetTouches[0].pageY - e.targetTouches[1].pageY) * (e.targetTouches[0].pageY - e.targetTouches[1].pageY));
  };

  Zoom.prototype.pinchZoom = function () {
    var _this = this;

    var startDist = 0;
    var pinchStarted = false;
    var initScale = 1;
    var $item = this.core.getSlideItem(this.core.index);
    this.core.$inner.on('touchstart.lg', function (e) {
      $item = _this.core.getSlideItem(_this.core.index);

      if (!_this.isImageSlide()) {
        return;
      }

      if (e.targetTouches.length === 2 && !_this.core.outer.hasClass('lg-first-slide-loading') && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
        initScale = _this.scale || 1;

        _this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');

        _this.core.touchAction = 'pinch';
        startDist = _this.getTouchDistance(e);
      }
    });
    this.core.$inner.on('touchmove.lg', function (e) {
      if (e.targetTouches.length === 2 && _this.core.touchAction === 'pinch' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
        e.preventDefault();

        var endDist = _this.getTouchDistance(e);

        var distance = startDist - endDist;

        if (!pinchStarted && Math.abs(distance) > 5) {
          pinchStarted = true;
        }

        if (pinchStarted) {
          _this.scale = Math.max(1, initScale + -distance * 0.008);

          _this.zoomImage(_this.scale);
        }
      }
    });
    this.core.$inner.on('touchend.lg', function (e) {
      if (_this.core.touchAction === 'pinch' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
        pinchStarted = false;
        startDist = 0;

        if (_this.scale <= 1) {
          _this.resetZoom();
        } else {
          _this.scale = _this.getScale(_this.scale);

          _this.zoomImage(_this.scale);

          _this.core.outer.addClass('lg-zoomed');
        }

        _this.core.touchAction = undefined;
      }
    });
  };

  Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY, touchDuration, rotateValue) {
    var distanceXnew = endCoords.x - startCoords.x;
    var distanceYnew = endCoords.y - startCoords.y;
    var speedX = Math.abs(distanceXnew) / touchDuration + 1;
    var speedY = Math.abs(distanceYnew) / touchDuration + 1;

    if (speedX > 2) {
      speedX += 1;
    }

    if (speedY > 2) {
      speedY += 1;
    }

    distanceXnew = distanceXnew * speedX;
    distanceYnew = distanceYnew * speedY;

    var _LGel = this.core.getSlideItem(this.core.index).find('.lg-img-wrap').first();

    var distance = {};
    distance.x = this.left + distanceXnew * this.modifierX;
    distance.y = this.top + distanceYnew * this.modifierY;
    var possibleSwipeCords = this.getPossibleSwipeDragCords(rotateValue);

    if (Math.abs(distanceXnew) > 15 || Math.abs(distanceYnew) > 15) {
      if (allowY) {
        if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
          distance.y = possibleSwipeCords.minY;
        } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
          distance.y = possibleSwipeCords.maxY;
        }
      }

      if (allowX) {
        if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
          distance.x = possibleSwipeCords.minX;
        } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
          distance.x = possibleSwipeCords.maxX;
        }
      }

      if (allowY) {
        this.top = distance.y;
      } else {
        distance.y = this.top;
      }

      if (allowX) {
        this.left = distance.x;
      } else {
        distance.x = this.left;
      }

      this.setZoomSwipeStyles(_LGel, distance);
      this.positionChanged = true;
    }
  };

  Zoom.prototype.getZoomSwipeCords = function (startCoords, endCoords, allowX, allowY, possibleSwipeCords) {
    var distance = {};

    if (allowY) {
      distance.y = this.top + (endCoords.y - startCoords.y) * this.modifierY;

      if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
        var diffMinY = possibleSwipeCords.minY - distance.y;
        distance.y = possibleSwipeCords.minY - diffMinY / 6;
      } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
        var diffMaxY = distance.y - possibleSwipeCords.maxY;
        distance.y = possibleSwipeCords.maxY + diffMaxY / 6;
      }
    } else {
      distance.y = this.top;
    }

    if (allowX) {
      distance.x = this.left + (endCoords.x - startCoords.x) * this.modifierX;

      if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
        var diffMinX = possibleSwipeCords.minX - distance.x;
        distance.x = possibleSwipeCords.minX - diffMinX / 6;
      } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
        var difMaxX = distance.x - possibleSwipeCords.maxX;
        distance.x = possibleSwipeCords.maxX + difMaxX / 6;
      }
    } else {
      distance.x = this.left;
    }

    return distance;
  };

  Zoom.prototype.isBeyondPossibleLeft = function (x, minX) {
    return x >= minX;
  };

  Zoom.prototype.isBeyondPossibleRight = function (x, maxX) {
    return x <= maxX;
  };

  Zoom.prototype.isBeyondPossibleTop = function (y, minY) {
    return y >= minY;
  };

  Zoom.prototype.isBeyondPossibleBottom = function (y, maxY) {
    return y <= maxY;
  };

  Zoom.prototype.isImageSlide = function () {
    var currentItem = this.core.galleryItems[this.core.index];
    return this.core.getSlideType(currentItem) === 'image';
  };

  Zoom.prototype.getPossibleSwipeDragCords = function (rotateValue, scale) {
    var dataScale = scale || this.scale || 1;
    var elDataScale = Math.abs(dataScale);
    var _a = this.core.mediaContainerPosition,
        top = _a.top,
        bottom = _a.bottom;
    var topBottomSpacing = Math.abs(top - bottom) / 2;
    var minY = (this.imageYSize - this.containerRect.height) / 2 + topBottomSpacing * this.modifierX;
    var maxY = this.containerRect.height - this.imageYSize * elDataScale + minY;
    var minX = (this.imageXSize - this.containerRect.width) / 2;
    var maxX = this.containerRect.width - this.imageXSize * elDataScale + minX;
    var possibleSwipeCords = {
      minY: minY,
      maxY: maxY,
      minX: minX,
      maxX: maxX
    };

    if (Math.abs(rotateValue) === 90) {
      possibleSwipeCords = {
        minY: minX,
        maxY: maxX,
        minX: minY,
        maxX: maxY
      };
    }

    return possibleSwipeCords;
  };

  Zoom.prototype.setZoomSwipeStyles = function (LGel, distance) {
    LGel.css('transform', 'translate3d(' + distance.x + 'px, ' + distance.y + 'px, 0)');
  };

  Zoom.prototype.zoomSwipe = function () {
    var _this = this;

    var startCoords = {};
    var endCoords = {};
    var isMoved = false; // Allow x direction drag

    var allowX = false; // Allow Y direction drag

    var allowY = false;
    var startTime = new Date();
    var endTime = new Date();
    var possibleSwipeCords;

    var _LGel;

    var $item = this.core.getSlideItem(this.core.index);
    this.core.$inner.on('touchstart.lg', function (e) {
      // Allow zoom only on image
      if (!_this.isImageSlide()) {
        return;
      }

      $item = _this.core.getSlideItem(_this.core.index);

      if ((_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) && e.targetTouches.length === 1 && _this.core.outer.hasClass('lg-zoomed')) {
        e.preventDefault();
        startTime = new Date();
        _this.core.touchAction = 'zoomSwipe';
        _LGel = _this.core.getSlideItem(_this.core.index).find('.lg-img-wrap').first();

        var dragAllowedAxises = _this.getDragAllowedAxises(Math.abs(_this.rotateValue));

        allowY = dragAllowedAxises.allowY;
        allowX = dragAllowedAxises.allowX;

        if (allowX || allowY) {
          startCoords = _this.getSwipeCords(e, Math.abs(_this.rotateValue));
        }

        possibleSwipeCords = _this.getPossibleSwipeDragCords(_this.rotateValue); // reset opacity and transition duration

        _this.core.outer.addClass('lg-zoom-dragging lg-zoom-drag-transition');
      }
    });
    this.core.$inner.on('touchmove.lg', function (e) {
      if (e.targetTouches.length === 1 && _this.core.touchAction === 'zoomSwipe' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
        e.preventDefault();
        _this.core.touchAction = 'zoomSwipe';
        endCoords = _this.getSwipeCords(e, Math.abs(_this.rotateValue));

        var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);

        if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
          isMoved = true;

          _this.setZoomSwipeStyles(_LGel, distance);
        }
      }
    });
    this.core.$inner.on('touchend.lg', function (e) {
      if (_this.core.touchAction === 'zoomSwipe' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
        _this.core.touchAction = undefined;

        _this.core.outer.removeClass('lg-zoom-dragging');

        if (!isMoved) {
          return;
        }

        isMoved = false;
        endTime = new Date();
        var touchDuration = endTime.valueOf() - startTime.valueOf();

        _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration, _this.rotateValue);
      }
    });
  };

  Zoom.prototype.zoomDrag = function () {
    var _this = this;

    var startCoords = {};
    var endCoords = {};
    var isDragging = false;
    var isMoved = false; // Allow x direction drag

    var allowX = false; // Allow Y direction drag

    var allowY = false;
    var startTime;
    var endTime;
    var possibleSwipeCords;

    var _LGel;

    this.core.outer.on('mousedown.lg.zoom', function (e) {
      // Allow zoom only on image
      if (!_this.isImageSlide()) {
        return;
      }

      var $item = _this.core.getSlideItem(_this.core.index);

      if (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) {
        startTime = new Date();
        _LGel = _this.core.getSlideItem(_this.core.index).find('.lg-img-wrap').first();

        var dragAllowedAxises = _this.getDragAllowedAxises(Math.abs(_this.rotateValue));

        allowY = dragAllowedAxises.allowY;
        allowX = dragAllowedAxises.allowX;

        if (_this.core.outer.hasClass('lg-zoomed')) {
          if (_this.$LG(e.target).hasClass('lg-object') && (allowX || allowY)) {
            e.preventDefault();
            startCoords = _this.getDragCords(e, Math.abs(_this.rotateValue));
            possibleSwipeCords = _this.getPossibleSwipeDragCords(_this.rotateValue);
            isDragging = true; // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723

            _this.core.outer.get().scrollLeft += 1;
            _this.core.outer.get().scrollLeft -= 1;

            _this.core.outer.removeClass('lg-grab').addClass('lg-grabbing lg-zoom-drag-transition lg-zoom-dragging'); // reset opacity and transition duration

          }
        }
      }
    });
    this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function (e) {
      if (isDragging) {
        isMoved = true;
        endCoords = _this.getDragCords(e, Math.abs(_this.rotateValue));

        var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);

        _this.setZoomSwipeStyles(_LGel, distance);
      }
    });
    this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function (e) {
      if (isDragging) {
        endTime = new Date();
        isDragging = false;

        _this.core.outer.removeClass('lg-zoom-dragging'); // Fix for chrome mouse move on click


        if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
          endCoords = _this.getDragCords(e, Math.abs(_this.rotateValue));
          var touchDuration = endTime.valueOf() - startTime.valueOf();

          _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration, _this.rotateValue);
        }

        isMoved = false;
      }

      _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
    });
  };

  Zoom.prototype.closeGallery = function () {
    this.resetZoom();
  };

  Zoom.prototype.destroy = function () {
    // Unbind all events added by lightGallery zoom plugin
    this.$LG(window).off(".lg.zoom.global" + this.core.lgId);
    this.core.LGel.off('.lg.zoom');
    this.core.LGel.off('.zoom');
    clearTimeout(this.zoomableTimeout);
    this.zoomableTimeout = false;
  };

  return Zoom;
}();

/* harmony default export */ var lg_zoom_es5 = (lg_zoom_es5_Zoom);
;// CONCATENATED MODULE: ./src/js/libs/lightgalery.js
 // Plugins



var galeryInit = function galeryInit() {
  var galleries = document.querySelectorAll("[data-gallery]");

  if (galleries.length) {
    galleries.forEach(function (gallery) {
      lightgallery_es5(gallery), {
        plugins: [lg_zoom_es5],
        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
        speed: 500
      };
    });
  }
};

/* harmony default export */ var lightgalery = (galeryInit);
;// CONCATENATED MODULE: ./src/js/module/afterBeforeVertical.js
var afterBeforeVertical = function afterBeforeVertical() {
  var project = document.querySelectorAll("#afterBefore");
  var body = document.body;
  var isActive = false;
  document.addEventListener("DOMContentLoaded", function (event) {
    window.onresize = function () {
      resize_info();
    };
  });

  function resize_info() {
    projectFunction();
  }

  var projectFunction = function projectFunction() {
    setTimeout(function () {
      project.forEach(function (i) {
        var before = i.querySelector(".after-before__after");
        var change = i.querySelector(".after-before__line");
        var beforeImage = before.querySelector("img");
        var height = i.offsetHeight;
        beforeImage.style.height = "".concat(height, "px");

        var beforeAfterSlider = function beforeAfterSlider(x) {
          var shift = Math.max(0, Math.min(x, i.offsetHeight));
          before.style.height = "".concat(shift, "px");
          change.style.top = "".concat(shift, "px");
        };

        var pauseEvents = function pauseEvents(e) {
          e.stopPropagation();
          return false;
        };

        change.addEventListener("mousedown", function () {
          isActive = true;
        });
        i.addEventListener("mouseup", function () {
          isActive = false;
        });
        i.addEventListener("mouseleave", function () {
          isActive = false;
        });
        i.addEventListener("mousemove", function (e) {
          if (!isActive) {
            return;
          }

          var x = e.pageY;
          x -= i.offsetTop;
          beforeAfterSlider(x);
          pauseEvents(e);
        });
        change.addEventListener("touchstart", function () {
          isActive = true;
          body.classList.add('_lock');
        });
        i.addEventListener("touchend", function () {
          isActive = false;
          body.classList.remove('_lock');
        });
        i.addEventListener("touchcancel", function () {
          isActive = false;
          body.classList.remove('_lock');
        });
        i.addEventListener("touchcancel", function () {
          isActive = false;
          body.classList.remove('_lock');
        });
        i.addEventListener("touchmove", function (e) {
          if (!isActive) {
            body.classList.remove('_lock');
            return;
          }

          var x;

          for (var item = 0; item < e.changedTouches.length; item++) {
            x = e.changedTouches[item].pageY;
          }

          x -= i.offsetTop;
          beforeAfterSlider(x);
          pauseEvents(e);
        });
      });
    }, 5);
  };

  projectFunction();
};

/* harmony default export */ var module_afterBeforeVertical = (afterBeforeVertical);
;// CONCATENATED MODULE: ./src/js/module/goToBlock.js
var goToBlock = function goToBlock() {
  var blockToGo = document.querySelectorAll("[data-goTo]");
  var menu = document.querySelector(".menu__body");
  var body = document.querySelector("body");

  if (blockToGo) {
    blockToGo.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var place = document.getElementById(btn.getAttribute("data-goTo"));

        if (menu.classList.contains("_open")) {
          menu.classList.remove("_open");
        }

        if (body.classList.contains("_lock")) {
          body.classList.remove("_lock");
        }

        place.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  }
};

/* harmony default export */ var module_goToBlock = (goToBlock);
;// CONCATENATED MODULE: ./src/js/module/spollers.js
var spollers = function spollers() {
  var spollersButton = document.querySelectorAll("[data-spoller-item] button");
  var spollersBody = document.querySelectorAll("[data-spoller-item] > div");

  var removeClass = function removeClass() {
    spollersButton.forEach(function (btn) {
      if (btn.classList.contains("_active")) {
        btn.classList.remove("_active");
      }
    });
    spollersBody.forEach(function (container) {
      if (container.classList.contains("_active")) {
        container.classList.remove("_active");
      }
    });
  };

  if (spollersButton) {
    spollersButton.forEach(function (btn, index) {
      btn.addEventListener("click", function () {
        if (btn.classList.contains("_active")) {
          btn.classList.remove("_active");
          spollersBody[index].classList.remove("_active");
        } else {
          removeClass();
          btn.classList.add("_active");
          spollersBody[index].classList.add("_active");
        }
      });
    });
  }
};

/* harmony default export */ var module_spollers = (spollers);
;// CONCATENATED MODULE: ./src/js/module/script.js
var script = function script() {
  var goBtn = document.querySelectorAll("[data-go]");
  var locationTabsBtn = document.querySelectorAll(".location__tabs-button");
  var locationTabsImg = document.querySelectorAll(".location__image");
  var showRoomTabs = document.querySelector("[data-showroom-tabs]");
  var showRoomImg = document.querySelectorAll(".show-room__image");
  var designerImagesContainer = document.querySelectorAll(".designer__images");
  designerImagesContainer.forEach(function (container) {
    var mainImage = container.querySelector('.designer__main-image img');
    var secondImages = container.querySelectorAll('.designer__second-image');
    secondImages.forEach(function (image) {
      image.addEventListener('click', function (e) {
        var img = image.querySelector('img');

        if (e.target == img) {
          mainImage.src = img.src;
        }
      });
    });
  });

  if (locationTabsBtn) {
    locationTabsBtn.forEach(function (tabsBtn, index) {
      tabsBtn.addEventListener("click", function (e) {
        if (e.target.closest(".location__tabs-map")) {
          console.log(e.target);
          var popupWindow = document.querySelector(e.target.getAttribute("data-popup"));
          popupWindow.classList.add("popup__show");
        } else {
          locationTabsBtn.forEach(function (tabsBtn) {
            if (tabsBtn.classList.contains("_active")) {
              tabsBtn.classList.remove("_active");
            }
          });
          locationTabsImg.forEach(function (tabsImg) {
            if (tabsImg.classList.contains("_active")) {
              tabsImg.classList.remove("_active");
            }
          });
          tabsBtn.classList.add("_active");
          locationTabsImg[index].classList.add("_active");
        }
      });
    });
  }

  goBtn.forEach(function (goBtn) {
    goBtn.addEventListener("click", function () {
      var block = document.querySelector(goBtn.getAttribute("data-go"));
      block.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  if (showRoomTabs) {
    var showRoomBtn = showRoomTabs.querySelectorAll(".show-room__button");
    var showRoomBody = showRoomTabs.querySelectorAll(".show-room__tabs-body");

    var removeTabsActive = function removeTabsActive() {
      showRoomBtn.forEach(function (btn) {
        if (btn.classList.contains("_active")) {
          btn.classList.remove("_active");
        }
      });
      showRoomBody.forEach(function (body) {
        if (body.classList.contains("_active")) {
          body.classList.remove("_active");
        }
      });
      showRoomImg.forEach(function (img) {
        if (img.classList.contains("_active")) {
          img.classList.remove("_active");
        }
      });
    };

    showRoomBtn.forEach(function (btn, index) {
      btn.addEventListener("click", function () {
        removeTabsActive();
        btn.classList.add("_active");
        showRoomBody[index].classList.add("_active");
        showRoomImg[index].classList.add("_active");
      });
    });
  }
};

/* harmony default export */ var module_script = (script);
;// CONCATENATED MODULE: ./src/js/index.js
// Подключение css

 // Подключение js файлов
// window.Vue = require("vue");
// Vue.createApp({})
//   .component("example-component", require("../components/Example.vue"))
//   .mount("#app");
// Подключение мобильного меню


mobileMenu(); // Подключения блока с попапами


module_popup();

module_zoomSlider();

module_tabs();

libs_mask();

module_customSlider(); // Импорт слайдеров (swiper)


sliders(); //  Подключение Галереи


lightgalery(); // Импорт after-before слайдера (swiper)


module_afterBeforeVertical(); //Подключение спойлеров


module_goToBlock(); //Подключение спойлеров


module_spollers(); // Подключение дополнительного файла скрипта


module_script();
}();
/******/ })()
;