import React, { useEffect, useState } from 'react'
import Tables from '../components/Tables'
import { collection, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../Firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

const AllProducts = () => {
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