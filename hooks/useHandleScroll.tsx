import { useEffect } from "react";

const useHandleScroll = (
  setShowScrollbar: (value: boolean) => void
): (() => void) => {
  const handleScroll = () => {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    setShowScrollbar(scrollTop >= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setShowScrollbar]);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export default useHandleScroll;
