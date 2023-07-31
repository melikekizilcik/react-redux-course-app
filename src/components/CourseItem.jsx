import React from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteCourse, increase, decrease } from "../store/cardSlice";

const CourseItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4>{price} TL</h4>
        <div>
          <button
            onClick={() => {
              dispatch(increase(id));
            }}
          >
            <BsChevronUp />
          </button>
          <p>{quantity}</p>
          <button
            onClick={() => {
              dispatch(decrease(id));
            }}
          >
            <BsChevronDown />
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(deleteCourse(id));
          }}
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
