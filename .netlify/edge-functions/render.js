var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/_app/immutable/chunks/index-11f55250.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_index_11f55250 = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/index-11f55250.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/_app/immutable/chunks/hooks-bced8853.js
var hooks_bced8853_exports = {};
var init_hooks_bced8853 = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/hooks-bced8853.js"() {
  }
});

// node_modules/uikit/dist/js/uikit.js
var require_uikit = __commonJS({
  "node_modules/uikit/dist/js/uikit.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define("uikit", factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.UIkit = factory());
    })(exports, function() {
      "use strict";
      const { hasOwnProperty, toString } = Object.prototype;
      function hasOwn(obj, key2) {
        return hasOwnProperty.call(obj, key2);
      }
      const hyphenateRe = /\B([A-Z])/g;
      const hyphenate = memoize((str) => str.replace(hyphenateRe, "-$1").toLowerCase());
      const camelizeRe = /-(\w)/g;
      const camelize = memoize((str) => str.replace(camelizeRe, toUpper));
      const ucfirst = memoize((str) => str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : "");
      function toUpper(_, c) {
        return c ? c.toUpperCase() : "";
      }
      function startsWith(str, search) {
        return str == null ? void 0 : str.startsWith == null ? void 0 : str.startsWith(search);
      }
      function endsWith(str, search) {
        return str == null ? void 0 : str.endsWith == null ? void 0 : str.endsWith(search);
      }
      function includes(obj, search) {
        return obj == null ? void 0 : obj.includes == null ? void 0 : obj.includes(search);
      }
      function findIndex(array2, predicate) {
        return array2 == null ? void 0 : array2.findIndex == null ? void 0 : array2.findIndex(predicate);
      }
      const { isArray, from: toArray } = Array;
      const { assign } = Object;
      function isFunction(obj) {
        return typeof obj === "function";
      }
      function isObject(obj) {
        return obj !== null && typeof obj === "object";
      }
      function isPlainObject(obj) {
        return toString.call(obj) === "[object Object]";
      }
      function isWindow(obj) {
        return isObject(obj) && obj === obj.window;
      }
      function isDocument(obj) {
        return nodeType(obj) === 9;
      }
      function isNode(obj) {
        return nodeType(obj) >= 1;
      }
      function isElement(obj) {
        return nodeType(obj) === 1;
      }
      function nodeType(obj) {
        return !isWindow(obj) && isObject(obj) && obj.nodeType;
      }
      function isBoolean(value) {
        return typeof value === "boolean";
      }
      function isString(value) {
        return typeof value === "string";
      }
      function isNumber(value) {
        return typeof value === "number";
      }
      function isNumeric(value) {
        return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
      }
      function isEmpty(obj) {
        return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
      }
      function isUndefined(value) {
        return value === void 0;
      }
      function toBoolean(value) {
        return isBoolean(value) ? value : value === "true" || value === "1" || value === "" ? true : value === "false" || value === "0" ? false : value;
      }
      function toNumber(value) {
        const number = Number(value);
        return isNaN(number) ? false : number;
      }
      function toFloat(value) {
        return parseFloat(value) || 0;
      }
      function toNode(element) {
        return toNodes(element)[0];
      }
      function toNodes(element) {
        return element && (isNode(element) ? [element] : Array.from(element).filter(isNode)) || [];
      }
      function toWindow(element) {
        var _element;
        if (isWindow(element)) {
          return element;
        }
        element = toNode(element);
        const document2 = isDocument(element) ? element : (_element = element) == null ? void 0 : _element.ownerDocument;
        return (document2 == null ? void 0 : document2.defaultView) || window;
      }
      function isEqual(value, other) {
        return value === other || isObject(value) && isObject(other) && Object.keys(value).length === Object.keys(other).length && each2(value, (val, key2) => val === other[key2]);
      }
      function swap(value, a, b) {
        return value.replace(new RegExp(a + "|" + b, "g"), (match2) => match2 === a ? b : a);
      }
      function last(array2) {
        return array2[array2.length - 1];
      }
      function each2(obj, cb) {
        for (const key2 in obj) {
          if (false === cb(obj[key2], key2)) {
            return false;
          }
        }
        return true;
      }
      function sortBy$1(array2, prop) {
        return array2.slice().sort((_ref, _ref2) => {
          let { [prop]: propA = 0 } = _ref;
          let { [prop]: propB = 0 } = _ref2;
          return propA > propB ? 1 : propB > propA ? -1 : 0;
        });
      }
      function uniqueBy(array2, prop) {
        const seen = /* @__PURE__ */ new Set();
        return array2.filter((_ref3) => {
          let { [prop]: check } = _ref3;
          return seen.has(check) ? false : seen.add(check);
        });
      }
      function clamp(number, min, max) {
        if (min === void 0) {
          min = 0;
        }
        if (max === void 0) {
          max = 1;
        }
        return Math.min(Math.max(toNumber(number) || 0, min), max);
      }
      function noop3() {
      }
      function intersectRect() {
        for (var _len = arguments.length, rects = new Array(_len), _key = 0; _key < _len; _key++) {
          rects[_key] = arguments[_key];
        }
        return [
          ["bottom", "top"],
          ["right", "left"]
        ].every((_ref4) => {
          let [minProp, maxProp] = _ref4;
          return Math.min(...rects.map((_ref5) => {
            let { [minProp]: min } = _ref5;
            return min;
          })) - Math.max(...rects.map((_ref6) => {
            let { [maxProp]: max } = _ref6;
            return max;
          })) > 0;
        });
      }
      function pointInRect(point, rect) {
        return point.x <= rect.right && point.x >= rect.left && point.y <= rect.bottom && point.y >= rect.top;
      }
      function ratio(dimensions2, prop, value) {
        const aProp = prop === "width" ? "height" : "width";
        return {
          [aProp]: dimensions2[prop] ? Math.round(value * dimensions2[aProp] / dimensions2[prop]) : dimensions2[aProp],
          [prop]: value
        };
      }
      function contain(dimensions2, maxDimensions) {
        dimensions2 = { ...dimensions2 };
        for (const prop in dimensions2) {
          dimensions2 = dimensions2[prop] > maxDimensions[prop] ? ratio(dimensions2, prop, maxDimensions[prop]) : dimensions2;
        }
        return dimensions2;
      }
      function cover$1(dimensions2, maxDimensions) {
        dimensions2 = contain(dimensions2, maxDimensions);
        for (const prop in dimensions2) {
          dimensions2 = dimensions2[prop] < maxDimensions[prop] ? ratio(dimensions2, prop, maxDimensions[prop]) : dimensions2;
        }
        return dimensions2;
      }
      const Dimensions = { ratio, contain, cover: cover$1 };
      function getIndex(i, elements, current, finite) {
        if (current === void 0) {
          current = 0;
        }
        if (finite === void 0) {
          finite = false;
        }
        elements = toNodes(elements);
        const { length } = elements;
        if (!length) {
          return -1;
        }
        i = isNumeric(i) ? toNumber(i) : i === "next" ? current + 1 : i === "previous" ? current - 1 : elements.indexOf(toNode(i));
        if (finite) {
          return clamp(i, 0, length - 1);
        }
        i %= length;
        return i < 0 ? i + length : i;
      }
      function memoize(fn) {
        const cache = /* @__PURE__ */ Object.create(null);
        return (key2) => cache[key2] || (cache[key2] = fn(key2));
      }
      class Deferred {
        constructor() {
          this.promise = new Promise((resolve2, reject) => {
            this.reject = reject;
            this.resolve = resolve2;
          });
        }
      }
      function attr(element, name, value) {
        if (isObject(name)) {
          for (const key2 in name) {
            attr(element, key2, name[key2]);
          }
          return;
        }
        if (isUndefined(value)) {
          var _toNode;
          return (_toNode = toNode(element)) == null ? void 0 : _toNode.getAttribute(name);
        } else {
          for (const el of toNodes(element)) {
            if (isFunction(value)) {
              value = value.call(el, attr(el, name));
            }
            if (value === null) {
              removeAttr(el, name);
            } else {
              el.setAttribute(name, value);
            }
          }
        }
      }
      function hasAttr(element, name) {
        return toNodes(element).some((element2) => element2.hasAttribute(name));
      }
      function removeAttr(element, name) {
        const elements = toNodes(element);
        for (const attribute of name.split(" ")) {
          for (const element2 of elements) {
            element2.removeAttribute(attribute);
          }
        }
      }
      function data(element, attribute) {
        for (const name of [attribute, "data-" + attribute]) {
          if (hasAttr(element, name)) {
            return attr(element, name);
          }
        }
      }
      const voidElements = {
        area: true,
        base: true,
        br: true,
        col: true,
        embed: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        menuitem: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
      };
      function isVoidElement(element) {
        return toNodes(element).some((element2) => voidElements[element2.tagName.toLowerCase()]);
      }
      function isVisible(element) {
        return toNodes(element).some((element2) => element2.offsetWidth || element2.offsetHeight || element2.getClientRects().length);
      }
      const selInput = "input,select,textarea,button";
      function isInput(element) {
        return toNodes(element).some((element2) => matches(element2, selInput));
      }
      const selFocusable = selInput + ",a[href],[tabindex]";
      function isFocusable(element) {
        return matches(element, selFocusable);
      }
      function parent(element) {
        var _toNode;
        return (_toNode = toNode(element)) == null ? void 0 : _toNode.parentElement;
      }
      function filter$1(element, selector) {
        return toNodes(element).filter((element2) => matches(element2, selector));
      }
      function matches(element, selector) {
        return toNodes(element).some((element2) => element2.matches(selector));
      }
      function closest(element, selector) {
        return isElement(element) ? element.closest(startsWith(selector, ">") ? selector.slice(1) : selector) : toNodes(element).map((element2) => closest(element2, selector)).filter(Boolean);
      }
      function within(element, selector) {
        return isString(selector) ? !!closest(element, selector) : toNode(selector).contains(toNode(element));
      }
      function parents(element, selector) {
        const elements = [];
        while (element = parent(element)) {
          if (!selector || matches(element, selector)) {
            elements.push(element);
          }
        }
        return elements;
      }
      function children(element, selector) {
        element = toNode(element);
        const children2 = element ? toNodes(element.children) : [];
        return selector ? filter$1(children2, selector) : children2;
      }
      function index4(element, ref) {
        return ref ? toNodes(element).indexOf(toNode(ref)) : children(parent(element)).indexOf(element);
      }
      function query(selector, context) {
        return find(selector, getContext2(selector, context));
      }
      function queryAll(selector, context) {
        return findAll(selector, getContext2(selector, context));
      }
      function find(selector, context) {
        return toNode(_query(selector, context, "querySelector"));
      }
      function findAll(selector, context) {
        return toNodes(_query(selector, context, "querySelectorAll"));
      }
      const contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
      const isContextSelector = memoize((selector) => selector.match(contextSelectorRe));
      function getContext2(selector, context) {
        if (context === void 0) {
          context = document;
        }
        return isString(selector) && isContextSelector(selector) || isDocument(context) ? context : context.ownerDocument;
      }
      const contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;
      const sanatize = memoize((selector) => selector.replace(contextSanitizeRe, "$1 *"));
      function _query(selector, context, queryFn) {
        if (context === void 0) {
          context = document;
        }
        if (!selector || !isString(selector)) {
          return selector;
        }
        selector = sanatize(selector);
        if (isContextSelector(selector)) {
          const split = splitSelector(selector);
          selector = "";
          for (let sel of split) {
            let ctx = context;
            if (sel[0] === "!") {
              const selectors = sel.substr(1).trim().split(" ");
              ctx = closest(parent(context), selectors[0]);
              sel = selectors.slice(1).join(" ").trim();
              if (!sel.length && split.length === 1) {
                return ctx;
              }
            }
            if (sel[0] === "-") {
              const selectors = sel.substr(1).trim().split(" ");
              const prev = (ctx || context).previousElementSibling;
              ctx = matches(prev, sel.substr(1)) ? prev : null;
              sel = selectors.slice(1).join(" ");
            }
            if (ctx) {
              selector += (selector ? "," : "") + domPath(ctx) + " " + sel;
            }
          }
          context = document;
        }
        try {
          return context[queryFn](selector);
        } catch (e) {
          return null;
        }
      }
      const selectorRe = /.*?[^\\](?:,|$)/g;
      const splitSelector = memoize((selector) => selector.match(selectorRe).map((selector2) => selector2.replace(/,$/, "").trim()));
      function domPath(element) {
        const names = [];
        while (element.parentNode) {
          const id = attr(element, "id");
          if (id) {
            names.unshift("#" + escape2(id));
            break;
          } else {
            let { tagName } = element;
            if (tagName !== "HTML") {
              tagName += ":nth-child(" + (index4(element) + 1) + ")";
            }
            names.unshift(tagName);
            element = element.parentNode;
          }
        }
        return names.join(" > ");
      }
      function escape2(css3) {
        return isString(css3) ? CSS.escape(css3) : "";
      }
      function on() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        let [targets, types, selector, listener, useCapture = false] = getArgs(args);
        if (listener.length > 1) {
          listener = detail(listener);
        }
        if (useCapture != null && useCapture.self) {
          listener = selfFilter(listener);
        }
        if (selector) {
          listener = delegate(selector, listener);
        }
        for (const type of types) {
          for (const target of targets) {
            target.addEventListener(type, listener, useCapture);
          }
        }
        return () => off(targets, types, listener, useCapture);
      }
      function off() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        let [targets, types, , listener, useCapture = false] = getArgs(args);
        for (const type of types) {
          for (const target of targets) {
            target.removeEventListener(type, listener, useCapture);
          }
        }
      }
      function once() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        const [element, types, selector, listener, useCapture = false, condition] = getArgs(args);
        const off2 = on(element, types, selector, (e) => {
          const result = !condition || condition(e);
          if (result) {
            off2();
            listener(e, result);
          }
        }, useCapture);
        return off2;
      }
      function trigger(targets, event, detail2) {
        return toEventTargets(targets).every((target) => target.dispatchEvent(createEvent(event, true, true, detail2)));
      }
      function createEvent(e, bubbles, cancelable, detail2) {
        if (bubbles === void 0) {
          bubbles = true;
        }
        if (cancelable === void 0) {
          cancelable = false;
        }
        if (isString(e)) {
          e = new CustomEvent(e, { bubbles, cancelable, detail: detail2 });
        }
        return e;
      }
      function getArgs(args) {
        args[0] = toEventTargets(args[0]);
        if (isString(args[1])) {
          args[1] = args[1].split(" ");
        }
        if (isFunction(args[2])) {
          args.splice(2, 0, false);
        }
        return args;
      }
      function delegate(selector, listener) {
        return (e) => {
          const current = selector[0] === ">" ? findAll(selector, e.currentTarget).reverse().filter((element) => within(e.target, element))[0] : closest(e.target, selector);
          if (current) {
            e.current = current;
            listener.call(this, e);
          }
        };
      }
      function detail(listener) {
        return (e) => isArray(e.detail) ? listener(e, ...e.detail) : listener(e);
      }
      function selfFilter(listener) {
        return function(e) {
          if (e.target === e.currentTarget || e.target === e.current) {
            return listener.call(null, e);
          }
        };
      }
      function isEventTarget(target) {
        return target && "addEventListener" in target;
      }
      function toEventTarget(target) {
        return isEventTarget(target) ? target : toNode(target);
      }
      function toEventTargets(target) {
        return isArray(target) ? target.map(toEventTarget).filter(Boolean) : isString(target) ? findAll(target) : isEventTarget(target) ? [target] : toNodes(target);
      }
      function isTouch(e) {
        return e.pointerType === "touch" || !!e.touches;
      }
      function getEventPos(e) {
        var _e$touches, _e$changedTouches;
        const { clientX: x, clientY: y } = ((_e$touches = e.touches) == null ? void 0 : _e$touches[0]) || ((_e$changedTouches = e.changedTouches) == null ? void 0 : _e$changedTouches[0]) || e;
        return { x, y };
      }
      function ajax(url, options) {
        const env = {
          data: null,
          method: "GET",
          headers: {},
          xhr: new XMLHttpRequest(),
          beforeSend: noop3,
          responseType: "",
          ...options
        };
        return Promise.resolve().then(() => env.beforeSend(env)).then(() => send(url, env));
      }
      function send(url, env) {
        return new Promise((resolve2, reject) => {
          const { xhr } = env;
          for (const prop in env) {
            if (prop in xhr) {
              try {
                xhr[prop] = env[prop];
              } catch (e) {
              }
            }
          }
          xhr.open(env.method.toUpperCase(), url);
          for (const header in env.headers) {
            xhr.setRequestHeader(header, env.headers[header]);
          }
          on(xhr, "load", () => {
            if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
              resolve2(xhr);
            } else {
              reject(assign(Error(xhr.statusText), {
                xhr,
                status: xhr.status
              }));
            }
          });
          on(xhr, "error", () => reject(assign(Error("Network Error"), { xhr })));
          on(xhr, "timeout", () => reject(assign(Error("Network Timeout"), { xhr })));
          xhr.send(env.data);
        });
      }
      function getImage(src, srcset, sizes) {
        return new Promise((resolve2, reject) => {
          const img2 = new Image();
          img2.onerror = (e) => {
            reject(e);
          };
          img2.onload = () => {
            resolve2(img2);
          };
          sizes && (img2.sizes = sizes);
          srcset && (img2.srcset = srcset);
          img2.src = src;
        });
      }
      const cssNumber = {
        "animation-iteration-count": true,
        "column-count": true,
        "fill-opacity": true,
        "flex-grow": true,
        "flex-shrink": true,
        "font-weight": true,
        "line-height": true,
        opacity: true,
        order: true,
        orphans: true,
        "stroke-dasharray": true,
        "stroke-dashoffset": true,
        widows: true,
        "z-index": true,
        zoom: true
      };
      function css2(element, property, value, priority) {
        if (priority === void 0) {
          priority = "";
        }
        const elements = toNodes(element);
        for (const element2 of elements) {
          if (isString(property)) {
            property = propName(property);
            if (isUndefined(value)) {
              return getComputedStyle(element2).getPropertyValue(property);
            } else {
              element2.style.setProperty(property, isNumeric(value) && !cssNumber[property] ? value + "px" : value || isNumber(value) ? value : "", priority);
            }
          } else if (isArray(property)) {
            const props2 = {};
            for (const prop of property) {
              props2[prop] = css2(element2, prop);
            }
            return props2;
          } else if (isObject(property)) {
            priority = value;
            each2(property, (value2, property2) => css2(element2, property2, value2, priority));
          }
        }
        return elements[0];
      }
      const propName = memoize((name) => vendorPropName(name));
      function vendorPropName(name) {
        if (startsWith(name, "--")) {
          return name;
        }
        name = hyphenate(name);
        const { style } = document.documentElement;
        if (name in style) {
          return name;
        }
        for (const prefix2 of ["webkit", "moz"]) {
          const prefixedName = "-" + prefix2 + "-" + name;
          if (prefixedName in style) {
            return prefixedName;
          }
        }
      }
      function addClass(element) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        apply$1(element, args, "add");
      }
      function removeClass(element) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        apply$1(element, args, "remove");
      }
      function removeClasses(element, cls) {
        attr(element, "class", (value) => (value || "").replace(new RegExp("\\b" + cls + "\\b\\s?", "g"), ""));
      }
      function replaceClass(element) {
        (arguments.length <= 1 ? void 0 : arguments[1]) && removeClass(element, arguments.length <= 1 ? void 0 : arguments[1]);
        (arguments.length <= 2 ? void 0 : arguments[2]) && addClass(element, arguments.length <= 2 ? void 0 : arguments[2]);
      }
      function hasClass(element, cls) {
        [cls] = getClasses(cls);
        return !!cls && toNodes(element).some((node) => node.classList.contains(cls));
      }
      function toggleClass(element, cls, force) {
        const classes = getClasses(cls);
        if (!isUndefined(force)) {
          force = !!force;
        }
        for (const node of toNodes(element)) {
          for (const cls2 of classes) {
            node.classList.toggle(cls2, force);
          }
        }
      }
      function apply$1(element, args, fn) {
        args = args.reduce((args2, arg) => args2.concat(getClasses(arg)), []);
        for (const node of toNodes(element)) {
          node.classList[fn](...args);
        }
      }
      function getClasses(str) {
        return String(str).split(/\s|,/).filter(Boolean);
      }
      function transition(element, props2, duration, timing) {
        if (duration === void 0) {
          duration = 400;
        }
        if (timing === void 0) {
          timing = "linear";
        }
        duration = Math.round(duration);
        return Promise.all(toNodes(element).map((element2) => new Promise((resolve2, reject) => {
          for (const name in props2) {
            const value = css2(element2, name);
            if (value === "") {
              css2(element2, name, value);
            }
          }
          const timer = setTimeout(() => trigger(element2, "transitionend"), duration);
          once(element2, "transitionend transitioncanceled", (_ref) => {
            let { type } = _ref;
            clearTimeout(timer);
            removeClass(element2, "uk-transition");
            css2(element2, {
              transitionProperty: "",
              transitionDuration: "",
              transitionTimingFunction: ""
            });
            type === "transitioncanceled" ? reject() : resolve2(element2);
          }, { self: true });
          addClass(element2, "uk-transition");
          css2(element2, {
            transitionProperty: Object.keys(props2).map(propName).join(","),
            transitionDuration: duration + "ms",
            transitionTimingFunction: timing,
            ...props2
          });
        })));
      }
      const Transition = {
        start: transition,
        async stop(element) {
          trigger(element, "transitionend");
          await Promise.resolve();
        },
        async cancel(element) {
          trigger(element, "transitioncanceled");
          await Promise.resolve();
        },
        inProgress(element) {
          return hasClass(element, "uk-transition");
        }
      };
      const animationPrefix = "uk-animation-";
      function animate$2(element, animation, duration, origin, out) {
        if (duration === void 0) {
          duration = 200;
        }
        return Promise.all(toNodes(element).map((element2) => new Promise((resolve2, reject) => {
          trigger(element2, "animationcanceled");
          const timer = setTimeout(() => trigger(element2, "animationend"), duration);
          once(element2, "animationend animationcanceled", (_ref2) => {
            let { type } = _ref2;
            clearTimeout(timer);
            type === "animationcanceled" ? reject() : resolve2(element2);
            css2(element2, "animationDuration", "");
            removeClasses(element2, animationPrefix + "\\S*");
          }, { self: true });
          css2(element2, "animationDuration", duration + "ms");
          addClass(element2, animation, animationPrefix + (out ? "leave" : "enter"));
          if (startsWith(animation, animationPrefix)) {
            origin && addClass(element2, "uk-transform-origin-" + origin);
            out && addClass(element2, animationPrefix + "reverse");
          }
        })));
      }
      const inProgressRe = new RegExp(animationPrefix + "(enter|leave)");
      const Animation = {
        in: animate$2,
        out(element, animation, duration, origin) {
          return animate$2(element, animation, duration, origin, true);
        },
        inProgress(element) {
          return inProgressRe.test(attr(element, "class"));
        },
        cancel(element) {
          trigger(element, "animationcanceled");
        }
      };
      const dirs$1 = {
        width: ["left", "right"],
        height: ["top", "bottom"]
      };
      function dimensions$1(element) {
        const rect = isElement(element) ? toNode(element).getBoundingClientRect() : { height: height(element), width: width(element), top: 0, left: 0 };
        return {
          height: rect.height,
          width: rect.width,
          top: rect.top,
          left: rect.left,
          bottom: rect.top + rect.height,
          right: rect.left + rect.width
        };
      }
      function offset(element, coordinates) {
        const currentOffset = dimensions$1(element);
        if (element) {
          const { scrollY, scrollX } = toWindow(element);
          const offsetBy = { height: scrollY, width: scrollX };
          for (const dir in dirs$1) {
            for (const prop of dirs$1[dir]) {
              currentOffset[prop] += offsetBy[dir];
            }
          }
        }
        if (!coordinates) {
          return currentOffset;
        }
        const pos = css2(element, "position");
        each2(css2(element, ["left", "top"]), (value, prop) => css2(element, prop, coordinates[prop] - currentOffset[prop] + toFloat(pos === "absolute" && value === "auto" ? position(element)[prop] : value)));
      }
      function position(element) {
        let { top, left } = offset(element);
        const {
          ownerDocument: { body, documentElement },
          offsetParent
        } = toNode(element);
        let parent2 = offsetParent || documentElement;
        while (parent2 && (parent2 === body || parent2 === documentElement) && css2(parent2, "position") === "static") {
          parent2 = parent2.parentNode;
        }
        if (isElement(parent2)) {
          const parentOffset = offset(parent2);
          top -= parentOffset.top + toFloat(css2(parent2, "borderTopWidth"));
          left -= parentOffset.left + toFloat(css2(parent2, "borderLeftWidth"));
        }
        return {
          top: top - toFloat(css2(element, "marginTop")),
          left: left - toFloat(css2(element, "marginLeft"))
        };
      }
      function offsetPosition(element) {
        element = toNode(element);
        const offset2 = [element.offsetTop, element.offsetLeft];
        while (element = element.offsetParent) {
          offset2[0] += element.offsetTop + toFloat(css2(element, "borderTopWidth"));
          offset2[1] += element.offsetLeft + toFloat(css2(element, "borderLeftWidth"));
          if (css2(element, "position") === "fixed") {
            const win = toWindow(element);
            offset2[0] += win.scrollY;
            offset2[1] += win.scrollX;
            return offset2;
          }
        }
        return offset2;
      }
      const height = dimension("height");
      const width = dimension("width");
      function dimension(prop) {
        const propName2 = ucfirst(prop);
        return (element, value) => {
          if (isUndefined(value)) {
            if (isWindow(element)) {
              return element["inner" + propName2];
            }
            if (isDocument(element)) {
              const doc = element.documentElement;
              return Math.max(doc["offset" + propName2], doc["scroll" + propName2]);
            }
            element = toNode(element);
            value = css2(element, prop);
            value = value === "auto" ? element["offset" + propName2] : toFloat(value) || 0;
            return value - boxModelAdjust(element, prop);
          } else {
            return css2(element, prop, !value && value !== 0 ? "" : +value + boxModelAdjust(element, prop) + "px");
          }
        };
      }
      function boxModelAdjust(element, prop, sizing) {
        if (sizing === void 0) {
          sizing = "border-box";
        }
        return css2(element, "boxSizing") === sizing ? dirs$1[prop].map(ucfirst).reduce((value, prop2) => value + toFloat(css2(element, "padding" + prop2)) + toFloat(css2(element, "border" + prop2 + "Width")), 0) : 0;
      }
      function flipPosition(pos) {
        for (const dir in dirs$1) {
          for (const i in dirs$1[dir]) {
            if (dirs$1[dir][i] === pos) {
              return dirs$1[dir][1 - i];
            }
          }
        }
        return pos;
      }
      function toPx(value, property, element, offsetDim) {
        if (property === void 0) {
          property = "width";
        }
        if (element === void 0) {
          element = window;
        }
        if (offsetDim === void 0) {
          offsetDim = false;
        }
        if (!isString(value)) {
          return toFloat(value);
        }
        return parseCalc(value).reduce((result, value2) => {
          const unit = parseUnit(value2);
          if (unit) {
            value2 = percent(unit === "vh" ? height(toWindow(element)) : unit === "vw" ? width(toWindow(element)) : offsetDim ? element["offset" + ucfirst(property)] : dimensions$1(element)[property], value2);
          }
          return result + toFloat(value2);
        }, 0);
      }
      const calcRe = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g;
      const parseCalc = memoize((calc) => calc.toString().replace(/\s/g, "").match(calcRe) || []);
      const unitRe$1 = /(?:v[hw]|%)$/;
      const parseUnit = memoize((str) => (str.match(unitRe$1) || [])[0]);
      function percent(base2, value) {
        return base2 * toFloat(value) / 100;
      }
      function ready(fn) {
        if (document.readyState !== "loading") {
          fn();
          return;
        }
        once(document, "DOMContentLoaded", fn);
      }
      function isTag(element, tagName) {
        var _element$tagName;
        return (element == null ? void 0 : (_element$tagName = element.tagName) == null ? void 0 : _element$tagName.toLowerCase()) === tagName.toLowerCase();
      }
      function empty(element) {
        element = $(element);
        element.innerHTML = "";
        return element;
      }
      function html(parent2, html2) {
        return isUndefined(html2) ? $(parent2).innerHTML : append(empty(parent2), html2);
      }
      const prepend = applyFn("prepend");
      const append = applyFn("append");
      const before = applyFn("before");
      const after = applyFn("after");
      function applyFn(fn) {
        return function(ref, element) {
          var _$;
          const nodes = toNodes(isString(element) ? fragment(element) : element);
          (_$ = $(ref)) == null ? void 0 : _$[fn](...nodes);
          return unwrapSingle(nodes);
        };
      }
      function remove$1(element) {
        toNodes(element).forEach((element2) => element2.remove());
      }
      function wrapAll(element, structure) {
        structure = toNode(before(element, structure));
        while (structure.firstChild) {
          structure = structure.firstChild;
        }
        append(structure, element);
        return structure;
      }
      function wrapInner(element, structure) {
        return toNodes(toNodes(element).map((element2) => element2.hasChildNodes() ? wrapAll(toNodes(element2.childNodes), structure) : append(element2, structure)));
      }
      function unwrap(element) {
        toNodes(element).map(parent).filter((value, index5, self2) => self2.indexOf(value) === index5).forEach((parent2) => parent2.replaceWith(...parent2.childNodes));
      }
      const fragmentRe = /^\s*<(\w+|!)[^>]*>/;
      const singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
      function fragment(html2) {
        const matches2 = singleTagRe.exec(html2);
        if (matches2) {
          return document.createElement(matches2[1]);
        }
        const container = document.createElement("div");
        if (fragmentRe.test(html2)) {
          container.insertAdjacentHTML("beforeend", html2.trim());
        } else {
          container.textContent = html2;
        }
        return unwrapSingle(container.childNodes);
      }
      function unwrapSingle(nodes) {
        return nodes.length > 1 ? nodes : nodes[0];
      }
      function apply(node, fn) {
        if (!isElement(node)) {
          return;
        }
        fn(node);
        node = node.firstElementChild;
        while (node) {
          const next = node.nextElementSibling;
          apply(node, fn);
          node = next;
        }
      }
      function $(selector, context) {
        return isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
      }
      function $$(selector, context) {
        return isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
      }
      function isHtml(str) {
        return isString(str) && startsWith(str.trim(), "<");
      }
      const inBrowser = typeof window !== "undefined";
      const isRtl = inBrowser && attr(document.documentElement, "dir") === "rtl";
      const hasTouch = inBrowser && "ontouchstart" in window;
      const hasPointerEvents = inBrowser && window.PointerEvent;
      const pointerDown$1 = hasPointerEvents ? "pointerdown" : hasTouch ? "touchstart" : "mousedown";
      const pointerMove$1 = hasPointerEvents ? "pointermove" : hasTouch ? "touchmove" : "mousemove";
      const pointerUp$1 = hasPointerEvents ? "pointerup" : hasTouch ? "touchend" : "mouseup";
      const pointerEnter = hasPointerEvents ? "pointerenter" : hasTouch ? "" : "mouseenter";
      const pointerLeave = hasPointerEvents ? "pointerleave" : hasTouch ? "" : "mouseleave";
      const pointerCancel = hasPointerEvents ? "pointercancel" : "touchcancel";
      const fastdom = {
        reads: [],
        writes: [],
        read(task) {
          this.reads.push(task);
          scheduleFlush();
          return task;
        },
        write(task) {
          this.writes.push(task);
          scheduleFlush();
          return task;
        },
        clear(task) {
          remove(this.reads, task);
          remove(this.writes, task);
        },
        flush
      };
      function flush(recursion) {
        runTasks(fastdom.reads);
        runTasks(fastdom.writes.splice(0));
        fastdom.scheduled = false;
        if (fastdom.reads.length || fastdom.writes.length) {
          scheduleFlush(recursion + 1);
        }
      }
      const RECURSION_LIMIT = 4;
      function scheduleFlush(recursion) {
        if (fastdom.scheduled) {
          return;
        }
        fastdom.scheduled = true;
        if (recursion && recursion < RECURSION_LIMIT) {
          Promise.resolve().then(() => flush(recursion));
        } else {
          requestAnimationFrame(() => flush(1));
        }
      }
      function runTasks(tasks) {
        let task;
        while (task = tasks.shift()) {
          try {
            task();
          } catch (e) {
            console.error(e);
          }
        }
      }
      function remove(array2, item) {
        const index5 = array2.indexOf(item);
        return ~index5 && array2.splice(index5, 1);
      }
      function MouseTracker() {
      }
      MouseTracker.prototype = {
        positions: [],
        init() {
          this.positions = [];
          let position2;
          this.unbind = on(document, "mousemove", (e) => position2 = getEventPos(e));
          this.interval = setInterval(() => {
            if (!position2) {
              return;
            }
            this.positions.push(position2);
            if (this.positions.length > 5) {
              this.positions.shift();
            }
          }, 50);
        },
        cancel() {
          var _this$unbind;
          (_this$unbind = this.unbind) == null ? void 0 : _this$unbind.call(this);
          this.interval && clearInterval(this.interval);
        },
        movesTo(target) {
          if (this.positions.length < 2) {
            return false;
          }
          const p = target.getBoundingClientRect();
          const { left, right, top, bottom } = p;
          const [prevPosition] = this.positions;
          const position2 = last(this.positions);
          const path = [prevPosition, position2];
          if (pointInRect(position2, p)) {
            return false;
          }
          const diagonals = [
            [
              { x: left, y: top },
              { x: right, y: bottom }
            ],
            [
              { x: left, y: bottom },
              { x: right, y: top }
            ]
          ];
          return diagonals.some((diagonal) => {
            const intersection = intersect(path, diagonal);
            return intersection && pointInRect(intersection, p);
          });
        }
      };
      function intersect(_ref, _ref2) {
        let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = _ref;
        let [{ x: x3, y: y3 }, { x: x4, y: y4 }] = _ref2;
        const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
        if (denominator === 0) {
          return false;
        }
        const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
        if (ua < 0) {
          return false;
        }
        return { x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1) };
      }
      function observeIntersection(targets, cb, options, intersecting) {
        if (intersecting === void 0) {
          intersecting = true;
        }
        const observer = new IntersectionObserver(intersecting ? (entries, observer2) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            cb(entries, observer2);
          }
        } : cb, options);
        for (const el of toNodes(targets)) {
          observer.observe(el);
        }
        return observer;
      }
      const hasResizeObserver = inBrowser && window.ResizeObserver;
      function observeResize(targets, cb, options) {
        if (options === void 0) {
          options = { box: "border-box" };
        }
        if (hasResizeObserver) {
          return observe(ResizeObserver, targets, cb, options);
        }
        initResizeListener();
        listeners.add(cb);
        return {
          disconnect() {
            listeners.delete(cb);
          }
        };
      }
      let listeners;
      function initResizeListener() {
        if (listeners) {
          return;
        }
        listeners = /* @__PURE__ */ new Set();
        let pendingResize;
        const handleResize = () => {
          if (pendingResize) {
            return;
          }
          pendingResize = true;
          fastdom.read(() => pendingResize = false);
          for (const listener of listeners) {
            listener();
          }
        };
        on(window, "load resize", handleResize);
        on(document, "loadedmetadata load", handleResize, true);
      }
      function observeMutation(targets, cb, options) {
        return observe(MutationObserver, targets, cb, options);
      }
      function observe(Observer, targets, cb, options) {
        const observer = new Observer(cb);
        for (const el of toNodes(targets)) {
          observer.observe(el, options);
        }
        return observer;
      }
      const strats = {};
      strats.events = strats.created = strats.beforeConnect = strats.connected = strats.beforeDisconnect = strats.disconnected = strats.destroy = concatStrat;
      strats.args = function(parentVal, childVal) {
        return childVal !== false && concatStrat(childVal || parentVal);
      };
      strats.update = function(parentVal, childVal) {
        return sortBy$1(concatStrat(parentVal, isFunction(childVal) ? { read: childVal } : childVal), "order");
      };
      strats.props = function(parentVal, childVal) {
        if (isArray(childVal)) {
          const value = {};
          for (const key2 of childVal) {
            value[key2] = String;
          }
          childVal = value;
        }
        return strats.methods(parentVal, childVal);
      };
      strats.computed = strats.methods = function(parentVal, childVal) {
        return childVal ? parentVal ? { ...parentVal, ...childVal } : childVal : parentVal;
      };
      strats.data = function(parentVal, childVal, vm) {
        if (!vm) {
          if (!childVal) {
            return parentVal;
          }
          if (!parentVal) {
            return childVal;
          }
          return function(vm2) {
            return mergeFnData(parentVal, childVal, vm2);
          };
        }
        return mergeFnData(parentVal, childVal, vm);
      };
      function mergeFnData(parentVal, childVal, vm) {
        return strats.computed(isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal, isFunction(childVal) ? childVal.call(vm, vm) : childVal);
      }
      function concatStrat(parentVal, childVal) {
        parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;
        return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
      }
      function defaultStrat(parentVal, childVal) {
        return isUndefined(childVal) ? parentVal : childVal;
      }
      function mergeOptions(parent2, child, vm) {
        const options = {};
        if (isFunction(child)) {
          child = child.options;
        }
        if (child.extends) {
          parent2 = mergeOptions(parent2, child.extends, vm);
        }
        if (child.mixins) {
          for (const mixin of child.mixins) {
            parent2 = mergeOptions(parent2, mixin, vm);
          }
        }
        for (const key2 in parent2) {
          mergeKey(key2);
        }
        for (const key2 in child) {
          if (!hasOwn(parent2, key2)) {
            mergeKey(key2);
          }
        }
        function mergeKey(key2) {
          options[key2] = (strats[key2] || defaultStrat)(parent2[key2], child[key2], vm);
        }
        return options;
      }
      function parseOptions(options, args) {
        if (args === void 0) {
          args = [];
        }
        try {
          return options ? startsWith(options, "{") ? JSON.parse(options) : args.length && !includes(options, ":") ? { [args[0]]: options } : options.split(";").reduce((options2, option) => {
            const [key2, value] = option.split(/:(.*)/);
            if (key2 && !isUndefined(value)) {
              options2[key2.trim()] = value.trim();
            }
            return options2;
          }, {}) : {};
        } catch (e) {
          return {};
        }
      }
      function play(el) {
        if (isIFrame(el)) {
          call(el, { func: "playVideo", method: "play" });
        }
        if (isHTML5(el)) {
          try {
            el.play().catch(noop3);
          } catch (e) {
          }
        }
      }
      function pause(el) {
        if (isIFrame(el)) {
          call(el, { func: "pauseVideo", method: "pause" });
        }
        if (isHTML5(el)) {
          el.pause();
        }
      }
      function mute(el) {
        if (isIFrame(el)) {
          call(el, { func: "mute", method: "setVolume", value: 0 });
        }
        if (isHTML5(el)) {
          el.muted = true;
        }
      }
      function isVideo(el) {
        return isHTML5(el) || isIFrame(el);
      }
      function isHTML5(el) {
        return isTag(el, "video");
      }
      function isIFrame(el) {
        return isTag(el, "iframe") && (isYoutube(el) || isVimeo(el));
      }
      function isYoutube(el) {
        return !!el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
      }
      function isVimeo(el) {
        return !!el.src.match(/vimeo\.com\/video\/.*/);
      }
      async function call(el, cmd) {
        await enableApi(el);
        post(el, cmd);
      }
      function post(el, cmd) {
        try {
          el.contentWindow.postMessage(JSON.stringify({ event: "command", ...cmd }), "*");
        } catch (e) {
        }
      }
      const stateKey = "_ukPlayer";
      let counter = 0;
      function enableApi(el) {
        if (el[stateKey]) {
          return el[stateKey];
        }
        const youtube = isYoutube(el);
        const vimeo = isVimeo(el);
        const id = ++counter;
        let poller;
        return el[stateKey] = new Promise((resolve2) => {
          youtube && once(el, "load", () => {
            const listener = () => post(el, { event: "listening", id });
            poller = setInterval(listener, 100);
            listener();
          });
          once(window, "message", resolve2, false, (_ref) => {
            let { data: data2 } = _ref;
            try {
              data2 = JSON.parse(data2);
              return data2 && (youtube && data2.id === id && data2.event === "onReady" || vimeo && Number(data2.player_id) === id);
            } catch (e) {
            }
          });
          el.src = "" + el.src + (includes(el.src, "?") ? "&" : "?") + (youtube ? "enablejsapi=1" : "api=1&player_id=" + id);
        }).then(() => clearInterval(poller));
      }
      function isInView(element, offsetTop, offsetLeft) {
        if (offsetTop === void 0) {
          offsetTop = 0;
        }
        if (offsetLeft === void 0) {
          offsetLeft = 0;
        }
        if (!isVisible(element)) {
          return false;
        }
        return intersectRect(...scrollParents(element).map((parent2) => {
          const { top, left, bottom, right } = offsetViewport(parent2);
          return {
            top: top - offsetTop,
            left: left - offsetLeft,
            bottom: bottom + offsetTop,
            right: right + offsetLeft
          };
        }).concat(offset(element)));
      }
      function scrollIntoView(element, _temp) {
        let { offset: offsetBy = 0 } = _temp === void 0 ? {} : _temp;
        const parents2 = isVisible(element) ? scrollParents(element) : [];
        return parents2.reduce((fn, scrollElement, i) => {
          const { scrollTop, scrollHeight, offsetHeight } = scrollElement;
          const viewport = offsetViewport(scrollElement);
          const maxScroll = scrollHeight - viewport.height;
          const { height: elHeight, top: elTop } = parents2[i - 1] ? offsetViewport(parents2[i - 1]) : offset(element);
          let top = Math.ceil(elTop - viewport.top - offsetBy + scrollTop);
          if (offsetBy > 0 && offsetHeight < elHeight + offsetBy) {
            top += offsetBy;
          } else {
            offsetBy = 0;
          }
          if (top > maxScroll) {
            offsetBy -= top - maxScroll;
            top = maxScroll;
          } else if (top < 0) {
            offsetBy -= top;
            top = 0;
          }
          return () => scrollTo(scrollElement, top - scrollTop).then(fn);
        }, () => Promise.resolve())();
        function scrollTo(element2, top) {
          return new Promise((resolve2) => {
            const scroll2 = element2.scrollTop;
            const duration = getDuration(Math.abs(top));
            const start = Date.now();
            (function step() {
              const percent2 = ease2(clamp((Date.now() - start) / duration));
              element2.scrollTop = scroll2 + top * percent2;
              if (percent2 === 1) {
                resolve2();
              } else {
                requestAnimationFrame(step);
              }
            })();
          });
        }
        function getDuration(dist) {
          return 40 * Math.pow(dist, 0.375);
        }
        function ease2(k) {
          return 0.5 * (1 - Math.cos(Math.PI * k));
        }
      }
      function scrolledOver(element, startOffset, endOffset) {
        if (startOffset === void 0) {
          startOffset = 0;
        }
        if (endOffset === void 0) {
          endOffset = 0;
        }
        if (!isVisible(element)) {
          return 0;
        }
        const [scrollElement] = scrollParents(element, /auto|scroll/, true);
        const { scrollHeight, scrollTop } = scrollElement;
        const { height: viewportHeight } = offsetViewport(scrollElement);
        const maxScroll = scrollHeight - viewportHeight;
        const elementOffsetTop = offsetPosition(element)[0] - offsetPosition(scrollElement)[0];
        const start = Math.max(0, elementOffsetTop - viewportHeight + startOffset);
        const end = Math.min(maxScroll, elementOffsetTop + element.offsetHeight - endOffset);
        return clamp((scrollTop - start) / (end - start));
      }
      function scrollParents(element, overflowRe, scrollable) {
        if (overflowRe === void 0) {
          overflowRe = /auto|scroll|hidden|clip/;
        }
        if (scrollable === void 0) {
          scrollable = false;
        }
        const scrollEl = scrollingElement(element);
        let ancestors = parents(element).reverse();
        ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);
        const fixedIndex = findIndex(ancestors, (el) => css2(el, "position") === "fixed");
        if (~fixedIndex) {
          ancestors = ancestors.slice(fixedIndex);
        }
        return [scrollEl].concat(ancestors.filter((parent2) => overflowRe.test(css2(parent2, "overflow")) && (!scrollable || parent2.scrollHeight > offsetViewport(parent2).height))).reverse();
      }
      function offsetViewport(scrollElement) {
        const window2 = toWindow(scrollElement);
        const {
          document: { documentElement }
        } = window2;
        let viewportElement = scrollElement === scrollingElement(scrollElement) ? window2 : scrollElement;
        const { visualViewport } = window2;
        if (isWindow(viewportElement) && visualViewport) {
          let { height: height2, width: width2, scale, pageTop: top, pageLeft: left } = visualViewport;
          height2 = Math.round(height2 * scale);
          width2 = Math.round(width2 * scale);
          return { height: height2, width: width2, top, left, bottom: top + height2, right: left + width2 };
        }
        let rect = offset(viewportElement);
        for (let [prop, dir, start, end] of [
          ["width", "x", "left", "right"],
          ["height", "y", "top", "bottom"]
        ]) {
          if (isWindow(viewportElement)) {
            viewportElement = documentElement;
          } else {
            rect[start] += toFloat(css2(viewportElement, "border-" + start + "-width"));
          }
          rect[prop] = rect[dir] = viewportElement["client" + ucfirst(prop)];
          rect[end] = rect[prop] + rect[start];
        }
        return rect;
      }
      function scrollingElement(element) {
        return toWindow(element).document.scrollingElement;
      }
      const dirs = [
        ["width", "x", "left", "right"],
        ["height", "y", "top", "bottom"]
      ];
      function positionAt(element, target, options) {
        options = {
          attach: {
            element: ["left", "top"],
            target: ["left", "top"],
            ...options.attach
          },
          offset: [0, 0],
          placement: [],
          ...options
        };
        if (!isArray(target)) {
          target = [target, target];
        }
        offset(element, getPosition(element, target, options));
      }
      function getPosition(element, target, options) {
        const position2 = attachTo(element, target, options);
        const { boundary, viewportOffset = 0, placement } = options;
        let offsetPosition2 = position2;
        for (const [i, [prop, , start, end]] of Object.entries(dirs)) {
          const viewport = getViewport$1(target[i], viewportOffset, boundary, i);
          if (isWithin(position2, viewport, i)) {
            continue;
          }
          let offsetBy = 0;
          if (placement[i] === "flip") {
            const attach = options.attach.target[i];
            if (attach === end && position2[end] <= viewport[end] || attach === start && position2[start] >= viewport[start]) {
              continue;
            }
            offsetBy = flip(element, target, options, i)[start] - position2[start];
            const scrollArea = getScrollArea(target[i], viewportOffset, i);
            if (!isWithin(applyOffset(position2, offsetBy, i), scrollArea, i)) {
              if (isWithin(position2, scrollArea, i)) {
                continue;
              }
              if (options.recursion) {
                return false;
              }
              const newPos = flipAxis(element, target, options);
              if (newPos && isWithin(newPos, scrollArea, 1 - i)) {
                return newPos;
              }
              continue;
            }
          } else if (placement[i] === "shift") {
            const targetDim = offset(target[i]);
            const { offset: elOffset } = options;
            offsetBy = clamp(clamp(position2[start], viewport[start], viewport[end] - position2[prop]), targetDim[start] - position2[prop] + elOffset[i], targetDim[end] - elOffset[i]) - position2[start];
          }
          offsetPosition2 = applyOffset(offsetPosition2, offsetBy, i);
        }
        return offsetPosition2;
      }
      function attachTo(element, target, options) {
        let { attach, offset: offsetBy } = {
          attach: {
            element: ["left", "top"],
            target: ["left", "top"],
            ...options.attach
          },
          offset: [0, 0],
          ...options
        };
        let elOffset = offset(element);
        for (const [i, [prop, , start, end]] of Object.entries(dirs)) {
          const targetOffset = attach.target[i] === attach.element[i] ? offsetViewport(target[i]) : offset(target[i]);
          elOffset = applyOffset(elOffset, targetOffset[start] - elOffset[start] + moveBy(attach.target[i], end, targetOffset[prop]) - moveBy(attach.element[i], end, elOffset[prop]) + +offsetBy[i], i);
        }
        return elOffset;
      }
      function applyOffset(position2, offset2, i) {
        const [, dir, start, end] = dirs[i];
        const newPos = { ...position2 };
        newPos[start] = position2[dir] = position2[start] + offset2;
        newPos[end] += offset2;
        return newPos;
      }
      function moveBy(attach, end, dim) {
        return attach === "center" ? dim / 2 : attach === end ? dim : 0;
      }
      function getViewport$1(element, viewportOffset, boundary, i) {
        let viewport = getIntersectionArea(...scrollParents(element).map(offsetViewport));
        if (viewportOffset) {
          viewport[dirs[i][2]] += viewportOffset;
          viewport[dirs[i][3]] -= viewportOffset;
        }
        if (boundary) {
          viewport = getIntersectionArea(viewport, offset(boundary));
        }
        return viewport;
      }
      function getScrollArea(element, viewportOffset, i) {
        const [prop, , start, end] = dirs[i];
        const [scrollElement] = scrollParents(element);
        const viewport = offsetViewport(scrollElement);
        viewport[start] -= scrollElement["scroll" + ucfirst(start)] - viewportOffset;
        viewport[end] = viewport[start] + scrollElement["scroll" + ucfirst(prop)] - viewportOffset;
        return viewport;
      }
      function getIntersectionArea() {
        let area = {};
        for (var _len = arguments.length, rects = new Array(_len), _key = 0; _key < _len; _key++) {
          rects[_key] = arguments[_key];
        }
        for (const rect of rects) {
          for (const [, , start, end] of dirs) {
            area[start] = Math.max(area[start] || 0, rect[start]);
            area[end] = Math.min(...[area[end], rect[end]].filter(Boolean));
          }
        }
        return area;
      }
      function isWithin(positionA, positionB, i) {
        const [, , start, end] = dirs[i];
        return positionA[start] >= positionB[start] && positionA[end] <= positionB[end];
      }
      function flip(element, target, _ref, i) {
        let { offset: offset2, attach } = _ref;
        return attachTo(element, target, {
          attach: {
            element: flipAttach(attach.element, i),
            target: flipAttach(attach.target, i)
          },
          offset: flipOffset(offset2, i)
        });
      }
      function flipAxis(element, target, options) {
        return getPosition(element, target, {
          ...options,
          attach: {
            element: options.attach.element.map(flipAttachAxis).reverse(),
            target: options.attach.target.map(flipAttachAxis).reverse()
          },
          offset: options.offset.reverse(),
          placement: options.placement.reverse(),
          recursion: true
        });
      }
      function flipAttach(attach, i) {
        const newAttach = [...attach];
        const index5 = dirs[i].indexOf(attach[i]);
        if (~index5) {
          newAttach[i] = dirs[i][1 - index5 % 2 + 2];
        }
        return newAttach;
      }
      function flipAttachAxis(prop) {
        for (let i = 0; i < dirs.length; i++) {
          const index5 = dirs[i].indexOf(prop);
          if (~index5) {
            return dirs[1 - i][index5 % 2 + 2];
          }
        }
      }
      function flipOffset(offset2, i) {
        offset2 = [...offset2];
        offset2[i] *= -1;
        return offset2;
      }
      var util = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        ajax,
        getImage,
        Transition,
        Animation,
        attr,
        hasAttr,
        removeAttr,
        data,
        addClass,
        removeClass,
        removeClasses,
        replaceClass,
        hasClass,
        toggleClass,
        dimensions: dimensions$1,
        offset,
        position,
        offsetPosition,
        height,
        width,
        boxModelAdjust,
        flipPosition,
        toPx,
        ready,
        isTag,
        empty,
        html,
        prepend,
        append,
        before,
        after,
        remove: remove$1,
        wrapAll,
        wrapInner,
        unwrap,
        fragment,
        apply,
        $,
        $$,
        inBrowser,
        isRtl,
        hasTouch,
        pointerDown: pointerDown$1,
        pointerMove: pointerMove$1,
        pointerUp: pointerUp$1,
        pointerEnter,
        pointerLeave,
        pointerCancel,
        on,
        off,
        once,
        trigger,
        createEvent,
        toEventTargets,
        isTouch,
        getEventPos,
        fastdom,
        isVoidElement,
        isVisible,
        selInput,
        isInput,
        selFocusable,
        isFocusable,
        parent,
        filter: filter$1,
        matches,
        closest,
        within,
        parents,
        children,
        index: index4,
        hasOwn,
        hyphenate,
        camelize,
        ucfirst,
        startsWith,
        endsWith,
        includes,
        findIndex,
        isArray,
        toArray,
        assign,
        isFunction,
        isObject,
        isPlainObject,
        isWindow,
        isDocument,
        isNode,
        isElement,
        isBoolean,
        isString,
        isNumber,
        isNumeric,
        isEmpty,
        isUndefined,
        toBoolean,
        toNumber,
        toFloat,
        toNode,
        toNodes,
        toWindow,
        isEqual,
        swap,
        last,
        each: each2,
        sortBy: sortBy$1,
        uniqueBy,
        clamp,
        noop: noop3,
        intersectRect,
        pointInRect,
        Dimensions,
        getIndex,
        memoize,
        Deferred,
        MouseTracker,
        observeIntersection,
        observeResize,
        observeMutation,
        mergeOptions,
        parseOptions,
        play,
        pause,
        mute,
        isVideo,
        positionAt,
        query,
        queryAll,
        find,
        findAll,
        escape: escape2,
        css: css2,
        propName,
        isInView,
        scrollIntoView,
        scrolledOver,
        scrollParents,
        offsetViewport
      });
      function globalAPI(UIkit2) {
        const DATA = UIkit2.data;
        UIkit2.use = function(plugin) {
          if (plugin.installed) {
            return;
          }
          plugin.call(null, this);
          plugin.installed = true;
          return this;
        };
        UIkit2.mixin = function(mixin, component) {
          component = (isString(component) ? UIkit2.component(component) : component) || this;
          component.options = mergeOptions(component.options, mixin);
        };
        UIkit2.extend = function(options) {
          options = options || {};
          const Super = this;
          const Sub = function UIkitComponent(options2) {
            this._init(options2);
          };
          Sub.prototype = Object.create(Super.prototype);
          Sub.prototype.constructor = Sub;
          Sub.options = mergeOptions(Super.options, options);
          Sub.super = Super;
          Sub.extend = Super.extend;
          return Sub;
        };
        UIkit2.update = function(element, e) {
          element = element ? toNode(element) : document.body;
          for (const parentEl of parents(element).reverse()) {
            update(parentEl[DATA], e);
          }
          apply(element, (element2) => update(element2[DATA], e));
        };
        let container;
        Object.defineProperty(UIkit2, "container", {
          get() {
            return container || document.body;
          },
          set(element) {
            container = $(element);
          }
        });
        function update(data2, e) {
          if (!data2) {
            return;
          }
          for (const name in data2) {
            if (data2[name]._connected) {
              data2[name]._callUpdate(e);
            }
          }
        }
      }
      function hooksAPI(UIkit2) {
        UIkit2.prototype._callHook = function(hook) {
          var _this$$options$hook;
          (_this$$options$hook = this.$options[hook]) == null ? void 0 : _this$$options$hook.forEach((handler2) => handler2.call(this));
        };
        UIkit2.prototype._callConnected = function() {
          if (this._connected) {
            return;
          }
          this._data = {};
          this._computed = {};
          this._initProps();
          this._callHook("beforeConnect");
          this._connected = true;
          this._initEvents();
          this._initObservers();
          this._callHook("connected");
          this._callUpdate();
        };
        UIkit2.prototype._callDisconnected = function() {
          if (!this._connected) {
            return;
          }
          this._callHook("beforeDisconnect");
          this._disconnectObservers();
          this._unbindEvents();
          this._callHook("disconnected");
          this._connected = false;
          delete this._watch;
        };
        UIkit2.prototype._callUpdate = function(e) {
          if (e === void 0) {
            e = "update";
          }
          if (!this._connected) {
            return;
          }
          if (e === "update" || e === "resize") {
            this._callWatches();
          }
          if (!this.$options.update) {
            return;
          }
          if (!this._updates) {
            this._updates = /* @__PURE__ */ new Set();
            fastdom.read(() => {
              if (this._connected) {
                runUpdates.call(this, this._updates);
              }
              delete this._updates;
            });
          }
          this._updates.add(e.type || e);
        };
        UIkit2.prototype._callWatches = function() {
          if (this._watch) {
            return;
          }
          const initial = !hasOwn(this, "_watch");
          this._watch = fastdom.read(() => {
            if (this._connected) {
              runWatches.call(this, initial);
            }
            this._watch = null;
          });
        };
        function runUpdates(types) {
          for (const { read: read2, write, events = [] } of this.$options.update) {
            if (!types.has("update") && !events.some((type) => types.has(type))) {
              continue;
            }
            let result;
            if (read2) {
              result = read2.call(this, this._data, types);
              if (result && isPlainObject(result)) {
                assign(this._data, result);
              }
            }
            if (write && result !== false) {
              fastdom.write(() => {
                if (this._connected) {
                  write.call(this, this._data, types);
                }
              });
            }
          }
        }
        function runWatches(initial) {
          const {
            $options: { computed }
          } = this;
          const values = { ...this._computed };
          this._computed = {};
          for (const key2 in computed) {
            const { watch, immediate } = computed[key2];
            if (watch && (initial && immediate || hasOwn(values, key2) && !isEqual(values[key2], this[key2]))) {
              watch.call(this, this[key2], values[key2]);
            }
          }
        }
      }
      function stateAPI(UIkit2) {
        let uid = 0;
        UIkit2.prototype._init = function(options) {
          options = options || {};
          options.data = normalizeData(options, this.constructor.options);
          this.$options = mergeOptions(this.constructor.options, options, this);
          this.$el = null;
          this.$props = {};
          this._uid = uid++;
          this._initData();
          this._initMethods();
          this._initComputeds();
          this._callHook("created");
          if (options.el) {
            this.$mount(options.el);
          }
        };
        UIkit2.prototype._initData = function() {
          const { data: data2 = {} } = this.$options;
          for (const key2 in data2) {
            this.$props[key2] = this[key2] = data2[key2];
          }
        };
        UIkit2.prototype._initMethods = function() {
          const { methods } = this.$options;
          if (methods) {
            for (const key2 in methods) {
              this[key2] = methods[key2].bind(this);
            }
          }
        };
        UIkit2.prototype._initComputeds = function() {
          const { computed } = this.$options;
          this._computed = {};
          if (computed) {
            for (const key2 in computed) {
              registerComputed(this, key2, computed[key2]);
            }
          }
        };
        UIkit2.prototype._initProps = function(props2) {
          let key2;
          props2 = props2 || getProps$1(this.$options, this.$name);
          for (key2 in props2) {
            if (!isUndefined(props2[key2])) {
              this.$props[key2] = props2[key2];
            }
          }
          const exclude = [this.$options.computed, this.$options.methods];
          for (key2 in this.$props) {
            if (key2 in props2 && notIn(exclude, key2)) {
              this[key2] = this.$props[key2];
            }
          }
        };
        UIkit2.prototype._initEvents = function() {
          this._events = [];
          for (const event of this.$options.events || []) {
            if (hasOwn(event, "handler")) {
              registerEvent(this, event);
            } else {
              for (const key2 in event) {
                registerEvent(this, event[key2], key2);
              }
            }
          }
        };
        UIkit2.prototype._unbindEvents = function() {
          this._events.forEach((unbind) => unbind());
          delete this._events;
        };
        UIkit2.prototype._initObservers = function() {
          this._observers = [initPropsObserver(this)];
          if (this.$options.computed) {
            this.registerObserver(initChildListObserver(this));
          }
        };
        UIkit2.prototype.registerObserver = function(observer) {
          this._observers.push(observer);
        };
        UIkit2.prototype._disconnectObservers = function() {
          this._observers.forEach((observer) => observer == null ? void 0 : observer.disconnect());
        };
      }
      function getProps$1(opts, name) {
        const data$1 = {};
        const { args = [], props: props2 = {}, el } = opts;
        if (!props2) {
          return data$1;
        }
        for (const key2 in props2) {
          const prop = hyphenate(key2);
          let value = data(el, prop);
          if (isUndefined(value)) {
            continue;
          }
          value = props2[key2] === Boolean && value === "" ? true : coerce$1(props2[key2], value);
          if (prop === "target" && startsWith(value, "_")) {
            continue;
          }
          data$1[key2] = value;
        }
        const options = parseOptions(data(el, name), args);
        for (const key2 in options) {
          const prop = camelize(key2);
          if (!isUndefined(props2[prop])) {
            data$1[prop] = coerce$1(props2[prop], options[key2]);
          }
        }
        return data$1;
      }
      function registerComputed(component, key2, cb) {
        Object.defineProperty(component, key2, {
          enumerable: true,
          get() {
            const { _computed, $props, $el } = component;
            if (!hasOwn(_computed, key2)) {
              _computed[key2] = (cb.get || cb).call(component, $props, $el);
            }
            return _computed[key2];
          },
          set(value) {
            const { _computed } = component;
            _computed[key2] = cb.set ? cb.set.call(component, value) : value;
            if (isUndefined(_computed[key2])) {
              delete _computed[key2];
            }
          }
        });
      }
      function registerEvent(component, event, key2) {
        if (!isPlainObject(event)) {
          event = { name: key2, handler: event };
        }
        let { name, el, handler: handler2, capture, passive, delegate: delegate2, filter: filter2, self: self2 } = event;
        el = isFunction(el) ? el.call(component) : el || component.$el;
        if (isArray(el)) {
          el.forEach((el2) => registerEvent(component, { ...event, el: el2 }, key2));
          return;
        }
        if (!el || filter2 && !filter2.call(component)) {
          return;
        }
        component._events.push(on(el, name, delegate2 ? isString(delegate2) ? delegate2 : delegate2.call(component) : null, isString(handler2) ? component[handler2] : handler2.bind(component), { passive, capture, self: self2 }));
      }
      function notIn(options, key2) {
        return options.every((arr) => !arr || !hasOwn(arr, key2));
      }
      function coerce$1(type, value) {
        if (type === Boolean) {
          return toBoolean(value);
        } else if (type === Number) {
          return toNumber(value);
        } else if (type === "list") {
          return toList(value);
        }
        return type ? type(value) : value;
      }
      function toList(value) {
        return isArray(value) ? value : isString(value) ? value.split(/,(?![^(]*\))/).map((value2) => isNumeric(value2) ? toNumber(value2) : toBoolean(value2.trim())) : [value];
      }
      function normalizeData(_ref, _ref2) {
        let { data: data2 = {} } = _ref;
        let { args = [], props: props2 = {} } = _ref2;
        if (isArray(data2)) {
          data2 = data2.slice(0, args.length).reduce((data3, value, index5) => {
            if (isPlainObject(value)) {
              assign(data3, value);
            } else {
              data3[args[index5]] = value;
            }
            return data3;
          }, {});
        }
        for (const key2 in data2) {
          if (isUndefined(data2[key2])) {
            delete data2[key2];
          } else if (props2[key2]) {
            data2[key2] = coerce$1(props2[key2], data2[key2]);
          }
        }
        return data2;
      }
      function initChildListObserver(component) {
        const { el } = component.$options;
        const observer = new MutationObserver(() => component.$emit());
        observer.observe(el, {
          childList: true,
          subtree: true
        });
        return observer;
      }
      function initPropsObserver(component) {
        const { $name, $options, $props } = component;
        const { attrs, props: props2, el } = $options;
        if (!props2 || attrs === false) {
          return;
        }
        const attributes = isArray(attrs) ? attrs : Object.keys(props2);
        const filter2 = attributes.map((key2) => hyphenate(key2)).concat($name);
        const observer = new MutationObserver((records) => {
          const data2 = getProps$1($options, $name);
          if (records.some((_ref3) => {
            let { attributeName } = _ref3;
            const prop = attributeName.replace("data-", "");
            return (prop === $name ? attributes : [camelize(prop), camelize(attributeName)]).some((prop2) => !isUndefined(data2[prop2]) && data2[prop2] !== $props[prop2]);
          })) {
            component.$reset();
          }
        });
        observer.observe(el, {
          attributes: true,
          attributeFilter: filter2.concat(filter2.map((key2) => "data-" + key2))
        });
        return observer;
      }
      function instanceAPI(UIkit2) {
        const DATA = UIkit2.data;
        UIkit2.prototype.$create = function(component, element, data2) {
          return UIkit2[component](element, data2);
        };
        UIkit2.prototype.$mount = function(el) {
          const { name } = this.$options;
          if (!el[DATA]) {
            el[DATA] = {};
          }
          if (el[DATA][name]) {
            return;
          }
          el[DATA][name] = this;
          this.$el = this.$options.el = this.$options.el || el;
          if (within(el, document)) {
            this._callConnected();
          }
        };
        UIkit2.prototype.$reset = function() {
          this._callDisconnected();
          this._callConnected();
        };
        UIkit2.prototype.$destroy = function(removeEl) {
          if (removeEl === void 0) {
            removeEl = false;
          }
          const { el, name } = this.$options;
          if (el) {
            this._callDisconnected();
          }
          this._callHook("destroy");
          if (!(el != null && el[DATA])) {
            return;
          }
          delete el[DATA][name];
          if (!isEmpty(el[DATA])) {
            delete el[DATA];
          }
          if (removeEl) {
            remove$1(this.$el);
          }
        };
        UIkit2.prototype.$emit = function(e) {
          this._callUpdate(e);
        };
        UIkit2.prototype.$update = function(element, e) {
          if (element === void 0) {
            element = this.$el;
          }
          UIkit2.update(element, e);
        };
        UIkit2.prototype.$getComponent = UIkit2.getComponent;
        const componentName = memoize((name) => UIkit2.prefix + hyphenate(name));
        Object.defineProperties(UIkit2.prototype, {
          $container: Object.getOwnPropertyDescriptor(UIkit2, "container"),
          $name: {
            get() {
              return componentName(this.$options.name);
            }
          }
        });
      }
      function componentAPI(UIkit2) {
        const DATA = UIkit2.data;
        const components2 = {};
        UIkit2.component = function(name, options) {
          const id = hyphenate(name);
          name = camelize(id);
          if (!options) {
            if (isPlainObject(components2[name])) {
              components2[name] = UIkit2.extend(components2[name]);
            }
            return components2[name];
          }
          UIkit2[name] = function(element, data2) {
            const component = UIkit2.component(name);
            return component.options.functional ? new component({ data: isPlainObject(element) ? element : [...arguments] }) : element ? $$(element).map(init2)[0] : init2();
            function init2(element2) {
              const instance = UIkit2.getComponent(element2, name);
              if (instance) {
                if (data2) {
                  instance.$destroy();
                } else {
                  return instance;
                }
              }
              return new component({ el: element2, data: data2 });
            }
          };
          const opt = isPlainObject(options) ? { ...options } : options.options;
          opt.name = name;
          opt.install == null ? void 0 : opt.install(UIkit2, opt, name);
          if (UIkit2._initialized && !opt.functional) {
            fastdom.read(() => UIkit2[name]("[uk-" + id + "],[data-uk-" + id + "]"));
          }
          return components2[name] = isPlainObject(options) ? opt : options;
        };
        UIkit2.getComponents = (element) => (element == null ? void 0 : element[DATA]) || {};
        UIkit2.getComponent = (element, name) => UIkit2.getComponents(element)[name];
        UIkit2.connect = (node) => {
          if (node[DATA]) {
            for (const name in node[DATA]) {
              node[DATA][name]._callConnected();
            }
          }
          for (const attribute of node.attributes) {
            const name = getComponentName(attribute.name);
            if (name && name in components2) {
              UIkit2[name](node);
            }
          }
        };
        UIkit2.disconnect = (node) => {
          for (const name in node[DATA]) {
            node[DATA][name]._callDisconnected();
          }
        };
      }
      const getComponentName = memoize((attribute) => {
        return startsWith(attribute, "uk-") || startsWith(attribute, "data-uk-") ? camelize(attribute.replace("data-uk-", "").replace("uk-", "")) : false;
      });
      const UIkit = function(options) {
        this._init(options);
      };
      UIkit.util = util;
      UIkit.data = "__uikit__";
      UIkit.prefix = "uk-";
      UIkit.options = {};
      UIkit.version = "3.15.1";
      globalAPI(UIkit);
      hooksAPI(UIkit);
      stateAPI(UIkit);
      componentAPI(UIkit);
      instanceAPI(UIkit);
      function boot(UIkit2) {
        const { connect, disconnect } = UIkit2;
        if (!inBrowser || !window.MutationObserver) {
          return;
        }
        fastdom.read(function() {
          if (document.body) {
            apply(document.body, connect);
          }
          new MutationObserver((records) => records.forEach(applyChildListMutation)).observe(document, {
            childList: true,
            subtree: true
          });
          new MutationObserver((records) => records.forEach(applyAttributeMutation)).observe(document, {
            attributes: true,
            subtree: true
          });
          UIkit2._initialized = true;
        });
        function applyChildListMutation(_ref) {
          let { addedNodes, removedNodes } = _ref;
          for (const node of addedNodes) {
            apply(node, connect);
          }
          for (const node of removedNodes) {
            apply(node, disconnect);
          }
        }
        function applyAttributeMutation(_ref2) {
          var _UIkit$getComponent;
          let { target, attributeName } = _ref2;
          const name = getComponentName(attributeName);
          if (!name || !(name in UIkit2)) {
            return;
          }
          if (hasAttr(target, attributeName)) {
            UIkit2[name](target);
            return;
          }
          (_UIkit$getComponent = UIkit2.getComponent(target, name)) == null ? void 0 : _UIkit$getComponent.$destroy();
        }
      }
      var Class = {
        connected() {
          !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
        }
      };
      var Lazyload = {
        data: {
          preload: 5
        },
        methods: {
          lazyload(observeTargets, targets) {
            if (observeTargets === void 0) {
              observeTargets = this.$el;
            }
            if (targets === void 0) {
              targets = this.$el;
            }
            this.registerObserver(observeIntersection(observeTargets, (entries, observer) => {
              for (const el of toNodes(isFunction(targets) ? targets() : targets)) {
                $$('[loading="lazy"]', el).slice(0, this.preload - 1).forEach((el2) => removeAttr(el2, "loading"));
              }
              for (const el of entries.filter((_ref) => {
                let { isIntersecting } = _ref;
                return isIntersecting;
              }).map((_ref2) => {
                let { target } = _ref2;
                return target;
              })) {
                observer.unobserve(el);
              }
            }));
          }
        }
      };
      var Togglable = {
        props: {
          cls: Boolean,
          animation: "list",
          duration: Number,
          velocity: Number,
          origin: String,
          transition: String
        },
        data: {
          cls: false,
          animation: [false],
          duration: 200,
          velocity: 0.2,
          origin: false,
          transition: "ease",
          clsEnter: "uk-togglabe-enter",
          clsLeave: "uk-togglabe-leave"
        },
        computed: {
          hasAnimation(_ref) {
            let { animation } = _ref;
            return !!animation[0];
          },
          hasTransition(_ref2) {
            let { animation } = _ref2;
            return ["slide", "reveal"].some((transition2) => startsWith(animation[0], transition2));
          }
        },
        methods: {
          toggleElement(targets, toggle2, animate2) {
            return new Promise((resolve2) => Promise.all(toNodes(targets).map((el) => {
              const show = isBoolean(toggle2) ? toggle2 : !this.isToggled(el);
              if (!trigger(el, "before" + (show ? "show" : "hide"), [this])) {
                return Promise.reject();
              }
              const promise = (isFunction(animate2) ? animate2 : animate2 === false || !this.hasAnimation ? toggleInstant(this) : this.hasTransition ? toggleTransition(this) : toggleAnimation(this))(el, show);
              const cls = show ? this.clsEnter : this.clsLeave;
              addClass(el, cls);
              trigger(el, show ? "show" : "hide", [this]);
              const done = () => {
                removeClass(el, cls);
                trigger(el, show ? "shown" : "hidden", [this]);
                this.$update(el);
              };
              return promise ? promise.then(done, () => {
                removeClass(el, cls);
                return Promise.reject();
              }) : done();
            })).then(resolve2, noop3));
          },
          isToggled(el) {
            if (el === void 0) {
              el = this.$el;
            }
            [el] = toNodes(el);
            return hasClass(el, this.clsEnter) ? true : hasClass(el, this.clsLeave) ? false : this.cls ? hasClass(el, this.cls.split(" ")[0]) : isVisible(el);
          },
          _toggle(el, toggled) {
            if (!el) {
              return;
            }
            toggled = Boolean(toggled);
            let changed;
            if (this.cls) {
              changed = includes(this.cls, " ") || toggled !== hasClass(el, this.cls);
              changed && toggleClass(el, this.cls, includes(this.cls, " ") ? void 0 : toggled);
            } else {
              changed = toggled === el.hidden;
              changed && (el.hidden = !toggled);
            }
            $$("[autofocus]", el).some((el2) => isVisible(el2) ? el2.focus() || true : el2.blur());
            if (changed) {
              trigger(el, "toggled", [toggled, this]);
              this.$update(el);
            }
          }
        }
      };
      function toggleInstant(_ref3) {
        let { _toggle } = _ref3;
        return (el, show) => {
          Animation.cancel(el);
          Transition.cancel(el);
          return _toggle(el, show);
        };
      }
      function toggleTransition(cmp) {
        var _cmp$animation$;
        const [mode = "reveal", startProp = "top"] = ((_cmp$animation$ = cmp.animation[0]) == null ? void 0 : _cmp$animation$.split("-")) || [];
        const dirs2 = [
          ["left", "right"],
          ["top", "bottom"]
        ];
        const dir = dirs2[includes(dirs2[0], startProp) ? 0 : 1];
        const end = dir[1] === startProp;
        const props2 = ["width", "height"];
        const dimProp = props2[dirs2.indexOf(dir)];
        const marginProp = "margin-" + dir[0];
        const marginStartProp = "margin-" + startProp;
        return async (el, show) => {
          let { duration, velocity, transition: transition2, _toggle } = cmp;
          let currentDim = dimensions$1(el)[dimProp];
          const inProgress = Transition.inProgress(el);
          await Transition.cancel(el);
          if (show) {
            _toggle(el, true);
          }
          const prevProps = Object.fromEntries([
            "padding",
            "border",
            "width",
            "height",
            "overflowY",
            "overflowX",
            marginProp,
            marginStartProp
          ].map((key2) => [key2, el.style[key2]]));
          const dim = dimensions$1(el);
          const currentMargin = toFloat(css2(el, marginProp));
          const marginStart = toFloat(css2(el, marginStartProp));
          const endDim = dim[dimProp] + marginStart;
          if (!inProgress && !show) {
            currentDim += marginStart;
          }
          const [wrapper] = wrapInner(el, "<div>");
          css2(wrapper, {
            boxSizing: "border-box",
            height: dim.height,
            width: dim.width,
            ...css2(el, [
              "overflow",
              "padding",
              "borderTop",
              "borderRight",
              "borderBottom",
              "borderLeft",
              "borderImage",
              marginStartProp
            ])
          });
          css2(el, {
            padding: 0,
            border: 0,
            minWidth: 0,
            minHeight: 0,
            [marginStartProp]: 0,
            width: dim.width,
            height: dim.height,
            overflow: "hidden",
            [dimProp]: currentDim
          });
          const percent2 = currentDim / endDim;
          duration = (velocity * endDim + duration) * (show ? 1 - percent2 : percent2);
          const endProps = { [dimProp]: show ? endDim : 0 };
          if (end) {
            css2(el, marginProp, endDim - currentDim + currentMargin);
            endProps[marginProp] = show ? currentMargin : endDim + currentMargin;
          }
          if (!end ^ mode === "reveal") {
            css2(wrapper, marginProp, -endDim + currentDim);
            Transition.start(wrapper, { [marginProp]: show ? 0 : -endDim }, duration, transition2);
          }
          try {
            await Transition.start(el, endProps, duration, transition2);
          } finally {
            css2(el, prevProps);
            unwrap(wrapper.firstChild);
            if (!show) {
              _toggle(el, false);
            }
          }
        };
      }
      function toggleAnimation(cmp) {
        return (el, show) => {
          Animation.cancel(el);
          const { animation, duration, _toggle } = cmp;
          if (show) {
            _toggle(el, true);
            return Animation.in(el, animation[0], duration, cmp.origin);
          }
          return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(() => _toggle(el, false));
        };
      }
      var Accordion = {
        mixins: [Class, Lazyload, Togglable],
        props: {
          animation: Boolean,
          targets: String,
          active: null,
          collapsible: Boolean,
          multiple: Boolean,
          toggle: String,
          content: String,
          offset: Number
        },
        data: {
          targets: "> *",
          active: false,
          animation: true,
          collapsible: true,
          multiple: false,
          clsOpen: "uk-open",
          toggle: "> .uk-accordion-title",
          content: "> .uk-accordion-content",
          offset: 0
        },
        computed: {
          items: {
            get(_ref, $el) {
              let { targets } = _ref;
              return $$(targets, $el);
            },
            watch(items, prev) {
              if (prev || hasClass(items, this.clsOpen)) {
                return;
              }
              const active2 = this.active !== false && items[Number(this.active)] || !this.collapsible && items[0];
              if (active2) {
                this.toggle(active2, false);
              }
            },
            immediate: true
          },
          toggles(_ref2) {
            let { toggle: toggle2 } = _ref2;
            return this.items.map((item) => $(toggle2, item));
          },
          contents: {
            get(_ref3) {
              let { content } = _ref3;
              return this.items.map((item) => $(content, item));
            },
            watch(items) {
              for (const el of items) {
                hide(el, !hasClass(this.items.find((item) => within(el, item)), this.clsOpen));
              }
            },
            immediate: true
          }
        },
        connected() {
          this.lazyload();
        },
        events: [
          {
            name: "click",
            delegate() {
              return this.targets + " " + this.$props.toggle;
            },
            handler(e) {
              e.preventDefault();
              this.toggle(index4(this.toggles, e.current));
            }
          }
        ],
        methods: {
          toggle(item, animate2) {
            let items = [this.items[getIndex(item, this.items)]];
            const activeItems = filter$1(this.items, "." + this.clsOpen);
            if (!this.multiple && !includes(activeItems, items[0])) {
              items = items.concat(activeItems);
            }
            if (!this.collapsible && activeItems.length < 2 && !filter$1(items, ":not(." + this.clsOpen + ")").length) {
              return;
            }
            for (const el of items) {
              this.toggleElement(el, !hasClass(el, this.clsOpen), async (el2, show) => {
                toggleClass(el2, this.clsOpen, show);
                attr($(this.$props.toggle, el2), "aria-expanded", show);
                const content = $(this.content, el2);
                if (animate2 === false || !this.animation) {
                  content.hidden = !show;
                  hide(content, !show);
                  return;
                }
                await toggleTransition(this)(content, show);
                if (show) {
                  const toggle2 = $(this.$props.toggle, el2);
                  fastdom.read(() => {
                    if (!isInView(toggle2)) {
                      scrollIntoView(toggle2, { offset: this.offset });
                    }
                  });
                }
              });
            }
          }
        }
      };
      function hide(el, hide2) {
        el && (el.hidden = hide2);
      }
      var alert = {
        mixins: [Class, Togglable],
        args: "animation",
        props: {
          animation: Boolean,
          close: String
        },
        data: {
          animation: true,
          selClose: ".uk-alert-close",
          duration: 150
        },
        events: {
          name: "click",
          delegate() {
            return this.selClose;
          },
          handler(e) {
            e.preventDefault();
            this.close();
          }
        },
        methods: {
          async close() {
            await this.toggleElement(this.$el, false, animate$1(this));
            this.$destroy(true);
          }
        }
      };
      function animate$1(_ref) {
        let { duration, transition: transition2, velocity } = _ref;
        return (el) => {
          const height2 = toFloat(css2(el, "height"));
          css2(el, "height", height2);
          return Transition.start(el, {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            opacity: 0
          }, velocity * height2 + duration, transition2);
        };
      }
      var Video = {
        args: "autoplay",
        props: {
          automute: Boolean,
          autoplay: Boolean
        },
        data: {
          automute: false,
          autoplay: true
        },
        connected() {
          this.inView = this.autoplay === "inview";
          if (this.inView && !hasAttr(this.$el, "preload")) {
            this.$el.preload = "none";
          }
          if (isTag(this.$el, "iframe") && !hasAttr(this.$el, "allow")) {
            this.$el.allow = "autoplay";
          }
          if (this.automute) {
            mute(this.$el);
          }
          this.registerObserver(observeIntersection(this.$el, () => this.$emit(), {}, false));
        },
        update: {
          read() {
            if (!isVideo(this.$el)) {
              return false;
            }
            return {
              visible: isVisible(this.$el) && css2(this.$el, "visibility") !== "hidden",
              inView: this.inView && isInView(this.$el)
            };
          },
          write(_ref) {
            let { visible, inView: inView2 } = _ref;
            if (!visible || this.inView && !inView2) {
              pause(this.$el);
            } else if (this.autoplay === true || this.inView && inView2) {
              play(this.$el);
            }
          }
        }
      };
      var Resize = {
        connected() {
          var _this$$options$resize;
          this.registerObserver(observeResize(((_this$$options$resize = this.$options.resizeTargets) == null ? void 0 : _this$$options$resize.call(this)) || this.$el, () => this.$emit("resize")));
        }
      };
      var cover = {
        mixins: [Resize, Video],
        props: {
          width: Number,
          height: Number
        },
        data: {
          automute: true
        },
        events: {
          "load loadedmetadata"() {
            this.$emit("resize");
          }
        },
        resizeTargets() {
          return [this.$el, parent(this.$el)];
        },
        update: {
          read() {
            const { ratio: ratio2, cover: cover2 } = Dimensions;
            const { $el, width: width2, height: height2 } = this;
            let dim = { width: width2, height: height2 };
            if (!dim.width || !dim.height) {
              const intrinsic = {
                width: $el.naturalWidth || $el.videoWidth || $el.clientWidth,
                height: $el.naturalHeight || $el.videoHeight || $el.clientHeight
              };
              if (dim.width) {
                dim = ratio2(intrinsic, "width", dim.width);
              } else if (height2) {
                dim = ratio2(intrinsic, "height", dim.height);
              } else {
                dim = intrinsic;
              }
            }
            const { offsetHeight: coverHeight, offsetWidth: coverWidth } = getPositionedParent($el) || parent($el);
            const coverDim = cover2(dim, {
              width: coverWidth + (coverWidth % 2 ? 1 : 0),
              height: coverHeight + (coverHeight % 2 ? 1 : 0)
            });
            if (!coverDim.width || !coverDim.height) {
              return false;
            }
            return coverDim;
          },
          write(_ref) {
            let { height: height2, width: width2 } = _ref;
            css2(this.$el, { height: height2, width: width2 });
          },
          events: ["resize"]
        }
      };
      function getPositionedParent(el) {
        while (el = parent(el)) {
          if (css2(el, "position") !== "static") {
            return el;
          }
        }
      }
      var Container = {
        props: {
          container: Boolean
        },
        data: {
          container: true
        },
        computed: {
          container(_ref) {
            let { container } = _ref;
            return container === true && this.$container || container && $(container);
          }
        }
      };
      var Position = {
        props: {
          pos: String,
          offset: null,
          flip: Boolean,
          shift: Boolean,
          inset: Boolean
        },
        data: {
          pos: "bottom-" + (isRtl ? "right" : "left"),
          offset: false,
          flip: true,
          shift: true,
          inset: false
        },
        connected() {
          this.pos = this.$props.pos.split("-").concat("center").slice(0, 2);
          [this.dir, this.align] = this.pos;
          this.axis = includes(["top", "bottom"], this.dir) ? "y" : "x";
        },
        methods: {
          positionAt(element, target, boundary) {
            let offset2 = [this.getPositionOffset(element), this.getShiftOffset(element)];
            const placement = [this.flip && "flip", this.shift && "shift"];
            const attach = {
              element: [this.inset ? this.dir : flipPosition(this.dir), this.align],
              target: [this.dir, this.align]
            };
            if (this.axis === "y") {
              for (const prop in attach) {
                attach[prop].reverse();
              }
              offset2.reverse();
              placement.reverse();
            }
            const [scrollElement] = scrollParents(element, /auto|scroll/);
            const { scrollTop, scrollLeft } = scrollElement;
            const elDim = dimensions$1(element);
            css2(element, { top: -elDim.height, left: -elDim.width });
            positionAt(element, target, {
              attach,
              offset: offset2,
              boundary,
              placement,
              viewportOffset: this.getViewportOffset(element)
            });
            scrollElement.scrollTop = scrollTop;
            scrollElement.scrollLeft = scrollLeft;
          },
          getPositionOffset(element) {
            return toPx(this.offset === false ? css2(element, "--uk-position-offset") : this.offset, this.axis === "x" ? "width" : "height", element) * (includes(["left", "top"], this.dir) ? -1 : 1) * (this.inset ? -1 : 1);
          },
          getShiftOffset(element) {
            return this.align === "center" ? 0 : toPx(css2(element, "--uk-position-shift-offset"), this.axis === "y" ? "width" : "height", element) * (includes(["left", "top"], this.align) ? 1 : -1);
          },
          getViewportOffset(element) {
            return toPx(css2(element, "--uk-position-viewport-offset"));
          }
        }
      };
      var Style = {
        beforeConnect() {
          this._style = attr(this.$el, "style");
        },
        disconnected() {
          attr(this.$el, "style", this._style);
        }
      };
      const active$1 = [];
      var Modal = {
        mixins: [Class, Container, Togglable],
        props: {
          selPanel: String,
          selClose: String,
          escClose: Boolean,
          bgClose: Boolean,
          stack: Boolean
        },
        data: {
          cls: "uk-open",
          escClose: true,
          bgClose: true,
          overlay: true,
          stack: false
        },
        computed: {
          panel(_ref, $el) {
            let { selPanel } = _ref;
            return $(selPanel, $el);
          },
          transitionElement() {
            return this.panel;
          },
          bgClose(_ref2) {
            let { bgClose } = _ref2;
            return bgClose && this.panel;
          }
        },
        beforeDisconnect() {
          if (includes(active$1, this)) {
            this.toggleElement(this.$el, false, false);
          }
        },
        events: [
          {
            name: "click",
            delegate() {
              return this.selClose;
            },
            handler(e) {
              e.preventDefault();
              this.hide();
            }
          },
          {
            name: "toggle",
            self: true,
            handler(e) {
              if (e.defaultPrevented) {
                return;
              }
              e.preventDefault();
              if (this.isToggled() === includes(active$1, this)) {
                this.toggle();
              }
            }
          },
          {
            name: "beforeshow",
            self: true,
            handler(e) {
              if (includes(active$1, this)) {
                return false;
              }
              if (!this.stack && active$1.length) {
                Promise.all(active$1.map((modal2) => modal2.hide())).then(this.show);
                e.preventDefault();
              } else {
                active$1.push(this);
              }
            }
          },
          {
            name: "show",
            self: true,
            handler() {
              once(this.$el, "hide", on(document, "focusin", (e) => {
                if (last(active$1) === this && !within(e.target, this.$el)) {
                  this.$el.focus();
                }
              }));
              if (this.overlay) {
                once(this.$el, "hidden", preventOverscroll(this.$el), { self: true });
                once(this.$el, "hidden", preventBackgroundScroll(), { self: true });
              }
              if (this.stack) {
                css2(this.$el, "zIndex", toFloat(css2(this.$el, "zIndex")) + active$1.length);
              }
              addClass(document.documentElement, this.clsPage);
              if (this.bgClose) {
                once(this.$el, "hide", on(document, pointerDown$1, (_ref3) => {
                  let { target } = _ref3;
                  if (last(active$1) !== this || this.overlay && !within(target, this.$el) || within(target, this.panel)) {
                    return;
                  }
                  once(document, pointerUp$1 + " " + pointerCancel + " scroll", (_ref4) => {
                    let { defaultPrevented, type, target: newTarget } = _ref4;
                    if (!defaultPrevented && type === pointerUp$1 && target === newTarget) {
                      this.hide();
                    }
                  }, true);
                }), { self: true });
              }
              if (this.escClose) {
                once(this.$el, "hide", on(document, "keydown", (e) => {
                  if (e.keyCode === 27 && last(active$1) === this) {
                    this.hide();
                  }
                }), { self: true });
              }
            }
          },
          {
            name: "shown",
            self: true,
            handler() {
              if (!isFocusable(this.$el)) {
                attr(this.$el, "tabindex", "-1");
              }
              if (!$(":focus", this.$el)) {
                this.$el.focus();
              }
            }
          },
          {
            name: "hidden",
            self: true,
            handler() {
              if (includes(active$1, this)) {
                active$1.splice(active$1.indexOf(this), 1);
              }
              css2(this.$el, "zIndex", "");
              if (!active$1.some((modal2) => modal2.clsPage === this.clsPage)) {
                removeClass(document.documentElement, this.clsPage);
              }
            }
          }
        ],
        methods: {
          toggle() {
            return this.isToggled() ? this.hide() : this.show();
          },
          show() {
            if (this.container && parent(this.$el) !== this.container) {
              append(this.container, this.$el);
              return new Promise((resolve2) => requestAnimationFrame(() => this.show().then(resolve2)));
            }
            return this.toggleElement(this.$el, true, animate(this));
          },
          hide() {
            return this.toggleElement(this.$el, false, animate(this));
          }
        }
      };
      function animate(_ref5) {
        let { transitionElement, _toggle } = _ref5;
        return (el, show) => new Promise((resolve2, reject) => once(el, "show hide", () => {
          el._reject == null ? void 0 : el._reject();
          el._reject = reject;
          _toggle(el, show);
          const off2 = once(transitionElement, "transitionstart", () => {
            once(transitionElement, "transitionend transitioncancel", resolve2, {
              self: true
            });
            clearTimeout(timer);
          }, { self: true });
          const timer = setTimeout(() => {
            off2();
            resolve2();
          }, toMs(css2(transitionElement, "transitionDuration")));
        })).then(() => delete el._reject);
      }
      function toMs(time) {
        return time ? endsWith(time, "ms") ? toFloat(time) : toFloat(time) * 1e3 : 0;
      }
      function preventOverscroll(el) {
        if (CSS.supports("overscroll-behavior", "contain")) {
          const elements = filterChildren(el, (child) => /auto|scroll/.test(css2(child, "overflow")));
          css2(elements, "overscrollBehavior", "contain");
          return () => css2(elements, "overscrollBehavior", "");
        }
        let startClientY;
        const events = [
          on(el, "touchstart", (_ref6) => {
            let { targetTouches } = _ref6;
            if (targetTouches.length === 1) {
              startClientY = targetTouches[0].clientY;
            }
          }, { passive: true }),
          on(el, "touchmove", (e) => {
            if (e.targetTouches.length !== 1) {
              return;
            }
            let [scrollParent] = scrollParents(e.target, /auto|scroll/);
            if (!within(scrollParent, el)) {
              scrollParent = el;
            }
            const clientY = e.targetTouches[0].clientY - startClientY;
            const { scrollTop, scrollHeight, clientHeight } = scrollParent;
            if (clientHeight >= scrollHeight || scrollTop === 0 && clientY > 0 || scrollHeight - scrollTop <= clientHeight && clientY < 0) {
              e.cancelable && e.preventDefault();
            }
          }, { passive: false })
        ];
        return () => events.forEach((fn) => fn());
      }
      let prevented;
      function preventBackgroundScroll() {
        if (prevented) {
          return noop3;
        }
        prevented = true;
        const { scrollingElement: scrollingElement2 } = document;
        css2(scrollingElement2, {
          overflowY: "hidden",
          touchAction: "none",
          paddingRight: width(window) - scrollingElement2.clientWidth
        });
        return () => {
          prevented = false;
          css2(scrollingElement2, { overflowY: "", touchAction: "", paddingRight: "" });
        };
      }
      function filterChildren(el, fn) {
        const children2 = [];
        apply(el, (node) => {
          if (fn(node)) {
            children2.push(node);
          }
        });
        return children2;
      }
      let active;
      var drop = {
        mixins: [Container, Lazyload, Position, Style, Togglable],
        args: "pos",
        props: {
          mode: "list",
          toggle: Boolean,
          boundary: Boolean,
          target: Boolean,
          targetX: Boolean,
          targetY: Boolean,
          stretch: Boolean,
          delayShow: Number,
          delayHide: Number,
          autoUpdate: Boolean,
          clsDrop: String,
          animateOut: Boolean,
          bgScroll: Boolean
        },
        data: {
          mode: ["click", "hover"],
          toggle: "- *",
          boundary: false,
          target: false,
          targetX: false,
          targetY: false,
          stretch: false,
          delayShow: 0,
          delayHide: 800,
          autoUpdate: true,
          clsDrop: false,
          animateOut: false,
          bgScroll: true,
          animation: ["uk-animation-fade"],
          cls: "uk-open",
          container: false
        },
        computed: {
          target(_ref, $el) {
            let { target, targetX, targetY } = _ref;
            targetX = targetX || target || this.targetEl;
            targetY = targetY || target || this.targetEl;
            return [
              targetX === true ? window : query(targetX, $el),
              targetY === true ? window : query(targetY, $el)
            ];
          }
        },
        created() {
          this.tracker = new MouseTracker();
        },
        beforeConnect() {
          this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name;
        },
        connected() {
          addClass(this.$el, this.clsDrop);
          if (this.toggle && !this.targetEl) {
            this.targetEl = this.$create("toggle", query(this.toggle, this.$el), {
              target: this.$el,
              mode: this.mode
            }).$el;
            attr(this.targetEl, "aria-haspopup", true);
            this.lazyload(this.targetEl);
          }
        },
        disconnected() {
          if (this.isActive()) {
            this.hide(false);
            active = null;
          }
        },
        events: [
          {
            name: "click",
            delegate() {
              return "." + this.clsDrop + "-close";
            },
            handler(e) {
              e.preventDefault();
              this.hide(false);
            }
          },
          {
            name: "click",
            delegate() {
              return 'a[href^="#"]';
            },
            handler(_ref2) {
              let { defaultPrevented, current: { hash: hash2 } } = _ref2;
              if (!defaultPrevented && hash2 && !within(hash2, this.$el)) {
                this.hide(false);
              }
            }
          },
          {
            name: "beforescroll",
            handler() {
              this.hide(false);
            }
          },
          {
            name: "toggle",
            self: true,
            handler(e, toggle2) {
              e.preventDefault();
              if (this.isToggled()) {
                this.hide(false);
              } else {
                this.show(toggle2 == null ? void 0 : toggle2.$el, false);
              }
            }
          },
          {
            name: "toggleshow",
            self: true,
            handler(e, toggle2) {
              e.preventDefault();
              this.show(toggle2 == null ? void 0 : toggle2.$el);
            }
          },
          {
            name: "togglehide",
            self: true,
            handler(e) {
              e.preventDefault();
              if (!matches(this.$el, ":focus,:hover")) {
                this.hide();
              }
            }
          },
          {
            name: pointerEnter + " focusin",
            filter() {
              return includes(this.mode, "hover");
            },
            handler(e) {
              if (!isTouch(e)) {
                this.clearTimers();
              }
            }
          },
          {
            name: pointerLeave + " focusout",
            filter() {
              return includes(this.mode, "hover");
            },
            handler(e) {
              if (!isTouch(e) && e.relatedTarget) {
                this.hide();
              }
            }
          },
          {
            name: "toggled",
            self: true,
            handler(e, toggled) {
              if (!toggled) {
                return;
              }
              this.clearTimers();
              this.position();
            }
          },
          {
            name: "show",
            self: true,
            handler() {
              active = this;
              this.tracker.init();
              const update = () => this.$emit();
              const handlers = [
                on(document, pointerDown$1, (_ref3) => {
                  let { target } = _ref3;
                  return !within(target, this.$el) && once(document, pointerUp$1 + " " + pointerCancel + " scroll", (_ref4) => {
                    let { defaultPrevented, type, target: newTarget } = _ref4;
                    if (!defaultPrevented && type === pointerUp$1 && target === newTarget && !(this.targetEl && within(target, this.targetEl))) {
                      this.hide(false);
                    }
                  }, true);
                }),
                on(document, "keydown", (e) => {
                  if (e.keyCode === 27) {
                    this.hide(false);
                  }
                }),
                on(window, "resize", update),
                (() => {
                  const observer = observeResize(scrollParents(this.$el).concat(this.target), update);
                  return () => observer.disconnect();
                })(),
                ...this.autoUpdate ? [
                  on([document, scrollParents(this.$el)], "scroll", update, {
                    passive: true
                  })
                ] : [],
                ...this.bgScroll ? [] : [preventOverscroll(this.$el), preventBackgroundScroll()]
              ];
              once(this.$el, "hide", () => handlers.forEach((handler2) => handler2()), {
                self: true
              });
            }
          },
          {
            name: "beforehide",
            self: true,
            handler() {
              this.clearTimers();
            }
          },
          {
            name: "hide",
            handler(_ref5) {
              let { target } = _ref5;
              if (this.$el !== target) {
                active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
                return;
              }
              active = this.isActive() ? null : active;
              this.tracker.cancel();
            }
          }
        ],
        update: {
          write() {
            if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
              this.position();
            }
          }
        },
        methods: {
          show(target, delay) {
            if (target === void 0) {
              target = this.targetEl;
            }
            if (delay === void 0) {
              delay = true;
            }
            if (this.isToggled() && target && this.targetEl && target !== this.targetEl) {
              this.hide(false, false);
            }
            this.targetEl = target;
            this.clearTimers();
            if (this.isActive()) {
              return;
            }
            if (active) {
              if (delay && active.isDelaying) {
                this.showTimer = setTimeout(() => matches(target, ":hover") && this.show(), 10);
                return;
              }
              let prev;
              while (active && prev !== active && !within(this.$el, active.$el)) {
                prev = active;
                active.hide(false, false);
              }
            }
            if (this.container && parent(this.$el) !== this.container) {
              append(this.container, this.$el);
            }
            this.showTimer = setTimeout(() => this.toggleElement(this.$el, true), delay && this.delayShow || 0);
          },
          hide(delay, animate2) {
            if (delay === void 0) {
              delay = true;
            }
            if (animate2 === void 0) {
              animate2 = true;
            }
            const hide2 = () => this.toggleElement(this.$el, false, this.animateOut && animate2);
            this.clearTimers();
            this.isDelaying = getPositionedElements(this.$el).some((el) => this.tracker.movesTo(el));
            if (delay && this.isDelaying) {
              this.hideTimer = setTimeout(this.hide, 50);
            } else if (delay && this.delayHide) {
              this.hideTimer = setTimeout(hide2, this.delayHide);
            } else {
              hide2();
            }
          },
          clearTimers() {
            clearTimeout(this.showTimer);
            clearTimeout(this.hideTimer);
            this.showTimer = null;
            this.hideTimer = null;
            this.isDelaying = false;
          },
          isActive() {
            return active === this;
          },
          position() {
            removeClass(this.$el, this.clsDrop + "-stack");
            attr(this.$el, "style", this._style);
            this.$el.hidden = true;
            const boundary = query(this.boundary, this.$el);
            const boundaryOffset = offset(boundary || window);
            const viewports = this.target.map((target) => offsetViewport(scrollParents(target)[0]));
            const viewportOffset = this.getViewportOffset(this.$el);
            const dirs2 = [
              [0, ["x", "width", "left", "right"]],
              [1, ["y", "height", "top", "bottom"]]
            ];
            for (const [i, [axis, prop]] of dirs2) {
              if (this.axis !== axis && includes([axis, true], this.stretch)) {
                css2(this.$el, {
                  [prop]: Math.min(boundaryOffset[prop], viewports[i][prop] - 2 * viewportOffset),
                  ["overflow-" + axis]: "auto"
                });
              }
            }
            const maxWidth = viewports[0].width - 2 * viewportOffset;
            if (this.$el.offsetWidth > maxWidth) {
              addClass(this.$el, this.clsDrop + "-stack");
            }
            css2(this.$el, "maxWidth", maxWidth);
            this.$el.hidden = false;
            this.positionAt(this.$el, this.target, boundary);
            for (const [i, [axis, prop, start, end]] of dirs2) {
              if (this.axis === axis && includes([axis, true], this.stretch)) {
                const positionOffset = Math.abs(this.getPositionOffset(this.$el));
                const targetOffset = offset(this.target[i]);
                const elOffset = offset(this.$el);
                css2(this.$el, {
                  [prop]: (targetOffset[start] > elOffset[start] ? targetOffset[start] - Math.max(boundaryOffset[start], viewports[i][start] + viewportOffset) : Math.min(boundaryOffset[end], viewports[i][end] - viewportOffset) - targetOffset[end]) - positionOffset,
                  ["overflow-" + axis]: "auto"
                });
                this.positionAt(this.$el, this.target, boundary);
              }
            }
          }
        }
      };
      function getPositionedElements(el) {
        const result = [];
        apply(el, (el2) => css2(el2, "position") !== "static" && result.push(el2));
        return result;
      }
      var formCustom = {
        mixins: [Class],
        args: "target",
        props: {
          target: Boolean
        },
        data: {
          target: false
        },
        computed: {
          input(_, $el) {
            return $(selInput, $el);
          },
          state() {
            return this.input.nextElementSibling;
          },
          target(_ref, $el) {
            let { target } = _ref;
            return target && (target === true && parent(this.input) === $el && this.input.nextElementSibling || $(target, $el));
          }
        },
        update() {
          var _input$files;
          const { target, input } = this;
          if (!target) {
            return;
          }
          let option;
          const prop = isInput(target) ? "value" : "textContent";
          const prev = target[prop];
          const value = (_input$files = input.files) != null && _input$files[0] ? input.files[0].name : matches(input, "select") && (option = $$("option", input).filter((el) => el.selected)[0]) ? option.textContent : input.value;
          if (prev !== value) {
            target[prop] = value;
          }
        },
        events: [
          {
            name: "change",
            handler() {
              this.$emit();
            }
          },
          {
            name: "reset",
            el() {
              return closest(this.$el, "form");
            },
            handler() {
              this.$emit();
            }
          }
        ]
      };
      var Margin = {
        mixins: [Resize],
        props: {
          margin: String,
          firstColumn: Boolean
        },
        data: {
          margin: "uk-margin-small-top",
          firstColumn: "uk-first-column"
        },
        resizeTargets() {
          return [this.$el, ...toArray(this.$el.children)];
        },
        connected() {
          this.registerObserver(observeMutation(this.$el, () => this.$reset(), {
            childList: true
          }));
        },
        update: {
          read() {
            const rows = getRows(this.$el.children);
            return {
              rows,
              columns: getColumns(rows)
            };
          },
          write(_ref) {
            let { columns, rows } = _ref;
            for (const row of rows) {
              for (const column of row) {
                toggleClass(column, this.margin, rows[0] !== row);
                toggleClass(column, this.firstColumn, columns[0].includes(column));
              }
            }
          },
          events: ["resize"]
        }
      };
      function getRows(items) {
        return sortBy(items, "top", "bottom");
      }
      function getColumns(rows) {
        const columns = [];
        for (const row of rows) {
          const sorted = sortBy(row, "left", "right");
          for (let j = 0; j < sorted.length; j++) {
            columns[j] = columns[j] ? columns[j].concat(sorted[j]) : sorted[j];
          }
        }
        return isRtl ? columns.reverse() : columns;
      }
      function sortBy(items, startProp, endProp) {
        const sorted = [[]];
        for (const el of items) {
          if (!isVisible(el)) {
            continue;
          }
          let dim = getOffset(el);
          for (let i = sorted.length - 1; i >= 0; i--) {
            const current = sorted[i];
            if (!current[0]) {
              current.push(el);
              break;
            }
            let startDim;
            if (current[0].offsetParent === el.offsetParent) {
              startDim = getOffset(current[0]);
            } else {
              dim = getOffset(el, true);
              startDim = getOffset(current[0], true);
            }
            if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
              sorted.push([el]);
              break;
            }
            if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
              current.push(el);
              break;
            }
            if (i === 0) {
              sorted.unshift([el]);
              break;
            }
          }
        }
        return sorted;
      }
      function getOffset(element, offset2) {
        if (offset2 === void 0) {
          offset2 = false;
        }
        let { offsetTop, offsetLeft, offsetHeight, offsetWidth } = element;
        if (offset2) {
          [offsetTop, offsetLeft] = offsetPosition(element);
        }
        return {
          top: offsetTop,
          left: offsetLeft,
          bottom: offsetTop + offsetHeight,
          right: offsetLeft + offsetWidth
        };
      }
      var Scroll = {
        connected() {
          registerScrollListener(this._uid, () => this.$emit("scroll"));
        },
        disconnected() {
          unregisterScrollListener(this._uid);
        }
      };
      const scrollListeners = /* @__PURE__ */ new Map();
      let unbindScrollListener;
      function registerScrollListener(id, listener) {
        unbindScrollListener = unbindScrollListener || on(window, "scroll", () => scrollListeners.forEach((listener2) => listener2()), {
          passive: true,
          capture: true
        });
        scrollListeners.set(id, listener);
      }
      function unregisterScrollListener(id) {
        scrollListeners.delete(id);
        if (unbindScrollListener && !scrollListeners.size) {
          unbindScrollListener();
          unbindScrollListener = null;
        }
      }
      var grid = {
        extends: Margin,
        mixins: [Class, Scroll],
        name: "grid",
        props: {
          masonry: Boolean,
          parallax: Number
        },
        data: {
          margin: "uk-grid-margin",
          clsStack: "uk-grid-stack",
          masonry: false,
          parallax: 0
        },
        connected() {
          this.masonry && addClass(this.$el, "uk-flex-top uk-flex-wrap-top");
        },
        update: [
          {
            write(_ref) {
              let { columns } = _ref;
              toggleClass(this.$el, this.clsStack, columns.length < 2);
            },
            events: ["resize"]
          },
          {
            read(data2) {
              let { columns, rows } = data2;
              if (!columns.length || !this.masonry && !this.parallax || positionedAbsolute(this.$el)) {
                data2.translates = false;
                return false;
              }
              let translates = false;
              const nodes = children(this.$el);
              const columnHeights = getColumnHeights(columns);
              const margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
              const elHeight = Math.max(...columnHeights) + margin;
              if (this.masonry) {
                columns = columns.map((column) => sortBy$1(column, "offsetTop"));
                translates = getTranslates(rows, columns);
              }
              let padding = Math.abs(this.parallax);
              if (padding) {
                padding = columnHeights.reduce((newPadding, hgt, i) => Math.max(newPadding, hgt + margin + (i % 2 ? padding : padding / 8) - elHeight), 0);
              }
              return { padding, columns, translates, height: translates ? elHeight : "" };
            },
            write(_ref2) {
              let { height: height2, padding } = _ref2;
              css2(this.$el, "paddingBottom", padding || "");
              height2 !== false && css2(this.$el, "height", height2);
            },
            events: ["resize"]
          },
          {
            read() {
              if (this.parallax && positionedAbsolute(this.$el)) {
                return false;
              }
              return {
                scrolled: this.parallax ? scrolledOver(this.$el) * Math.abs(this.parallax) : false
              };
            },
            write(_ref3) {
              let { columns, scrolled, translates } = _ref3;
              if (scrolled === false && !translates) {
                return;
              }
              columns.forEach((column, i) => column.forEach((el, j) => css2(el, "transform", !scrolled && !translates ? "" : "translateY(" + ((translates && -translates[i][j]) + (scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)")));
            },
            events: ["scroll", "resize"]
          }
        ]
      };
      function positionedAbsolute(el) {
        return children(el).some((el2) => css2(el2, "position") === "absolute");
      }
      function getTranslates(rows, columns) {
        const rowHeights = rows.map((row) => Math.max(...row.map((el) => el.offsetHeight)));
        return columns.map((elements) => {
          let prev = 0;
          return elements.map((element, row) => prev += row ? rowHeights[row - 1] - elements[row - 1].offsetHeight : 0);
        });
      }
      function getMarginTop(nodes, cls) {
        const [node] = nodes.filter((el) => hasClass(el, cls));
        return toFloat(node ? css2(node, "marginTop") : css2(nodes[0], "paddingLeft"));
      }
      function getColumnHeights(columns) {
        return columns.map((column) => column.reduce((sum, el) => sum + el.offsetHeight, 0));
      }
      var heightMatch = {
        mixins: [Resize],
        args: "target",
        props: {
          target: String,
          row: Boolean
        },
        data: {
          target: "> *",
          row: true
        },
        computed: {
          elements: {
            get(_ref, $el) {
              let { target } = _ref;
              return $$(target, $el);
            },
            watch() {
              this.$reset();
            }
          }
        },
        resizeTargets() {
          return [this.$el, ...this.elements];
        },
        update: {
          read() {
            return {
              rows: (this.row ? getRows(this.elements) : [this.elements]).map(match$1)
            };
          },
          write(_ref2) {
            let { rows } = _ref2;
            for (const { heights, elements } of rows) {
              elements.forEach((el, i) => css2(el, "minHeight", heights[i]));
            }
          },
          events: ["resize"]
        }
      };
      function match$1(elements) {
        if (elements.length < 2) {
          return { heights: [""], elements };
        }
        css2(elements, "minHeight", "");
        let heights = elements.map(getHeight);
        const max = Math.max(...heights);
        return {
          heights: elements.map((el, i) => heights[i].toFixed(2) === max.toFixed(2) ? "" : max),
          elements
        };
      }
      function getHeight(element) {
        let style = false;
        if (!isVisible(element)) {
          style = element.style.display;
          css2(element, "display", "block", "important");
        }
        const height2 = dimensions$1(element).height - boxModelAdjust(element, "height", "content-box");
        if (style !== false) {
          css2(element, "display", style);
        }
        return height2;
      }
      var heightViewport = {
        mixins: [Resize],
        props: {
          expand: Boolean,
          offsetTop: Boolean,
          offsetBottom: Boolean,
          minHeight: Number
        },
        data: {
          expand: false,
          offsetTop: false,
          offsetBottom: false,
          minHeight: 0
        },
        resizeTargets() {
          return [this.$el, ...scrollParents(this.$el, /auto|scroll/)];
        },
        update: {
          read(_ref) {
            let { minHeight: prev } = _ref;
            if (!isVisible(this.$el)) {
              return false;
            }
            let minHeight = "";
            const box = boxModelAdjust(this.$el, "height", "content-box");
            const { body, scrollingElement: scrollingElement2 } = document;
            const [scrollElement] = scrollParents(this.$el, /auto|scroll/);
            const { height: viewportHeight } = offsetViewport(scrollElement === body ? scrollingElement2 : scrollElement);
            if (this.expand) {
              minHeight = Math.max(viewportHeight - (dimensions$1(scrollElement).height - dimensions$1(this.$el).height) - box, 0);
            } else {
              const isScrollingElement = scrollingElement2 === scrollElement || body === scrollElement;
              minHeight = "calc(" + (isScrollingElement ? "100vh" : viewportHeight + "px");
              if (this.offsetTop) {
                if (isScrollingElement) {
                  const top = offsetPosition(this.$el)[0] - offsetPosition(scrollElement)[0];
                  minHeight += top > 0 && top < viewportHeight / 2 ? " - " + top + "px" : "";
                } else {
                  minHeight += " - " + css2(scrollElement, "paddingTop");
                }
              }
              if (this.offsetBottom === true) {
                minHeight += " - " + dimensions$1(this.$el.nextElementSibling).height + "px";
              } else if (isNumeric(this.offsetBottom)) {
                minHeight += " - " + this.offsetBottom + "vh";
              } else if (this.offsetBottom && endsWith(this.offsetBottom, "px")) {
                minHeight += " - " + toFloat(this.offsetBottom) + "px";
              } else if (isString(this.offsetBottom)) {
                minHeight += " - " + dimensions$1(query(this.offsetBottom, this.$el)).height + "px";
              }
              minHeight += (box ? " - " + box + "px" : "") + ")";
            }
            return { minHeight, prev };
          },
          write(_ref2) {
            let { minHeight } = _ref2;
            css2(this.$el, { minHeight });
            if (this.minHeight && toFloat(css2(this.$el, "minHeight")) < this.minHeight) {
              css2(this.$el, "minHeight", this.minHeight);
            }
          },
          events: ["resize"]
        }
      };
      var SVG = {
        args: "src",
        props: {
          id: Boolean,
          icon: String,
          src: String,
          style: String,
          width: Number,
          height: Number,
          ratio: Number,
          class: String,
          strokeAnimation: Boolean,
          focusable: Boolean,
          attributes: "list"
        },
        data: {
          ratio: 1,
          include: ["style", "class", "focusable"],
          class: "",
          strokeAnimation: false
        },
        beforeConnect() {
          this.class += " uk-svg";
        },
        connected() {
          if (!this.icon && includes(this.src, "#")) {
            [this.src, this.icon] = this.src.split("#");
          }
          this.svg = this.getSvg().then((el) => {
            if (this._connected) {
              const svg = insertSVG(el, this.$el);
              if (this.svgEl && svg !== this.svgEl) {
                remove$1(this.svgEl);
              }
              this.applyAttributes(svg, el);
              return this.svgEl = svg;
            }
          }, noop3);
          if (this.strokeAnimation) {
            this.svg.then((el) => {
              if (this._connected) {
                applyAnimation(el);
                this.registerObserver(observeIntersection(el, (records, observer) => {
                  applyAnimation(el);
                  observer.disconnect();
                }));
              }
            });
          }
        },
        disconnected() {
          this.svg.then((svg) => {
            if (this._connected) {
              return;
            }
            if (isVoidElement(this.$el)) {
              this.$el.hidden = false;
            }
            remove$1(svg);
            this.svgEl = null;
          });
          this.svg = null;
        },
        methods: {
          async getSvg() {
            if (isTag(this.$el, "img") && !this.$el.complete && this.$el.loading === "lazy") {
              return new Promise((resolve2) => once(this.$el, "load", () => resolve2(this.getSvg())));
            }
            return parseSVG(await loadSVG(this.src), this.icon) || Promise.reject("SVG not found.");
          },
          applyAttributes(el, ref) {
            for (const prop in this.$options.props) {
              if (includes(this.include, prop) && prop in this) {
                attr(el, prop, this[prop]);
              }
            }
            for (const attribute in this.attributes) {
              const [prop, value] = this.attributes[attribute].split(":", 2);
              attr(el, prop, value);
            }
            if (!this.id) {
              removeAttr(el, "id");
            }
            const props2 = ["width", "height"];
            let dimensions2 = props2.map((prop) => this[prop]);
            if (!dimensions2.some((val) => val)) {
              dimensions2 = props2.map((prop) => attr(ref, prop));
            }
            const viewBox = attr(ref, "viewBox");
            if (viewBox && !dimensions2.some((val) => val)) {
              dimensions2 = viewBox.split(" ").slice(2);
            }
            dimensions2.forEach((val, i) => attr(el, props2[i], toFloat(val) * this.ratio || null));
          }
        }
      };
      const loadSVG = memoize(async (src) => {
        if (src) {
          if (startsWith(src, "data:")) {
            return decodeURIComponent(src.split(",")[1]);
          } else {
            return (await fetch(src)).text();
          }
        } else {
          return Promise.reject();
        }
      });
      function parseSVG(svg, icon) {
        var _svg;
        if (icon && includes(svg, "<symbol")) {
          svg = parseSymbols(svg, icon) || svg;
        }
        svg = $(svg.substr(svg.indexOf("<svg")));
        return ((_svg = svg) == null ? void 0 : _svg.hasChildNodes()) && svg;
      }
      const symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
      const symbols = {};
      function parseSymbols(svg, icon) {
        if (!symbols[svg]) {
          symbols[svg] = {};
          symbolRe.lastIndex = 0;
          let match2;
          while (match2 = symbolRe.exec(svg)) {
            symbols[svg][match2[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + match2[1] + "svg>";
          }
        }
        return symbols[svg][icon];
      }
      function applyAnimation(el) {
        const length = getMaxPathLength(el);
        if (length) {
          el.style.setProperty("--uk-animation-stroke", length);
        }
      }
      function getMaxPathLength(el) {
        return Math.ceil(Math.max(0, ...$$("[stroke]", el).map((stroke) => {
          try {
            return stroke.getTotalLength();
          } catch (e) {
            return 0;
          }
        })));
      }
      function insertSVG(el, root) {
        if (isVoidElement(root) || isTag(root, "canvas")) {
          root.hidden = true;
          const next = root.nextElementSibling;
          return equals(el, next) ? next : after(root, el);
        }
        const last2 = root.lastElementChild;
        return equals(el, last2) ? last2 : append(root, el);
      }
      function equals(el, other) {
        return isTag(el, "svg") && isTag(other, "svg") && innerHTML(el) === innerHTML(other);
      }
      function innerHTML(el) {
        return (el.innerHTML || new XMLSerializer().serializeToString(el).replace(/<svg.*?>(.*?)<\/svg>/g, "$1")).replace(/\s/g, "");
      }
      var closeIcon = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>';
      var closeLarge = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>';
      var marker = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>';
      var navParentIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>';
      var navParentIconLarge = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 4 7 10 13 4"/></svg>';
      var navbarParentIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polyline fill="none" stroke="#000" stroke-width="1.1" points="1 3.5 6 8.5 11 3.5"/></svg>';
      var navbarToggleIcon = `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><style>.uk-navbar-toggle-animate svg > [class*='line-'] {
            transition: 0.2s ease-in-out;
            transition-property: transform, opacity,;
            transform-origin: center;
            opacity: 1;
        }

        .uk-navbar-toggle svg > .line-3 { opacity: 0; }
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-3 { opacity: 1; }

        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-2 { transform: rotate(45deg); }
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-3 { transform: rotate(-45deg); }

        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-1,
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-4 { opacity: 0; }
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-1 { transform: translateY(6px) scaleX(0); }
        .uk-navbar-toggle-animate[aria-expanded="true"] svg > .line-4 { transform: translateY(-6px) scaleX(0); }</style><rect class="line-1" y="3" width="20" height="2"/><rect class="line-2" y="9" width="20" height="2"/><rect class="line-3" y="9" width="20" height="2"/><rect class="line-4" y="15" width="20" height="2"/></svg>`;
      var overlayIcon = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>';
      var paginationNext = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>';
      var paginationPrevious = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>';
      var searchIcon = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>';
      var searchLarge = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>';
      var searchNavbar = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>';
      var slidenavNext = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>';
      var slidenavNextLarge = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>';
      var slidenavPrevious = '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>';
      var slidenavPreviousLarge = '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>';
      var spinner = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>';
      var totop = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
      const icons = {
        spinner,
        totop,
        marker,
        "close-icon": closeIcon,
        "close-large": closeLarge,
        "nav-parent-icon": navParentIcon,
        "nav-parent-icon-large": navParentIconLarge,
        "navbar-parent-icon": navbarParentIcon,
        "navbar-toggle-icon": navbarToggleIcon,
        "overlay-icon": overlayIcon,
        "pagination-next": paginationNext,
        "pagination-previous": paginationPrevious,
        "search-icon": searchIcon,
        "search-large": searchLarge,
        "search-navbar": searchNavbar,
        "slidenav-next": slidenavNext,
        "slidenav-next-large": slidenavNextLarge,
        "slidenav-previous": slidenavPrevious,
        "slidenav-previous-large": slidenavPreviousLarge
      };
      const Icon = {
        install: install$3,
        extends: SVG,
        args: "icon",
        props: ["icon"],
        data: {
          include: ["focusable"]
        },
        isIcon: true,
        beforeConnect() {
          addClass(this.$el, "uk-icon");
        },
        methods: {
          async getSvg() {
            const icon = getIcon(this.icon);
            if (!icon) {
              throw "Icon not found.";
            }
            return icon;
          }
        }
      };
      const IconComponent = {
        args: false,
        extends: Icon,
        data: (vm) => ({
          icon: hyphenate(vm.constructor.options.name)
        }),
        beforeConnect() {
          addClass(this.$el, this.$name);
        }
      };
      const NavParentIcon = {
        extends: IconComponent,
        beforeConnect() {
          const icon = this.$props.icon;
          this.icon = closest(this.$el, ".uk-nav-primary") ? icon + "-large" : icon;
        }
      };
      const Slidenav = {
        extends: IconComponent,
        beforeConnect() {
          addClass(this.$el, "uk-slidenav");
          const icon = this.$props.icon;
          this.icon = hasClass(this.$el, "uk-slidenav-large") ? icon + "-large" : icon;
        }
      };
      const Search = {
        extends: IconComponent,
        beforeConnect() {
          this.icon = hasClass(this.$el, "uk-search-icon") && parents(this.$el, ".uk-search-large").length ? "search-large" : parents(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon;
        }
      };
      const Close = {
        extends: IconComponent,
        beforeConnect() {
          this.icon = "close-" + (hasClass(this.$el, "uk-close-large") ? "large" : "icon");
        }
      };
      const Spinner = {
        extends: IconComponent,
        methods: {
          async getSvg() {
            const icon = await Icon.methods.getSvg.call(this);
            if (this.ratio !== 1) {
              css2($("circle", icon), "strokeWidth", 1 / this.ratio);
            }
            return icon;
          }
        }
      };
      const parsed = {};
      function install$3(UIkit2) {
        UIkit2.icon.add = (name, svg) => {
          const added = isString(name) ? { [name]: svg } : name;
          each2(added, (svg2, name2) => {
            icons[name2] = svg2;
            delete parsed[name2];
          });
          if (UIkit2._initialized) {
            apply(document.body, (el) => each2(UIkit2.getComponents(el), (cmp) => {
              cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
            }));
          }
        };
      }
      function getIcon(icon) {
        if (!icons[icon]) {
          return null;
        }
        if (!parsed[icon]) {
          parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
        }
        return parsed[icon].cloneNode(true);
      }
      function applyRtl(icon) {
        return isRtl ? swap(swap(icon, "left", "right"), "previous", "next") : icon;
      }
      const nativeLazyLoad = inBrowser && "loading" in HTMLImageElement.prototype;
      var img = {
        args: "dataSrc",
        props: {
          dataSrc: String,
          sources: String,
          offsetTop: String,
          offsetLeft: String,
          target: String,
          loading: String
        },
        data: {
          dataSrc: "",
          sources: false,
          offsetTop: "50vh",
          offsetLeft: "50vw",
          target: false,
          loading: "lazy"
        },
        connected() {
          if (this.loading !== "lazy") {
            this.load();
            return;
          }
          const target = [this.$el, ...queryAll(this.$props.target, this.$el)];
          if (nativeLazyLoad && isImg(this.$el)) {
            this.$el.loading = "lazy";
            setSrcAttrs(this.$el);
            if (target.length === 1) {
              return;
            }
          }
          ensureSrcAttribute(this.$el);
          this.registerObserver(observeIntersection(target, (entries, observer) => {
            this.load();
            observer.disconnect();
          }, {
            rootMargin: toPx(this.offsetTop, "height") + "px " + toPx(this.offsetLeft, "width") + "px"
          }));
        },
        disconnected() {
          if (this._data.image) {
            this._data.image.onload = "";
          }
        },
        methods: {
          load() {
            if (this._data.image) {
              return this._data.image;
            }
            const image = isImg(this.$el) ? this.$el : getImageFromElement(this.$el, this.dataSrc, this.sources);
            removeAttr(image, "loading");
            setSrcAttrs(this.$el, image.currentSrc);
            return this._data.image = image;
          }
        }
      };
      function setSrcAttrs(el, src) {
        if (isImg(el)) {
          const parentNode = parent(el);
          const elements = isPicture(parentNode) ? children(parentNode) : [el];
          elements.forEach((el2) => setSourceProps(el2, el2));
        } else if (src) {
          const change = !includes(el.style.backgroundImage, src);
          if (change) {
            css2(el, "backgroundImage", "url(" + escape2(src) + ")");
            trigger(el, createEvent("load", false));
          }
        }
      }
      const srcProps = ["data-src", "data-srcset", "sizes"];
      function setSourceProps(sourceEl, targetEl) {
        srcProps.forEach((prop) => {
          const value = data(sourceEl, prop);
          if (value) {
            attr(targetEl, prop.replace(/^(data-)+/, ""), value);
          }
        });
      }
      function getImageFromElement(el, src, sources) {
        const img2 = new Image();
        wrapInPicture(img2, sources);
        setSourceProps(el, img2);
        img2.onload = () => {
          setSrcAttrs(el, img2.currentSrc);
        };
        attr(img2, "src", src);
        return img2;
      }
      function wrapInPicture(img2, sources) {
        sources = parseSources(sources);
        if (sources.length) {
          const picture = fragment("<picture>");
          for (const attrs of sources) {
            const source = fragment("<source>");
            attr(source, attrs);
            append(picture, source);
          }
          append(picture, img2);
        }
      }
      function parseSources(sources) {
        if (!sources) {
          return [];
        }
        if (startsWith(sources, "[")) {
          try {
            sources = JSON.parse(sources);
          } catch (e) {
            sources = [];
          }
        } else {
          sources = parseOptions(sources);
        }
        if (!isArray(sources)) {
          sources = [sources];
        }
        return sources.filter((source) => !isEmpty(source));
      }
      function ensureSrcAttribute(el) {
        if (isImg(el) && !hasAttr(el, "src")) {
          attr(el, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>');
        }
      }
      function isPicture(el) {
        return isTag(el, "picture");
      }
      function isImg(el) {
        return isTag(el, "img");
      }
      var Media = {
        props: {
          media: Boolean
        },
        data: {
          media: false
        },
        connected() {
          const media = toMedia(this.media, this.$el);
          this.matchMedia = true;
          if (media) {
            this.mediaObj = window.matchMedia(media);
            const handler2 = () => {
              this.matchMedia = this.mediaObj.matches;
              trigger(this.$el, createEvent("mediachange", false, true, [this.mediaObj]));
            };
            this.offMediaObj = on(this.mediaObj, "change", () => {
              handler2();
              this.$emit("resize");
            });
            handler2();
          }
        },
        disconnected() {
          var _this$offMediaObj;
          (_this$offMediaObj = this.offMediaObj) == null ? void 0 : _this$offMediaObj.call(this);
        }
      };
      function toMedia(value, element) {
        if (isString(value)) {
          if (startsWith(value, "@")) {
            value = toFloat(css2(element, "--uk-breakpoint-" + value.substr(1)));
          } else if (isNaN(value)) {
            return value;
          }
        }
        return value && isNumeric(value) ? "(min-width: " + value + "px)" : "";
      }
      var leader = {
        mixins: [Class, Media, Resize],
        props: {
          fill: String
        },
        data: {
          fill: "",
          clsWrapper: "uk-leader-fill",
          clsHide: "uk-leader-hide",
          attrFill: "data-fill"
        },
        computed: {
          fill(_ref) {
            let { fill } = _ref;
            return fill || css2(this.$el, "--uk-leader-fill-content");
          }
        },
        connected() {
          [this.wrapper] = wrapInner(this.$el, '<span class="' + this.clsWrapper + '">');
        },
        disconnected() {
          unwrap(this.wrapper.childNodes);
        },
        update: {
          read() {
            const width2 = Math.trunc(this.$el.offsetWidth / 2);
            return {
              width: width2,
              fill: this.fill,
              hide: !this.matchMedia
            };
          },
          write(_ref2) {
            let { width: width2, fill, hide: hide2 } = _ref2;
            toggleClass(this.wrapper, this.clsHide, hide2);
            attr(this.wrapper, this.attrFill, new Array(width2).join(fill));
          },
          events: ["resize"]
        }
      };
      var modal = {
        install: install$2,
        mixins: [Modal],
        data: {
          clsPage: "uk-modal-page",
          selPanel: ".uk-modal-dialog",
          selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
        },
        events: [
          {
            name: "show",
            self: true,
            handler() {
              if (hasClass(this.panel, "uk-margin-auto-vertical")) {
                addClass(this.$el, "uk-flex");
              } else {
                css2(this.$el, "display", "block");
              }
              height(this.$el);
            }
          },
          {
            name: "hidden",
            self: true,
            handler() {
              css2(this.$el, "display", "");
              removeClass(this.$el, "uk-flex");
            }
          }
        ]
      };
      function install$2(_ref) {
        let { modal: modal2 } = _ref;
        modal2.dialog = function(content, options) {
          const dialog = modal2('<div class="uk-modal"> <div class="uk-modal-dialog">' + content + "</div> </div>", options);
          dialog.show();
          on(dialog.$el, "hidden", async () => {
            await Promise.resolve();
            dialog.$destroy(true);
          }, { self: true });
          return dialog;
        };
        modal2.alert = function(message, options) {
          return openDialog((_ref2) => {
            let { labels } = _ref2;
            return '<div class="uk-modal-body">' + (isString(message) ? message : html(message)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + labels.ok + "</button> </div>";
          }, options, (deferred) => deferred.resolve());
        };
        modal2.confirm = function(message, options) {
          return openDialog((_ref3) => {
            let { labels } = _ref3;
            return '<form> <div class="uk-modal-body">' + (isString(message) ? message : html(message)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + labels.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + labels.ok + "</button> </div> </form>";
          }, options, (deferred) => deferred.reject());
        };
        modal2.prompt = function(message, value, options) {
          return openDialog((_ref4) => {
            let { labels } = _ref4;
            return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (isString(message) ? message : html(message)) + '</label> <input class="uk-input" value="' + (value || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + labels.cancel + '</button> <button class="uk-button uk-button-primary">' + labels.ok + "</button> </div> </form>";
          }, options, (deferred) => deferred.resolve(null), (dialog) => $("input", dialog.$el).value);
        };
        modal2.labels = {
          ok: "Ok",
          cancel: "Cancel"
        };
        function openDialog(tmpl, options, hideFn, submitFn) {
          options = { bgClose: false, escClose: true, labels: modal2.labels, ...options };
          const dialog = modal2.dialog(tmpl(options), options);
          const deferred = new Deferred();
          let resolved = false;
          on(dialog.$el, "submit", "form", (e) => {
            e.preventDefault();
            deferred.resolve(submitFn == null ? void 0 : submitFn(dialog));
            resolved = true;
            dialog.hide();
          });
          on(dialog.$el, "hide", () => !resolved && hideFn(deferred));
          deferred.promise.dialog = dialog;
          return deferred.promise;
        }
      }
      var nav = {
        extends: Accordion,
        data: {
          targets: "> .uk-parent",
          toggle: "> a",
          content: "> ul"
        }
      };
      var navbar = {
        mixins: [Class, Container],
        props: {
          dropdown: String,
          align: String,
          clsDrop: String,
          boundary: Boolean,
          dropbar: Boolean,
          dropbarAnchor: Boolean,
          duration: Number,
          mode: Boolean,
          offset: Boolean,
          stretch: Boolean,
          delayShow: Boolean,
          delayHide: Boolean,
          target: Boolean,
          targetX: Boolean,
          targetY: Boolean,
          animation: Boolean,
          animateOut: Boolean
        },
        data: {
          dropdown: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
          align: isRtl ? "right" : "left",
          clsDrop: "uk-navbar-dropdown",
          boundary: true,
          dropbar: false,
          dropbarAnchor: false,
          duration: 200,
          container: false
        },
        computed: {
          dropbarAnchor(_ref, $el) {
            let { dropbarAnchor } = _ref;
            return query(dropbarAnchor, $el) || $el;
          },
          dropbar: {
            get(_ref2) {
              let { dropbar } = _ref2;
              if (!dropbar) {
                return null;
              }
              dropbar = this._dropbar || query(dropbar, this.$el) || $("+ .uk-navbar-dropbar", this.$el);
              return dropbar ? dropbar : this._dropbar = $("<div></div>");
            },
            watch(dropbar) {
              addClass(dropbar, "uk-dropbar", "uk-dropbar-top", "uk-navbar-dropbar");
            },
            immediate: true
          },
          dropContainer(_, $el) {
            return this.container || $el;
          },
          dropdowns: {
            get(_ref3, $el) {
              let { clsDrop } = _ref3;
              const dropdowns = $$("." + clsDrop, $el);
              if (this.dropContainer !== $el) {
                for (const el of $$("." + clsDrop, this.dropContainer)) {
                  var _this$getDropdown;
                  const target = (_this$getDropdown = this.getDropdown(el)) == null ? void 0 : _this$getDropdown.targetEl;
                  if (!includes(dropdowns, el) && target && within(target, this.$el)) {
                    dropdowns.push(el);
                  }
                }
              }
              return dropdowns;
            },
            watch(dropdowns) {
              this.$create("drop", dropdowns.filter((el) => !this.getDropdown(el)), {
                ...this.$props,
                flip: false,
                shift: true,
                pos: "bottom-" + this.align,
                boundary: this.boundary === true ? this.$el : this.boundary
              });
            },
            immediate: true
          },
          toggles: {
            get(_ref4, $el) {
              let { dropdown } = _ref4;
              return $$(dropdown, $el);
            },
            watch() {
              const justify = hasClass(this.$el, "uk-navbar-justify");
              for (const container of $$(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el)) {
                css2(container, "flexGrow", justify ? $$(this.dropdown, container).length : "");
              }
            },
            immediate: true
          }
        },
        disconnected() {
          this.dropbar && remove$1(this.dropbar);
          delete this._dropbar;
        },
        events: [
          {
            name: "mouseover focusin",
            delegate() {
              return this.dropdown;
            },
            handler(_ref5) {
              let { current } = _ref5;
              const active2 = this.getActive();
              if (active2 && includes(active2.mode, "hover") && active2.targetEl && !within(active2.targetEl, current) && !active2.isDelaying) {
                active2.hide(false);
              }
            }
          },
          {
            name: "keydown",
            delegate() {
              return this.dropdown;
            },
            handler(e) {
              const { current, keyCode } = e;
              const active2 = this.getActive();
              if (keyCode === keyMap.DOWN && hasAttr(current, "aria-expanded")) {
                e.preventDefault();
                if (!active2 || active2.targetEl !== current) {
                  current.click();
                  once(this.dropContainer, "show", (_ref6) => {
                    let { target } = _ref6;
                    return focusFirstFocusableElement(target);
                  });
                } else {
                  focusFirstFocusableElement(active2.$el);
                }
              }
              handleNavItemNavigation(e, this.toggles, active2);
            }
          },
          {
            name: "keydown",
            el() {
              return this.dropContainer;
            },
            delegate() {
              return "." + this.clsDrop;
            },
            handler(e) {
              const { current, keyCode } = e;
              if (!includes(this.dropdowns, current)) {
                return;
              }
              const active2 = this.getActive();
              const elements = $$(selFocusable, current);
              const i = findIndex(elements, (el) => matches(el, ":focus"));
              if (keyCode === keyMap.UP) {
                e.preventDefault();
                if (i > 0) {
                  elements[i - 1].focus();
                }
              }
              if (keyCode === keyMap.DOWN) {
                e.preventDefault();
                if (i < elements.length - 1) {
                  elements[i + 1].focus();
                }
              }
              if (keyCode === keyMap.ESC) {
                var _active$targetEl;
                active2 == null ? void 0 : (_active$targetEl = active2.targetEl) == null ? void 0 : _active$targetEl.focus();
              }
              handleNavItemNavigation(e, this.toggles, active2);
            }
          },
          {
            name: "mouseleave",
            el() {
              return this.dropbar;
            },
            filter() {
              return this.dropbar;
            },
            handler() {
              const active2 = this.getActive();
              if (active2 && includes(active2.mode, "hover") && !this.dropdowns.some((el) => matches(el, ":hover"))) {
                active2.hide();
              }
            }
          },
          {
            name: "beforeshow",
            el() {
              return this.dropContainer;
            },
            filter() {
              return this.dropbar;
            },
            handler(_ref7) {
              let { target } = _ref7;
              if (!this.isDropbarDrop(target)) {
                return;
              }
              if (this.dropbar.previousElementSibling !== this.dropbarAnchor) {
                after(this.dropbarAnchor, this.dropbar);
              }
              addClass(target, this.clsDrop + "-dropbar");
            }
          },
          {
            name: "show",
            el() {
              return this.dropContainer;
            },
            filter() {
              return this.dropbar;
            },
            handler(_ref8) {
              let { target } = _ref8;
              if (!this.isDropbarDrop(target)) {
                return;
              }
              const drop2 = this.getDropdown(target);
              this._observer = observeResize([drop2.$el, ...drop2.target], () => {
                const targetOffsets = parents(target, "." + this.clsDrop).concat(target).map((el) => offset(el));
                const minTop = Math.min(...targetOffsets.map((_ref9) => {
                  let { top } = _ref9;
                  return top;
                }));
                const maxBottom = Math.max(...targetOffsets.map((_ref10) => {
                  let { bottom } = _ref10;
                  return bottom;
                }));
                const dropbarOffset = offset(this.dropbar);
                css2(this.dropbar, "top", this.dropbar.offsetTop - (dropbarOffset.top - minTop));
                this.transitionTo(maxBottom - minTop + toFloat(css2(target, "marginBottom")), target);
              });
            }
          },
          {
            name: "beforehide",
            el() {
              return this.dropContainer;
            },
            filter() {
              return this.dropbar;
            },
            handler(e) {
              const active2 = this.getActive();
              if (matches(this.dropbar, ":hover") && (active2 == null ? void 0 : active2.$el) === e.target && !this.toggles.some((el) => active2.targetEl !== el && matches(el, ":focus"))) {
                e.preventDefault();
              }
            }
          },
          {
            name: "hide",
            el() {
              return this.dropContainer;
            },
            filter() {
              return this.dropbar;
            },
            handler(_ref11) {
              var _this$_observer;
              let { target } = _ref11;
              if (!this.isDropbarDrop(target)) {
                return;
              }
              (_this$_observer = this._observer) == null ? void 0 : _this$_observer.disconnect();
              const active2 = this.getActive();
              if (!active2 || (active2 == null ? void 0 : active2.$el) === target) {
                this.transitionTo(0);
              }
            }
          }
        ],
        methods: {
          getActive() {
            return includes(this.dropdowns, active == null ? void 0 : active.$el) && active;
          },
          transitionTo(newHeight, el) {
            const { dropbar } = this;
            const oldHeight = height(dropbar);
            el = oldHeight < newHeight && el;
            css2(el, "clipPath", "polygon(0 0,100% 0,100% " + oldHeight + "px,0 " + oldHeight + "px)");
            height(dropbar, oldHeight);
            Transition.cancel([el, dropbar]);
            Promise.all([
              Transition.start(dropbar, { height: newHeight }, this.duration),
              Transition.start(el, {
                clipPath: "polygon(0 0,100% 0,100% " + newHeight + "px,0 " + newHeight + "px)"
              }, this.duration)
            ]).catch(noop3).then(() => css2(el, { clipPath: "" }));
          },
          getDropdown(el) {
            return this.$getComponent(el, "drop") || this.$getComponent(el, "dropdown");
          },
          isDropbarDrop(el) {
            return this.getDropdown(el) && hasClass(el, this.clsDrop);
          }
        }
      };
      function handleNavItemNavigation(e, toggles, active2) {
        const { current, keyCode } = e;
        const target = (active2 == null ? void 0 : active2.targetEl) || current;
        const i = toggles.indexOf(target);
        if (keyCode === keyMap.LEFT && i > 0) {
          active2 == null ? void 0 : active2.hide(false);
          toggles[i - 1].focus();
        }
        if (keyCode === keyMap.RIGHT && i < toggles.length - 1) {
          active2 == null ? void 0 : active2.hide(false);
          toggles[i + 1].focus();
        }
        if (keyCode === keyMap.TAB) {
          target.focus();
          active2 == null ? void 0 : active2.hide(false);
        }
      }
      function focusFirstFocusableElement(el) {
        if (!$(":focus", el)) {
          var _$;
          (_$ = $(selFocusable, el)) == null ? void 0 : _$.focus();
        }
      }
      const keyMap = {
        TAB: 9,
        ESC: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      };
      var Swipe = {
        props: {
          swiping: Boolean
        },
        data: {
          swiping: true
        },
        computed: {
          swipeTarget(props2, $el) {
            return $el;
          }
        },
        connected() {
          if (!this.swiping) {
            return;
          }
          registerEvent(this, {
            el: this.swipeTarget,
            name: pointerDown$1,
            passive: true,
            handler(e) {
              if (!isTouch(e)) {
                return;
              }
              const pos = getEventPos(e);
              const target = "tagName" in e.target ? e.target : parent(e.target);
              once(document, pointerUp$1 + " " + pointerCancel + " scroll", (e2) => {
                const { x, y } = getEventPos(e2);
                if (e2.type !== "scroll" && target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {
                  setTimeout(() => {
                    trigger(target, "swipe");
                    trigger(target, "swipe" + swipeDirection(pos.x, pos.y, x, y));
                  });
                }
              });
            }
          });
        }
      };
      function swipeDirection(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
      }
      var offcanvas = {
        mixins: [Modal, Swipe],
        args: "mode",
        props: {
          mode: String,
          flip: Boolean,
          overlay: Boolean
        },
        data: {
          mode: "slide",
          flip: false,
          overlay: false,
          clsPage: "uk-offcanvas-page",
          clsContainer: "uk-offcanvas-container",
          selPanel: ".uk-offcanvas-bar",
          clsFlip: "uk-offcanvas-flip",
          clsContainerAnimation: "uk-offcanvas-container-animation",
          clsSidebarAnimation: "uk-offcanvas-bar-animation",
          clsMode: "uk-offcanvas",
          clsOverlay: "uk-offcanvas-overlay",
          selClose: ".uk-offcanvas-close",
          container: false
        },
        computed: {
          clsFlip(_ref) {
            let { flip: flip2, clsFlip } = _ref;
            return flip2 ? clsFlip : "";
          },
          clsOverlay(_ref2) {
            let { overlay, clsOverlay } = _ref2;
            return overlay ? clsOverlay : "";
          },
          clsMode(_ref3) {
            let { mode, clsMode } = _ref3;
            return clsMode + "-" + mode;
          },
          clsSidebarAnimation(_ref4) {
            let { mode, clsSidebarAnimation } = _ref4;
            return mode === "none" || mode === "reveal" ? "" : clsSidebarAnimation;
          },
          clsContainerAnimation(_ref5) {
            let { mode, clsContainerAnimation } = _ref5;
            return mode !== "push" && mode !== "reveal" ? "" : clsContainerAnimation;
          },
          transitionElement(_ref6) {
            let { mode } = _ref6;
            return mode === "reveal" ? parent(this.panel) : this.panel;
          }
        },
        update: {
          read() {
            if (this.isToggled() && !isVisible(this.$el)) {
              this.hide();
            }
          },
          events: ["resize"]
        },
        events: [
          {
            name: "click",
            delegate() {
              return 'a[href^="#"]';
            },
            handler(_ref7) {
              let { current: { hash: hash2 }, defaultPrevented } = _ref7;
              if (!defaultPrevented && hash2 && $(hash2, document.body)) {
                this.hide();
              }
            }
          },
          {
            name: "touchmove",
            self: true,
            passive: false,
            filter() {
              return this.overlay;
            },
            handler(e) {
              e.cancelable && e.preventDefault();
            }
          },
          {
            name: "show",
            self: true,
            handler() {
              if (this.mode === "reveal" && !hasClass(parent(this.panel), this.clsMode)) {
                wrapAll(this.panel, "<div>");
                addClass(parent(this.panel), this.clsMode);
              }
              const { body, scrollingElement: scrollingElement2 } = document;
              addClass(body, this.clsContainer, this.clsFlip);
              css2(body, "touch-action", "pan-y pinch-zoom");
              css2(this.$el, "display", "block");
              css2(this.panel, "maxWidth", scrollingElement2.clientWidth);
              addClass(this.$el, this.clsOverlay);
              addClass(this.panel, this.clsSidebarAnimation, this.mode === "reveal" ? "" : this.clsMode);
              height(body);
              addClass(body, this.clsContainerAnimation);
              this.clsContainerAnimation && suppressUserScale();
            }
          },
          {
            name: "hide",
            self: true,
            handler() {
              removeClass(document.body, this.clsContainerAnimation);
              css2(document.body, "touch-action", "");
            }
          },
          {
            name: "hidden",
            self: true,
            handler() {
              this.clsContainerAnimation && resumeUserScale();
              if (this.mode === "reveal") {
                unwrap(this.panel);
              }
              removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
              removeClass(this.$el, this.clsOverlay);
              css2(this.$el, "display", "");
              css2(this.panel, "maxWidth", "");
              removeClass(document.body, this.clsContainer, this.clsFlip);
            }
          },
          {
            name: "swipeLeft swipeRight",
            handler(e) {
              if (this.isToggled() && endsWith(e.type, "Left") ^ this.flip) {
                this.hide();
              }
            }
          }
        ]
      };
      function suppressUserScale() {
        getViewport().content += ",user-scalable=0";
      }
      function resumeUserScale() {
        const viewport = getViewport();
        viewport.content = viewport.content.replace(/,user-scalable=0$/, "");
      }
      function getViewport() {
        return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
      }
      var overflowAuto = {
        mixins: [Class, Resize],
        props: {
          selContainer: String,
          selContent: String,
          minHeight: Number
        },
        data: {
          selContainer: ".uk-modal",
          selContent: ".uk-modal-dialog",
          minHeight: 150
        },
        computed: {
          container(_ref, $el) {
            let { selContainer } = _ref;
            return closest($el, selContainer);
          },
          content(_ref2, $el) {
            let { selContent } = _ref2;
            return closest($el, selContent);
          }
        },
        resizeTargets() {
          return [this.container, this.content];
        },
        update: {
          read() {
            if (!this.content || !this.container || !isVisible(this.$el)) {
              return false;
            }
            return {
              max: Math.max(this.minHeight, height(this.container) - (dimensions$1(this.content).height - height(this.$el)))
            };
          },
          write(_ref3) {
            let { max } = _ref3;
            css2(this.$el, { minHeight: this.minHeight, maxHeight: max });
          },
          events: ["resize"]
        }
      };
      var responsive = {
        mixins: [Resize],
        props: ["width", "height"],
        resizeTargets() {
          return [this.$el, parent(this.$el)];
        },
        connected() {
          addClass(this.$el, "uk-responsive-width");
        },
        update: {
          read() {
            return isVisible(this.$el) && this.width && this.height ? { width: width(parent(this.$el)), height: this.height } : false;
          },
          write(dim) {
            height(this.$el, Dimensions.contain({
              height: this.height,
              width: this.width
            }, dim).height);
          },
          events: ["resize"]
        }
      };
      var scroll = {
        props: {
          offset: Number
        },
        data: {
          offset: 0
        },
        connected() {
          registerClick(this);
        },
        disconnected() {
          unregisterClick(this);
        },
        methods: {
          async scrollTo(el) {
            el = el && $(el) || document.body;
            if (trigger(this.$el, "beforescroll", [this, el])) {
              await scrollIntoView(el, { offset: this.offset });
              trigger(this.$el, "scrolled", [this, el]);
            }
          }
        }
      };
      const components$2 = /* @__PURE__ */ new Set();
      function registerClick(cmp) {
        if (!components$2.size) {
          on(document, "click", clickHandler);
        }
        components$2.add(cmp);
      }
      function unregisterClick(cmp) {
        components$2.delete(cmp);
        if (!components$2.length) {
          off(document, "click", clickHandler);
        }
      }
      function clickHandler(e) {
        if (e.defaultPrevented) {
          return;
        }
        for (const component of components$2) {
          if (within(e.target, component.$el)) {
            e.preventDefault();
            component.scrollTo(getTargetElement(component.$el));
          }
        }
      }
      function getTargetElement(el) {
        return document.getElementById(decodeURIComponent(el.hash).substring(1));
      }
      var scrollspy = {
        mixins: [Scroll],
        args: "cls",
        props: {
          cls: String,
          target: String,
          hidden: Boolean,
          offsetTop: Number,
          offsetLeft: Number,
          repeat: Boolean,
          delay: Number
        },
        data: () => ({
          cls: "",
          target: false,
          hidden: true,
          offsetTop: 0,
          offsetLeft: 0,
          repeat: false,
          delay: 0,
          inViewClass: "uk-scrollspy-inview"
        }),
        computed: {
          elements: {
            get(_ref, $el) {
              let { target } = _ref;
              return target ? $$(target, $el) : [$el];
            },
            watch(elements, prev) {
              if (this.hidden) {
                css2(filter$1(elements, ":not(." + this.inViewClass + ")"), "visibility", "hidden");
              }
              if (!isEqual(elements, prev)) {
                this.$reset();
              }
            },
            immediate: true
          }
        },
        connected() {
          this._data.elements = /* @__PURE__ */ new Map();
          this.registerObserver(observeIntersection(this.elements, (records) => {
            const elements = this._data.elements;
            for (const { target: el, isIntersecting } of records) {
              if (!elements.has(el)) {
                elements.set(el, {
                  cls: data(el, "uk-scrollspy-class") || this.cls
                });
              }
              const state = elements.get(el);
              if (!this.repeat && state.show) {
                continue;
              }
              state.show = isIntersecting;
            }
            this.$emit();
          }, {
            rootMargin: toPx(this.offsetTop, "height") - 1 + "px " + (toPx(this.offsetLeft, "width") - 1) + "px"
          }, false));
        },
        disconnected() {
          for (const [el, state] of this._data.elements.entries()) {
            removeClass(el, this.inViewClass, (state == null ? void 0 : state.cls) || "");
          }
        },
        update: [
          {
            write(data2) {
              for (const [el, state] of data2.elements.entries()) {
                if (state.show && !state.inview && !state.queued) {
                  state.queued = true;
                  data2.promise = (data2.promise || Promise.resolve()).then(() => new Promise((resolve2) => setTimeout(resolve2, this.delay))).then(() => {
                    this.toggle(el, true);
                    setTimeout(() => {
                      state.queued = false;
                      this.$emit();
                    }, 300);
                  });
                } else if (!state.show && state.inview && !state.queued && this.repeat) {
                  this.toggle(el, false);
                }
              }
            }
          }
        ],
        methods: {
          toggle(el, inview) {
            const state = this._data.elements.get(el);
            if (!state) {
              return;
            }
            state.off == null ? void 0 : state.off();
            css2(el, "visibility", !inview && this.hidden ? "hidden" : "");
            toggleClass(el, this.inViewClass, inview);
            toggleClass(el, state.cls);
            if (/\buk-animation-/.test(state.cls)) {
              const removeAnimationClasses = () => removeClasses(el, "uk-animation-[\\w-]+");
              if (inview) {
                state.off = once(el, "animationcancel animationend", removeAnimationClasses);
              } else {
                removeAnimationClasses();
              }
            }
            trigger(el, inview ? "inview" : "outview");
            state.inview = inview;
            this.$update(el);
          }
        }
      };
      var scrollspyNav = {
        mixins: [Scroll],
        props: {
          cls: String,
          closest: String,
          scroll: Boolean,
          overflow: Boolean,
          offset: Number
        },
        data: {
          cls: "uk-active",
          closest: false,
          scroll: false,
          overflow: true,
          offset: 0
        },
        computed: {
          links: {
            get(_, $el) {
              return $$('a[href^="#"]', $el).filter((el) => el.hash);
            },
            watch(links) {
              if (this.scroll) {
                this.$create("scroll", links, { offset: this.offset || 0 });
              }
            },
            immediate: true
          },
          elements(_ref) {
            let { closest: selector } = _ref;
            return closest(this.links, selector || "*");
          }
        },
        update: [
          {
            read() {
              const targets = this.links.map(getTargetElement).filter(Boolean);
              const { length } = targets;
              if (!length || !isVisible(this.$el)) {
                return false;
              }
              const [scrollElement] = scrollParents(targets, /auto|scroll/, true);
              const { scrollTop, scrollHeight } = scrollElement;
              const viewport = offsetViewport(scrollElement);
              const max = scrollHeight - viewport.height;
              let active2 = false;
              if (scrollTop === max) {
                active2 = length - 1;
              } else {
                for (let i = 0; i < targets.length; i++) {
                  if (offset(targets[i]).top - viewport.top - this.offset > 0) {
                    break;
                  }
                  active2 = +i;
                }
                if (active2 === false && this.overflow) {
                  active2 = 0;
                }
              }
              return { active: active2 };
            },
            write(_ref2) {
              let { active: active2 } = _ref2;
              const changed = active2 !== false && !hasClass(this.elements[active2], this.cls);
              this.links.forEach((el) => el.blur());
              for (let i = 0; i < this.elements.length; i++) {
                toggleClass(this.elements[i], this.cls, +i === active2);
              }
              if (changed) {
                trigger(this.$el, "active", [active2, this.elements[active2]]);
              }
            },
            events: ["scroll", "resize"]
          }
        ]
      };
      var sticky = {
        mixins: [Class, Media, Resize, Scroll],
        props: {
          position: String,
          top: null,
          bottom: null,
          start: null,
          end: null,
          offset: String,
          overflowFlip: Boolean,
          animation: String,
          clsActive: String,
          clsInactive: String,
          clsFixed: String,
          clsBelow: String,
          selTarget: String,
          showOnUp: Boolean,
          targetOffset: Number
        },
        data: {
          position: "top",
          top: false,
          bottom: false,
          start: false,
          end: false,
          offset: 0,
          overflowFlip: false,
          animation: "",
          clsActive: "uk-active",
          clsInactive: "",
          clsFixed: "uk-sticky-fixed",
          clsBelow: "uk-sticky-below",
          selTarget: "",
          showOnUp: false,
          targetOffset: false
        },
        computed: {
          selTarget(_ref, $el) {
            let { selTarget } = _ref;
            return selTarget && $(selTarget, $el) || $el;
          }
        },
        resizeTargets() {
          return document.documentElement;
        },
        connected() {
          this.start = coerce(this.start || this.top);
          this.end = coerce(this.end || this.bottom);
          this.placeholder = $("+ .uk-sticky-placeholder", this.$el) || $('<div class="uk-sticky-placeholder"></div>');
          this.isFixed = false;
          this.setActive(false);
        },
        disconnected() {
          if (this.isFixed) {
            this.hide();
            removeClass(this.selTarget, this.clsInactive);
          }
          remove$1(this.placeholder);
          this.placeholder = null;
        },
        events: [
          {
            name: "resize",
            el() {
              return window;
            },
            handler() {
              this.$emit("resize");
            }
          },
          {
            name: "load hashchange popstate",
            el() {
              return window;
            },
            filter() {
              return this.targetOffset !== false;
            },
            handler() {
              const { scrollingElement: scrollingElement2 } = document;
              if (!location.hash || scrollingElement2.scrollTop === 0) {
                return;
              }
              setTimeout(() => {
                const targetOffset = offset($(location.hash));
                const elOffset = offset(this.$el);
                if (this.isFixed && intersectRect(targetOffset, elOffset)) {
                  scrollingElement2.scrollTop = targetOffset.top - elOffset.height - toPx(this.targetOffset, "height", this.placeholder) - toPx(this.offset, "height", this.placeholder);
                }
              });
            }
          }
        ],
        update: [
          {
            read(_ref2, types) {
              let { height: height$1, margin } = _ref2;
              this.inactive = !this.matchMedia || !isVisible(this.$el);
              if (this.inactive) {
                return false;
              }
              const hide2 = this.active && types.has("resize");
              if (hide2) {
                css2(this.selTarget, "transition", "0s");
                this.hide();
              }
              if (!this.active) {
                height$1 = offset(this.$el).height;
                margin = css2(this.$el, "margin");
              }
              if (hide2) {
                this.show();
                requestAnimationFrame(() => css2(this.selTarget, "transition", ""));
              }
              const referenceElement = this.isFixed ? this.placeholder : this.$el;
              const windowHeight = height(window);
              let position2 = this.position;
              if (this.overflowFlip && height$1 > windowHeight) {
                position2 = position2 === "top" ? "bottom" : "top";
              }
              let offset$1 = toPx(this.offset, "height", referenceElement);
              if (position2 === "bottom" && (height$1 < windowHeight || this.overflowFlip)) {
                offset$1 += windowHeight - height$1;
              }
              const overflow = this.overflowFlip ? 0 : Math.max(0, height$1 + offset$1 - windowHeight);
              const topOffset = offset(referenceElement).top;
              const start = (this.start === false ? topOffset : parseProp(this.start, this.$el, topOffset)) - offset$1;
              const end = this.end === false ? document.scrollingElement.scrollHeight - windowHeight : parseProp(this.end, this.$el, topOffset + height$1, true) - offset(this.$el).height + overflow - offset$1;
              return {
                start,
                end,
                offset: offset$1,
                overflow,
                topOffset,
                height: height$1,
                margin,
                width: dimensions$1(referenceElement).width,
                top: offsetPosition(referenceElement)[0]
              };
            },
            write(_ref3) {
              let { height: height2, margin } = _ref3;
              const { placeholder } = this;
              css2(placeholder, { height: height2, margin });
              if (!within(placeholder, document)) {
                after(this.$el, placeholder);
                placeholder.hidden = true;
              }
            },
            events: ["resize"]
          },
          {
            read(_ref4) {
              let { scroll: prevScroll = 0, dir: prevDir = "down", overflow, overflowScroll = 0, start, end } = _ref4;
              const scroll2 = document.scrollingElement.scrollTop;
              const dir = prevScroll <= scroll2 ? "down" : "up";
              return {
                dir,
                prevDir,
                scroll: scroll2,
                prevScroll,
                offsetParentTop: offset((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
                overflowScroll: clamp(overflowScroll + clamp(scroll2, start, end) - clamp(prevScroll, start, end), 0, overflow)
              };
            },
            write(data2, types) {
              const isScrollUpdate = types.has("scroll");
              const {
                initTimestamp = 0,
                dir,
                prevDir,
                scroll: scroll2,
                prevScroll = 0,
                top,
                start,
                topOffset,
                height: height2
              } = data2;
              if (scroll2 < 0 || scroll2 === prevScroll && isScrollUpdate || this.showOnUp && !isScrollUpdate && !this.isFixed) {
                return;
              }
              const now = Date.now();
              if (now - initTimestamp > 300 || dir !== prevDir) {
                data2.initScroll = scroll2;
                data2.initTimestamp = now;
              }
              if (this.showOnUp && !this.isFixed && Math.abs(data2.initScroll - scroll2) <= 30 && Math.abs(prevScroll - scroll2) <= 10) {
                return;
              }
              if (this.inactive || scroll2 < start || this.showOnUp && (scroll2 <= start || dir === "down" && isScrollUpdate || dir === "up" && !this.isFixed && scroll2 <= topOffset + height2)) {
                if (!this.isFixed) {
                  if (Animation.inProgress(this.$el) && top > scroll2) {
                    Animation.cancel(this.$el);
                    this.hide();
                  }
                  return;
                }
                this.isFixed = false;
                if (this.animation && scroll2 > topOffset) {
                  Animation.cancel(this.$el);
                  Animation.out(this.$el, this.animation).then(() => this.hide(), noop3);
                } else {
                  this.hide();
                }
              } else if (this.isFixed) {
                this.update();
              } else if (this.animation && scroll2 > topOffset) {
                Animation.cancel(this.$el);
                this.show();
                Animation.in(this.$el, this.animation).catch(noop3);
              } else {
                this.show();
              }
            },
            events: ["resize", "scroll"]
          }
        ],
        methods: {
          show() {
            this.isFixed = true;
            this.update();
            this.placeholder.hidden = false;
          },
          hide() {
            this.setActive(false);
            removeClass(this.$el, this.clsFixed, this.clsBelow);
            css2(this.$el, { position: "", top: "", width: "" });
            this.placeholder.hidden = true;
          },
          update() {
            let {
              width: width2,
              scroll: scroll2 = 0,
              overflow,
              overflowScroll = 0,
              start,
              end,
              offset: offset2,
              topOffset,
              height: height2,
              offsetParentTop
            } = this._data;
            const active2 = start !== 0 || scroll2 > start;
            let position2 = "fixed";
            if (scroll2 > end) {
              offset2 += end - offsetParentTop;
              position2 = "absolute";
            }
            if (overflow) {
              offset2 -= overflowScroll;
            }
            css2(this.$el, {
              position: position2,
              top: offset2 + "px",
              width: width2
            });
            this.setActive(active2);
            toggleClass(this.$el, this.clsBelow, scroll2 > topOffset + height2);
            addClass(this.$el, this.clsFixed);
          },
          setActive(active2) {
            const prev = this.active;
            this.active = active2;
            if (active2) {
              replaceClass(this.selTarget, this.clsInactive, this.clsActive);
              prev !== active2 && trigger(this.$el, "active");
            } else {
              replaceClass(this.selTarget, this.clsActive, this.clsInactive);
              prev !== active2 && trigger(this.$el, "inactive");
            }
          }
        }
      };
      function parseProp(value, el, propOffset, padding) {
        if (!value) {
          return 0;
        }
        if (isNumeric(value) || isString(value) && value.match(/^-?\d/)) {
          return propOffset + toPx(value, "height", el, true);
        } else {
          const refElement = value === true ? parent(el) : query(value, el);
          return offset(refElement).bottom - (padding && refElement && within(el, refElement) ? toFloat(css2(refElement, "paddingBottom")) : 0);
        }
      }
      function coerce(value) {
        if (value === "true") {
          return true;
        } else if (value === "false") {
          return false;
        }
        return value;
      }
      var Switcher = {
        mixins: [Lazyload, Swipe, Togglable],
        args: "connect",
        props: {
          connect: String,
          toggle: String,
          itemNav: String,
          active: Number
        },
        data: {
          connect: "~.uk-switcher",
          toggle: "> * > :first-child",
          itemNav: false,
          active: 0,
          cls: "uk-active",
          attrItem: "uk-switcher-item"
        },
        computed: {
          connects: {
            get(_ref, $el) {
              let { connect } = _ref;
              return queryAll(connect, $el);
            },
            watch(connects) {
              if (this.swiping) {
                css2(connects, "touchAction", "pan-y pinch-zoom");
              }
              const index5 = this.index();
              this.connects.forEach((el) => {
                children(el).forEach((child, i) => toggleClass(child, this.cls, i === index5));
                this.lazyload(this.$el, children(el));
              });
            },
            immediate: true
          },
          toggles: {
            get(_ref2, $el) {
              let { toggle: toggle2 } = _ref2;
              return $$(toggle2, $el).filter((el) => !matches(el, ".uk-disabled *, .uk-disabled, [disabled]"));
            },
            watch(toggles) {
              const active2 = this.index();
              this.show(~active2 ? active2 : toggles[this.active] || toggles[0]);
            },
            immediate: true
          },
          children() {
            return children(this.$el).filter((child) => this.toggles.some((toggle2) => within(toggle2, child)));
          },
          swipeTarget() {
            return this.connects;
          }
        },
        connected() {
          ready(() => this.$emit());
        },
        events: [
          {
            name: "click",
            delegate() {
              return this.toggle;
            },
            handler(e) {
              e.preventDefault();
              this.show(e.current);
            }
          },
          {
            name: "click",
            el() {
              return this.connects.concat(this.itemNav ? queryAll(this.itemNav, this.$el) : []);
            },
            delegate() {
              return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
            },
            handler(e) {
              e.preventDefault();
              this.show(data(e.current, this.attrItem));
            }
          },
          {
            name: "swipeRight swipeLeft",
            filter() {
              return this.swiping;
            },
            el() {
              return this.connects;
            },
            handler(_ref3) {
              let { type } = _ref3;
              this.show(endsWith(type, "Left") ? "next" : "previous");
            }
          }
        ],
        methods: {
          index() {
            return findIndex(this.children, (el) => hasClass(el, this.cls));
          },
          show(item) {
            const prev = this.index();
            const next = getIndex(item, this.toggles, prev);
            const active2 = getIndex(this.children[next], children(this.$el));
            children(this.$el).forEach((child, i) => {
              toggleClass(child, this.cls, active2 === i);
              attr(this.toggles[i], "aria-expanded", active2 === i);
            });
            const animate2 = prev >= 0 && prev !== next;
            this.connects.forEach(async (_ref4) => {
              let { children: children2 } = _ref4;
              await this.toggleElement(toNodes(children2).filter((child) => hasClass(child, this.cls)), false, animate2);
              await this.toggleElement(children2[active2], true, animate2);
            });
          }
        }
      };
      var tab = {
        mixins: [Class],
        extends: Switcher,
        props: {
          media: Boolean
        },
        data: {
          media: 960,
          attrItem: "uk-tab-item"
        },
        connected() {
          const cls = hasClass(this.$el, "uk-tab-left") ? "uk-tab-left" : hasClass(this.$el, "uk-tab-right") ? "uk-tab-right" : false;
          if (cls) {
            this.$create("toggle", this.$el, { cls, mode: "media", media: this.media });
          }
        }
      };
      const KEY_SPACE = 32;
      var toggle = {
        mixins: [Lazyload, Media, Togglable],
        args: "target",
        props: {
          href: String,
          target: null,
          mode: "list",
          queued: Boolean
        },
        data: {
          href: false,
          target: false,
          mode: "click",
          queued: true
        },
        computed: {
          target: {
            get(_ref, $el) {
              let { href, target } = _ref;
              target = queryAll(target || href, $el);
              return target.length && target || [$el];
            },
            watch() {
              this.updateAria();
              this.lazyload(this.$el, this.target);
            },
            immediate: true
          }
        },
        connected() {
          if (!includes(this.mode, "media") && !isFocusable(this.$el)) {
            attr(this.$el, "tabindex", "0");
          }
          ready(() => this.$emit());
        },
        events: [
          {
            name: pointerDown$1,
            filter() {
              return includes(this.mode, "hover");
            },
            handler(e) {
              this._preventClick = null;
              if (!isTouch(e) || this._showState) {
                return;
              }
              trigger(this.$el, "focus");
              once(document, pointerDown$1, () => trigger(this.$el, "blur"), true, (e2) => !within(e2.target, this.$el));
              if (includes(this.mode, "click")) {
                this._preventClick = true;
              }
            }
          },
          {
            name: pointerEnter + " " + pointerLeave + " focus blur",
            filter() {
              return includes(this.mode, "hover");
            },
            handler(e) {
              if (isTouch(e)) {
                return;
              }
              const show = includes([pointerEnter, "focus"], e.type);
              const expanded = attr(this.$el, "aria-expanded");
              if (!show && (e.type === pointerLeave && matches(this.$el, ":focus") || e.type === "blur" && matches(this.$el, ":hover"))) {
                return;
              }
              if (this._showState && show && expanded !== this._showState) {
                if (!show) {
                  this._showState = null;
                }
                return;
              }
              this._showState = show ? expanded : null;
              this.toggle("toggle" + (show ? "show" : "hide"));
            }
          },
          {
            name: "keydown",
            filter() {
              return includes(this.mode, "click") && !isTag(this.$el, "input");
            },
            handler(e) {
              if (e.keyCode === KEY_SPACE) {
                e.preventDefault();
                this.$el.click();
              }
            }
          },
          {
            name: "click",
            filter() {
              return ["click", "hover"].some((mode) => includes(this.mode, mode));
            },
            handler(e) {
              let link;
              if (this._preventClick || closest(e.target, 'a[href="#"], a[href=""]') || (link = closest(e.target, "a[href]")) && (attr(this.$el, "aria-expanded") !== "true" || link.hash && matches(this.target, link.hash))) {
                e.preventDefault();
              }
              if (!this._preventClick && includes(this.mode, "click")) {
                this.toggle();
              }
            }
          },
          {
            name: "hide show",
            self: true,
            el() {
              return this.target;
            },
            handler(_ref2) {
              let { type } = _ref2;
              this.updateAria(type === "show");
            }
          },
          {
            name: "mediachange",
            filter() {
              return includes(this.mode, "media");
            },
            el() {
              return this.target;
            },
            handler(e, mediaObj) {
              if (mediaObj.matches ^ this.isToggled(this.target)) {
                this.toggle();
              }
            }
          }
        ],
        methods: {
          async toggle(type) {
            if (!trigger(this.target, type || "toggle", [this])) {
              return;
            }
            if (!this.queued) {
              return this.toggleElement(this.target);
            }
            const leaving = this.target.filter((el) => hasClass(el, this.clsLeave));
            if (leaving.length) {
              for (const el of this.target) {
                const isLeaving = includes(leaving, el);
                this.toggleElement(el, isLeaving, isLeaving);
              }
              return;
            }
            const toggled = this.target.filter(this.isToggled);
            await this.toggleElement(toggled, false);
            await this.toggleElement(this.target.filter((el) => !includes(toggled, el)), true);
          },
          updateAria(toggled) {
            if (includes(this.mode, "media")) {
              return;
            }
            attr(this.$el, "aria-expanded", isBoolean(toggled) ? toggled : this.isToggled(this.target));
          }
        }
      };
      var components$1 = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        Accordion,
        Alert: alert,
        Cover: cover,
        Drop: drop,
        Dropdown: drop,
        FormCustom: formCustom,
        Grid: grid,
        HeightMatch: heightMatch,
        HeightViewport: heightViewport,
        Icon,
        Img: img,
        Leader: leader,
        Margin,
        Modal: modal,
        Nav: nav,
        Navbar: navbar,
        Offcanvas: offcanvas,
        OverflowAuto: overflowAuto,
        Responsive: responsive,
        Scroll: scroll,
        Scrollspy: scrollspy,
        ScrollspyNav: scrollspyNav,
        Sticky: sticky,
        Svg: SVG,
        Switcher,
        Tab: tab,
        Toggle: toggle,
        Video,
        Close,
        Spinner,
        NavParentIcon,
        SlidenavNext: Slidenav,
        SlidenavPrevious: Slidenav,
        SearchIcon: Search,
        Marker: IconComponent,
        NavbarParentIcon: IconComponent,
        NavbarToggleIcon: IconComponent,
        OverlayIcon: IconComponent,
        PaginationNext: IconComponent,
        PaginationPrevious: IconComponent,
        Totop: IconComponent
      });
      each2(components$1, (component, name) => UIkit.component(name, component));
      boot(UIkit);
      const units = ["days", "hours", "minutes", "seconds"];
      var countdown = {
        mixins: [Class],
        props: {
          date: String,
          clsWrapper: String
        },
        data: {
          date: "",
          clsWrapper: ".uk-countdown-%unit%"
        },
        connected() {
          this.date = Date.parse(this.$props.date);
          this.start();
        },
        disconnected() {
          this.stop();
        },
        events: [
          {
            name: "visibilitychange",
            el() {
              return document;
            },
            handler() {
              if (document.hidden) {
                this.stop();
              } else {
                this.start();
              }
            }
          }
        ],
        methods: {
          start() {
            this.stop();
            this.update();
            this.timer = setInterval(this.update, 1e3);
          },
          stop() {
            clearInterval(this.timer);
          },
          update() {
            const timespan = getTimeSpan(this.date);
            if (!this.date || timespan.total <= 0) {
              this.stop();
              timespan.days = timespan.hours = timespan.minutes = timespan.seconds = 0;
            }
            for (const unit of units) {
              const el = $(this.clsWrapper.replace("%unit%", unit), this.$el);
              if (!el) {
                continue;
              }
              let digits = String(Math.trunc(timespan[unit]));
              digits = digits.length < 2 ? "0" + digits : digits;
              if (el.textContent !== digits) {
                digits = digits.split("");
                if (digits.length !== el.children.length) {
                  html(el, digits.map(() => "<span></span>").join(""));
                }
                digits.forEach((digit, i) => el.children[i].textContent = digit);
              }
            }
          }
        }
      };
      function getTimeSpan(date) {
        const total = date - Date.now();
        return {
          total,
          seconds: total / 1e3 % 60,
          minutes: total / 1e3 / 60 % 60,
          hours: total / 1e3 / 60 / 60 % 24,
          days: total / 1e3 / 60 / 60 / 24
        };
      }
      const clsLeave = "uk-transition-leave";
      const clsEnter = "uk-transition-enter";
      function fade(action, target, duration, stagger) {
        if (stagger === void 0) {
          stagger = 0;
        }
        const index5 = transitionIndex(target, true);
        const propsIn = { opacity: 1 };
        const propsOut = { opacity: 0 };
        const wrapIndexFn = (fn) => () => index5 === transitionIndex(target) ? fn() : Promise.reject();
        const leaveFn = wrapIndexFn(() => {
          addClass(target, clsLeave);
          return Promise.all(getTransitionNodes(target).map((child, i) => new Promise((resolve2) => setTimeout(() => Transition.start(child, propsOut, duration / 2, "ease").then(resolve2), i * stagger)))).then(() => removeClass(target, clsLeave));
        });
        const enterFn = wrapIndexFn(() => {
          const oldHeight = height(target);
          addClass(target, clsEnter);
          action();
          css2(children(target), { opacity: 0 });
          return new Promise((resolve2) => requestAnimationFrame(() => {
            const nodes = children(target);
            const newHeight = height(target);
            css2(target, "alignContent", "flex-start");
            height(target, oldHeight);
            const transitionNodes = getTransitionNodes(target);
            css2(nodes, propsOut);
            const transitions = transitionNodes.map((child, i) => new Promise((resolve3) => setTimeout(() => Transition.start(child, propsIn, duration / 2, "ease").then(resolve3), i * stagger)));
            if (oldHeight !== newHeight) {
              transitions.push(Transition.start(target, { height: newHeight }, duration / 2 + transitionNodes.length * stagger, "ease"));
            }
            Promise.all(transitions).then(() => {
              removeClass(target, clsEnter);
              if (index5 === transitionIndex(target)) {
                css2(target, { height: "", alignContent: "" });
                css2(nodes, { opacity: "" });
                delete target.dataset.transition;
              }
              resolve2();
            });
          }));
        });
        return hasClass(target, clsLeave) ? waitTransitionend(target).then(enterFn) : hasClass(target, clsEnter) ? waitTransitionend(target).then(leaveFn).then(enterFn) : leaveFn().then(enterFn);
      }
      function transitionIndex(target, next) {
        if (next) {
          target.dataset.transition = 1 + transitionIndex(target);
        }
        return toNumber(target.dataset.transition) || 0;
      }
      function waitTransitionend(target) {
        return Promise.all(children(target).filter(Transition.inProgress).map((el) => new Promise((resolve2) => once(el, "transitionend transitioncanceled", resolve2))));
      }
      function getTransitionNodes(target) {
        return getRows(children(target)).reduce((nodes, row) => nodes.concat(sortBy$1(row.filter((el) => isInView(el)), "offsetLeft")), []);
      }
      function slide(action, target, duration) {
        return new Promise((resolve2) => requestAnimationFrame(() => {
          let nodes = children(target);
          const currentProps = nodes.map((el) => getProps(el, true));
          const targetProps = css2(target, ["height", "padding"]);
          Transition.cancel(target);
          nodes.forEach(Transition.cancel);
          reset(target);
          action();
          nodes = nodes.concat(children(target).filter((el) => !includes(nodes, el)));
          Promise.resolve().then(() => {
            fastdom.flush();
            const targetPropsTo = css2(target, ["height", "padding"]);
            const [propsTo, propsFrom] = getTransitionProps(target, nodes, currentProps);
            nodes.forEach((el, i) => propsFrom[i] && css2(el, propsFrom[i]));
            css2(target, { display: "block", ...targetProps });
            requestAnimationFrame(() => {
              const transitions = nodes.map((el, i) => parent(el) === target && Transition.start(el, propsTo[i], duration, "ease")).concat(Transition.start(target, targetPropsTo, duration, "ease"));
              Promise.all(transitions).then(() => {
                nodes.forEach((el, i) => parent(el) === target && css2(el, "display", propsTo[i].opacity === 0 ? "none" : ""));
                reset(target);
              }, noop3).then(resolve2);
            });
          });
        }));
      }
      function getProps(el, opacity) {
        const zIndex = css2(el, "zIndex");
        return isVisible(el) ? {
          display: "",
          opacity: opacity ? css2(el, "opacity") : "0",
          pointerEvents: "none",
          position: "absolute",
          zIndex: zIndex === "auto" ? index4(el) : zIndex,
          ...getPositionWithMargin(el)
        } : false;
      }
      function getTransitionProps(target, nodes, currentProps) {
        const propsTo = nodes.map((el, i) => parent(el) && i in currentProps ? currentProps[i] ? isVisible(el) ? getPositionWithMargin(el) : { opacity: 0 } : { opacity: isVisible(el) ? 1 : 0 } : false);
        const propsFrom = propsTo.map((props2, i) => {
          const from = parent(nodes[i]) === target && (currentProps[i] || getProps(nodes[i]));
          if (!from) {
            return false;
          }
          if (!props2) {
            delete from.opacity;
          } else if (!("opacity" in props2)) {
            const { opacity } = from;
            if (opacity % 1) {
              props2.opacity = 1;
            } else {
              delete from.opacity;
            }
          }
          return from;
        });
        return [propsTo, propsFrom];
      }
      function reset(el) {
        css2(el.children, {
          height: "",
          left: "",
          opacity: "",
          pointerEvents: "",
          position: "",
          top: "",
          marginTop: "",
          marginLeft: "",
          transform: "",
          width: "",
          zIndex: ""
        });
        css2(el, { height: "", display: "", padding: "" });
      }
      function getPositionWithMargin(el) {
        const { height: height2, width: width2 } = offset(el);
        const { top, left } = position(el);
        const { marginLeft, marginTop } = css2(el, ["marginTop", "marginLeft"]);
        return { top, left, height: height2, width: width2, marginLeft, marginTop, transform: "" };
      }
      var Animate = {
        props: {
          duration: Number,
          animation: Boolean
        },
        data: {
          duration: 150,
          animation: "slide"
        },
        methods: {
          animate(action, target) {
            if (target === void 0) {
              target = this.$el;
            }
            const name = this.animation;
            const animationFn = name === "fade" ? fade : name === "delayed-fade" ? function() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return fade(...args, 40);
            } : name ? slide : () => {
              action();
              return Promise.resolve();
            };
            return animationFn(action, target, this.duration).then(() => this.$update(target, "resize"), noop3);
          }
        }
      };
      var filter = {
        mixins: [Animate],
        args: "target",
        props: {
          target: Boolean,
          selActive: Boolean
        },
        data: {
          target: null,
          selActive: false,
          attrItem: "uk-filter-control",
          cls: "uk-active",
          duration: 250
        },
        computed: {
          toggles: {
            get(_ref, $el) {
              let { attrItem } = _ref;
              return $$("[" + attrItem + "],[data-" + attrItem + "]", $el);
            },
            watch() {
              this.updateState();
              if (this.selActive !== false) {
                const actives = $$(this.selActive, this.$el);
                this.toggles.forEach((el) => toggleClass(el, this.cls, includes(actives, el)));
              }
            },
            immediate: true
          },
          children: {
            get(_ref2, $el) {
              let { target } = _ref2;
              return $$(target + " > *", $el);
            },
            watch(list, old) {
              if (old && !isEqualList(list, old)) {
                this.updateState();
              }
            },
            immediate: true
          }
        },
        events: [
          {
            name: "click",
            delegate() {
              return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
            },
            handler(e) {
              e.preventDefault();
              this.apply(e.current);
            }
          }
        ],
        methods: {
          apply(el) {
            const prevState = this.getState();
            const newState = mergeState(el, this.attrItem, this.getState());
            if (!isEqualState(prevState, newState)) {
              this.setState(newState);
            }
          },
          getState() {
            return this.toggles.filter((item) => hasClass(item, this.cls)).reduce((state, el) => mergeState(el, this.attrItem, state), {
              filter: { "": "" },
              sort: []
            });
          },
          async setState(state, animate2) {
            if (animate2 === void 0) {
              animate2 = true;
            }
            state = { filter: { "": "" }, sort: [], ...state };
            trigger(this.$el, "beforeFilter", [this, state]);
            this.toggles.forEach((el) => toggleClass(el, this.cls, !!matchFilter(el, this.attrItem, state)));
            await Promise.all($$(this.target, this.$el).map((target) => {
              const filterFn2 = () => {
                applyState(state, target, children(target));
                this.$update(this.$el);
              };
              return animate2 ? this.animate(filterFn2, target) : filterFn2();
            }));
            trigger(this.$el, "afterFilter", [this]);
          },
          updateState() {
            fastdom.write(() => this.setState(this.getState(), false));
          }
        }
      };
      function getFilter(el, attr2) {
        return parseOptions(data(el, attr2), ["filter"]);
      }
      function isEqualState(stateA, stateB) {
        return ["filter", "sort"].every((prop) => isEqual(stateA[prop], stateB[prop]));
      }
      function applyState(state, target, children2) {
        const selector = getSelector(state);
        children2.forEach((el) => css2(el, "display", selector && !matches(el, selector) ? "none" : ""));
        const [sort, order] = state.sort;
        if (sort) {
          const sorted = sortItems(children2, sort, order);
          if (!isEqual(sorted, children2)) {
            append(target, sorted);
          }
        }
      }
      function mergeState(el, attr2, state) {
        const filterBy = getFilter(el, attr2);
        const { filter: filter2, group, sort, order = "asc" } = filterBy;
        if (filter2 || isUndefined(sort)) {
          if (group) {
            if (filter2) {
              delete state.filter[""];
              state.filter[group] = filter2;
            } else {
              delete state.filter[group];
              if (isEmpty(state.filter) || "" in state.filter) {
                state.filter = { "": filter2 || "" };
              }
            }
          } else {
            state.filter = { "": filter2 || "" };
          }
        }
        if (!isUndefined(sort)) {
          state.sort = [sort, order];
        }
        return state;
      }
      function matchFilter(el, attr2, _ref3) {
        let { filter: stateFilter = { "": "" }, sort: [stateSort, stateOrder] } = _ref3;
        const { filter: filter2 = "", group = "", sort, order = "asc" } = getFilter(el, attr2);
        return isUndefined(sort) ? group in stateFilter && filter2 === stateFilter[group] || !filter2 && group && !(group in stateFilter) && !stateFilter[""] : stateSort === sort && stateOrder === order;
      }
      function isEqualList(listA, listB) {
        return listA.length === listB.length && listA.every((el) => listB.includes(el));
      }
      function getSelector(_ref4) {
        let { filter: filter2 } = _ref4;
        let selector = "";
        each2(filter2, (value) => selector += value || "");
        return selector;
      }
      function sortItems(nodes, sort, order) {
        return [...nodes].sort((a, b) => data(a, sort).localeCompare(data(b, sort), void 0, { numeric: true }) * (order === "asc" || -1));
      }
      var Animations$2 = {
        slide: {
          show(dir) {
            return [{ transform: translate(dir * -100) }, { transform: translate() }];
          },
          percent(current) {
            return translated(current);
          },
          translate(percent2, dir) {
            return [
              { transform: translate(dir * -100 * percent2) },
              { transform: translate(dir * 100 * (1 - percent2)) }
            ];
          }
        }
      };
      function translated(el) {
        return Math.abs(css2(el, "transform").split(",")[4] / el.offsetWidth) || 0;
      }
      function translate(value, unit) {
        if (value === void 0) {
          value = 0;
        }
        if (unit === void 0) {
          unit = "%";
        }
        value += value ? unit : "";
        return "translate3d(" + value + ", 0, 0)";
      }
      function scale3d(value) {
        return "scale3d(" + value + ", " + value + ", 1)";
      }
      var Animations$1 = {
        ...Animations$2,
        fade: {
          show() {
            return [{ opacity: 0 }, { opacity: 1 }];
          },
          percent(current) {
            return 1 - css2(current, "opacity");
          },
          translate(percent2) {
            return [{ opacity: 1 - percent2 }, { opacity: percent2 }];
          }
        },
        scale: {
          show() {
            return [
              { opacity: 0, transform: scale3d(1 - 0.2) },
              { opacity: 1, transform: scale3d(1) }
            ];
          },
          percent(current) {
            return 1 - css2(current, "opacity");
          },
          translate(percent2) {
            return [
              { opacity: 1 - percent2, transform: scale3d(1 - 0.2 * percent2) },
              { opacity: percent2, transform: scale3d(1 - 0.2 + 0.2 * percent2) }
            ];
          }
        }
      };
      function Transitioner$1(prev, next, dir, _ref) {
        let { animation, easing } = _ref;
        const { percent: percent2, translate: translate2, show = noop3 } = animation;
        const props2 = show(dir);
        const deferred = new Deferred();
        return {
          dir,
          show(duration, percent3, linear) {
            if (percent3 === void 0) {
              percent3 = 0;
            }
            const timing = linear ? "linear" : easing;
            duration -= Math.round(duration * clamp(percent3, -1, 1));
            this.translate(percent3);
            triggerUpdate$1(next, "itemin", { percent: percent3, duration, timing, dir });
            triggerUpdate$1(prev, "itemout", { percent: 1 - percent3, duration, timing, dir });
            Promise.all([
              Transition.start(next, props2[1], duration, timing),
              Transition.start(prev, props2[0], duration, timing)
            ]).then(() => {
              this.reset();
              deferred.resolve();
            }, noop3);
            return deferred.promise;
          },
          cancel() {
            Transition.cancel([next, prev]);
          },
          reset() {
            for (const prop in props2[0]) {
              css2([next, prev], prop, "");
            }
          },
          forward(duration, percent3) {
            if (percent3 === void 0) {
              percent3 = this.percent();
            }
            Transition.cancel([next, prev]);
            return this.show(duration, percent3, true);
          },
          translate(percent3) {
            this.reset();
            const props3 = translate2(percent3, dir);
            css2(next, props3[1]);
            css2(prev, props3[0]);
            triggerUpdate$1(next, "itemtranslatein", { percent: percent3, dir });
            triggerUpdate$1(prev, "itemtranslateout", { percent: 1 - percent3, dir });
          },
          percent() {
            return percent2(prev || next, next, dir);
          },
          getDistance() {
            return prev == null ? void 0 : prev.offsetWidth;
          }
        };
      }
      function triggerUpdate$1(el, type, data2) {
        trigger(el, createEvent(type, false, false, data2));
      }
      var SliderAutoplay = {
        props: {
          autoplay: Boolean,
          autoplayInterval: Number,
          pauseOnHover: Boolean
        },
        data: {
          autoplay: false,
          autoplayInterval: 7e3,
          pauseOnHover: true
        },
        connected() {
          this.autoplay && this.startAutoplay();
        },
        disconnected() {
          this.stopAutoplay();
        },
        update() {
          attr(this.slides, "tabindex", "-1");
        },
        events: [
          {
            name: "visibilitychange",
            el() {
              return document;
            },
            filter() {
              return this.autoplay;
            },
            handler() {
              if (document.hidden) {
                this.stopAutoplay();
              } else {
                this.startAutoplay();
              }
            }
          }
        ],
        methods: {
          startAutoplay() {
            this.stopAutoplay();
            this.interval = setInterval(() => (!this.draggable || !$(":focus", this.$el)) && (!this.pauseOnHover || !matches(this.$el, ":hover")) && !this.stack.length && this.show("next"), this.autoplayInterval);
          },
          stopAutoplay() {
            this.interval && clearInterval(this.interval);
          }
        }
      };
      const pointerOptions = { passive: false, capture: true };
      const pointerDown = "touchstart mousedown";
      const pointerMove = "touchmove mousemove";
      const pointerUp = "touchend touchcancel mouseup click input";
      var SliderDrag = {
        props: {
          draggable: Boolean
        },
        data: {
          draggable: true,
          threshold: 10
        },
        created() {
          for (const key2 of ["start", "move", "end"]) {
            const fn = this[key2];
            this[key2] = (e) => {
              const pos = getEventPos(e).x * (isRtl ? -1 : 1);
              this.prevPos = pos === this.pos ? this.prevPos : this.pos;
              this.pos = pos;
              fn(e);
            };
          }
        },
        events: [
          {
            name: pointerDown,
            delegate() {
              return this.selSlides;
            },
            handler(e) {
              if (!this.draggable || !isTouch(e) && hasTextNodesOnly(e.target) || closest(e.target, selInput) || e.button > 0 || this.length < 2) {
                return;
              }
              this.start(e);
            }
          },
          {
            name: "dragstart",
            handler(e) {
              e.preventDefault();
            }
          },
          {
            name: pointerMove + " " + pointerUp,
            el() {
              return this.list;
            },
            handler: noop3,
            ...pointerOptions
          }
        ],
        methods: {
          start() {
            this.drag = this.pos;
            if (this._transitioner) {
              this.percent = this._transitioner.percent();
              this.drag += this._transitioner.getDistance() * this.percent * this.dir;
              this._transitioner.cancel();
              this._transitioner.translate(this.percent);
              this.dragging = true;
              this.stack = [];
            } else {
              this.prevIndex = this.index;
            }
            on(document, pointerMove, this.move, pointerOptions);
            on(document, pointerUp, this.end, pointerOptions);
            css2(this.list, "userSelect", "none");
          },
          move(e) {
            const distance = this.pos - this.drag;
            if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
              return;
            }
            css2(this.list, "pointerEvents", "none");
            e.cancelable && e.preventDefault();
            this.dragging = true;
            this.dir = distance < 0 ? 1 : -1;
            const { slides } = this;
            let { prevIndex } = this;
            let dis = Math.abs(distance);
            let nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
            let width2 = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
            while (nextIndex !== prevIndex && dis > width2) {
              this.drag -= width2 * this.dir;
              prevIndex = nextIndex;
              dis -= width2;
              nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
              width2 = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
            }
            this.percent = dis / width2;
            const prev = slides[prevIndex];
            const next = slides[nextIndex];
            const changed = this.index !== nextIndex;
            const edge = prevIndex === nextIndex;
            let itemShown;
            [this.index, this.prevIndex].filter((i) => !includes([nextIndex, prevIndex], i)).forEach((i) => {
              trigger(slides[i], "itemhidden", [this]);
              if (edge) {
                itemShown = true;
                this.prevIndex = prevIndex;
              }
            });
            if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
              trigger(slides[this.index], "itemshown", [this]);
            }
            if (changed) {
              this.prevIndex = prevIndex;
              this.index = nextIndex;
              !edge && trigger(prev, "beforeitemhide", [this]);
              trigger(next, "beforeitemshow", [this]);
            }
            this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);
            if (changed) {
              !edge && trigger(prev, "itemhide", [this]);
              trigger(next, "itemshow", [this]);
            }
          },
          end() {
            off(document, pointerMove, this.move, pointerOptions);
            off(document, pointerUp, this.end, pointerOptions);
            if (this.dragging) {
              this.dragging = null;
              if (this.index === this.prevIndex) {
                this.percent = 1 - this.percent;
                this.dir *= -1;
                this._show(false, this.index, true);
                this._transitioner = null;
              } else {
                const dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                this.index = dirChange ? this.index : this.prevIndex;
                if (dirChange) {
                  this.percent = 1 - this.percent;
                }
                this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? "next" : "previous", true);
              }
            }
            css2(this.list, { userSelect: "", pointerEvents: "" });
            this.drag = this.percent = null;
          }
        }
      };
      function hasTextNodesOnly(el) {
        return !el.children.length && el.childNodes.length;
      }
      var SliderNav = {
        data: {
          selNav: false
        },
        computed: {
          nav(_ref, $el) {
            let { selNav } = _ref;
            return $(selNav, $el);
          },
          selNavItem(_ref2) {
            let { attrItem } = _ref2;
            return "[" + attrItem + "],[data-" + attrItem + "]";
          },
          navItems(_, $el) {
            return $$(this.selNavItem, $el);
          }
        },
        update: {
          write() {
            if (this.nav && this.length !== this.nav.children.length) {
              html(this.nav, this.slides.map((_, i) => "<li " + this.attrItem + '="' + i + '"><a href></a></li>').join(""));
            }
            this.navItems.concat(this.nav).forEach((el) => el && (el.hidden = !this.maxIndex));
            this.updateNav();
          },
          events: ["resize"]
        },
        events: [
          {
            name: "click",
            delegate() {
              return this.selNavItem;
            },
            handler(e) {
              e.preventDefault();
              this.show(data(e.current, this.attrItem));
            }
          },
          {
            name: "itemshow",
            handler: "updateNav"
          }
        ],
        methods: {
          updateNav() {
            const i = this.getValidIndex();
            for (const el of this.navItems) {
              const cmd = data(el, this.attrItem);
              toggleClass(el, this.clsActive, toNumber(cmd) === i);
              toggleClass(el, "uk-invisible", this.finite && (cmd === "previous" && i === 0 || cmd === "next" && i >= this.maxIndex));
            }
          }
        }
      };
      var Slider = {
        mixins: [SliderAutoplay, SliderDrag, SliderNav, Resize],
        props: {
          clsActivated: Boolean,
          easing: String,
          index: Number,
          finite: Boolean,
          velocity: Number,
          selSlides: String
        },
        data: () => ({
          easing: "ease",
          finite: false,
          velocity: 1,
          index: 0,
          prevIndex: -1,
          stack: [],
          percent: 0,
          clsActive: "uk-active",
          clsActivated: false,
          Transitioner: false,
          transitionOptions: {}
        }),
        connected() {
          this.prevIndex = -1;
          this.index = this.getValidIndex(this.$props.index);
          this.stack = [];
        },
        disconnected() {
          removeClass(this.slides, this.clsActive);
        },
        computed: {
          duration(_ref, $el) {
            let { velocity } = _ref;
            return speedUp($el.offsetWidth / velocity);
          },
          list(_ref2, $el) {
            let { selList } = _ref2;
            return $(selList, $el);
          },
          maxIndex() {
            return this.length - 1;
          },
          selSlides(_ref3) {
            let { selList, selSlides } = _ref3;
            return selList + " " + (selSlides || "> *");
          },
          slides: {
            get() {
              return $$(this.selSlides, this.$el);
            },
            watch() {
              this.$reset();
            }
          },
          length() {
            return this.slides.length;
          }
        },
        methods: {
          show(index5, force) {
            if (force === void 0) {
              force = false;
            }
            if (this.dragging || !this.length) {
              return;
            }
            const { stack } = this;
            const queueIndex = force ? 0 : stack.length;
            const reset2 = () => {
              stack.splice(queueIndex, 1);
              if (stack.length) {
                this.show(stack.shift(), true);
              }
            };
            stack[force ? "unshift" : "push"](index5);
            if (!force && stack.length > 1) {
              if (stack.length === 2) {
                this._transitioner.forward(Math.min(this.duration, 200));
              }
              return;
            }
            const prevIndex = this.getIndex(this.index);
            const prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
            const nextIndex = this.getIndex(index5, this.index);
            const next = this.slides[nextIndex];
            if (prev === next) {
              reset2();
              return;
            }
            this.dir = getDirection(index5, prevIndex);
            this.prevIndex = prevIndex;
            this.index = nextIndex;
            if (prev && !trigger(prev, "beforeitemhide", [this]) || !trigger(next, "beforeitemshow", [this, prev])) {
              this.index = this.prevIndex;
              reset2();
              return;
            }
            const promise = this._show(prev, next, force).then(() => {
              prev && trigger(prev, "itemhidden", [this]);
              trigger(next, "itemshown", [this]);
              return new Promise((resolve2) => {
                fastdom.write(() => {
                  stack.shift();
                  if (stack.length) {
                    this.show(stack.shift(), true);
                  } else {
                    this._transitioner = null;
                  }
                  resolve2();
                });
              });
            });
            prev && trigger(prev, "itemhide", [this]);
            trigger(next, "itemshow", [this]);
            return promise;
          },
          getIndex(index5, prev) {
            if (index5 === void 0) {
              index5 = this.index;
            }
            if (prev === void 0) {
              prev = this.index;
            }
            return clamp(getIndex(index5, this.slides, prev, this.finite), 0, this.maxIndex);
          },
          getValidIndex(index5, prevIndex) {
            if (index5 === void 0) {
              index5 = this.index;
            }
            if (prevIndex === void 0) {
              prevIndex = this.prevIndex;
            }
            return this.getIndex(index5, prevIndex);
          },
          _show(prev, next, force) {
            this._transitioner = this._getTransitioner(prev, next, this.dir, {
              easing: force ? next.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
              ...this.transitionOptions
            });
            if (!force && !prev) {
              this._translate(1);
              return Promise.resolve();
            }
            const { length } = this.stack;
            return this._transitioner[length > 1 ? "forward" : "show"](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);
          },
          _getDistance(prev, next) {
            return this._getTransitioner(prev, prev !== next && next).getDistance();
          },
          _translate(percent2, prev, next) {
            if (prev === void 0) {
              prev = this.prevIndex;
            }
            if (next === void 0) {
              next = this.index;
            }
            const transitioner = this._getTransitioner(prev !== next ? prev : false, next);
            transitioner.translate(percent2);
            return transitioner;
          },
          _getTransitioner(prev, next, dir, options) {
            if (prev === void 0) {
              prev = this.prevIndex;
            }
            if (next === void 0) {
              next = this.index;
            }
            if (dir === void 0) {
              dir = this.dir || 1;
            }
            if (options === void 0) {
              options = this.transitionOptions;
            }
            return new this.Transitioner(isNumber(prev) ? this.slides[prev] : prev, isNumber(next) ? this.slides[next] : next, dir * (isRtl ? -1 : 1), options);
          }
        }
      };
      function getDirection(index5, prevIndex) {
        return index5 === "next" ? 1 : index5 === "previous" ? -1 : index5 < prevIndex ? -1 : 1;
      }
      function speedUp(x) {
        return 0.5 * x + 300;
      }
      var Slideshow = {
        mixins: [Slider],
        props: {
          animation: String
        },
        data: {
          animation: "slide",
          clsActivated: "uk-transition-active",
          Animations: Animations$2,
          Transitioner: Transitioner$1
        },
        computed: {
          animation(_ref) {
            let { animation, Animations: Animations2 } = _ref;
            return { ...Animations2[animation] || Animations2.slide, name: animation };
          },
          transitionOptions() {
            return { animation: this.animation };
          }
        },
        events: {
          beforeitemshow(_ref2) {
            let { target } = _ref2;
            addClass(target, this.clsActive);
          },
          itemshown(_ref3) {
            let { target } = _ref3;
            addClass(target, this.clsActivated);
          },
          itemhidden(_ref4) {
            let { target } = _ref4;
            removeClass(target, this.clsActive, this.clsActivated);
          }
        }
      };
      var LightboxPanel = {
        mixins: [Container, Modal, Togglable, Slideshow],
        functional: true,
        props: {
          delayControls: Number,
          preload: Number,
          videoAutoplay: Boolean,
          template: String
        },
        data: () => ({
          preload: 1,
          videoAutoplay: false,
          delayControls: 3e3,
          items: [],
          cls: "uk-open",
          clsPage: "uk-lightbox-page",
          selList: ".uk-lightbox-items",
          attrItem: "uk-lightbox-item",
          selClose: ".uk-close-large",
          selCaption: ".uk-lightbox-caption",
          pauseOnHover: false,
          velocity: 2,
          Animations: Animations$1,
          template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
        }),
        created() {
          const $el = $(this.template);
          const list = $(this.selList, $el);
          this.items.forEach(() => append(list, "<li>"));
          this.$mount(append(this.container, $el));
        },
        computed: {
          caption(_ref, $el) {
            let { selCaption } = _ref;
            return $(selCaption, $el);
          }
        },
        events: [
          {
            name: pointerMove$1 + " " + pointerDown$1 + " keydown",
            handler: "showControls"
          },
          {
            name: "click",
            self: true,
            delegate() {
              return this.selSlides;
            },
            handler(e) {
              if (e.defaultPrevented) {
                return;
              }
              this.hide();
            }
          },
          {
            name: "shown",
            self: true,
            handler() {
              this.showControls();
            }
          },
          {
            name: "hide",
            self: true,
            handler() {
              this.hideControls();
              removeClass(this.slides, this.clsActive);
              Transition.stop(this.slides);
            }
          },
          {
            name: "hidden",
            self: true,
            handler() {
              this.$destroy(true);
            }
          },
          {
            name: "keyup",
            el() {
              return document;
            },
            handler(e) {
              if (!this.isToggled(this.$el) || !this.draggable) {
                return;
              }
              switch (e.keyCode) {
                case 37:
                  this.show("previous");
                  break;
                case 39:
                  this.show("next");
                  break;
              }
            }
          },
          {
            name: "beforeitemshow",
            handler(e) {
              if (this.isToggled()) {
                return;
              }
              this.draggable = false;
              e.preventDefault();
              this.toggleElement(this.$el, true, false);
              this.animation = Animations$1["scale"];
              removeClass(e.target, this.clsActive);
              this.stack.splice(1, 0, this.index);
            }
          },
          {
            name: "itemshow",
            handler() {
              html(this.caption, this.getItem().caption || "");
              for (let j = -this.preload; j <= this.preload; j++) {
                this.loadItem(this.index + j);
              }
            }
          },
          {
            name: "itemshown",
            handler() {
              this.draggable = this.$props.draggable;
            }
          },
          {
            name: "itemload",
            async handler(_, item) {
              const { source: src, type, alt = "", poster, attrs = {} } = item;
              this.setItem(item, "<span uk-spinner></span>");
              if (!src) {
                return;
              }
              let matches2;
              const iframeAttrs = {
                frameborder: "0",
                allowfullscreen: "",
                style: "max-width: 100%; box-sizing: border-box;",
                "uk-responsive": "",
                "uk-video": "" + this.videoAutoplay
              };
              if (type === "image" || src.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) {
                try {
                  const { width: width2, height: height2 } = await getImage(src, attrs.srcset, attrs.size);
                  this.setItem(item, createEl("img", { src, width: width2, height: height2, alt, ...attrs }));
                } catch (e) {
                  this.setError(item);
                }
              } else if (type === "video" || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                const video = createEl("video", {
                  src,
                  poster,
                  controls: "",
                  playsinline: "",
                  "uk-video": "" + this.videoAutoplay,
                  ...attrs
                });
                on(video, "loadedmetadata", () => {
                  attr(video, { width: video.videoWidth, height: video.videoHeight });
                  this.setItem(item, video);
                });
                on(video, "error", () => this.setError(item));
              } else if (type === "iframe" || src.match(/\.(html|php)($|\?)/i)) {
                this.setItem(item, createEl("iframe", {
                  src,
                  frameborder: "0",
                  allowfullscreen: "",
                  class: "uk-lightbox-iframe",
                  ...attrs
                }));
              } else if (matches2 = src.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) {
                this.setItem(item, createEl("iframe", {
                  src: "https://www.youtube" + (matches2[1] || "") + ".com/embed/" + matches2[2] + (matches2[3] ? "?" + matches2[3] : ""),
                  width: 1920,
                  height: 1080,
                  ...iframeAttrs,
                  ...attrs
                }));
              } else if (matches2 = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
                try {
                  const { height: height2, width: width2 } = await (await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(src), {
                    credentials: "omit"
                  })).json();
                  this.setItem(item, createEl("iframe", {
                    src: "https://player.vimeo.com/video/" + matches2[1] + (matches2[2] ? "?" + matches2[2] : ""),
                    width: width2,
                    height: height2,
                    ...iframeAttrs,
                    ...attrs
                  }));
                } catch (e) {
                  this.setError(item);
                }
              }
            }
          }
        ],
        methods: {
          loadItem(index5) {
            if (index5 === void 0) {
              index5 = this.index;
            }
            const item = this.getItem(index5);
            if (!this.getSlide(item).childElementCount) {
              trigger(this.$el, "itemload", [item]);
            }
          },
          getItem(index5) {
            if (index5 === void 0) {
              index5 = this.index;
            }
            return this.items[getIndex(index5, this.slides)];
          },
          setItem(item, content) {
            trigger(this.$el, "itemloaded", [this, html(this.getSlide(item), content)]);
          },
          getSlide(item) {
            return this.slides[this.items.indexOf(item)];
          },
          setError(item) {
            this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
          },
          showControls() {
            clearTimeout(this.controlsTimer);
            this.controlsTimer = setTimeout(this.hideControls, this.delayControls);
            addClass(this.$el, "uk-active", "uk-transition-active");
          },
          hideControls() {
            removeClass(this.$el, "uk-active", "uk-transition-active");
          }
        }
      };
      function createEl(tag, attrs) {
        const el = fragment("<" + tag + ">");
        attr(el, attrs);
        return el;
      }
      var lightbox = {
        install: install$1,
        props: { toggle: String },
        data: { toggle: "a" },
        computed: {
          toggles: {
            get(_ref, $el) {
              let { toggle: toggle2 } = _ref;
              return $$(toggle2, $el);
            },
            watch() {
              this.hide();
            }
          }
        },
        disconnected() {
          this.hide();
        },
        events: [
          {
            name: "click",
            delegate() {
              return this.toggle + ":not(.uk-disabled)";
            },
            handler(e) {
              e.preventDefault();
              this.show(e.current);
            }
          }
        ],
        methods: {
          show(index5) {
            const items = uniqueBy(this.toggles.map(toItem), "source");
            if (isElement(index5)) {
              const { source } = toItem(index5);
              index5 = findIndex(items, (_ref2) => {
                let { source: src } = _ref2;
                return source === src;
              });
            }
            this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props, items });
            on(this.panel.$el, "hidden", () => this.panel = false);
            return this.panel.show(index5);
          },
          hide() {
            var _this$panel;
            return (_this$panel = this.panel) == null ? void 0 : _this$panel.hide();
          }
        }
      };
      function install$1(UIkit2, Lightbox) {
        if (!UIkit2.lightboxPanel) {
          UIkit2.component("lightboxPanel", LightboxPanel);
        }
        assign(Lightbox.props, UIkit2.component("lightboxPanel").options.props);
      }
      function toItem(el) {
        const item = {};
        for (const attr2 of ["href", "caption", "type", "poster", "alt", "attrs"]) {
          item[attr2 === "href" ? "source" : attr2] = data(el, attr2);
        }
        item.attrs = parseOptions(item.attrs);
        return item;
      }
      var notification = {
        mixins: [Container],
        functional: true,
        args: ["message", "status"],
        data: {
          message: "",
          status: "",
          timeout: 5e3,
          group: null,
          pos: "top-center",
          clsContainer: "uk-notification",
          clsClose: "uk-notification-close",
          clsMsg: "uk-notification-message"
        },
        install,
        computed: {
          marginProp(_ref) {
            let { pos } = _ref;
            return "margin" + (startsWith(pos, "top") ? "Top" : "Bottom");
          },
          startProps() {
            return { opacity: 0, [this.marginProp]: -this.$el.offsetHeight };
          }
        },
        created() {
          const container = $("." + this.clsContainer + "-" + this.pos, this.container) || append(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
          this.$mount(append(container, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '" role="alert"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"));
        },
        async connected() {
          const margin = toFloat(css2(this.$el, this.marginProp));
          await Transition.start(css2(this.$el, this.startProps), {
            opacity: 1,
            [this.marginProp]: margin
          });
          if (this.timeout) {
            this.timer = setTimeout(this.close, this.timeout);
          }
        },
        events: {
          click(e) {
            if (closest(e.target, 'a[href="#"],a[href=""]')) {
              e.preventDefault();
            }
            this.close();
          },
          [pointerEnter]() {
            if (this.timer) {
              clearTimeout(this.timer);
            }
          },
          [pointerLeave]() {
            if (this.timeout) {
              this.timer = setTimeout(this.close, this.timeout);
            }
          }
        },
        methods: {
          async close(immediate) {
            const removeFn = (el) => {
              const container = parent(el);
              trigger(el, "close", [this]);
              remove$1(el);
              if (!(container != null && container.hasChildNodes())) {
                remove$1(container);
              }
            };
            if (this.timer) {
              clearTimeout(this.timer);
            }
            if (!immediate) {
              await Transition.start(this.$el, this.startProps);
            }
            removeFn(this.$el);
          }
        }
      };
      function install(UIkit2) {
        UIkit2.notification.closeAll = function(group, immediate) {
          apply(document.body, (el) => {
            const notification2 = UIkit2.getComponent(el, "notification");
            if (notification2 && (!group || group === notification2.group)) {
              notification2.close(immediate);
            }
          });
        };
      }
      const props = {
        x: transformFn,
        y: transformFn,
        rotate: transformFn,
        scale: transformFn,
        color: colorFn,
        backgroundColor: colorFn,
        borderColor: colorFn,
        blur: filterFn,
        hue: filterFn,
        fopacity: filterFn,
        grayscale: filterFn,
        invert: filterFn,
        saturate: filterFn,
        sepia: filterFn,
        opacity: cssPropFn,
        stroke: strokeFn,
        bgx: backgroundFn,
        bgy: backgroundFn
      };
      const { keys } = Object;
      var Parallax = {
        mixins: [Media],
        props: fillObject(keys(props), "list"),
        data: fillObject(keys(props), void 0),
        computed: {
          props(properties, $el) {
            const stops = {};
            for (const prop in properties) {
              if (prop in props && !isUndefined(properties[prop])) {
                stops[prop] = properties[prop].slice();
              }
            }
            const result = {};
            for (const prop in stops) {
              result[prop] = props[prop](prop, $el, stops[prop], stops);
            }
            return result;
          }
        },
        events: {
          load() {
            this.$emit();
          }
        },
        methods: {
          reset() {
            for (const prop in this.getCss(0)) {
              css2(this.$el, prop, "");
            }
          },
          getCss(percent2) {
            const css3 = { transform: "", filter: "" };
            for (const prop in this.props) {
              this.props[prop](css3, percent2);
            }
            return css3;
          }
        }
      };
      function transformFn(prop, el, stops) {
        let unit = getUnit(stops) || { x: "px", y: "px", rotate: "deg" }[prop] || "";
        let transformFn2;
        if (prop === "x" || prop === "y") {
          prop = "translate" + ucfirst(prop);
          transformFn2 = (stop2) => toFloat(toFloat(stop2).toFixed(unit === "px" ? 0 : 6));
        } else if (prop === "scale") {
          unit = "";
          transformFn2 = (stop2) => getUnit([stop2]) ? toPx(stop2, "width", el, true) / el.offsetWidth : stop2;
        }
        if (stops.length === 1) {
          stops.unshift(prop === "scale" ? 1 : 0);
        }
        stops = parseStops(stops, transformFn2);
        return (css3, percent2) => {
          css3.transform += " " + prop + "(" + getValue(stops, percent2) + unit + ")";
        };
      }
      function colorFn(prop, el, stops) {
        if (stops.length === 1) {
          stops.unshift(getCssValue(el, prop, ""));
        }
        stops = parseStops(stops, (stop2) => parseColor(el, stop2));
        return (css3, percent2) => {
          const [start, end, p] = getStop(stops, percent2);
          const value = start.map((value2, i) => {
            value2 += p * (end[i] - value2);
            return i === 3 ? toFloat(value2) : parseInt(value2, 10);
          }).join(",");
          css3[prop] = "rgba(" + value + ")";
        };
      }
      function parseColor(el, color) {
        return getCssValue(el, "color", color).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(toFloat);
      }
      function filterFn(prop, el, stops) {
        if (stops.length === 1) {
          stops.unshift(0);
        }
        const unit = getUnit(stops) || { blur: "px", hue: "deg" }[prop] || "%";
        prop = { fopacity: "opacity", hue: "hue-rotate" }[prop] || prop;
        stops = parseStops(stops);
        return (css3, percent2) => {
          const value = getValue(stops, percent2);
          css3.filter += " " + prop + "(" + (value + unit) + ")";
        };
      }
      function cssPropFn(prop, el, stops) {
        if (stops.length === 1) {
          stops.unshift(getCssValue(el, prop, ""));
        }
        stops = parseStops(stops);
        return (css3, percent2) => {
          css3[prop] = getValue(stops, percent2);
        };
      }
      function strokeFn(prop, el, stops) {
        if (stops.length === 1) {
          stops.unshift(0);
        }
        const unit = getUnit(stops);
        const length = getMaxPathLength(el);
        stops = parseStops(stops.reverse(), (stop2) => {
          stop2 = toFloat(stop2);
          return unit === "%" ? stop2 * length / 100 : stop2;
        });
        if (!stops.some((_ref) => {
          let [value] = _ref;
          return value;
        })) {
          return noop3;
        }
        css2(el, "strokeDasharray", length);
        return (css3, percent2) => {
          css3.strokeDashoffset = getValue(stops, percent2);
        };
      }
      function backgroundFn(prop, el, stops, props2) {
        if (stops.length === 1) {
          stops.unshift(0);
        }
        const attr2 = prop === "bgy" ? "height" : "width";
        props2[prop] = parseStops(stops, (stop2) => toPx(stop2, attr2, el));
        const bgProps = ["bgx", "bgy"].filter((prop2) => prop2 in props2);
        if (bgProps.length === 2 && prop === "bgx") {
          return noop3;
        }
        if (getCssValue(el, "backgroundSize", "") === "cover") {
          return backgroundCoverFn(prop, el, stops, props2);
        }
        const positions = {};
        for (const prop2 of bgProps) {
          positions[prop2] = getBackgroundPos(el, prop2);
        }
        return setBackgroundPosFn(bgProps, positions, props2);
      }
      function backgroundCoverFn(prop, el, stops, props2) {
        const dimImage = getBackgroundImageDimensions(el);
        if (!dimImage.width) {
          return noop3;
        }
        const dimEl = {
          width: el.offsetWidth,
          height: el.offsetHeight
        };
        const bgProps = ["bgx", "bgy"].filter((prop2) => prop2 in props2);
        const positions = {};
        for (const prop2 of bgProps) {
          const values = props2[prop2].map((_ref2) => {
            let [value] = _ref2;
            return value;
          });
          const min = Math.min(...values);
          const max = Math.max(...values);
          const down = values.indexOf(min) < values.indexOf(max);
          const diff = max - min;
          positions[prop2] = (down ? -diff : 0) - (down ? min : max) + "px";
          dimEl[prop2 === "bgy" ? "height" : "width"] += diff;
        }
        const dim = Dimensions.cover(dimImage, dimEl);
        for (const prop2 of bgProps) {
          const attr2 = prop2 === "bgy" ? "height" : "width";
          const overflow = dim[attr2] - dimEl[attr2];
          positions[prop2] = "max(" + getBackgroundPos(el, prop2) + ",-" + overflow + "px) + " + positions[prop2];
        }
        const fn = setBackgroundPosFn(bgProps, positions, props2);
        return (css3, percent2) => {
          fn(css3, percent2);
          css3.backgroundSize = dim.width + "px " + dim.height + "px";
          css3.backgroundRepeat = "no-repeat";
        };
      }
      function getBackgroundPos(el, prop) {
        return getCssValue(el, "background-position-" + prop.substr(-1), "");
      }
      function setBackgroundPosFn(bgProps, positions, props2) {
        return function(css3, percent2) {
          for (const prop of bgProps) {
            const value = getValue(props2[prop], percent2);
            css3["background-position-" + prop.substr(-1)] = "calc(" + positions[prop] + " + " + value + "px)";
          }
        };
      }
      const dimensions = {};
      function getBackgroundImageDimensions(el) {
        const src = css2(el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
        if (dimensions[src]) {
          return dimensions[src];
        }
        const image = new Image();
        if (src) {
          image.src = src;
          if (!image.naturalWidth) {
            image.onload = () => {
              dimensions[src] = toDimensions(image);
              trigger(el, createEvent("load", false));
            };
            return toDimensions(image);
          }
        }
        return dimensions[src] = toDimensions(image);
      }
      function toDimensions(image) {
        return {
          width: image.naturalWidth,
          height: image.naturalHeight
        };
      }
      function parseStops(stops, fn) {
        if (fn === void 0) {
          fn = toFloat;
        }
        const result = [];
        const { length } = stops;
        let nullIndex = 0;
        for (let i = 0; i < length; i++) {
          let [value, percent2] = isString(stops[i]) ? stops[i].trim().split(" ") : [stops[i]];
          value = fn(value);
          percent2 = percent2 ? toFloat(percent2) / 100 : null;
          if (i === 0) {
            if (percent2 === null) {
              percent2 = 0;
            } else if (percent2) {
              result.push([value, 0]);
            }
          } else if (i === length - 1) {
            if (percent2 === null) {
              percent2 = 1;
            } else if (percent2 !== 1) {
              result.push([value, percent2]);
              percent2 = 1;
            }
          }
          result.push([value, percent2]);
          if (percent2 === null) {
            nullIndex++;
          } else if (nullIndex) {
            const leftPercent = result[i - nullIndex - 1][1];
            const p = (percent2 - leftPercent) / (nullIndex + 1);
            for (let j = nullIndex; j > 0; j--) {
              result[i - j][1] = leftPercent + p * (nullIndex - j + 1);
            }
            nullIndex = 0;
          }
        }
        return result;
      }
      function getStop(stops, percent2) {
        const index5 = findIndex(stops.slice(1), (_ref3) => {
          let [, targetPercent] = _ref3;
          return percent2 <= targetPercent;
        }) + 1;
        return [
          stops[index5 - 1][0],
          stops[index5][0],
          (percent2 - stops[index5 - 1][1]) / (stops[index5][1] - stops[index5 - 1][1])
        ];
      }
      function getValue(stops, percent2) {
        const [start, end, p] = getStop(stops, percent2);
        return isNumber(start) ? start + Math.abs(start - end) * p * (start < end ? 1 : -1) : +end;
      }
      const unitRe = /^-?\d+(\S*)/;
      function getUnit(stops, defaultUnit) {
        for (const stop2 of stops) {
          const match2 = stop2.match == null ? void 0 : stop2.match(unitRe);
          if (match2) {
            return match2[1];
          }
        }
        return defaultUnit;
      }
      function getCssValue(el, prop, value) {
        const prev = el.style[prop];
        const val = css2(css2(el, prop, value), prop);
        el.style[prop] = prev;
        return val;
      }
      function fillObject(keys2, value) {
        return keys2.reduce((data2, prop) => {
          data2[prop] = value;
          return data2;
        }, {});
      }
      var parallax = {
        mixins: [Parallax, Resize, Scroll],
        props: {
          target: String,
          viewport: Number,
          easing: Number,
          start: String,
          end: String
        },
        data: {
          target: false,
          viewport: 1,
          easing: 1,
          start: 0,
          end: 0
        },
        computed: {
          target(_ref, $el) {
            let { target } = _ref;
            return getOffsetElement(target && query(target, $el) || $el);
          },
          start(_ref2) {
            let { start } = _ref2;
            return toPx(start, "height", this.target, true);
          },
          end(_ref3) {
            let { end, viewport } = _ref3;
            return toPx(end || (viewport = (1 - viewport) * 100) && viewport + "vh+" + viewport + "%", "height", this.target, true);
          }
        },
        update: {
          read(_ref4, types) {
            let { percent: percent2 } = _ref4;
            if (!types.has("scroll")) {
              percent2 = false;
            }
            if (!this.matchMedia) {
              return;
            }
            const prev = percent2;
            percent2 = ease(scrolledOver(this.target, this.start, this.end), this.easing);
            return {
              percent: percent2,
              style: prev === percent2 ? false : this.getCss(percent2)
            };
          },
          write(_ref5) {
            let { style } = _ref5;
            if (!this.matchMedia) {
              this.reset();
              return;
            }
            style && css2(this.$el, style);
          },
          events: ["scroll", "resize"]
        }
      };
      function ease(percent2, easing) {
        return easing >= 0 ? Math.pow(percent2, easing + 1) : 1 - Math.pow(1 - percent2, 1 - easing);
      }
      function getOffsetElement(el) {
        return el ? "offsetTop" in el ? el : getOffsetElement(parent(el)) : document.documentElement;
      }
      var SliderReactive = {
        update: {
          write() {
            if (this.stack.length || this.dragging) {
              return;
            }
            const index5 = this.getValidIndex(this.index);
            if (!~this.prevIndex || this.index !== index5) {
              this.show(index5);
            }
          },
          events: ["resize"]
        }
      };
      var SliderPreload = {
        mixins: [Lazyload],
        connected() {
          this.lazyload(this.slides, this.getAdjacentSlides);
        }
      };
      function Transitioner(prev, next, dir, _ref) {
        let { center, easing, list } = _ref;
        const deferred = new Deferred();
        const from = prev ? getLeft(prev, list, center) : getLeft(next, list, center) + dimensions$1(next).width * dir;
        const to = next ? getLeft(next, list, center) : from + dimensions$1(prev).width * dir * (isRtl ? -1 : 1);
        return {
          dir,
          show(duration, percent2, linear) {
            if (percent2 === void 0) {
              percent2 = 0;
            }
            const timing = linear ? "linear" : easing;
            duration -= Math.round(duration * clamp(percent2, -1, 1));
            this.translate(percent2);
            percent2 = prev ? percent2 : clamp(percent2, 0, 1);
            triggerUpdate(this.getItemIn(), "itemin", { percent: percent2, duration, timing, dir });
            prev && triggerUpdate(this.getItemIn(true), "itemout", {
              percent: 1 - percent2,
              duration,
              timing,
              dir
            });
            Transition.start(list, { transform: translate(-to * (isRtl ? -1 : 1), "px") }, duration, timing).then(deferred.resolve, noop3);
            return deferred.promise;
          },
          cancel() {
            Transition.cancel(list);
          },
          reset() {
            css2(list, "transform", "");
          },
          forward(duration, percent2) {
            if (percent2 === void 0) {
              percent2 = this.percent();
            }
            Transition.cancel(list);
            return this.show(duration, percent2, true);
          },
          translate(percent2) {
            const distance = this.getDistance() * dir * (isRtl ? -1 : 1);
            css2(list, "transform", translate(clamp(-to + (distance - distance * percent2), -getWidth(list), dimensions$1(list).width) * (isRtl ? -1 : 1), "px"));
            const actives = this.getActives();
            const itemIn = this.getItemIn();
            const itemOut = this.getItemIn(true);
            percent2 = prev ? clamp(percent2, -1, 1) : 0;
            for (const slide2 of children(list)) {
              const isActive = includes(actives, slide2);
              const isIn2 = slide2 === itemIn;
              const isOut = slide2 === itemOut;
              const translateIn = isIn2 || !isOut && (isActive || dir * (isRtl ? -1 : 1) === -1 ^ getElLeft(slide2, list) > getElLeft(prev || next));
              triggerUpdate(slide2, "itemtranslate" + (translateIn ? "in" : "out"), {
                dir,
                percent: isOut ? 1 - percent2 : isIn2 ? percent2 : isActive ? 1 : 0
              });
            }
          },
          percent() {
            return Math.abs((css2(list, "transform").split(",")[4] * (isRtl ? -1 : 1) + from) / (to - from));
          },
          getDistance() {
            return Math.abs(to - from);
          },
          getItemIn(out) {
            if (out === void 0) {
              out = false;
            }
            let actives = this.getActives();
            let nextActives = inView(list, getLeft(next || prev, list, center));
            if (out) {
              const temp = actives;
              actives = nextActives;
              nextActives = temp;
            }
            return nextActives[findIndex(nextActives, (el) => !includes(actives, el))];
          },
          getActives() {
            return inView(list, getLeft(prev || next, list, center));
          }
        };
      }
      function getLeft(el, list, center) {
        const left = getElLeft(el, list);
        return center ? left - centerEl(el, list) : Math.min(left, getMax(list));
      }
      function getMax(list) {
        return Math.max(0, getWidth(list) - dimensions$1(list).width);
      }
      function getWidth(list) {
        return children(list).reduce((right, el) => dimensions$1(el).width + right, 0);
      }
      function centerEl(el, list) {
        return dimensions$1(list).width / 2 - dimensions$1(el).width / 2;
      }
      function getElLeft(el, list) {
        return el && (position(el).left + (isRtl ? dimensions$1(el).width - dimensions$1(list).width : 0)) * (isRtl ? -1 : 1) || 0;
      }
      function inView(list, listLeft) {
        listLeft -= 1;
        const listWidth = dimensions$1(list).width;
        const listRight = listLeft + listWidth + 2;
        return children(list).filter((slide2) => {
          const slideLeft = getElLeft(slide2, list);
          const slideRight = slideLeft + Math.min(dimensions$1(slide2).width, listWidth);
          return slideLeft >= listLeft && slideRight <= listRight;
        });
      }
      function triggerUpdate(el, type, data2) {
        trigger(el, createEvent(type, false, false, data2));
      }
      var slider = {
        mixins: [Class, Slider, SliderReactive, SliderPreload],
        props: {
          center: Boolean,
          sets: Boolean
        },
        data: {
          center: false,
          sets: false,
          attrItem: "uk-slider-item",
          selList: ".uk-slider-items",
          selNav: ".uk-slider-nav",
          clsContainer: "uk-slider-container",
          Transitioner
        },
        computed: {
          avgWidth() {
            return getWidth(this.list) / this.length;
          },
          finite(_ref) {
            let { finite } = _ref;
            return finite || Math.ceil(getWidth(this.list)) < Math.trunc(dimensions$1(this.list).width + getMaxElWidth(this.list) + this.center);
          },
          maxIndex() {
            if (!this.finite || this.center && !this.sets) {
              return this.length - 1;
            }
            if (this.center) {
              return last(this.sets);
            }
            let lft = 0;
            const max = getMax(this.list);
            const index5 = findIndex(this.slides, (el) => {
              if (lft >= max) {
                return true;
              }
              lft += dimensions$1(el).width;
            });
            return ~index5 ? index5 : this.length - 1;
          },
          sets(_ref2) {
            let { sets: enabled } = _ref2;
            if (!enabled) {
              return;
            }
            let left = 0;
            const sets = [];
            const width2 = dimensions$1(this.list).width;
            for (let i = 0; i < this.slides.length; i++) {
              const slideWidth = dimensions$1(this.slides[i]).width;
              if (left + slideWidth > width2) {
                left = 0;
              }
              if (this.center) {
                if (left < width2 / 2 && left + slideWidth + dimensions$1(this.slides[+i + 1]).width / 2 > width2 / 2) {
                  sets.push(+i);
                  left = width2 / 2 - slideWidth / 2;
                }
              } else if (left === 0) {
                sets.push(Math.min(+i, this.maxIndex));
              }
              left += slideWidth;
            }
            if (sets.length) {
              return sets;
            }
          },
          transitionOptions() {
            return {
              center: this.center,
              list: this.list
            };
          }
        },
        connected() {
          toggleClass(this.$el, this.clsContainer, !$("." + this.clsContainer, this.$el));
        },
        update: {
          write() {
            for (const el of this.navItems) {
              const index5 = toNumber(data(el, this.attrItem));
              if (index5 !== false) {
                el.hidden = !this.maxIndex || index5 > this.maxIndex || this.sets && !includes(this.sets, index5);
              }
            }
            if (this.length && !this.dragging && !this.stack.length) {
              this.reorder();
              this._translate(1);
            }
            this.updateActiveClasses();
          },
          events: ["resize"]
        },
        events: {
          beforeitemshow(e) {
            if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
              this.index = this.getValidIndex();
            }
            const diff = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
            if (!this.dragging && diff > 1) {
              for (let i = 0; i < diff; i++) {
                this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
              }
              e.preventDefault();
              return;
            }
            const index5 = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
            this.duration = speedUp(this.avgWidth / this.velocity) * (dimensions$1(this.slides[index5]).width / this.avgWidth);
            this.reorder();
          },
          itemshow() {
            if (~this.prevIndex) {
              addClass(this._getTransitioner().getItemIn(), this.clsActive);
            }
          },
          itemshown() {
            this.updateActiveClasses();
          }
        },
        methods: {
          reorder() {
            if (this.finite) {
              css2(this.slides, "order", "");
              return;
            }
            const index5 = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
            this.slides.forEach((slide2, i) => css2(slide2, "order", this.dir > 0 && i < index5 ? 1 : this.dir < 0 && i >= this.index ? -1 : ""));
            if (!this.center) {
              return;
            }
            const next = this.slides[index5];
            let width2 = dimensions$1(this.list).width / 2 - dimensions$1(next).width / 2;
            let j = 0;
            while (width2 > 0) {
              const slideIndex = this.getIndex(--j + index5, index5);
              const slide2 = this.slides[slideIndex];
              css2(slide2, "order", slideIndex > index5 ? -2 : -1);
              width2 -= dimensions$1(slide2).width;
            }
          },
          updateActiveClasses() {
            const actives = this._getTransitioner(this.index).getActives();
            const activeClasses = [
              this.clsActive,
              (!this.sets || includes(this.sets, toFloat(this.index))) && this.clsActivated || ""
            ];
            for (const slide2 of this.slides) {
              toggleClass(slide2, activeClasses, includes(actives, slide2));
            }
          },
          getValidIndex(index5, prevIndex) {
            if (index5 === void 0) {
              index5 = this.index;
            }
            if (prevIndex === void 0) {
              prevIndex = this.prevIndex;
            }
            index5 = this.getIndex(index5, prevIndex);
            if (!this.sets) {
              return index5;
            }
            let prev;
            do {
              if (includes(this.sets, index5)) {
                return index5;
              }
              prev = index5;
              index5 = this.getIndex(index5 + this.dir, prevIndex);
            } while (index5 !== prev);
            return index5;
          },
          getAdjacentSlides() {
            const { width: width2 } = dimensions$1(this.list);
            const left = -width2;
            const right = width2 * 2;
            const slideWidth = dimensions$1(this.slides[this.index]).width;
            const slideLeft = this.center ? width2 / 2 - slideWidth / 2 : 0;
            const slides = /* @__PURE__ */ new Set();
            for (const i of [-1, 1]) {
              let currentLeft = slideLeft + (i > 0 ? slideWidth : 0);
              let j = 0;
              do {
                const slide2 = this.slides[this.getIndex(this.index + i + j++ * i)];
                currentLeft += dimensions$1(slide2).width * i;
                slides.add(slide2);
              } while (this.slides.length > j && currentLeft > left && currentLeft < right);
            }
            return Array.from(slides);
          }
        }
      };
      function getMaxElWidth(list) {
        return Math.max(0, ...children(list).map((el) => dimensions$1(el).width));
      }
      var sliderParallax = {
        mixins: [Parallax],
        data: {
          selItem: "!li"
        },
        beforeConnect() {
          this.item = query(this.selItem, this.$el);
        },
        disconnected() {
          this.item = null;
        },
        events: [
          {
            name: "itemin itemout",
            self: true,
            el() {
              return this.item;
            },
            handler(_ref) {
              let { type, detail: { percent: percent2, duration, timing, dir } } = _ref;
              fastdom.read(() => {
                const propsFrom = this.getCss(getCurrentPercent(type, dir, percent2));
                const propsTo = this.getCss(isIn(type) ? 0.5 : dir > 0 ? 1 : 0);
                fastdom.write(() => {
                  css2(this.$el, propsFrom);
                  Transition.start(this.$el, propsTo, duration, timing).catch(noop3);
                });
              });
            }
          },
          {
            name: "transitioncanceled transitionend",
            self: true,
            el() {
              return this.item;
            },
            handler() {
              Transition.cancel(this.$el);
            }
          },
          {
            name: "itemtranslatein itemtranslateout",
            self: true,
            el() {
              return this.item;
            },
            handler(_ref2) {
              let { type, detail: { percent: percent2, dir } } = _ref2;
              fastdom.read(() => {
                const props2 = this.getCss(getCurrentPercent(type, dir, percent2));
                fastdom.write(() => css2(this.$el, props2));
              });
            }
          }
        ]
      };
      function isIn(type) {
        return endsWith(type, "in");
      }
      function getCurrentPercent(type, dir, percent2) {
        percent2 /= 2;
        return isIn(type) ^ dir < 0 ? percent2 : 1 - percent2;
      }
      var Animations = {
        ...Animations$2,
        fade: {
          show() {
            return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
          },
          percent(current) {
            return 1 - css2(current, "opacity");
          },
          translate(percent2) {
            return [{ opacity: 1 - percent2, zIndex: 0 }, { zIndex: -1 }];
          }
        },
        scale: {
          show() {
            return [{ opacity: 0, transform: scale3d(1 + 0.5), zIndex: 0 }, { zIndex: -1 }];
          },
          percent(current) {
            return 1 - css2(current, "opacity");
          },
          translate(percent2) {
            return [
              { opacity: 1 - percent2, transform: scale3d(1 + 0.5 * percent2), zIndex: 0 },
              { zIndex: -1 }
            ];
          }
        },
        pull: {
          show(dir) {
            return dir < 0 ? [
              { transform: translate(30), zIndex: -1 },
              { transform: translate(), zIndex: 0 }
            ] : [
              { transform: translate(-100), zIndex: 0 },
              { transform: translate(), zIndex: -1 }
            ];
          },
          percent(current, next, dir) {
            return dir < 0 ? 1 - translated(next) : translated(current);
          },
          translate(percent2, dir) {
            return dir < 0 ? [
              { transform: translate(30 * percent2), zIndex: -1 },
              { transform: translate(-100 * (1 - percent2)), zIndex: 0 }
            ] : [
              { transform: translate(-percent2 * 100), zIndex: 0 },
              { transform: translate(30 * (1 - percent2)), zIndex: -1 }
            ];
          }
        },
        push: {
          show(dir) {
            return dir < 0 ? [
              { transform: translate(100), zIndex: 0 },
              { transform: translate(), zIndex: -1 }
            ] : [
              { transform: translate(-30), zIndex: -1 },
              { transform: translate(), zIndex: 0 }
            ];
          },
          percent(current, next, dir) {
            return dir > 0 ? 1 - translated(next) : translated(current);
          },
          translate(percent2, dir) {
            return dir < 0 ? [
              { transform: translate(percent2 * 100), zIndex: 0 },
              { transform: translate(-30 * (1 - percent2)), zIndex: -1 }
            ] : [
              { transform: translate(-30 * percent2), zIndex: -1 },
              { transform: translate(100 * (1 - percent2)), zIndex: 0 }
            ];
          }
        }
      };
      var slideshow = {
        mixins: [Class, Slideshow, SliderReactive, SliderPreload],
        props: {
          ratio: String,
          minHeight: Number,
          maxHeight: Number
        },
        data: {
          ratio: "16:9",
          minHeight: false,
          maxHeight: false,
          selList: ".uk-slideshow-items",
          attrItem: "uk-slideshow-item",
          selNav: ".uk-slideshow-nav",
          Animations
        },
        update: {
          read() {
            if (!this.list) {
              return false;
            }
            let [width2, height2] = this.ratio.split(":").map(Number);
            height2 = height2 * this.list.offsetWidth / width2 || 0;
            if (this.minHeight) {
              height2 = Math.max(this.minHeight, height2);
            }
            if (this.maxHeight) {
              height2 = Math.min(this.maxHeight, height2);
            }
            return { height: height2 - boxModelAdjust(this.list, "height", "content-box") };
          },
          write(_ref) {
            let { height: height2 } = _ref;
            height2 > 0 && css2(this.list, "minHeight", height2);
          },
          events: ["resize"]
        },
        methods: {
          getAdjacentSlides() {
            return [1, -1].map((i) => this.slides[this.getIndex(this.index + i)]);
          }
        }
      };
      var sortable = {
        mixins: [Class, Animate],
        props: {
          group: String,
          threshold: Number,
          clsItem: String,
          clsPlaceholder: String,
          clsDrag: String,
          clsDragState: String,
          clsBase: String,
          clsNoDrag: String,
          clsEmpty: String,
          clsCustom: String,
          handle: String
        },
        data: {
          group: false,
          threshold: 5,
          clsItem: "uk-sortable-item",
          clsPlaceholder: "uk-sortable-placeholder",
          clsDrag: "uk-sortable-drag",
          clsDragState: "uk-drag",
          clsBase: "uk-sortable",
          clsNoDrag: "uk-sortable-nodrag",
          clsEmpty: "uk-sortable-empty",
          clsCustom: "",
          handle: false,
          pos: {}
        },
        created() {
          for (const key2 of ["init", "start", "move", "end"]) {
            const fn = this[key2];
            this[key2] = (e) => {
              assign(this.pos, getEventPos(e));
              fn(e);
            };
          }
        },
        events: {
          name: pointerDown$1,
          passive: false,
          handler: "init"
        },
        computed: {
          target() {
            return (this.$el.tBodies || [this.$el])[0];
          },
          items() {
            return children(this.target);
          },
          isEmpty: {
            get() {
              return isEmpty(this.items);
            },
            watch(empty2) {
              toggleClass(this.target, this.clsEmpty, empty2);
            },
            immediate: true
          },
          handles: {
            get(_ref, el) {
              let { handle } = _ref;
              return handle ? $$(handle, el) : this.items;
            },
            watch(handles, prev) {
              css2(prev, { touchAction: "", userSelect: "" });
              css2(handles, { touchAction: hasTouch ? "none" : "", userSelect: "none" });
            },
            immediate: true
          }
        },
        update: {
          write(data2) {
            if (!this.drag || !parent(this.placeholder)) {
              return;
            }
            const {
              pos: { x, y },
              origin: { offsetTop, offsetLeft },
              placeholder
            } = this;
            css2(this.drag, {
              top: y - offsetTop,
              left: x - offsetLeft
            });
            const sortable2 = this.getSortable(document.elementFromPoint(x, y));
            if (!sortable2) {
              return;
            }
            const { items } = sortable2;
            if (items.some(Transition.inProgress)) {
              return;
            }
            const target = findTarget(items, { x, y });
            if (items.length && (!target || target === placeholder)) {
              return;
            }
            const previous = this.getSortable(placeholder);
            const insertTarget = findInsertTarget(sortable2.target, target, placeholder, x, y, sortable2 === previous && data2.moved !== target);
            if (insertTarget === false) {
              return;
            }
            if (insertTarget && placeholder === insertTarget) {
              return;
            }
            if (sortable2 !== previous) {
              previous.remove(placeholder);
              data2.moved = target;
            } else {
              delete data2.moved;
            }
            sortable2.insert(placeholder, insertTarget);
            this.touched.add(sortable2);
          },
          events: ["move"]
        },
        methods: {
          init(e) {
            const { target, button, defaultPrevented } = e;
            const [placeholder] = this.items.filter((el) => within(target, el));
            if (!placeholder || defaultPrevented || button > 0 || isInput(target) || within(target, "." + this.clsNoDrag) || this.handle && !within(target, this.handle)) {
              return;
            }
            e.preventDefault();
            this.touched = /* @__PURE__ */ new Set([this]);
            this.placeholder = placeholder;
            this.origin = { target, index: index4(placeholder), ...this.pos };
            on(document, pointerMove$1, this.move);
            on(document, pointerUp$1, this.end);
            if (!this.threshold) {
              this.start(e);
            }
          },
          start(e) {
            this.drag = appendDrag(this.$container, this.placeholder);
            const { left, top } = this.placeholder.getBoundingClientRect();
            assign(this.origin, { offsetLeft: this.pos.x - left, offsetTop: this.pos.y - top });
            addClass(this.drag, this.clsDrag, this.clsCustom);
            addClass(this.placeholder, this.clsPlaceholder);
            addClass(this.items, this.clsItem);
            addClass(document.documentElement, this.clsDragState);
            trigger(this.$el, "start", [this, this.placeholder]);
            trackScroll(this.pos);
            this.move(e);
          },
          move(e) {
            if (this.drag) {
              this.$emit("move");
            } else if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
              this.start(e);
            }
          },
          end() {
            off(document, pointerMove$1, this.move);
            off(document, pointerUp$1, this.end);
            if (!this.drag) {
              return;
            }
            untrackScroll();
            const sortable2 = this.getSortable(this.placeholder);
            if (this === sortable2) {
              if (this.origin.index !== index4(this.placeholder)) {
                trigger(this.$el, "moved", [this, this.placeholder]);
              }
            } else {
              trigger(sortable2.$el, "added", [sortable2, this.placeholder]);
              trigger(this.$el, "removed", [this, this.placeholder]);
            }
            trigger(this.$el, "stop", [this, this.placeholder]);
            remove$1(this.drag);
            this.drag = null;
            for (const { clsPlaceholder, clsItem } of this.touched) {
              for (const sortable3 of this.touched) {
                removeClass(sortable3.items, clsPlaceholder, clsItem);
              }
            }
            this.touched = null;
            removeClass(document.documentElement, this.clsDragState);
          },
          insert(element, target) {
            addClass(this.items, this.clsItem);
            const insert = () => target ? before(target, element) : append(this.target, element);
            this.animate(insert);
          },
          remove(element) {
            if (!within(element, this.target)) {
              return;
            }
            this.animate(() => remove$1(element));
          },
          getSortable(element) {
            do {
              const sortable2 = this.$getComponent(element, "sortable");
              if (sortable2 && (sortable2 === this || this.group !== false && sortable2.group === this.group)) {
                return sortable2;
              }
            } while (element = parent(element));
          }
        }
      };
      let trackTimer;
      function trackScroll(pos) {
        let last2 = Date.now();
        trackTimer = setInterval(() => {
          let { x, y } = pos;
          y += document.scrollingElement.scrollTop;
          const dist = (Date.now() - last2) * 0.3;
          last2 = Date.now();
          scrollParents(document.elementFromPoint(x, pos.y), /auto|scroll/).reverse().some((scrollEl) => {
            let { scrollTop: scroll2, scrollHeight } = scrollEl;
            const { top, bottom, height: height2 } = offsetViewport(scrollEl);
            if (top < y && top + 35 > y) {
              scroll2 -= dist;
            } else if (bottom > y && bottom - 35 < y) {
              scroll2 += dist;
            } else {
              return;
            }
            if (scroll2 > 0 && scroll2 < scrollHeight - height2) {
              scrollEl.scrollTop = scroll2;
              return true;
            }
          });
        }, 15);
      }
      function untrackScroll() {
        clearInterval(trackTimer);
      }
      function appendDrag(container, element) {
        const clone = append(container, element.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2"));
        css2(clone, "margin", "0", "important");
        css2(clone, {
          boxSizing: "border-box",
          width: element.offsetWidth,
          height: element.offsetHeight,
          padding: css2(element, "padding")
        });
        height(clone.firstElementChild, height(element.firstElementChild));
        return clone;
      }
      function findTarget(items, point) {
        return items[findIndex(items, (item) => pointInRect(point, item.getBoundingClientRect()))];
      }
      function findInsertTarget(list, target, placeholder, x, y, sameList) {
        if (!children(list).length) {
          return;
        }
        const rect = target.getBoundingClientRect();
        if (!sameList) {
          if (!isHorizontal(list, placeholder)) {
            return y < rect.top + rect.height / 2 ? target : target.nextElementSibling;
          }
          return target;
        }
        const placeholderRect = placeholder.getBoundingClientRect();
        const sameRow = linesIntersect([rect.top, rect.bottom], [placeholderRect.top, placeholderRect.bottom]);
        const pointerPos = sameRow ? x : y;
        const lengthProp = sameRow ? "width" : "height";
        const startProp = sameRow ? "left" : "top";
        const endProp = sameRow ? "right" : "bottom";
        const diff = placeholderRect[lengthProp] < rect[lengthProp] ? rect[lengthProp] - placeholderRect[lengthProp] : 0;
        if (placeholderRect[startProp] < rect[startProp]) {
          if (diff && pointerPos < rect[startProp] + diff) {
            return false;
          }
          return target.nextElementSibling;
        }
        if (diff && pointerPos > rect[endProp] - diff) {
          return false;
        }
        return target;
      }
      function isHorizontal(list, placeholder) {
        const single = children(list).length === 1;
        if (single) {
          append(list, placeholder);
        }
        const items = children(list);
        const isHorizontal2 = items.some((el, i) => {
          const rectA = el.getBoundingClientRect();
          return items.slice(i + 1).some((el2) => {
            const rectB = el2.getBoundingClientRect();
            return !linesIntersect([rectA.left, rectA.right], [rectB.left, rectB.right]);
          });
        });
        if (single) {
          remove$1(placeholder);
        }
        return isHorizontal2;
      }
      function linesIntersect(lineA, lineB) {
        return lineA[1] > lineB[0] && lineB[1] > lineA[0];
      }
      var tooltip = {
        mixins: [Container, Togglable, Position],
        args: "title",
        props: {
          delay: Number,
          title: String
        },
        data: {
          pos: "top",
          title: "",
          delay: 0,
          animation: ["uk-animation-scale-up"],
          duration: 100,
          cls: "uk-active"
        },
        beforeConnect() {
          this._hasTitle = hasAttr(this.$el, "title");
          attr(this.$el, "title", "");
          this.updateAria(false);
          makeFocusable(this.$el);
        },
        disconnected() {
          this.hide();
          attr(this.$el, "title", this._hasTitle ? this.title : null);
        },
        methods: {
          show() {
            if (this.isToggled(this.tooltip || null) || !this.title) {
              return;
            }
            this._unbind = once(document, "show keydown " + pointerDown$1, this.hide, false, (e) => e.type === pointerDown$1 && !within(e.target, this.$el) || e.type === "keydown" && e.keyCode === 27 || e.type === "show" && e.detail[0] !== this && e.detail[0].$name === this.$name);
            clearTimeout(this.showTimer);
            this.showTimer = setTimeout(this._show, this.delay);
          },
          async hide() {
            if (matches(this.$el, "input:focus")) {
              return;
            }
            clearTimeout(this.showTimer);
            if (!this.isToggled(this.tooltip || null)) {
              return;
            }
            await this.toggleElement(this.tooltip, false, false);
            remove$1(this.tooltip);
            this.tooltip = null;
            this._unbind();
          },
          _show() {
            this.tooltip = append(this.container, '<div class="uk-' + this.$options.name + '"> <div class="uk-' + this.$options.name + '-inner">' + this.title + "</div> </div>");
            on(this.tooltip, "toggled", (e, toggled) => {
              this.updateAria(toggled);
              if (!toggled) {
                return;
              }
              this.positionAt(this.tooltip, this.$el);
              const [dir, align] = getAlignment(this.tooltip, this.$el, this.pos);
              this.origin = this.axis === "y" ? flipPosition(dir) + "-" + align : align + "-" + flipPosition(dir);
            });
            this.toggleElement(this.tooltip, true);
          },
          updateAria(toggled) {
            attr(this.$el, "aria-expanded", toggled);
          }
        },
        events: {
          focus: "show",
          blur: "hide",
          [pointerEnter + " " + pointerLeave](e) {
            if (!isTouch(e)) {
              this[e.type === pointerEnter ? "show" : "hide"]();
            }
          },
          [pointerDown$1](e) {
            if (isTouch(e)) {
              this.show();
            }
          }
        }
      };
      function makeFocusable(el) {
        if (!isFocusable(el)) {
          attr(el, "tabindex", "0");
        }
      }
      function getAlignment(el, target, _ref) {
        let [dir, align] = _ref;
        const elOffset = offset(el);
        const targetOffset = offset(target);
        const properties = [
          ["left", "right"],
          ["top", "bottom"]
        ];
        for (const props3 of properties) {
          if (elOffset[props3[0]] >= targetOffset[props3[1]]) {
            dir = props3[1];
            break;
          }
          if (elOffset[props3[1]] <= targetOffset[props3[0]]) {
            dir = props3[0];
            break;
          }
        }
        const props2 = includes(properties[0], dir) ? properties[1] : properties[0];
        if (elOffset[props2[0]] === targetOffset[props2[0]]) {
          align = props2[0];
        } else if (elOffset[props2[1]] === targetOffset[props2[1]]) {
          align = props2[1];
        } else {
          align = "center";
        }
        return [dir, align];
      }
      var upload = {
        props: {
          allow: String,
          clsDragover: String,
          concurrent: Number,
          maxSize: Number,
          method: String,
          mime: String,
          msgInvalidMime: String,
          msgInvalidName: String,
          msgInvalidSize: String,
          multiple: Boolean,
          name: String,
          params: Object,
          type: String,
          url: String
        },
        data: {
          allow: false,
          clsDragover: "uk-dragover",
          concurrent: 1,
          maxSize: 0,
          method: "POST",
          mime: false,
          msgInvalidMime: "Invalid File Type: %s",
          msgInvalidName: "Invalid File Name: %s",
          msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
          multiple: false,
          name: "files[]",
          params: {},
          type: "",
          url: "",
          abort: noop3,
          beforeAll: noop3,
          beforeSend: noop3,
          complete: noop3,
          completeAll: noop3,
          error: noop3,
          fail: noop3,
          load: noop3,
          loadEnd: noop3,
          loadStart: noop3,
          progress: noop3
        },
        events: {
          change(e) {
            if (!matches(e.target, 'input[type="file"]')) {
              return;
            }
            e.preventDefault();
            if (e.target.files) {
              this.upload(e.target.files);
            }
            e.target.value = "";
          },
          drop(e) {
            stop(e);
            const transfer = e.dataTransfer;
            if (!(transfer != null && transfer.files)) {
              return;
            }
            removeClass(this.$el, this.clsDragover);
            this.upload(transfer.files);
          },
          dragenter(e) {
            stop(e);
          },
          dragover(e) {
            stop(e);
            addClass(this.$el, this.clsDragover);
          },
          dragleave(e) {
            stop(e);
            removeClass(this.$el, this.clsDragover);
          }
        },
        methods: {
          async upload(files) {
            files = toArray(files);
            if (!files.length) {
              return;
            }
            trigger(this.$el, "upload", [files]);
            for (const file4 of files) {
              if (this.maxSize && this.maxSize * 1e3 < file4.size) {
                this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                return;
              }
              if (this.allow && !match(this.allow, file4.name)) {
                this.fail(this.msgInvalidName.replace("%s", this.allow));
                return;
              }
              if (this.mime && !match(this.mime, file4.type)) {
                this.fail(this.msgInvalidMime.replace("%s", this.mime));
                return;
              }
            }
            if (!this.multiple) {
              files = files.slice(0, 1);
            }
            this.beforeAll(this, files);
            const chunks = chunk(files, this.concurrent);
            const upload2 = async (files2) => {
              const data2 = new FormData();
              files2.forEach((file4) => data2.append(this.name, file4));
              for (const key2 in this.params) {
                data2.append(key2, this.params[key2]);
              }
              try {
                const xhr = await ajax(this.url, {
                  data: data2,
                  method: this.method,
                  responseType: this.type,
                  beforeSend: (env) => {
                    const { xhr: xhr2 } = env;
                    xhr2.upload && on(xhr2.upload, "progress", this.progress);
                    for (const type of ["loadStart", "load", "loadEnd", "abort"]) {
                      on(xhr2, type.toLowerCase(), this[type]);
                    }
                    return this.beforeSend(env);
                  }
                });
                this.complete(xhr);
                if (chunks.length) {
                  await upload2(chunks.shift());
                } else {
                  this.completeAll(xhr);
                }
              } catch (e) {
                this.error(e);
              }
            };
            await upload2(chunks.shift());
          }
        }
      };
      function match(pattern, path) {
        return path.match(new RegExp("^" + pattern.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"));
      }
      function chunk(files, size) {
        const chunks = [];
        for (let i = 0; i < files.length; i += size) {
          chunks.push(files.slice(i, i + size));
        }
        return chunks;
      }
      function stop(e) {
        e.preventDefault();
        e.stopPropagation();
      }
      var components = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        Countdown: countdown,
        Filter: filter,
        Lightbox: lightbox,
        LightboxPanel,
        Notification: notification,
        Parallax: parallax,
        Slider: slider,
        SliderParallax: sliderParallax,
        Slideshow: slideshow,
        SlideshowParallax: sliderParallax,
        Sortable: sortable,
        Tooltip: tooltip,
        Upload: upload
      });
      each2(components, (component, name) => UIkit.component(name, component));
      return UIkit;
    });
  }
});

// .svelte-kit/output/server/entries/pages/__layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
var import_uikit, Navbar, topics, getStores, page, Discover, Sidebar, css, _layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/__layout.svelte.js"() {
    init_index_11f55250();
    import_uikit = __toESM(require_uikit(), 1);
    Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let loaded = false;
      function loadGoogleLogin() {
        console.log("TODO: add onload function");
        loaded = true;
      }
      {
        if (loaded) {
          console.log("loaded: ", loaded);
          console.log("google: ", google);
        }
      }
      return `${$$result.head += `<script src="${"https://accounts.google.com/gsi/client"}" defer async${add_attribute("onload", setTimeout(() => loadGoogleLogin(), 2e3), 0)} data-svelte="svelte-1i1szby"><\/script>`, ""}

<header class="${"w-full flex justify-between items-center border-b-2 border-b-gray-200 py-2 px-4"}"><a href="${"/"}"><div class="${"w-24 md:w-28"}">
			<img class="${"cursor-pointer"}" src="${"/logo.png"}" alt="${"TikTik logo"}"></div></a>
	
	<div class="${"relative"}">
		<form class="${"absolute md:static top-10 -left-20 bg-white inline-flex items-center"}">
			<input type="${"text"}" class="${"bg-primary-bg p-3 font-medium border-2 border-gray-100 rounded-lg focus:border-accent/50 focus:outline-none md:top-0"}" placeholder="${"Search accounts and videos"}">
			<button aria-label="${"Search accounts and videos"}" class="${"right-6 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"}"><div class="${"i-mdi-magnify"}"></div></button></form></div>

	<div>${`
			<div><div class="${"flex gap-5 items-center md:gap-10"}"><a href="${"/upload"}"><button class="${"border-2 px-2 text-md font-semibold flex items-center gap-2 md:px-4"}"><div class="${"i-mdi-plus text-xl"}"></div>
							<span class="${"hidden md:block"}">Upload</span></button></a>
					
					
						<a class="${"block w-full h-full"}" href="${"/"}">
							
							<img class="${"block w-full h-full object-cover rounded-full aspect-square w-10 h-10 cursor-pointer"}" src="${""}" alt="${"some img"}">
							
							</a>
					
					
					<button class="${"px-2"}" type="${"button"}"><div class="${"i-mdi-logout text-red-400 text-2xl"}"></div></button>

					</div></div>
			`}</div>
	
	</header>

`;
    });
    topics = [
      {
        name: "coding",
        type: "mdi",
        icon: "i-mdi-code-braces-box"
      },
      {
        name: "comedy",
        type: "mdi",
        icon: "i-mdi-emoticon-cool"
      },
      {
        name: "gaming",
        type: "mdi",
        icon: "i-mdi-gamepad-variant"
      },
      {
        name: "food",
        type: "mdi",
        icon: "i-mdi-food"
      },
      {
        name: "dance",
        type: "mdi",
        icon: "i-mdi-dance-pole"
      },
      {
        name: "beauty",
        type: "mdi",
        icon: "i-mdi-lipstick"
      },
      {
        name: "animals",
        type: "mdi",
        icon: "i-mdi-paw"
      },
      {
        name: "sports",
        type: "mdi",
        icon: "i-mdi-medal"
      }
    ];
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        get preloading() {
          console.error("stores.preloading is deprecated; use stores.navigating instead");
          return {
            subscribe: stores.navigating.subscribe
          };
        },
        session: stores.session,
        updated: stores.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Discover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let topic;
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let iconEl;
      topic = $page.url.searchParams.get("topic");
      $$unsubscribe_page();
      return `<div class="${"pb-6 xl:border-b-2 xl:border-gray-200"}"><p class="${"font-semibold text-gray-500 m-3 mt-4 hidden xl:block"}">Popular topics</p>
	

	<div class="${"flex gap-3 flex-wrap"}"${add_attribute("this", iconEl, 0)}>${each(topics, (item) => {
        return `
			<a${add_attribute("href", `/?topic=${item.name}`, 0)}><div class="${[
          "p-3 rounded flex items-center justify-center gap-2 cursor-pointer text-black xl:border-2 xl:border-gray-300 xl:rounded-full hover:bg-primary-bg",
          (topic === item.name ? "!border-accent" : "") + " " + (topic === item.name ? "!text-accent" : "")
        ].join(" ").trim()}"><div icon class="${"font-bold text-2xl xl:text-md"}"></div>
					
					<span class="${"font-medium text-md capitalize hidden xl:block"}">${escape(item.name)}
					</span></div>
			</a>`;
      })}</div>
</div>`;
    });
    Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<aside><div class="${"block m-2 ml-4 mt-3 xl:hidden"}">${`
			<div class="${"cursor-pointer text-xl"}"><div class="${"i-mdi-close-circle"}"></div></div>`}</div>

	${`
		<div class="${"sidebar-content"}"><div class="${"w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-200 p-3 xl:border-0 xl:w-400"}"><div class="${"border-gray-200 xl:pb-4 xl:border-b-2"}"><a class="${"block"}" href="${"/"}"><div class="${"flex items-center justify-center p-3 gap-2 font-semibold cursor-pointer text-accent rounded xl:justify-start hover:bg-primary-bg"}">
							
							<div class="${"text-2xl i-mdi-home"}"></div>
							
							<span class="${"text-xl hidden xl:block"}">For you</span></div></a></div>

				${validate_component(Discover, "SidebarDiscover").$$render($$result, {}, {}, {})}

				
				</div></div>`}
</aside>`;
    });
    css = {
      code: "@import 'uikit/dist/css/uikit.css';",
      map: null
    };
    _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<div class="${"website-wrapper"}"><div class="${"m-auto overflow-hidden h-screen xl:w-7xl"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
		
		<main class="${"flex gap-6 md:(gap-20)"}"><div class="${"h-[90vh] overflow-hidden overflow-y-auto"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}
				</div>
			<div class="${"mt-4 flex flex-col gap-10 overflow-auto h-[88vh] flex-1 videos"}">${slots.default ? slots.default({}) : ``}</div></main></div></div>

`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  file: () => file,
  imports: () => imports,
  index: () => index,
  module: () => layout_svelte_exports,
  stylesheets: () => stylesheets
});
var index, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_svelte();
    index = 0;
    file = "_app/immutable/pages/__layout.svelte-f9129576.js";
    imports = ["_app/immutable/pages/__layout.svelte-f9129576.js", "_app/immutable/chunks/index-3a72baaa.js"];
    stylesheets = ["_app/immutable/assets/__layout-db3aa4d8.css"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2,
  load: () => load
});
function load({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_index_11f55250();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { status } = $$props;
      let { error: error2 } = $$props;
      if ($$props.status === void 0 && $$bindings.status && status !== void 0)
        $$bindings.status(status);
      if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
        $$bindings.error(error2);
      return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  module: () => error_svelte_exports,
  stylesheets: () => stylesheets2
});
var index2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    init_error_svelte();
    index2 = 1;
    file2 = "_app/immutable/error.svelte-a0c538aa.js";
    imports2 = ["_app/immutable/error.svelte-a0c538aa.js", "_app/immutable/chunks/index-3a72baaa.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/index.svelte.js
var index_svelte_exports = {};
__export(index_svelte_exports, {
  default: () => Routes
});
var Routes;
var init_index_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/index.svelte.js"() {
    init_index_11f55250();
    Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<h1 class="${"text-red-500 hover:text-indigo-500"}">hello</h1>




<div class="${"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"}" uk-grid><div class="${"uk-card-media-left uk-cover-container"}"><img src="${"images/light.jpg"}" alt="${""}" uk-cover>
		<canvas width="${"600"}" height="${"400"}"></canvas></div>
	<div><div class="${"uk-card-body"}"><h3 class="${"uk-card-title"}">Media Left</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
			</p></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  module: () => index_svelte_exports,
  stylesheets: () => stylesheets3
});
var index3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_index_svelte();
    index3 = 2;
    file3 = "_app/immutable/pages/index.svelte-0df37091.js";
    imports3 = ["_app/immutable/pages/index.svelte-0df37091.js", "_app/immutable/chunks/index-3a72baaa.js"];
    stylesheets3 = [];
  }
});

// .svelte-kit/output/server/index.js
init_index_11f55250();
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {})}`}

${``}`;
});
function to_headers(object) {
  const headers = new Headers();
  if (object) {
    for (const key2 in object) {
      const value = object[key2];
      if (!value)
        continue;
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          headers.append(key2, value2);
        });
      } else {
        headers.set(key2, value);
      }
    }
  }
  return headers;
}
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex((part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*"));
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
function lowercase_keys(obj) {
  const clone = {};
  for (const key2 in obj) {
    clone[key2.toLowerCase()] = obj[key2];
  }
  return clone;
}
function is_pojo(body) {
  if (typeof body !== "object")
    return false;
  if (body) {
    if (body instanceof Uint8Array)
      return false;
    if (body instanceof ReadableStream)
      return false;
    if (body._readableState && typeof body.pipe === "function") {
      throw new Error("Node streams are no longer supported \u2014 use a ReadableStream instead");
    }
  }
  return true;
}
function serialize_error(error2, get_stack) {
  return JSON.stringify(clone_error(error2, get_stack));
}
function clone_error(error2, get_stack) {
  const {
    name,
    message,
    stack,
    cause,
    ...custom
  } = error2;
  const object = { name, message, stack: get_stack(error2) };
  if (cause)
    object.cause = clone_error(cause, get_stack);
  for (const key2 in custom) {
    object[key2] = custom[key2];
  }
  return object;
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(`Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`);
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function error(body) {
  return new Response(body, {
    status: 500
  });
}
function is_string(s2) {
  return typeof s2 === "string" || s2 instanceof String;
}
var text_types = /* @__PURE__ */ new Set([
  "application/xml",
  "application/json",
  "application/x-www-form-urlencoded",
  "multipart/form-data"
]);
var bodyless_status_codes = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function is_text(content_type) {
  if (!content_type)
    return true;
  const type = content_type.split(";")[0].toLowerCase();
  return type.startsWith("text/") || type.endsWith("+xml") || text_types.has(type);
}
async function render_endpoint(event, mod, options) {
  const { method } = event.request;
  check_method_names(mod);
  let handler2 = mod[method];
  if (!handler2 && method === "HEAD") {
    handler2 = mod.GET;
  }
  if (!handler2) {
    const allowed = [];
    for (const method2 in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
      if (mod[method2])
        allowed.push(method2);
    }
    if (mod.GET || mod.HEAD)
      allowed.push("HEAD");
    return event.request.headers.get("x-sveltekit-load") ? new Response(void 0, {
      status: 204
    }) : new Response(`${method} method not allowed`, {
      status: 405,
      headers: {
        allow: allowed.join(", ")
      }
    });
  }
  const response = await handler2(event);
  const preface = `Invalid response from route ${event.url.pathname}`;
  if (typeof response !== "object") {
    return error(`${preface}: expected an object, got ${typeof response}`);
  }
  if (response.fallthrough) {
    throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
  }
  const { status = 200, body = {} } = response;
  const headers = response.headers instanceof Headers ? new Headers(response.headers) : to_headers(response.headers);
  const type = headers.get("content-type");
  if (!is_text(type) && !(body instanceof Uint8Array || body instanceof ReadableStream || is_string(body))) {
    return error(`${preface}: body must be an instance of string, Uint8Array or ReadableStream if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if (is_pojo(body) && (!type || type.startsWith("application/json"))) {
    headers.set("content-type", "application/json; charset=utf-8");
    normalized_body = body instanceof Error ? serialize_error(body, options.get_stack) : JSON.stringify(body);
  } else {
    normalized_body = body;
  }
  if ((typeof normalized_body === "string" || normalized_body instanceof Uint8Array) && !headers.has("etag")) {
    const cache_control = headers.get("cache-control");
    if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
      headers.set("etag", `"${hash(normalized_body)}"`);
    }
  }
  return new Response(method !== "HEAD" && !bodyless_status_codes.has(status) ? normalized_body : void 0, {
    status,
    headers
  });
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key2) {
            return walk(thing[key2]);
          });
      }
    }
  }
  walk(value);
  var names = /* @__PURE__ */ new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key2) {
          return safeKey(key2) + ":" + stringify(thing[key2]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key2) {
            statements_1.push("" + name + safeProp(key2) + "=" + stringify(thing[key2]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
}
function safeProp(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? "." + key2 : "[" + escapeUnsafeChars(JSON.stringify(key2)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop2() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop2) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
var render_json_payload_script_dict = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var render_json_payload_script_regex = new RegExp(`[${Object.keys(render_json_payload_script_dict).join("")}]`, "g");
function render_json_payload_script(attrs, payload) {
  const safe_payload = JSON.stringify(payload).replace(render_json_payload_script_regex, (match) => render_json_payload_script_dict[match]);
  let safe_attrs = "";
  for (const [key2, value] of Object.entries(attrs)) {
    if (value === void 0)
      continue;
    safe_attrs += ` sveltekit:data-${key2}=${escape_html_attr(value)}`;
  }
  return `<script type="application/json"${safe_attrs}>${safe_payload}<\/script>`;
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(`[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`, "g");
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode$1(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode$1(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error("`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both");
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var absolute = /^([a-z]+:)?\/?\//;
var scheme = /^[a-z]+:/;
function resolve(base2, path) {
  if (scheme.test(path))
    return path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix2 = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix2}${baseparts.join("/")}`;
}
function is_root_relative(path) {
  return path[0] === "/" && path[1] !== "/";
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var LoadURL = class extends URL {
  get hash() {
    throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.");
  }
};
var PrerenderingURL = class extends URL {
  get search() {
    throw new Error("Cannot access url.search on a page with prerendering enabled");
  }
  get searchParams() {
    throw new Error("Cannot access url.searchParams on a page with prerendering enabled");
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  options,
  state,
  $session,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  stuff
}) {
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets4 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const inline_styles = /* @__PURE__ */ new Map();
  const serialized_data = [];
  let shadow_props;
  let rendered;
  let is_private = false;
  let cache;
  if (error2) {
    error2.stack = options.get_stack(error2);
  }
  if (resolve_opts.ssr) {
    const leaf = branch.at(-1);
    if (leaf.loaded.status) {
      status = leaf.loaded.status;
    }
    for (const { node, props: props2, loaded, fetched, uses_credentials } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets4.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (props2)
        shadow_props = props2;
      cache = loaded == null ? void 0 : loaded.cache;
      is_private = (cache == null ? void 0 : cache.private) ?? uses_credentials;
    }
    const session = writable($session);
    is_private = is_private || ((cache == null ? void 0 : cache.private) ?? (!!$session && Object.keys($session).length > 0));
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session,
        updated
      },
      page: {
        error: error2,
        params: event.params,
        routeId: event.routeId,
        status,
        stuff,
        url: state.prerendering ? new PrerenderingURL(event.url) : event.url
      },
      components: branch.map(({ node }) => node.module.default)
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    rendered = options.root.render(props);
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  const init_app = `
		import { start } from ${s(options.prefix + entry.file)};
		start({
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			paths: ${s(options.paths)},
			session: ${try_serialize($session, (error3) => {
    throw new Error(`Failed to serialize session data: ${error3.message}`);
  })},
			route: ${!!page_config.router},
			spa: ${!resolve_opts.ssr},
			trailing_slash: ${s(options.trailing_slash)},
			hydrate: ${resolve_opts.ssr && page_config.hydrate ? `{
				status: ${status},
				error: ${error2 && serialize_error(error2, (e) => e.stack)},
				nodes: [${branch.map(({ node }) => node.index).join(", ")}],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)}
			}` : "null"}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  head += Array.from(stylesheets4).map((dep) => {
    const attributes = [
      'rel="stylesheet"',
      `href="${options.prefix + dep}"`
    ];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    }
    return `
	<link ${attributes.join(" ")}>`;
  }).join("");
  if (page_config.router || page_config.hydrate) {
    head += Array.from(modulepreloads).map((dep) => `
	<link rel="modulepreload" href="${options.prefix + dep}">`).join("");
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
    body += serialized_data.map(({ url, body: body2, response }) => render_json_payload_script({ type: "data", url, body: typeof body2 === "string" ? hash(body2) : void 0 }, response)).join("\n	");
    if (shadow_props) {
      body += render_json_payload_script({ type: "props" }, shadow_props);
    }
  }
  if (options.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="max-age=${cache.maxage}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
  const assets2 = options.paths.assets || (segments.length > 0 ? segments.map(() => "..").join("/") : ".");
  const html = await resolve_opts.transformPage({
    html: options.template({ head, body, assets: assets2, nonce: csp.nonce })
  });
  const headers = new Headers({
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (cache) {
    headers.set("cache-control", `${is_private ? "private" : "public"}, max-age=${cache.maxage}`);
  }
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index4 = 0;
  while (index4 < str.length) {
    var eqIdx = str.indexOf("=", index4);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index4);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index4 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index4, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index4 = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var setCookie = { exports: {} };
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValue = parts.shift().split("=");
  var name = nameValue.shift();
  var value = nameValue.join("=");
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  try {
    value = options.decodeValues ? decodeURIComponent(value) : value;
  } catch (e) {
    console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e);
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
function parse(input, options) {
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers && input.headers["set-cookie"]) {
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    var sch = input.headers[Object.keys(input.headers).find(function(key2) {
      return key2.toLowerCase() === "set-cookie";
    })];
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.");
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!options.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;
function normalize(loaded) {
  if (!loaded) {
    return {};
  }
  if (loaded.fallthrough) {
    throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
  }
  if ("maxage" in loaded) {
    throw new Error("maxage should be replaced with cache: { maxage }");
  }
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error(`${status}`)
      };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      throw new Error('"redirect" property returned from load() must be accompanied by a 3xx status code');
    }
    if (typeof loaded.redirect !== "string") {
      throw new Error('"redirect" property returned from load() must be a string');
    }
  }
  if (loaded.dependencies) {
    if (!Array.isArray(loaded.dependencies) || loaded.dependencies.some((dep) => typeof dep !== "string")) {
      throw new Error('"dependencies" property returned from load() must be of type string[]');
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
async function load_node({
  event,
  options,
  state,
  route,
  node,
  $session,
  stuff,
  is_error,
  is_leaf,
  status,
  error: error2
}) {
  const { module } = node;
  let uses_credentials = false;
  const fetched = [];
  const cookies = parse_1(event.request.headers.get("cookie") || "");
  const new_cookies = [];
  let loaded;
  const should_prerender = node.module.prerender ?? options.prerender.default;
  const shadow = is_leaf ? await load_shadow_data(route, event, options, should_prerender) : {};
  if (shadow.cookies) {
    shadow.cookies.forEach((header) => {
      new_cookies.push(parseString_1(header));
    });
  }
  if (shadow.error) {
    loaded = {
      error: shadow.error
    };
  } else if (shadow.redirect) {
    loaded = {
      redirect: shadow.redirect
    };
  } else if (module.load) {
    const load_input = {
      url: state.prerendering ? new PrerenderingURL(event.url) : new LoadURL(event.url),
      params: event.params,
      props: shadow.body || {},
      routeId: event.routeId,
      get session() {
        if (node.module.prerender ?? options.prerender.default) {
          throw Error("Attempted to access session from a prerendered page. Session would never be populated.");
        }
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let requested;
        if (typeof resource === "string") {
          requested = resource;
        } else {
          requested = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        opts.headers = new Headers(opts.headers);
        for (const [key2, value] of event.request.headers) {
          if (key2 !== "authorization" && key2 !== "connection" && key2 !== "cookie" && key2 !== "host" && key2 !== "if-none-match" && !opts.headers.has(key2)) {
            opts.headers.set(key2, value);
          }
        }
        const resolved = resolve(event.url.pathname, requested.split("?")[0]);
        let response;
        let dependency;
        const prefix2 = options.paths.assets || options.paths.base;
        const filename = decodeURIComponent(resolved.startsWith(prefix2) ? resolved.slice(prefix2.length) : resolved).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file4 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            response = new Response(options.read(file4), {
              headers: type ? { "content-type": type } : {}
            });
          } else {
            response = await fetch(`${event.url.origin}/${file4}`, opts);
          }
        } else if (is_root_relative(resolved)) {
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            const authorization = event.request.headers.get("authorization");
            const combined_cookies = { ...cookies };
            for (const cookie2 of new_cookies) {
              if (!domain_matches(event.url.hostname, cookie2.domain))
                continue;
              if (!path_matches(resolved, cookie2.path))
                continue;
              combined_cookies[cookie2.name] = cookie2.value;
            }
            const cookie = Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
            if (cookie) {
              opts.headers.set("cookie", cookie);
            }
            if (authorization && !opts.headers.has("authorization")) {
              opts.headers.set("authorization", authorization);
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          response = await respond(new Request(new URL(requested, event.url).href, { ...opts }), options, {
            ...state,
            initiator: route
          });
          if (state.prerendering) {
            dependency = { response, body: null };
            state.prerendering.dependencies.set(resolved, dependency);
          }
        } else {
          if (resolved.startsWith("//")) {
            requested = event.url.protocol + requested;
          }
          if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
            uses_credentials = true;
            const cookie = event.request.headers.get("cookie");
            if (cookie)
              opts.headers.set("cookie", cookie);
          }
          opts.headers.delete("connection");
          const external_request = new Request(requested, opts);
          response = await options.hooks.externalFetch.call(null, external_request);
        }
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          new_cookies.push(...splitCookiesString_1(set_cookie).map((str) => parseString_1(str)));
        }
        const proxy = new Proxy(response, {
          get(response2, key2, _receiver) {
            async function text() {
              const body = await response2.text();
              const headers = {};
              for (const [key3, value] of response2.headers) {
                if (key3 !== "set-cookie" && key3 !== "etag") {
                  headers[key3] = value;
                }
              }
              if (!opts.body || typeof opts.body === "string") {
                const status_number = Number(response2.status);
                if (isNaN(status_number)) {
                  throw new Error(`response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`);
                }
                fetched.push({
                  url: requested,
                  body: opts.body,
                  response: {
                    status: status_number,
                    statusText: response2.statusText,
                    headers,
                    body
                  }
                });
              }
              if (dependency) {
                dependency.body = body;
              }
              return body;
            }
            if (key2 === "arrayBuffer") {
              return async () => {
                const buffer = await response2.arrayBuffer();
                if (dependency) {
                  dependency.body = new Uint8Array(buffer);
                }
                return buffer;
              };
            }
            if (key2 === "text") {
              return text;
            }
            if (key2 === "json") {
              return async () => {
                return JSON.parse(await text());
              };
            }
            return Reflect.get(response2, key2, response2);
          }
        });
        return proxy;
      },
      stuff: { ...stuff },
      status: (is_error ? status : shadow.status) ?? null,
      error: is_error ? error2 ?? null : null
    };
    if (options.dev) {
      Object.defineProperty(load_input, "page", {
        get: () => {
          throw new Error("`page` in `load` functions has been replaced by `url` and `params`");
        }
      });
    }
    loaded = normalize(await module.load.call(null, load_input));
  } else if (shadow.body) {
    loaded = {
      props: shadow.body
    };
  } else {
    loaded = {};
  }
  loaded.status = loaded.status ?? shadow.status;
  if (shadow.body && state.prerendering) {
    const pathname = `${event.url.pathname.replace(/\/$/, "")}/__data.json`;
    const dependency = {
      response: new Response(void 0),
      body: JSON.stringify(shadow.body)
    };
    state.prerendering.dependencies.set(pathname, dependency);
  }
  return {
    node,
    props: shadow.body,
    loaded,
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers: new_cookies.map((new_cookie) => {
      const { name, value, ...options2 } = new_cookie;
      return serialize_1(name, value, options2);
    }),
    uses_credentials
  };
}
async function load_shadow_data(route, event, options, prerender) {
  if (!route.shadow)
    return {};
  try {
    const mod = await route.shadow();
    check_method_names(mod);
    if (prerender && (mod.POST || mod.PUT || mod.DELETE || mod.PATCH)) {
      throw new Error("Cannot prerender pages that have endpoints with mutative methods");
    }
    const { method } = event.request;
    const is_get = method === "HEAD" || method === "GET";
    const handler2 = method === "HEAD" ? mod.HEAD || mod.GET : mod[method];
    if (!handler2 && !is_get) {
      return {
        status: 405,
        error: new Error(`${method} method not allowed`)
      };
    }
    const data = {
      status: void 0,
      cookies: [],
      body: {}
    };
    if (!is_get) {
      const { status, headers, body } = validate_shadow_output(await handler2(event));
      add_cookies(data.cookies, headers);
      data.status = status;
      if (body instanceof Error) {
        if (status < 400) {
          data.status = 500;
          data.error = new Error("A non-error status code was returned with an error body");
        } else {
          data.error = body;
        }
        return data;
      }
      if (status >= 300 && status < 400) {
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = body;
    }
    const get = method === "HEAD" && mod.HEAD || mod.GET;
    if (get) {
      const { status, headers, body } = validate_shadow_output(await get(event));
      add_cookies(data.cookies, headers);
      if (body instanceof Error) {
        if (status < 400) {
          data.status = 500;
          data.error = new Error("A non-error status code was returned with an error body");
        } else {
          data.status = status;
          data.error = body;
        }
        return data;
      }
      if (status >= 400) {
        data.status = status;
        data.error = new Error("Failed to load data");
        return data;
      }
      if (status >= 300) {
        data.status = status;
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = { ...body, ...data.body };
    }
    return data;
  } catch (e) {
    const error2 = coalesce_to_error(e);
    options.handle_error(error2, event);
    return {
      status: 500,
      error: error2
    };
  }
}
function add_cookies(target, headers) {
  const cookies = headers["set-cookie"];
  if (cookies) {
    if (Array.isArray(cookies)) {
      target.push(...cookies);
    } else {
      target.push(cookies);
    }
  }
}
function validate_shadow_output(result) {
  if (result.fallthrough) {
    throw new Error("fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching");
  }
  const { status = 200, body = {} } = result;
  let headers = result.headers || {};
  if (headers instanceof Headers) {
    if (headers.has("set-cookie")) {
      throw new Error("Endpoint request handler cannot use Headers interface with Set-Cookie headers");
    }
  } else {
    headers = lowercase_keys(headers);
  }
  if (!is_pojo(body)) {
    throw new Error("Body returned from endpoint request handler must be a plain object or an Error");
  }
  return { status, headers, body };
}
async function respond_with_error({
  event,
  options,
  state,
  $session,
  status,
  error: error2,
  resolve_opts
}) {
  try {
    const branch = [];
    let stuff = {};
    if (resolve_opts.ssr) {
      const default_layout = await options.manifest._.nodes[0]();
      const default_error = await options.manifest._.nodes[1]();
      const layout_loaded = await load_node({
        event,
        options,
        state,
        route: GENERIC_ERROR,
        node: default_layout,
        $session,
        stuff: {},
        is_error: false,
        is_leaf: false
      });
      if (layout_loaded.loaded.error) {
        throw layout_loaded.loaded.error;
      }
      const error_loaded = await load_node({
        event,
        options,
        state,
        route: GENERIC_ERROR,
        node: default_error,
        $session,
        stuff: layout_loaded ? layout_loaded.stuff : {},
        is_error: true,
        is_leaf: false,
        status,
        error: error2
      });
      branch.push(layout_loaded, error_loaded);
      stuff = error_loaded.stuff;
    }
    return await render_response({
      options,
      state,
      $session,
      page_config: {
        hydrate: options.hydrate,
        router: options.router
      },
      stuff,
      status,
      error: error2,
      branch,
      event,
      resolve_opts
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return new Response(error3.stack, {
      status: 500
    });
  }
}
async function respond$1(opts) {
  const { event, options, state, $session, route, resolve_opts } = opts;
  let nodes;
  if (!resolve_opts.ssr) {
    return await render_response({
      ...opts,
      branch: [],
      page_config: {
        hydrate: true,
        router: true
      },
      status: 200,
      error: null,
      event,
      stuff: {}
    });
  }
  try {
    nodes = await Promise.all(route.a.map((n) => n == void 0 ? n : options.manifest._.nodes[n]()));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return await respond_with_error({
      event,
      options,
      state,
      $session,
      status: 500,
      error: error3,
      resolve_opts
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options);
  if (state.prerendering) {
    const should_prerender = leaf.prerender ?? options.prerender.default;
    if (!should_prerender) {
      return new Response(void 0, {
        status: 204
      });
    }
  }
  let branch = [];
  let status = 200;
  let error2 = null;
  let set_cookie_headers = [];
  let stuff = {};
  ssr: {
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      let loaded;
      if (node) {
        try {
          loaded = await load_node({
            ...opts,
            node,
            stuff,
            is_error: false,
            is_leaf: i === nodes.length - 1
          });
          set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
          if (loaded.loaded.redirect) {
            return with_cookies(new Response(void 0, {
              status: loaded.loaded.status,
              headers: {
                location: loaded.loaded.redirect
              }
            }), set_cookie_headers);
          }
          if (loaded.loaded.error) {
            error2 = loaded.loaded.error;
            status = loaded.loaded.status ?? 500;
          }
        } catch (err) {
          const e = coalesce_to_error(err);
          options.handle_error(e, event);
          status = 500;
          error2 = e;
        }
        if (loaded && !error2) {
          branch.push(loaded);
        }
        if (error2) {
          while (i--) {
            if (route.b[i]) {
              const index4 = route.b[i];
              const error_node = await options.manifest._.nodes[index4]();
              let node_loaded;
              let j = i;
              while (!(node_loaded = branch[j])) {
                j -= 1;
              }
              try {
                const error_loaded = await load_node({
                  ...opts,
                  node: error_node,
                  stuff: node_loaded.stuff,
                  is_error: true,
                  is_leaf: false,
                  status,
                  error: error2
                });
                if (error_loaded.loaded.error) {
                  continue;
                }
                page_config = get_page_config(error_node.module, options);
                branch = branch.slice(0, j + 1).concat(error_loaded);
                stuff = { ...node_loaded.stuff, ...error_loaded.stuff };
                break ssr;
              } catch (err) {
                const e = coalesce_to_error(err);
                options.handle_error(e, event);
                continue;
              }
            }
          }
          return with_cookies(await respond_with_error({
            event,
            options,
            state,
            $session,
            status,
            error: error2,
            resolve_opts
          }), set_cookie_headers);
        }
      }
      if (loaded && loaded.loaded.stuff) {
        stuff = {
          ...stuff,
          ...loaded.loaded.stuff
        };
      }
    }
  }
  try {
    return with_cookies(await render_response({
      ...opts,
      stuff,
      event,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    }), set_cookie_headers);
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return with_cookies(await respond_with_error({
      ...opts,
      status: 500,
      error: error3
    }), set_cookie_headers);
  }
}
function get_page_config(leaf, options) {
  if ("ssr" in leaf) {
    throw new Error("`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs/hooks#handle");
  }
  return {
    router: "router" in leaf ? !!leaf.router : options.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    set_cookie_headers.forEach((value) => {
      response.headers.append("set-cookie", value);
    });
  }
  return response;
}
async function render_page(event, route, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (route.shadow) {
    const type = negotiate(event.request.headers.get("accept") || "text/html", [
      "text/html",
      "application/json"
    ]);
    if (type === "application/json") {
      return render_endpoint(event, await route.shadow(), options);
    }
  }
  const $session = await options.hooks.getSession(event);
  return respond$1({
    event,
    options,
    state,
    $session,
    resolve_opts,
    route
  });
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
var DATA_SUFFIX = "/__data.json";
var default_transform = ({ html }) => html;
async function respond(request, options, state) {
  var _a, _b, _c, _d;
  let url = new URL(request.url);
  const { parameter, allowed } = options.method_override;
  const method_override = (_a = url.searchParams.get(parameter)) == null ? void 0 : _a.toUpperCase();
  if (method_override) {
    if (request.method === "POST") {
      if (allowed.includes(method_override)) {
        request = new Proxy(request, {
          get: (target, property, _receiver) => {
            if (property === "method")
              return method_override;
            return Reflect.get(target, property, target);
          }
        });
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body, {
          status: 400
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request) {
    const data_suffix_length = DATA_SUFFIX.length - (options.trailing_slash === "always" ? 1 : 0);
    decoded = decoded.slice(0, -data_suffix_length) || "/";
    url = new URL(url.origin + url.pathname.slice(0, -data_suffix_length) + url.search);
  }
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if (route) {
    if (route.type === "page") {
      const normalized = normalize_path(url.pathname, options.trailing_slash);
      if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
          }
        });
      }
    } else if (is_data_request) {
      return new Response(void 0, {
        status: 404
      });
    }
  }
  const event = {
    get clientAddress() {
      if (!state.getClientAddress) {
        throw new Error(`${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`);
      }
      Object.defineProperty(event, "clientAddress", {
        value: state.getClientAddress()
      });
      return event.clientAddress;
    },
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error("To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details);
    }
  };
  Object.defineProperties(event, {
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    ssr: true,
    transformPage: default_transform
  };
  try {
    const response = await options.hooks.handle({
      event,
      resolve: async (event2, opts) => {
        var _a2;
        if (opts) {
          resolve_opts = {
            ssr: opts.ssr !== false,
            transformPage: opts.transformPage || default_transform
          };
        }
        if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
          return await render_response({
            event: event2,
            options,
            state,
            $session: await options.hooks.getSession(event2),
            page_config: { router: true, hydrate: true },
            stuff: {},
            status: 200,
            error: null,
            branch: [],
            resolve_opts: {
              ...resolve_opts,
              ssr: false
            }
          });
        }
        if (route) {
          let response2;
          if (is_data_request && route.type === "page" && route.shadow) {
            response2 = await render_endpoint(event2, await route.shadow(), options);
            if (request.headers.has("x-sveltekit-load")) {
              if (response2.status >= 300 && response2.status < 400) {
                const location2 = response2.headers.get("location");
                if (location2) {
                  const headers = new Headers(response2.headers);
                  headers.set("x-sveltekit-location", location2);
                  response2 = new Response(void 0, {
                    status: 204,
                    headers
                  });
                }
              }
            }
          } else {
            response2 = route.type === "endpoint" ? await render_endpoint(event2, await route.load(), options) : await render_page(event2, route, options, state, resolve_opts);
          }
          if (response2) {
            if (response2.status === 200 && response2.headers.has("etag")) {
              let if_none_match_value = request.headers.get("if-none-match");
              if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
                if_none_match_value = if_none_match_value.substring(2);
              }
              const etag = response2.headers.get("etag");
              if (if_none_match_value === etag) {
                const headers = new Headers({ etag });
                for (const key2 of [
                  "cache-control",
                  "content-location",
                  "date",
                  "expires",
                  "vary"
                ]) {
                  const value = response2.headers.get(key2);
                  if (value)
                    headers.set(key2, value);
                }
                return new Response(void 0, {
                  status: 304,
                  headers
                });
              }
            }
            return response2;
          }
        }
        if (state.initiator === GENERIC_ERROR) {
          return new Response("Internal Server Error", {
            status: 500
          });
        }
        if (!state.initiator) {
          const $session = await options.hooks.getSession(event2);
          return await respond_with_error({
            event: event2,
            options,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${event2.url.pathname}`),
            resolve_opts
          });
        }
        if (state.prerendering) {
          return new Response("not found", { status: 404 });
        }
        return await fetch(request);
      },
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response && !(response instanceof Response)) {
      throw new Error("handle must return a Response object" + details);
    }
    return response;
  } catch (e) {
    const error2 = coalesce_to_error(e);
    options.handle_error(error2, event);
    const type = negotiate(event.request.headers.get("accept") || "text/html", [
      "text/html",
      "application/json"
    ]);
    if (is_data_request || type === "application/json") {
      return new Response(serialize_error(error2, options.get_stack), {
        status: 500,
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }
    try {
      const $session = await options.hooks.getSession(event);
      return await respond_with_error({
        event,
        options,
        state,
        $session,
        status: 500,
        error: error2,
        resolve_opts
      });
    } catch (e2) {
      const error3 = coalesce_to_error(e2);
      return new Response(options.dev ? error3.stack : error3.message, {
        status: 500
      });
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" preload />\n	</head>\n	<body>\n		<div>' + body + "</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      dev: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks: null,
      hydrate: true,
      manifest: manifest2,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      prefix: assets + "/",
      prerender: {
        default: false,
        enabled: true
      },
      read,
      root: Root,
      service_worker: null,
      router: true,
      template,
      template_contains_nonce: false,
      trailing_slash: "never"
    };
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks_bced8853(), hooks_bced8853_exports));
      this.options.hooks = {
        getSession: module.getSession || (() => ({})),
        handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        externalFetch: module.externalFetch || fetch
      };
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/netlify-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["logo.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-18dba222.js", "imports": ["_app/immutable/start-18dba222.js", "_app/immutable/chunks/index-3a72baaa.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appDir}/`;
function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url.pathname.replace(/\/$/, "");
  let file4 = pathname.substring(1);
  try {
    file4 = decodeURIComponent(file4);
  } catch (err) {
  }
  return manifest.assets.has(file4) || manifest.assets.has(file4 + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! UIkit 3.15.1 | https://www.getuikit.com | (c) 2014 - 2022 YOOtheme | MIT License */
//# sourceMappingURL=render.js.map
