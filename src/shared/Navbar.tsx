const Navbar = () => {
  const navItems = ["Features", "Pricing", "Security", "Benefits"];

  return (
    <nav className="flex gap-8">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
