import clsx from "clsx";
import "./ListScreen.scss";
import { Link } from "react-router-dom";
import useLazyLoad from "../../utils/useLazyLoad";
import backIcon from "../../assets/images/Back.png";
import { useSelector } from "react-redux";
import searchIcon from "../../assets/images/search.png";
import React, { useEffect, useRef, useState } from "react";

export default function ListScreen() {
  var array = [];
  const TOTAL_PAGES = 3;
  const NUM_PER_PAGE = 18;
  const triggerRef = useRef(null);
  const [listData, setListData] = useState([]);
  const list = useSelector((store) => store.content.contentList);

  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      if (currentPage <= 4) {
        const data = listData.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        resolve(data);
      }
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  const splitEvery = (array, length) =>
    array.reduce((result, item, index) => {
      if (index % length === 0) result.push([]);
      result[Math.floor(index / length)].push(item);
      return result;
    }, []);

  useEffect(() => {
    var listArray = [];
    list.map((post, index) =>
      listArray.push(post.page["content-items"].content)
    );
    if (array.length === 0) {
      array.push(...listArray[0], ...listArray[1], ...listArray[2]);
    }
    setListData(array);
  }, []);

  return (
    <div className="listBody">
      <div className="header">
        <div className="icon">
          <Link to="/home">
            <img src={backIcon} className="backIcon" alt="img" />
          </Link>
        </div>
        <div className="text">
          <p className="titleTxt">{list[0].page.title}</p>
        </div>
        <div className="search">
          <img src={searchIcon} className="searchIcon" alt="img" />
        </div>
      </div>
      <div>
        {splitEvery(data, 3).map((listdata, index) => (
          // {splitEvery(listData, 3).map((listdata, index) => (
          <div className="content" key={index}>
            {listdata.map((list, index) => (
              <div className="card" key={index}>
                <div className="imgDiv">
                  <img
                    src={require(`../../assets/images/${list["poster-image"]}`)}
                    className="image"
                    alt="img"
                  />
                </div>
                <div className="titleDiv">
                  <p className="title">{list.name}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
          <p>loading...</p>
        </div>
      </div>
    </div>
  );
}
