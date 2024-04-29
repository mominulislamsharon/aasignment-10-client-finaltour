import Swal from "sweetalert2";


const MyArtFormList = () => {
    const handleMyArtFromList = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const item = form.item.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const stock = form.stock.value;
        const customization = form.customization.value;
        const newMyList = { price, rating, item, customization, stock, photo };
        console.log(newMyList);
        // send data server site 
        fetch('http://localhost:5000/myListItem', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newMyList)
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
            <div className=" bg-[#333637]  p-24">
      <h1 className="text-3xl  text-center text-white font-bold">Your Personal Favorites Items</h1>
      <div className="flex justify-center ">
      <form onSubmit={handleMyArtFromList}>
        <div  className="md:flex mb-8 mt-10">
          <div className="form-control md:w-[600px]">
            <label className="label ">
                <span className="label-text text-lg text-white font-medium">Photo</span>
            </label>
            <label className="input-group ">
            <input
              className="input input-bordered w-full join-item"
              placeholder="photo URL" name="photo" type="text"
            />
            </label>
          </div>
        </div>
        <div  className="mb-8">
        <div className="form-control md:w-[600px]">
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
        <div  className="mb-8">
        <div className="form-control md:w-[600px]">
            <label className="label">
                <span className=" text-lg text-white font-medium">Price</span>
            </label>
            <label className="input-group ">
            <input
              className="input input-bordered w-full join-item"
              placeholder="Price" name="price" type="text"
            />
            </label>
          </div>
        </div>
        <div  className="mb-8">
          <div className="form-control md:w-[600px]">
            <label className="label">
                <span className=" text-lg text-white font-medium">Rating</span>
            </label>
            <label className="input-group ">
            <input
              className="input input-bordered w-full join-item"
              placeholder="Rating" name="rating" type="text"
            />
            </label>
          </div>
        </div>
        <p className="text-white text-lg font-medium">Stock</p>
        <div  className="mb-8 ">
        <select name="stock" className="select md:w-[600px] select-bordered join-item">
          <option disabled selected>StockStatus</option>
          <option>In stock</option>
          <option>Order</option>
        </select>
        </div>
        <div>
            <p className="text-white font-medium">Customization</p>
        <select name="customization" className="select md:w-[600px] select-bordered join-item">
          <option disabled selected>Customization</option>
          <option name = 'yes'>Yes</option>
          <option name = 'no' >No</option>
        </select>
        </div>
        <input className="btn text-lg font-bold mt-4 btn-block" type="submit" value="Selected Item" />
      </form>
      </div>
    </div>
    );
};

export default MyArtFormList;