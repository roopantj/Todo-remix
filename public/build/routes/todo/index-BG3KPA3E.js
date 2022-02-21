import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-4YNP3OE5.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:D:\my-remix-app\app\routes\todo\index.tsx?browser
init_react();

// app/routes/todo/index.tsx
init_react();
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
//# sourceMappingURL=/build/routes/todo/index-BG3KPA3E.js.map
