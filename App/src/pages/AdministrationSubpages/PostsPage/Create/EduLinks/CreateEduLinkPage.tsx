import CreateEduLinkPageLogic from "./CreateEduLinkPageLogic";
import styles from "./CreateEduLinkPage.module.scss";
import SmallButton from "components/common/Buttons/SmallButtons/SmallButton";
import InputWithLabel from "components/common/Forms/InputWithLabel/InputWithLabel";
import TextareaWithLabel from "components/common/Forms/TextareaWithLabel/TextareaWithLabel";
import { AvailableIntensiveColors } from "enums/AvailableIntensiveColors";

const CreateEduLinkPage = () => {
  const { register, handleSubmit, submitForm, errors } =
    CreateEduLinkPageLogic();

  return (
    <div>
      <div className={styles.title}>Create edu link</div>
      <form>
        <InputWithLabel
          register={register}
          errors={errors}
          errorMessage={"This field is required"}
          label={"Title"}
          placeholder={"Enter title..."}
          registerName={"title"}
          registerOptions={{ required: true }}
        />
        <InputWithLabel
          register={register}
          errors={errors}
          errorMessage={"This field is required"}
          label={"Link"}
          placeholder={"Enter link..."}
          registerName={"link"}
          registerOptions={{ required: true }}
        />
        <TextareaWithLabel
          register={register}
          errors={errors}
          errorMessage={"This field is required"}
          label={"Description"}
          placeholder={"Enter description..."}
          registerName={"description"}
          registerOptions={{ required: true }}
        />
        <SmallButton
          marginTop="16px"
          text={"Save"}
          color={AvailableIntensiveColors.IntensiveGreen}
          onClick={handleSubmit(submitForm)}
        />
      </form>
    </div>
  );
};

export default CreateEduLinkPage;