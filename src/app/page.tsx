import Image from "next/image";
import CardButton from "./components/CardButton/page";
import CardInput from "./components/CardInput/page";
import LoadingButton from "./components/LoadingButton/page";
import CustomTextarea from "./components/CustomTextarea/page";
import CustomSwitch from "./components/CustomSwitch/page";
import ToggleButton from "./components/ToggleButton/page";
import SearchBar from "./components/SearchBar/page";
import RangeSlider from "./components/RangeSlider/page";
import CustomSelect from "./components/CustomSelect/page";
import SocialSection from "./components/SocialSection/page";
export default function Home() {
  return (
    <div className="">
      <div className="container">
      <div className="containerTitle text-center my-5">
            {/* Título Principal */}
            <h1 className="main-title text-4xl font-bold text-gray-800 mb-2">Buttons #1</h1>
            <p className="subtitle text-lg text-gray-600">Interactúa con diferentes botones y elementos.</p>
        </div>
        <CardButton />
        <CardInput />
        <LoadingButton />
        <CustomTextarea />
        <CustomSwitch />
        <ToggleButton />
        <SearchBar />
        <RangeSlider />
        <CustomSelect />
      </div>
      <SocialSection />
    </div>
  );
}
