import React, { useState } from "react";
import { Header } from "./header";
import { Navbar } from "./navbar";

export const NavPlusHeader = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div>
      <Navbar onDownloadClick={() => setShowDialog(true)} />
      <Header showDialog={showDialog} setShowDialog={setShowDialog} />
    </div>
  );
};
