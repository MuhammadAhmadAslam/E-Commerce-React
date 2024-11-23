import React, { useEffect, useState } from 'react'
import Tables from '../components/Tables'
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

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