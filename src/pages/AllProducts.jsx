import React, { useEffect, useState } from 'react'
import Tables from '../components/Tables'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

const AllProducts = () => {
  let arr = []
  let [data, setData] = useState([])
  let gettingAllProduct = async () => {
    onSnapshot(collection(db, "All Products"), (snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());
        arr.push(doc.data())
      });
      setData(arr)
    });
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
      }}>All Products</div>
      <Tables data={data} setData={setData} name={"All Products"} />
    </section>
  )
}

export default AllProducts