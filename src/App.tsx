import { Header } from "./components/Header";

import { PetCards } from "./components/PetCard/PetCards";
import { NewPet } from "./components/NewPet/NewPet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import backgroundSvg from "./assets/background.svg";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div
          className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundSvg})`,
          }}
        >
          <Header />
          <div className="p-4 flex flex-col gap-4">
            <div className="flex justify-between">
              <NewPet />
            </div>
            <PetCards />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
