import { useState } from "react";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [selectedGuest, selectGuest] = useState();

  if (selectedGuest)
    return (
      <GuestDetails selectedGuest={selectedGuest} selectGuest={selectGuest} />
    );

  return <GuestList selectGuest={selectGuest} />;
}
