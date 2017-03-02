import React, { Component, PropTypes } from 'react';
import pageWithIntl from '../components/PageWithIntl';
import Layout from '../components/Layout';

class Listing extends Component {
  static async getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    return (
      <Layout>
        <p>{this.props.id}</p>
      </Layout>
    );
  }
}

Listing.propTypes = {
  id: PropTypes.string.isRequired,
};

export default pageWithIntl(Listing);
