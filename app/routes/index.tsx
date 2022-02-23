import type { LinksFunction } from "remix";
import { Link } from "remix";
import stylesUrl from "~/styles/index.css";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};
export default function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to remix Todo App</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}
