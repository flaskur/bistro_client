import React, { useState } from 'react';
import PurchaseType from '../shared/purchase-type';

const Checkout = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [purchaseType, setPurchaseType] = useState<PurchaseType>(PurchaseType.TAKE_OUT);
	const [address, setAddress] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [expirationDate, setExpirationDate] = useState(''); // should add a regex for this
	const [cvv, setCvv] = useState('');
	
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log('form submitted with', name, phone, purchaseType, address, cardNumber, expirationDate, cvv);
	};
	
	return (
		<div>
			<h1>checkout</h1>
			<p>this page should be restricted to auth users and non empty cart</p>

			<form onSubmit={handleSubmit}>
				<div>
					<label>name</label>
					<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<label>phone</label>
					<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
				</div>

				<div>
					<label>take out</label>
					<input type="radio" name="purchase" value="TAKE OUT" onClick={() => setPurchaseType(PurchaseType.TAKE_OUT)} />
					<label>delivery</label>
					<input type="radio" name="purchase" value="DELIVERY" onClick={() => setPurchaseType(PurchaseType.DELIVERY)} />
				</div>
				
				<div>
					<label>address</label>
					<input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
				</div>
				<div>
					<label>cardNumber</label>
					<input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
				</div>
				<div>
					<label>expirationDate</label>
					<input type="text" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
				</div>
				<div>
					<label>cvv</label>
					<input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
				</div>
				
				<button>submit</button>
			</form>
		</div>
	);
};

export default Checkout;