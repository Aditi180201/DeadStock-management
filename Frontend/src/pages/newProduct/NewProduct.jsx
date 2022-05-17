import "./newProduct.css";
import { TextField } from "@material-ui/core";
export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Quantity</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label>Cost</label>
          <input type="text" placeholder="In Rs" />
        </div>
        
        <div className="addProductItem">
          <label>Condition</label>
          <select name="active" id="active">
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
      />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
