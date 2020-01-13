import React from 'react'
import { Typography, CardActionArea, CardMedia, Fab } from '@material-ui/core'
import PropTypes from 'prop-types'
import StyledCartCard from '../styles/StyledCartCard'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

function CartCard({ author, quote, quantity, image, id, price, addItemToCart, removeItemFromCart }) {
	console.log(2345987098, quantity)
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	})

	const handleAddClick = event => id => {
		event.preventDefault()
		console.log('clicked add')
		addItemToCart(id)
	}

	const handleRemoveClick = event => id => {
		event.preventDefault()
		console.log('clicked remove')
		removeItemFromCart(id)
	}

	return (
		<StyledCartCard>
			<div className="media-image-wrapper">
				<CardMedia
					className="media-image"
					component="img"
					alt="Contemplative Reptile"
					height="140"
					image={image}
					title="Contemplative Reptile"
				/>
			</div>
			<div className="card-info-area">
				<Typography variant="h6">{author}</Typography>
				<Typography variant="h6" className="truncate">
					{quote}
				</Typography>
				<Typography>Price: {formatter.format(price)}</Typography>
			</div>
			<div className="card-action-area-wrapper">
				<Typography variant="p" className="card-quantity">
					Qty: {quantity}
				</Typography>
				<div className="card-action-area">
					<Fab
						aria-label="add"
						onClick={event => handleAddClick(event)(id)}
						className="add-button card-action-button"
					>
						<AddIcon className="card-action-icon" />
					</Fab>
					<Fab
						aria-label="add"
						onClick={event => handleRemoveClick(event)(id)}
						className="remove-button card-action-button"
					>
						<RemoveIcon className="card-action-icon" />
					</Fab>
				</div>
			</div>
		</StyledCartCard>
	)
}
export default CartCard

CartCard.propTypes = {
	author: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	addItemToCart: PropTypes.func.isRequired,
	removeItemFromCart: PropTypes.func.isRequired
}