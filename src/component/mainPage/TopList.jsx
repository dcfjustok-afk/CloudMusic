import './styles/styles.css';
import Title from "../Title.jsx";
import { TITLE_CONFIG } from '../Config/TitleConfig.js';
export default function TopList() {
  return (
    <div className="top-list">
      <Title configId={TITLE_CONFIG.TOP_LIST} />
    </div>
  );  
}