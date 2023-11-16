import React from 'react';

const Social = ({link,logo}) => {
  const handleLogoClick = () => {
    // Redirect to a different page when the logo is clicked
    window.location.href = {link}; // Replace with your desired URL
  };

  return (
    <header>
      {/* Clickable logo with custom redirect */}
      <img 
        src={logo}
        alt="Logo"
        className=" h-12 w-12 cursor-pointer"
        onClick={handleLogoClick}
      />
    </header>
  );
};

export default Social;

