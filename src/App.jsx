import { useState } from "react";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [selectedGuestId, selectGuestId] = useState();

  if (selectedGuestId)
    return (
      <GuestDetails
        selectedGuestId={selectedGuestId}
        selectGuestId={selectGuestId}
      />
    );

  return <GuestList selectGuestId={selectGuestId} />;
}
