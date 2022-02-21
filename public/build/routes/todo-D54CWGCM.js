import {
  require_session
} from "/build/_shared/chunk-5W7FU2FW.js";
import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  Link,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-SK7QXV6Q.js";
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

// app/components/Header.tsx
init_react();
var Header = ({ user }) => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "brand"
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome ", user)), /* @__PURE__ */ React.createElement("div", {
    className: "actions"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/todo"
  }, "Todo List"), /* @__PURE__ */ React.createElement(Link, {
    to: "/todo/new"
  }, "Add new Todo"), /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout"))));
};
var Header_default = Header;

// app/styles/Header.css
var Header_default2 = "/build/_assets/Header-BFRRIXDN.css";

// app/routes/todo.tsx
var links = () => {
  return [{ rel: "stylesheet", href: Header_default2 }];
};
function Todo() {
  const user = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, {
    user: user.username
  }), /* @__PURE__ */ React.createElement(Outlet, null));
}
export {
  Todo as default,
  links
};
//# sourceMappingURL=/build/routes/todo-D54CWGCM.js.map
