import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#5C4033] text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvhVj35wKn7UFUA96YOQD-nZCMsxRKr_Mhw&s" 
            alt="Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <h1 className="font-bold text-xl">BLessed Food Explorer</h1>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/recipes" className="hover:underline">Recipes</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
}