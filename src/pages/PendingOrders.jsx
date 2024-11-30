import React, { useEffect, useState } from 'react'
import OrderDetail from '../components/OrderDetail'
import { collection, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../../Firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

const PendingOrders = () => {

  let [order , setOrder] = useState([])
  let arr = []
  let gettingPendingOrder = async () => {
    onSnapshot(collection(db, "Orders"), (snapshot) => {
      const pendingOrders = snapshot.docs.filter((doc) => doc.data().orderStatus === "pending");
      console.log(`Pending orders length: ${pendingOrders.length}`);
      pendingOrders.forEach((doc) => {
        arr.push(doc.data())
      })
      setOrder(arr)
    })
  }

  useEffect(() => {
      gettingPendingOrder()
  } , [])

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


  console.log(order);
  
  return (
    <section>
      <div style={{display : "flex" , justifyContent: "center" , alignItems : "center" , flexDirection : "column" , fontSize : "30px" , marginTop : "70px",
					WebkitTextFillColor: "transparent",
					backgroundImage: "linear-gradient(270deg, #fff09e, #c3812a, #fff09e, #c3812a)",
					WebkitBackgroundClip: "text",
					backgroundClip: "text"}}>
      PendingOrders
      </div>
      {
        order.length > 0 ? 
      <OrderDetail data={order} setOrder={setOrder} showButton={true} />
      : 
      <div style={{height : "60vh" , display : "flex" , justifyContent : 'center' , alignItems : "center"}}>
        <h1 style={{textAlign: "center" , placeItems : "center"}}>No Order Pending</h1>
      </div>
      }
    </section>

  )
}

export default PendingOrders