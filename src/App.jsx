import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

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

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Root />} />
            <Route path="results" element={<BooksResults />} />
            <Route path="book/:id" element={<BookInfo />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="account" element={<Account />} />
          <Route path="book/:id/:id" element={<Read />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
