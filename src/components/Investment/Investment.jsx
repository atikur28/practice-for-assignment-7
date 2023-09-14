import PropTypes from 'prop-types';
const Investment = ({investment, remaining, totalCost}) => {
    return (
        <div className="w-2/6">
            <h1 className="text-3xl font-bold text-center">Investment Information</h1>
            <div className="border-2 mt-8 p-3">
                <h2 className="text-xl font-semibold my-5">Selected Peoples: {investment.length}</h2>
                <h4 className="text-xl font-semibold my-3">Remaining Money: {remaining}$</h4>
                <h4 className="text-xl font-semibold mb-5">Invested Money: {totalCost}$</h4>
                <h4 className="text-xl font-semibold mb-5">Peoples Name :</h4>
                {
                    investment.map(info => (
                        <li key = {info.id}>{info.name}</li>
                    ))
                }
            </div>
        </div>
    );
};

Investment.propTypes = {
    investment: PropTypes.array,
}

export default Investment;