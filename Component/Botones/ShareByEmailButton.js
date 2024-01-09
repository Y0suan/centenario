import React from 'react';
import { BiLogoGmail } from "react-icons/bi";
const ShareByEmailButton = ({ postTitle, postContent }) => {
  const handleShareByEmail = () => {
    const subject = `Echa un vistazo a esta publicación: ${postTitle}`;
    const body = `Te comparto esta publicación:\n\n${postContent}`;
    const mailToLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abrir el enlace de correo electrónico en una nueva pestaña
    window.open(mailToLink);
  };

  return (
    <button className='BtnGmailFa' onClick={handleShareByEmail}>
      <BiLogoGmail/>
    </button>
  );
};

export default ShareByEmailButton;
