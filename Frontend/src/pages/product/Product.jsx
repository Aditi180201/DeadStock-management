import { Link } from "react-router-dom";
import "./product.css";
//import Chart from "../../components/chart/Chart"
//import {productData} from "../../components/homepage/dummyData"
import { Publish } from "@material-ui/icons";
import TextField from '@material-ui/core/TextField';

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                  <span className="productName">Electronics</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">1</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Quantity</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Condition:</span>
                      <span className="productInfoValue">Not Working but Repairable</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Date:</span>
                      <span className="productInfoValue">18/01/2021</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Cost:</span>
                      <span className="productInfoValue">Rs120</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Product Name" />
                  <label> Price (in Rs)</label>
                  <input type="text" placeholder="Product Cost (in Rs)" />
                  <label>Quantity</label>
                  <input type="text" placeholder="Quantity" />
                  <label>Condition</label>
                  <select name="Status" id="idStock">
                      <option value="Working">Working</option>
                      <option value="Not Working but Repairable">Not Working but Repairable</option>
                      <option value="Not Working and Not Repairable">Not Working and Not Repairable</option>
                  </select>
                  
                  <label>Choose Date of Purchase</label>
                  <TextField id="date"
                     
                     type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
