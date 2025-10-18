// AlbumItem.jsx
export default function AlbumItem({ image, title ,playCount}) {
  playCount =  "100万"
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
