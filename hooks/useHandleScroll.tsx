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
