const Logo = () => {
  return (
    <div
      className="flex items-center gap-x-3"
      aria-label="Romano & Daniels Construction Logo"
    >
      {/* Icon */}
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.365 20"
          width="40"
          height="20"
          aria-hidden="true"
        >
          <path
            fill="#343434"
            d="M9.841 0 0 10v10h9.841l9.842-10v10h19.682V10L29.524 0l-9.841 10V0z"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="leading-none">
        <p className="font-semibold">Romano &amp; Daniels</p>
        <p className="text-sm">Construction Inc.</p>
      </div>
    </div>
  );
};

export default Logo;
