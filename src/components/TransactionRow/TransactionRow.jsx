import PropTypes from 'prop-types';


export function TransactionRow({ type, amount, currency }) {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
    );
  }


  TransactionRow.propTypes = {
    id: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};



