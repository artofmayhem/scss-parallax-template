import AppBar from "@material-ui/core/AppBar";
import "./App.scss";

function App() {
  return (
    <>
      <AppBar
        color={"inherit"}
        style={{ backgroundColor: "#222", color: "white" }}
      >
        <h1>Parallax-scss-template</h1>
      </AppBar>
      <div className={"wrapper"}>
        {/*<div className={"snow layer1 a"}></div>*/}
        {/*<div className={"snow layer1"}></div>*/}
        {/*<div className={"snow layer2 a"}></div>*/}
        {/*<div className={"snow layer2"}></div>*/}
        {/*<div className={"snow layer3 a"}></div>*/}
        {/*<div className={"snow layer3"}></div>*/}
          <div className={'frame'}></div>
      </div>
      <div className={"parallax-wrapper"}>
        <div className={"content"}>
          <h1>one Text</h1>
        </div>
      </div>
      <div className={"regular-wrapper"}>
        <div className={"content"}>
          <h1>two Text</h1>
        </div>
      </div>
      <div className={"parallax-wrapper2"}>
        <div className={"content"}>
          <h1>Three Text</h1>
        </div>
      </div>
      <div className={"regular-wrapper2"}>
        <div className={"content"}>
          <h1>four Text</h1>
        </div>
      </div>
      <div className={"parallax-wrapper3"}>
        <div className={"content"}>
          <h1>five Text</h1>
        </div>
      </div>
      <div className={"regular-wrapper3"}>
        <div className={"content"}>
          <h1>six Text</h1>
        </div>
      </div>
     
    </>
  );
}

export default App;
