import React from "react";

export default function VideoItem({ url, tit, desc, img, counter, onClick }) {
  const clickHandler = (e) => {
    onClick(tit);
  };

  return (
    <div>
      {counter === 0 ? (
        <div>
          <iframe
        style={{marginTop: "25px"}}
            width="700"
            height="400"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p text style = {{fontSize:25}}>{tit}</p>
          <p text style = {{fontSize:15}}>{desc}</p>
        </div>
      ) : (
        <div>
          <img style ={{width:"25%" }} src={img} alt="Image" onClick={clickHandler} />
          <p text style = {{fontSize:15}}>{tit}</p>
        </div>
      )}
    </div>
  );
}
