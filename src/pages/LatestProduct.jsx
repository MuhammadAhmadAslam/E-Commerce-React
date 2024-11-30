import React, { useEffect, useState } from 'react'
import Tables from '../components/Tables'
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

const LatestProduct = () => {
  let arr = []
  let [data, setData] = useState([])
  let gettingAllProduct = async () => {
    try {
      // Query Firestore to get documents where 'collectionName' matches the provided value
      const q = query(
        collection(db, "All Products"),
        where("collectionName", "==", "Latest Products") // Adjust 'collectionName' to match your field name in Firestore
      );

      const querySnapshot = await getDocs(q);
      const productArray = [];

      querySnapshot.forEach((doc) => {
        productArray.push({ ...doc.data(), id: doc.id }); // Include doc.id as a unique key
      });

      setData(productArray); // Assuming setProductData updates your state
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  }

  useEffect(() => {
    gettingAllProduct()
  }, [])

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

  console.log(data);

  return (
    <section style={{ minHeight: "70vh" }}>
      <div style={{
        marginTop: "60px", fontSize: "30px", textAlign: "center",
        WebkitTextFillColor: "transparent",
        backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text"
      }}>Latest Products</div>
      <Tables data={data} setData={setData} name={"Latest Products"} />
    </section>
  )
}

export default LatestProduct