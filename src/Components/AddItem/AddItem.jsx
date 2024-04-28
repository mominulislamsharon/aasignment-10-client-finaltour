 import Swal from 'sweetalert2'

const AddItem = () => {
    const handlecraftItem = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const item = form.item.value;
        const category = form.category.value;
        const customization = form.customization.value;
        const stock = form.stock.value;
        const photo = form.photo.value;
        const message = form.message.value;
        const newCraft = {name, email, price, rating, time, item, category, customization, stock, photo,  message};
        console.log(newCraft);

        // send database server 
        fetch('http://localhost:5000/addItem', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'Success',
              text: 'Added Item Your Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
          }
        })
    }
    return (
        <div className=" bg-[#333637] p-24">
      <h1 className="text-3xl text-center text-white font-bold">Add Your Craft Item</h1>
      <form onSubmit={handlecraftItem}>
        <div  className="md:flex mb-8 mt-6">
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
        <div  className="md:flex gap-4 mb-8">
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
        </div>
        <div  className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
                <span className=" text-lg text-white font-medium">Processing Time</span>
            </label>
            <label className="input-group ">
            <input
              className="input input-bordered w-full join-item"
              placeholder="Time" name="time" type="text"
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
        <p className="text-white text-lg font-medium">Category</p>
        <div  className="md:flex gap-4 mb-8 ">
        <select name="category" className="select md:w-1/2 select-bordered join-item">
          <option disabled selected>Category</option>
          <option>Landscape Painting</option>
          <option>Portrait Drawing</option>
          <option>Watercolour Painting</option>
          <option>Oil Painting</option>
          <option>Charcoal Sketching</option>
          <option>Cartoon Drawing</option>
        </select>
        <select name="customization" className="select md:w-1/2 select-bordered join-item">
          <option disabled selected>Customization</option>
          <option name = 'yes'>Yes</option>
          <option name = 'no' >No</option>
        </select>
        </div>
        <p className="text-white font-medium">StockStatus</p>
        <div  className="md:flex items-center gap-4 mb-8 ">
        <select name="stock" className="select md:w-1/2 select-bordered join-item">
          <option disabled selected>stock</option>
          <option>In stock</option>
          <option>Order</option>
        </select>
            <label className="input-group md:w-1/2">
            <input
              className="input w-full input-bordered join-item"
              placeholder="Photo URL" name="photo" type="text"
            />
            </label>
        </div>
        <div>
        <textarea name="message" className="textarea  w-full h-[150px] textarea-primary" placeholder="Description"></textarea>
        </div>
        <input className="btn text-lg font-bold mt-4 btn-block" type="submit" value="Add Your Item" />
      </form>
    </div>
    );
};

export default AddItem;