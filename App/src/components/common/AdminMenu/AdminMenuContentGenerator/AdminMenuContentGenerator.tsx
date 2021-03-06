import SmallButton from "components/common/Buttons/SmallButtons/SmallButton";
import { IAdminMenuContentArray } from "components/common/AdminMenu/AdminMenuContentGenerator/Interfaces/IAdminMenuContentArray";
import { IAdminMenuContentItem } from "components/common/AdminMenu/AdminMenuContentGenerator/Interfaces/IAdminMenuContentItem";
import { AvailableIntensiveColors } from "enums/AvailableIntensiveColors";
import styles from "./AdminMenuContentGenerator.module.scss";

interface IAdminMenuContentGenerator {
  tableOfContents: IAdminMenuContentArray;
  handleChangeState: (route: string) => void;
  marginTop?: string;
  marginBottom?: string;
}

const AdminMenuContentGenerator = ({
  tableOfContents,
  marginBottom,
  marginTop,
  handleChangeState,
}: IAdminMenuContentGenerator) => {
  return (
    <div
      className={styles.sectionWrapper}
      style={{ marginTop: marginTop, marginBottom: marginBottom }}
    >
      <div className={styles.sectionTitle}>{tableOfContents.sectionName}</div>
      {tableOfContents.items.map((item: IAdminMenuContentItem) => (
        <div key={item.itemName}>
          <SmallButton
            text={item.itemName}
            onClick={() => handleChangeState(item.switchTo)}
            key={item.itemName}
            marginTop={"16px"}
            color={
              item.isActive
                ? AvailableIntensiveColors.IntensiveOrange
                : AvailableIntensiveColors.IntensiveGreen
            }
          />
        </div>
      ))}
    </div>
  );
};
export default AdminMenuContentGenerator;
