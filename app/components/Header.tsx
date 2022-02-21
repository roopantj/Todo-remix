import { Link } from "remix";
interface props {
  user: string;
}
const Header = ({ user }: props) => {
  return (
    <header className="header">
      <div className="brand">
        <h2>Welcome {user}</h2>
      </div>
      <div className="actions">
        <Link to="/todo">Todo List</Link>
        <Link to="/todo/new">Add new Todo</Link>
        <form action="/logout" method="post">
          <button type="submit">Logout</button>
        </form>
      </div>
    </header>
  );
};
export default Header;
