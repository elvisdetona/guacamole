import React, { Component } from 'react';
import api from './services/api';
import { withRouter } from "react-router";

class EpisodeDetail extends Component {

  state = {
    episode: [],
  }

  async componentDidMount() {
    const episodeId = this.props.match.params.idDetail;
    const response = await api.get(`/episodes/1${episodeId}?embed=show`);
    this.setState({ episode: response.data });
  }


  render() {
    const { episode } = this.state;
    const episodeImage = episode.image ? episode.image : this.props.location.state.episodeImage;
    const episodeSummary = episode.summary ? episode.summary : this.props.location.state.episodeSummary;

    return (
    <>

        <section className="main wrapper">
            <h1>{this.props.location.state.mainName}</h1>
            <div dangerouslySetInnerHTML={ {__html: this.props.location.state.mainSummary} } />
        </section>

        <section className="wrapper">
            <article className="detail">
                <figure className="coldetail">
                    <img src={episodeImage} title={episode.name} />
                </figure>

                <div className="content">
                    <h1>{episode.name}</h1>
                    <div dangerouslySetInnerHTML={ {__html: episodeSummary} } />  
                </div>

            </article>
        </section>
    </>

    );
  };
};

export default withRouter(EpisodeDetail);
