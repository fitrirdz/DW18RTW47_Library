import React, { useContext } from "react";
// import { CartContext } from "../context/cartContext";
import SideBar from "../components/SideBar";

const DetailBuku = () => {
  // const [state, dispatch] = useContext(CartContext);
  return (
    <div>
      {/* {JSON.stringify(state)} */}
      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="d-flex flex-row" style={{ height: "400px" }}>
              <div className="d-flex flex-column">
                <img
                  src={require("../images/TessRoad.svg")}
                  style={{ height: "400px", textAlign: "center" }}
                ></img>
              </div>
              <div
                className="d-flex flex-column justify-content-between pl-4"
                style={{ height: "100%" }}
              >
                <div>
                  <h3>Judul Buku</h3>
                  <p className="subtitle">Pengarang</p>
                </div>
                <div>
                  <h6>Publication date</h6>
                  <p className="subtitle">Tanggalnya di sini</p>
                </div>
                <div>
                  <h6>Category</h6>
                  <p className="subtitle">Ya kategorinya apa</p>
                </div>
                <div>
                  <h6>Pages</h6>
                  <p className="subtitle">Ada berapa halaman?</p>
                </div>
                <div>
                  <h6 style={{ color: "red" }}>ISBN</h6>
                  <p className="subtitle">Nomor ISBNnya berapa?</p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <article>
                <h4>About This Book</h4>
                <p className="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque facilisis erat pellentesque, aliquet nunc at,
                  tempor libero. In finibus condimentum orci, nec vehicula orci
                  efficitur congue. Etiam luctus, mi a eleifend suscipit, ligula
                  sapien fringilla justo, in ornare sem est sit amet orci.
                  Mauris tellus enim, rutrum id dapibus mattis, lacinia quis
                  libero. Nulla posuere congue orci eget aliquet. Morbi
                  tincidunt ipsum ut dolor venenatis varius. Pellentesque
                  malesuada, felis eget eleifend volutpat, risus quam
                  ullamcorper mauris, at sagittis nisl nibh nec justo. Quisque
                  posuere diam et pretium consectetur. Fusce odio dui,
                  scelerisque non interdum ultricies, dapibus ut mi. Phasellus
                  posuere elit a justo aliquet ornare. Quisque porta leo sit
                  amet eros dictum auctor. Aenean feugiat fermentum dolor.
                  Generated 1 paragraph, 117 words, 809 bytes of Lorem Ipsum
                </p>
              </article>
            </div>
            <div class="d-flex flex-row-reverse">
              <button className="Button-g">Read Book</button>
              <button className="Button-o">Add Library</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBuku;
