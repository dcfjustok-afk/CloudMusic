import './styles/styles.css';
import Title from "../Title.jsx";
import { TITLE_CONFIG } from '../Config/TitleConfig.js';
export default function PersonalizedRecommendation() {
  return (
    <div className="personalized-recommendation">
      <Title configId={TITLE_CONFIG.PERSONALIZED_RECOMMENDATION} />
    </div>
  );
}