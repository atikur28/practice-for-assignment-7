import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Carts = ({selectActor}) => {
    const [carts, setCarts] = useState([]);
    useEffect( () => {
        fetch('./data.json')
          .then( res => res.json() )
          .then( data => setCarts(data) );
    }, [])
    return (
        <div className="w-2/3">
            <h1 className="text-3xl font-bold">Peoples: {carts.length}</h1>
            <div className="flex flex-wrap gap-8 mt-8">
              {
                carts.map( (cart, idx) => <Cart key={idx} cart={cart} selectActor={selectActor} ></Cart> )
              }
            </div>
        </div>
    );
};

Carts.propTypes = {
  selectActor : PropTypes.func
}

export default Carts;