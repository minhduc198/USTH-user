import "./App.css";
import { SnackbarProvider } from "notistack";
import AppProvider from "./contexts/AppContext";
import { Outlet } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={1}>
          <Outlet />
        </SnackbarProvider>
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
