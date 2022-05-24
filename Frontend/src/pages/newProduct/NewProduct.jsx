import "./newProduct.css";
import React, {useState} from "react";
import { TextField } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";



export default function NewProduct() {
  const [fileData, setFileData] = useState();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [cost, setCost] = useState();
  const [condition, setCondition] = useState("");
  const [date, setDate] = useState();
  const [images, setFile]=useState("");

  const handleFileChange=({target})=>{
     setFileData(target.files[0]);
     setFile(target.value);
   }
  const history = useHistory()
  const NewProduct = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/newproduct', {
            image:images,
            name: name,
            quantity:quantity,
            cost:cost,
            condition:condition,
            date:date
        }, {withCredentials:true});
        history.push("/")
    } catch (error) {
        if (error.response) {
            console.log(error);
        }
    }
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={NewProduct}>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Quantity</label>
          <input type="Number" placeholder="123" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>
        <div className="addProductItem">
          <label>Cost</label>
          <input type="Number" placeholder="In Rs" value={cost} onChange={(e) => setCost(e.target.value)}/>
        </div>
        
        <div className="addProductItem">
          <label>Condition</label>
          <select name="active" id="active" value={condition} onChange={(e) => setCondition(e.target.value)}>
              <option value="Working">Working</option>
              <option value="Not Working but Repairable">Not Working but Repairable</option>
              <option value="Not Working and Not Repairable">Not Working and Not Repairable</option>
          </select>
          <br></br>
          <label>Choose Date of Purchase</label>
                  <TextField id="date"
                     type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
        value={date} onChange={(e) => setDate(e.target.value)}
      />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
