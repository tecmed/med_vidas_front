import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Vida from "../components/vidas";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";

const Home = ({ vidas, categories, homepage, menus, submenus }) => {
  return (
    <Layout menus={menus} submenus={submenus}>
      <div className="uk-section">
        <div className="uk-container uk-container-expand">
          <Vida vidas={vidas} submenus={submenus}/>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [vidas, categories, homepage, menus, submenus] = await Promise.all([
    fetchAPI("/vidas?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/menus?status=true"),
    fetchAPI("/submenus"),
  ]);

  return {
    props: { vidas, menus, categories, homepage, submenus },
    revalidate: 1,
  };
}

export default Home;