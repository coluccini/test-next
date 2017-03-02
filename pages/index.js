import React from 'react';
import { FormattedMessage, defineMessages, intlShape } from 'react-intl';
import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import { initStore } from '../store/store';
import pageWithIntl from '../components/PageWithIntl';
import Layout from '../components/Layout';

const { description } = defineMessages({
  description: {
    id: 'description',
    defaultMessage: 'Search for the life you want',
  },
});

const Index = ({ intl, names }) => (
  <Layout>
    <Head>
      <meta name="description" content={intl.formatMessage(description)} />
    </Head>
    <p>
      <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
    </p>
    <div>
      <ul>
        {names.map(name => <li key={name}>{name}</li>)}
      </ul>
    </div>
  </Layout>
);

Index.propTypes = {
  intl: intlShape.isRequired,
  names: React.PropTypes.Array,
};

const IndexWithIntl = pageWithIntl(Index);
export default withRedux(initStore, state => ({ names: state.names }))(IndexWithIntl);
