import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { Input, Button, Message } from 'semantic-ui-react'
import { requestCreate } from '../actions'


class TodoForm extends Component{
  locationInput({ input, meta: { touched, error }, ...custom }) {
    const hasError = touched && error !== undefined
    return (
      <div>
        {hasError &&
          <Message
            error
            header='Error'
            content={error} />
        }
        <Input
          error={hasError}
          fluid
          placeholder="Location..."
          {...input}
          {...custom} />
      </div>
    );
  }

  submit(value, dispatch) {
    dispatch(requestCreate(value))
    dispatch(reset('simple'))
  }
  
  render() {
    const { handleSubmit } = this.props
    return(
      <div>
        <form onSubmit={handleSubmit(this.submit.bind(this))}>
          <Field name="location" component={this.locationInput} />
          <br/>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}


const validate = values => {
  const errors = {}
  if (!values.location || values.location.trim() === '') {
    errors.location = 'Location required'
  }
  return errors
}


const exportTodoForm = reduxForm({
  form: 'simple',
  validate
})(TodoForm)


const mapDispatchToProps = {
  requestCreate,
 }

export default connect(null, mapDispatchToProps)(exportTodoForm)
