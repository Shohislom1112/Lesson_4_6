import "./Add.scss";

// eslint-disable-next-line react/prop-types
const Add = ({ closeAdd }) => {
  return (
    <div
      className="Add-container"
      onClick={(e) => {
        if (e.target.className === "Add-container") closeAdd();
      }}
    >
      <div className="Add">
        <form>
          <div className="form-group">
            <label htmlFor="page">Page</label>
            <input name="page" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name="description"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
