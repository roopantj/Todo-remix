import { ActionFunction, json, LoaderFunction, useLoaderData } from "remix";
import { db } from "~/utils/db.server";
import type { LinksFunction } from "remix";
import stylesUrl from "~/styles/todo/todoItem.css";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
type ActionData = {
  err?: string;
  status?: boolean;
};
type LoaderData = {
  todo: { id: string; name: string; completed: boolean; createdAt?: any };
};
const badRequest = (data: ActionData) => {
  return json(data, { status: 400 });
};
export const loader: LoaderFunction = async ({ params }) => {
  const todo = await db.todo.findUnique({ where: { id: params.todoId } });
  if (!todo) throw new Error("Todo item not found");
  const data: LoaderData = { todo };
  return data;
};
export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const id = form.get("id");
  const updatedStatus = form.get("status");
  if (typeof id !== "string" || typeof updatedStatus !== "string") {
    return badRequest({ err: "Wrong type" });
  }
  const res = await db.todo.update({
    where: { id: id },
    data: {
      completed: updatedStatus === "yes" ? true : false,
    },
  });
  return null;
};
export default function TodoItem() {
  const data = useLoaderData<LoaderData>();
  return (
    <div className="container">
      <h3>{data.todo.name}</h3>
      {data.todo.completed ? (
        <p>Status : Completed!</p>
      ) : (
        <p>Status : Not Completed!</p>
      )}
      <p>Created At: {data.todo.createdAt}</p>
      <form method="post">
        <h3>Edit status</h3>
        <input type="hidden" value={data.todo.id} name="id" />
        <input type="hidden" value={data.todo.name} name="name" />
        <label>
          Completed
          <input
            type="radio"
            name="status"
            defaultChecked={data.todo.completed}
            value="yes"
          />
        </label>
        <label>
          Not Completed
          <input
            type="radio"
            name="status"
            defaultChecked={!data.todo.completed}
            value="no"
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
