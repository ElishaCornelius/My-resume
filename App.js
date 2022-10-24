import Resume from "./components/resume";
import Contact from "./components/contact";
import Coverletter from "./components/coverletter";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Resume />
      <Contact />
      <Coverletter />

      <h1> hello </h1>
      
    </div>
  )
}
export default App;
