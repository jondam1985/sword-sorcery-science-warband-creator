"use client"

import Image from "next/image";
import SelectClass from "./components/select-class"
import { classes } from "./data/classes";
import { useEffect } from "react";

export default function Home() {

  return (
    <div>
      <main>
        <SelectClass />
        <hr />
        <SelectClass />
      </main>
    </div>
  );
}
