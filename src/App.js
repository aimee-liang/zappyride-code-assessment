// import {useState} from "react"
import Form from "./Components/Form"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export default function App() {
  // const [rate, setRate] = useState(null)

  return (
    <MuiThemeProvider>
      <AppBar title="ZappyRide Code Assessment"/>
      <Form />
      <LoadPage />
    </MuiThemeProvider>
  );
}
