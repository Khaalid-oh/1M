import Image from "next/image";
import { FaTwitter, FaLinkedin, FaFacebook, FaGlobe } from "react-icons/fa";
// Mock data to simulate API response
const mockData = {
  title: "Vuevocates",
  subtitle:
    "Our Community Job Board is Your Gateway to Targeted Opportunities.",
  description:
    "Vuevocates helps you explore exclusive opportunities and navigate your career seamlessly while connecting you to like minded people",
  userCount: "thousands",
  logo: "",
  socialLinks: [
    { id: 1, icon: "twitter", url: "#" },
    { id: 2, icon: "linkedin", url: "#" },
    { id: 3, icon: "facebook", url: "#" },
  ],
};

const Card = () => {
  // Simulate fetching data from an API
  const data = mockData;

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case "twitter":
        return <FaTwitter className="w-5 h-5 text-gray-500" />;
      case "linkedin":
        return <FaLinkedin className="w-5 h-5 text-gray-500" />;
      case "facebook":
        return <FaFacebook className="w-5 h-5 text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[url('/images/hero.png')] bg-cover bg-center h-1/3 w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-white gap-4">
            <button className="bg-white/20 w-fit backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
              <span className="bg-white text-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-xs">
                <FaGlobe className="w-4 h-4" />
              </span>
              Job Board
            </button>
            <h1 className="text-5xl md:text-6xl font-bold">{data.title}</h1>
            <p className="text-lg opacity-80">{data.subtitle}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg md:w-5/12 translate-y-20">
            <div className="flex items-center mb-6">
              <div className="bg-black/10 rounded-full p-2 mr-3">
                {data.logo ? (
                  <Image
                    src={data.logo}
                    alt="Vue Logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-[30px] h-[30px] rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600 text-xs font-bold">V</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-gray-800 mb-8">{data.description}</p>

            {/* User avatars */}
            <div className="mb-4">
              <div className="overflow-hidden">
                <Image
                  src="/images/avatar_group.png"
                  alt="User avatars"
                  width={180}
                  height={40}
                  className="h-auto"
                />
              </div>
              <p className="text-gray-600 mt-2">
                Join {data.userCount} of users and get jobs curated for you
              </p>
            </div>

            {/* Social links */}
            <div className="flex mt-6">
              {data.socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
