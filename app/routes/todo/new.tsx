import { ActionFunction, json, redirect, useActionData } from "remix";
import { db } from "~/utils/db.server";
import { getUserId } from "~/utils/session.server";
import type { LinksFunction } from "remix";
import stylesUrl from "~/styles/login.css";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
type ActionData = {
  formError?: string;
  name?: string;
};
const badRequest = (data: ActionData) => {
  return json(data, { status: 400 });
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const form = await request.formData();
  const todoName = form.get("name");
  if (typeof todoName !== "string") {
    return badRequest({ formError: "Invalid todo" });
  }
  if (todoName.length < 3) {
    return badRequest({ name: todoName, formError: "Todo too short" });
  }
  const todo = await db.todo.create({
    data: { userid: userId, name: todoName, completed: false },
  });
  return redirect(`/todo/${todo.id}`);
};
export default function NewTodo() {
  const actionData = useActionData<ActionData>();
  return (
    <div className="container">
      <form method="post">
        <div className="input-fields">
          <input
            defaultValue={actionData?.name}
            type="text"
            name="name"
            placeholder="Enter new todo"
          />
          <span>{actionData?.formError}</span>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
