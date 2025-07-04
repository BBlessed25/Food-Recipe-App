export default function Home() {
    return (
      <div className="text-center py-20">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvhVj35wKn7UFUA96YOQD-nZCMsxRKr_Mhw&s" 
          alt="Blessed Food Explorer Logo"
          className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-[#A0522D] object-cover"
        />
        <h2 className="text-4xl font-bold mb-6 text-center text-[#A0522D] drop-shadow-md">
          Welcome to Blessed Food Explorer
        </h2>
        <p className="text-lg text-gray-600">
          Discover delicious recipes for every taste!
        </p>
      </div>
    );
  }