import ClientTabsServerContent from "../reusables/clientTabsServerContent";
import PhotosEchoList from "./photosEchos";
import TextEchoList from "./textEchos";
import VideosEchoList from "./videosEchos";

const homeTabs = ["Text", "Photos", "Videos"];

const ExploreContent = () => {
  return (
    <div>
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
