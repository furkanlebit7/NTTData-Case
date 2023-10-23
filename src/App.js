import Header from "./Layouts/Header";
import Content from "./Layouts/Content";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "./Layouts/Footer";
import Example from "./Components/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
