import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  useLoaderData
} from "/build/_shared/chunk-4YNP3OE5.js";
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
function TodoItem() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, data.joke.name), data.joke.completed ? /* @__PURE__ */ React.createElement("p", null, "Status : Completed!") : /* @__PURE__ */ React.createElement("p", null, "Status : Not Completed!"), /* @__PURE__ */ React.createElement("p", null, "Created At: ", data.joke.createdAt));
}
export {
  TodoItem as default
};
//# sourceMappingURL=/build/routes/todo/$todoId-7U47MCG7.js.map
