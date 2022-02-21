import { LoaderFunction, ActionFunction, redirect } from "remix";
import { logout } from "~/utils/session.server";
export const action: ActionFunction = ({ request }) => {
  return logout(request);
};
export const loader: LoaderFunction = ({ request }) => {
  return redirect("/todo");
};
export default function LogoutRoute() {}
