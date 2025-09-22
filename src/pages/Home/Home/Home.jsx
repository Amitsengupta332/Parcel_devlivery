import Banner from "../Banner/Banner";
import ClientLogosMarquee from "../ClientLogosMarquee/ClientLogosMarquee";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <ClientLogosMarquee />
      {/* <div className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            We are here to help you deliver your parcels
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>  
      </div> */}
    </div>
  );
};

export default Home;
