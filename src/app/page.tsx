import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";

export default function Home() {
  return (
    <div className="flex justify-between">
      <Navbar />
      <Main />
      <ContactBar />
    </div>
  );
}
