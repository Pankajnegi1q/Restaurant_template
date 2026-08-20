function Button({ children }) {
  return (
    <button
      className="
      bg-[#D4AF37]
      text-black
      px-8
      py-4
      rounded-full
      font-semibold
      hover:scale-105
      transition-all
      duration-300
      "
    >
      {children}
    </button>
  );
}

export default Button;