
import Title from "../Title.jsx";
import { TITLE_CONFIG } from '../Config/TitleConfig.js';
import { PersonalAlbumItem } from "./AlbumItem.jsx";
import { Flex } from "antd";
import { DateCard } from "./AlbumItem.jsx";
export default function PersonalizedRecommendation() {
  const albumList = [
    {
      image: "img/album1.jpg",
      title: "专辑名字1",
      playCount: "100万",
      reason: "猜你喜欢"
    },
    {
      image: "img/album2.jpg",
      title: "专辑名字2",
      playCount: "101万",
      reason: "你可能该感兴趣",
    },
    {
      image: "img/album3.jpg",
      title: "专辑名字3",
      playCount: "102万",
      reason: "根据常听推荐",
    },
  ]

  return (
    <div className="personalized-recommendation">
      <Title configId={TITLE_CONFIG.PERSONALIZED_RECOMMENDATION} />


      <Flex className="personalized-album-list">
        <DateCard />
        {albumList.map((item, index) => (
          <PersonalAlbumItem key={index} {...item} />
        ))}
      </Flex>
    </div>
  );
}