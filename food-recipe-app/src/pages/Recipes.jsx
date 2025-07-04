import RecipeCard from '../components/RecipeCard';

const recipes = [
  { name: 'Spaghetti Bolognese', description: 'Classic Italian dish.', image: 'https://t3.ftcdn.net/jpg/02/60/30/16/360_F_260301654_UZvICSdHGNSPJJRjHD6fX9Oa3k3vxlYI.jpghttps://t3.ftcdn.net/jpg/01/13/31/52/360_F_113315273_1gGmWM23TrJlnDRlzYlMLtzrgd5UImXA.jpg' },
  { name: 'Chicken Curry', description: 'Spicy and flavorful.', image: 'https://t4.ftcdn.net/jpg/02/42/74/31/360_F_242743136_RYsBnwSL1Tfs1UsPUFXGrsPp1nPXe8nv.jpg' },
  { name: 'Veggie Stir Fry', description: 'Quick and healthy.', image: 'https://t4.ftcdn.net/jpg/11/18/60/67/360_F_1118606795_cZ6TlCqqUMca48pe8vsrHVW8OrE0Aug9.jpg' },
  { name: 'Beef Tacos', description: 'Perfect for taco nights.', image: 'https://t3.ftcdn.net/jpg/02/23/20/02/360_F_223200292_bcqAhdWHE60hRq9Aawh1tQ6fth35uOUM.jpg' },
  { name: 'Pancakes', description: 'Fluffy and sweet.', image: 'https://t3.ftcdn.net/jpg/06/46/38/44/360_F_646384452_KZk1MgeJZbSrErlrPuUPexr5VLObUO5l.jpg' },
  { name: 'Caesar Salad', description: 'Fresh and crunchy.', image: 'https://t3.ftcdn.net/jpg/08/34/83/24/360_F_834832496_kISNxXnvTPhEjEvr2KS1EFrkcqUgteuk.jpg' },
];

export default function Recipes() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, idx) => (
          <RecipeCard key={idx} {...recipe} />
        ))}
      </div>
    </div>
  );
}