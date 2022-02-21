import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  useLoaderData
} from "/build/_shared/chunk-3PA2VK7V.js";
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
function TodoRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, data.todoList.map((todo) => /* @__PURE__ */ React.createElement("li", {
    key: todo.id
  }, /* @__PURE__ */ React.createElement("h3", null)))));
}
export {
  TodoRoute as default
};
//# sourceMappingURL=/build/routes/todo/index-2FXPTN7Z.js.map