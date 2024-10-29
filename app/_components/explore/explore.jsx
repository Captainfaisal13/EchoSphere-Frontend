import Tabs from "../reusables/tabs";
import PhotosEchoList from "./photosEchos";
import TextEchoList from "./textEchos";
import VideosEchoList from "./videosEchos";

const exploreTabs = [
  { id: 0, name: "Text", component: <TextEchoList /> },
  { id: 1, name: "Photos", component: <PhotosEchoList /> },
  { id: 2, name: "Videos", component: <VideosEchoList /> },
];

const ExploreContent = () => {
  return <Tabs tabList={exploreTabs} storageKey="explore-tab" />;
};

export default ExploreContent;
