import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Details.css";
import VideoPlayer from "./VideoPlayer";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      videos: [],
      id: props.id,
      isRedirectTrue: false,
      error: "",
    };
  }

  async componentDidMount() {
    const { movieId, getError } = this.props;
    this.getVideos(movieId);
    const resp = await fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`
    ).catch((error) => console.log(error));
    if (resp.status >= 400) {
      const respJson = await resp.json();

      this.setState(
        () => {
          return { error: respJson, isRedirectTrue: true };
        },
        () => {
          getError(respJson);
        }
      );
    } else {
      const respJson = await resp.json();
      
      await this.setState(() => {
        return { selectedMovie: respJson.movie };
      });
      console.log(respJson);
    }
  }

  getVideos = async (movieId) => {
    const resp = await fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}/videos`
    );
    const videos = await resp.json();
    if (resp.ok === true) {
      await this.setState(() => {
        return { videos: videos.videos };
      });
    }
  };

  render() {
    const {
      title,
      overview,
      release_date,
      average_rating,
      budget,
      genres,
      revenue,
      runtime,
      backdrop_path,
      poster_path,
    } = this.state.selectedMovie;
    const clickedImage = (
      <img style={{ width: "17.5vw", height: "25vw" }} src={poster_path} />
    );
    const backimg = {
      backgroundImage: `url(${backdrop_path})`,
      height: "auto",
      width: "80vw",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    if (this.state.isRedirectTrue === true) {
      return <Redirect to="/pageNotFound" />;
    }

    const keys = this.state.videos.map((video) => video.key);

    return (
      <div>
        <section style={backimg} className="detailsContainer">
          <div>
            <div className="moviePoster">{clickedImage}</div>
            <div className="extraDetails">
              <p>Release date: {release_date} </p>
              <p>Average rating: {average_rating}</p>
              <p>Genres: {genres}</p>
              <p>Budget: {budget}</p>
              <p>Revenue: {revenue}</p>
              <p>Runtime: {runtime} min</p>
            </div>
          </div>

          <div className="movieDetails">
            <h1>{title}</h1>
            <h3>{overview}</h3>
            <VideoPlayer keys={keys} />
          </div>
        </section>
      </div>
    );
  }
}

export default Details;
