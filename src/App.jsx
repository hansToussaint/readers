import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";

import { DarkModeProvider } from "./context/DarkModeContext";
import { ViewResultsProvider } from "./context/ViewResultsContext";

import Root from "./pages/Root";
import AppLayout from "./ui/AppLayout";
import BooksResults from "./pages/BooksResults";
import BookInfo from "./pages/BookInfo";
import Bookmarks from "./pages/Bookmarks";
import Account from "./pages/Account";
import Read from "./pages/Read";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

import ProtectedRoute from "./ui/ProtectedRoute";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PasswordRestore from "./features/authentication/passwordRestore";

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
              <Route index element={<Root />} />

              <Route element={<AppLayout />}>
                <Route path="search" element={<BooksResults />} />

                <Route path="book/:bookId" element={<BookInfo />} />
              </Route>

              <Route
                path="book/:readId/read"
                element={
                  <ProtectedRoute>
                    <Read />
                  </ProtectedRoute>
                }
              />

              <Route
                path="bookmarks"
                element={
                  <ProtectedRoute>
                    <Bookmarks />
                  </ProtectedRoute>
                }
              />
              <Route path="account" element={<Account />} />
              <Route path="about" element={<About />} />

              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="/password-restore" element={<PasswordRestore />} />

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
