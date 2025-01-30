// import { Carousel } from "../index";
import { Select } from "../index";
import "./App.css";

function App() {
  // const images = [
  //   "https://i.pinimg.com/736x/89/a0/39/89a039205effc7b87d7ee11598118449.jpg",
  //   "https://i.pinimg.com/736x/45/84/85/4584853771196c5b50f74b77e5085a14.jpg",
  //   "https://i.pinimg.com/236x/8b/73/ff/8b73ff7533cc8311530c38769f441e61.jpg",
  //   "https://i.pinimg.com/236x/20/1f/95/201f9558f128d2405e2a9146c45c3b29.jpg",
  //   "https://i.pinimg.com/736x/86/c4/77/86c47791cbf9f0e7841b28a94564680c.jpg",
  //   "https://i.pinimg.com/736x/0a/68/a9/0a68a9a695997041ad4c6df4f5de21f1.jpg",
  //   "https://i.pinimg.com/236x/66/9b/7c/669b7cd897de9b80bf779fee82023eda.jpg",
  //   "https://i.pinimg.com/236x/ab/d4/ec/abd4ec7695cd5b5b7c172df3ab628901.jpg",
  // ];

  const options = [
    { label: "Dog", value: "Dog" },
    { label: "Cat", value: "Cat" },
    { label: "Hamster", value: "hamster" },
    { label: "Birds", value: "bamster" },
  ];

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1c2b38",
      }}
    >
      <Select id="select" items={options} label="select an pet" size="md" />
      {/* <Carousel
        style={{ width: "400px", height: "360px" }}
        images={images}
        footerIndicator
        footerControl
        footerControlOrientation="vertical"
      /> */}
    </main>
  );
}

export default App;
