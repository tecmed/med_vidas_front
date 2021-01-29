import Navigation from "./nav";

const Layout = ({ children, categories, menus, seo }) => (
  <>
    <Navigation menus={menus} />
    {children}
  </>
);

export default Layout;