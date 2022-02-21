import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  useActionData
} from "/build/_shared/chunk-RUSWMUI5.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:D:\my-remix-app\app\routes\todo\new.tsx?browser
init_react();

// app/routes/todo/new.tsx
init_react();
var import_db = __toModule(require_db());
function NewTodo() {
  const actionData = useActionData();
  return /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", null, "Todo :", " ", /* @__PURE__ */ React.createElement("input", {
    defaultValue: actionData == null ? void 0 : actionData.name,
    type: "text",
    name: "name",
    placeholder: "Enter new todo"
  })), /* @__PURE__ */ React.createElement("span", null, actionData == null ? void 0 : actionData.formError), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Add"));
}
export {
  NewTodo as default
};
//# sourceMappingURL=/build/routes/todo/new-URGZEK4M.js.map
