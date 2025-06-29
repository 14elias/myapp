import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/main.jpg';

const ProductCard = ({ title, description, image, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        {/* {price && (
          <div className="text-2xl font-bold text-amber-600 mb-4">{price}</div>
        )}
        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
          Order Now
        </button> */}
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      title: "Raw Organic Honey",
      description: "Natural organic honey harvested from the pristine highlands of Ethiopia, unprocessed and pure.",
      image: `${product1}`,
    },
    {
      title: "White Honey",
      description: "Ethiopian's premium white honey, known for its delicate flavor and crystalline appearance.",
      image: `${product2}`,
    },
    {
      title: "Beekeeper Special",
      description: "Artisanal honey collection from our master beekeepers, representing traditional Ethiopian methods.",
      image: `${product3}`,
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium collection of organic Ethiopian honey, 
            each variety carefully selected for its unique flavor profile and superior quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-amber-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose NIB Organic Honey?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-amber-500 text-4xl mb-2">🍯</div>
                <h4 className="font-semibold text-gray-800 mb-2">100% Pure</h4>
                <p className="text-gray-600 text-sm">No additives or preservatives</p>
              </div>
              <div>
                <div className="text-amber-500 text-4xl mb-2">🌿</div>
                <h4 className="font-semibold text-gray-800 mb-2">Organic Certified</h4>
                <p className="text-gray-600 text-sm">Sustainably sourced and produced</p>
              </div>
              <div>
                <div className="text-amber-500 text-4xl mb-2">🇪🇹</div>
                <h4 className="font-semibold text-gray-800 mb-2">Ethiopian Heritage</h4>
                <p className="text-gray-600 text-sm">Traditional beekeeping methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
