import React, { Component } from "react";
import "Student.scss";
import { Student } from "./Student";

export class Student extends Component {
  render() {
    return (
      <div>
        <div
          class="modal fade"
          id="addModal"
          tabindex="-1"
          aria-labelledby="addModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="addModalLabel">
                  Adding student
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="firstName" class="form-label">
                      Firstname
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      class="form-control p-2"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="lastName" class="form-label">
                      Lastname
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      class="form-control p-2"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="group" class="form-label">
                      Select group
                    </label>
                    <select
                      name="group"
                      id="group"
                      class="form-select d-block w-100 p-2"
                    >
                      <option value="REACT N32">REACT N32</option>
                      <option value="REACT N45">REACT N45</option>
                      <option value="REACT N50">REACT N50</option>
                      <option value="REACT N58">REACT N58</option>
                    </select>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="doesWork"
                      id="doesWork"
                    />
                    <label class="form-check-label" for="doesWork">
                      Does work?
                    </label>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  class="btn btn-primary"
                  id="btn-add-student"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="editModal"
          tabindex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="editModalLabel">
                  Editing student
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="firstNameEdit" class="form-label">
                      Firstname
                    </label>
                    <input
                      type="text"
                      id="firstNameEdit"
                      name="firstNameEdit"
                      class="form-control p-2"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="lastNameEdit" class="form-label">
                      Lastname
                    </label>
                    <input
                      type="text"
                      id="lastNameEdit"
                      name="lastNameEdit"
                      class="form-control p-2"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="groupEdit" class="form-label">
                      Select group
                    </label>
                    <select
                      name="groupEdit"
                      id="groupEdit"
                      class="form-select d-block w-100 p-2"
                    >
                      <option value="REACT N32">REACT N32</option>
                      <option value="REACT N45">REACT N45</option>
                      <option value="REACT N50">REACT N50</option>
                      <option value="REACT N58">REACT N58</option>
                    </select>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="doesWorkEdit"
                      id="doesWorkEdit"
                    />
                    <label class="form-check-label" for="doesWorkEdit">
                      Does work?
                    </label>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  class="btn btn-primary"
                  id="btn-edit-student"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row py-3">
            <div class="col col-9">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search"
                class="form-control p-3"
              />
            </div>
            <div class="col col-3 d-flex gap-3">
              <select
                name="filter-select"
                id="filter-select"
                class="form-select d-block w-50"
              >
                <option value="ALL">ALL</option>
                <option value="REACT N32">REACT N32</option>
                <option value="REACT N45">REACT N45</option>
                <option value="REACT N50">REACT N50</option>
                <option value="REACT N58">REACT N58</option>
              </select>
              <button
                class="btn btn-outline-success d-block w-50"
                data-bs-toggle="modal"
                data-bs-target="#addModal"
              >
                Add student
              </button>
            </div>
          </div>

          <div class="row">
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Group</th>
                  <th>Does work?</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="students-list"></tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
