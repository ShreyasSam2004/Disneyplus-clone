import { useState, useEffect } from "react";
import db from "./firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../feautres/movie/movieSlice"
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";

const Home = (props) => {
  const dispatch = useDispatch();

  const [moviesData, setMoviesData] = useState({
    recommend: [],
    newDisney: [],
    original: [],
    trending: [],
  });

  useEffect(() => {
    console.log("hello");
    const unsubscribe = db.collection("movies").onSnapshot((snapshot) => {
      const newMoviesData = {
        recommend: [],
        newDisney: [],
        original: [],
        trending: [],
      };

      snapshot.docs.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
        switch (data.type) {
          case "recommend":
            newMoviesData.recommend = [
              ...newMoviesData.recommend,
              data,
            ];
            break;
          case "new":
            newMoviesData.newDisney = [
              ...newMoviesData.newDisney,
              data,
            ];
            break;
          case "original":
            newMoviesData.original = [
              ...newMoviesData.original,
              data,
            ];
            break;
          case "trending":
            newMoviesData.trending = [
              ...newMoviesData.trending,
              data,
            ];
            break;
          default:
            break;
        }
      });

      setMoviesData(newMoviesData);

      dispatch(
        setMovies({
          ...newMoviesData,
        })
      );
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);

&:after {
  background: url("/images/home-background.png") center center / cover
    no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
}

`;

export default Home;
