
import Swal from 'sweetalert2';




const AddCoffee = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);



        //send data to server
        fetch('http://localhost:5000/AddCoffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
        })
        .then (res=>res.json())
        .then(data =>{
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                  title: 'Success',
                  text: 'User added successfully!',
                  icon: 'success', // Ensure this is lowercase
                  confirmButtonText: 'Cool'
                });
              }
              
        })
    };

    return (
        <div className="bg-red-200 p-24">
            <h2 className="text-3xl font-extrabold">Add Coffee</h2>
            <form onSubmit={handleSubmit}>
                {/* Name and Quantity */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label" htmlFor="name">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="input input-bordered md:w-full"
                            placeholder="Coffee Name"
                        />
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label" htmlFor="quantity">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            id="quantity"
                            type="text"
                            name="quantity"
                            className="input input-bordered md:w-full"
                            placeholder="Quantity"
                        />
                    </div>
                </div>

                {/* Supplier and Taste */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label" htmlFor="supplier">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input
                            id="supplier"
                            type="text"
                            name="supplier"
                            className="input input-bordered md:w-full"
                            placeholder="Supplier"
                        />
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label" htmlFor="taste">
                            <span className="label-text">Taste</span>
                        </label>
                        <input
                            id="taste"
                            type="text"
                            name="taste"
                            className="input input-bordered md:w-full"
                            placeholder="Taste"
                        />
                    </div>
                </div>

                {/* Categories and Details */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label" htmlFor="category">
                            <span className="label-text">Categories</span>
                        </label>
                        <input
                            id="category"
                            type="text"
                            name="category"
                            className="input input-bordered md:w-full"
                            placeholder="Categories"
                        />
                    </div>
                    <div className="form-control md:w-1/2 ml-5">
                        <label className="label" htmlFor="details">
                            <span className="label-text">Details</span>
                        </label>
                        <input
                            id="details"
                            type="text"
                            name="details"
                            className="input input-bordered md:w-full"
                            placeholder="Details"
                        />
                    </div>
                </div>

                {/* Photo URL */}
                <div className="form-control md:w-full">
                    <label className="label" htmlFor="photo">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input
                        id="photo"
                        type="text"
                        name="photo"
                        className="input input-bordered md:w-full"
                        placeholder="Photo Url"
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary md:w-full">
                        Add Coffee
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;
