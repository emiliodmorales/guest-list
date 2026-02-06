import GuestList from "./components/GuestList";
import { guests } from "./data";

export default function App() {
  return <GuestList guests={guests} />;
}
