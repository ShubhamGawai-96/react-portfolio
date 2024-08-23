import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-5">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className='mx-2 w-10' src={logo} alt="" /> */}
        <h1 className='text-4xl'>SG</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/shubham-gawai-a727b3321/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ShubhamGawai-96" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://x.com/Sh00bhamG73946" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
