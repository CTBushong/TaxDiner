import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';
import Meta from '../components/meta';
import getBaseURL from '../lib/getBaseURL';

export default class SponsorPage extends React.Component {
  static propTypes = {
    baseURL: PropTypes.string.isRequired,
  };

  static async getInitialProps({ req }) {
    const baseURL = getBaseURL(req);
    return { baseURL };
  }

  render() {
    const { baseURL } = this.props;
    return (
      <Page>
        <Meta baseURL={baseURL} staticPage={{ title: 'Sponsors' }} />
        <div className="wrapper wrapper--text">
          <h1>Something may be here later</h1>
          <p>
            Much later
          </p>
          
        </div>
      </Page>
    );
  }
}
