import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Root from "./pages/Root";
import AppLayout from "./ui/AppLayout";
import BooksResults from "./pages/BooksResults";
import BookInfo from "./pages/BookInfo";
import Bookmarks from "./pages/Bookmarks";
import Account from "./pages/Account";
import Read from "./pages/Read";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ViewResultsProvider } from "./context/ViewResultsContext";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <ViewResultsProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Root />} />

                <Route path="search" element={<BooksResults />} />

                <Route path="book/:bookId" element={<BookInfo />} />
              </Route>

              <Route path="books/:bookId/read" element={<Read />} />
              <Route
                path="bookmarks"
                element={
                  <ProtectedRoute>
                    <Bookmarks />
                  </ProtectedRoute>
                }
              />
              <Route path="account" element={<Account />} />
              <Route path="settings" element={<Settings />} />

              <Route path="signIn" element={<SignIn />} />
              <Route path="signUp" element={<SignUp />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px, 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </ViewResultsProvider>
    </DarkModeProvider>
  );
}

export default App;
