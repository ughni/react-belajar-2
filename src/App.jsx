import "./App.css"
import Belajar01 from "./component/Belajar01"
import Belajar02 from "./component/Belajar02"
import Belajar03 from "./component/Belajar03"
import Belajar04 from "./component/Belajar04"


function App() {
  const myStyle = {
    color: 'white',
    backgroundColor: "red",
    padding: "2rem",
    fontSize: "2rem",
    textAlign: "center",
  }



  return (
    <>
      <h1 style={myStyle}>semangat pagi</h1>
      <h2 className="hiro">helo dunia</h2>
      <h3 className="about">semangat pagi</h3>
      <Belajar01 />
      <br /><br />
      <Belajar02 />
      <br /><br /><br />
      <Belajar03 />
      <Belajar04 />
    </>
  )
}

export default App
