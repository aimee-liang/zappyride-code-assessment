import {useState} from "react"
import Form from "./Components/Form"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import LoadPage from "./Components/LoadPage"

export default function App() {
/* formData is going to be set in state so we know that everything is complete */
  const [formData, setFormData] = useState({})

  const dataSetter = (info) => {
    setFormData(info)
  }
/* loadpage should not render until form is complete */

  return (
    <MuiThemeProvider>
      <AppBar title="ZappyRide Code Assessment"/>
      <Form />
      <LoadPage />
    </MuiThemeProvider>
  );
}
