import { useState } from "react";
import GuestList from "./components/GuestList";
import { guests } from "./data";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [selectedGuest, selectGuest] = useState();

  if (selectedGuest) return <GuestDetails selectedGuest={selectedGuest} />;

  return <GuestList guests={guests} selectGuest={selectGuest} />;
}
