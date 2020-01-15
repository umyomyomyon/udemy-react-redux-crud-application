import React, {Component} from 'react'
import {connect} from "react-redux"
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvent } from "../actions"

class EventsNew extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    //分割代入
    const { input, label, type, meta: {touched, error } } = field
    console.log(field)
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    console.log(`values is`)
    console.log(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="title" name="title" type="text" component={this.renderField} />
          <Field label="body" name="body" type="text" component={this.renderField} />

          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
            <Link to="/">Cancel</Link>
          </div>
        </div>
      </form>
    )
  }
}

//何も入力されていないときに、入力してくださいのメッセージを表示したい
const validate = values => {
  const errors = {}
  //titleもしくはbodyになにもない場合は、errorsオブジェクトにエラーメッセージを格納して返す
  if (!values.title) errors.title = "Enter a title, please"
  if (!values.body) errors.body = "Enter a body, please"

  return errors
}
const mapDisPatchToProps = ({ postEvent })

export default connect(null, mapDisPatchToProps)(
  //{validate: validate} -> {validate}のシンタックスシュガーを用いている
  //{validate: validateFunc}でも大丈夫
  //reduxForm()()は１つ目の()の引数としてオブジェクトを受け取り,
  //２つ目の(), つまり返ってくる関数の引数としてcomponentを受け取る
  //reduxForm(Object)(Component)
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)  
  //connectの2つ目の()にはcomponentを渡す必要があるが
  //ここではHigher Order ComponentであるreduxFormを渡している
  //つまり, reduxFormで機能が拡張されたEventsNewが渡されている
)