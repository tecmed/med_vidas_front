import Navigation from "./nav";

const Layout = ({ children, categories, menus, seo, submenus }) => (
  <>
    <Navigation menus={menus} submenus={submenus} />
    {children}
  </>
);

export default Layout;