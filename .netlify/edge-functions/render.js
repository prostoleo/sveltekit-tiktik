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

// .svelte-kit/output/server/_app/immutable/chunks/index-e8b863ad.js
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
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e2 = document.createEvent("CustomEvent");
  e2.initCustomEvent(type, bubbles, cancelable, detail);
  return e2;
}
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape2(value, is_attr = false) {
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
  const assignment = boolean && value === true ? "" : `="${escape2(value, true)}"`;
  return ` ${name}${assignment}`;
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_index_e8b863ad = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/index-e8b863ad.js"() {
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

// .svelte-kit/output/server/_app/immutable/chunks/constants-131a883b.js
var topics;
var init_constants_131a883b = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/constants-131a883b.js"() {
    topics = [
      {
        name: "coding",
        type: "mdi",
        icon: "i-mdi-code-braces-box",
        iconComponent: "IconCodeBracesBox"
      },
      {
        name: "comedy",
        type: "mdi",
        icon: "i-mdi-emoticon-cool",
        iconComponent: "IconEmoticonCool"
      },
      {
        name: "gaming",
        type: "mdi",
        icon: "i-mdi-gamepad-variant",
        iconComponent: "IconGamepadVariant"
      },
      {
        name: "food",
        type: "mdi",
        icon: "i-mdi-food",
        iconComponent: "IconFood"
      },
      {
        name: "dance",
        type: "mdi",
        icon: "i-mdi-dance-pole",
        iconComponent: "IconDancePole"
      },
      {
        name: "beauty",
        type: "mdi",
        icon: "i-mdi-lipstick",
        iconComponent: "IconLipstick"
      },
      {
        name: "animals",
        type: "mdi",
        icon: "i-mdi-paw",
        iconComponent: "IconPaw"
      },
      {
        name: "sports",
        type: "mdi",
        icon: "i-mdi-medal",
        iconComponent: "IconMedal"
      }
    ];
  }
});

// .svelte-kit/output/server/_app/immutable/chunks/stores-b2c4a4bd.js
var getStores, page;
var init_stores_b2c4a4bd = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/stores-b2c4a4bd.js"() {
    init_index_e8b863ad();
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
  }
});

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key2 in source) {
      target[key2] = source[key2];
    }
  }
  return target;
}
function init2(converter, defaultAttributes) {
  function set(key2, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    key2 = encodeURIComponent(key2).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = key2 + "=" + converter.write(value, key2) + stringifiedAttributes;
  }
  function get(key2) {
    if (typeof document === "undefined" || arguments.length && !key2) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var foundKey = decodeURIComponent(parts[0]);
        jar[foundKey] = converter.read(value, foundKey);
        if (key2 === foundKey) {
          break;
        }
      } catch (e2) {
      }
    }
    return key2 ? jar[key2] : jar;
  }
  return Object.create({
    set,
    get,
    remove: function(key2, attributes) {
      set(key2, "", assign({}, attributes, {
        expires: -1
      }));
    },
    withAttributes: function(attributes) {
      return init2(this.converter, assign({}, this.attributes, attributes));
    },
    withConverter: function(converter2) {
      return init2(assign({}, this.converter, converter2), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(defaultAttributes) },
    converter: { value: Object.freeze(converter) }
  });
}
var defaultConverter, api, js_cookie_default;
var init_js_cookie = __esm({
  "node_modules/js-cookie/dist/js.cookie.mjs"() {
    defaultConverter = {
      read: function(value) {
        if (value[0] === '"') {
          value = value.slice(1, -1);
        }
        return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
      },
      write: function(value) {
        return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
      }
    };
    api = init2(defaultConverter, { path: "/" });
    js_cookie_default = api;
  }
});

// node_modules/jwt-decode/build/jwt-decode.esm.js
function e(e2) {
  this.message = e2;
}
function t(e2) {
  var t2 = e2.replace(/-/g, "+").replace(/_/g, "/");
  switch (t2.length % 4) {
    case 0:
      break;
    case 2:
      t2 += "==";
      break;
    case 3:
      t2 += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }
  try {
    return function(e3) {
      return decodeURIComponent(r(e3).replace(/(.)/g, function(e4, r2) {
        var t3 = r2.charCodeAt(0).toString(16).toUpperCase();
        return t3.length < 2 && (t3 = "0" + t3), "%" + t3;
      }));
    }(t2);
  } catch (e3) {
    return r(t2);
  }
}
function n(e2) {
  this.message = e2;
}
function o(e2, r2) {
  if ("string" != typeof e2)
    throw new n("Invalid token specified");
  var o2 = true === (r2 = r2 || {}).header ? 0 : 1;
  try {
    return JSON.parse(t(e2.split(".")[o2]));
  } catch (e3) {
    throw new n("Invalid token specified: " + e3.message);
  }
}
var r, jwt_decode_esm_default;
var init_jwt_decode_esm = __esm({
  "node_modules/jwt-decode/build/jwt-decode.esm.js"() {
    e.prototype = new Error(), e.prototype.name = "InvalidCharacterError";
    r = "undefined" != typeof window && window.atob && window.atob.bind(window) || function(r2) {
      var t2 = String(r2).replace(/=+$/, "");
      if (t2.length % 4 == 1)
        throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
      for (var n2, o2, a = 0, i = 0, c = ""; o2 = t2.charAt(i++); ~o2 && (n2 = a % 4 ? 64 * n2 + o2 : o2, a++ % 4) ? c += String.fromCharCode(255 & n2 >> (-2 * a & 6)) : 0)
        o2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o2);
      return c;
    };
    n.prototype = new Error(), n.prototype.name = "InvalidTokenError";
    jwt_decode_esm_default = o;
  }
});

// .svelte-kit/output/server/_app/immutable/chunks/user-efb777b8.js
function writable2(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue2.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue2.length; i += 2) {
            subscriber_queue2[i][0](subscriber_queue2[i + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
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
function createOrGetUser(response) {
  const userData = jwt_decode_esm_default(response.credential);
  const { name, picture, sub } = userData;
  const userSanity = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture
  };
  user.set(userSanity);
  return get_store_value(user);
}
function setUser(userInfo) {
  if (!userInfo) {
    return;
  }
  user.set(userInfo);
}
function clearUser() {
  user.set(null);
  setIsLoginFalse();
}
function setUserFromCookieUser(userInfo) {
  if (!userInfo)
    return;
  setUser(userInfo);
}
function setIsLoginFalse() {
  isLogin.set(false);
}
var subscriber_queue2, user, allUsers, isLogin;
var init_user_efb777b8 = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/user-efb777b8.js"() {
    init_index_e8b863ad();
    init_jwt_decode_esm();
    subscriber_queue2 = [];
    user = writable2(null);
    allUsers = writable2(null);
    isLogin = writable2(false);
  }
});

// .svelte-kit/output/server/entries/pages/__layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
var Discover, Sidebar, Navbar, _layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/__layout.svelte.js"() {
    init_index_e8b863ad();
    init_constants_131a883b();
    init_stores_b2c4a4bd();
    init_js_cookie();
    init_jwt_decode_esm();
    init_user_efb777b8();
    Discover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let topic;
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let iconEl;
      topic = ($page === null || $page === void 0 ? void 0 : $page.params.id) || null;
      $$unsubscribe_page();
      return `<div class="${"pb-6 xl:border-b-2 xl:border-gray-200"}"><p class="${"font-semibold text-gray-500 m-3 mt-4 hidden xl:block"}">Popular topics</p>
	
	<div class="${"hidden"}"><div class="${"i-mdi-code-braces-box"}"></div>
		<div class="${"i-mdi-emoticon-cool"}"></div>
		<div class="${"i-mdi-gamepad-variant"}"></div>
		<div class="${"i-mdi-food"}"></div>
		<div class="${"i-mdi-dance-pole"}"></div>
		<div class="${"i-mdi-lipstick"}"></div>
		<div class="${"i-mdi-paw"}"></div>
		<div class="${"i-mdi-medal"}"></div></div>

	<div class="${"flex gap-3 flex-wrap"}"${add_attribute("this", iconEl, 0)}>${each(topics, (item) => {
        return `
			
			<a${add_attribute("href", `/topic/${item.name}`, 0)}><div class="${[
          "p-3 rounded flex items-center justify-center gap-2 cursor-pointer text-black xl:border-2 xl:border-gray-300 xl:rounded-full hover:bg-primary-bg",
          (topic === item.name ? "!border-accent" : "") + " " + (topic === item.name ? "!text-accent" : "")
        ].join(" ").trim()}">
					
					<div data-icon${add_attribute("class", `font-bold text-2xl xl:text-md ${item.icon}`, 0)}></div>
					
					
					
					<span class="${"font-medium text-md capitalize hidden xl:block"}">${escape2(item.name)}
					</span></div>
			</a>`;
      })}</div></div>`;
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
    Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let userCookie;
      let $user, $$unsubscribe_user;
      let $$unsubscribe_page;
      $$unsubscribe_user = subscribe(user, (value) => $user = value);
      $$unsubscribe_page = subscribe(page, (value) => value);
      let loaded = false;
      function handleChangeCookie(userInfo) {
        if (userInfo) {
          setUserFromCookieUser(JSON.parse(userInfo));
        } else {
          clearUser();
        }
      }
      function setCookie2(userInfo) {
        js_cookie_default.set("tiktik-user", JSON.stringify(userInfo));
      }
      function setGoogleLoadedTrue() {
        loaded = true;
      }
      async function handleLogin(googleResponse) {
        try {
          const user2 = createOrGetUser(googleResponse);
          const response = await fetch(`/api/auth`, {
            method: "POST",
            body: JSON.stringify(user2)
          }).then((res) => res.json());
          if (!response.ok) {
            throw new Error(`\u043E\u0448\u0438\u0431\u043A\u0430`);
          }
          setCookie2(user2);
        } catch (error2) {
          setIsLoginFalse();
        }
      }
      let searchQuery = "";
      userCookie = js_cookie_default.get("tiktik-user");
      {
        handleChangeCookie(userCookie);
      }
      {
        if (loaded) {
          let renderGoogleBtn = function() {
            google === null || google === void 0 ? void 0 : google.accounts.id.renderButton(document.getElementById("buttonDiv"), { theme: "outline", size: "large" });
          }, handleGoogleLogin = function() {
            google === null || google === void 0 ? void 0 : google.accounts.id.initialize({
              client_id: "1063160462511-ir3tajlk2kht73u7djsdgc7o7rfq1i4l.apps.googleusercontent.com",
              callback: handleLogin
            });
            renderGoogleBtn();
          };
          handleGoogleLogin();
          if (!$user) {
            setTimeout(renderGoogleBtn, 0);
          }
        }
      }
      $$unsubscribe_user();
      $$unsubscribe_page();
      return `${$$result.head += `<script src="${"https://accounts.google.com/gsi/client"}" defer${add_attribute("onload", setGoogleLoadedTrue(), 0)} data-svelte="svelte-qskcco"><\/script>`, ""}

<header class="${"w-full flex justify-between items-center border-b-2 border-b-gray-200 py-2 px-4 overflow-hidden"}"><a href="${"/"}"><div class="${"w-24 md:w-28"}">
			<img class="${"cursor-pointer"}" src="${"/logo.png"}" alt="${"TikTik logo"}"></div></a>
	
	<div class="${"relative"}">
		<form class="${"absolute md:static top-10 -left-20 bg-white inline-flex items-center"}"><input type="${"text"}" class="${"bg-primary-bg p-3 font-medium border-2 border-gray-100 rounded-lg focus:border-accent/50 focus:outline-none md:top-0"}" placeholder="${"Search accounts and videos"}"${add_attribute("value", searchQuery, 0)}>
			<button aria-label="${"Search accounts and videos"}" class="${"right-6 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"}"><div class="${"i-mdi-magnify"}"></div></button></form></div>

	<div>${$user ? `
			<div><div class="${"flex gap-5 items-center md:gap-10"}"><a href="${"/upload"}"><button class="${"border-2 px-2 text-md font-semibold flex items-center gap-2 md:px-4"}"><div class="${"i-mdi-plus text-xl"}"></div>
							<span class="${"hidden md:block"}">Upload</span></button></a>
					
					
					${$user.image ? `
						<a class="${"block w-full h-full"}" href="${"/"}"><img class="${"block object-cover rounded-full aspect-square w-10 h-10 cursor-pointer"}"${add_attribute("src", $user.image, 0)}${add_attribute("alt", `photo of ${$user.userName}'s profile`, 0)}>
							
							</a>` : ``}
					
					<button class="${"px-2"}" type="${"button"}"><div class="${"i-mdi-logout text-red-400 text-2xl"}"></div></button>

					</div></div>
			` : `<div><button id="${"buttonDiv"}"></button></div>`}</div></header>`;
    });
    _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="${"website-wrapper"}"><div class="${"m-auto overflow-hidden h-screen xl:w-7xl"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
		<main class="${"flex gap-6 md:(gap-20)"}"><div class="${"h-[90vh] overflow-hidden overflow-y-auto"}">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>
			<div class="${"mt-4 flex flex-col gap-10 overflow-auto h-[88vh] flex-1 videos"}">${slots.default ? slots.default({}) : ``}</div></main></div></div>`;
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
    file = "_app/immutable/pages/__layout.svelte-3ea1f8d3.js";
    imports = ["_app/immutable/pages/__layout.svelte-3ea1f8d3.js", "_app/immutable/chunks/index-db28f1ac.js", "_app/immutable/chunks/navigation-7f0d9bcc.js", "_app/immutable/chunks/singletons-eca981c1.js", "_app/immutable/chunks/stores-7718f57e.js", "_app/immutable/chunks/user-7308f3fc.js", "_app/immutable/chunks/index-7f4ad20e.js"];
    stylesheets = ["_app/immutable/assets/__layout-81028054.css"];
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
    init_index_e8b863ad();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { status } = $$props;
      let { error: error2 } = $$props;
      if ($$props.status === void 0 && $$bindings.status && status !== void 0)
        $$bindings.status(status);
      if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
        $$bindings.error(error2);
      return `<h1>${escape2(status)}</h1>

<pre>${escape2(error2.message)}</pre>



${error2.frame ? `<pre>${escape2(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape2(error2.stack)}</pre>` : ``}`;
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
    file2 = "_app/immutable/error.svelte-450e0baa.js";
    imports2 = ["_app/immutable/error.svelte-450e0baa.js", "_app/immutable/chunks/index-db28f1ac.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/_app/immutable/chunks/VideoCard-23c966d0.js
var NoResults, VideoCard;
var init_VideoCard_23c966d0 = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/VideoCard-23c966d0.js"() {
    init_index_e8b863ad();
    NoResults = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { text } = $$props;
      if ($$props.text === void 0 && $$bindings.text && text !== void 0)
        $$bindings.text(text);
      return `<div class="${"flex flex-col justify-center items-center h-full w-full"}"><p class="${"text-6xl"}">
		${text.toLowerCase().includes("comment") ? `
			<div class="${"i-mdi-comment-off"}"></div>` : `
			<div class="${"i-mdi-video-off"}"></div>`}</p>
	<p class="${"text-2xl text-center"}">${escape2(text)}</p></div>`;
    });
    VideoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      let { post } = $$props;
      let videoRef;
      if ($$props.post === void 0 && $$bindings.post && post !== void 0)
        $$bindings.post(post);
      return `<div class="${"flex flex-col border-b-2 border-gray-200 pb-6"}"><div><div class="${"flex gap-3 p-2 cursor-pointer font-semibold rounded"}"><div class="${"w-10 h-10 md:w-16 md:h-16"}"><a class="${"block w-full h-full"}"${add_attribute("href", `/profile/${(_a = post == null ? void 0 : post.postedBy) == null ? void 0 : _a._id}`, 0)}><img${add_attribute("src", (_b = post == null ? void 0 : post.postedBy) == null ? void 0 : _b.image, 0)} class="${"block w-full h-full object-cover rounded-full aspect-square"}"${add_attribute("alt", `photo of ${(_c = post == null ? void 0 : post.postedBy) == null ? void 0 : _c.userName}'s profile`, 0)}>
					
					</a></div>
			<div><a${add_attribute("href", `/profile/${(_d = post == null ? void 0 : post.postedBy) == null ? void 0 : _d._id}`, 0)}><div class="${"flex items-center gap-2"}"><p class="${"flex gap-2 items-center font-bold text-primary md:text-md"}">${escape2((_e = post == null ? void 0 : post.postedBy) == null ? void 0 : _e.userName)}
							</p>
						<p class="${"capitalize font-medium text-xs text-gray-500 hidden md:block"}">${escape2((_f = post == null ? void 0 : post.postedBy) == null ? void 0 : _f.userName)}</p></div></a></div></div></div>

	<div class="${"lg:ml-20 flex gap-4 relative"}"><div class="${"rounded-3xl relative"}"><a${add_attribute("href", `/details/${post == null ? void 0 : post._id}`, 0)}><video class="${"h-[300px] w-[200px] rounded-2xl cursor-pointer bg-gray-100 md:h-[400px] lg:w-[600px] lg:h-[530px]"}" loop${add_attribute("src", (_h = (_g = post == null ? void 0 : post.video) == null ? void 0 : _g.asset) == null ? void 0 : _h.url, 0)}${add_attribute("this", videoRef, 0)}></video></a>
			${``}</div></div></div>`;
    });
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
    init_index_e8b863ad();
    init_VideoCard_23c966d0();
    Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { posts } = $$props;
      let dataToShow = posts;
      if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
        $$bindings.posts(posts);
      return `



${dataToShow.length > 0 ? `
	${each(dataToShow, (post) => {
        return `${validate_component(VideoCard, "VideoCard").$$render($$result, { post }, {}, {})}`;
      })}` : `
	${validate_component(NoResults, "NoResults").$$render($$result, { text: `no results found` }, {}, {})}`}

`;
    });
  }
});

// .svelte-kit/output/server/nodes/3.js
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
  ".svelte-kit/output/server/nodes/3.js"() {
    init_index_svelte();
    index3 = 3;
    file3 = "_app/immutable/pages/index.svelte-621b36ba.js";
    imports3 = ["_app/immutable/pages/index.svelte-621b36ba.js", "_app/immutable/chunks/index-db28f1ac.js", "_app/immutable/chunks/VideoCard-180f1723.js", "_app/immutable/chunks/NoResults-03348de5.js"];
    stylesheets3 = [];
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key2 in from) {
          if (hasOwnProperty.call(from, key2)) {
            to[key2] = from[key2];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/rxjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/rxjs/internal/util/isFunction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isFunction(x) {
      return typeof x === "function";
    }
    exports.isFunction = isFunction;
  }
});

// node_modules/rxjs/internal/config.js
var require_config = __commonJS({
  "node_modules/rxjs/internal/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error2 = new Error();
          console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + error2.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log("RxJS: Back to a better error behavior. Thank you. <3");
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }
    };
  }
});

// node_modules/rxjs/internal/util/hostReportError.js
var require_hostReportError = __commonJS({
  "node_modules/rxjs/internal/util/hostReportError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function hostReportError(err) {
      setTimeout(function() {
        throw err;
      }, 0);
    }
    exports.hostReportError = hostReportError;
  }
});

// node_modules/rxjs/internal/Observer.js
var require_Observer = __commonJS({
  "node_modules/rxjs/internal/Observer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    exports.empty = {
      closed: true,
      next: function(value) {
      },
      error: function(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function() {
      }
    };
  }
});

// node_modules/rxjs/internal/util/isArray.js
var require_isArray = __commonJS({
  "node_modules/rxjs/internal/util/isArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArray = function() {
      return Array.isArray || function(x) {
        return x && typeof x.length === "number";
      };
    }();
  }
});

// node_modules/rxjs/internal/util/isObject.js
var require_isObject = __commonJS({
  "node_modules/rxjs/internal/util/isObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isObject(x) {
      return x !== null && typeof x === "object";
    }
    exports.isObject = isObject;
  }
});

// node_modules/rxjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "node_modules/rxjs/internal/util/UnsubscriptionError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UnsubscriptionErrorImpl = function() {
      function UnsubscriptionErrorImpl2(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
        return this;
      }
      UnsubscriptionErrorImpl2.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl2;
    }();
    exports.UnsubscriptionError = UnsubscriptionErrorImpl;
  }
});

// node_modules/rxjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "node_modules/rxjs/internal/Subscription.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var isArray_1 = require_isArray();
    var isObject_1 = require_isObject();
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var Subscription = function() {
      function Subscription2(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
          this._ctorUnsubscribe = true;
          this._unsubscribe = unsubscribe;
        }
      }
      Subscription2.prototype.unsubscribe = function() {
        var errors;
        if (this.closed) {
          return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription2) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index9 = 0; index9 < _parentOrParents.length; ++index9) {
            var parent_1 = _parentOrParents[index9];
            parent_1.remove(this);
          }
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
          if (_ctorUnsubscribe) {
            this._unsubscribe = void 0;
          }
          try {
            _unsubscribe.call(this);
          } catch (e2) {
            errors = e2 instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e2.errors) : [e2];
          }
        }
        if (isArray_1.isArray(_subscriptions)) {
          var index9 = -1;
          var len = _subscriptions.length;
          while (++index9 < len) {
            var sub = _subscriptions[index9];
            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e2) {
                errors = errors || [];
                if (e2 instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e2.errors));
                } else {
                  errors.push(e2);
                }
              }
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) {
          return Subscription2.EMPTY;
        }
        switch (typeof teardown) {
          case "function":
            subscription = new Subscription2(teardown);
          case "object":
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== "function") {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription2)) {
              var tmp = subscription;
              subscription = new Subscription2();
              subscription._subscriptions = [tmp];
            }
            break;
          default: {
            throw new Error("unrecognized teardown " + teardown + " added to Subscription.");
          }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription2) {
          if (_parentOrParents === this) {
            return subscription;
          }
          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }
        return subscription;
      };
      Subscription2.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);
          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };
      Subscription2.EMPTY = function(empty) {
        empty.closed = true;
        return empty;
      }(new Subscription2());
      return Subscription2;
    }();
    exports.Subscription = Subscription;
    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function(errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    }
  }
});

// node_modules/rxjs/internal/symbol/rxSubscriber.js
var require_rxSubscriber = __commonJS({
  "node_modules/rxjs/internal/symbol/rxSubscriber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rxSubscriber = function() {
      return typeof Symbol === "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    }();
    exports.$$rxSubscriber = exports.rxSubscriber;
  }
});

// node_modules/rxjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "node_modules/rxjs/internal/Subscriber.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var isFunction_1 = require_isFunction();
    var Observer_1 = require_Observer();
    var Subscription_1 = require_Subscription();
    var rxSubscriber_1 = require_rxSubscriber();
    var config_1 = require_config();
    var hostReportError_1 = require_hostReportError();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destinationOrNext, error2, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;
          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }
            if (typeof destinationOrNext === "object") {
              if (destinationOrNext instanceof Subscriber2) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }
              break;
            }
          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error2, complete);
            break;
        }
        return _this;
      }
      Subscriber2.prototype[rxSubscriber_1.rxSubscriber] = function() {
        return this;
      };
      Subscriber2.create = function(next, error2, complete) {
        var subscriber = new Subscriber2(next, error2, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };
      Subscriber2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (!this.isStopped) {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (this.closed) {
          return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
      };
      Subscriber2.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
      };
      Subscriber2.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(_parentSubscriber, observerOrNext, error2, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error2 = observerOrNext.error;
          complete = observerOrNext.complete;
          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);
            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error2;
        _this._complete = complete;
        return _this;
      }
      SafeSubscriber2.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;
          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.error = function(err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);
              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();
            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }
            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          if (this._complete) {
            var wrappedComplete = function() {
              return _this._complete.call(_this._context);
            };
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);
              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);
              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrUnsub = function(fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };
      SafeSubscriber2.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error("bad call");
        }
        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }
        return false;
      };
      SafeSubscriber2.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
      };
      return SafeSubscriber2;
    }(Subscriber);
    exports.SafeSubscriber = SafeSubscriber;
  }
});

// node_modules/rxjs/internal/util/canReportError.js
var require_canReportError = __commonJS({
  "node_modules/rxjs/internal/util/canReportError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function canReportError(observer) {
      while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }
      return true;
    }
    exports.canReportError = canReportError;
  }
});

// node_modules/rxjs/internal/util/toSubscriber.js
var require_toSubscriber = __commonJS({
  "node_modules/rxjs/internal/util/toSubscriber.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    var rxSubscriber_1 = require_rxSubscriber();
    var Observer_1 = require_Observer();
    function toSubscriber(nextOrObserver, error2, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }
      if (!nextOrObserver && !error2 && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }
      return new Subscriber_1.Subscriber(nextOrObserver, error2, complete);
    }
    exports.toSubscriber = toSubscriber;
  }
});

// node_modules/rxjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "node_modules/rxjs/internal/symbol/observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// node_modules/rxjs/internal/util/identity.js
var require_identity = __commonJS({
  "node_modules/rxjs/internal/util/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function identity(x) {
      return x;
    }
    exports.identity = identity;
  }
});

// node_modules/rxjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "node_modules/rxjs/internal/util/pipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    exports.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      };
    }
    exports.pipeFromArray = pipeFromArray;
  }
});

// node_modules/rxjs/internal/Observable.js
var require_Observable = __commonJS({
  "node_modules/rxjs/internal/Observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var canReportError_1 = require_canReportError();
    var toSubscriber_1 = require_toSubscriber();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var Observable = function() {
      function Observable2(subscribe2) {
        this._isScalar = false;
        if (subscribe2) {
          this._subscribe = subscribe2;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable = new Observable2();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error2, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error2, complete);
        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }
        return sink;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }
          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve2, reject) {
          var subscription;
          subscription = _this.subscribe(function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve2);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };
      Observable2.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
          return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve2, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve2(value);
          });
        });
      };
      Observable2.create = function(subscribe2) {
        return new Observable2(subscribe2);
      };
      return Observable2;
    }();
    exports.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }
      if (!promiseCtor) {
        throw new Error("no Promise impl found");
      }
      return promiseCtor;
    }
  }
});

// node_modules/rxjs/internal/operators/filter.js
var require_filter = __commonJS({
  "node_modules/rxjs/internal/operators/filter.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function filter(predicate, thisArg) {
      return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
      };
    }
    exports.filter = filter;
    var FilterOperator = function() {
      function FilterOperator2(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
      }
      FilterOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
      };
      return FilterOperator2;
    }();
    var FilterSubscriber = function(_super) {
      __extends(FilterSubscriber2, _super);
      function FilterSubscriber2(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
      }
      FilterSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        if (result) {
          this.destination.next(value);
        }
      };
      return FilterSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/rxjs/internal/operators/map.js
var require_map = __commonJS({
  "node_modules/rxjs/internal/operators/map.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (b2.hasOwnProperty(p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    var Subscriber_1 = require_Subscriber();
    function map(project, thisArg) {
      return function mapOperation(source) {
        if (typeof project !== "function") {
          throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        }
        return source.lift(new MapOperator(project, thisArg));
      };
    }
    exports.map = map;
    var MapOperator = function() {
      function MapOperator2(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
      }
      MapOperator2.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
      };
      return MapOperator2;
    }();
    exports.MapOperator = MapOperator;
    var MapSubscriber = function(_super) {
      __extends(MapSubscriber2, _super);
      function MapSubscriber2(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
      }
      MapSubscriber2.prototype._next = function(value) {
        var result;
        try {
          result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
          this.destination.error(err);
          return;
        }
        this.destination.next(result);
      };
      return MapSubscriber2;
    }(Subscriber_1.Subscriber);
  }
});

// node_modules/@sanity/client/lib/util/observable.js
var require_observable2 = __commonJS({
  "node_modules/@sanity/client/lib/util/observable.js"(exports, module) {
    "use strict";
    var _require = require_Observable();
    var Observable = _require.Observable;
    var _require2 = require_filter();
    var filter = _require2.filter;
    var _require3 = require_map();
    var map = _require3.map;
    module.exports = {
      Observable,
      filter,
      map
    };
  }
});

// node_modules/@sanity/client/lib/util/getSelection.js
var require_getSelection = __commonJS({
  "node_modules/@sanity/client/lib/util/getSelection.js"(exports, module) {
    "use strict";
    module.exports = function getSelection(sel) {
      if (typeof sel === "string" || Array.isArray(sel)) {
        return {
          id: sel
        };
      }
      if (sel && sel.query) {
        return "params" in sel ? {
          query: sel.query,
          params: sel.params
        } : {
          query: sel.query
        };
      }
      var selectionOpts = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join("\n");
      throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
    };
  }
});

// node_modules/@sanity/client/lib/validators.js
var require_validators = __commonJS({
  "node_modules/@sanity/client/lib/validators.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    var VALID_ASSET_TYPES = ["image", "file"];
    var VALID_INSERT_LOCATIONS = ["before", "after", "replace"];
    exports.dataset = function(name) {
      if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name)) {
        throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
      }
    };
    exports.projectId = function(id) {
      if (!/^[-a-z0-9]+$/i.test(id)) {
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
      }
    };
    exports.validateAssetType = function(type) {
      if (VALID_ASSET_TYPES.indexOf(type) === -1) {
        throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
      }
    };
    exports.validateObject = function(op, val) {
      if (val === null || _typeof(val) !== "object" || Array.isArray(val)) {
        throw new Error("".concat(op, "() takes an object of properties"));
      }
    };
    exports.requireDocumentId = function(op, doc) {
      if (!doc._id) {
        throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
      }
      exports.validateDocumentId(op, doc._id);
    };
    exports.validateDocumentId = function(op, id) {
      if (typeof id !== "string" || !/^[a-z0-9_.-]+$/i.test(id)) {
        throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
      }
    };
    exports.validateInsert = function(at, selector, items) {
      var signature = "insert(at, selector, items)";
      if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        var valid = VALID_INSERT_LOCATIONS.map(function(loc) {
          return '"'.concat(loc, '"');
        }).join(", ");
        throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
      }
      if (typeof selector !== "string") {
        throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
      }
      if (!Array.isArray(items)) {
        throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
      }
    };
    exports.hasDataset = function(config) {
      if (!config.dataset) {
        throw new Error("`dataset` must be provided to perform queries");
      }
      return config.dataset || "";
    };
    exports.requestTag = function(tag) {
      if (typeof tag !== "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) {
        throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
      }
      return tag;
    };
  }
});

// node_modules/@sanity/client/lib/data/patch.js
var require_patch = __commonJS({
  "node_modules/@sanity/client/lib/data/patch.js"(exports, module) {
    "use strict";
    function _defineProperty(obj, key2, value) {
      if (key2 in obj) {
        Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key2] = value;
      }
      return obj;
    }
    var assign2 = require_object_assign();
    var getSelection = require_getSelection();
    var validate2 = require_validators();
    var validateObject = validate2.validateObject;
    var validateInsert = validate2.validateInsert;
    function Patch(selection) {
      var operations = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var client = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      this.selection = selection;
      this.operations = assign2({}, operations);
      this.client = client;
    }
    assign2(Patch.prototype, {
      clone: function clone() {
        return new Patch(this.selection, assign2({}, this.operations), this.client);
      },
      set: function set(props) {
        return this._assign("set", props);
      },
      diffMatchPatch: function diffMatchPatch(props) {
        validateObject("diffMatchPatch", props);
        return this._assign("diffMatchPatch", props);
      },
      unset: function unset(attrs) {
        if (!Array.isArray(attrs)) {
          throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        }
        this.operations = assign2({}, this.operations, {
          unset: attrs
        });
        return this;
      },
      setIfMissing: function setIfMissing(props) {
        return this._assign("setIfMissing", props);
      },
      replace: function replace(props) {
        validateObject("replace", props);
        return this._set("set", {
          $: props
        });
      },
      inc: function inc(props) {
        return this._assign("inc", props);
      },
      dec: function dec(props) {
        return this._assign("dec", props);
      },
      insert: function insert(at, selector, items) {
        var _this$_assign;
        validateInsert(at, selector, items);
        return this._assign("insert", (_this$_assign = {}, _defineProperty(_this$_assign, at, selector), _defineProperty(_this$_assign, "items", items), _this$_assign));
      },
      append: function append(selector, items) {
        return this.insert("after", "".concat(selector, "[-1]"), items);
      },
      prepend: function prepend(selector, items) {
        return this.insert("before", "".concat(selector, "[0]"), items);
      },
      splice: function splice(selector, start, deleteCount, items) {
        var delAll = typeof deleteCount === "undefined" || deleteCount === -1;
        var startIndex = start < 0 ? start - 1 : start;
        var delCount = delAll ? -1 : Math.max(0, start + deleteCount);
        var delRange = startIndex < 0 && delCount >= 0 ? "" : delCount;
        var rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
        return this.insert("replace", rangeSelector, items || []);
      },
      ifRevisionId: function ifRevisionId(rev) {
        this.operations.ifRevisionID = rev;
        return this;
      },
      serialize: function serialize2() {
        return assign2(getSelection(this.selection), this.operations);
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (!this.client) {
          throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        var returnFirst = typeof this.selection === "string";
        var opts = assign2({
          returnFirst,
          returnDocuments: true
        }, options);
        return this.client.mutate({
          patch: this.serialize()
        }, opts);
      },
      reset: function reset() {
        this.operations = {};
        return this;
      },
      _set: function _set(op, props) {
        return this._assign(op, props, false);
      },
      _assign: function _assign(op, props) {
        var merge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        validateObject(op, props);
        this.operations = assign2({}, this.operations, _defineProperty({}, op, assign2({}, merge && this.operations[op] || {}, props)));
        return this;
      }
    });
    module.exports = Patch;
  }
});

// node_modules/@sanity/client/lib/data/transaction.js
var require_transaction = __commonJS({
  "node_modules/@sanity/client/lib/data/transaction.js"(exports, module) {
    "use strict";
    function _defineProperty(obj, key2, value) {
      if (key2 in obj) {
        Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key2] = value;
      }
      return obj;
    }
    var assign2 = require_object_assign();
    var validators = require_validators();
    var Patch = require_patch();
    var defaultMutateOptions = {
      returnDocuments: false
    };
    function Transaction() {
      var operations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var client = arguments.length > 1 ? arguments[1] : void 0;
      var transactionId = arguments.length > 2 ? arguments[2] : void 0;
      this.trxId = transactionId;
      this.operations = operations;
      this.client = client;
    }
    assign2(Transaction.prototype, {
      clone: function clone() {
        return new Transaction(this.operations.slice(0), this.client, this.trxId);
      },
      create: function create(doc) {
        validators.validateObject("create", doc);
        return this._add({
          create: doc
        });
      },
      createIfNotExists: function createIfNotExists(doc) {
        var op = "createIfNotExists";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty({}, op, doc));
      },
      createOrReplace: function createOrReplace(doc) {
        var op = "createOrReplace";
        validators.validateObject(op, doc);
        validators.requireDocumentId(op, doc);
        return this._add(_defineProperty({}, op, doc));
      },
      delete: function _delete(documentId) {
        validators.validateDocumentId("delete", documentId);
        return this._add({
          delete: {
            id: documentId
          }
        });
      },
      patch: function patch(documentId, patchOps) {
        var isBuilder = typeof patchOps === "function";
        var isPatch = documentId instanceof Patch;
        if (isPatch) {
          return this._add({
            patch: documentId.serialize()
          });
        }
        if (isBuilder) {
          var patch2 = patchOps(new Patch(documentId, {}, this.client));
          if (!(patch2 instanceof Patch)) {
            throw new Error("function passed to `patch()` must return the patch");
          }
          return this._add({
            patch: patch2.serialize()
          });
        }
        return this._add({
          patch: assign2({
            id: documentId
          }, patchOps)
        });
      },
      transactionId: function transactionId(id) {
        if (!id) {
          return this.trxId;
        }
        this.trxId = id;
        return this;
      },
      serialize: function serialize2() {
        return this.operations.slice();
      },
      toJSON: function toJSON() {
        return this.serialize();
      },
      commit: function commit(options) {
        if (!this.client) {
          throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return this.client.mutate(this.serialize(), assign2({
          transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
      },
      reset: function reset() {
        this.operations = [];
        return this;
      },
      _add: function _add(mut) {
        this.operations.push(mut);
        return this;
      }
    });
    module.exports = Transaction;
  }
});

// node_modules/@sanity/client/lib/data/encodeQueryString.js
var require_encodeQueryString = __commonJS({
  "node_modules/@sanity/client/lib/data/encodeQueryString.js"(exports, module) {
    "use strict";
    var _excluded = ["tag"];
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key2, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key2 = sourceSymbolKeys[i];
          if (excluded.indexOf(key2) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key2))
            continue;
          target[key2] = source[key2];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key2, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key2 = sourceKeys[i];
        if (excluded.indexOf(key2) >= 0)
          continue;
        target[key2] = source[key2];
      }
      return target;
    }
    var enc = encodeURIComponent;
    module.exports = function(_ref) {
      var query = _ref.query, _ref$params = _ref.params, params = _ref$params === void 0 ? {} : _ref$params, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options;
      var tag = options.tag, opts = _objectWithoutProperties(options, _excluded);
      var q = "query=".concat(enc(query));
      var base2 = tag ? "?tag=".concat(enc(tag), "&").concat(q) : "?".concat(q);
      var qString = Object.keys(params).reduce(function(qs, param) {
        return "".concat(qs, "&").concat(enc("$".concat(param)), "=").concat(enc(JSON.stringify(params[param])));
      }, base2);
      return Object.keys(opts).reduce(function(qs, option) {
        return options[option] ? "".concat(qs, "&").concat(enc(option), "=").concat(enc(options[option])) : qs;
      }, qString);
    };
  }
});

// node_modules/event-source-polyfill/src/eventsource.js
var require_eventsource = __commonJS({
  "node_modules/event-source-polyfill/src/eventsource.js"(exports, module) {
    (function(global2) {
      "use strict";
      var setTimeout2 = global2.setTimeout;
      var clearTimeout2 = global2.clearTimeout;
      var XMLHttpRequest2 = global2.XMLHttpRequest;
      var XDomainRequest2 = global2.XDomainRequest;
      var ActiveXObject = global2.ActiveXObject;
      var NativeEventSource = global2.EventSource;
      var document2 = global2.document;
      var Promise2 = global2.Promise;
      var fetch2 = global2.fetch;
      var Response2 = global2.Response;
      var TextDecoder = global2.TextDecoder;
      var TextEncoder2 = global2.TextEncoder;
      var AbortController2 = global2.AbortController;
      if (typeof window !== "undefined" && typeof document2 !== "undefined" && !("readyState" in document2) && document2.body == null) {
        document2.readyState = "loading";
        window.addEventListener("load", function(event) {
          document2.readyState = "complete";
        }, false);
      }
      if (XMLHttpRequest2 == null && ActiveXObject != null) {
        XMLHttpRequest2 = function() {
          return new ActiveXObject("Microsoft.XMLHTTP");
        };
      }
      if (Object.create == void 0) {
        Object.create = function(C) {
          function F() {
          }
          F.prototype = C;
          return new F();
        };
      }
      if (!Date.now) {
        Date.now = function now() {
          return new Date().getTime();
        };
      }
      if (AbortController2 == void 0) {
        var originalFetch2 = fetch2;
        fetch2 = function(url, options) {
          var signal = options.signal;
          return originalFetch2(url, { headers: options.headers, credentials: options.credentials, cache: options.cache }).then(function(response) {
            var reader = response.body.getReader();
            signal._reader = reader;
            if (signal._aborted) {
              signal._reader.cancel();
            }
            return {
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
              body: {
                getReader: function() {
                  return reader;
                }
              }
            };
          });
        };
        AbortController2 = function() {
          this.signal = {
            _reader: null,
            _aborted: false
          };
          this.abort = function() {
            if (this.signal._reader != null) {
              this.signal._reader.cancel();
            }
            this.signal._aborted = true;
          };
        };
      }
      function TextDecoderPolyfill() {
        this.bitsNeeded = 0;
        this.codePoint = 0;
      }
      TextDecoderPolyfill.prototype.decode = function(octets) {
        function valid(codePoint2, shift, octetsCount2) {
          if (octetsCount2 === 1) {
            return codePoint2 >= 128 >> shift && codePoint2 << shift <= 2047;
          }
          if (octetsCount2 === 2) {
            return codePoint2 >= 2048 >> shift && codePoint2 << shift <= 55295 || codePoint2 >= 57344 >> shift && codePoint2 << shift <= 65535;
          }
          if (octetsCount2 === 3) {
            return codePoint2 >= 65536 >> shift && codePoint2 << shift <= 1114111;
          }
          throw new Error();
        }
        function octetsCount(bitsNeeded2, codePoint2) {
          if (bitsNeeded2 === 6 * 1) {
            return codePoint2 >> 6 > 15 ? 3 : codePoint2 > 31 ? 2 : 1;
          }
          if (bitsNeeded2 === 6 * 2) {
            return codePoint2 > 15 ? 3 : 2;
          }
          if (bitsNeeded2 === 6 * 3) {
            return 3;
          }
          throw new Error();
        }
        var REPLACER = 65533;
        var string = "";
        var bitsNeeded = this.bitsNeeded;
        var codePoint = this.codePoint;
        for (var i = 0; i < octets.length; i += 1) {
          var octet = octets[i];
          if (bitsNeeded !== 0) {
            if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
              bitsNeeded = 0;
              codePoint = REPLACER;
              string += String.fromCharCode(codePoint);
            }
          }
          if (bitsNeeded === 0) {
            if (octet >= 0 && octet <= 127) {
              bitsNeeded = 0;
              codePoint = octet;
            } else if (octet >= 192 && octet <= 223) {
              bitsNeeded = 6 * 1;
              codePoint = octet & 31;
            } else if (octet >= 224 && octet <= 239) {
              bitsNeeded = 6 * 2;
              codePoint = octet & 15;
            } else if (octet >= 240 && octet <= 247) {
              bitsNeeded = 6 * 3;
              codePoint = octet & 7;
            } else {
              bitsNeeded = 0;
              codePoint = REPLACER;
            }
            if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
              bitsNeeded = 0;
              codePoint = REPLACER;
            }
          } else {
            bitsNeeded -= 6;
            codePoint = codePoint << 6 | octet & 63;
          }
          if (bitsNeeded === 0) {
            if (codePoint <= 65535) {
              string += String.fromCharCode(codePoint);
            } else {
              string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
              string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
            }
          }
        }
        this.bitsNeeded = bitsNeeded;
        this.codePoint = codePoint;
        return string;
      };
      var supportsStreamOption = function() {
        try {
          return new TextDecoder().decode(new TextEncoder2().encode("test"), { stream: true }) === "test";
        } catch (error2) {
          console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + error2);
        }
        return false;
      };
      if (TextDecoder == void 0 || TextEncoder2 == void 0 || !supportsStreamOption()) {
        TextDecoder = TextDecoderPolyfill;
      }
      var k = function() {
      };
      function XHRWrapper(xhr) {
        this.withCredentials = false;
        this.readyState = 0;
        this.status = 0;
        this.statusText = "";
        this.responseText = "";
        this.onprogress = k;
        this.onload = k;
        this.onerror = k;
        this.onreadystatechange = k;
        this._contentType = "";
        this._xhr = xhr;
        this._sendTimeout = 0;
        this._abort = k;
      }
      XHRWrapper.prototype.open = function(method, url) {
        this._abort(true);
        var that = this;
        var xhr = this._xhr;
        var state = 1;
        var timeout = 0;
        this._abort = function(silent) {
          if (that._sendTimeout !== 0) {
            clearTimeout2(that._sendTimeout);
            that._sendTimeout = 0;
          }
          if (state === 1 || state === 2 || state === 3) {
            state = 4;
            xhr.onload = k;
            xhr.onerror = k;
            xhr.onabort = k;
            xhr.onprogress = k;
            xhr.onreadystatechange = k;
            xhr.abort();
            if (timeout !== 0) {
              clearTimeout2(timeout);
              timeout = 0;
            }
            if (!silent) {
              that.readyState = 4;
              that.onabort(null);
              that.onreadystatechange();
            }
          }
          state = 0;
        };
        var onStart = function() {
          if (state === 1) {
            var status = 0;
            var statusText = "";
            var contentType = void 0;
            if (!("contentType" in xhr)) {
              try {
                status = xhr.status;
                statusText = xhr.statusText;
                contentType = xhr.getResponseHeader("Content-Type");
              } catch (error2) {
                status = 0;
                statusText = "";
                contentType = void 0;
              }
            } else {
              status = 200;
              statusText = "OK";
              contentType = xhr.contentType;
            }
            if (status !== 0) {
              state = 2;
              that.readyState = 2;
              that.status = status;
              that.statusText = statusText;
              that._contentType = contentType;
              that.onreadystatechange();
            }
          }
        };
        var onProgress = function() {
          onStart();
          if (state === 2 || state === 3) {
            state = 3;
            var responseText = "";
            try {
              responseText = xhr.responseText;
            } catch (error2) {
            }
            that.readyState = 3;
            that.responseText = responseText;
            that.onprogress();
          }
        };
        var onFinish = function(type, event) {
          if (event == null || event.preventDefault == null) {
            event = {
              preventDefault: k
            };
          }
          onProgress();
          if (state === 1 || state === 2 || state === 3) {
            state = 4;
            if (timeout !== 0) {
              clearTimeout2(timeout);
              timeout = 0;
            }
            that.readyState = 4;
            if (type === "load") {
              that.onload(event);
            } else if (type === "error") {
              that.onerror(event);
            } else if (type === "abort") {
              that.onabort(event);
            } else {
              throw new TypeError();
            }
            that.onreadystatechange();
          }
        };
        var onReadyStateChange = function(event) {
          if (xhr != void 0) {
            if (xhr.readyState === 4) {
              if (!("onload" in xhr) || !("onerror" in xhr) || !("onabort" in xhr)) {
                onFinish(xhr.responseText === "" ? "error" : "load", event);
              }
            } else if (xhr.readyState === 3) {
              if (!("onprogress" in xhr)) {
                onProgress();
              }
            } else if (xhr.readyState === 2) {
              onStart();
            }
          }
        };
        var onTimeout = function() {
          timeout = setTimeout2(function() {
            onTimeout();
          }, 500);
          if (xhr.readyState === 3) {
            onProgress();
          }
        };
        if ("onload" in xhr) {
          xhr.onload = function(event) {
            onFinish("load", event);
          };
        }
        if ("onerror" in xhr) {
          xhr.onerror = function(event) {
            onFinish("error", event);
          };
        }
        if ("onabort" in xhr) {
          xhr.onabort = function(event) {
            onFinish("abort", event);
          };
        }
        if ("onprogress" in xhr) {
          xhr.onprogress = onProgress;
        }
        if ("onreadystatechange" in xhr) {
          xhr.onreadystatechange = function(event) {
            onReadyStateChange(event);
          };
        }
        if ("contentType" in xhr || !("ontimeout" in XMLHttpRequest2.prototype)) {
          url += (url.indexOf("?") === -1 ? "?" : "&") + "padding=true";
        }
        xhr.open(method, url, true);
        if ("readyState" in xhr) {
          timeout = setTimeout2(function() {
            onTimeout();
          }, 0);
        }
      };
      XHRWrapper.prototype.abort = function() {
        this._abort(false);
      };
      XHRWrapper.prototype.getResponseHeader = function(name) {
        return this._contentType;
      };
      XHRWrapper.prototype.setRequestHeader = function(name, value) {
        var xhr = this._xhr;
        if ("setRequestHeader" in xhr) {
          xhr.setRequestHeader(name, value);
        }
      };
      XHRWrapper.prototype.getAllResponseHeaders = function() {
        return this._xhr.getAllResponseHeaders != void 0 ? this._xhr.getAllResponseHeaders() || "" : "";
      };
      XHRWrapper.prototype.send = function() {
        if ((!("ontimeout" in XMLHttpRequest2.prototype) || !("sendAsBinary" in XMLHttpRequest2.prototype) && !("mozAnon" in XMLHttpRequest2.prototype)) && document2 != void 0 && document2.readyState != void 0 && document2.readyState !== "complete") {
          var that = this;
          that._sendTimeout = setTimeout2(function() {
            that._sendTimeout = 0;
            that.send();
          }, 4);
          return;
        }
        var xhr = this._xhr;
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this.withCredentials;
        }
        try {
          xhr.send(void 0);
        } catch (error1) {
          throw error1;
        }
      };
      function toLowerCase(name) {
        return name.replace(/[A-Z]/g, function(c) {
          return String.fromCharCode(c.charCodeAt(0) + 32);
        });
      }
      function HeadersPolyfill(all) {
        var map = /* @__PURE__ */ Object.create(null);
        var array2 = all.split("\r\n");
        for (var i = 0; i < array2.length; i += 1) {
          var line = array2[i];
          var parts = line.split(": ");
          var name = parts.shift();
          var value = parts.join(": ");
          map[toLowerCase(name)] = value;
        }
        this._map = map;
      }
      HeadersPolyfill.prototype.get = function(name) {
        return this._map[toLowerCase(name)];
      };
      if (XMLHttpRequest2 != null && XMLHttpRequest2.HEADERS_RECEIVED == null) {
        XMLHttpRequest2.HEADERS_RECEIVED = 2;
      }
      function XHRTransport() {
      }
      XHRTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
        xhr.open("GET", url);
        var offset = 0;
        xhr.onprogress = function() {
          var responseText = xhr.responseText;
          var chunk = responseText.slice(offset);
          offset += chunk.length;
          onProgressCallback(chunk);
        };
        xhr.onerror = function(event) {
          event.preventDefault();
          onFinishCallback(new Error("NetworkError"));
        };
        xhr.onload = function() {
          onFinishCallback(null);
        };
        xhr.onabort = function() {
          onFinishCallback(null);
        };
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest2.HEADERS_RECEIVED) {
            var status = xhr.status;
            var statusText = xhr.statusText;
            var contentType = xhr.getResponseHeader("Content-Type");
            var headers2 = xhr.getAllResponseHeaders();
            onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers2));
          }
        };
        xhr.withCredentials = withCredentials;
        for (var name in headers) {
          if (Object.prototype.hasOwnProperty.call(headers, name)) {
            xhr.setRequestHeader(name, headers[name]);
          }
        }
        xhr.send();
        return xhr;
      };
      function HeadersWrapper(headers) {
        this._headers = headers;
      }
      HeadersWrapper.prototype.get = function(name) {
        return this._headers.get(name);
      };
      function FetchTransport() {
      }
      FetchTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
        var reader = null;
        var controller = new AbortController2();
        var signal = controller.signal;
        var textDecoder = new TextDecoder();
        fetch2(url, {
          headers,
          credentials: withCredentials ? "include" : "same-origin",
          signal,
          cache: "no-store"
        }).then(function(response) {
          reader = response.body.getReader();
          onStartCallback(response.status, response.statusText, response.headers.get("Content-Type"), new HeadersWrapper(response.headers));
          return new Promise2(function(resolve2, reject) {
            var readNextChunk = function() {
              reader.read().then(function(result) {
                if (result.done) {
                  resolve2(void 0);
                } else {
                  var chunk = textDecoder.decode(result.value, { stream: true });
                  onProgressCallback(chunk);
                  readNextChunk();
                }
              })["catch"](function(error2) {
                reject(error2);
              });
            };
            readNextChunk();
          });
        })["catch"](function(error2) {
          if (error2.name === "AbortError") {
            return void 0;
          } else {
            return error2;
          }
        }).then(function(error2) {
          onFinishCallback(error2);
        });
        return {
          abort: function() {
            if (reader != null) {
              reader.cancel();
            }
            controller.abort();
          }
        };
      };
      function EventTarget() {
        this._listeners = /* @__PURE__ */ Object.create(null);
      }
      function throwError(e2) {
        setTimeout2(function() {
          throw e2;
        }, 0);
      }
      EventTarget.prototype.dispatchEvent = function(event) {
        event.target = this;
        var typeListeners = this._listeners[event.type];
        if (typeListeners != void 0) {
          var length = typeListeners.length;
          for (var i = 0; i < length; i += 1) {
            var listener = typeListeners[i];
            try {
              if (typeof listener.handleEvent === "function") {
                listener.handleEvent(event);
              } else {
                listener.call(this, event);
              }
            } catch (e2) {
              throwError(e2);
            }
          }
        }
      };
      EventTarget.prototype.addEventListener = function(type, listener) {
        type = String(type);
        var listeners = this._listeners;
        var typeListeners = listeners[type];
        if (typeListeners == void 0) {
          typeListeners = [];
          listeners[type] = typeListeners;
        }
        var found = false;
        for (var i = 0; i < typeListeners.length; i += 1) {
          if (typeListeners[i] === listener) {
            found = true;
          }
        }
        if (!found) {
          typeListeners.push(listener);
        }
      };
      EventTarget.prototype.removeEventListener = function(type, listener) {
        type = String(type);
        var listeners = this._listeners;
        var typeListeners = listeners[type];
        if (typeListeners != void 0) {
          var filtered = [];
          for (var i = 0; i < typeListeners.length; i += 1) {
            if (typeListeners[i] !== listener) {
              filtered.push(typeListeners[i]);
            }
          }
          if (filtered.length === 0) {
            delete listeners[type];
          } else {
            listeners[type] = filtered;
          }
        }
      };
      function Event(type) {
        this.type = type;
        this.target = void 0;
      }
      function MessageEvent(type, options) {
        Event.call(this, type);
        this.data = options.data;
        this.lastEventId = options.lastEventId;
      }
      MessageEvent.prototype = Object.create(Event.prototype);
      function ConnectionEvent(type, options) {
        Event.call(this, type);
        this.status = options.status;
        this.statusText = options.statusText;
        this.headers = options.headers;
      }
      ConnectionEvent.prototype = Object.create(Event.prototype);
      function ErrorEvent(type, options) {
        Event.call(this, type);
        this.error = options.error;
      }
      ErrorEvent.prototype = Object.create(Event.prototype);
      var WAITING = -1;
      var CONNECTING = 0;
      var OPEN = 1;
      var CLOSED = 2;
      var AFTER_CR = -1;
      var FIELD_START = 0;
      var FIELD = 1;
      var VALUE_START = 2;
      var VALUE = 3;
      var contentTypeRegExp = /^text\/event\-stream(;.*)?$/i;
      var MINIMUM_DURATION = 1e3;
      var MAXIMUM_DURATION = 18e6;
      var parseDuration = function(value, def) {
        var n2 = value == null ? def : parseInt(value, 10);
        if (n2 !== n2) {
          n2 = def;
        }
        return clampDuration(n2);
      };
      var clampDuration = function(n2) {
        return Math.min(Math.max(n2, MINIMUM_DURATION), MAXIMUM_DURATION);
      };
      var fire = function(that, f, event) {
        try {
          if (typeof f === "function") {
            f.call(that, event);
          }
        } catch (e2) {
          throwError(e2);
        }
      };
      function EventSourcePolyfill(url, options) {
        EventTarget.call(this);
        options = options || {};
        this.onopen = void 0;
        this.onmessage = void 0;
        this.onerror = void 0;
        this.url = void 0;
        this.readyState = void 0;
        this.withCredentials = void 0;
        this.headers = void 0;
        this._close = void 0;
        start(this, url, options);
      }
      function getBestXHRTransport() {
        return XMLHttpRequest2 != void 0 && "withCredentials" in XMLHttpRequest2.prototype || XDomainRequest2 == void 0 ? new XMLHttpRequest2() : new XDomainRequest2();
      }
      var isFetchSupported = fetch2 != void 0 && Response2 != void 0 && "body" in Response2.prototype;
      function start(es, url, options) {
        url = String(url);
        var withCredentials = Boolean(options.withCredentials);
        var lastEventIdQueryParameterName = options.lastEventIdQueryParameterName || "lastEventId";
        var initialRetry = clampDuration(1e3);
        var heartbeatTimeout = parseDuration(options.heartbeatTimeout, 45e3);
        var lastEventId = "";
        var retry = initialRetry;
        var wasActivity = false;
        var textLength = 0;
        var headers = options.headers || {};
        var TransportOption = options.Transport;
        var xhr = isFetchSupported && TransportOption == void 0 ? void 0 : new XHRWrapper(TransportOption != void 0 ? new TransportOption() : getBestXHRTransport());
        var transport = TransportOption != null && typeof TransportOption !== "string" ? new TransportOption() : xhr == void 0 ? new FetchTransport() : new XHRTransport();
        var abortController = void 0;
        var timeout = 0;
        var currentState = WAITING;
        var dataBuffer = "";
        var lastEventIdBuffer = "";
        var eventTypeBuffer = "";
        var textBuffer = "";
        var state = FIELD_START;
        var fieldStart = 0;
        var valueStart = 0;
        var onStart = function(status, statusText, contentType, headers2) {
          if (currentState === CONNECTING) {
            if (status === 200 && contentType != void 0 && contentTypeRegExp.test(contentType)) {
              currentState = OPEN;
              wasActivity = Date.now();
              retry = initialRetry;
              es.readyState = OPEN;
              var event = new ConnectionEvent("open", {
                status,
                statusText,
                headers: headers2
              });
              es.dispatchEvent(event);
              fire(es, es.onopen, event);
            } else {
              var message = "";
              if (status !== 200) {
                if (statusText) {
                  statusText = statusText.replace(/\s+/g, " ");
                }
                message = "EventSource's response has a status " + status + " " + statusText + " that is not 200. Aborting the connection.";
              } else {
                message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == void 0 ? "-" : contentType.replace(/\s+/g, " ")) + ". Aborting the connection.";
              }
              close();
              var event = new ConnectionEvent("error", {
                status,
                statusText,
                headers: headers2
              });
              es.dispatchEvent(event);
              fire(es, es.onerror, event);
              console.error(message);
            }
          }
        };
        var onProgress = function(textChunk) {
          if (currentState === OPEN) {
            var n2 = -1;
            for (var i = 0; i < textChunk.length; i += 1) {
              var c = textChunk.charCodeAt(i);
              if (c === "\n".charCodeAt(0) || c === "\r".charCodeAt(0)) {
                n2 = i;
              }
            }
            var chunk = (n2 !== -1 ? textBuffer : "") + textChunk.slice(0, n2 + 1);
            textBuffer = (n2 === -1 ? textBuffer : "") + textChunk.slice(n2 + 1);
            if (textChunk !== "") {
              wasActivity = Date.now();
              textLength += textChunk.length;
            }
            for (var position = 0; position < chunk.length; position += 1) {
              var c = chunk.charCodeAt(position);
              if (state === AFTER_CR && c === "\n".charCodeAt(0)) {
                state = FIELD_START;
              } else {
                if (state === AFTER_CR) {
                  state = FIELD_START;
                }
                if (c === "\r".charCodeAt(0) || c === "\n".charCodeAt(0)) {
                  if (state !== FIELD_START) {
                    if (state === FIELD) {
                      valueStart = position + 1;
                    }
                    var field = chunk.slice(fieldStart, valueStart - 1);
                    var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === " ".charCodeAt(0) ? 1 : 0), position);
                    if (field === "data") {
                      dataBuffer += "\n";
                      dataBuffer += value;
                    } else if (field === "id") {
                      lastEventIdBuffer = value;
                    } else if (field === "event") {
                      eventTypeBuffer = value;
                    } else if (field === "retry") {
                      initialRetry = parseDuration(value, initialRetry);
                      retry = initialRetry;
                    } else if (field === "heartbeatTimeout") {
                      heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                      if (timeout !== 0) {
                        clearTimeout2(timeout);
                        timeout = setTimeout2(function() {
                          onTimeout();
                        }, heartbeatTimeout);
                      }
                    }
                  }
                  if (state === FIELD_START) {
                    if (dataBuffer !== "") {
                      lastEventId = lastEventIdBuffer;
                      if (eventTypeBuffer === "") {
                        eventTypeBuffer = "message";
                      }
                      var event = new MessageEvent(eventTypeBuffer, {
                        data: dataBuffer.slice(1),
                        lastEventId: lastEventIdBuffer
                      });
                      es.dispatchEvent(event);
                      if (eventTypeBuffer === "open") {
                        fire(es, es.onopen, event);
                      } else if (eventTypeBuffer === "message") {
                        fire(es, es.onmessage, event);
                      } else if (eventTypeBuffer === "error") {
                        fire(es, es.onerror, event);
                      }
                      if (currentState === CLOSED) {
                        return;
                      }
                    }
                    dataBuffer = "";
                    eventTypeBuffer = "";
                  }
                  state = c === "\r".charCodeAt(0) ? AFTER_CR : FIELD_START;
                } else {
                  if (state === FIELD_START) {
                    fieldStart = position;
                    state = FIELD;
                  }
                  if (state === FIELD) {
                    if (c === ":".charCodeAt(0)) {
                      valueStart = position + 1;
                      state = VALUE_START;
                    }
                  } else if (state === VALUE_START) {
                    state = VALUE;
                  }
                }
              }
            }
          }
        };
        var onFinish = function(error2) {
          if (currentState === OPEN || currentState === CONNECTING) {
            currentState = WAITING;
            if (timeout !== 0) {
              clearTimeout2(timeout);
              timeout = 0;
            }
            timeout = setTimeout2(function() {
              onTimeout();
            }, retry);
            retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
            es.readyState = CONNECTING;
            var event = new ErrorEvent("error", { error: error2 });
            es.dispatchEvent(event);
            fire(es, es.onerror, event);
            if (error2 != void 0) {
              console.error(error2);
            }
          }
        };
        var close = function() {
          currentState = CLOSED;
          if (abortController != void 0) {
            abortController.abort();
            abortController = void 0;
          }
          if (timeout !== 0) {
            clearTimeout2(timeout);
            timeout = 0;
          }
          es.readyState = CLOSED;
        };
        var onTimeout = function() {
          timeout = 0;
          if (currentState !== WAITING) {
            if (!wasActivity && abortController != void 0) {
              onFinish(new Error("No activity within " + heartbeatTimeout + " milliseconds. " + (currentState === CONNECTING ? "No response received." : textLength + " chars received.") + " Reconnecting."));
              if (abortController != void 0) {
                abortController.abort();
                abortController = void 0;
              }
            } else {
              var nextHeartbeat = Math.max((wasActivity || Date.now()) + heartbeatTimeout - Date.now(), 1);
              wasActivity = false;
              timeout = setTimeout2(function() {
                onTimeout();
              }, nextHeartbeat);
            }
            return;
          }
          wasActivity = false;
          textLength = 0;
          timeout = setTimeout2(function() {
            onTimeout();
          }, heartbeatTimeout);
          currentState = CONNECTING;
          dataBuffer = "";
          eventTypeBuffer = "";
          lastEventIdBuffer = lastEventId;
          textBuffer = "";
          fieldStart = 0;
          valueStart = 0;
          state = FIELD_START;
          var requestURL = url;
          if (url.slice(0, 5) !== "data:" && url.slice(0, 5) !== "blob:") {
            if (lastEventId !== "") {
              var i = url.indexOf("?");
              requestURL = i === -1 ? url : url.slice(0, i + 1) + url.slice(i + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function(p, paramName) {
                return paramName === lastEventIdQueryParameterName ? "" : p;
              });
              requestURL += (url.indexOf("?") === -1 ? "?" : "&") + lastEventIdQueryParameterName + "=" + encodeURIComponent(lastEventId);
            }
          }
          var withCredentials2 = es.withCredentials;
          var requestHeaders = {};
          requestHeaders["Accept"] = "text/event-stream";
          var headers2 = es.headers;
          if (headers2 != void 0) {
            for (var name in headers2) {
              if (Object.prototype.hasOwnProperty.call(headers2, name)) {
                requestHeaders[name] = headers2[name];
              }
            }
          }
          try {
            abortController = transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials2, requestHeaders);
          } catch (error2) {
            close();
            throw error2;
          }
        };
        es.url = url;
        es.readyState = CONNECTING;
        es.withCredentials = withCredentials;
        es.headers = headers;
        es._close = close;
        onTimeout();
      }
      EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
      EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
      EventSourcePolyfill.prototype.OPEN = OPEN;
      EventSourcePolyfill.prototype.CLOSED = CLOSED;
      EventSourcePolyfill.prototype.close = function() {
        this._close();
      };
      EventSourcePolyfill.CONNECTING = CONNECTING;
      EventSourcePolyfill.OPEN = OPEN;
      EventSourcePolyfill.CLOSED = CLOSED;
      EventSourcePolyfill.prototype.withCredentials = void 0;
      var R = NativeEventSource;
      if (XMLHttpRequest2 != void 0 && (NativeEventSource == void 0 || !("withCredentials" in NativeEventSource.prototype))) {
        R = EventSourcePolyfill;
      }
      (function(factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
          var v = factory(exports);
          if (v !== void 0)
            module.exports = v;
        } else if (typeof define === "function" && define.amd) {
          define(["exports"], factory);
        } else {
          factory(global2);
        }
      })(function(exports2) {
        exports2.EventSourcePolyfill = EventSourcePolyfill;
        exports2.NativeEventSource = NativeEventSource;
        exports2.EventSource = R;
      });
    })(typeof globalThis === "undefined" ? typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : exports : globalThis);
  }
});

// node_modules/@sanity/eventsource/browser.js
var require_browser = __commonJS({
  "node_modules/@sanity/eventsource/browser.js"(exports, module) {
    var evs = require_eventsource();
    module.exports = evs.EventSourcePolyfill;
  }
});

// node_modules/@sanity/client/lib/util/pick.js
var require_pick = __commonJS({
  "node_modules/@sanity/client/lib/util/pick.js"(exports, module) {
    "use strict";
    module.exports = function(obj, props) {
      return props.reduce(function(selection, prop) {
        if (typeof obj[prop] === "undefined") {
          return selection;
        }
        selection[prop] = obj[prop];
        return selection;
      }, {});
    };
  }
});

// node_modules/@sanity/client/lib/util/defaults.js
var require_defaults = __commonJS({
  "node_modules/@sanity/client/lib/util/defaults.js"(exports, module) {
    "use strict";
    module.exports = function(obj, defaults) {
      return Object.keys(defaults).concat(Object.keys(obj)).reduce(function(target, prop) {
        target[prop] = typeof obj[prop] === "undefined" ? defaults[prop] : obj[prop];
        return target;
      }, {});
    };
  }
});

// node_modules/@sanity/client/lib/data/listen.js
var require_listen = __commonJS({
  "node_modules/@sanity/client/lib/data/listen.js"(exports, module) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key2) {
          _defineProperty(target, key2, source[key2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
      return target;
    }
    function _defineProperty(obj, key2, value) {
      if (key2 in obj) {
        Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key2] = value;
      }
      return obj;
    }
    var assign2 = require_object_assign();
    var _require = require_observable2();
    var Observable = _require.Observable;
    var polyfilledEventSource = require_browser();
    var pick = require_pick();
    var defaults = require_defaults();
    var encodeQueryString = require_encodeQueryString();
    var MAX_URL_LENGTH = 16e3 - 1200;
    var EventSource = polyfilledEventSource;
    var possibleOptions = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"];
    var defaultOptions = {
      includeResult: true
    };
    module.exports = function listen(query, params) {
      var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var _this$clientConfig = this.clientConfig, url = _this$clientConfig.url, token = _this$clientConfig.token, withCredentials = _this$clientConfig.withCredentials, requestTagPrefix = _this$clientConfig.requestTagPrefix;
      var tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag;
      var options = _objectSpread(_objectSpread({}, defaults(opts, defaultOptions)), {}, {
        tag
      });
      var listenOpts = pick(options, possibleOptions);
      var qs = encodeQueryString({
        query,
        params,
        options: listenOpts,
        tag
      });
      var uri = "".concat(url).concat(this.getDataUrl("listen", qs));
      if (uri.length > MAX_URL_LENGTH) {
        return new Observable(function(observer) {
          return observer.error(new Error("Query too large for listener"));
        });
      }
      var listenFor = options.events ? options.events : ["mutation"];
      var shouldEmitReconnect = listenFor.indexOf("reconnect") !== -1;
      var esOptions = {};
      if (token || withCredentials) {
        esOptions.withCredentials = true;
      }
      if (token) {
        esOptions.headers = {
          Authorization: "Bearer ".concat(token)
        };
      }
      return new Observable(function(observer) {
        var es = getEventSource();
        var reconnectTimer;
        var stopped = false;
        function onError() {
          if (stopped) {
            return;
          }
          emitReconnect();
          if (stopped) {
            return;
          }
          if (es.readyState === EventSource.CLOSED) {
            unsubscribe();
            clearTimeout(reconnectTimer);
            reconnectTimer = setTimeout(open, 100);
          }
        }
        function onChannelError(err) {
          observer.error(cooerceError(err));
        }
        function onMessage(evt) {
          var event = parseEvent(evt);
          return event instanceof Error ? observer.error(event) : observer.next(event);
        }
        function onDisconnect(evt) {
          stopped = true;
          unsubscribe();
          observer.complete();
        }
        function unsubscribe() {
          es.removeEventListener("error", onError, false);
          es.removeEventListener("channelError", onChannelError, false);
          es.removeEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return es.removeEventListener(type, onMessage, false);
          });
          es.close();
        }
        function emitReconnect() {
          if (shouldEmitReconnect) {
            observer.next({
              type: "reconnect"
            });
          }
        }
        function getEventSource() {
          var evs = new EventSource(uri, esOptions);
          evs.addEventListener("error", onError, false);
          evs.addEventListener("channelError", onChannelError, false);
          evs.addEventListener("disconnect", onDisconnect, false);
          listenFor.forEach(function(type) {
            return evs.addEventListener(type, onMessage, false);
          });
          return evs;
        }
        function open() {
          es = getEventSource();
        }
        function stop() {
          stopped = true;
          unsubscribe();
        }
        return stop;
      });
    };
    function parseEvent(event) {
      try {
        var data = event.data && JSON.parse(event.data) || {};
        return assign2({
          type: event.type
        }, data);
      } catch (err) {
        return err;
      }
    }
    function cooerceError(err) {
      if (err instanceof Error) {
        return err;
      }
      var evt = parseEvent(err);
      return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
    }
    function extractErrorMessage(err) {
      if (!err.error) {
        return err.message || "Unknown listener error";
      }
      if (err.error.description) {
        return err.error.description;
      }
      return typeof err.error === "string" ? err.error : JSON.stringify(err.error, null, 2);
    }
  }
});

// node_modules/@sanity/client/lib/data/dataMethods.js
var require_dataMethods = __commonJS({
  "node_modules/@sanity/client/lib/data/dataMethods.js"(exports, module) {
    "use strict";
    function _defineProperty(obj, key2, value) {
      if (key2 in obj) {
        Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key2] = value;
      }
      return obj;
    }
    var assign2 = require_object_assign();
    var _require = require_observable2();
    var map = _require.map;
    var filter = _require.filter;
    var validators = require_validators();
    var getSelection = require_getSelection();
    var encodeQueryString = require_encodeQueryString();
    var Transaction = require_transaction();
    var Patch = require_patch();
    var listen = require_listen();
    var excludeFalsey = function excludeFalsey2(param, defValue) {
      var value = typeof param === "undefined" ? defValue : param;
      return param === false ? void 0 : value;
    };
    var getMutationQuery = function getMutationQuery2() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return {
        dryRun: options.dryRun,
        returnIds: true,
        returnDocuments: excludeFalsey(options.returnDocuments, true),
        visibility: options.visibility || "sync",
        autoGenerateArrayKeys: options.autoGenerateArrayKeys,
        skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
      };
    };
    var isResponse = function isResponse2(event) {
      return event.type === "response";
    };
    var getBody = function getBody2(event) {
      return event.body;
    };
    var indexBy = function indexBy2(docs, attr) {
      return docs.reduce(function(indexed, doc) {
        indexed[attr(doc)] = doc;
        return indexed;
      }, /* @__PURE__ */ Object.create(null));
    };
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    var getQuerySizeLimit = 11264;
    module.exports = {
      listen,
      getDataUrl: function getDataUrl(operation, path) {
        var config = this.clientConfig;
        var catalog = validators.hasDataset(config);
        var baseUri = "/".concat(operation, "/").concat(catalog);
        var uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
        return "/data".concat(uri).replace(/\/($|\?)/, "$1");
      },
      fetch: function fetch2(query, params) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mapResponse = options.filterResponse === false ? function(res) {
          return res;
        } : function(res) {
          return res.result;
        };
        var observable = this._dataRequest("query", {
          query,
          params
        }, options).pipe(map(mapResponse));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocument: function getDocument(id) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var options = {
          uri: this.getDataUrl("doc", id),
          json: true,
          tag: opts.tag
        };
        var observable = this._requestObservable(options).pipe(filter(isResponse), map(function(event) {
          return event.body.documents && event.body.documents[0];
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      getDocuments: function getDocuments(ids) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var options = {
          uri: this.getDataUrl("doc", ids.join(",")),
          json: true,
          tag: opts.tag
        };
        var observable = this._requestObservable(options).pipe(filter(isResponse), map(function(event) {
          var indexed = indexBy(event.body.documents || [], function(doc) {
            return doc._id;
          });
          return ids.map(function(id) {
            return indexed[id] || null;
          });
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      },
      create: function create(doc, options) {
        return this._create(doc, "create", options);
      },
      createIfNotExists: function createIfNotExists(doc, options) {
        validators.requireDocumentId("createIfNotExists", doc);
        return this._create(doc, "createIfNotExists", options);
      },
      createOrReplace: function createOrReplace(doc, options) {
        validators.requireDocumentId("createOrReplace", doc);
        return this._create(doc, "createOrReplace", options);
      },
      patch: function patch(selector, operations) {
        return new Patch(selector, operations, this);
      },
      delete: function _delete(selection, options) {
        return this.dataRequest("mutate", {
          mutations: [{
            delete: getSelection(selection)
          }]
        }, options);
      },
      mutate: function mutate(mutations, options) {
        var mut = mutations instanceof Patch || mutations instanceof Transaction ? mutations.serialize() : mutations;
        var muts = Array.isArray(mut) ? mut : [mut];
        var transactionId = options && options.transactionId;
        return this.dataRequest("mutate", {
          mutations: muts,
          transactionId
        }, options);
      },
      transaction: function transaction(operations) {
        return new Transaction(operations, this);
      },
      dataRequest: function dataRequest(endpoint, body) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var request = this._dataRequest(endpoint, body, options);
        return this.isPromiseAPI() ? toPromise(request) : request;
      },
      _dataRequest: function _dataRequest(endpoint, body) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var isMutation = endpoint === "mutate";
        var isQuery = endpoint === "query";
        var strQuery = !isMutation && encodeQueryString(body);
        var useGet = !isMutation && strQuery.length < getQuerySizeLimit;
        var stringQuery = useGet ? strQuery : "";
        var returnFirst = options.returnFirst;
        var timeout = options.timeout, token = options.token, tag = options.tag, headers = options.headers;
        var uri = this.getDataUrl(endpoint, stringQuery);
        var reqOptions = {
          method: useGet ? "GET" : "POST",
          uri,
          json: true,
          body: useGet ? void 0 : body,
          query: isMutation && getMutationQuery(options),
          timeout,
          headers,
          token,
          tag,
          canUseCdn: isQuery
        };
        return this._requestObservable(reqOptions).pipe(filter(isResponse), map(getBody), map(function(res) {
          if (!isMutation) {
            return res;
          }
          var results = res.results || [];
          if (options.returnDocuments) {
            return returnFirst ? results[0] && results[0].document : results.map(function(mut) {
              return mut.document;
            });
          }
          var key2 = returnFirst ? "documentId" : "documentIds";
          var ids = returnFirst ? results[0] && results[0].id : results.map(function(mut) {
            return mut.id;
          });
          return _defineProperty({
            transactionId: res.transactionId,
            results
          }, key2, ids);
        }));
      },
      _create: function _create(doc, op) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var mutation = _defineProperty({}, op, doc);
        var opts = assign2({
          returnFirst: true,
          returnDocuments: true
        }, options);
        return this.dataRequest("mutate", {
          mutations: [mutation]
        }, opts);
      }
    };
  }
});

// node_modules/@sanity/client/lib/datasets/datasetsClient.js
var require_datasetsClient = __commonJS({
  "node_modules/@sanity/client/lib/datasets/datasetsClient.js"(exports, module) {
    "use strict";
    var assign2 = require_object_assign();
    var validate2 = require_validators();
    function DatasetsClient(client) {
      this.request = client.request.bind(client);
    }
    assign2(DatasetsClient.prototype, {
      create: function create(name, options) {
        return this._modify("PUT", name, options);
      },
      edit: function edit(name, options) {
        return this._modify("PATCH", name, options);
      },
      delete: function _delete(name) {
        return this._modify("DELETE", name);
      },
      list: function list() {
        return this.request({
          uri: "/datasets"
        });
      },
      _modify: function _modify(method, name, body) {
        validate2.dataset(name);
        return this.request({
          method,
          uri: "/datasets/".concat(name),
          body
        });
      }
    });
    module.exports = DatasetsClient;
  }
});

// node_modules/@sanity/client/lib/projects/projectsClient.js
var require_projectsClient = __commonJS({
  "node_modules/@sanity/client/lib/projects/projectsClient.js"(exports, module) {
    "use strict";
    var assign2 = require_object_assign();
    function ProjectsClient(client) {
      this.client = client;
    }
    assign2(ProjectsClient.prototype, {
      list: function list() {
        return this.client.request({
          uri: "/projects"
        });
      },
      getById: function getById(id) {
        return this.client.request({
          uri: "/projects/".concat(id)
        });
      }
    });
    module.exports = ProjectsClient;
  }
});

// node_modules/@sanity/client/lib/http/queryString.js
var require_queryString = __commonJS({
  "node_modules/@sanity/client/lib/http/queryString.js"(exports, module) {
    "use strict";
    module.exports = function(params) {
      var qs = [];
      for (var key2 in params) {
        if (params.hasOwnProperty(key2)) {
          qs.push("".concat(encodeURIComponent(key2), "=").concat(encodeURIComponent(params[key2])));
        }
      }
      return qs.length > 0 ? "?".concat(qs.join("&")) : "";
    };
  }
});

// node_modules/@sanity/client/lib/assets/assetsClient.js
var require_assetsClient = __commonJS({
  "node_modules/@sanity/client/lib/assets/assetsClient.js"(exports, module) {
    "use strict";
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray(o2, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
      if (_i == null)
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _s, _e;
      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var assign2 = require_object_assign();
    var _require = require_observable2();
    var map = _require.map;
    var filter = _require.filter;
    var queryString = require_queryString();
    var validators = require_validators();
    function AssetsClient(client) {
      this.client = client;
    }
    function optionsFromFile(opts, file9) {
      if (typeof window === "undefined" || !(file9 instanceof window.File)) {
        return opts;
      }
      return assign2({
        filename: opts.preserveFilename === false ? void 0 : file9.name,
        contentType: file9.type
      }, opts);
    }
    assign2(AssetsClient.prototype, {
      upload: function upload(assetType, body) {
        var opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        validators.validateAssetType(assetType);
        var meta = opts.extract || void 0;
        if (meta && !meta.length) {
          meta = ["none"];
        }
        var dataset = validators.hasDataset(this.client.clientConfig);
        var assetEndpoint = assetType === "image" ? "images" : "files";
        var options = optionsFromFile(opts, body);
        var tag = options.tag, label = options.label, title = options.title, description = options.description, creditLine = options.creditLine, filename = options.filename, source = options.source;
        var query = {
          label,
          title,
          description,
          filename,
          meta,
          creditLine
        };
        if (source) {
          query.sourceId = source.id;
          query.sourceName = source.name;
          query.sourceUrl = source.url;
        }
        var observable = this.client._requestObservable({
          tag,
          method: "POST",
          timeout: options.timeout || 0,
          uri: "/assets/".concat(assetEndpoint, "/").concat(dataset),
          headers: options.contentType ? {
            "Content-Type": options.contentType
          } : {},
          query,
          body
        });
        return this.client.isPromiseAPI() ? observable.pipe(filter(function(event) {
          return event.type === "response";
        }), map(function(event) {
          return event.body.document;
        })).toPromise() : observable;
      },
      delete: function _delete(type, id) {
        console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
        var docId = id || "";
        if (!/^(image|file)-/.test(docId)) {
          docId = "".concat(type, "-").concat(docId);
        } else if (type._id) {
          docId = type._id;
        }
        validators.hasDataset(this.client.clientConfig);
        return this.client.delete(docId);
      },
      getImageUrl: function getImageUrl(ref, query) {
        var id = ref._ref || ref;
        if (typeof id !== "string") {
          throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
        }
        if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(id)) {
          throw new Error('Unsupported asset ID "'.concat(id, '". URL generation only works for auto-generated IDs.'));
        }
        var _id$split = id.split("-"), _id$split2 = _slicedToArray(_id$split, 4), assetId = _id$split2[1], size = _id$split2[2], format = _id$split2[3];
        validators.hasDataset(this.client.clientConfig);
        var _this$client$clientCo = this.client.clientConfig, projectId = _this$client$clientCo.projectId, dataset = _this$client$clientCo.dataset;
        var qs = query ? queryString(query) : "";
        return "https://cdn.sanity.io/images/".concat(projectId, "/").concat(dataset, "/").concat(assetId, "-").concat(size, ".").concat(format).concat(qs);
      }
    });
    module.exports = AssetsClient;
  }
});

// node_modules/@sanity/client/lib/users/usersClient.js
var require_usersClient = __commonJS({
  "node_modules/@sanity/client/lib/users/usersClient.js"(exports, module) {
    "use strict";
    var assign2 = require_object_assign();
    function UsersClient(client) {
      this.client = client;
    }
    assign2(UsersClient.prototype, {
      getById: function getById(id) {
        return this.client.request({
          uri: "/users/".concat(id)
        });
      }
    });
    module.exports = UsersClient;
  }
});

// node_modules/@sanity/client/lib/auth/authClient.js
var require_authClient = __commonJS({
  "node_modules/@sanity/client/lib/auth/authClient.js"(exports, module) {
    "use strict";
    var assign2 = require_object_assign();
    function AuthClient(client) {
      this.client = client;
    }
    assign2(AuthClient.prototype, {
      getLoginProviders: function getLoginProviders() {
        return this.client.request({
          uri: "/auth/providers"
        });
      },
      logout: function logout() {
        return this.client.request({
          uri: "/auth/logout",
          method: "POST"
        });
      }
    });
    module.exports = AuthClient;
  }
});

// node_modules/nano-pubsub/index.js
var require_nano_pubsub = __commonJS({
  "node_modules/nano-pubsub/index.js"(exports, module) {
    module.exports = function Pubsub() {
      var subscribers = [];
      return {
        subscribe: subscribe2,
        publish
      };
      function subscribe2(subscriber) {
        subscribers.push(subscriber);
        return function unsubscribe() {
          var idx = subscribers.indexOf(subscriber);
          if (idx > -1) {
            subscribers.splice(idx, 1);
          }
        };
      }
      function publish() {
        for (var i = 0; i < subscribers.length; i++) {
          subscribers[i].apply(null, arguments);
        }
      }
    };
  }
});

// node_modules/get-it/lib/util/middlewareReducer.js
var require_middlewareReducer = __commonJS({
  "node_modules/get-it/lib/util/middlewareReducer.js"(exports, module) {
    "use strict";
    module.exports = function(middleware) {
      var applyMiddleware = function applyMiddleware2(hook, defaultValue) {
        var bailEarly = hook === "onError";
        var value = defaultValue;
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        for (var i = 0; i < middleware[hook].length; i++) {
          var handler2 = middleware[hook][i];
          value = handler2.apply(void 0, [value].concat(args));
          if (bailEarly && !value) {
            break;
          }
        }
        return value;
      };
      return applyMiddleware;
    };
  }
});

// node_modules/requires-port/index.js
var require_requires_port = __commonJS({
  "node_modules/requires-port/index.js"(exports, module) {
    "use strict";
    module.exports = function required(port, protocol) {
      protocol = protocol.split(":")[0];
      port = +port;
      if (!port)
        return false;
      switch (protocol) {
        case "http":
        case "ws":
          return port !== 80;
        case "https":
        case "wss":
          return port !== 443;
        case "ftp":
          return port !== 21;
        case "gopher":
          return port !== 70;
        case "file":
          return false;
      }
      return port !== 0;
    };
  }
});

// node_modules/querystringify/index.js
var require_querystringify = __commonJS({
  "node_modules/querystringify/index.js"(exports) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var undef;
    function decode2(input) {
      try {
        return decodeURIComponent(input.replace(/\+/g, " "));
      } catch (e2) {
        return null;
      }
    }
    function encode2(input) {
      try {
        return encodeURIComponent(input);
      } catch (e2) {
        return null;
      }
    }
    function querystring(query) {
      var parser = /([^=?#&]+)=?([^&]*)/g, result = {}, part;
      while (part = parser.exec(query)) {
        var key2 = decode2(part[1]), value = decode2(part[2]);
        if (key2 === null || value === null || key2 in result)
          continue;
        result[key2] = value;
      }
      return result;
    }
    function querystringify(obj, prefix2) {
      prefix2 = prefix2 || "";
      var pairs = [], value, key2;
      if ("string" !== typeof prefix2)
        prefix2 = "?";
      for (key2 in obj) {
        if (has.call(obj, key2)) {
          value = obj[key2];
          if (!value && (value === null || value === undef || isNaN(value))) {
            value = "";
          }
          key2 = encode2(key2);
          value = encode2(value);
          if (key2 === null || value === null)
            continue;
          pairs.push(key2 + "=" + value);
        }
      }
      return pairs.length ? prefix2 + pairs.join("&") : "";
    }
    exports.stringify = querystringify;
    exports.parse = querystring;
  }
});

// node_modules/url-parse/index.js
var require_url_parse = __commonJS({
  "node_modules/url-parse/index.js"(exports, module) {
    "use strict";
    var required = require_requires_port();
    var qs = require_querystringify();
    var controlOrWhitespace = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;
    var CRHTLF = /[\n\r\t]/g;
    var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
    var port = /:\d+$/;
    var protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i;
    var windowsDriveLetter = /^[a-zA-Z]:/;
    function trimLeft(str) {
      return (str ? str : "").toString().replace(controlOrWhitespace, "");
    }
    var rules = [
      ["#", "hash"],
      ["?", "query"],
      function sanitize(address, url) {
        return isSpecial(url.protocol) ? address.replace(/\\/g, "/") : address;
      },
      ["/", "pathname"],
      ["@", "auth", 1],
      [NaN, "host", void 0, 1, 1],
      [/:(\d*)$/, "port", void 0, 1],
      [NaN, "hostname", void 0, 1, 1]
    ];
    var ignore = { hash: 1, query: 1 };
    function lolcation(loc) {
      var globalVar;
      if (typeof window !== "undefined")
        globalVar = window;
      else if (typeof global !== "undefined")
        globalVar = global;
      else if (typeof self !== "undefined")
        globalVar = self;
      else
        globalVar = {};
      var location = globalVar.location || {};
      loc = loc || location;
      var finaldestination = {}, type = typeof loc, key2;
      if ("blob:" === loc.protocol) {
        finaldestination = new Url(unescape(loc.pathname), {});
      } else if ("string" === type) {
        finaldestination = new Url(loc, {});
        for (key2 in ignore)
          delete finaldestination[key2];
      } else if ("object" === type) {
        for (key2 in loc) {
          if (key2 in ignore)
            continue;
          finaldestination[key2] = loc[key2];
        }
        if (finaldestination.slashes === void 0) {
          finaldestination.slashes = slashes.test(loc.href);
        }
      }
      return finaldestination;
    }
    function isSpecial(scheme2) {
      return scheme2 === "file:" || scheme2 === "ftp:" || scheme2 === "http:" || scheme2 === "https:" || scheme2 === "ws:" || scheme2 === "wss:";
    }
    function extractProtocol(address, location) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      location = location || {};
      var match = protocolre.exec(address);
      var protocol = match[1] ? match[1].toLowerCase() : "";
      var forwardSlashes = !!match[2];
      var otherSlashes = !!match[3];
      var slashesCount = 0;
      var rest;
      if (forwardSlashes) {
        if (otherSlashes) {
          rest = match[2] + match[3] + match[4];
          slashesCount = match[2].length + match[3].length;
        } else {
          rest = match[2] + match[4];
          slashesCount = match[2].length;
        }
      } else {
        if (otherSlashes) {
          rest = match[3] + match[4];
          slashesCount = match[3].length;
        } else {
          rest = match[4];
        }
      }
      if (protocol === "file:") {
        if (slashesCount >= 2) {
          rest = rest.slice(2);
        }
      } else if (isSpecial(protocol)) {
        rest = match[4];
      } else if (protocol) {
        if (forwardSlashes) {
          rest = rest.slice(2);
        }
      } else if (slashesCount >= 2 && isSpecial(location.protocol)) {
        rest = match[4];
      }
      return {
        protocol,
        slashes: forwardSlashes || isSpecial(protocol),
        slashesCount,
        rest
      };
    }
    function resolve2(relative, base2) {
      if (relative === "")
        return base2;
      var path = (base2 || "/").split("/").slice(0, -1).concat(relative.split("/")), i = path.length, last = path[i - 1], unshift = false, up = 0;
      while (i--) {
        if (path[i] === ".") {
          path.splice(i, 1);
        } else if (path[i] === "..") {
          path.splice(i, 1);
          up++;
        } else if (up) {
          if (i === 0)
            unshift = true;
          path.splice(i, 1);
          up--;
        }
      }
      if (unshift)
        path.unshift("");
      if (last === "." || last === "..")
        path.push("");
      return path.join("/");
    }
    function Url(address, location, parser) {
      address = trimLeft(address);
      address = address.replace(CRHTLF, "");
      if (!(this instanceof Url)) {
        return new Url(address, location, parser);
      }
      var relative, extracted, parse2, instruction, index9, key2, instructions = rules.slice(), type = typeof location, url = this, i = 0;
      if ("object" !== type && "string" !== type) {
        parser = location;
        location = null;
      }
      if (parser && "function" !== typeof parser)
        parser = qs.parse;
      location = lolcation(location);
      extracted = extractProtocol(address || "", location);
      relative = !extracted.protocol && !extracted.slashes;
      url.slashes = extracted.slashes || relative && location.slashes;
      url.protocol = extracted.protocol || location.protocol || "";
      address = extracted.rest;
      if (extracted.protocol === "file:" && (extracted.slashesCount !== 2 || windowsDriveLetter.test(address)) || !extracted.slashes && (extracted.protocol || extracted.slashesCount < 2 || !isSpecial(url.protocol))) {
        instructions[3] = [/(.*)/, "pathname"];
      }
      for (; i < instructions.length; i++) {
        instruction = instructions[i];
        if (typeof instruction === "function") {
          address = instruction(address, url);
          continue;
        }
        parse2 = instruction[0];
        key2 = instruction[1];
        if (parse2 !== parse2) {
          url[key2] = address;
        } else if ("string" === typeof parse2) {
          index9 = parse2 === "@" ? address.lastIndexOf(parse2) : address.indexOf(parse2);
          if (~index9) {
            if ("number" === typeof instruction[2]) {
              url[key2] = address.slice(0, index9);
              address = address.slice(index9 + instruction[2]);
            } else {
              url[key2] = address.slice(index9);
              address = address.slice(0, index9);
            }
          }
        } else if (index9 = parse2.exec(address)) {
          url[key2] = index9[1];
          address = address.slice(0, index9.index);
        }
        url[key2] = url[key2] || (relative && instruction[3] ? location[key2] || "" : "");
        if (instruction[4])
          url[key2] = url[key2].toLowerCase();
      }
      if (parser)
        url.query = parser(url.query);
      if (relative && location.slashes && url.pathname.charAt(0) !== "/" && (url.pathname !== "" || location.pathname !== "")) {
        url.pathname = resolve2(url.pathname, location.pathname);
      }
      if (url.pathname.charAt(0) !== "/" && isSpecial(url.protocol)) {
        url.pathname = "/" + url.pathname;
      }
      if (!required(url.port, url.protocol)) {
        url.host = url.hostname;
        url.port = "";
      }
      url.username = url.password = "";
      if (url.auth) {
        index9 = url.auth.indexOf(":");
        if (~index9) {
          url.username = url.auth.slice(0, index9);
          url.username = encodeURIComponent(decodeURIComponent(url.username));
          url.password = url.auth.slice(index9 + 1);
          url.password = encodeURIComponent(decodeURIComponent(url.password));
        } else {
          url.username = encodeURIComponent(decodeURIComponent(url.auth));
        }
        url.auth = url.password ? url.username + ":" + url.password : url.username;
      }
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
    }
    function set(part, value, fn) {
      var url = this;
      switch (part) {
        case "query":
          if ("string" === typeof value && value.length) {
            value = (fn || qs.parse)(value);
          }
          url[part] = value;
          break;
        case "port":
          url[part] = value;
          if (!required(value, url.protocol)) {
            url.host = url.hostname;
            url[part] = "";
          } else if (value) {
            url.host = url.hostname + ":" + value;
          }
          break;
        case "hostname":
          url[part] = value;
          if (url.port)
            value += ":" + url.port;
          url.host = value;
          break;
        case "host":
          url[part] = value;
          if (port.test(value)) {
            value = value.split(":");
            url.port = value.pop();
            url.hostname = value.join(":");
          } else {
            url.hostname = value;
            url.port = "";
          }
          break;
        case "protocol":
          url.protocol = value.toLowerCase();
          url.slashes = !fn;
          break;
        case "pathname":
        case "hash":
          if (value) {
            var char = part === "pathname" ? "/" : "#";
            url[part] = value.charAt(0) !== char ? char + value : value;
          } else {
            url[part] = value;
          }
          break;
        case "username":
        case "password":
          url[part] = encodeURIComponent(value);
          break;
        case "auth":
          var index9 = value.indexOf(":");
          if (~index9) {
            url.username = value.slice(0, index9);
            url.username = encodeURIComponent(decodeURIComponent(url.username));
            url.password = value.slice(index9 + 1);
            url.password = encodeURIComponent(decodeURIComponent(url.password));
          } else {
            url.username = encodeURIComponent(decodeURIComponent(value));
          }
      }
      for (var i = 0; i < rules.length; i++) {
        var ins = rules[i];
        if (ins[4])
          url[ins[1]] = url[ins[1]].toLowerCase();
      }
      url.auth = url.password ? url.username + ":" + url.password : url.username;
      url.origin = url.protocol !== "file:" && isSpecial(url.protocol) && url.host ? url.protocol + "//" + url.host : "null";
      url.href = url.toString();
      return url;
    }
    function toString(stringify2) {
      if (!stringify2 || "function" !== typeof stringify2)
        stringify2 = qs.stringify;
      var query, url = this, host = url.host, protocol = url.protocol;
      if (protocol && protocol.charAt(protocol.length - 1) !== ":")
        protocol += ":";
      var result = protocol + (url.protocol && url.slashes || isSpecial(url.protocol) ? "//" : "");
      if (url.username) {
        result += url.username;
        if (url.password)
          result += ":" + url.password;
        result += "@";
      } else if (url.password) {
        result += ":" + url.password;
        result += "@";
      } else if (url.protocol !== "file:" && isSpecial(url.protocol) && !host && url.pathname !== "/") {
        result += "@";
      }
      if (host[host.length - 1] === ":" || port.test(url.hostname) && !url.port) {
        host += ":";
      }
      result += host + url.pathname;
      query = "object" === typeof url.query ? stringify2(url.query) : url.query;
      if (query)
        result += "?" !== query.charAt(0) ? "?" + query : query;
      if (url.hash)
        result += url.hash;
      return result;
    }
    Url.prototype = { set, toString };
    Url.extractProtocol = extractProtocol;
    Url.location = lolcation;
    Url.trimLeft = trimLeft;
    Url.qs = qs;
    module.exports = Url;
  }
});

// node_modules/get-it/lib/middleware/defaultOptionsProcessor.js
var require_defaultOptionsProcessor = __commonJS({
  "node_modules/get-it/lib/middleware/defaultOptionsProcessor.js"(exports, module) {
    "use strict";
    var objectAssign = require_object_assign();
    var urlParse = require_url_parse();
    var isReactNative = typeof navigator === "undefined" ? false : navigator.product === "ReactNative";
    var has = Object.prototype.hasOwnProperty;
    var defaultOptions = {
      timeout: isReactNative ? 6e4 : 12e4
    };
    module.exports = function(opts) {
      var options = typeof opts === "string" ? objectAssign({
        url: opts
      }, defaultOptions) : objectAssign({}, defaultOptions, opts);
      var url = urlParse(options.url, {}, true);
      options.timeout = normalizeTimeout(options.timeout);
      if (options.query) {
        url.query = objectAssign({}, url.query, removeUndefined(options.query));
      }
      options.method = options.body && !options.method ? "POST" : (options.method || "GET").toUpperCase();
      options.url = url.toString(stringifyQueryString);
      return options;
    };
    function stringifyQueryString(obj) {
      var pairs = [];
      for (var key2 in obj) {
        if (has.call(obj, key2)) {
          push(key2, obj[key2]);
        }
      }
      return pairs.length ? pairs.join("&") : "";
      function push(key3, val) {
        if (Array.isArray(val)) {
          val.forEach(function(item) {
            return push(key3, item);
          });
        } else {
          pairs.push([key3, val].map(encodeURIComponent).join("="));
        }
      }
    }
    function normalizeTimeout(time) {
      if (time === false || time === 0) {
        return false;
      }
      if (time.connect || time.socket) {
        return time;
      }
      var delay = Number(time);
      if (isNaN(delay)) {
        return normalizeTimeout(defaultOptions.timeout);
      }
      return {
        connect: delay,
        socket: delay
      };
    }
    function removeUndefined(obj) {
      var target = {};
      for (var key2 in obj) {
        if (obj[key2] !== void 0) {
          target[key2] = obj[key2];
        }
      }
      return target;
    }
  }
});

// node_modules/get-it/lib/middleware/defaultOptionsValidator.js
var require_defaultOptionsValidator = __commonJS({
  "node_modules/get-it/lib/middleware/defaultOptionsValidator.js"(exports, module) {
    "use strict";
    var validUrl = /^https?:\/\//i;
    module.exports = function(options) {
      if (!validUrl.test(options.url)) {
        throw new Error('"'.concat(options.url, '" is not a valid URL'));
      }
    };
  }
});

// node_modules/same-origin/url-parser.js
var require_url_parser = __commonJS({
  "node_modules/same-origin/url-parser.js"(exports, module) {
    "use strict";
    var regex = /^(?:(?:(?:([^:\/#\?]+:)?(?:(?:\/\/)((?:((?:[^:@\/#\?]+)(?:\:(?:[^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/;
    module.exports = {
      regex,
      parse: function(url) {
        var match = regex.exec(url);
        if (!match) {
          return {};
        }
        return {
          protocol: (match[1] || "").toLowerCase() || void 0,
          hostname: (match[5] || "").toLowerCase() || void 0,
          port: match[6] || void 0
        };
      }
    };
  }
});

// node_modules/same-origin/index.js
var require_same_origin = __commonJS({
  "node_modules/same-origin/index.js"(exports, module) {
    "use strict";
    var url = require_url_parser();
    module.exports = function(uri1, uri2, ieMode) {
      if (uri1 === uri2) {
        return true;
      }
      var url1 = url.parse(uri1, false, true);
      var url2 = url.parse(uri2, false, true);
      var url1Port = url1.port | 0 || (url1.protocol === "https" ? 443 : 80);
      var url2Port = url2.port | 0 || (url2.protocol === "https" ? 443 : 80);
      var match = {
        proto: url1.protocol === url2.protocol,
        hostname: url1.hostname === url2.hostname,
        port: url1Port === url2Port
      };
      return match.proto && match.hostname && (match.port || ieMode);
    };
  }
});

// node_modules/parse-headers/parse-headers.js
var require_parse_headers = __commonJS({
  "node_modules/parse-headers/parse-headers.js"(exports, module) {
    var trim = function(string) {
      return string.replace(/^\s+|\s+$/g, "");
    };
    var isArray = function(arg) {
      return Object.prototype.toString.call(arg) === "[object Array]";
    };
    module.exports = function(headers) {
      if (!headers)
        return {};
      var result = {};
      var headersArr = trim(headers).split("\n");
      for (var i = 0; i < headersArr.length; i++) {
        var row = headersArr[i];
        var index9 = row.indexOf(":"), key2 = trim(row.slice(0, index9)).toLowerCase(), value = trim(row.slice(index9 + 1));
        if (typeof result[key2] === "undefined") {
          result[key2] = value;
        } else if (isArray(result[key2])) {
          result[key2].push(value);
        } else {
          result[key2] = [result[key2], value];
        }
      }
      return result;
    };
  }
});

// node_modules/get-it/lib/request/browser/fetchXhr.js
var require_fetchXhr = __commonJS({
  "node_modules/get-it/lib/request/browser/fetchXhr.js"(exports, module) {
    "use strict";
    function FetchXhr() {
      this.readyState = 0;
    }
    FetchXhr.prototype.open = function(method, url) {
      this._method = method;
      this._url = url;
      this._resHeaders = "";
      this.readyState = 1;
      this.onreadystatechange();
    };
    FetchXhr.prototype.abort = function() {
      if (this._controller) {
        this._controller.abort();
      }
    };
    FetchXhr.prototype.getAllResponseHeaders = function() {
      return this._resHeaders;
    };
    FetchXhr.prototype.setRequestHeader = function(key2, value) {
      this._headers = this._headers || {};
      this._headers[key2] = value;
    };
    FetchXhr.prototype.send = function(body) {
      var _this = this;
      var ctrl = this._controller = typeof AbortController === "function" && new AbortController();
      var textBody = this.responseType !== "arraybuffer";
      var options = {
        method: this._method,
        headers: this._headers,
        signal: ctrl && ctrl.signal,
        body
      };
      if (typeof window !== "undefined") {
        options.credentials = this.withCredentials ? "include" : "omit";
      }
      fetch(this._url, options).then(function(res) {
        res.headers.forEach(function(value, key2) {
          _this._resHeaders += "".concat(key2, ": ").concat(value, "\r\n");
        });
        _this.status = res.status;
        _this.statusText = res.statusText;
        _this.readyState = 3;
        return textBody ? res.text() : res.arrayBuffer();
      }).then(function(resBody) {
        if (textBody) {
          _this.responseText = resBody;
        } else {
          _this.response = resBody;
        }
        _this.readyState = 4;
        _this.onreadystatechange();
      }).catch(function(err) {
        if (err.name === "AbortError") {
          _this.onabort();
          return;
        }
        _this.onerror(err);
      });
    };
    module.exports = FetchXhr;
  }
});

// node_modules/get-it/lib/request/browser-request.js
var require_browser_request = __commonJS({
  "node_modules/get-it/lib/request/browser-request.js"(exports, module) {
    "use strict";
    var sameOrigin = require_same_origin();
    var parseHeaders = require_parse_headers();
    var FetchXhr = require_fetchXhr();
    var noop3 = function noop4() {
    };
    var win = typeof window === "undefined" ? void 0 : window;
    var adapter = win ? "xhr" : "fetch";
    var XmlHttpRequest = typeof XMLHttpRequest === "function" ? XMLHttpRequest : noop3;
    var hasXhr2 = "withCredentials" in new XmlHttpRequest();
    var XDR = typeof XDomainRequest === "undefined" ? void 0 : XDomainRequest;
    var CrossDomainRequest = hasXhr2 ? XmlHttpRequest : XDR;
    if (!win) {
      XmlHttpRequest = FetchXhr;
      CrossDomainRequest = FetchXhr;
    }
    module.exports = function(context, callback) {
      var opts = context.options;
      var options = context.applyMiddleware("finalizeOptions", opts);
      var timers = {};
      var cors = win && win.location && !sameOrigin(win.location.href, options.url);
      var injectedResponse = context.applyMiddleware("interceptRequest", void 0, {
        adapter,
        context
      });
      if (injectedResponse) {
        var cbTimer = setTimeout(callback, 0, null, injectedResponse);
        var cancel = function cancel2() {
          return clearTimeout(cbTimer);
        };
        return {
          abort: cancel
        };
      }
      var xhr = cors ? new CrossDomainRequest() : new XmlHttpRequest();
      var isXdr = win && win.XDomainRequest && xhr instanceof win.XDomainRequest;
      var headers = options.headers;
      var delays = options.timeout;
      var aborted = false;
      var loaded = false;
      var timedOut = false;
      xhr.onerror = onError;
      xhr.ontimeout = onError;
      xhr.onabort = function() {
        stopTimers(true);
        aborted = true;
      };
      xhr.onprogress = function() {
      };
      var loadEvent = isXdr ? "onload" : "onreadystatechange";
      xhr[loadEvent] = function() {
        resetTimers();
        if (aborted || xhr.readyState !== 4 && !isXdr) {
          return;
        }
        if (xhr.status === 0) {
          return;
        }
        onLoad();
      };
      xhr.open(options.method, options.url, true);
      xhr.withCredentials = !!options.withCredentials;
      if (headers && xhr.setRequestHeader) {
        for (var key2 in headers) {
          if (headers.hasOwnProperty(key2)) {
            xhr.setRequestHeader(key2, headers[key2]);
          }
        }
      } else if (headers && isXdr) {
        throw new Error("Headers cannot be set on an XDomainRequest object");
      }
      if (options.rawBody) {
        xhr.responseType = "arraybuffer";
      }
      context.applyMiddleware("onRequest", {
        options,
        adapter,
        request: xhr,
        context
      });
      xhr.send(options.body || null);
      if (delays) {
        timers.connect = setTimeout(function() {
          return timeoutRequest("ETIMEDOUT");
        }, delays.connect);
      }
      return {
        abort
      };
      function abort() {
        aborted = true;
        if (xhr) {
          xhr.abort();
        }
      }
      function timeoutRequest(code) {
        timedOut = true;
        xhr.abort();
        var error2 = new Error(code === "ESOCKETTIMEDOUT" ? "Socket timed out on request to ".concat(options.url) : "Connection timed out on request to ".concat(options.url));
        error2.code = code;
        context.channels.error.publish(error2);
      }
      function resetTimers() {
        if (!delays) {
          return;
        }
        stopTimers();
        timers.socket = setTimeout(function() {
          return timeoutRequest("ESOCKETTIMEDOUT");
        }, delays.socket);
      }
      function stopTimers(force) {
        if (force || aborted || xhr.readyState >= 2 && timers.connect) {
          clearTimeout(timers.connect);
        }
        if (timers.socket) {
          clearTimeout(timers.socket);
        }
      }
      function onError(error2) {
        if (loaded) {
          return;
        }
        stopTimers(true);
        loaded = true;
        xhr = null;
        var err = error2 || new Error("Network error while attempting to reach ".concat(options.url));
        err.isNetworkError = true;
        err.request = options;
        callback(err);
      }
      function reduceResponse() {
        var statusCode = xhr.status;
        var statusMessage = xhr.statusText;
        if (isXdr && statusCode === void 0) {
          statusCode = 200;
        } else if (statusCode > 12e3 && statusCode < 12156) {
          return onError();
        } else {
          statusCode = xhr.status === 1223 ? 204 : xhr.status;
          statusMessage = xhr.status === 1223 ? "No Content" : statusMessage;
        }
        return {
          body: xhr.response || xhr.responseText,
          url: options.url,
          method: options.method,
          headers: isXdr ? {} : parseHeaders(xhr.getAllResponseHeaders()),
          statusCode,
          statusMessage
        };
      }
      function onLoad() {
        if (aborted || loaded || timedOut) {
          return;
        }
        if (xhr.status === 0) {
          onError(new Error("Unknown XHR error"));
          return;
        }
        stopTimers();
        loaded = true;
        callback(null, reduceResponse());
      }
    };
  }
});

// node_modules/get-it/lib/request/index.js
var require_request = __commonJS({
  "node_modules/get-it/lib/request/index.js"(exports, module) {
    "use strict";
    module.exports = require_browser_request();
  }
});

// node_modules/get-it/lib/index.js
var require_lib = __commonJS({
  "node_modules/get-it/lib/index.js"(exports, module) {
    "use strict";
    var pubsub = require_nano_pubsub();
    var middlewareReducer = require_middlewareReducer();
    var processOptions = require_defaultOptionsProcessor();
    var validateOptions = require_defaultOptionsValidator();
    var httpRequester = require_request();
    var channelNames = ["request", "response", "progress", "error", "abort"];
    var middlehooks = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    module.exports = function createRequester() {
      var initMiddleware = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var httpRequest = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : httpRequester;
      var loadedMiddleware = [];
      var middleware = middlehooks.reduce(function(ware, name) {
        ware[name] = ware[name] || [];
        return ware;
      }, {
        processOptions: [processOptions],
        validateOptions: [validateOptions]
      });
      function request(opts) {
        var channels = channelNames.reduce(function(target, name) {
          target[name] = pubsub();
          return target;
        }, {});
        var applyMiddleware = middlewareReducer(middleware);
        var options = applyMiddleware("processOptions", opts);
        applyMiddleware("validateOptions", options);
        var context = {
          options,
          channels,
          applyMiddleware
        };
        var ongoingRequest = null;
        var unsubscribe = channels.request.subscribe(function(ctx) {
          ongoingRequest = httpRequest(ctx, function(err, res) {
            return onResponse(err, res, ctx);
          });
        });
        channels.abort.subscribe(function() {
          unsubscribe();
          if (ongoingRequest) {
            ongoingRequest.abort();
          }
        });
        var returnValue = applyMiddleware("onReturn", channels, context);
        if (returnValue === channels) {
          channels.request.publish(context);
        }
        return returnValue;
        function onResponse(reqErr, res, ctx) {
          var error2 = reqErr;
          var response = res;
          if (!error2) {
            try {
              response = applyMiddleware("onResponse", res, ctx);
            } catch (err) {
              response = null;
              error2 = err;
            }
          }
          error2 = error2 && applyMiddleware("onError", error2, ctx);
          if (error2) {
            channels.error.publish(error2);
          } else if (response) {
            channels.response.publish(response);
          }
        }
      }
      request.use = function use(newMiddleware) {
        if (!newMiddleware) {
          throw new Error("Tried to add middleware that resolved to falsey value");
        }
        if (typeof newMiddleware === "function") {
          throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        }
        if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
          throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        }
        middlehooks.forEach(function(key2) {
          if (newMiddleware[key2]) {
            middleware[key2].push(newMiddleware[key2]);
          }
        });
        loadedMiddleware.push(newMiddleware);
        return request;
      };
      request.clone = function clone() {
        return createRequester(loadedMiddleware);
      };
      initMiddleware.forEach(request.use);
      return request;
    };
  }
});

// node_modules/get-it/index.js
var require_get_it = __commonJS({
  "node_modules/get-it/index.js"(exports, module) {
    module.exports = require_lib();
  }
});

// node_modules/get-it/lib/util/global.js
var require_global = __commonJS({
  "node_modules/get-it/lib/util/global.js"(exports, module) {
    "use strict";
    if (typeof globalThis !== "undefined") {
      module.exports = globalThis;
    } else if (typeof window !== "undefined") {
      module.exports = window;
    } else if (typeof global !== "undefined") {
      module.exports = global;
    } else if (typeof self !== "undefined") {
      module.exports = self;
    } else {
      module.exports = {};
    }
  }
});

// node_modules/get-it/lib/middleware/observable.js
var require_observable3 = __commonJS({
  "node_modules/get-it/lib/middleware/observable.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var objectAssign = require_object_assign();
    module.exports = function() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var Observable = opts.implementation || global2.Observable;
      if (!Observable) {
        throw new Error("`Observable` is not available in global scope, and no implementation was passed");
      }
      return {
        onReturn: function onReturn(channels, context) {
          return new Observable(function(observer) {
            channels.error.subscribe(function(err) {
              return observer.error(err);
            });
            channels.progress.subscribe(function(event) {
              return observer.next(objectAssign({
                type: "progress"
              }, event));
            });
            channels.response.subscribe(function(response) {
              observer.next(objectAssign({
                type: "response"
              }, response));
              observer.complete();
            });
            channels.request.publish(context);
            return function() {
              return channels.abort.publish();
            };
          });
        }
      };
    };
  }
});

// node_modules/isobject/index.js
var require_isobject = __commonJS({
  "node_modules/isobject/index.js"(exports, module) {
    "use strict";
    module.exports = function isObject(val) {
      return val != null && typeof val === "object" && Array.isArray(val) === false;
    };
  }
});

// node_modules/is-plain-object/index.js
var require_is_plain_object = __commonJS({
  "node_modules/is-plain-object/index.js"(exports, module) {
    "use strict";
    var isObject = require_isobject();
    function isObjectObject(o2) {
      return isObject(o2) === true && Object.prototype.toString.call(o2) === "[object Object]";
    }
    module.exports = function isPlainObject(o2) {
      var ctor, prot;
      if (isObjectObject(o2) === false)
        return false;
      ctor = o2.constructor;
      if (typeof ctor !== "function")
        return false;
      prot = ctor.prototype;
      if (isObjectObject(prot) === false)
        return false;
      if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
      }
      return true;
    };
  }
});

// node_modules/get-it/lib/middleware/jsonRequest.js
var require_jsonRequest = __commonJS({
  "node_modules/get-it/lib/middleware/jsonRequest.js"(exports, module) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    var objectAssign = require_object_assign();
    var isPlainObject = require_is_plain_object();
    var serializeTypes = ["boolean", "string", "number"];
    var isBuffer = function isBuffer2(obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    };
    module.exports = function() {
      return {
        processOptions: function processOptions(options) {
          var body = options.body;
          if (!body) {
            return options;
          }
          var isStream = typeof body.pipe === "function";
          var shouldSerialize = !isStream && !isBuffer(body) && (serializeTypes.indexOf(_typeof(body)) !== -1 || Array.isArray(body) || isPlainObject(body));
          if (!shouldSerialize) {
            return options;
          }
          return objectAssign({}, options, {
            body: JSON.stringify(options.body),
            headers: objectAssign({}, options.headers, {
              "Content-Type": "application/json"
            })
          });
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/jsonResponse.js
var require_jsonResponse = __commonJS({
  "node_modules/get-it/lib/middleware/jsonResponse.js"(exports, module) {
    "use strict";
    var objectAssign = require_object_assign();
    module.exports = function(opts) {
      return {
        onResponse: function onResponse(response) {
          var contentType = response.headers["content-type"] || "";
          var shouldDecode = opts && opts.force || contentType.indexOf("application/json") !== -1;
          if (!response.body || !contentType || !shouldDecode) {
            return response;
          }
          return objectAssign({}, response, {
            body: tryParse(response.body)
          });
        },
        processOptions: function processOptions(options) {
          return objectAssign({}, options, {
            headers: objectAssign({
              Accept: "application/json"
            }, options.headers)
          });
        }
      };
    };
    function tryParse(body) {
      try {
        return JSON.parse(body);
      } catch (err) {
        err.message = "Failed to parsed response body as JSON: ".concat(err.message);
        throw err;
      }
    }
  }
});

// node_modules/get-it/lib/middleware/progress/browser-progress.js
var require_browser_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/browser-progress.js"(exports, module) {
    "use strict";
    module.exports = function() {
      return {
        onRequest: function onRequest(evt) {
          if (evt.adapter !== "xhr") {
            return;
          }
          var xhr = evt.request;
          var context = evt.context;
          if ("upload" in xhr && "onprogress" in xhr.upload) {
            xhr.upload.onprogress = handleProgress("upload");
          }
          if ("onprogress" in xhr) {
            xhr.onprogress = handleProgress("download");
          }
          function handleProgress(stage) {
            return function(event) {
              var percent = event.lengthComputable ? event.loaded / event.total * 100 : -1;
              context.channels.progress.publish({
                stage,
                percent,
                total: event.total,
                loaded: event.loaded,
                lengthComputable: event.lengthComputable
              });
            };
          }
        }
      };
    };
  }
});

// node_modules/get-it/lib/middleware/progress/index.js
var require_progress = __commonJS({
  "node_modules/get-it/lib/middleware/progress/index.js"(exports, module) {
    "use strict";
    module.exports = require_browser_progress();
  }
});

// node_modules/make-error/index.js
var require_make_error = __commonJS({
  "node_modules/make-error/index.js"(exports, module) {
    "use strict";
    var construct = typeof Reflect !== "undefined" ? Reflect.construct : void 0;
    var defineProperty = Object.defineProperty;
    var captureStackTrace = Error.captureStackTrace;
    if (captureStackTrace === void 0) {
      captureStackTrace = function captureStackTrace2(error2) {
        var container = new Error();
        defineProperty(error2, "stack", {
          configurable: true,
          get: function getStack() {
            var stack = container.stack;
            defineProperty(this, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
            return stack;
          },
          set: function setStack(stack) {
            defineProperty(error2, "stack", {
              configurable: true,
              value: stack,
              writable: true
            });
          }
        });
      };
    }
    function BaseError(message) {
      if (message !== void 0) {
        defineProperty(this, "message", {
          configurable: true,
          value: message,
          writable: true
        });
      }
      var cname = this.constructor.name;
      if (cname !== void 0 && cname !== this.name) {
        defineProperty(this, "name", {
          configurable: true,
          value: cname,
          writable: true
        });
      }
      captureStackTrace(this, this.constructor);
    }
    BaseError.prototype = Object.create(Error.prototype, {
      constructor: {
        configurable: true,
        value: BaseError,
        writable: true
      }
    });
    var setFunctionName = function() {
      function setFunctionName2(fn, name) {
        return defineProperty(fn, "name", {
          configurable: true,
          value: name
        });
      }
      try {
        var f = function() {
        };
        setFunctionName2(f, "foo");
        if (f.name === "foo") {
          return setFunctionName2;
        }
      } catch (_) {
      }
    }();
    function makeError(constructor, super_) {
      if (super_ == null || super_ === Error) {
        super_ = BaseError;
      } else if (typeof super_ !== "function") {
        throw new TypeError("super_ should be a function");
      }
      var name;
      if (typeof constructor === "string") {
        name = constructor;
        constructor = construct !== void 0 ? function() {
          return construct(super_, arguments, this.constructor);
        } : function() {
          super_.apply(this, arguments);
        };
        if (setFunctionName !== void 0) {
          setFunctionName(constructor, name);
          name = void 0;
        }
      } else if (typeof constructor !== "function") {
        throw new TypeError("constructor should be either a string or a function");
      }
      constructor.super_ = constructor["super"] = super_;
      var properties = {
        constructor: {
          configurable: true,
          value: constructor,
          writable: true
        }
      };
      if (name !== void 0) {
        properties.name = {
          configurable: true,
          value: name,
          writable: true
        };
      }
      constructor.prototype = Object.create(super_.prototype, properties);
      return constructor;
    }
    exports = module.exports = makeError;
    exports.BaseError = BaseError;
  }
});

// node_modules/@sanity/client/lib/http/errors.js
var require_errors = __commonJS({
  "node_modules/@sanity/client/lib/http/errors.js"(exports) {
    "use strict";
    var makeError = require_make_error();
    var assign2 = require_object_assign();
    function ClientError(res) {
      var props = extractErrorProps(res);
      ClientError.super.call(this, props.message);
      assign2(this, props);
    }
    function ServerError(res) {
      var props = extractErrorProps(res);
      ServerError.super.call(this, props.message);
      assign2(this, props);
    }
    function extractErrorProps(res) {
      var body = res.body;
      var props = {
        response: res,
        statusCode: res.statusCode,
        responseBody: stringifyBody(body, res)
      };
      if (body.error && body.message) {
        props.message = "".concat(body.error, " - ").concat(body.message);
        return props;
      }
      if (body.error && body.error.description) {
        props.message = body.error.description;
        props.details = body.error;
        return props;
      }
      props.message = body.error || body.message || httpErrorMessage(res);
      return props;
    }
    function httpErrorMessage(res) {
      var statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
      return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
    }
    function stringifyBody(body, res) {
      var contentType = (res.headers["content-type"] || "").toLowerCase();
      var isJson = contentType.indexOf("application/json") !== -1;
      return isJson ? JSON.stringify(body, null, 2) : body;
    }
    makeError(ClientError);
    makeError(ServerError);
    exports.ClientError = ClientError;
    exports.ServerError = ServerError;
  }
});

// node_modules/@sanity/client/lib/http/browserMiddleware.js
var require_browserMiddleware = __commonJS({
  "node_modules/@sanity/client/lib/http/browserMiddleware.js"(exports, module) {
    "use strict";
    module.exports = [];
  }
});

// node_modules/@sanity/client/lib/http/request.js
var require_request2 = __commonJS({
  "node_modules/@sanity/client/lib/http/request.js"(exports, module) {
    "use strict";
    var getIt = require_get_it();
    var assign2 = require_object_assign();
    var observable = require_observable3();
    var jsonRequest = require_jsonRequest();
    var jsonResponse = require_jsonResponse();
    var progress = require_progress();
    var _require = require_observable2();
    var Observable = _require.Observable;
    var _require2 = require_errors();
    var ClientError = _require2.ClientError;
    var ServerError = _require2.ServerError;
    var httpError = {
      onResponse: function onResponse(res) {
        if (res.statusCode >= 500) {
          throw new ServerError(res);
        } else if (res.statusCode >= 400) {
          throw new ClientError(res);
        }
        return res;
      }
    };
    var printWarnings = {
      onResponse: function onResponse(res) {
        var warn = res.headers["x-sanity-warning"];
        var warnings = Array.isArray(warn) ? warn : [warn];
        warnings.filter(Boolean).forEach(function(msg) {
          return console.warn(msg);
        });
        return res;
      }
    };
    var envSpecific = require_browserMiddleware();
    var middleware = envSpecific.concat([printWarnings, jsonRequest(), jsonResponse(), progress(), httpError, observable({
      implementation: Observable
    })]);
    var request = getIt(middleware);
    function httpRequest(options) {
      var requester = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : request;
      return requester(assign2({
        maxRedirects: 0
      }, options));
    }
    httpRequest.defaultRequester = request;
    httpRequest.ClientError = ClientError;
    httpRequest.ServerError = ServerError;
    module.exports = httpRequest;
  }
});

// node_modules/@sanity/client/lib/http/requestOptions.js
var require_requestOptions = __commonJS({
  "node_modules/@sanity/client/lib/http/requestOptions.js"(exports, module) {
    "use strict";
    var assign2 = require_object_assign();
    var projectHeader = "X-Sanity-Project-ID";
    module.exports = function(config) {
      var overrides = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var headers = {};
      var token = overrides.token || config.token;
      if (token) {
        headers.Authorization = "Bearer ".concat(token);
      }
      if (!overrides.useGlobalApi && !config.useProjectHostname && config.projectId) {
        headers[projectHeader] = config.projectId;
      }
      var withCredentials = Boolean(typeof overrides.withCredentials === "undefined" ? config.token || config.withCredentials : overrides.withCredentials);
      var timeout = typeof overrides.timeout === "undefined" ? config.timeout : overrides.timeout;
      return assign2({}, overrides, {
        headers: assign2({}, headers, overrides.headers || {}),
        timeout: typeof timeout === "undefined" ? 5 * 60 * 1e3 : timeout,
        proxy: overrides.proxy || config.proxy,
        json: true,
        withCredentials
      });
    };
  }
});

// node_modules/@sanity/generate-help-url/dist/generate-help-url.cjs.js
var require_generate_help_url_cjs = __commonJS({
  "node_modules/@sanity/generate-help-url/dist/generate-help-url.cjs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports[Symbol.toStringTag] = "Module";
    var t2 = "https://docs.sanity.io/help/";
    function r2(e2) {
      return t2 + e2;
    }
    exports.generateHelpUrl = r2;
  }
});

// node_modules/@sanity/client/lib/util/once.js
var require_once = __commonJS({
  "node_modules/@sanity/client/lib/util/once.js"(exports, module) {
    "use strict";
    module.exports = function(fn) {
      var didCall = false;
      var returnValue;
      return function() {
        if (didCall) {
          return returnValue;
        }
        returnValue = fn.apply(void 0, arguments);
        didCall = true;
        return returnValue;
      };
    };
  }
});

// node_modules/@sanity/client/lib/warnings.js
var require_warnings = __commonJS({
  "node_modules/@sanity/client/lib/warnings.js"(exports) {
    "use strict";
    var generateHelpUrl = require_generate_help_url_cjs().generateHelpUrl;
    var once = require_once();
    var createWarningPrinter = function createWarningPrinter2(message) {
      return once(function() {
        var _console;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_console = console).warn.apply(_console, [message.join(" ")].concat(args));
      });
    };
    exports.printCdnWarning = createWarningPrinter(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(generateHelpUrl("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]);
    exports.printBrowserTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(generateHelpUrl("js-client-browser-token"), " for more information and how to hide this warning.")]);
    exports.printNoApiVersionSpecifiedWarning = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(generateHelpUrl("js-client-api-version"))]);
  }
});

// node_modules/@sanity/client/lib/config.js
var require_config2 = __commonJS({
  "node_modules/@sanity/client/lib/config.js"(exports) {
    "use strict";
    var generateHelpUrl = require_generate_help_url_cjs().generateHelpUrl;
    var assign2 = require_object_assign();
    var validate2 = require_validators();
    var warnings = require_warnings();
    var defaultCdnHost = "apicdn.sanity.io";
    var defaultConfig = {
      apiHost: "https://api.sanity.io",
      apiVersion: "1",
      useProjectHostname: true,
      isPromiseAPI: true
    };
    var LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];
    var isLocal = function isLocal2(host) {
      return LOCALHOSTS.indexOf(host) !== -1;
    };
    exports.defaultConfig = defaultConfig;
    exports.initConfig = function(config, prevConfig) {
      var specifiedConfig = assign2({}, prevConfig, config);
      if (!specifiedConfig.apiVersion) {
        warnings.printNoApiVersionSpecifiedWarning();
      }
      var newConfig = assign2({}, defaultConfig, specifiedConfig);
      var projectBased = newConfig.useProjectHostname;
      if (typeof Promise === "undefined") {
        var helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
      }
      if (projectBased && !newConfig.projectId) {
        throw new Error("Configuration must contain `projectId`");
      }
      var isBrowser = typeof window !== "undefined" && window.location && window.location.hostname;
      var isLocalhost = isBrowser && isLocal(window.location.hostname);
      if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
        warnings.printBrowserTokenWarning();
      } else if (typeof newConfig.useCdn === "undefined") {
        warnings.printCdnWarning();
      }
      if (projectBased) {
        validate2.projectId(newConfig.projectId);
      }
      if (newConfig.dataset) {
        validate2.dataset(newConfig.dataset);
      }
      if ("requestTagPrefix" in newConfig) {
        newConfig.requestTagPrefix = newConfig.requestTagPrefix ? validate2.requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0;
      }
      newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, "");
      newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
      newConfig.useCdn = Boolean(newConfig.useCdn) && !newConfig.withCredentials;
      exports.validateApiVersion(newConfig.apiVersion);
      var hostParts = newConfig.apiHost.split("://", 2);
      var protocol = hostParts[0];
      var host = hostParts[1];
      var cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
      if (newConfig.useProjectHostname) {
        newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
      } else {
        newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = newConfig.url;
      }
      return newConfig;
    };
    exports.validateApiVersion = function validateApiVersion(apiVersion) {
      if (apiVersion === "1" || apiVersion === "X") {
        return;
      }
      var apiDate = new Date(apiVersion);
      var apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;
      if (!apiVersionValid) {
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
      }
    };
  }
});

// node_modules/@sanity/client/lib/sanityClient.js
var require_sanityClient = __commonJS({
  "node_modules/@sanity/client/lib/sanityClient.js"(exports, module) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key2) {
          _defineProperty(target, key2, source[key2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key2) {
          Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
        });
      }
      return target;
    }
    function _defineProperty(obj, key2, value) {
      if (key2 in obj) {
        Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key2] = value;
      }
      return obj;
    }
    var assign2 = require_object_assign();
    var _require = require_observable2();
    var Observable = _require.Observable;
    var map = _require.map;
    var filter = _require.filter;
    var Patch = require_patch();
    var Transaction = require_transaction();
    var dataMethods = require_dataMethods();
    var DatasetsClient = require_datasetsClient();
    var ProjectsClient = require_projectsClient();
    var AssetsClient = require_assetsClient();
    var UsersClient = require_usersClient();
    var AuthClient = require_authClient();
    var httpRequest = require_request2();
    var getRequestOptions = require_requestOptions();
    var _require2 = require_config2();
    var defaultConfig = _require2.defaultConfig;
    var initConfig = _require2.initConfig;
    var validate2 = require_validators();
    var toPromise = function toPromise2(observable) {
      return observable.toPromise();
    };
    function SanityClient() {
      var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultConfig;
      if (!(this instanceof SanityClient)) {
        return new SanityClient(config);
      }
      this.config(config);
      this.assets = new AssetsClient(this);
      this.datasets = new DatasetsClient(this);
      this.projects = new ProjectsClient(this);
      this.users = new UsersClient(this);
      this.auth = new AuthClient(this);
      if (this.clientConfig.isPromiseAPI) {
        var observableConfig = assign2({}, this.clientConfig, {
          isPromiseAPI: false
        });
        this.observable = new SanityClient(observableConfig);
      }
    }
    assign2(SanityClient.prototype, dataMethods);
    assign2(SanityClient.prototype, {
      clone: function clone() {
        return new SanityClient(this.config());
      },
      config: function config(newConfig) {
        if (typeof newConfig === "undefined") {
          return assign2({}, this.clientConfig);
        }
        if (this.observable) {
          var observableConfig = assign2({}, newConfig, {
            isPromiseAPI: false
          });
          this.observable.config(observableConfig);
        }
        this.clientConfig = initConfig(newConfig, this.clientConfig || {});
        return this;
      },
      withConfig: function withConfig(newConfig) {
        return this.clone().config(newConfig);
      },
      getUrl: function getUrl(uri) {
        var useCdn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var base2 = useCdn ? this.clientConfig.cdnUrl : this.clientConfig.url;
        return "".concat(base2, "/").concat(uri.replace(/^\//, ""));
      },
      isPromiseAPI: function isPromiseAPI() {
        return this.clientConfig.isPromiseAPI;
      },
      _requestObservable: function _requestObservable(options) {
        var _this = this;
        var uri = options.url || options.uri;
        var canUseCdn = typeof options.canUseCdn === "undefined" ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/") === 0 : options.canUseCdn;
        var useCdn = this.clientConfig.useCdn && canUseCdn;
        var tag = options.tag && this.clientConfig.requestTagPrefix ? [this.clientConfig.requestTagPrefix, options.tag].join(".") : options.tag || this.clientConfig.requestTagPrefix;
        if (tag) {
          options.query = _objectSpread({
            tag: validate2.requestTag(tag)
          }, options.query);
        }
        var reqOptions = getRequestOptions(this.clientConfig, assign2({}, options, {
          url: this.getUrl(uri, useCdn)
        }));
        return new Observable(function(subscriber) {
          return httpRequest(reqOptions, _this.clientConfig.requester).subscribe(subscriber);
        });
      },
      request: function request(options) {
        var observable = this._requestObservable(options).pipe(filter(function(event) {
          return event.type === "response";
        }), map(function(event) {
          return event.body;
        }));
        return this.isPromiseAPI() ? toPromise(observable) : observable;
      }
    });
    SanityClient.Patch = Patch;
    SanityClient.Transaction = Transaction;
    SanityClient.ClientError = httpRequest.ClientError;
    SanityClient.ServerError = httpRequest.ServerError;
    SanityClient.requester = httpRequest.defaultRequester;
    module.exports = SanityClient;
  }
});

// .svelte-kit/output/server/_app/immutable/chunks/sanityClient-98e16a8a.js
function useSanityClient() {
  return (0, import_client.default)({
    projectId: "fny7h74i",
    dataset: "production",
    useCdn: true,
    token: "skjyhErW0SbifsQxba9Lx7ySqYUhkiyIi6V9DuKXw47g18fl3dzberpwpgIrsiC4WUi6yI1XC7ovv3uz6zCcUP8XLG5NGXZBSetr478F9x8CcTJrcF7j5ZAahWZHFsctKnz8pSsyKYL281hTTcYuoBKly7aXWyXdFK473KiGDp2luO1FHcIS"
  });
}
var import_client;
var init_sanityClient_98e16a8a = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/sanityClient-98e16a8a.js"() {
    import_client = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/pages/upload.svelte.js
var upload_svelte_exports = {};
__export(upload_svelte_exports, {
  default: () => Upload
});
var import_client2, Upload;
var init_upload_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/upload.svelte.js"() {
    init_index_e8b863ad();
    init_sanityClient_98e16a8a();
    init_user_efb777b8();
    init_constants_131a883b();
    import_client2 = __toESM(require_sanityClient(), 1);
    init_jwt_decode_esm();
    Upload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $$unsubscribe_user;
      $$unsubscribe_user = subscribe(user, (value) => value);
      useSanityClient();
      topics[0].name;
      $$unsubscribe_user();
      return `<div class="${"flex justify-center w-full h-full absolute left-0 top-20 mb-10 pt-10 lg:pt-20 bg-warm-gray-100"}"><div class="${"bg-white rounded-lg flex gap-6 flex-wrap justify-center items-center p-14 pt-6 w-7/10 justify-around xl:h-[80vh]"}"><div><div><p class="${"text-2xl font-bold"}">Upload video</p>
				<p class="${"text-md text-gray-400 mt-1"}">Post video to your account</p></div>
			<div class="${"border-4 border-dashed border-gray-200 rounded-xl flex flex-col justify-center items-center mt-10 outline-none w-[260px] h-[460px] p-6 cursor-pointer hover:border-red-300 bg-gray-100"}">${`
					<div v-else>${`
							<div><label class="${"cursor-pointer"}" for="${"uploadVideo"}"><div class="${"flex flex-col items-center justify-center h-full"}"><div class="${"flex flex-col items-center justify-center"}"><p class="${"font-bold text-xl"}"><span class="${"mdi mdi-cloud-upload text-gray-300 text-6xl"}"></span></p>
											<p class="${"text-xl font-semibold"}">Upload video</p></div>
										<p class="${"text-gray-400 text-center text-sm mt-10 leading-8"}">MP4 or WebM or ogg <br>
											720x1280 or higher <br>
											Up to 10 minutes <br>
											Less than 2GB
										</p>
										<p class="${"bg-accent text-white mt-10 rounded text-center text-md font-medium p-2 w-52 outline-none"}">Select file
										</p>
										<input id="${"uploadVideo"}" type="${"file"}" name="${"upload-video"}" class="${"w-0 h-0"}"></div></label></div>`}

						${``}</div>`}</div></div>
		<div class="${"flex flex-col gap-3 pb-10"}"><label for="${"captionInput"}" class="${"font-medium"}">Caption</label>
			<input id="${"captionInput"}" type="${"text"}" v-model="${"caption"}" class="${"rounded outline-none border-2 border-gray-200 p-2"}">
			<label for="${"selectInput"}" class="${"font-medium"}">Choose a Category</label>
			<select id="${"selectInput"}" class="${"rounded outline-none border-2 border-gray-200 p-2 capitalize cursor-pointer lg:p-4"}">${each(topics, (topic) => {
        return `
					<option class="${"capitalize bg-white outline-transparent text-gray-700 hover:bg-slate-300"}"${add_attribute("value", topic.name, 0)}>${escape2(topic.name)}
					</option>`;
      })}</select>
			<div class="${"flex gap-6 mt-10"}"><button class="${"border-gray-300 border-2 font-medium p-2 rounded w-28 lg:w-44"}" type="${"button"}">Discard
				</button>
				<button class="${"bg-accent text-white border-transparent border-2 font-medium p-2 rounded w-28 lg:w-44"}" type="${"button"}">Post
				</button>
				</div></div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports4 = {};
__export(__exports4, {
  file: () => file4,
  imports: () => imports4,
  index: () => index4,
  module: () => upload_svelte_exports,
  stylesheets: () => stylesheets4
});
var index4, file4, imports4, stylesheets4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    init_upload_svelte();
    index4 = 7;
    file4 = "_app/immutable/pages/upload.svelte-5eeec2f1.js";
    imports4 = ["_app/immutable/pages/upload.svelte-5eeec2f1.js", "_app/immutable/chunks/index-db28f1ac.js", "_app/immutable/chunks/user-7308f3fc.js", "_app/immutable/chunks/index-7f4ad20e.js", "_app/immutable/chunks/navigation-7f0d9bcc.js", "_app/immutable/chunks/singletons-eca981c1.js", "_app/immutable/chunks/Loader-ae73d8ca.js"];
    stylesheets4 = ["_app/immutable/assets/Loader-cf022557.css"];
  }
});

// .svelte-kit/output/server/_app/immutable/chunks/Loader-8264a7e3.js
var css, Loader;
var init_Loader_8264a7e3 = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/Loader-8264a7e3.js"() {
    init_index_e8b863ad();
    css = {
      code: ".lds-default.svelte-7wpvcl.svelte-7wpvcl{display:inline-block;position:relative;width:80px;height:80px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl{position:absolute;width:6px;height:6px;background:red;border-radius:50%;animation:svelte-7wpvcl-lds-default 1.2s linear infinite}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(1){animation-delay:0s;top:37px;left:66px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(2){animation-delay:-0.1s;top:22px;left:62px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(3){animation-delay:-0.2s;top:11px;left:52px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(4){animation-delay:-0.3s;top:7px;left:37px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(5){animation-delay:-0.4s;top:11px;left:22px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(6){animation-delay:-0.5s;top:22px;left:11px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(7){animation-delay:-0.6s;top:37px;left:7px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(8){animation-delay:-0.7s;top:52px;left:11px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(9){animation-delay:-0.8s;top:62px;left:22px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(10){animation-delay:-0.9s;top:66px;left:37px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(11){animation-delay:-1s;top:62px;left:52px}.lds-default.svelte-7wpvcl div.svelte-7wpvcl:nth-child(12){animation-delay:-1.1s;top:52px;left:62px}@keyframes svelte-7wpvcl-lds-default{0%,20%,80%,100%{transform:scale(1)}50%{transform:scale(1.5)}}",
      map: null
    };
    Loader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<div class="${"lds-default svelte-7wpvcl"}"><div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
	<div class="${"svelte-7wpvcl"}"></div>
</div>`;
    });
  }
});

// .svelte-kit/output/server/entries/pages/details/_id_.svelte.js
var id_svelte_exports = {};
__export(id_svelte_exports, {
  default: () => U5Bidu5D
});
var browser, LikesButton, Comments, U5Bidu5D;
var init_id_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/details/_id_.svelte.js"() {
    init_index_e8b863ad();
    init_user_efb777b8();
    init_Loader_8264a7e3();
    init_jwt_decode_esm();
    browser = false;
    LikesButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let filterLikes;
      let likesLength;
      let $user, $$unsubscribe_user;
      $$unsubscribe_user = subscribe(user, (value) => $user = value);
      let { likes } = $$props;
      createEventDispatcher();
      let alreadyLiked = false;
      function watchLikes(likes2) {
        if ((filterLikes === null || filterLikes === void 0 ? void 0 : filterLikes.length) > 0) {
          alreadyLiked = true;
        } else {
          alreadyLiked = false;
        }
      }
      if ($$props.likes === void 0 && $$bindings.likes && likes !== void 0)
        $$bindings.likes(likes);
      filterLikes = likes === null || likes === void 0 ? void 0 : likes.filter((item) => (item === null || item === void 0 ? void 0 : item._ref) === $user._id);
      {
        watchLikes();
      }
      {
        watchLikes();
      }
      likesLength = (likes === null || likes === void 0 ? void 0 : likes.length) || 0;
      $$unsubscribe_user();
      return `<div class="${"gap-6"}"><div class="${"mt-4 inline-flex flex-col justify-center items-center cursor-pointer"}">${alreadyLiked ? `<div><div class="${"rounded-full text-lg text-accent block aspect-square !leading-none p-2 md:text-2xl md:p-4 i-mdi-heart-multiple"}"></div></div>` : `<div><div class="${"rounded-full text-lg text-accent block aspect-square !leading-none p-2 md:text-2xl md:p-4 i-mdi-heart-multiple-outline"}"></div></div>`}

		<p class="${"font-semibold"}">${escape2(likesLength)}</p></div></div>`;
    });
    Comments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let showCommentsComputed;
      let $$unsubscribe_allUsers;
      let $user, $$unsubscribe_user;
      $$unsubscribe_allUsers = subscribe(allUsers, (value) => value);
      $$unsubscribe_user = subscribe(user, (value) => $user = value);
      let { isPostingComment } = $$props;
      let { comments } = $$props;
      createEventDispatcher();
      let newComment = "";
      let wrapperEl = null;
      const classesToToggle = `transform transition-transform duration-300 -translate-y-70/100`;
      if ($$props.isPostingComment === void 0 && $$bindings.isPostingComment && isPostingComment !== void 0)
        $$bindings.isPostingComment(isPostingComment);
      if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
        $$bindings.comments(comments);
      showCommentsComputed = browser;
      $$unsubscribe_allUsers();
      $$unsubscribe_user();
      return `


<div class="${"relative transform transition-transform duration-300 pb-28 lg:pb-0 " + escape2(showCommentsComputed && classesToToggle, true)}"${add_attribute("this", wrapperEl, 0)}><div class="${"border-t-2 border-b-2 border-gray-200 bg-light-300 px-2 md:px-10 pb-28 lg:pb-0 overflow-y-scroll"}"><div class="${"h-72 max-h-[75vh] lg:h-lg lg:max-h-full"}">${`
				<div class="${"w-full h-full flex justify-center p-5"}">${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}</div>`}</div></div>
	${$user ? `<div class="${"absolute bottom-0 left-0 pb-2 px-2 md:px-10 lg:absolute"}"><form class="${"flex flex-wrap gap-2 md:gap-4"}"><input class="${"bg-primaryBg px-6 py-4 font-medium border-2 border-gray-100 w-64 max-w-60/100 md:w-3xl lg:w-72 focus:border-accent/50 focus:outline-none flex-1 rounded-lg"}" type="${"text"}" placeholder="${"add comment"}"${add_attribute("value", newComment, 0)}>
				<button class="${"border-2 border-accent px-2 rounded-lg transition-colors hover:bg-accent hover:text-white"}" aria-label="${"submit comment"}">${escape2(isPostingComment ? "Commenting.." : "Comment")}</button></form></div>` : ``}</div>`;
    });
    U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      var _a, _b;
      let $user, $$unsubscribe_user;
      $$unsubscribe_user = subscribe(user, (value) => $user = value);
      let { post } = $$props;
      let currentPost = post;
      let videoRef = null;
      let isPostingComment = false;
      if ($$props.post === void 0 && $$bindings.post && post !== void 0)
        $$bindings.post(post);
      $$unsubscribe_user();
      return `<div>${!currentPost ? `
		<div>Oopsy</div>` : `
		<div class="${"flex w-full h-full absolute left-0 top-0 bottom-0 bg-white flex-wrap lg:flex-nowrap"}">
			<div class="${"relative flex-2 w-full lg:w-75/100 flex justify-center items-center"}"><div class="${"absolute inset-0 bg-blurred-img-my bg-no-repeat bg-cover filter blur-lg"}"></div>
				<a class="${"absolute top-6 left-2 lg:left-6 flex gap-6 z-50 p-1 bg-white opacity-60 rounded-full hover:opacity-100"}" href="${"/"}"><div class="${"i-mdi-close text-2xl leading-none"}"></div></a>
				<div class="${"relative"}"><div class="${"lg:h-screen h-[57vh]"}"><video class="${"h-full cursor-pointer"}" loop${add_attribute("src", (_b = (_a = currentPost == null ? void 0 : currentPost.video) == null ? void 0 : _a.asset) == null ? void 0 : _b.url, 0)}${add_attribute("this", videoRef, 0)}></video></div>

					<div class="${"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}">${`<button class="${"p-1 bg-white rounded-xl"}"><div class="${"i-mdi-play text-6xl lg:text-8xl"}"></div></button>`}</div>
					<div class="${"absolute bottom-5 right-5 lg:right-10 lg:bottom-10 rounded-full p-1 bg-white opacity-50 filter drop-shadow-sm cursor-pointer hover:opacity-100"}">${`<button class="${""}" aria-label="${"turn off volume"}"><div class="${"i-mdi-volume-high text-black text-2xl lg:text-4xl"}"></div></button>`}</div></div></div>

			<div class="${"relative flex-grow flex-shrink-0 w-full bg-white lg:w-25/100"}"><div class="${"mt-5 lg:mt-20"}"><div class="${"flex gap-3 p-2 cursor-pointer font-semibold rounded"}"><div class="${"w-12 h-12 md:w-16 md:h-16"}"><a class="${"block w-full h-full"}"${add_attribute("href", `/profile/${currentPost.postedBy._id}`, 0)}><img${add_attribute("src", currentPost.postedBy.image, 0)} class="${"block w-full h-full object-cover rounded-full aspect-square"}"${add_attribute("alt", `photo of ${currentPost.postedBy.userName}'s profile`, 0)}></a></div>
						<div><a${add_attribute("href", `/profile/${currentPost.postedBy._id}`, 0)}><div class="${"flex flex-col gap-2 mt-2"}"><p class="${"flex gap-2 items-center font-bold text-primary md:text-md"}">${escape2(currentPost.postedBy.userName)}</p>
									<p class="${"capitalize font-medium text-xs text-gray-500 hidden md:(block)"}">${escape2(currentPost.postedBy.userName)}</p></div></a></div></div>

					<p class="${"px-10 text-gray-600 text-lg"}">${escape2(currentPost.caption)}</p>

					<div class="${"mt-5 px-10"}">
						${$user ? `${validate_component(LikesButton, "LikesButton").$$render($$result, { likes: currentPost.likes }, {}, {})}` : ``}

						</div>
					${validate_component(Comments, "Comments").$$render($$result, {
        isPostingComment,
        comments: post.comments
      }, {}, {})}
					
					</div></div></div>`}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports5 = {};
__export(__exports5, {
  file: () => file5,
  imports: () => imports5,
  index: () => index5,
  module: () => id_svelte_exports,
  stylesheets: () => stylesheets5
});
var index5, file5, imports5, stylesheets5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_id_svelte();
    index5 = 2;
    file5 = "_app/immutable/pages/details/_id_.svelte-0ef0d75d.js";
    imports5 = ["_app/immutable/pages/details/_id_.svelte-0ef0d75d.js", "_app/immutable/chunks/index-db28f1ac.js", "_app/immutable/chunks/user-7308f3fc.js", "_app/immutable/chunks/index-7f4ad20e.js", "_app/immutable/chunks/NoResults-03348de5.js", "_app/immutable/chunks/Loader-ae73d8ca.js"];
    stylesheets5 = ["_app/immutable/assets/Loader-cf022557.css"];
  }
});

// .svelte-kit/output/server/entries/pages/profile/_id_.svelte.js
var id_svelte_exports2 = {};
__export(id_svelte_exports2, {
  default: () => U5Bidu5D2
});
var U5Bidu5D2;
var init_id_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/profile/_id_.svelte.js"() {
    init_index_e8b863ad();
    init_VideoCard_23c966d0();
    U5Bidu5D2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let noResultsTextComp;
      let { user: user2 } = $$props;
      let { userVideos } = $$props;
      let { userLikedVideos } = $$props;
      var ITab;
      (function(ITab2) {
        ITab2["Videos"] = "Videos";
        ITab2["Likes"] = "Liked";
      })(ITab || (ITab = {}));
      let selectedTab = ITab.Videos;
      let videoList = [];
      if ($$props.user === void 0 && $$bindings.user && user2 !== void 0)
        $$bindings.user(user2);
      if ($$props.userVideos === void 0 && $$bindings.userVideos && userVideos !== void 0)
        $$bindings.userVideos(userVideos);
      if ($$props.userLikedVideos === void 0 && $$bindings.userLikedVideos && userLikedVideos !== void 0)
        $$bindings.userLikedVideos(userLikedVideos);
      {
        {
          if (selectedTab === ITab.Videos) {
            videoList = userVideos;
          } else if (selectedTab === ITab.Likes) {
            videoList = userLikedVideos;
          }
        }
      }
      noResultsTextComp = selectedTab === ITab.Videos ? `No Videos Yet` : `No Liked Videos Yet`;
      return `<div class="${"w-full"}"><div class="${"flex gap-6 mb-4 items-center bg-white w-full md:gap-10"}"><div class="${"w-16 h-16 md:w-32 md:h-32"}"><img class="${"rounded-full w-full h-full"}"${add_attribute("src", user2.image, 0)}${add_attribute("alt", `photo of ${user2.userName}'s profile`, 0)}></div>
		<div class="${"flex flex-col justify-center"}"><p class="${"flex gap-1 items-center justify-center font-bold lowercase md:(text-3xl tracking-wider)"}">${escape2(user2.userName.replaceAll(` `, ``))}
				</p>
			<p class="${"capitalize text-gray-400 text-xs md:(text-xl)"}">${escape2(user2.userName)}</p></div></div>

	<div><div class="${"flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full"}"><button class="${[
        "text-xl font-semibold cursor-pointer mt-2 border-b-2 border-transparent",
        (selectedTab === ITab.Videos ? "!border-dark-400" : "") + " " + (selectedTab !== ITab.Videos ? "!text-gray-400" : "")
      ].join(" ").trim()}"${add_attribute("aria-label", `View videos of ${user2.userName}`, 0)}>${escape2(ITab.Videos)}</button>
			<button class="${[
        "text-xl font-semibold cursor-pointer mt-2 border-b-2 border-transparent",
        (selectedTab === ITab.Likes ? "!border-dark-400" : "") + " " + (selectedTab !== ITab.Likes ? "!text-gray-400" : "")
      ].join(" ").trim()}"${add_attribute("aria-label", `View liked videos of ${user2.userName}`, 0)}>${escape2(ITab.Likes)}</button></div>

		<div class="${[
        "flex gap-6 flex-wrap md:justify-start",
        videoList.length === 0 ? "!justify-center" : ""
      ].join(" ").trim()}">${videoList.length ? each(videoList, (post) => {
        return `
				${validate_component(VideoCard, "VideoCard").$$render($$result, { post }, {}, {})}`;
      }) : `
				${validate_component(NoResults, "NoResults").$$render($$result, { text: noResultsTextComp }, {}, {})}`}</div></div></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports6 = {};
__export(__exports6, {
  file: () => file6,
  imports: () => imports6,
  index: () => index6,
  module: () => id_svelte_exports2,
  stylesheets: () => stylesheets6
});
var index6, file6, imports6, stylesheets6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_id_svelte2();
    index6 = 4;
    file6 = "_app/immutable/pages/profile/_id_.svelte-5df9bd06.js";
    imports6 = ["_app/immutable/pages/profile/_id_.svelte-5df9bd06.js", "_app/immutable/chunks/index-db28f1ac.js", "_app/immutable/chunks/NoResults-03348de5.js", "_app/immutable/chunks/VideoCard-180f1723.js"];
    stylesheets6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/search/_searchTerm_.svelte.js
var searchTerm_svelte_exports = {};
__export(searchTerm_svelte_exports, {
  default: () => U5BsearchTermu5D
});
var U5BsearchTermu5D;
var init_searchTerm_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/search/_searchTerm_.svelte.js"() {
    init_index_e8b863ad();
    init_user_efb777b8();
    init_Loader_8264a7e3();
    init_stores_b2c4a4bd();
    init_jwt_decode_esm();
    U5BsearchTermu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let searchTerm;
      let $allUsers, $$unsubscribe_allUsers;
      let $page, $$unsubscribe_page;
      $$unsubscribe_allUsers = subscribe(allUsers, (value) => $allUsers = value);
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      let { videos } = $$props;
      var ITab;
      (function(ITab2) {
        ITab2["IsAccounts"] = "Accounts";
        ITab2["IsVideos"] = "Videos";
      })(ITab || (ITab = {}));
      ITab.IsAccounts;
      if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0)
        $$bindings.videos(videos);
      searchTerm = $page.params.searchTerm;
      $allUsers === null || $allUsers === void 0 ? void 0 : $allUsers.filter((user2) => user2.userName.toLowerCase().includes(searchTerm.toLowerCase()));
      $$unsubscribe_allUsers();
      $$unsubscribe_page();
      return `<div class="${"w-full"}">${`<div class="${"w-full h-full flex justify-center p-5"}">${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}</div>`}</div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports7 = {};
__export(__exports7, {
  file: () => file7,
  imports: () => imports7,
  index: () => index7,
  module: () => searchTerm_svelte_exports,
  stylesheets: () => stylesheets7
});
var index7, file7, imports7, stylesheets7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_searchTerm_svelte();
    index7 = 5;
    file7 = "_app/immutable/pages/search/_searchTerm_.svelte-c32ef53e.js";
    imports7 = ["_app/immutable/pages/search/_searchTerm_.svelte-c32ef53e.js", "_app/immutable/chunks/index-db28f1ac.js", "_app/immutable/chunks/user-7308f3fc.js", "_app/immutable/chunks/index-7f4ad20e.js", "_app/immutable/chunks/VideoCard-180f1723.js", "_app/immutable/chunks/NoResults-03348de5.js", "_app/immutable/chunks/Loader-ae73d8ca.js", "_app/immutable/chunks/stores-7718f57e.js"];
    stylesheets7 = ["_app/immutable/assets/Loader-cf022557.css"];
  }
});

// .svelte-kit/output/server/entries/pages/topic/_id_.svelte.js
var id_svelte_exports3 = {};
__export(id_svelte_exports3, {
  default: () => U5Bidu5D3
});
var U5Bidu5D3;
var init_id_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/topic/_id_.svelte.js"() {
    init_index_e8b863ad();
    init_VideoCard_23c966d0();
    U5Bidu5D3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { topicPosts } = $$props;
      if ($$props.topicPosts === void 0 && $$bindings.topicPosts && topicPosts !== void 0)
        $$bindings.topicPosts(topicPosts);
      return `${topicPosts.length > 0 ? `
	${each(topicPosts, (post) => {
        return `${validate_component(VideoCard, "VideoCard").$$render($$result, { post }, {}, {})}`;
      })}` : `
	${validate_component(NoResults, "NoResults").$$render($$result, { text: `no results found` }, {}, {})}`}`;
    });
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports8 = {};
__export(__exports8, {
  file: () => file8,
  imports: () => imports8,
  index: () => index8,
  module: () => id_svelte_exports3,
  stylesheets: () => stylesheets8
});
var index8, file8, imports8, stylesheets8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    init_id_svelte3();
    index8 = 6;
    file8 = "_app/immutable/pages/topic/_id_.svelte-4f41055c.js";
    imports8 = ["_app/immutable/pages/topic/_id_.svelte-4f41055c.js", "_app/immutable/chunks/index-db28f1ac.js", "_app/immutable/chunks/VideoCard-180f1723.js", "_app/immutable/chunks/NoResults-03348de5.js"];
    stylesheets8 = [];
  }
});

// .svelte-kit/output/server/_app/immutable/chunks/queries-61507028.js
var allPostsQuery, postDetailQuery, searchPostsQuery, singleUserQuery, allUsersQuery, userCreatedPostsQuery, userLikedPostsQuery, topicPostsQuery;
var init_queries_61507028 = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/queries-61507028.js"() {
    allPostsQuery = `*[_type == "post"] | order(_createdAt desc){
  _id,
   caption,
     video{
      asset->{
        _id,
        url
      }
    },
    userId,
    postedBy->{
      _id,
      userName,
      image
    },
  likes,
  comments[]{
    comment,
    _key,
    postedBy->{
    _id,
    userName,
    image
  },
  }
} `;
    postDetailQuery = (postId) => {
      const query = `*[_type == "post" && _id == '${postId}'] | order(comment._createdAt desc){
    _id,
    caption,
    video{
      asset->{
        _id,
        url
      }
    },
    userId,
    postedBy->{
      _id,
      userName,
      image
    },
    likes,
    comments[]{
      comment,
      _key,
      postedBy->{
        _ref,
        _id,
      },
    }
  }`;
      return query;
    };
    searchPostsQuery = (searchTerm) => {
      const query = `*[_type == "post" && caption match '${searchTerm}*' || topic match '${searchTerm}*'] | order(_createdAt desc) {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
      return query;
    };
    singleUserQuery = (userId) => {
      const query = `*[_type == "user" && _id == '${userId}']`;
      return query;
    };
    allUsersQuery = () => {
      const query = `*[_type == "user"]`;
      return query;
    };
    userCreatedPostsQuery = (userId) => {
      const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
      return query;
    };
    userLikedPostsQuery = (userId) => {
      const query = `*[_type == 'post' && '${userId}' in likes[]._ref ] | order(_createdAt desc) {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
      return query;
    };
    topicPostsQuery = (topic) => {
      const query = `*[_type == "post" && topic match '${topic}*'] | order(_createdAt desc) {
    _id,
     caption,
       video{
        asset->{
          _id,
          url
        }
      },
      userId,
    postedBy->{
      _id,
      userName,
      image
    },
 likes,
    comments[]{
      comment,
      _key,
      postedBy->{
      _id,
      userName,
      image
    },
    }
  }`;
      return query;
    };
  }
});

// .svelte-kit/output/server/entries/endpoints/index.ts.js
var index_ts_exports = {};
__export(index_ts_exports, {
  GET: () => GET
});
async function GET({ url }) {
  const sanity = useSanityClient();
  const posts = await sanity.fetch(allPostsQuery);
  return {
    status: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: {
      posts
    }
  };
}
var import_client3;
var init_index_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/index.ts.js"() {
    init_queries_61507028();
    init_sanityClient_98e16a8a();
    import_client3 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/endpoints/upload.ts.js
var upload_ts_exports = {};
__export(upload_ts_exports, {
  POST: () => POST
});
async function POST({ request }) {
  try {
    const body = await request.json();
    console.log("body: ", body);
    const { selectedFile } = body;
    console.log("selectedFile: ", selectedFile);
    const sanity = useSanityClient();
    const data = await (sanity == null ? void 0 : sanity.assets.upload("file", selectedFile));
    console.log("data: ", data);
    return {
      status: 200,
      headers: {
        "access-control-allow-origin": "*"
      },
      body: {
        ok: true,
        data
      }
    };
  } catch (error2) {
    return {
      status: 404
    };
  }
}
var import_client4;
var init_upload_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/upload.ts.js"() {
    init_sanityClient_98e16a8a();
    import_client4 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/endpoints/api/users.ts.js
var users_ts_exports = {};
__export(users_ts_exports, {
  GET: () => GET2
});
async function GET2() {
  const sanity = useSanityClient();
  const allUsers2 = await sanity.fetch(allUsersQuery());
  return {
    status: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: {
      allUsers: allUsers2
    }
  };
}
var import_client5;
var init_users_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/api/users.ts.js"() {
    init_queries_61507028();
    init_sanityClient_98e16a8a();
    import_client5 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/endpoints/api/post/index.ts.js
var index_ts_exports2 = {};
__export(index_ts_exports2, {
  POST: () => POST2
});
async function POST2({ request }) {
  try {
    const body = await request.json();
    const { post } = body;
    console.log("post: ", post);
    const sanity = useSanityClient();
    const data = await sanity.create(post);
    return {
      status: 200,
      headers: {
        "access-control-allow-origin": "*"
      },
      body: {
        ok: true,
        data
      }
    };
  } catch (error2) {
    return {
      status: 404
    };
  }
}
var import_client6;
var init_index_ts2 = __esm({
  ".svelte-kit/output/server/entries/endpoints/api/post/index.ts.js"() {
    init_sanityClient_98e16a8a();
    import_client6 = __toESM(require_sanityClient(), 1);
  }
});

// node_modules/uuid/dist/esm-browser/rng.js
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var getRandomValues, rnds8;
var init_rng = __esm({
  "node_modules/uuid/dist/esm-browser/rng.js"() {
    rnds8 = new Uint8Array(16);
  }
});

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default;
var init_regex = __esm({
  "node_modules/uuid/dist/esm-browser/regex.js"() {
    regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  }
});

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default;
var init_validate = __esm({
  "node_modules/uuid/dist/esm-browser/validate.js"() {
    init_regex();
    validate_default = validate;
  }
});

// node_modules/uuid/dist/esm-browser/stringify.js
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var byteToHex, i, stringify_default;
var init_stringify = __esm({
  "node_modules/uuid/dist/esm-browser/stringify.js"() {
    init_validate();
    byteToHex = [];
    for (i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).substr(1));
    }
    stringify_default = stringify;
  }
});

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default;
var init_v4 = __esm({
  "node_modules/uuid/dist/esm-browser/v4.js"() {
    init_rng();
    init_stringify();
    v4_default = v4;
  }
});

// node_modules/uuid/dist/esm-browser/index.js
var init_esm_browser = __esm({
  "node_modules/uuid/dist/esm-browser/index.js"() {
    init_v4();
  }
});

// .svelte-kit/output/server/entries/endpoints/api/like.ts.js
var like_ts_exports = {};
__export(like_ts_exports, {
  PUT: () => PUT
});
async function PUT({ request }) {
  try {
    const body = await request.json();
    const { likeData } = body;
    const { userId, postId, like } = likeData;
    console.log({ userId, postId, like });
    const sanity = useSanityClient();
    const data = like ? await sanity.patch(postId).setIfMissing({ likes: [] }).insert("after", "likes[-1]", [
      {
        _key: v4_default(),
        _ref: userId
      }
    ]).commit() : await sanity.patch(postId).unset([`likes[_ref=="${userId}"]`]).commit();
    console.log("data.likes: ", data.likes);
    return {
      status: 200,
      headers: {
        "access-control-allow-origin": "*"
      },
      body: {
        ok: true,
        data
      }
    };
  } catch (error2) {
    return {
      status: 404
    };
  }
}
var import_client7;
var init_like_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/api/like.ts.js"() {
    init_sanityClient_98e16a8a();
    init_esm_browser();
    import_client7 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/endpoints/api/auth.ts.js
var auth_ts_exports = {};
__export(auth_ts_exports, {
  POST: () => POST3
});
async function POST3({ request }) {
  const user2 = await request.json();
  console.log("user: ", user2);
  const sanity = useSanityClient();
  const res = await sanity.createIfNotExists(user2);
  console.log("res: ", res);
  return {
    status: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: {
      ok: true,
      res
    }
  };
}
var import_client8;
var init_auth_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/api/auth.ts.js"() {
    init_sanityClient_98e16a8a();
    import_client8 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/endpoints/api/post/_id_.ts.js
var id_ts_exports = {};
__export(id_ts_exports, {
  PUT: () => PUT2
});
async function PUT2({ request, params }) {
  try {
    const body = await request.json();
    const { commentData } = body;
    const { userId, comment } = commentData;
    const sanity = useSanityClient();
    const data = await sanity.patch(params.id).setIfMissing({ comments: [] }).insert("after", "comments[-1]", [
      {
        comment,
        _key: v4_default(),
        postedBy: { _type: "postedBy", _ref: userId }
      }
    ]).commit();
    return {
      status: 200,
      headers: {
        "access-control-allow-origin": "*"
      },
      body: {
        ok: true,
        data
      }
    };
  } catch (error2) {
    return {
      status: 404
    };
  }
}
var import_client9;
var init_id_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/api/post/_id_.ts.js"() {
    init_sanityClient_98e16a8a();
    init_esm_browser();
    import_client9 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/endpoints/details/_id_.ts.js
var id_ts_exports2 = {};
__export(id_ts_exports2, {
  GET: () => GET3
});
async function GET3({ request, params }) {
  const sanity = useSanityClient();
  const post = await sanity.fetch(postDetailQuery(params.id));
  return {
    status: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: {
      post: post[0]
    }
  };
}
var import_client10;
var init_id_ts2 = __esm({
  ".svelte-kit/output/server/entries/endpoints/details/_id_.ts.js"() {
    init_queries_61507028();
    init_sanityClient_98e16a8a();
    import_client10 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/endpoints/profile/_id_.ts.js
var id_ts_exports3 = {};
__export(id_ts_exports3, {
  GET: () => GET4
});
async function GET4({ params }) {
  const sanity = useSanityClient();
  const { id } = params;
  const query = singleUserQuery(id);
  const userVideosQuery = userCreatedPostsQuery(id);
  const userLikedVideosQuery = userLikedPostsQuery(id);
  const [user2, userVideos, userLikedVideos] = await Promise.all([
    sanity.fetch(query),
    sanity.fetch(userVideosQuery),
    sanity.fetch(userLikedVideosQuery)
  ]);
  return {
    status: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: {
      user: user2[0],
      userVideos,
      userLikedVideos
    }
  };
}
var import_client11;
var init_id_ts3 = __esm({
  ".svelte-kit/output/server/entries/endpoints/profile/_id_.ts.js"() {
    init_queries_61507028();
    init_sanityClient_98e16a8a();
    import_client11 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/endpoints/search/_searchTerm_.ts.js
var searchTerm_ts_exports = {};
__export(searchTerm_ts_exports, {
  GET: () => GET5
});
async function GET5({ params }) {
  const sanity = useSanityClient();
  const searchTerm = params.searchTerm;
  const videosQuery = searchPostsQuery(searchTerm);
  const data = await sanity.fetch(videosQuery);
  return {
    status: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: {
      videos: data
    }
  };
}
var import_client12;
var init_searchTerm_ts = __esm({
  ".svelte-kit/output/server/entries/endpoints/search/_searchTerm_.ts.js"() {
    init_queries_61507028();
    init_sanityClient_98e16a8a();
    import_client12 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/entries/endpoints/topic/_id_.ts.js
var id_ts_exports4 = {};
__export(id_ts_exports4, {
  GET: () => GET6
});
async function GET6({ request, params }) {
  console.log("params: ", params);
  const sanity = useSanityClient();
  const topicPosts = await sanity.fetch(topicPostsQuery(params.id));
  return {
    status: 200,
    headers: {
      "access-control-allow-origin": "*"
    },
    body: {
      topicPosts
    }
  };
}
var import_client13;
var init_id_ts4 = __esm({
  ".svelte-kit/output/server/entries/endpoints/topic/_id_.ts.js"() {
    init_queries_61507028();
    init_sanityClient_98e16a8a();
    import_client13 = __toESM(require_sanityClient(), 1);
  }
});

// .svelte-kit/output/server/index.js
init_index_e8b863ad();
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
  function stringify2(thing) {
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
        return "Object(" + stringify2(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify2(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify2).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key2) {
          return safeKey(key2) + ":" + stringify2(thing[key2]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify2(value);
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
          values_1.push("Object(" + stringify2(thing.valueOf()) + ")");
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
            statements_1.push(name + "[" + i + "]=" + stringify2(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify2(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify2(k) + ", " + stringify2(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key2) {
            statements_1.push("" + name + safeProp(key2) + "=" + stringify2(thing[key2]));
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
function safe_not_equal2(a, b) {
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
    if (safe_not_equal2(value, new_value)) {
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
  const stylesheets9 = new Set(entry.stylesheets);
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
        node.stylesheets.forEach((url) => stylesheets9.add(url));
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
				error: ${error2 && serialize_error(error2, (e2) => e2.stack)},
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
  head += Array.from(stylesheets9).map((dep) => {
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
  var index9 = 0;
  while (index9 < str.length) {
    var eqIdx = str.indexOf("=", index9);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index9);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index9 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index9, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index9 = endIdx + 1;
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
  } catch (e2) {
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
  } catch (e2) {
    console.error("set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.", e2);
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
          const file9 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            response = new Response(options.read(file9), {
              headers: type ? { "content-type": type } : {}
            });
          } else {
            response = await fetch(`${event.url.origin}/${file9}`, opts);
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
  } catch (e2) {
    const error2 = coalesce_to_error(e2);
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
    nodes = await Promise.all(route.a.map((n2) => n2 == void 0 ? n2 : options.manifest._.nodes[n2]()));
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
          const e2 = coalesce_to_error(err);
          options.handle_error(e2, event);
          status = 500;
          error2 = e2;
        }
        if (loaded && !error2) {
          branch.push(loaded);
        }
        if (error2) {
          while (i--) {
            if (route.b[i]) {
              const index9 = route.b[i];
              const error_node = await options.manifest._.nodes[index9]();
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
                const e2 = coalesce_to_error(err);
                options.handle_error(e2, event);
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
                const location = response2.headers.get("location");
                if (location) {
                  const headers = new Headers(response2.headers);
                  headers.set("x-sveltekit-location", location);
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
  } catch (e2) {
    const error2 = coalesce_to_error(e2);
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
    } catch (e22) {
      const error3 = coalesce_to_error(e22);
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
    entry: { "file": "_app/immutable/start-5aa84ede.js", "imports": ["_app/immutable/start-5aa84ede.js", "_app/immutable/chunks/index-db28f1ac.js", "_app/immutable/chunks/index-7f4ad20e.js", "_app/immutable/chunks/singletons-eca981c1.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
      () => Promise.resolve().then(() => (init__6(), __exports6)),
      () => Promise.resolve().then(() => (init__7(), __exports7)),
      () => Promise.resolve().then(() => (init__8(), __exports8))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: () => Promise.resolve().then(() => (init_index_ts(), index_ts_exports)),
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "upload",
        pattern: /^\/upload\/?$/,
        names: [],
        types: [],
        path: "/upload",
        shadow: () => Promise.resolve().then(() => (init_upload_ts(), upload_ts_exports)),
        a: [0, 3],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/users",
        pattern: /^\/api\/users\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => (init_users_ts(), users_ts_exports))
      },
      {
        type: "endpoint",
        id: "api/post",
        pattern: /^\/api\/post\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => (init_index_ts2(), index_ts_exports2))
      },
      {
        type: "endpoint",
        id: "api/like",
        pattern: /^\/api\/like\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => (init_like_ts(), like_ts_exports))
      },
      {
        type: "endpoint",
        id: "api/auth",
        pattern: /^\/api\/auth\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => (init_auth_ts(), auth_ts_exports))
      },
      {
        type: "endpoint",
        id: "api/post/[id]",
        pattern: /^\/api\/post\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        load: () => Promise.resolve().then(() => (init_id_ts(), id_ts_exports))
      },
      {
        type: "page",
        id: "details/[id]",
        pattern: /^\/details\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => (init_id_ts2(), id_ts_exports2)),
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "profile/[id]",
        pattern: /^\/profile\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => (init_id_ts3(), id_ts_exports3)),
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "search/[searchTerm]",
        pattern: /^\/search\/([^/]+?)\/?$/,
        names: ["searchTerm"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => (init_searchTerm_ts(), searchTerm_ts_exports)),
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "topic/[id]",
        pattern: /^\/topic\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: () => Promise.resolve().then(() => (init_id_ts4(), id_ts_exports4)),
        a: [0, 7],
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
  let file9 = pathname.substring(1);
  try {
    file9 = decodeURIComponent(file9);
  } catch (err) {
  }
  return manifest.assets.has(file9) || manifest.assets.has(file9 + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! js-cookie v3.0.1 | MIT */
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
//# sourceMappingURL=render.js.map
