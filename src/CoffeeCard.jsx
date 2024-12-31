import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/AddCoffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your coffee has been deleted.', 'success');
                            const remaining = coffees.filter((coffee) => coffee._id !== _id);
                            setCoffees(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="flex justify-center items-center p-2">
            <div className="card card-side bg-base-100 shadow-xl flex">
                <figure className="flex-shrink-0">
                    <img src={photo} alt={name} className="w-48 h-auto object-cover" />
                </figure>
                <div className="flex justify-between w-full pr-4 mt-24 mr-10">
                    <div className="flex flex-col mb-4 mr-10">
                        <h2 className="name font-semibold">Name: {name}</h2>
                        <h2>{quantity}</h2>
                        <h2>{supplier}</h2>
                        <h2>{taste}</h2>
                    </div>
                    <div className="join join-vertical space-y-4">
                        <button className="btn join-item">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn join-item bg-orange-600" >
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        supplier: PropTypes.string.isRequired,
        taste: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
    }).isRequired,
    coffees: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
        })
    ).isRequired,
    setCoffees: PropTypes.func.isRequired,
};

export default CoffeeCard;
