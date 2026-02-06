export default function GuestList({ guests }) {
  return (
    <>
      <h1>Guest List</h1>
      <ul>
        {guests.map((guest) => (
          <GuestItem guest={guest} />
        ))}
      </ul>
    </>
  );
}

function GuestItem({ guest }) {
  return (
    <li key={guest.id}>
      {guest.name} {guest.email}
    </li>
  );
}
