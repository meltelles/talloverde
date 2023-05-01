import { FiShoppingCart } from 'react-icons/fi';

export default function CartWidget({ precio }) {
    return (
        <span>
            <FiShoppingCart /> ${precio ? precio : 0}
        </span>
    );
}