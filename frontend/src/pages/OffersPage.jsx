import CentralNavbar from "../components/CentralNavbar";

export default function OfferPage()
{
    return(
    <div className="bg-[#393c49] w-screen h-screen flex overflow-y-auto">
      <div>
        <CentralNavbar />
      </div>
      <div className="ml-[10%] mt-[2%]">
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-[2rem] text-white">Hi Agam,</h1>
            <p className="text-white mt-3">Friday 26 April, 2024</p>
          </div>
        </div>
      </div>
    </div>
    );
}