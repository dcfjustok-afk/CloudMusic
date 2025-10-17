import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import DiscoverLayout from "../routes/MainPage";
import MyMusic from "../routes/MyMusic";
import Follow from "../routes/FollowPage.jsx";
import Shop from "../routes/ShopPage";
import MusicPersonPage from "../routes/MusicPersonPage";

import RecommendPage from "../routes/mainpage/RecommendPage";
import DlbumPage from "../routes/mainpage/Album.jsx";
import PlayListPage from "../routes/mainpage/PlayListPage.jsx";
import DjRadioPage from "../routes/mainpage/DjRadio.jsx";
import SingerPage from "../routes/mainpage/SingerPage.jsx";
import TopListPage from "../routes/mainpage/TopListPage.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DiscoverLayout />,
        children: [
          {index: true, element:<RecommendPage />},
          { path: "recommend", element: <RecommendPage /> },
          { path: "album", element: <DlbumPage /> },
          { path: "playList", element: <PlayListPage /> },
          { path: "djRadio", element: <DjRadioPage /> },
          { path: "singer", element: <SingerPage /> },
          { path: "topList", element: <TopListPage /> },
        ],
      },
      { path: "myMusic", element: <MyMusic /> },
      { path: "follow", element: <Follow /> },
      { path: "shop", element: <Shop /> },
      { path: "musician", element: <MusicPersonPage /> },
    ],
  },
]);

export default router;
