import React, {Component} from 'react'
import {connect} from "react-redux"
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { getEvent, deleteEvent, putEvent } from "../actions"

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field
    console.log(field)
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
//    await this.props.postEvent(values)
    console.log(`values is`)
    console.log(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="title" name="title" type="text" component={this.renderField} />
          <Field label="body" name="body" type="text" component={this.renderField} />

          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting} />
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
          </div>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = "Enter a title, please"
  if (!values.body) errors.body = "Enter a body, please"

  return errors
}
const mapDisPatchToProps = ({ deleteEvent })

export default connect(null, mapDisPatchToProps)(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)  
)