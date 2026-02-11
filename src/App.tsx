import { Header } from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import backgroundSvg from "./assets/background.svg";
import { MainPage } from "./MainPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className="h-screen bg-gray-100/50"
        style={{
          backgroundImage: `url(${backgroundSvg})`,
        }}
      >
        <MainPage />
        <Header />
      </div>
    </QueryClientProvider>
  );
}

export default App;
