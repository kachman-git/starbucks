import React, { useState } from "react";
import Mobile from "./Mobile";
import Navbar from "./Navbar";

import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Responsive = () => {
  const [open, setOpen] = useState(false);

  const navOpen = () => {
    setOpen(true);
    disablePageScroll();
  };
  const navClose = () => {
    setOpen(false);
    enablePageScroll();
  };

  return (
    <div>
      <Navbar open={open} navClose={navClose} navOpen={navOpen} />
      <Mobile open={open} navClose={navClose} navOpen={navOpen} />
    </div>
  );
};

export default Responsive;
