import { useEffect, useState } from "react";
import { fetchGuestDetails } from "../api";

export default function GuestDetails({ selectedGuestId, selectGuestId }) {
  const [guest, setGuest] = useState([]);

  (useEffect(() => {
    fetchGuestDetails(selectedGuestId).then((result) => setGuest(result));
  }),
    []);

  return (
    <>
      <h1>Guest Details</h1>
      <dl>
        <dt>Name</dt> <dd>{guest.name}</dd>
        <dt>Email</dt> <dd>{guest.email}</dd>
        <dt>Phone</dt> <dd>{guest.phone}</dd>
        <dt>Bio</dt> <dd>{guest.bio}</dd>
        <dt>Job</dt> <dd>{guest.job}</dd>
      </dl>
      <button onClick={() => selectGuestId(null)}>Back</button>
    </>
  );
}
