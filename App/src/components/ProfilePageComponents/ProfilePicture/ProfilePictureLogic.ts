import { removeFile } from "api/FileClient";
import SyncToast from "components/common/Toasts/SyncToast/SyncToast";
import { ToastModes } from "interfaces/General/ToastModes";
import { FileVm } from "interfaces/Models/FilesMetadata/ViewModels/FileVm";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

interface IProfillePageMainLogic {
  profilePic: FileVm | undefined;
  setProfilePic: React.Dispatch<React.SetStateAction<FileVm | undefined>>;
}

const ProfilePictureLogic = ({
  profilePic,
  setProfilePic,
}: IProfillePageMainLogic) => {
  const [isPictureModalOpen, setIsPictureModalOpen] = useState<boolean>(false);
  const [isConfimActionModalOpen, setIsConfimrActionModalOpen] =
    useState<boolean>(false);
  const applicationUserId = useSelector(
    (state: RootState) => state.applicationUserReducer.user?.id
  );

  const handleOpenPictureModal = () => {
    setIsPictureModalOpen(true);
  };

  const handleOpenConfirmActionModal = () => {
    setIsConfimrActionModalOpen(true);
  };

  const handleCloseConfirmActionModal = () => {
    setIsConfimrActionModalOpen(false);
  };

  const deletePicture = async () => {
    if (!profilePic) {
      return SyncToast({
        mode: ToastModes.Error,
        description: "File was not found",
      });
    }
    await removeFile(profilePic.guid);
    handleCloseConfirmActionModal();
    setProfilePic((oldPic) => {
      if (!oldPic) {
        return;
      }
      return { ...oldPic, isDeleted: true };
    });
  };

  return {
    setIsPictureModalOpen,
    isPictureModalOpen,
    handleOpenPictureModal,
    handleOpenConfirmActionModal,
    isConfimActionModalOpen,
    setIsConfimrActionModalOpen,
    applicationUserId,
    deletePicture,
  };
};

export default ProfilePictureLogic;
