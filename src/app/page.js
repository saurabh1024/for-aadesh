import Header from "@/components/header/header";
import MenuBar from "@/components/header/MenuBar";
import FixedMenu from "@/components/header/FixedMenu";
import HomeBanner from "@/components/home/HomeBanner";
import TopCollection from "@/components/home/Top Collection";
import Explore from "@/components/home/Explore";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <div>
        <Header head="headModal" cart="cartModal"/>
        <MenuBar />
        <FixedMenu />
        <HomeBanner />
        <TopCollection />
        <Explore />
        <Footer />
      </div>
    </main>
  );
}
