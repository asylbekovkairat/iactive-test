import React from "react";

export default function MassageBlock({content, author, channel, attachments}) {

  return (
    <>
      <div className="blockWrapper">
        <div className="massageBlock_header">
          <div className="massageTime">15:57</div>
          <div className="massageBlock_headerLeft">
            <img src="./images/userLogo.png" alt="logo" />
            <div className="massageBlock_userDesc">
              <span className="userName">{author}</span>
              <span className="desc">
                {channel}
              </span>
            </div>
          </div>
          <div className="massageBlock_headerCenter">
            <div>Левый</div>
            <div>Центр</div>
            <div>Правый</div>
          </div>
          <div className="massageBlock_headerRight">
            <img src="./images/arrow.svg" alt="arrow" />
            <img src="./images/Rectangle 50.svg" alt="rectangle" />
            <img src="./images/settings.svg" alt="settings" />
            <img src="./images/star.svg" alt="star" />
          </div>
        </div>
        <div className="massageDescription">
          <div>
            {
              content ? content : <h2>there is nothing</h2>
            }
          </div>
        </div>
      </div>
    </>
  );
}
