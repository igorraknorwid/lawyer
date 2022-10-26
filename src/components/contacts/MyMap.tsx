import React from "react";

export default function MyMap() {
  const [state, setState] = React.useState(false);

  const topRef = React.useRef<HTMLDivElement>(null);
  const bottomRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setState(true);
      }
    });
    const bottomObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setState(true);
      }
    });
    if (topRef.current) {
      observer.observe(topRef.current);
    }
    if (bottomRef.current) {
      bottomObserver.observe(bottomRef.current);
    }
  }, []);
  console;
  return (
    <div>
      <div style={{ height: "1px" }} ref={topRef}></div>
      {state ? (
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31277.009230190415!2d18.666125244049205!3d54.36267754975878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd73710d9770f9%3A0xe2010c5f4e6145ad!2sEuropejskie%20Centrum%20Solidarno%C5%9Bci!5e0!3m2!1spl!2spl!4v1665907138193!5m2!1spl!2spl'
          width='100%'
          height='600'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      ) : (
        ""
      )}
      <div style={{ height: "1px" }} ref={bottomRef}></div>
    </div>
  );
}
