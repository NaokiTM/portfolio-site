import Main from "./components/Main";
import Nav from "./components/Nav";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <div className="flex justify-between">
      <Nav />
      <Main />
      <Contacts />
    </div>
  );
}
