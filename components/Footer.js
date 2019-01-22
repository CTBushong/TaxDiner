import Link from 'next/link';

const Footer = () => (
  <footer className="bottom">
    <p>&copy; Chris Bushong {new Date().getFullYear()}</p>
    <p>
      Website shamelessly copied from Wes Bos and Scott Tolinski at {' '}
      <a
        href="https://syntax.fm"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        Syntax.fm
      </a>
      .
    </p>
  </footer>
);

export default Footer;
