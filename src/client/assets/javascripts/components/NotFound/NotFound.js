import React, { Component } from 'react';
import { link } from 'react-router';

export default class NotFound extends Component {
  render (
    <div className="container text-center">
      <h1>This is a demo 404 page!</h1>
      <hr />
      <link to="/">Back To Home View</link>
    </div>
  )
}
