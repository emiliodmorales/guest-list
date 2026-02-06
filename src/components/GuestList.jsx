export default function GuestList({ guests, selectGuest }) {
  return (
    <>
      <h1>Guest List</h1>
      <ul>
        {guests.map((guest) => (
          <GuestItem guest={guest} selectGuest={selectGuest} />
        ))}
      </ul>
    </>
  );
}

function GuestItem({ guest, selectGuest }) {
  return (
    <li key={guest.id} onClick={() => selectGuest(guest)}>
      {guest.name} {guest.email}
    </li>
  );
}
