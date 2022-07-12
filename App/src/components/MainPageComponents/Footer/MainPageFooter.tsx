import SmallButton from "components/common/Buttons/SmallButtons/SmallButton";
import { AvailableIntensiveColors } from "enums/AvailableIntensiveColors";
import styles from "./MainPageFooter.module.scss";
import MainPageFooterLogic from "./MainPageFooterLogic";

const MainPageFooter = () => {
  const { navigateToAboutUs, navigateToContact, navigateToPrivacyPolicy } =
    MainPageFooterLogic();
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.pagename}>
          © {new Date().getFullYear()} BigData Smart JobHub
        </div>
        <div className={styles.buttons}>
          <SmallButton
            marginTop="8px"
            text={"About us"}
            onClick={navigateToAboutUs}
            color={AvailableIntensiveColors.IntensiveOrange}
          />
          <SmallButton
            marginTop="8px"
            marginLeft="16px"
            marginRight="16px"
            text={"Contact"}
            onClick={navigateToContact}
            color={AvailableIntensiveColors.IntensiveOrange}
          />
          <SmallButton
            marginTop="8px"
            text={"Privacy policy"}
            onClick={navigateToPrivacyPolicy}
            color={AvailableIntensiveColors.IntensiveOrange}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageFooter;