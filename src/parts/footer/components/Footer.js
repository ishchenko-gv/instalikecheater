import React from 'react';
import { Container } from 'semantic-ui-react';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        {'Logo was found on '}
        <a href="https://www.svgrepo.com/svg/177119/instagram-social-media" rel='noopener norefferer'>
          svgrepo
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
