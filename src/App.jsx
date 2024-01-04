import { useState } from "react";

import Add from "./components/Add";
import Student from "./components/Student";
import "./main.scss";

function App() {
  const [AddOpen, setAddOpen] = useState(false);

  const rows = [
    { page: "Page 1", description: "This is the first page", status: "live" },
    { page: "Page 2", description: "This is the second page", status: "draft" },
    { page: "Page 3", description: "This is the third page", status: "error" },
  ];

  return (
    <div className="App">
      <Student rows={rows} />
      <button className="btn" onClick={() => setAddOpen(true)}>
        Add
      </button>
      {AddOpen && (
        <Add
          closeAdd={() => {
            setAddOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
