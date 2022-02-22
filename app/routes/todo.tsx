import { Outlet, useLoaderData } from "remix";
import { requireUserId, logout } from "~/utils/session.server";
import { db } from "~/utils/db.server";
import Header from "~/components/Header";
import type { LinksFunction, LoaderFunction, ActionFunction } from "remix";
import stylesUrl from "~/styles/Header.css";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
type LoaderData = {
  id: string;
  username: string;
};
export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, username: true },
  });
  return user;
};
export const action: ActionFunction = async ({ request }) => {
  return logout(request);
};
export default function Todo() {
  const user: LoaderData = useLoaderData();
  return (
    <div>
      <Header user={user.username} />
      <Outlet />
    </div>
  );
}
