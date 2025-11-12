import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-archivo font-bold text-gray-900 mb-8">
          My Profile
        </h1>

        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b534601d007320f6771351236592144b24d4f30705bbd1beaee32856f6e07cdf"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-archivo font-semibold text-gray-900">
                Emily Johnson
              </h2>
              <p className="text-gray-600">Software Developer</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Contact Information
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Email: emily.johnson@example.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Location: San Francisco, CA</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Learning Progress</h3>
              <div className="space-y-2">
                <div>
                  <p className="text-gray-600">Courses Completed</p>
                  <p className="text-2xl font-bold text-[#636ae8]">12</p>
                </div>
                <div>
                  <p className="text-gray-600">Certificates Earned</p>
                  <p className="text-2xl font-bold text-[#636ae8]">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Enrolled Courses</h3>
          <div className="space-y-4">
            {[
              { name: 'JavaScript 101', progress: 75 },
              { name: 'React Fundamentals', progress: 45 },
              { name: 'TypeScript Essentials', progress: 90 },
            ].map((course, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{course.name}</span>
                  <span className="text-[#636ae8]">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#636ae8] rounded-full h-2"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
