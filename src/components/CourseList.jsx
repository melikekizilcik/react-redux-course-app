import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../store/cardSlice";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const dispatch = useDispatch();
  const { cardItems, quantity, total } = useSelector((store) => store.card);

  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Sepetim:</h2>
            <h4>boş</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return <CourseItem {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam tutar: <span>{total}</span>
              </h4>
            </div>
            <button onClick={() => dispatch(clearAll())}>Temizle</button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
