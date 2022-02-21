import {
  require_db
} from "/build/_shared/chunk-TUDQCPYG.js";
import {
  Link,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-XPZ6P5TY.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// empty-module:~/utils/session.server
var require_session = __commonJS({
  "empty-module:~/utils/session.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:D:\my-remix-app\app\routes\login.tsx?browser
init_react();

// app/routes/login.tsx
init_react();

// app/styles/login.css
var login_default = "/build/_assets/login-VTFR2DQM.css";

// app/routes/login.tsx
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
var links = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
function Login() {
  var _a, _b, _c;
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login"), (actionData == null ? void 0 : actionData.formError) && /* @__PURE__ */ React.createElement("h2", null, actionData == null ? void 0 : actionData.formError), (actionData == null ? void 0 : actionData.nameError) && /* @__PURE__ */ React.createElement("h2", null, actionData == null ? void 0 : actionData.nameError), (actionData == null ? void 0 : actionData.passwordError) && /* @__PURE__ */ React.createElement("h2", null, actionData == null ? void 0 : actionData.passwordError), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: (_a = searchParams.get("redirectTo")) != null ? _a : void 0
  }), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: true
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "register"
  }), " Register")), /* @__PURE__ */ React.createElement("div", {
    className: "input-fields"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-field"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    defaultValue: (_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.name,
    id: "username-input",
    name: "username"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-field"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    defaultValue: (_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.password,
    name: "password",
    type: "password"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Submit")))), /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/jokes"
  }, "Jokes")))));
}
export {
  Login as default,
  links
};
//# sourceMappingURL=/build/routes/login-2BNEENRQ.js.map
