import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/UserSlice'
import { db } from '../firebase'
import "./Plans.css"
function Plans() {
    const user=useSelector(selectUser)
    const [products,setProducts]=useState([])
    const [subscriptions,setSubscriptions]=useState(null)
    useEffect(()=>{
  db.collection("customers").doc(user.uid).collection("subscriptions").get()
  .then((querySnapchot)=>{
       querySnapchot.forEach(async(snap)=>{
           setSubscriptions({
               role:snap.data().role,
               current_period_end:snap.data().current_period_end.seconds,
              current_period_start:snap.data().current_period_start.seconds
           })
       })
   })
    },[])
    useEffect(()=>{
     db.collection("products").where("active","==",true).get().then(querySnapchot=>{
         const products={}
         querySnapchot.forEach( async productDoc=>{
             products[productDoc.id]=productDoc.data()
             const pricdoc=await productDoc.ref.collection("prices").get()
             pricdoc.docs.forEach(price=>{
               products[productDoc.id].prices={
                   priceId:price.id,
                   priceData:price.data()
               }
             }
             )
         })
         setProducts(products)
     })
    },[])
    console.log(products)
    const loadChekout=async (priceId)=>{
    const docref=await db.collection('customers').doc(user.uid).collection('checkout_sessions')
    .add({
        price: priceId,
        success_url:window.location.origin,
        cancel_url:window.location.origin
    })
   docref.onSnapshot(async (snap)=>{
       const {error,sessionId}=snap.data()
       if(error){
           alert(`Error${error.message}`)
       }
       if(sessionId){
           const stripe=await loadStripe("pk_test_51KsxSyJQcgsMFQ9LPvjH400leQcDnGlqRZ9aTv2eHmW6qnFkeFdPT4GNs9OeaZbTjuQkD6Hoq09q9wERvYitz5W4003Rr2HLqN");
           stripe.redirectToCheckout({sessionId});
       }
       
   });
    };
  return (
    <div className="plans">
       {subscriptions && (<p>Reval Date : {new Date(subscriptions?.current_period_end*1000).toLocaleDateString()}</p>) }
        {Object.entries(products).map(([productId,productData])=>{
            const isCurrentPalanActive=productData.name?.toLowerCase().includes(subscriptions?.role)
            return (
             
<div className="plann__secren" key={productId}>
    <div className="plann__infos">
        <h5>{productData.name}</h5>
        <h6>{productData.description}</h6>
    </div>
    <button className="plan__button" onClick={()=> !isCurrentPalanActive && loadChekout(productData.prices.priceId)}>{isCurrentPalanActive? "Current Plan":"Subscribe"}</button>
</div>
            )
        })}
    </div>
  )
}

export default Plans