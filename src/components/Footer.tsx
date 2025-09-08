// components/Footer.tsx
const Footer = () => {
  return (
    <footer className=" py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Bill Buddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;