import React from "react"
import { InputGroup, FormControl } from "react-bootstrap"

class Todolist extends React.Component {
  constructor(props) {
    super(props)
    this.state = { projectNameInput: "" }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e) {
    this.setState({...this.state, projectNameInput: e.target.value})
  }

  render() {
    return(
      <div>
        <h3 className="todo__title">Projects</h3>
        <InputGroup size="lg">
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Enter Project Name ..."
            value={this.state.projectNameInput}
            onChange={this.handleOnChange}
          />
        </InputGroup>
      </div>
    )
  }
}

export default Todolist
