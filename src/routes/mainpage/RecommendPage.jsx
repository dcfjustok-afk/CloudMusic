import CarouselMain from "../../component/mainPage/CarouselMain.jsx";
import HotRecommendations from "../../component/mainPage/HotRecommendations.jsx";
import PersonalizedRecommendation from "../../component/mainPage/PersonalizedRecommendation.jsx";
import TopList from "../../component/mainPage/TopList.jsx";
import NewRerord from "../../component/mainPage/NewRerord.jsx";
import VipSell from "../../component/mainPage/VipSell.jsx";
import ResidentSinger from "../../component/mainPage/ResidentSinger.jsx";
import PopularStreamer from "../../component/mainPage/PopularStreamer.jsx";
import MyInfoMain from "../../component/mainPage/MyInfoMain.jsx";
import { Flex } from "antd";
import './styles/Recommend.css';

export default function RecommendPage() {

  return (
    <div className="recommend-page">
      <CarouselMain />
      <div className="recommend-content">
        <Flex horizontal>
          <div className="recommend-main">
            <HotRecommendations />
            <PersonalizedRecommendation />
            <NewRerord />
            <TopList />
          </div>
          <div className="recommend-right">
            <VipSell />
            <MyInfoMain />
            <ResidentSinger />
            <PopularStreamer />

          </div>
        </Flex>

      </div>
    </div>
  );
}