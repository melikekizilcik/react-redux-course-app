import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import { calculateTotal } from "./store/cardSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { cardItems } = useSelector((store) => store.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cardItems]);
  return (
    <div className="App">
      <Navbar />
      <CourseList />
    </div>
  );
}

export default App;
