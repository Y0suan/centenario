import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-H0EHX8H1FP'); 
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
