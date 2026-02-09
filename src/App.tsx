import { Header } from "./components/Header";

import { Toggle } from "./components/Toggle";
import { PetCards } from "./components/PetCards";
import { NewPet } from "./components/NewPet/NewPet";

function App() {
  return (
    <div className="border ">
      <Header />
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <NewPet />
        </div>
        <PetCards />
      </div>
    </div>
  );
}

export default App;
