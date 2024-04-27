const HomeCard = () => {
  return (
    <div  className="grid mb-8 md:grid-cols-3 space-y-3 ">
      <div className="card w-96 h-[550px] bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=2056"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Landscape Painting</h2>
          <p>Landscape paintings often feature broad, sweeping vistas that convey a sense of vastness and openness.</p>
          <div className="card-actions justify-end">
            <button className="btn w-full btn-primary">View All</button>
          </div>
        </div>
      </div>
      <div className="card w-96 h-[550px] bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.freepik.com/premium-photo/fashion-beautiful-black-asian-girl-model-with-cottagecore-dress_962764-160315.jpg?w=826"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Portrait Drawing</h2>
          <p>Captures essence, character, emotions; reveals inner worlds through visual storytelling.</p>
          <div className="card-actions justify-end">
            <button className="btn w-full btn-primary">View All</button>
          </div>
        </div>
      </div>
      <div className="card w-96 h-[550px] bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.pinimg.com/564x/db/00/b0/db00b01db9cb0d7407034522e2505668.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Watercolour Painting</h2>
          <p>Transparent, fluid hues blend, creating delicate, vibrant, expressive artworks on paper.</p>
          <div className="card-actions justify-end">
            <button className="btn w-full btn-primary">View All</button>
          </div>
        </div>
      </div>
      <div className="card w-96 h-[550px] bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=1989"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Oil Painting</h2>
          <p>Rich, textured layers, vibrant colors, timeless masterpieces on canvas emerge.</p>
          <div className="card-actions justify-end">
            <button className="btn w-full btn-primary">View All</button>
          </div>
        </div>
      </div>
      <div className="card w-96 h-[550px] bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.freepik.com/premium-photo/drawing-dog-sitting-fence-looking-path-generative-ai_1034476-4034.jpg?w=1380"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Charcoal Sketching</h2>
          <p>Bold strokes, dramatic contrasts, capturing depth, mood, and emotion expressively.</p>
          <div className="card-actions justify-end">
            <button className="btn w-full btn-primary">View All</button>
          </div>
        </div>
      </div>
      <div className="card w-96 h-[550px] bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.pinimg.com/564x/5f/45/33/5f453322b30011fbd0e5afb59b473f3a.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Cartoon Drawing</h2>
          <p>Whimsical characters, exaggerated features, humor, and storytelling intertwine, bringing playful narratives to life with vivid lines.</p>
          <div className="card-actions">
            <button className="btn w-full btn-primary">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
