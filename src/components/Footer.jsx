import { getFullYear } from "../utils/Date";

const Footer = () => {
  let p = ` ${getFullYear()} @ brilliant.net`;
  return (
    <>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>{p}</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
