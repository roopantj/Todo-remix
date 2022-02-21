import {
  require_session
} from "/build/_shared/chunk-5W7FU2FW.js";
import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-XPZ6P5TY.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:D:\my-remix-app\app\routes\todo.tsx?browser
init_react();

// app/routes/todo.tsx
init_react();
var import_session = __toModule(require_session());
var import_db = __toModule(require_db());
function Todo() {
  const user = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("h1", null, "Welcome ", user.username), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout"))), /* @__PURE__ */ React.createElement(Outlet, null));
}
export {
  Todo as default
};
//# sourceMappingURL=/build/routes/todo-HCSYELMS.js.map
