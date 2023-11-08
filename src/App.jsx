import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from 'pages/main/MainPage.jsx';
import ListPage from 'pages/list/ListPage.jsx';
import PostPage from 'pages/post/PostPage.jsx';
import ModalTestPage from 'pages/modaltest/ModalTestPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/modalTest" element={<ModalTestPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route index element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
