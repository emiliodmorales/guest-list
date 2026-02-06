const API =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2601-Emilio/guests";

export async function fetchGuests() {
  try {
    const response = await fetch(API);
    const responseBody = await response.json();
    return responseBody.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function fetchGuestDetails(id) {
  try {
    const response = await fetch(API + "/" + id);
    const responseBody = await response.json();
    return responseBody.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
