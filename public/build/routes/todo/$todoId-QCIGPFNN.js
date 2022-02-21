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
var todoItem_default = "/build/_assets/todoItem-6LEYNL7X.css";

// app/routes/todo/$todoId.tsx
var links = () => {
  return [{ rel: "stylesheet", href: todoItem_default }];
};
function TodoItem() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h3", null, data.todo.name), data.todo.completed ? /* @__PURE__ */ React.createElement("p", null, "Status : Completed!") : /* @__PURE__ */ React.createElement("p", null, "Status : Not Completed!"), /* @__PURE__ */ React.createElement("p", null, "Created At: ", data.todo.createdAt), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("h3", null, "Edit status"), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: data.todo.id,
    name: "id"
  }), /* @__PURE__ */ React.createElement("label", null, "Completed", /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "status",
    defaultChecked: data.todo.completed
  })), /* @__PURE__ */ React.createElement("label", null, "Not Completed", /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "status",
    defaultChecked: !data.todo.completed
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Update")));
}
export {
  TodoItem as default,
  links
};
//# sourceMappingURL=/build/routes/todo/$todoId-QCIGPFNN.js.map
