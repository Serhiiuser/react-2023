
import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';

import {MainLayout} from "./layout/MainLayout";
import {RouterEndPoints} from "./routes/routes";
import {HomePage} from "./pages/Home/HomePage";
import {AlbumsPage} from "./pages/Albums/AlbumsPage";
import {TodosPage} from "./pages/TodosPages/TodosPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {PostByCommentPage} from "./pages/PostByCommentPage/PostByCommentPage";

const App = () => {
  return (
      <div className={'App'}>
        <Routes>
            <Route path={'/'} element={ <MainLayout/> }>
                <Route path={RouterEndPoints.index} index element={<HomePage/>}/>
                <Route path={RouterEndPoints.todos}  element={<TodosPage/>}/>
                <Route path={RouterEndPoints.albums} element={<AlbumsPage/>}/>
                <Route path={RouterEndPoints.comments}  element={<CommentsPage/>}>
                    <Route path={RouterEndPoints.postId} element={<PostByCommentPage/>}/>
                </Route>
            </Route>
        </Routes>
      </div>
  );
};

export default App;


