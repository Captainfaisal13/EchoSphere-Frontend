import ClientTabsServerContent from "../reusables/clientTabsServerContent";
import PhotosEchoList from "./photosEchos";
import TextEchoList from "./textEchos";
import VideosEchoList from "./videosEchos";

const homeTabs = ["Text", "Photos", "Videos"];

const ExploreContent = () => {
  return (
    <div className="w-[50vw] border border-[#D7D7D7] max-h-screen overflow-scroll scrollbar-hide">
      <ClientTabsServerContent
        tabs={homeTabs}
        TextEchoList={<TextEchoList />}
        PhotosEchoList={<PhotosEchoList />}
        VideosEchoList={<VideosEchoList />}
      />
    </div>
  );
};

export default ExploreContent;
