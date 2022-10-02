import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as contentActions from "../../store/content/contentAction";
import PAGE1 from "../../assets/data/CONTENTLISTINGPAGE-PAGE1.json";
import PAGE2 from "../../assets/data/CONTENTLISTINGPAGE-PAGE2.json";
import PAGE3 from "../../assets/data/CONTENTLISTINGPAGE-PAGE3.json";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    var data = [PAGE1, PAGE2, PAGE3];
    dispatch(contentActions.addContent(data));
  }, []);
  return (
    <div>
      <Link to="/list">
        <button className="navBtn">Go to List page</button>
      </Link>
    </div>
  );
}
