import {
  Navigation,
  Hero,
  Accomplishment,
  Courses,
  Invitation,
  Trending,
  Feedback,
  Footer,
} from "./components/Index";
import Customize from "./components/Popover";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Accomplishment />
      <Courses />
      <Invitation />
      <Trending />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
