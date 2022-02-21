import {
  require_session
} from "/build/_shared/chunk-5W7FU2FW.js";
import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-XPZ6P5TY.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:D:\my-remix-app\app\routes\todo\index.tsx?browser
init_react();

// app/routes/todo/index.tsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
function TodoRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, data.todoList.map((todo) => /* @__PURE__ */ React.createElement("li", {
    key: todo.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: todo.id
  }, /* @__PURE__ */ React.createElement("h3", null, todo.name))))));
}
export {
  TodoRoute as default
};
//# sourceMappingURL=/build/routes/todo/index-Y7W3LOS7.js.map
