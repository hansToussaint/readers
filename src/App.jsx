import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Root from "./pages/Root";
import AppLayout from "./ui/AppLayout";
import BooksResults from "./pages/BooksResults";
import BookInfo from "./pages/BookInfo";
import Bookmarks from "./pages/Bookmarks";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Read from "./pages/Read";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import { DarkModeProvider } from "./context/DarkModeContext";

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
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Root />} />
              <Route path="search" element={<BooksResults />} />
              <Route path="book/:bookId" element={<BookInfo />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="account" element={<Account />} />
            <Route path="books/:bookId/read" element={<Read />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
