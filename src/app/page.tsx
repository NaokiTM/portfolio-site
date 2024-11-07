import Main from "./components/Main";
import Nav from "./components/Nav";
import Contacts from "./components/Contacts";
import ThemeWrapper from "./contexts/ThemeWrapper";

export default function Home() {
  return (
    <div className="flex justify-between">
      <Nav />
      <Main />
      <Contacts />
    </div>
  );
}
