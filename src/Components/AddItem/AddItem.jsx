

const AddItem = () => {
    const handleArtItem = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const item = form.item.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supllier, tast, category, details, photo};
        console.log(newCoffee);
    }
    return (
        <div className=" bg-[#333637] p-24">
      <h1 className="text-3xl text-white font-bold">Add Craft Item</h1>
      <form onSubmit={handleArtItem}>
        {/* form name and quantity row */}
        <div  className="md:flex mb-8 ">
          <div className="form-control md:w-1/2">
            <label className="label ">
                <span className="label-text text-lg text-white font-medium">Name</span>
            </label>
            <label className="input-group ">
            <input
              className="input input-bordered w-full join-item"
              placeholder="User Name" name="name" type="text"
            />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className=" text-lg text-white font-medium">Email</span>
            </label>
            <label className="input-group">
            <input
              className="input input-bordered w-full join-item" name="email"
              placeholder="User Email" type="text"
            />
            </label>
          </div>
            
        </div>
        {/* form supplier and test row */}
        <div  className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className="text-lg text-white font-medium">Price</span>
            </label>
            <label className="input-group ">
            <input
              className="input input-bordered w-full join-item"
              placeholder="Price" name="price" type="text"
            />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
                <span className="text-lg text-white font-medium">Rating</span>
            </label>
            <label className="input-group">
            <input
              className="input input-bordered w-full join-item" name="rating"
              placeholder="Rating" type="text"
            />
            </label>
          </div>
            
        </div>
        <div  className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className=" text-lg text-white font-medium">Processing Time</span>
            </label>
            <label className="input-group ">
            <input
              className="input input-bordered w-full join-item"
              placeholder="Time" name="processing" type="text"
            />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className=" text-lg text-white font-medium">Item Name</span>
            </label>
            <label className="input-group ">
            <input
              className="input input-bordered w-full join-item"
              placeholder="item" name="item" type="text"
            />
            </label>
          </div>
            
        </div>
        <p className="text-white text-lg font-medium">Category</p>
        <div  className="md:flex gap-4 mb-8 ">
        <select className="select md:w-1/2 select-bordered join-item">
          <option disabled selected>Landscape Painting</option>
          <option>Portrait Drawing</option>
          <option>Watercolour Painting</option>
          <option>Oil Painting</option>
          <option>Cartoon Drawing</option>
        </select>
        <select className="select md:w-1/2 select-bordered join-item">
          <option disabled selected>Customization</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        </div>
        <p>StockStatus</p>
        <div  className="md:flex gap-4 mb-8 ">
        <select className="select md:w-1/2 select-bordered join-item">
          <option disabled selected>stock</option>
          <option>In stock</option>
          <option>Order</option>
        </select>
        <select className="select md:w-1/2  select-bordered join-item">
          <option disabled selected>Landscape Painting</option>
          <option>Portrait Drawing</option>
          <option>Watercolour Painting</option>
          <option>Oil Painting</option>
          <option>Cartoon Drawing</option>
        </select>
        </div>
        <div  className="mb-8 ">
          <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Photo</span>
            </label>
            <label className="input-group ">
            <input
              className="input input-bordered w-full join-item"
              placeholder="Photo URL" name="photo" type="text"
            />
            </label>
          </div>
        </div>
        <div>
        <textarea className="textarea  w-full h-[250px] textarea-primary" placeholder="Description"></textarea>
        </div>
        <input className="btn mt-4 btn-block" type="submit" value="Add coffee" />
      </form>
    </div>
    );
};

export default AddItem;