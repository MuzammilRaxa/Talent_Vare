import ProfileCard from './components/ProfileCard';
import 'boxicons/css/boxicons.min.css';
import Navbar from './components/Navbar';
import FeaturedJobs from './components/featuredJobs';
import JobCards from './components/jobCards';



const Page = () => {

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <div className="container mx-auto p-4 flex flex-col lg:flex-row">
                <div className="lg:w-4/12 xl:lg:w-3/12 mb-6">
                    <ProfileCard
                        name="Albert Flores"
                        description="Senior Product Designer | UI/UX Designer | Graphic Designer | Web Developer"
                        location="Clinton, Maryland"
                        profileVisitors={140}
                        resumeViewers={20}
                        myJobs={88}
                    />
                </div>
                <div className="lg:w-8/12 xl:lg:w-9/12">
                    {/* Header */}
                    <div className="items-center mt-5 mb-6">
                        <h1 className="text-3xl font-bold">Find your Dream Job, <span style={{ color: '#0154AA' }}>Albert!</span></h1>
                        <p>Explore the latest job openings and apply for the best opportunities available today!</p>
                    </div>

                    {/* Search Bar & Filters */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded gap-3 mb-8" style={{ width: '100%', borderRadius: '12px' }}>
                        {/* Search Input */}
                        <div className="flex items-center w-full sm:w-[100%] xl:w-[150%]">
                        <input
                                type="text"
                                placeholder="Job Title, Company or Keywords"
                                className=" w-full md:w-auto flex-grow p-3 rounded bg-white"

                            />
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-3 mt-4 md:mt-0">
                            {/* Dropdown 1 */}
                            <select className="w-full md:w-auto p-3 rounded text-gray-500 bg-white">
                                <option value="">Select Location</option>
                                <option value="china">China</option>
                                <option value="pakistan">Pakistan</option>
                            </select>

                            {/* Dropdown 2 */}
                            <select className="w-full md:w-auto p-3 rounded text-gray-500 bg-white">
                                <option value="">Job Type</option>
                                <option value="remote">Remote</option>
                                <option value="onsite">On-site</option>
                                <option value="hybrid">Hybrid</option>
                            </select>

                            {/* Search Button */}
                            <button
                                className="md:w-auto text-white px-4 py-2 rounded flex items-center justify-center gap-2 mt-3 md:mt-0"
                                style={{ backgroundColor: '#0154AA', fontSize: '18px', borderRadius: '12px' }}
                            >
                                <i className='bx bx-search-alt-2' style={{ color: '#ffffff', fontSize: '24px' }}></i>
                                Search
                            </button>
                        </div>
                    </div>
                    {/* Filter Tags */}
                    <div className=' flex item-center gap-4 pb-3'>
                        <p className='p-2 text-gray-500'>Similar:</p>
                        <button className='p-1 rounded border border-gray-400 text-gray-500'>Frontend</button>
                        <button className='p-1 rounded border border-gray-400 text-gray-500'>Backend</button>
                        <button className='p-1 rounded border border-gray-400 text-gray-500'>Graphic Designer</button>
                    </div>
                    <hr className="border-t border-gray-300 my-2" />
                    {/* Featured Jobs */}
                    <div>
                        <div className='flex items-center gap-4'>
                            <h2 className="text-xl font-bold mb-4">Featured Jobs</h2>
                            <a href="/" className='text-l text-blue-600 mb-3' style={{ borderBottom: '2px solid blue' }}>See Featured Jobs</a>
                        </div>
                        <div>
                            <FeaturedJobs />
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 my-6" />
                    {/* Recomended Jobs */}
                    <div>
                        <div className='flex items-center gap-4'>
                            <h2 className="text-xl font-bold mb-4">Recommended Jobs</h2>
                            <a href="/" className='text-l text-blue-600 mb-3' style={{ borderBottom: '2px solid blue' }}>See Recomended Jobs</a>
                        </div>
                        <div>
                            <JobCards />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;

