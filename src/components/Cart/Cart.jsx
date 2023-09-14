import PropTypes from 'prop-types';
const Cart = ({cart, selectActor}) => {
    // console.log(cart);
    const {image, name, salary, role} = cart;
    return (
        <div className='border-2 w-96 space-y-3 px-5'>
            <div className='flex justify-center my-5'>
                <img className='w-24 rounded-full' src={image} alt="" />
            </div>
            <h2 className='text-2xl font-semibold text-center'>{name}</h2>
            <p className='text-center font-medium jus'> {name} started film work in television movies in 1983, but hit the big time in 1988 with his portrayal of dimwitted fastball pitcher "Nuke" Laloosh in Bull Durham (1988).</p>
            <div className='flex items-center justify-around'>
                <h5 className='text-lg font-semibold'>Salary: {salary}$</h5>
                <h5 className='text-lg font-semibold'>Role: {role}</h5>
            </div>
            <div className='flex justify-center'>
            <button onClick={() => selectActor(cart)} className='bg-red-600 px-6 py-2 rounded-lg drop-shadow-xl mb-5'>Select</button>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    selectActor : PropTypes.func
}

export default Cart;