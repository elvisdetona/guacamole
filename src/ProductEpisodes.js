import React, { Component } from 'react';
import api from './services/api';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

class ProductEpisodes extends Component {

  state = {
    episodes: [],
  }

  async componentDidMount() {
    const productId = this.props.match.params.id;
    const response = await api.get(`/shows/${productId}/episodes`);
    this.setState({ episodes: response.data });
  }

  render() {

    const { episodes } = this.state;
    return (
        <>
        <section className="main wrapper">
            <h1>{this.props.location.state.mainName}</h1>
            <div dangerouslySetInnerHTML={ {__html: this.props.location.state.mainSummary} } />
        </section>

        <section className="secondary wrapper">

        {
            episodes.slice(0, 20).map(episode => (

                <article key={episode.id}>
                
                    <figure className="col3">
                        <img src={episode.image.medium} title={episode.name} />
                    </figure>

                    <div className="content">
                        <h3>{episode.name}</h3>
                        
                        <Link
                            to={{
                                pathname: `/episode/${episode.id}`,
                                state: {
                                episodeImage: episode.image.original,
                                episodeSummary: episode.summary,
                                mainName: this.props.location.state.mainName,
                                mainSummary: this.props.location.state.mainSummary

                                },
                            }}
                            >
                            Details
                        </Link>
                    </div>

              </article>

              ))
              
            }
       
      </section>
      </>
    );
  };
};

export default withRouter(ProductEpisodes);
