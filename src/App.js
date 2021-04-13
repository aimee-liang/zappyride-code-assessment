import {useState} from "react"
import SelectDropdown from "./Components/SelectDropdown"
import Form from "./Components/Form"

function App() {

  const [rate, setRate] = useState(null)

  /* helper fn() to set rate in state and pass as props */
  const rateSetter = (data) => {
    setRate(data)
  }

  return (
    <div>
      <SelectDropdown rateSetter={rateSetter}/>
      <Form />
    </div>
  );
}

export default App;
