import { useEffect, useState } from "react";
import { fetchGuests } from "../api";
import GuestItem from "./GuestItem";

export default function GuestList({ selectGuestId }) {
  const [guests, setGuests] = useState([]);

  (useEffect(() => {
    fetchGuests().then((result) => setGuests(result));
  }),
    []);

  return (
    <>
      <h1>Guest List</h1>
      <ul>
        {guests.map((guest) => (
          <GuestItem
            key={guest.id}
            guest={guest}
            selectGuestId={selectGuestId}
          />
        ))}
      </ul>
      <p>Select a guest to see details</p>
    </>
  );
}
