import React, { Component } from 'react'
import { Button, Checkbox, Form, Image, Message } from 'semantic-ui-react'
import InlineError from '../InlineError'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class NewMovieForm extends Component {
  state = {
    title: '',
    cover: '',
    errors: {}
  };

  static propTypes = {
    onNewMovieSubmit: PropTypes.func.isRequired
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    const errors = this.validate();
    this.setState({
      errors
    });

    if (Object.keys(errors).length === 0) {
      this.props.onNewMovieSubmit(this.state);
    }
  };

  validate = () => {
    const errors = {};
    if (!this.state.title) errors.title = "cant be blank";
    if (!this.state.cover) errors.cover = "cant be blank";
    return errors;
  };

  render() {
    const { errors } = this.state;
    const form = (
      <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching}>
        <Form.Field error={!!errors.title}>
          <label>Title</label>
          {errors.title && <InlineError message={errors.title} />}
          <input
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder='Title' />
        </Form.Field>
        <Form.Field error={!!errors.cover}>
          <label>Cover Url</label>
          {errors.cover && <InlineError message={errors.cover} />}
          <input
            id="cover"
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
            placeholder='Cover Url' />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Image src={this.state.cover} size='small' />
        <div className="clearFix"></div>
        <Button type='submit'>Submit</Button>
        {
          this.props.newMovie.error &&
          (
            <Message negative>
              <Message.Header>We're sorry</Message.Header>
              <p>A problem occured while recording.</p>
            </Message>
          )
        }
      </Form>
    );
    return (
      <div>
        {
          this.props.newMovie.done ? <Redirect to="/movies" /> : form
        }
      </div>
    )
  }
}



export default NewMovieForm;