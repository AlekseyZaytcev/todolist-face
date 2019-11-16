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
            placeholder="Enter Project Name ..."
            value={this.props.inputValue}
            onChange={this.props.handleOnChange}
          />
        </InputGroup>

        {this.toggleControls() && (
          <div className="form__controls">
            <Button
              className="form__btn"
              size="lg"
              variant="primary"
              onClick={this.props.handleOnSubmit}
            >
              {this.props.submitBtnName}
            </Button>
            <Button
              className="form__btn"
              size="lg"
              variant="secondary"
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
