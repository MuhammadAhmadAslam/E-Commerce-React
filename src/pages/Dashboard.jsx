import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import AddProductModal from '../components/AddProductModal';
import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from '../../Firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
export default function Dashboard() {

  const [isAddProductModalVisible, setAddProductModalVisible] = useState(false);
  let navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const uid = user.uid;
        console.log(user , "user logged in");
        // ...
      } else {
        navigate("/")
        // User is signed out
        // ...
      }
    })
  } ,[])
  const showAddProductModal = () => {
    setAddProductModalVisible(true);
  };

  const handleModalClose = () => {
    setAddProductModalVisible(false);
  };

  let [allProductLength , setAllProductLength] = useState(0)
  let [allLatestLength , setAllLatestLength] = useState(0)
  let [allTrendingLength , setAllTrendingProductsLength] = useState(0)
  let [pendingOrder , setPendingOrders] = useState(0)
  let [ShippedOrder , setShippedOrders] = useState(0)

  let gettingAllProduct = async  () => {
    onSnapshot(collection(db, "All Products"), (snapshot) => {
      console.log(`Collection document length: ${snapshot.size}`);
      setAllProductLength(snapshot.size)
      snapshot.forEach((doc) => {
      });
    });
  }


  let getingLatestProduct = async () => {
    // Define the query with the 'where' clause
    const latestProductsQuery = query(
      collection(db, "All Products"),
      where("collectionName", "==", "Latest Products")
    );
  
    // Listen to the query snapshot
    onSnapshot(latestProductsQuery, (snapshot) => {
      // Update the state with the size of the filtered documents
      setAllLatestLength(snapshot.size);
  
      // Iterate through each document
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    });
  };



  let getingTrendingProduct = async () => {
    // Define the query with the 'where' clause
    const latestProductsQuery = query(
      collection(db, "All Products"),
      where("collectionName", "==", "Trending Products")
    );
  
    // Listen to the query snapshot
    onSnapshot(latestProductsQuery, (snapshot) => {
      // Update the state with the size of the filtered documents
      setAllTrendingProductsLength(snapshot.size);
  
      // Iterate through each document
      snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    });
  };


  let gettingPendingOrder = async () => {
    onSnapshot(collection(db, "Orders"), (snapshot) => {
      const pendingOrders = snapshot.docs.filter((doc) => doc.data().orderStatus === "pending");
      console.log(`Pending orders length: ${pendingOrders.length}`);
      setPendingOrders(pendingOrders.length)
      pendingOrders.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });
  }



  let gettingShippedOrder = async () => {
    onSnapshot(collection(db, "Orders"), (snapshot) => {
      const ShippedOrder = snapshot.docs.filter((doc) => doc.data().orderStatus === "shipped");
      console.log(`Pending orders length: ${ShippedOrder.length}`);
      setShippedOrders(ShippedOrder.length)
      ShippedOrder.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });
  }



  useEffect(() => {
    gettingAllProduct()
    getingLatestProduct()
    gettingPendingOrder()
    gettingShippedOrder()
    getingTrendingProduct()
  } , [])

  return (
    <div className="row g-4 d-flex justify-content-center align-items-center mt-5" style={{display : "flex" , justifyContent : "center", alignItems : "center" ,marginBottom: "280px"}}>
      <Link to={"/dashboard/admin/products"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-primary text-white p-4 rounded shadow">
          <h2 className="display-4">{allProductLength}</h2>
          <p>All Products</p>
        </div>
      </Link>
      <Link  to={"/dashboard/admin/pending-orders"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-secondary text-white p-4 rounded shadow">
          <h2 className="display-4">{pendingOrder}</h2>
          <p>Pending Orders</p>
        </div>
      </Link>
      <Link to={"/dashboard/admin/completed-orders"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-success text-white p-4 rounded shadow">
          <h2 className="display-4">{ShippedOrder}</h2>
          <p>Completed Orders</p>
        </div>
      </Link>
      <Link to={"/dashboard/admin/latest-products"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-success text-white p-4 rounded shadow">
          <h2 className="display-4">{allLatestLength}</h2>
          <p>Latest Products</p>
        </div>
      </Link>
      <Link to={"/dashboard/admin/trending-products"}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-primary text-white p-4 rounded shadow">
          <h2 className="display-4">{allTrendingLength}</h2>
          <p>Trending Products</p>
        </div>
      </Link>
      <div  onClick={showAddProductModal}  className="col-md-4 col-sm-6" style={{textDecoration: "none"}}>
        <div className="bg-secondary text-white p-4 rounded shadow">
          <h2 className="display-4">Product</h2>
          <p>Add Products</p>
        </div>
      </div>

      <AddProductModal 
        isVisible={isAddProductModalVisible} 
        onClose={handleModalClose} 
      />
    </div>
  );
}
