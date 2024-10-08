import { Component } from "solid-js";
import Card from "../../components/Home/Card";
import Navbar from "../../components/Navbar/Navbar";
import { isDark, handleTheme } from "../../hooks/common";
import { AuthProvider } from "../../utils/AuthContext";

const yearLinks = {
  1: "year1",
  2: "year2",
  3: "year3",
  4: "year4",
};
handleTheme();

const Home: Component = () => {
  return (
    <AuthProvider>
      <div
        class={`${
          isDark() ? "bg-black text-white" : "bg-[#E7F0FF] text-black"
        } h-fit md:h-screen`}
      >
        <Navbar />
        <div class="flex justify-center items-center gap-8 flex-wrap py-20 h-screen">
          {Object.entries(yearLinks).map(([year, link]) => (
            <Card year={year} link={link} />
          ))}
        </div>
      </div>
    </AuthProvider>
  );
};

export default Home;
