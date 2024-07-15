"use client";

import { useState } from "react";
import Header from "./Header";
import Drawer from "./Drawer";

export default function HeaderAndDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <Header open={open} setOpen={setOpen} />
      <Drawer open={open} />
    </div>
  );
}
