import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Student.scss";

const Student = ({ row }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Page</th>
            <th className="expand">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home</td>
            <td>This is the main page</td>
            <td>
              <span className="label label-live">Live</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-btn" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 2</td>
            <td>This is the second page</td>
            <td>
              <span className="label label-draft">Draft</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-btn" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Page 3</td>
            <td>This is the third page</td>
            <td>
              <span className="label label-error">Draft</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-btn" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Student;
