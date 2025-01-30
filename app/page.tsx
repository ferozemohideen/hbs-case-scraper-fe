"use client";

import HeroGeometric from "../components/hbs/hero-geometric";
import { Toaster } from "react-hot-toast";

export default function SyntheticV0PageForDeployment() {
  return (
    <main>
      <Toaster position="bottom-center" />
      <HeroGeometric />
    </main>
  );
}
