import { useState, useEffect } from 'react';
import Link from 'next/link';

const NavbarResponsivo = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className={`nav-container ${showLinks ? 'show' : ''}`}>
        <div className="logo">
          <Link href="/">
            <p>Logo</p>
          </Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link href="/Historia">
                <p>Historia</p>
              </Link>
            </li>
            <li>
              <Link href="/Trabajo">
                <p>Trabajo</p>
              </Link>
            </li>
            <li>
              <Link href="/Proyectos">
                <p>Proyectos</p>
              </Link>
            </li>
            <li>
              <Link href="/Actividades">
                <p>Actividades</p>
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <p>Contacto</p>
              </Link>
            </li>
          </ul>
        </div>

        <Link href={'/'} className='btnSecondari' >Hazte socio</Link>

        <div className="hamburger-menu" onClick={toggleLinks}>
          {showLinks ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x close-icon"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        nav {
          background-color: ${scrolled ? '#222' : 'transparent'};
          padding: 1rem;
          transition: background-color 0.3s ease;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: ${scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        .logo {
          font-size: 1.5rem;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap:8px;
        }
        li {
          margin-right: 1rem;
        }
        p {
          color: ${scrolled ? 'rgba(255, 255, 255, 0.9)' : 'white'};
          font-size:24px;
          text-decoration: none;
        }
        .hamburger-menu {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }
        .line {
          width: 25px;
          height: 3px;
          background-color: ${scrolled ? 'rgba(255, 255, 255, 0.7)' : 'white'};
          margin: 3px 0;
        }
        .close-icon {
          width: 30px;
          height: 30px;
          color: ${scrolled ? 'rgba(255, 255, 255, 0.7)' : 'white'};
          cursor: pointer;
        }
        @media (max-width: 600px) {
          .nav-container.show .links {
            position: fixed;
            top: 70px;
            left: 0;
            height: 90vh;
            width: 100%;
            background-color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1;
            opacity: 0.95;
          }
          .nav-container.show .links ul {
            display: flex;
            flex-direction: column;
          }
          .links {
            display: none;
          }
          .hamburger-menu {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavbarResponsivo;
