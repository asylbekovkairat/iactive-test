import React from "react";

export default function MassageBlock({
  content,
  author,
  channel,
  attachments,
}) {

  // finish markup
  // add adaptive markUp
  // finish map of attachments
  // deploy

  return (
    <>
      <div className="blockWrapper">
        <div className="massageBlock_header">
          <div className="massageTime">
            <div>15:57</div>
          </div>
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
          <div>{content ? content : <h2>there is nothing</h2>}</div>
        </div>
        <div className="attachments">

          {/* map attachments nned to finish */}
          <span>Далее</span>
          {(attachments.type === "video") ? (
            attachments.map((item) => <video src={item.url} type="video"></video>)
          ) : (
            attachments.map((item) => <img src={item.url} alt="f" />)
          )}
        </div>
      </div>
    </>
  );
}
