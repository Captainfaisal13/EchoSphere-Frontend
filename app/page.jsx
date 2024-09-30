import MainContent from "./_components/main/main";
import CheckAuth from "./checkAuth";

export default function Home() {
  return (
    <CheckAuth>
      <MainContent />
    </CheckAuth>
  );
}
