export default function RecipeCard({ name, description, image }) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <button className="bg-[#D2B48C] text-white px-4 py-2 rounded hover:bg-[#c19a6b]">
  View Recipe
</button>
        </div>
      </div>
    );
  }