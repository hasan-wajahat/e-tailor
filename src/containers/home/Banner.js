import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import bannerBackground from '../../assets/home/banner.jpg';

const styles = {
  banner: {
    height: '500px',
    backgroundImage: `url(${bannerBackground})`,
    backgroundSize: 'cover',
  },
  textContainer: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    '& h1': {
      fontSize: '72px',
      letterSpacing: '1px',
      fontFamily: 'Antonio',
      margin: '0',
    },
    '& h5': {
      fontSize: '24px',
      letterSpacing: '1.71px',
      lineHeight: '32px',
      fontFamily: 'Playfair Display',
      fontStyle: 'italic',
      margin: '0',
    },
  },
};

const Banner = ({ classes }) => (
  <div className={classes.banner}>
    <div className={classes.textContainer}>
      <div>
        <h1>E tailor</h1>
        <h5>Digitizing darzi</h5>
      </div>
    </div>
  </div>
);

Banner.propTypes = {
  classes: PropTypes.shape({
    banner: PropTypes.string,
    textContainer: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(Banner);
