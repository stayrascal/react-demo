import React, { PropTypes } from 'react'

const App = (props) => (
  <div className="page-container">
    {React.cloneElement({...props}.children, {...props})}
  </div>
);

App.propTypes = {
  children: propTypes.element.isRequired
};

export default App;
