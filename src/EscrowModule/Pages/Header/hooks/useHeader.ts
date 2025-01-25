import React, { useEffect, useState } from 'react'

const useHeader = ({backColor, atTopTextColor, atTopColor}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredButton, setHoveredButton] = useState(null);
    const [name, setName] = useState(null);
    const [itemIndex, setItemIndex] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState(backColor);
    const [textColor, setTextColor] = useState(atTopTextColor);
    const [isAtTop, setIsAtTop] = useState(true);
    const [zIndex, setZIndex] = useState(12);

    // Monitor scroll position
    const scrolledToTop = window.scrollY === 0;
    useEffect(() => {
      const checkScrollPosition = () => {
        if (typeof window !== "undefined") {
          const scrolledToTop = window.scrollY === 0;
          setIsAtTop(scrolledToTop);
  
          if (scrolledToTop) {
            // At the top of the page
            setBackgroundColor(atTopColor);
            setTextColor(atTopTextColor);
          } else {
            // Scrolled down
            setBackgroundColor("white");
            setTextColor("black");
            console.log(scrolledToTop)
          }
        }
      };
  
      // Check on initial render
      checkScrollPosition();
  
      // Listen for scroll events
      window.addEventListener("scroll", checkScrollPosition);
  
      // Cleanup event listener
      return () => {
        window.removeEventListener("scroll", checkScrollPosition);
      };
    }, [scrolledToTop, hoveredButton]);
  
    const handleMouseEnter = (index, name) => {
      setHoveredButton(name);
      setName(name);
      setItemIndex(index);
      // setBackgroundColor("rgb(1, 66, 106)");
      setZIndex(12)
      
    };
  
    const handleMouseLeave = () => {
      setHoveredButton(null);
      setName(null);
      setZIndex(12)
    };
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };


    return {
        handleDrawerToggle,
        handleMouseEnter,
        handleMouseLeave,
        backgroundColor,
        isAtTop,
        textColor,
        hoveredButton,
        mobileOpen,
        itemIndex,
        zIndex,
        name,
        setBackgroundColor
    }
}

export default useHeader