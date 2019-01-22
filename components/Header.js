import Subscribe from './Subscribe';
import Link from 'next/link';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link href="/">
        <a aria-label="Syntax.FM">
          <img className="header__logo" src="/static/tax-diner.svg" alt="Tax Diner" />
        </a>
      </Link>
    </div>
    <div className="header__right">
    
      <div className="title">
        <h2 className="tagline">Where Tax Professionals Chew the Fat</h2>
      </div>
      
    </div>
    <Subscribe />
  </header>
);

export default Header;
