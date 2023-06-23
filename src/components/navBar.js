import "./navBarCss.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div style={styles.container}>
        <div style={styles.leftContainer}>
          <div>
            <img src={require("../assets/EDYODA.png")} alt="" height={"22vh"} />
          </div>
          <div style={{ padding: "0 6vh" }}>
            <text style={styles.text}>Courses</text>
            <img
              src={require("../assets/arrow.png")}
              alt=""
              style={{ padding: "0 2vh" }}
              height={"8vh"}
            />
          </div>
          <div>
            <text style={styles.text}>Programs</text>
            <img
              src={require("../assets/arrow.png")}
              alt=""
              style={{ padding: "0 2vh" }}
              height={"8vh"}
            />
          </div>
        </div>
        <div style={styles.rightContainer}>
          <div style={{ padding: "0 4vh" }}>
            <img src={require("../assets/Search.png")} alt="" height={"15vh"} />
          </div>
          <div style={{ padding: "0 4vh" }}>
            <text style={styles.text}>Login</text>
          </div>
          <div style={styles.joinButton}>
            <text style={styles.joinText}>JOIN NOW</text>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

const styles = {
  container: { width: "100%", display: "flex", flex: 1 },
  leftContainer: {
    display: "flex",
    width: "50%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "",
    minHeight: "5vh",
  },
  rightContainer: {
    display: "flex",
    width: "50%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "",
    minHeight: "5vh",
  },
  joinButton: {
    display: "flex",
    backgroundImage: `linear-gradient(to left,#0048FF, #0096FF)`,
    minHeight: "5vh",
    height: "100%",
    width: "30%",
    borderRadius: "3vh",
    justifyContent: "center",
  },
  joinText: {
    fontStyle: "Railway",
    backgroundColor: "",
    alignSelf: "center",
    color: "white",
  },
  text: { fontStyle: "Railway", fontSize: "2.2vh" },
};
