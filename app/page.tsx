import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import { WalletSelector } from "./components/WalletSelector";

export default function IndexPage() {
  return <WalletSelector/>
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
