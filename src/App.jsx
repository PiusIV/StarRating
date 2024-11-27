import StarRating from "./components/StarRating";
import { useState } from "react";

function Test() {
  // this is basically to test the starrating component and using it in real time
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div style={{ display: "flex", gap: "4rem" }}>
      <StarRating color="brown" size={36} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

function App() {
  return (
    <>
      <StarRating color={"brown"} />
      <Test />
    </>
  );
}

export default App;
