import React from "react";
import { useState, useEffect } from "react";

export default function MassageBlock({
  content,
  author,
  channel,
  attachments,
  id
}) {

  // add adaptive markUp
  // deploy
  
  const [active, setActive] = useState(false)
  const stars = JSON.parse(localStorage.getItem("star")) || []
  const keys = Object.keys(stars)
  const starred = () => {
    setActive(!active)
  }
  useEffect(() => {
    localStorage.setItem("star", JSON.stringify({ ...stars}))
  }, [active])
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
            <img src="./images/Rectangle 50.svg" alt="rectangle" />
            <img src="./images/settings.svg" alt="settings" />
            <img src="./images/star.svg" alt="star" />
          </div>
        </div>
        <div className="massageDescription">
          <div className="massageTime">
            <div>15:57</div>
          </div>
          <div>{content ? content : <h2>there is nothing</h2>}</div>
        </div>
        <div className="attachments">
          <span>Далее</span>
          {attachments.map((item) =>
            item.type === "video" ? (
              <video controls>
                <source src={item.url} type="video/mp4"></source>{" "}
              </video>
            ) : (
              <img src={item.url} alt="#" />
            )
          )}
        </div>
      </div>
    </>
  );
}
