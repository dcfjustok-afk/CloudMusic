import './styles/styles.css';
import Title from "../Title.jsx";
import { TITLE_CONFIG } from '../Config/TitleConfig.js';
export default function HotRecommendations() {
  return (
    <div className="hot-recommendations">
      <Title configId={TITLE_CONFIG.HOT_RECOMMEND} />
    </div>
  );
}