import Image from "next/image";
import Header from "./components/header/header";
import HeroSectionView from "./sections/hero-section/hero-section-view";
import PackagesListView from "./sections/packages/packages-list-view";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSectionView />
      <PackagesListView />
    </>
  );
}
