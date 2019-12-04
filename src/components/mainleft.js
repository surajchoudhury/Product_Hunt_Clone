import React from "react";

const MainLeft = props => {
  return (
    <div className="main_left">
      <div className="container_left">
        <div className="main_left_small">
          <div className="main_left_small_img_container">
            <img className="main_left_small_img" src={props.image} alt="img" />
          </div>
          <div className="main_left_small_right">
            <p className="main_left_small_right_text1">{props.text1}</p>
            <p className="main_left_small_right_text2">{props.text2}</p>
            <div className="comments_container">
              <div className="comments_img_container">
                <img
                  className="comments_img"
                  src="images/comments_logo.png"
                  alt="img"
                />

                <p className="comment_count">{props.comments}</p>
              </div>

              <p className="share_img">⎋</p>

              <p className="comments_text">{props.device}</p>
            </div>
          </div>
        </div>
        <div className="main_right_small">
          <div className="main_right_small_container">
            <p className="main_right_small_arrow">▲</p>
            <p className="main_right_small_arrow">{props.rank}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLeft;
