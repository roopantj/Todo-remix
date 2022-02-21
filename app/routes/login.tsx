import { json, LinksFunction, redirect } from "remix";
import {
  useSearchParams,
  ActionFunction,
  useActionData,
  LoaderFunction,
} from "remix";
import styleUrl from "~/styles/login.css";
import { db } from "~/utils/db.server";
import {
  createUserSession,
  login,
  getUserId,
  register,
} from "~/utils/session.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styleUrl }];
};
type ActionData = {
  formError?: string;
  nameError?: string | undefined;
  passwordError?: string | undefined;
  fields?: {
    loginType: string;
    name: string;
    password: string;
  };
};
const badRequest = (data: ActionData) => {
  return json(data, { status: 400 });
};
export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/todo");
  }
  return null;
};
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const name = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/todo";
  //Filter : 1 Typesafety
  if (
    typeof loginType !== "string" ||
    typeof name !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({ formError: "Form not submitted correctly" });
  }
  //Filter : 2 Invalid username and password
  if (name.length < 3) return badRequest({ nameError: "Invalid name" });
  if (password.length < 6)
    return badRequest({ passwordError: "Invalid password" });
  const fields = { name, password, loginType };
  //Filter : 3 Login or Register
  switch (loginType) {
    case "login": {
      const user = await login({ username: name, password: password });
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
      const user = await register({ username: name, password: password });
      if (!user) {
        return badRequest({
          fields,
          formError: `Something went wrong trying to create a new user.`,
        });
      }
      return createUserSession(user.id, redirectTo);
    }
    default: {
      return badRequest({
        fields,
        formError: "Login type invalid",
      });
    }
  }
};
export default function Login() {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();
  return (
    <div className="container">
      <div className="content">
        <h1>Login</h1>
        {actionData?.formError && <h2>{actionData?.formError}</h2>}
        {actionData?.nameError && <h2>{actionData?.nameError}</h2>}
        {actionData?.passwordError && <h2>{actionData?.passwordError}</h2>}
        <form method="post">
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get("redirectTo") ?? undefined}
          />
          <fieldset>
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                defaultChecked
              />{" "}
              Login
            </label>
            <label>
              <input type="radio" name="loginType" value="register" /> Register
            </label>
          </fieldset>
          <div className="input-fields">
            <div className="input-field">
              <label htmlFor="username-input">Username</label>
              <input
                type="text"
                defaultValue={actionData?.fields?.name}
                id="username-input"
                name="username"
              />
            </div>
            <div className="input-field">
              <label htmlFor="password-input">Password</label>
              <input
                id="password-input"
                defaultValue={actionData?.fields?.password}
                name="password"
                type="password"
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
