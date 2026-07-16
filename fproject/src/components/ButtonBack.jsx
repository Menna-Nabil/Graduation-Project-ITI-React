import ScrollToTop from "react-scroll-to-top";

function ButtonBack() {
  return (
    <div>
      <div style={{ marginTop: "0vh" }} />

      <ScrollToTop
        smooth
        component={<span style={{ fontSize: "25px", color: "#fff"}}>↑</span>}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "40px",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#e0748dff",
          color: "#fff",
          border: "none",
          borderRadius: "20%",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      />
    </div>
  );
}

export default ButtonBack;

