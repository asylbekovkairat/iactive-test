import React from "react";
import { useState, useEffect } from "react";

export default function MassageBlock({
  content,
  author,
  channel,
  attachments,
  id,
  date,
}) {

  const [longContent, setLongContent] = useState(
    content.length > 250 ? true : false
  );
  const [hideShow, setHideShow] = useState(false);
  const stars = JSON.parse(localStorage.getItem("star"));
  const [active, setActive] = useState(stars[id]);

  const starred = () => {
    setActive(!active);
  };

  useEffect(() => {
    localStorage.setItem("star", JSON.stringify({ ...stars, [id]: active }));
  }, [active]);

  return (
    <>
      <div className="blockWrapper">
        <div className="massageBlock_header">
          <div className="massageBlock_headerLeft">
            <img src="./images/userLogo.png" alt="logo" />
            <div className="massageBlock_userDesc">
              <span className="userName">{author}</span>
              <span className="desc">{channel}</span>
            </div>
          </div>
          <div className="massageBlock_headerRight">
            <div className="massageBlock_headerCenter">
              <button>Левый</button>
              <button>Центр</button>
              <button>Правый</button>
            </div>
            <img src="./images/arrow.svg" alt="arrow" />
            <img
              onClick={() => setHideShow(!hideShow)}
              src="./images/hide.svg"
              alt="rectangle"
            />
            <img src="./images/settings.svg" alt="settings" />
            <img
              onClick={starred}
              className={`star ${active ? "active" : ""}`}
              src="./images/star.png"
              alt="star"
            />
          </div>
        </div>
        <div className="descWrapper">
          <div className="massageDescription">
            <div className="massageTime">
              <div>
                {new Date(date).getHours() + ":" + new Date(date).getMinutes()}
              </div>
            </div>
            <div className={`content ${hideShow ? "active" : " "}`}>
              {longContent ? content.slice(0, 250) + "..." : content}
            </div>
          </div>
          <div className="attachments">
            {longContent ? (
              <span
                className={`${hideShow ? "active" : " "}`}
                onClick={() => {
                  setLongContent(false);
                }}
              >
                Далее
              </span>
            ) : (
              " "
            )}
            {attachments.map((item) =>
              item.type === "video" ? (
                <video key={item.type} controls>
                  <source src={item.url} type="video/mp4"></source>{" "}
                </video>
              ) : (
                <img key={item.type} src={item.url} alt="#" />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
