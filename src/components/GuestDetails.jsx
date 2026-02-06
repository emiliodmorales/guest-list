export default function GuestDetails({ selectedGuest }) {
  return (
    <>
      <h1>Guest Details</h1>
      <dl>
        <dt>Name</dt> <dd>{selectedGuest.name}</dd>
        <dt>Email</dt> <dd>{selectedGuest.email}</dd>
        <dt>Phone</dt> <dd>{selectedGuest.phone}</dd>
        <dt>Bio</dt> <dd>{selectedGuest.bio}</dd>
        <dt>Job</dt> <dd>{selectedGuest.job}</dd>
      </dl>
    </>
  );
}
