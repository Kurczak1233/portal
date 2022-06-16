import AdministartionPageHeader from "components/common/AdministartionPageHeader/AdministartionPageHeader";
import NoItemsComponent from "components/common/ArticleCommonComponents/NoItemsComponent/NoItemsComponent";
import { AvailablePaginationColors } from "components/common/ArticleCommonComponents/Pagination/AvailablePaginationColors";
import { AvailableIntensiveColors } from "enums/AvailableIntensiveColors";
import { JobOfferViewModel } from "interfaces/Models/JobOffers/ViewModels/JobOfferViewModel";
import JobOffersHeader from "../JobOffersHeader/JobOffersHeader";
import JobOffersItems from "../JobOffersItems/JobOffersItems";
import JobOfferContentLogic from "./JobOffersContentLogic";

interface IJobOffersContent {
  jobOffers: JobOfferViewModel[];
}

const JobOffersContent = ({ jobOffers }: IJobOffersContent) => {
  const { navigateToCreateJobOffer } = JobOfferContentLogic();
  return (
    <>
      {jobOffers.length === 0 ? (
        <NoItemsComponent
          title={"There are no job offers"}
          navigateToPage={navigateToCreateJobOffer}
        />
      ) : (
        <>
          <AdministartionPageHeader pageTitle={"Overview job offers"} />
          <JobOffersHeader
            iconsColour={AvailableIntensiveColors.IntensiveBlue}
          />
          <JobOffersItems
            jobOfferColor={AvailableIntensiveColors.LessIntensiveBlue}
            jobOffers={jobOffers}
            paginationColor={AvailablePaginationColors.blue}
          />
        </>
      )}
    </>
  );
};

export default JobOffersContent;
