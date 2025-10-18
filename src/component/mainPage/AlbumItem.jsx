// AlbumItem.jsx
export default function AlbumItem({ image, title, playCount }) {
  playCount = "100万"
  return (
    <div className="album-item">
      <div className="album-img-wrapper">
        <img src={image} alt={title} className="album-img" />
        <div className="album-playcount">{playCount}</div>
      </div>
      <div className="album-info">
        <div className="album-title">{title}</div>
      </div>
    </div>
  );
}
export function PersonalAlbumItem({ image, title, playCount, reason }) {
  return (
    <div className="album-item">
      <div className="album-img-wrapper">
        <img src={image} alt={title} className="album-img" />
        <div className="album-playcount">{playCount}</div>
      </div>
      <div className="album-info">
        <div className="album-title">{title}</div>
      </div>
      <div className="album-info-reason">
        <div className="album-reason">{reason}</div>
      </div>
    </div>
  );
}
export function DateCard() {
  const now = new Date();
  const weekday = ["日", "一", "二", "三", "四", "五", "六"][now.getDay()];
  const day = now.getDate();

  return (
    <div className="album-item">
      <div className="date-card">
        <div className="date-card-top">
          星期{weekday}
        </div>
        <div className="date-card-bottom">
          {day}
        </div>
      </div>
      <div className="album-info">
        <div className="album-title">每日歌曲推荐</div>
      </div>
      <div className="album-info-reason">
        <div className="album-reason">根据你的口味生成,</div>
        <div className="album-reason">每天6:00更新</div>

      </div>
    </div>

  );
}
export function NewAlbunItem({ image, title, playCount, author }) {
  return (
    <div className="new-album-item">
    </div>
  )

}
