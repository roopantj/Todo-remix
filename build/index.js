var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\my-remix-app\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/index.css
var styles_default = "/build/_assets/index-AC3DKB53.css";

// route:D:\my-remix-app\app\root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix JS"), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:D:\my-remix-app\app\routes\logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  default: () => LogoutRoute,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/utils/session.server.ts
init_react();
var import_bcryptjs = __toModule(require("bcryptjs"));
var import_remix3 = __toModule(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (true) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/utils/session.server.ts
async function login({ username, password }) {
  const user = await db.user.findFirst({ where: { username } });
  if (!user)
    return null;
  const isCorrectPassword = await import_bcryptjs.default.compare(password, user.passwordHash);
  if (!isCorrectPassword)
    return null;
  return { id: user.id, username };
}
var sessionSecret = "some-secret";
if (!sessionSecret) {
  throw new Error("Session secret must be set");
}
var storage = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "Client_Session",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function register({ username, password }) {
  const passwordHash = await import_bcryptjs.default.hash(password, 10);
  const user = await db.user.create({
    data: { username, passwordHash }
  });
  return { id: user.id, username };
}
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix3.redirect)(redirectTo, {
    headers: { "Set-Cookie": await storage.commitSession(session) }
  });
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  return userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix3.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function logout(request) {
  const session = await getUserSession(request);
  return (0, import_remix3.redirect)("/login", {
    headers: { "Set-Cookie": await storage.destroySession(session) }
  });
}

// route:D:\my-remix-app\app\routes\logout.tsx
var action = ({ request }) => {
  return logout(request);
};
var loader = ({ request }) => {
  return (0, import_remix4.redirect)("/todo");
};
function LogoutRoute() {
}

// route:D:\my-remix-app\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => HomePage,
  links: () => links2
});
init_react();
var links2 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function HomePage() {
  return /* @__PURE__ */ React.createElement("h1", null, "Homepage");
}

// route:D:\my-remix-app\app\routes\login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());
var import_remix6 = __toModule(require_remix());

// app/styles/login.css
var login_default = "/build/_assets/login-MQ6LH7G2.css";

// route:D:\my-remix-app\app\routes\login.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
var badRequest = (data) => {
  return (0, import_remix5.json)(data, { status: 400 });
};
var loader2 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return (0, import_remix5.redirect)("/todo");
  }
  return null;
};
var action2 = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const name = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/todo";
  if (typeof loginType !== "string" || typeof name !== "string" || typeof password !== "string" || typeof redirectTo !== "string") {
    return badRequest({ formError: "Form not submitted correctly" });
  }
  if (name.length < 3)
    return badRequest({ nameError: "Invalid name" });
  if (password.length < 6)
    return badRequest({ passwordError: "Invalid password" });
  const fields = { name, password, loginType };
  switch (loginType) {
    case "login": {
      const user = await login({ username: name, password });
      console.log({ user });
      if (!user)
        return badRequest({ fields, formError: "Wrong username/passowrd" });
      return createUserSession(user.id, redirectTo);
    }
    case "register": {
      const userExists = await db.user.findFirst({ where: { username: name } });
      if (userExists) {
        return badRequest({ fields, formError: "Username already exists" });
      }
      const user = await register({ username: name, password });
      if (!user) {
        return badRequest({
          fields,
          formError: `Something went wrong trying to create a new user.`
        });
      }
      return createUserSession(user.id, redirectTo);
    }
    default: {
      return badRequest({
        fields,
        formError: "Login type invalid"
      });
    }
  }
};
function Login() {
  var _a, _b;
  const actionData = (0, import_remix6.useActionData)();
  const [searchParams] = (0, import_remix6.useSearchParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("h1", null, "Login"), (actionData == null ? void 0 : actionData.formError) && /* @__PURE__ */ React.createElement("h2", null, actionData == null ? void 0 : actionData.formError), (actionData == null ? void 0 : actionData.nameError) && /* @__PURE__ */ React.createElement("h2", null, actionData == null ? void 0 : actionData.nameError), (actionData == null ? void 0 : actionData.passwordError) && /* @__PURE__ */ React.createElement("h2", null, actionData == null ? void 0 : actionData.passwordError), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
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
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
    id: "username-input",
    name: "username"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "input-field"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password-input",
    defaultValue: (_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password,
    name: "password",
    type: "password"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Submit")))));
}

// route:D:\my-remix-app\app\routes\todo.tsx
var todo_exports = {};
__export(todo_exports, {
  action: () => action3,
  default: () => Todo,
  links: () => links4,
  loader: () => loader3
});
init_react();
var import_remix8 = __toModule(require_remix());

// app/components/Header.tsx
init_react();
var import_remix7 = __toModule(require_remix());
var Header = ({ user }) => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "brand"
  }, /* @__PURE__ */ React.createElement("h2", null, "Welcome ", user)), /* @__PURE__ */ React.createElement("div", {
    className: "actions"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/todo"
  }, "Todo List"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
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
var Header_default2 = "/build/_assets/Header-BJDNNE2G.css";

// route:D:\my-remix-app\app\routes\todo.tsx
var links4 = () => {
  return [{ rel: "stylesheet", href: Header_default2 }];
};
var loader3 = async ({ request }) => {
  const userId = await requireUserId(request);
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, username: true }
  });
  return user;
};
var action3 = async ({ request }) => {
  return logout(request);
};
function Todo() {
  const user = (0, import_remix8.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, {
    user: user.username
  }), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null));
}

// route:D:\my-remix-app\app\routes\todo\$todoId.tsx
var todoId_exports = {};
__export(todoId_exports, {
  action: () => action4,
  default: () => TodoItem,
  links: () => links5,
  loader: () => loader4
});
init_react();
var import_remix9 = __toModule(require_remix());

// app/styles/todoItem.css
var todoItem_default = "/build/_assets/todoItem-6LEYNL7X.css";

// route:D:\my-remix-app\app\routes\todo\$todoId.tsx
var links5 = () => {
  return [{ rel: "stylesheet", href: todoItem_default }];
};
var badRequest2 = (data) => {
  return (0, import_remix9.json)(data, { status: 400 });
};
var loader4 = async ({ params }) => {
  const todo = await db.todo.findUnique({ where: { id: params.todoId } });
  if (!todo)
    throw new Error("Todo item not found");
  const data = { todo };
  return data;
};
var action4 = async ({ request }) => {
  const form = await request.formData();
  const id = form.get("id");
  const updatedStatus = form.get("status");
  if (typeof id !== "string" || typeof updatedStatus !== "string") {
    return badRequest2({ err: "Wrong type" });
  }
  const res = await db.todo.update({
    where: { id },
    data: {
      completed: updatedStatus === "yes" ? true : false
    }
  });
  return null;
};
function TodoItem() {
  const data = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h3", null, data.todo.name), data.todo.completed ? /* @__PURE__ */ React.createElement("p", null, "Status : Completed!") : /* @__PURE__ */ React.createElement("p", null, "Status : Not Completed!"), /* @__PURE__ */ React.createElement("p", null, "Created At: ", data.todo.createdAt), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("h3", null, "Edit status"), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: data.todo.id,
    name: "id"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    value: data.todo.name,
    name: "name"
  }), /* @__PURE__ */ React.createElement("label", null, "Completed", /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "status",
    defaultChecked: data.todo.completed,
    value: "yes"
  })), /* @__PURE__ */ React.createElement("label", null, "Not Completed", /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "status",
    defaultChecked: !data.todo.completed,
    value: "no"
  })), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Update")));
}

// route:D:\my-remix-app\app\routes\todo\index.tsx
var todo_exports2 = {};
__export(todo_exports2, {
  default: () => TodoRoute,
  links: () => links6,
  loader: () => loader5
});
init_react();
var import_remix10 = __toModule(require_remix());

// app/styles/todolist.css
var todolist_default = "/build/_assets/todolist-WV7IR4ZJ.css";

// route:D:\my-remix-app\app\routes\todo\index.tsx
var links6 = () => {
  return [{ rel: "stylesheet", href: todolist_default }];
};
var loader5 = async ({ request }) => {
  const userId = await getUserId(request);
  const data = {
    todoList: await db.todo.findMany({
      where: { userid: userId },
      select: { id: true, name: true, completed: true }
    })
  };
  return data;
};
function TodoRoute() {
  const data = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("ul", null, data.todoList.map((todo) => /* @__PURE__ */ React.createElement("li", {
    key: todo.id,
    className: todo.completed ? "completed" : ""
  }, /* @__PURE__ */ React.createElement("h3", null, todo.name), /* @__PURE__ */ React.createElement(import_remix10.Link, {
    to: todo.id
  }, "Edit")))));
}

// route:D:\my-remix-app\app\routes\todo\new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action5,
  default: () => NewTodo,
  links: () => links7
});
init_react();
var import_remix11 = __toModule(require_remix());
var links7 = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
var badRequest3 = (data) => {
  return (0, import_remix11.json)(data, { status: 400 });
};
var action5 = async ({ request }) => {
  const userId = await getUserId(request);
  const form = await request.formData();
  const todoName = form.get("name");
  if (typeof todoName !== "string") {
    return badRequest3({ formError: "Invalid todo" });
  }
  if (todoName.length < 3) {
    return badRequest3({ name: todoName, formError: "Todo too short" });
  }
  const todo = await db.todo.create({
    data: { userid: userId, name: todoName, completed: false }
  });
  return (0, import_remix11.redirect)(`/todo/${todo.id}`);
};
function NewTodo() {
  const actionData = (0, import_remix11.useActionData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-fields"
  }, /* @__PURE__ */ React.createElement("input", {
    defaultValue: actionData == null ? void 0 : actionData.name,
    type: "text",
    name: "name",
    placeholder: "Enter new todo"
  }), /* @__PURE__ */ React.createElement("span", null, actionData == null ? void 0 : actionData.formError), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Add"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "e7e25a67", "entry": { "module": "/build/entry.client-2GZ23ZW3.js", "imports": ["/build/_shared/chunk-LYMXJXOT.js", "/build/_shared/chunk-EFF4OLHG.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-Q73UF3CR.js", "imports": ["/build/_shared/chunk-AMPUIY2W.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UBI5QQCF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-7QGSDD6U.js", "imports": ["/build/_shared/chunk-LQFT6IFK.js", "/build/_shared/chunk-PS5JEZHS.js", "/build/_shared/chunk-YWATQ4BU.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-H5XSLK4V.js", "imports": ["/build/_shared/chunk-PS5JEZHS.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo": { "id": "routes/todo", "parentId": "root", "path": "todo", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo-INRLGMSI.js", "imports": ["/build/_shared/chunk-PS5JEZHS.js", "/build/_shared/chunk-YWATQ4BU.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/$todoId": { "id": "routes/todo/$todoId", "parentId": "routes/todo", "path": ":todoId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/$todoId-2FE65K4H.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/index": { "id": "routes/todo/index", "parentId": "routes/todo", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/todo/index-ZFTFDNR3.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/todo/new": { "id": "routes/todo/new", "parentId": "routes/todo", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/todo/new-6RAH2UAO.js", "imports": ["/build/_shared/chunk-LQFT6IFK.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-E7E25A67.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/todo": {
    id: "routes/todo",
    parentId: "root",
    path: "todo",
    index: void 0,
    caseSensitive: void 0,
    module: todo_exports
  },
  "routes/todo/$todoId": {
    id: "routes/todo/$todoId",
    parentId: "routes/todo",
    path: ":todoId",
    index: void 0,
    caseSensitive: void 0,
    module: todoId_exports
  },
  "routes/todo/index": {
    id: "routes/todo/index",
    parentId: "routes/todo",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: todo_exports2
  },
  "routes/todo/new": {
    id: "routes/todo/new",
    parentId: "routes/todo",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
