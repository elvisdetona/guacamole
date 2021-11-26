import React, { Component } from 'react';
import api from './services/api';

import { Link } from "react-router-dom";

class Products extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('/search/shows?q=The Powerpuff Girls');
    this.setState({ filmes: response.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <section className="home wrapper">
        {
          filmes.map(filme => (
            filme.show.type === 'Animation' &&
              <article key={filme.show.id}>
                
                <figure>
                  <img src={filme.show.image.medium} alt={filme.show.name} />
                </figure>

                <div className="content">
                  <h2>{filme.show.name}</h2>
                  <div dangerouslySetInnerHTML={ {__html: filme.show.summary} } />
                  <Link
                    to={{
                      pathname: `/episodes/${filme.show.id}`,
                      state: {
                        mainName: filme.show.name,
                        mainImage: filme.show.image.medium,
                        mainSummary: filme.show.summary,

                      },
                    }}
                    title={`${filme.show.name}`}
                    aria-label={`Click to view the list of ${filme.show.name} episodes`}
                  >
                    Items
                  </Link>
                </div>

              </article>

              ))
              
            }

      </section>
    );
  };
};

export default Products;