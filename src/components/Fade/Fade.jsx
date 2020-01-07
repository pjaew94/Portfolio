import React from 'react';
import ReactDOM from 'react-dom';
import './Fade.scss'

function FadeTopBottom(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-top-bottom ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function WorksRightEffect(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`worksRightEffect ${isVisible ? 'is-visible2' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


function WorksLeftEffect(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`worksLeftEffect ${isVisible ? 'is-visible3' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function FadeBottomTop(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`fade-bottom-top ${isVisible ? 'is-visible4' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeTopBottom
export {WorksRightEffect, WorksLeftEffect, FadeBottomTop}