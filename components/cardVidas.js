import React from "react";
import Link from "next/link";

const CardVidas = ({ vida }) => {
  return (
    <Link as={`/vidas/${vida.category}`} href="/vidas/[id]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {vida.category.name}
            </p>
            <p id="data" className="uk-text-uppercase">
              {vida.data}
            </p>
            <p id="massaTotal" className="uk-text-large">
              {vida.massaTotal}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CardVidas;