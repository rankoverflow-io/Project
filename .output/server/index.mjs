globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/404.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"77c9-vQ5udVgNFO2EB+DB7pNhCMMoJOo\"",
		"mtime": "2026-08-04T15:08:55.347Z",
		"size": 30665,
		"path": "../public/404.html"
	},
	"/about-visual.jpg": {
		"type": "image/jpeg",
		"etag": "\"d830-14QTOYuhXTpVCV85HgKhBcV5o/I\"",
		"mtime": "2026-08-04T15:08:55.347Z",
		"size": 55344,
		"path": "../public/about-visual.jpg"
	},
	"/about.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"afa1-NlOkZoiOy+DlA91qbUwtLFEoO5g\"",
		"mtime": "2026-08-04T15:08:55.347Z",
		"size": 44961,
		"path": "../public/about.html"
	},
	"/ai-hero-visual.jpg": {
		"type": "image/jpeg",
		"etag": "\"12b50-a+ksDSZ68Z5TAj7UAoCV2I0B3ys\"",
		"mtime": "2026-08-04T15:08:55.347Z",
		"size": 76624,
		"path": "../public/ai-hero-visual.jpg"
	},
	"/ai-services.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"db58-gStmZgFW23hgGdV1N82q7b1MWeo\"",
		"mtime": "2026-08-04T15:08:55.347Z",
		"size": 56152,
		"path": "../public/ai-services.html"
	},
	"/ai-visual.jpg": {
		"type": "image/jpeg",
		"etag": "\"10b8d-e3zcYflzJCPsi4bagj0e1kckjI0\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 68493,
		"path": "../public/ai-visual.jpg"
	},
	"/case-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"9d28-inLFsh4IoPmEp60qBLY1uB9ooMg\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 40232,
		"path": "../public/case-1.jpg"
	},
	"/case-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"f906-2FGqLGZ8kwBnSY5N0p6cc3PNxe0\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 63750,
		"path": "../public/case-2.jpg"
	},
	"/case-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"91e3-nF/g9zdm8rgfGI/Xwr0+GlvYKTM\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 37347,
		"path": "../public/case-3.jpg"
	},
	"/case-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"a6b2-UcYccfDxmhl55JQJg1QPxohFXKg\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 42674,
		"path": "../public/case-4.jpg"
	},
	"/case-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"92ef-rg5p3cPr/khltaFqZ9Q0Kmak/+Y\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 37615,
		"path": "../public/case-5.jpg"
	},
	"/case-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"7136-xNHvBXua0kNmVcxcKHOt6PqlfmQ\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 28982,
		"path": "../public/case-6.jpg"
	},
	"/case-hero-visual.jpg": {
		"type": "image/jpeg",
		"etag": "\"12171-CBCm+EGMXLMOcvzgdrCniHJkpE4\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 74097,
		"path": "../public/case-hero-visual.jpg"
	},
	"/case-visual.jpg": {
		"type": "image/jpeg",
		"etag": "\"e2b7-cMsSQUEuG+HrNdVNzl/X/0PShKo\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 58039,
		"path": "../public/case-visual.jpg"
	},
	"/casestudies.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"c7b4-fpfhopOVCub3GNaPTLsJtAfo6Fk\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 51124,
		"path": "../public/casestudies.html"
	},
	"/contact-visual.jpg": {
		"type": "image/jpeg",
		"etag": "\"d367-BL4qROHumNwEsMgiwrEH1qwaa14\"",
		"mtime": "2026-08-04T15:08:55.348Z",
		"size": 54119,
		"path": "../public/contact-visual.jpg"
	},
	"/favicon-180.png": {
		"type": "image/png",
		"etag": "\"1b5b-LZI0xL/L13iAlFJ2MhauKqNjqw8\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 7003,
		"path": "../public/favicon-180.png"
	},
	"/favicon-32.png": {
		"type": "image/png",
		"etag": "\"4a0-2PkfsSsdciCIa0WPvkRBU/w0AHc\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 1184,
		"path": "../public/favicon-32.png"
	},
	"/favicon-192.png": {
		"type": "image/png",
		"etag": "\"1d79-57yJaGNcAaIpM1KzWadPa+ZVbvU\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 7545,
		"path": "../public/favicon-192.png"
	},
	"/contact.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"b39d-XpVtAegWkOtxcbPWpfA2C6nVMC8\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 45981,
		"path": "../public/contact.html"
	},
	"/favicon-48.png": {
		"type": "image/png",
		"etag": "\"6b9-AeqDbviFfBAj+9yO/qUr1GzRiFE\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 1721,
		"path": "../public/favicon-48.png"
	},
	"/favicon-512.png": {
		"type": "image/png",
		"etag": "\"4ea3-FeqOIKY1PlupEYUMiNdckbp5GwQ\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 20131,
		"path": "../public/favicon-512.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"51b9-jqyZhS2Wn09ZXyPrePteazQ5s1I\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 20921,
		"path": "../public/favicon.ico"
	},
	"/index.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"ff17-VZofg/qGm3/HiiDiqb3M6+Er58U\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 65303,
		"path": "../public/index.html"
	},
	"/hero-visual.jpg": {
		"type": "image/jpeg",
		"etag": "\"24f2a-hsTpJxTVsDGPIScuibE1Ils3Cw4\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 151338,
		"path": "../public/hero-visual.jpg"
	},
	"/logo-512.png": {
		"type": "image/png",
		"etag": "\"4ea3-FeqOIKY1PlupEYUMiNdckbp5GwQ\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 20131,
		"path": "../public/logo-512.png"
	},
	"/og-image.png": {
		"type": "image/png",
		"etag": "\"6ee2-NjCckZcywMR4oJVJGHCuo5XyHk4\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 28386,
		"path": "../public/og-image.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-era2nonOwdSFVmg8caHGle/1624\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/score.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"bf82-/1iUrfo/230NCPyLAH3jwUpkEl8\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 49026,
		"path": "../public/score.html"
	},
	"/seo-visual.jpg": {
		"type": "image/jpeg",
		"etag": "\"10a8f-lPyQ2FfOwObbZyE1QSEtf3s1K3w\"",
		"mtime": "2026-08-04T15:08:55.351Z",
		"size": 68239,
		"path": "../public/seo-visual.jpg"
	},
	"/services.html": {
		"type": "text/html; charset=utf-8",
		"etag": "\"c58f-zlxG7y0sPAgxrGQWzLSEN1SHWtI\"",
		"mtime": "2026-08-04T15:08:55.352Z",
		"size": 50575,
		"path": "../public/services.html"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"41d-r9iCJ8fIkBeRiHGbv7mUHRl2Drw\"",
		"mtime": "2026-08-04T15:08:55.352Z",
		"size": 1053,
		"path": "../public/sitemap.xml"
	},
	"/assets/index-CUbQQGmu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"53e7f-K8RccIA0ruZ2CJgze91A2vYw7Zk\"",
		"mtime": "2026-08-04T15:08:55.008Z",
		"size": 343679,
		"path": "../public/assets/index-CUbQQGmu.js"
	},
	"/assets/routes-DatjCrvK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"194-wcm0ItwLaIrzvpJBZw0pkAnF8eQ\"",
		"mtime": "2026-08-04T15:08:55.009Z",
		"size": 404,
		"path": "../public/assets/routes-DatjCrvK.js"
	},
	"/assets/styles-DgMiRPfK.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"11143-KimAIFv5ys5Z8mLaOHjnfs2iAcQ\"",
		"mtime": "2026-08-04T15:08:55.009Z",
		"size": 69955,
		"path": "../public/assets/styles-DgMiRPfK.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_5uTgTv = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_5uTgTv
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
