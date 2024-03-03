import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { GiFlowerEmblem } from "react-icons/gi";

const Footer = () => {
  const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Men", href: "/products/men" },
    { text: "Women", href: "/products/women" },
  ];

  return (
    <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <a href="#" className="flex items-center mb-4 sm:mb-0">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-Borui">
            GRAB.IT
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-lg text-gray-500 sm:mb-0 dark:text-gray-400 font-Gruppo">
          {MENU_LIST.map((item, index) => (
            <Link
              className="mr-4 hover:underline md:mr-6 "
              href={item.href}
              passHref
              key={index}
            >
              {item.text}
            </Link>
          ))}
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-md tracking-wider text-center text-gray-400 font-Gruppo font-extrabold">
        <a href="/" className="hover:underline">
          GRAB.IT
        </a>{" "}
        © 2024 . All Rights Reserved.
      </span>

      <div className="flex flex-col space-y-6 justify-center items-center mt-4">
        <span className="font-Gruppo text-gray-400 text-sm">
          Designed & Developed by Himanshu with{" "}
          <span className="text-pink-500">&#9829;</span>
        </span>
        <div className="flex flex-row space-x-6 text-gray-500">
          <Link
            href={"https://www.linkedin.com/in/himanshu16315/"}
            target="_blank"
          >
            <FaLinkedin className="text-2xl hover:text-blue-500 cursor-pointer duration-200" />
          </Link>
          <Link href={"https://github.com/himanshu-himanshu"} target="_blank">
            <FaGithubSquare className="text-2xl hover:text-gray-200 cursor-pointer duration-200" />
          </Link>
          <Link href={"https://himanshufolio.com"} target="_blank">
            <GiFlowerEmblem className="text-2xl hover:text-yellow-600 cursor-pointer duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
