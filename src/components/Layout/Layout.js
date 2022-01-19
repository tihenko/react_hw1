import css from "./Layout.module.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/UseAuth";

const Layout = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    logOut(() => navigate('/', { replace: true }))
  }
  return (
      <>
        <div className={css.header}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/about">About</NavLink>
          <button onClick={logout}>LogOut</button>

        </div>
        <div className={css.outlet}>
          <Outlet/>
        </div>

        <div className={css.footer}>
          @ReactRouterDom
        </div>
      </>
  );
};

export default Layout;
