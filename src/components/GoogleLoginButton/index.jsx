import { useRef, useState, useEffect } from "react";

export default function GoogleLoginButton({ handleLoginButton, ...props }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleLoginButton}
      className={`flex p-4 items-center rounded-full shadow-xl font-bold bg-white`}
      {...props}
    >
      {!isMobile && (
        <>
          <img src="./g-logo.png" alt='google' width={30} />
          <div
            style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
            className="overflow-x-hidden transition-all duration-300 ease-out"
          >
            <span ref={ref} className="px-1.5 whitespace-nowrap">
              Sign In with Google Account
            </span>
          </div>
        </>
      )}
      {isMobile && (
        <>
          <img src="./g-logo.png" alt='google' width={30} />
          <span ref={ref} className="px-1.5 whitespace-nowrap">
          Sign In with Google Account
          </span>
        </>
      )}
    </button>
  );
}
