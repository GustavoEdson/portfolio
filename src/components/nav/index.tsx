type navProps = {
  logo?: string;
};

const navContents = ["home", "about", "project"];

const Nav = ({ logo }: navProps) => {
  return (
    <header>
      <nav className="fixed">
        <p>{logo}</p>
        <ul className="list-none flex gap-6 uppercase">
          {navContents.map((content, i) => (
            <li key={i}>{content}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
