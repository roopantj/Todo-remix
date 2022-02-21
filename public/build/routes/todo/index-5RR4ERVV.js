import {
  require_session
} from "/build/_shared/chunk-5W7FU2FW.js";
import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-II3QS7KD.js";
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

// app/styles/todolist.css
var todolist_default = "/build/_assets/todolist-Y2P4JD7V.css";

// app/routes/todo/index.tsx
var links = () => {
  return [{ rel: "stylesheet", href: todolist_default }];
};
function TodoRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("ul", null, data.todoList.map((todo) => /* @__PURE__ */ React.createElement("li", {
    key: todo.id
  }, /* @__PURE__ */ React.createElement("h3", null, todo.name), /* @__PURE__ */ React.createElement("p", null, todo.completed ? "Completed" : "Yet to complete"), /* @__PURE__ */ React.createElement(Link, {
    to: todo.id
  }, "Edit")))));
}
export {
  TodoRoute as default,
  links
};
//# sourceMappingURL=/build/routes/todo/index-5RR4ERVV.js.map
