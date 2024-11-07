import Main from "./components/Main";
import Nav from "./components/Nav";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <div className=" flex flex-row h-[200vh]">
      <Nav />
      <Main />
      <Contacts />
    </div>
  );
}
