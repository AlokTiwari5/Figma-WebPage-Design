import "./App.css";
import Content from "./components/content";
import Form from "./components/form";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container" style={styles.main}>
        <div style={styles.content}>
          <Content />
        </div>
        <div style={styles.bottomContainer}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  bottomContainer: {
    display: "flex",
    width: "50%",
    backgroundColor: "",
    justifyContent: "center",
    marginTop: "6vh",
    flex: "1 1 80vh",
  },
  main: { backgroundColor: "", display: "flex", flexWrap: "wrap" },
  content: { display: "flex", minWidth: "50%", flex: "1 1 80vh" },
};
