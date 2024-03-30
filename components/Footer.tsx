import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-10">
      <div className="text-center text-sm text-gray-500">
        Copyright
        <Link
          href={"https://heysaquib.vercel.app/"}
          className="dark:text-gray-100 text-gray-900 font-semibold mr-2"
        >
          {"  "}
          Saquib_Ali
        </Link>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
