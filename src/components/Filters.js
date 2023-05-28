import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating';
import { CartState } from '../context/Context';

const Filters = () => {
    const {
      productDispatch,
      productState: { byStock, byFastDelivery, sort, byRating },
    } = CartState();
  return (
    
    
    <div className='filters'>
    
        <h1>Filter Products </h1>
        <span><Form.Check 
            inline
            type="radio"
            id={`inline-1`}
            name="group1"
            label="Price Low To High"
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          /></span>
        <span> <Form.Check 
            inline
            type="radio"
            name="group1"
            id={`inline-2`}
            label="Price High To Low"
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />
          </span>
        <span>
        <Form.Check 
            inline
            type="checkbox"
            name="group1"
            id={`inline-3`}
            label="Include Out of Stock"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            checked={byStock}
          />
        </span>
        <span>
        <Form.Check 
            inline
            type="checkbox"
            name="group1"
            id={`inline-4`}
            label="Fast Delivery Only"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            checked={byFastDelivery}
          />
        </span>
        <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
        />
      </span>
        <Button variant="success" onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }> Clear Filters</Button>
       
<span style={{marginTop:"320px", marginLeft:"30px"}}
> By Hemant Khatiwada @2023</span>
</div>

  )
}

export default Filters