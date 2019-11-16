import React from "react"
import { InputGroup, FormControl, Button } from "react-bootstrap"

export const InlineForm = props => {
  return (
    <>
      <InputGroup size="lg">
        <FormControl
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Enter Project Name ..."
          value={props.inputValue}
          onChange={props.handleOnChange}
        />
      </InputGroup>
      <div className="form__controls">
        <Button
          className="form__btn"
          size="lg"
          variant="primary"
          onClick={props.handleOnSubmit}
        >
          {props.submitBtnName}
        </Button>
        <Button
          className="form__btn"
          size="lg"
          variant="secondary"
          onClick={props.handleOnCancel}
        >
          Cancel
        </Button>
      </div>
    </>
  )
}
