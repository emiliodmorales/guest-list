export default function GuestItem({ guest, selectGuest }) {
  return (
    <li onClick={() => selectGuest(guest)}>
      <dl>
        <dt>Name</dt> <dd>{guest.name}</dd>
        <dt>Email</dt> <dd>{guest.email}</dd>
      </dl>
    </li>
  );
}
