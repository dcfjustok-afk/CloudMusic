import Title from "../Title.jsx";
import { TITLE_CONFIG } from '../Config/TitleConfig.js';
export default function NewRerord() {
  return (
    <div className="new-rerord">
      <Title configId={TITLE_CONFIG.NEW_ALBUM} />
    </div>
  );  
}