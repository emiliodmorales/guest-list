import { useEffect, useState } from "react";
import { fetchGuests } from "../api";
import GuestItem from "./GuestItem";

export default function GuestList({ selectGuest }) {
  const [guests, setGuests] = useState([]);

  (useEffect(() => {
    fetchGuests().then((result) => setGuests(result));
  }),
    [guests]);

  return (
    <>
      <h1>Guest List</h1>
      <ul>
        {guests.map((guest) => (
          <GuestItem key={guest.id} guest={guest} selectGuest={selectGuest} />
        ))}
      </ul>
      <p>Select a guest to see details</p>
    </>
  );
}
