import React from "react"
import { InputGroup, FormControl, Button } from "react-bootstrap"

class InlineForm extends React.Component {
  toggleControls = () => {
    return !this.props.hideControlsIfEmpty || this.props.inputValue
  }

  render() {
    return (
      <>
        <InputGroup size="lg">
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Enter Task Name ..."
            value={this.props.inputValue}
            onChange={this.props.handleOnChange}
          />
        </InputGroup>

        {this.toggleControls() && (
          <div className="form__controls">
            <Button
              className="form__btn"
              size="sm"
              variant="success"
              onClick={this.props.handleOnSubmit}
            >
              {this.props.submitBtnName}
            </Button>
            <Button
              className="form__btn"
              size="sm"
              variant="light"
              onClick={this.props.handleOnCancel}
            >
              Cancel
            </Button>
          </div>
        )}
      </>
    )
  }
}

export default InlineForm
