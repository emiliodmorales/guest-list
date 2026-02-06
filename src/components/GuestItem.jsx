export default function GuestItem({ guest, selectGuest }) {
  return (
    <li key={guest.id} onClick={() => selectGuest(guest)}>
      {guest.name} {guest.email}
    </li>
  );
}
