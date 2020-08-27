import React, { Component } from 'react';

class Loading extends Component {

  static defaultProps = {
    text: 'Loading'
  };

  render() {

    const { text } = this.props;
    const styles = require('./scss/Loading.scss');

    return (

      <div>{ text }<span className={styles.one}>.</span><span className={styles.two}>.</span><span className={styles.three}>.</span></div>

    );
  }
}

export default Loading;
