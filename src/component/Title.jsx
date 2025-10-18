import { Flex } from "antd";
import { titleConfigMap } from "./Config/TitleConfig";
import { FaRegCircle, FaArrowRight } from 'react-icons/fa';
import './styles.css';

export default function Title({ configId }) {
    const currentConfig = titleConfigMap[configId];
    if (!currentConfig) {
        return null; // 如果传了一个不存在的 id，不渲染任何东西
    }
    return (
        <div className="title">
            <Flex horizontal className="title-container">
                <div className="title-content">
                    {currentConfig.showIcon && (
                        <div className="title-content-icon">
                            <FaRegCircle color="red" size={15} />
                        </div>
                    )}
                    <div className="title-content-text">
                        <a href={currentConfig.link}>{currentConfig.title}</a>
                    </div>

                </div>

                {currentConfig.showMore && (
                    <div className="title-more">
                        <a href={currentConfig.moreLink}>更多</a>
                        <FaArrowRight color="red" size={20} />
                    </div>

                )}
            </Flex>
            {/* 红色横线 */}
            <div
                style={{
                    height: '1px',
                    backgroundColor: 'red',
                    marginTop: '4px',
                    width: '100%'  // 或者你想要的宽度
                }}
            />
        </div>
    );
}