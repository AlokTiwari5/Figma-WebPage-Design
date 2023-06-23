const Content = () => {
  return (
    <div style={styles.container}>
      <text style={styles.text1}>Access curated courses worth</text>
      <div>
        <div style={styles.redLine}></div>
        <text style={styles.text2}>
          ₹ 18,500 at just
          <text style={styles.itemColor}> ₹ 99 </text>
          per year!
        </text>
      </div>
      <div>
        <div style={styles.item}>
          <img
            src={require("../assets/Icon (1).png")}
            alt="logo"
            height={"52vh"}
          />
          <text style={styles.itemText}>
            <text style={styles.itemColor}>100+ </text>
            Job relevant courses
          </text>
        </div>
        <div style={styles.item}>
          <img
            src={require("../assets/Icon (3).png")}
            alt="logo"
            height={"52vh"}
          />
          <text style={styles.itemText}>
            <text style={styles.itemColor}>20,000+ </text>
            Hours of content
          </text>
        </div>
        <div style={styles.item}>
          <img src={require("../assets/Live.png")} alt="logo" height={"52vh"} />
          <text style={styles.itemText}>
            <text style={styles.itemColor}>Exclusive </text>
            webinar access
          </text>
        </div>
        <div style={styles.item}>
          <img src={require("../assets/Icon.png")} alt="logo" height={"52vh"} />
          <text style={styles.itemText}>
            Scholarship worth
            <text style={styles.itemColor}>₹94,500</text>
          </text>
        </div>
        <div style={styles.item}>
          <img
            src={require("../assets/Icon (2).png")}
            alt="logo"
            height={"52vh"}
          />
          <text style={styles.itemText}>
            <text style={styles.itemColor}>Ad Free </text>
            learning experience
          </text>
        </div>
      </div>
    </div>
  );
};

export default Content;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "",
    width: "100%",
    padding: "5vh",
    paddingLeft: "13vh",
  },
  item: { alignItems: "center", display: "flex", paddingTop: "4vh" },
  itemText: { color: "white", fontSize: "4vh", paddingLeft: "6vh" },
  itemColor: { color: "#0096FF" },
  redLine: {
    display: "flex",
    height: "4px",
    width: "16vh",
    backgroundColor: "#FF0000",
    position: "absolute",
    left: "18vh",
    top: "25vh",
  },
  text1: {
    fontStyle: "Railway",
    fontWeight: "600",
    fontSize: "5.5vh",
    color: "white",
  },
  text2: { color: "white", fontSize: "5.5vh", fontWeight: "600" },
};
