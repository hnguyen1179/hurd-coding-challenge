const Header = () => {
  return (
    <header className="flex bg-hurd-purple bg-opacity-95 px-8 py-2">
      {/* Trick to align the margins with form in small windows */}
      <a
        className="relative -left-4 rounded-lg px-4 py-2 text-xl font-semibold text-stone-400 transition-colors hover:bg-purple-200 hover:bg-opacity-30"
        href="/"
      >
        hurd
      </a>
    </header>
  );
};

export default Header;
