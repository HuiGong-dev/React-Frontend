import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero = ({ movies }) => {
  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies?.map((item) => {
          return (
            <Paper key={item.id}>
              <div>
                <img src={item.poster} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.releaseDate}</p>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
