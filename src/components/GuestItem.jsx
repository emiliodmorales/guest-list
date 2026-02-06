export default function GuestItem({ guest, selectGuestId }) {
  return (
    <li onClick={() => selectGuestId(guest.id)}>
      <dl>
        <dt>{guest.name}</dt> <dd>{guest.email}</dd>
      </dl>
    </li>
  );
}
