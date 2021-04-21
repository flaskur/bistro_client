import React, { useEffect, useState } from 'react';
import CartItem from '../shared/cart-item';
import Link from 'next/link';

const Cart = () => {
	// since cart exists in front end storage, it will use client side rendering to fetch cart
	const [cart, setCart] = useState<CartItem[]>([]);
	const [loading, setLoading] = useState('not loading');

	useEffect(() => {
		setLoading('currently loading');
		fetchCart();
		setLoading('not loading');
	}, []);

	const fetchCart = () => {
		if (!localStorage.getItem('cart')) {
			localStorage.setItem('cart', JSON.stringify([]));
		}

		const existingCart = JSON.parse(localStorage.getItem('cart')!);

		setCart(existingCart);
	};

	// dynamically changing storage cart item quantity from checkout requires the foodId + comment for uniqueness and new quantity for update
	const changeQuantity = (newQuantity: number, foodId: string, comment: string) => {
		const existingCart = JSON.parse(localStorage.getItem('cart')!);

		const newCart = existingCart.map((cartItem: CartItem) => {
			if (cartItem.foodId === foodId && cartItem.comment === comment) {
				cartItem.quantity = newQuantity;
			}
			return cartItem;
		});

		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
	};

	const deleteItem = (foodId: string, comment: string) => {
		const existingCart = JSON.parse(localStorage.getItem('cart')!);

		const newCart = existingCart.filter((cartItem: CartItem) => {
			if (cartItem.foodId !== foodId) return true;
			if (cartItem.comment !== comment) return true;
			return false;
		});

		setCart(newCart);
		localStorage.setItem('cart', JSON.stringify(newCart));
	};

	return (
		<div>
			<h1>cart</h1>
			<p>{loading}</p>
			{
				cart.map((cartItem: CartItem) => {
					const {foodId, name, quantity, size, price, comment} = cartItem;
					return (
						<div key={foodId + comment}>
							<p>{name}</p>
							<input type="number" value={quantity} min={1} max={10} onChange={(e) => changeQuantity(parseInt(e.target.value), foodId, comment)} />
							<p>{size}</p>
							<p>{(quantity * price).toFixed(2)}</p>
							<p>{comment}</p>
							<button onClick={() => deleteItem(foodId, comment)}>Trash</button>
						</div>
					);
				})
			}

			<Link href="/checkout">
				{/* set disabled true if cart is empty */}
				<button>Checkout</button>
			</Link>
		</div>
	);
};

export default Cart;