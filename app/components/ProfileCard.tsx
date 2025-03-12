import Image from "next/image";
import { ChevronDown } from "lucide-react";
import profile from "../Assets/profile.png";
import backprofile from "../Assets/backprofile.png";

// Define the props interface
interface ProfileCardProps {
  name: string;
  description: string;
  location: string;
  profileVisitors: number;
  resumeViewers: number;
  myJobs: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  description,
  location,
  profileVisitors,
  resumeViewers,
  myJobs,
}) => {
  return (
    <div className="flex flex-col items-center p-4 space-y-4 w-full max-w-sm mx-auto">
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-2xl p-4 w-full">
        <div className="flex flex-col items-center text-center relative">
          {/* Cover Photo */}
          <div className="w-full h-32 relative rounded-t-2xl overflow-hidden">
            <Image
              src={backprofile}
              alt="Cover Photo"
              fill
              className="object-cover"
            />
          </div>

          {/* Profile Picture */}
          <div className="relative -mt-12 mb-4">
            <Image
              src={profile}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* Profile Information */}
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white shadow-lg rounded-2xl p-4 w-full space-y-4">
        <div className="flex text-center justify-between">
          <p className="text-gray-500">Profile Visitors</p>
          <p className="font-bold text-[#0154AA]">{profileVisitors}</p>
        </div>
        <hr className="border-t border-gray-300 my-2" />

        <div className="flex text-center justify-between">
          <p className="text-gray-500">Resume Viewers</p>
          <p className="font-bold text-[#0154AA]">{resumeViewers}</p>
        </div>
        <hr className="border-t border-gray-300 my-2" />

        <div className="flex text-center justify-between">
          <p className="text-gray-500">My Jobs</p>
          <p className="font-bold text-[#0154AA]">{myJobs}</p>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white shadow-lg rounded-2xl p-4 w-full flex justify-between items-center">
        <div className="w-full flex flex-col">
          <div className="font-bold w-full flex justify-between items-center">
            <p className=" text-gray-800">My calendar</p>
            <div className="flex items-center space-x-1">
              <ChevronDown size={18} />
            </div>
          </div>
          <p className="text-gray-500">Upcoming Interviews</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
