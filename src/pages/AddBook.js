import React from "react";
import SideBar from "../components/SideBar";

const AddBook = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row-sm-3">
              <h4>Add Books</h4>
            </div>
            <div className="row-sm-3">
              <form>
                <div class="form-group">
                  <input
                    placeholder="Title"
                    type="text"
                    class="form-control"
                    required
                  ></input>
                </div>
                <div class="form-group">
                  <input
                    placeholder="Publication Date"
                    type="date"
                    class="form-control"
                    required
                  ></input>
                </div>
                <div class="form-group">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option selected disabled value="">
                      Category
                    </option>
                    <option>Sci-Fi</option>
                    <option>History</option>
                    <option>Report</option>
                    <option>Autobiography</option>
                  </select>
                </div>
                <div class="form-group">
                  <input
                    placeholder="Pages"
                    type="number"
                    class="form-control"
                    required
                  ></input>
                </div>
                <div class="form-group">
                  <input
                    placeholder="ISBN"
                    type="text"
                    class="form-control"
                    required
                  ></input>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="7"
                    placeholder="About This Book"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="file"
                    class="form-control-file"
                    placeholder="Attache Book File"
                  ></input>
                </div>
                <button type="submit" class="Button-o">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
