import { useEffect, useState } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });

  const fetchList = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/todos");
      const todos = await response.json();

      setList(todos);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  // Handle EDIT todo
  const handleEdit = (id, title, date) => {
    console.log("edit", id);

    setTitle(title);
    setDate(date);

    setIsEdit(true);
    setEditId(id);
  };

  // Handle DELETE todo
  const handleDelete = async (id) => {
    console.log("delete", id);
    const response = await fetch(`http://127.0.0.1:5000/api/todos/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    fetchList();
    // setList(data);
  };

  // Run when user clicks the button
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !date) {
      setAlert({
        show: true,
        type: "danger",
        msg: "Title and Date both required",
      });
    } else if (isEdit) {
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/api/todos/${editId}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title,
              date: date.toString(),
            }),
          }
        );

        setAlert({
          show: true,
          type: "success",
          msg: "Todo edited successfully",
        });
        setTitle("");
        setDate("");
        fetchList();
        setIsEdit(false);
        setEditId(null);
      } catch (err) {
        console.log("ERROR: ", err);
      }
    } else {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: new Date().getTime().toString(),
            title,
            date: date.toString(),
          }),
        });
        // const data = await response.json();
        // setList(data);
        fetchList();

        setAlert({
          show: true,
          type: "success",
          msg: "Todo added successfully",
        });
        setTitle("");
        setDate("");
      } catch (err) {
        console.log("ERROR: ", err);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h2>Add your todo</h2>
        </nav>
      </header>

      <main className="main-container">
        <form onSubmit={handleSubmit}>
          <div className="input-div">
            <input
              type="text"
              placeholder="title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            {isEdit ? "Edit" : "Add"}
          </button>
        </form>

        {alert.show && <Alert alert={alert} setAlert={setAlert} list={list} />}

        {loading ? (
          <p>loading... </p>
        ) : list.length === 0 ? (
          <p>You have not set any todos</p>
        ) : (
          <List
            list={list}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}

export default App;
