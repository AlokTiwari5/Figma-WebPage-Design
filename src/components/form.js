import { useCallback } from "react";

const Form = () => {
  const Card = useCallback(()=>{
    return (
      <div
        style={styles.cardContainer}
      >
        <img src={require("../assets/circle.png")} alt="" height={"20vh"} />
        <div
          style={styles.cardTop}
        >
          <text
            style={{ fontStyle: "Roboto", fontSize: "2vh", color: "#BEBEBE" }}
          >
            12 Months Subscription{" "}
          </text>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1vh",
                alignItems: "baseline",
              }}
            >
              <text
                style={{
                  fontStyle: "Roboto",
                  fontSize: "1.5vh",
                  color: "#BEBEBE",
                }}
              >
                Total
              </text>
              <text
                style={{
                  fontStyle: "Roboto",
                  fontSize: "2vh",
                  color: "#BEBEBE",
                }}
              >
                ₹99
              </text>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "1vh" }}>
              <text
                style={{
                  fontStyle: "Roboto",
                  fontSize: "1.5vh",
                  color: "#BEBEBE",
                }}
              >
                ₹15
              </text>
              <text
                style={{
                  fontStyle: "Roboto",
                  fontSize: "1.5vh",
                  color: "#BEBEBE",
                }}
              >
                /mo
              </text>
            </div>
          </div>
        </div>
      </div>
    );
  },[]);

  const NormalCard = useCallback((props)=>{
    const { mainContent, price, perMonth, color } = props;
    return (
      <div
        style={{
          display: "flex",
          width: "94%",
          padding: "1vh",
          border: "1.2px solid #BEBEBE",
          background: color ? color : "#fffff",
          borderRadius: "4px",
          alignItems: "center",
          gap: "1vh",
        }}
      >
        <img
          src={
            color
              ? require("../assets/tick.png")
              : require("../assets/circle.png")
          }
          alt=""
          height={"20vh"}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <text
            style={{ fontStyle: "Roboto", fontSize: "2vh", color: "#3C4852" }}
          >
            {mainContent}
          </text>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1vh",
                alignItems: "baseline",
              }}
            >
              <text
                style={{
                  fontStyle: "Roboto",
                  fontSize: "1.5vh",
                  color: "#3C4852",
                  fontWeight: "600",
                }}
              >
                Total
              </text>
              <text
                style={{
                  fontStyle: "Roboto",
                  fontSize: "2vh",
                  color: "#3C4852",
                  fontWeight: "600",
                }}
              >
                {price}
              </text>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "1vh" }}>
              <text
                style={{
                  fontStyle: "Roboto",
                  fontSize: "1.5vh",
                  color: "#3C4852",
                  fontWeight: "600",
                }}
              >
                {perMonth}
              </text>
              <text
                style={{
                  fontStyle: "Roboto",
                  fontSize: "1.5vh",
                  color: "#BEBEBE",
                  fontWeight: "600",
                }}
              >
                /mo
              </text>
            </div>
          </div>
        </div>
      </div>
    );
  },[]);

  const LimitedTimeCard = useCallback(()=>{
    return(
      <div
        style={styles.limitedCardContainer}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <text
            style={{ fontStyle: "Roboto", fontSize: "2vh", color: "#DE4313" }}
          >
            Limited time offer
          </text>
          <text
            style={{ fontStyle: "Roboto", fontSize: "2vh", color: "#3C4852" }}
          >
            - ₹18,401
          </text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            width: "100%",
            gap: "1vh",
            alignItems:'center'
          }}
        >
          <img
            src={require("../assets/redTimer.png")}
            alt=""
            height={"15vh"}
            color="#DE4313"
          />
            <text
              style={{ fontStyle: "Roboto", fontSize: "2vh", color: "#DE4313" }}
            >
              Offer valid till 25th March 2023
            </text>
        </div>
      </div>
    )
  },[]);

  return (
    <div style={styles.conatiner}>
      <div
        style={styles.top}
      >
        <div
          style={styles.signUp}
        >
          <img
            src={require("../assets/2.png")}
            alt=""
            height={"22vh"}
            width={"22vh"}
          />
          <text style={styles.signUpText}>
            Sign Up
          </text>
        </div>
        <div
          style={styles.signUp}
        >
          <img
            src={require("../assets/1.png")}
            alt=""
            height={"22vh"}
            width={"22vh"}
          />
          <text style={styles.signUpText}>
            Subscribe
          </text>
        </div>
      </div>
      <text
        style={styles.subscription}
      >
        Select your subcription plan
      </text>
      <Card />
      <NormalCard
        color="#D7EDDD"
        mainContent="12 Months Subscription "
        price="₹179"
        perMonth="₹15"
      />
      <NormalCard
        mainContent="6 Months Subscription "
        price="₹149"
        perMonth="₹25"
      />
      <NormalCard
        mainContent="3 Months Subscription "
        price="₹99"
        perMonth="₹33"
      />
      <div
        style={styles.horizontal}
      ></div>
      <div
        style={styles.fee}
      >
        <text style={styles.text}>
          Subscription Fee
        </text>
        <text style={styles.text}>₹18,500</text>
      </div>
      <LimitedTimeCard />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <text style={styles.text}>
          Total (Incl. of 18% GST)
        </text>
        <text style={styles.text}>₹149</text>
      </div>
      <div
        style={styles.bottom}
      >
        <div
          style={styles.cancelConatiner}
        >
          <text
            style={styles.cancelText}
          >
            CANCEL
          </text>
        </div>
        <div
          style={styles.payContainer}
        >
          <text
            style={styles.payText}
          >
            PROCEED TO PAY
          </text>
        </div>
      </div>
      <div style={styles.razorPay}>
        <img
          src={require("../assets/Frame 12537.png")}
          alt=""
          height={"42vh"}
        />
      </div>
    </div>
  );
};

export default Form;

const styles = {
  conatiner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2.5vh 2vh",
    gap: "1.7vh",
    width: "55vh",
    minHeight: "70vh",
    left: "135vh",
    top: "12vh",
    backgroundColor: "white",
    borderRadius: "8px",
    marginBottom: "20vh",
  },
  top:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "",
  },
  signUp:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  signUpText:{ fontStyle: "Roboto", fontSize: "1.5vh" },
  subscription:{ fontStyle: "Roboto", fontSize: "2vh", },
  horizontal:{
    display: "flex",
    height: "1px",
    backgroundColor: "#BEBEBE",
    width: "99%",
  },
  razorPay:{ display: "flex", width: "100%", alignItems: "flex-start" },
  payContainer:{
    display: "flex",
    backgroundColor: "#47BA68",
    borderRadius: "4px",
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
  },
  payText:{
    fontStyle: "Roboto",
    fontSize: "2vh",
    color: "white",
    fontWeight: "700",
  },
  cancelConatiner:{
    display: "flex",
    padding: "1.4vh 1.2vh",
    borderRadius: "4px",
    border: "2px solid #F77171",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelText:{
    fontStyle: "Roboto",
    fontSize: "1.8vh",
    color: "#F77171",
    fontWeight: "700",
  },
  bottom:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    gap: "2vh",
    padding: '2vh 0',
  },
  text:{ fontStyle: "Roboto", fontSize: "1.8vh" },
  fee:{
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    margin: "0 2vh",
    backgroundColor: "",
  },
  limitedCardContainer:{
    display: "flex",
    width: "90%",
    padding: "1.2vh 2.5vh",
    border: "2px solid linear-gradient(90deg,#DE4313 ,#FEC163)",
    background: "#fffff",
    borderRadius: "4px",
    alignItems: "center",
    gap: "0.5vh",
    backgroundImage: `linear-gradient(90deg,#F8A954,#FEC163)`,
    flexDirection: "column",
  },
  cardContainer:{
    display: "flex",
    width: "94%",
    padding: "1vh",
    border: "1.2px solid #BEBEBE",
    background: "#E7E7E7",
    borderRadius: "4px",
    alignItems: "center",
    gap: "1vh",
  },
  cardTop:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  }
  
};
