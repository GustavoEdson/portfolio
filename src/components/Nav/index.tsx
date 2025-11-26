type Props = {
  logo?: string;
};

export const Nav = ({ logo }: Props) => {
  return (
    <header>
      <nav className="fixed uppercase list-none flex flex-wrap gap-5 justify-around w-full p-4">
        <p className="text-2xl">{logo}</p>
        <ul className="flex flex-wrap gap-6 text-red-700">
          <li className="">
            <a href="">home</a>
          </li>
          <li className="">
            <a href="">about</a>
          </li>
          <li className="">
            <a href="about">projects</a>
          </li>
          <li className="">
            <a href="#king">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
