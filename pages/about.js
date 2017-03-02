import React, { Component } from 'react';
import { FormattedRelative } from 'react-intl';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';
import pageWithIntl from '../components/PageWithIntl';
import Layout from '../components/Layout';

class About extends Component {
  static async getInitialProps() {
    return { someDate: Date.now() };
  }

  render() {
    return (
      <Layout>
        <p>
          <FormattedRelative
            value={this.props.someDate}
            updateInterval={1000}
          />
        </p>
      </Layout>
    );
  }
}

About.propTypes = {
  someDate: React.PropTypes.instanceOf(Date),
};

const AboutWithIntl = pageWithIntl(About);
export default withRedux(initStore)(AboutWithIntl);
