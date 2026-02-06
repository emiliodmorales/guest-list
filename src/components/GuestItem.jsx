export default function GuestItem({ guest, selectGuestId }) {
  return (
    <li onClick={() => selectGuestId(guest.id)}>
      <dl>
        <dt>Name</dt> <dd>{guest.name}</dd>
        <dt>Email</dt> <dd>{guest.email}</dd>
      </dl>
    </li>
  );
}
