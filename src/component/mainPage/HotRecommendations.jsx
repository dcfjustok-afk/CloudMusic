import Title from "../Title.jsx";
import { TITLE_CONFIG } from '../Config/TitleConfig.js';
import AlbumItem from './AlbumItem.jsx';
import './styles/styles.css';
export default function HotRecommendations() {
  // 假设 8 张专辑
  const albums = [
    { image: 'img/album1.jpg', title: '专辑 1' },
    { image: 'img/album2.jpg', title: '专辑 2' },
    { image: 'img/album3.jpg', title: '专辑 3' },
    { image: 'img/album4.jpg', title: '专辑 4' },
    { image: 'img/album5.jpg', title: '专辑 5' },
    { image: 'img/album6.jpg', title: '专辑 6' },
    { image: 'img/album7.jpg', title: '专辑 7' },
    { image: 'img/album8.jpg', title: '专辑 8' },
  ];
  return (
    <div className="hot-recommendations">
      <Title configId={TITLE_CONFIG.HOT_RECOMMEND} />
      {/* <div style={{ paddingTop: '20px' }}></div> */}
      {/* 专辑列表 */}
      <div className="album-list">
        {albums.map((album, index) => (
          <AlbumItem
            key={index}
            image={album.image}
            title={album.title}
          />
        ))}
      </div>
    </div>
  );
}