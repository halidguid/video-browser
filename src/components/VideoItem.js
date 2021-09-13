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
            width="560"
            height="315"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>{tit}</p>
          <p>{desc}</p>
        </div>
      ) : (
        <div>
          <img src={img} alt="Image" onClick={clickHandler} />
          <p>{tit}</p>
        </div>
      )}
    </div>
  );
}
