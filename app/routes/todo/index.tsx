import { LoaderFunction, useLoaderData, Link } from "remix";
import { db } from "~/utils/db.server";
import { getUserId } from "~/utils/session.server";
import type { LinksFunction } from "remix";
import stylesUrl from "~/styles/todolist.css";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
type LoaderData = {
  todoList: Array<{ id: string; name: string; completed: boolean }>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  const data: LoaderData = {
    todoList: await db.todo.findMany({
      where: { userid: userId },
      select: { id: true, name: true, completed: true },
    }),
  };
  return data;
};
export default function TodoRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div className="container">
      <ul>
        {data.todoList.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <h3>{todo.name}</h3>
            <Link to={todo.id}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
