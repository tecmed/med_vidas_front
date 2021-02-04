import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Vida from "../components/vidas";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";

const Home = ({ vidas, categories, homepage, menus }) => {
  return (
    <Layout menus={menus}>
      <div className="uk-section">
        <div className="uk-container uk-container-expand">
          <Vida vidas={vidas} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [vidas, categories, homepage, menus] = await Promise.all([
    fetchAPI("/vidas?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/menus?status=true"),
  ]);

  return {
    props: { vidas, menus, categories, homepage },
    revalidate: 1,
  };
}

export default Home;