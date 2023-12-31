import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/main/MainPage.jsx';
import ListPage from 'pages/list/ListPage.jsx';
import PostPage from 'pages/post/PostPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/:subjectId" element={<PostPage />} />
        <Route path="/post/:subjectId/answer" element={<PostPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/list/:page" element={<ListPage />} />
        <Route index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
