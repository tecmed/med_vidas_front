import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";

const Vida = ({ vida, categories }) => {
 
  return (
    <Layout categories={categories} key={Math.random() }>
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        key={Math.random() }
      >
        <h1 key={Math.random() }>{vida.category.name}</h1>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const vidas = await fetchAPI("/vidas");

  return {
    paths: vidas.map((vida) => ({
      params: {
        category: vida.category,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const vidas = await fetchAPI(
    `/vidas?category=${params.category}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { vida: vidas[0], categories },
    revalidate: 1,
  };
}

export default Vida;