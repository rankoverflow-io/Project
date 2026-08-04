import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BJxmV-XN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	(0, import_react.useEffect)(() => {
		window.location.replace("/index.html");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: {
			minHeight: "100vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "#fcfbf8",
			fontFamily: "system-ui, sans-serif",
			color: "#4b5563",
			fontSize: 14
		},
		children: "Loading Rank Overflow…"
	});
}
//#endregion
export { Index as component };
