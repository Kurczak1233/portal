import { AvailableIntensiveColors } from "enums/AvailableIntensiveColors";
import styles from "./PostsHeader.module.scss";
import PostsHeaderLogic from "./PostsHeaderLogic";

interface IPostsHeader {
  iconsColour: AvailableIntensiveColors;
}

const PostsHeader = ({ iconsColour }: IPostsHeader) => {
  const { getApppriateImagesColours } = PostsHeaderLogic();
  const icons = getApppriateImagesColours(iconsColour);
  return (
    <div className={styles.header}>
      <div className={styles.posted}>
        Posted
        <img
          className={styles.image}
          src={icons.calendarIcon}
          alt={"Calendar icon"}
        />
      </div>
      <div className={styles.title}>
        Title
        <img
          className={styles.image}
          src={icons.featherIcon}
          alt={"Feather icon"}
        />
      </div>
      <div className={styles.creator}>
        Creator
        <img className={styles.image} src={icons.lampIcon} alt={"Lamp icon"} />
      </div>
    </div>
  );
};

export default PostsHeader;