import { useState, useEffect } from "react";
const useHandleScroll = (setShowScrollbar: any) => {
  const handleScroll = () => {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    setShowScrollbar(scrollTop > 0);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

export default useHandleScroll;

// window.addEventListener("scroll", handleScroll);

// return () => {
//   window.removeEventListener("scroll", handleScroll);
// };
