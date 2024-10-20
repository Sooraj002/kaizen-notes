import { useParams } from "@solidjs/router";
import Sidebar from "../../components/dashboard/Sidebar";
import Sidebar2 from "../../components/dashboard/Sidebar2";
import { createSignal } from "solid-js";
import { isLoading } from "../../hooks/common";
import Loader from "../../components/Loader/Loader";
import MySVG from "../../components/dashboard/14-Mechanic.svg";
import MySVG2 from "../../components/dashboard/book.svg";
import Navbar from "../../components/Navbar/Navbar";
const Dashboard = () => {
  const [link, setLink] = createSignal("");
  const params = useParams();
  console.log(params.year);
  window.addEventListener("link-clicked", (event: any) => {
    console.log(event);
    setLink(event.detail);
  });

  return (
    <div>
      <Navbar />
      <div class="md:p-4 flex h-screen overflow-hidden justify-center items-center">
        {params.year === "year1" ? (
          <Sidebar year={params.year} />
        ) : (
          <Sidebar2 year={params.year} />
        )}
        {isLoading() ? (
          <Loader />
        ) : (
          <>
            <main class="bg-white w-screen md:rounded-lg h-screen">
              {/* <div class="flex h-full w-full justify-center items-center text-black">
                <img src={MySVG} class="" />
                Unable to find what you are looking for?
                <div class="cursor-pointer text-blue-300">click here</div>
              </div> */}
              <div class="flex flex-col h-full w-full justify-center items-center text-black">
                <img src={MySVG2} class="w-80" />
                Unable to find what you are looking for?
                <div class="cursor-pointer text-blue-300">click here</div>
              </div>
              <iframe src={link()} class="w-full h-full"></iframe>
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
