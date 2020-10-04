import React, { Component } from "react";
import { ReactReader } from "react-reader";

const ReadBook = () => {
  return (
    <div>
      <div style={{ position: "relative", height: "100%" }}>
        {" "}
        // * Container needs a height..
        <ReactReader
          url={"../books/Harry.epub"}
          title={"Harry"}
          //   location={"epubcfi(/6/2[cover]!/6)"}
          locationChanged={(epubcifi) => console.log(epubcifi)}
        />
      </div>
    </div>
  );
};

export default ReadBook;
