import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Typography, Box, MenuItem,Menu } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarDeepSeek = () => {
  const [bgColor, setBgColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBgColor('white');
      setTextColor('black');
    } else {
      setBgColor('transparent');
      setTextColor('white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkHover = (link) => {
    setHoveredLink(link);
    setSubMenuOpen(true);
  };

  const handleCloseSubMenu = () => {
    setHoveredLink(null);
    setSubMenuOpen(false);
  };

  const links = ['Home', 'About', 'Services', 'Contact'];

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: hoveredLink ? 'blue' : bgColor,
        transition: 'background-color 0.3s',
      }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ color: textColor }}>
          MyNavbar
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
          }}
        >
          {links.map((link) => (
            <Box
              key={link}
              onMouseEnter={() => handleLinkHover(link)}
              onMouseLeave={handleCloseSubMenu}
              sx={{ margin: '0 15px', position: 'relative' }}
            >
              <Link
                href="#"
                style={{ color: textColor, textDecoration: 'none' }}
              >
                {link}
              </Link>
              {hoveredLink === link && subMenuOpen && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    // left: 0,
                    width: '500px',
                    backgroundColor: hoveredLink ? 'blue' : bgColor,
                    color: textColor,
                    zIndex: 1,
                    padding: '10px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  }}
                  onMouseEnter={() => setSubMenuOpen(true)}
                  onMouseLeave={handleCloseSubMenu}
                >
                  <MenuItem style={{ color: textColor }}>Sub Link 1</MenuItem>
                  <MenuItem style={{ color: textColor }}>Sub Link 2</MenuItem>
                  <MenuItem style={{ color: textColor }}>Sub Link 3</MenuItem>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};


const NavbarChatgpt = () => {
  const [scroll, setScroll] = useState(false);
  const [hover, setHover] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const submenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    setHover(true);
    setSubmenu(menu);
  };

  const handleMouseLeave = (event) => {
    if (
      submenuRef.current &&
      !submenuRef.current.contains(event.relatedTarget)
    ) {
      setHover(false);
      setSubmenu(null);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: hover ? "blue" : scroll ? "white" : "transparent",
        color: hover || scroll ? "black" : "white",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>
        <Box display="flex" gap={2} onMouseLeave={handleMouseLeave}>
          {["Home", "Services", "About", "Contact"].map((text) => (
            <Typography
              key={text}
              component={Link}
              to={`/${text.toLowerCase()}`}
              onMouseEnter={() => handleMouseEnter(text)}
              sx={{
                textDecoration: "none",
                color: hover || scroll ? "black" : "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Toolbar>
      {/* Submenu */}
      {submenu && (
        <Box
          ref={submenuRef}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "blue",
            color: "white",
            padding: 2,
          }}
          onMouseLeave={handleMouseLeave}
        >
          {submenu === "Services" &&
            ["Web Dev", "App Dev", "SEO"].map((option) => (
              <MenuItem key={option} sx={{ color: "white" }}>
                {option}
              </MenuItem>
            ))}
          {submenu === "About" &&
            ["Team", "History", "Vision"].map((option) => (
              <MenuItem key={option} sx={{ color: "white" }}>
                {option}
              </MenuItem>
            ))}
          {submenu === "Contact" &&
            ["Email", "Phone", "Location"].map((option) => (
              <MenuItem key={option} sx={{ color: "white" }}>
                {option}
              </MenuItem>
            ))}
        </Box>
      )}
    </AppBar>
  );
};

function Home() {
  return (
    <>
      <Box sx={{height: "1000px",  backgroundColor: "black" }}>
        {/* <NavbarChatgpt /> */}
        {/* <NavbarDeepSeek /> */}
        <div className="home" style={{ backgroundColor: "black" }}>
        <button type="button">
          <Link to="/escrow">Click Here to go to the escrow section</Link>
        </button>
      </div>
      <div className="home" style={{ backgroundColor: "black" }}>
        <button type="button">
          <Link to="/store">Click Here to go to the store section</Link>
        </button>
      </div>
      </Box>
    </>
  );
}

export default Home;
