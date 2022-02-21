import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  useLoaderData
} from "/build/_shared/chunk-II3QS7KD.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:D:\my-remix-app\app\routes\todo\$todoId.tsx?browser
init_react();

// app/routes/todo/$todoId.tsx
init_react();
var import_db = __toModule(require_db());

// app/styles/todoItem.css
var todoItem_default = "/build/_assets/todoItem-AFQYQGDM.css";

// app/routes/todo/$todoId.tsx
var links = () => {
  return [{ rel: "stylesheet", href: todoItem_default }];
};
function TodoItem() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, data.joke.name), data.joke.completed ? /* @__PURE__ */ React.createElement("p", null, "Status : Completed!") : /* @__PURE__ */ React.createElement("p", null, "Status : Not Completed!"), /* @__PURE__ */ React.createElement("p", null, "Created At: ", data.joke.createdAt));
}
export {
  TodoItem as default,
  links
};
//# sourceMappingURL=/build/routes/todo/$todoId-LW722GGH.js.map
