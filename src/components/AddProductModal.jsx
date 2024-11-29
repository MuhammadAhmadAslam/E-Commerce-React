// import React, { useState } from "react";
// import { Modal } from "antd";
// import { CloseOutlined } from "@ant-design/icons";
// import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
// import { app } from "../../Firebase/firebase";
// import { ProductCategry } from "../pages/Home";

// const AddProductModal = ({ isVisible, onClose }) => {

//   let categoryWebsite = [
//     {
//       Category: "All Products"
//     },
//     {
//       Category: "Trending Products"
//     },
//     {
//       Category: "Latest Products"
//     }
//   ]
//   const [title, setTitle] = useState("");
//   const [slogan, setSlogan] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [reviews, setReviews] = useState("");
//   const [category, setCategory] = useState(ProductCategry[0].Category);
//   const [categoryForWebsiteDisplay, setCategoryForWebsiteDisplay] = useState(categoryWebsite[0].Category);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const storage = getStorage(app);
//   const firestore = getFirestore(app);

//   const handleImageChange = (event) => {
//     const files = Array.from(event.target.files);
//     setImageFiles(files);
//   };

//   console.log(categoryForWebsiteDisplay);

//   const uploadImagesToFirebase = async (imageFiles) => {
//     const uploadPromises = imageFiles.map((file) => {
//       const storageRef = ref(storage, `${file.name}`);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       return new Promise((resolve, reject) => {
//         uploadTask.on(
//           'state_changed',
//           (snapshot) => {
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log(`Upload is ${progress}% done`);
//           },
//           (error) => {
//             console.error('Upload failed:', error);
//             reject(error);
//           },
//           () => {
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//               console.log('File available at', downloadURL);
//               resolve(downloadURL);
//             });
//           }
//         );
//       });
//     });

//     return Promise.all(uploadPromises);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (imageFiles.length === 0) {
//       alert("Please upload at least one image.");
//       return;
//     }

//     setLoading(true);

//     try {
//       const imageUrls = await uploadImagesToFirebase(imageFiles);

//       const collectionRef = collection(firestore, categoryForWebsiteDisplay);    //Updated Firestore reference
//       const collectionRef2 = collection(firestore, category);    //Updated Firestore reference

//       // Add product data to Firestore
//       const docRef = doc(collectionRef);
//       const docRef2 = doc(collectionRef2);
//       await setDoc(docRef, {
//         _id: docRef.id,
//         name: title,
//         slogan: slogan,
//         price: price,
//         description: description,
//         reviews: reviews,
//         category: category,
//         images: imageUrls, // Add image URLs
//         createdAt: new Date().toLocaleDateString(),
//         collectionName: categoryForWebsiteDisplay
//       });
//       await setDoc(docRef2, {
//         _id: docRef2.id,
//         name: title,
//         slogan: slogan,
//         price: price,
//         description: description,
//         reviews: reviews,
//         category: category,
//         images: imageUrls, // Add image URLs
//         createdAt: new Date().toLocaleDateString(),
//         collectionName: category
//       });

//       // const docRef = await addDoc(collection(firestore, selectedCollection), {
//       //     name: title,
//       //     slogan: slogan,
//       //     price: price,
//       //     description: description,
//       //     reviews: reviews,
//       //     category: selectedCategory,
//       //     images: imageUrls,
//       //     createdAt: new Date(),
//       // });

//       console.log("Product added with ID: ", docRef.id);
//       alert("Product added successfully!");
//       // Reset form fields
//       setTitle("");
//       setSlogan("");
//       setPrice("");
//       setDescription("");
//       setReviews("");
//       setCategory("");
//       setCategoryForWebsiteDisplay("");
//       setImageFiles([]);
//       onClose();

//     } catch (error) {
//       console.error("Error adding product:", error);
//       window.location.reload()
//       alert("There was an error adding the product. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal
//       title={<div style={{ textAlign: "center" }}>Add Product</div>}
//       open={isVisible}
//       onCancel={onClose}
//       footer={null}
//       closeIcon={<CloseOutlined style={{ fontSize: "16px" }} />}
//       centered
//     >
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="title" style={{ color: "#9B80FD", fontSize: "21px" }}>Title</label>
//           <input
//             placeholder="Enter a Title"
//             type="text"
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="slogan" style={{ color: "#9B80FD", fontSize: "21px" }}>Slogan</label>
//           <input
//             placeholder="Enter a Slogan"
//             type="text"
//             id="slogan"
//             value={slogan}
//             onChange={(e) => setSlogan(e.target.value)}
//             style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="price" style={{ color: "#9B80FD", fontSize: "21px" }}>Price</label>
//           <input
//             placeholder="Enter Price in Numbers"
//             type="number"
//             id="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="description" style={{ color: "#9B80FD", fontSize: "21px" }}>Description</label>
//           <textarea
//             placeholder="Enter a Description"
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "150px", resize: "none", color: "black", padding: "10px" }}
//           ></textarea>
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="reviews" style={{ color: "#9B80FD", fontSize: "21px" }}>Reviews</label>
//           <input
//             placeholder="Enter Reviews in Numbers"
//             type="number"
//             id="reviews"
//             value={reviews}
//             onChange={(e) => setReviews(e.target.value)}
//             style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label style={{ color: "#9B80FD", fontSize: "21px" }}>Category For Website Display</label>
//           <select
//             value={categoryForWebsiteDisplay}
//             onChange={(e) => setCategoryForWebsiteDisplay(e.target.value)}
//             style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }}
//           >
//             {
//               categoryWebsite.map((category) => (
//                 <option value={category.Category}>{category.Category}</option>
//               ))
//             }
//           </select>
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="category" style={{ color: "#9B80FD", fontSize: "21px" }}>Category</label>
//           <select
//             placeholder="Enter A Category Of Product"
//             type="text"
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }}
//           >
//             {
//               ProductCategry.map((product, index) => (
//                 <option value={product.Category} key={index}>{product.Category}</option>
//               ))
//             }
//           </select>
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label htmlFor="image" style={{ color: "#9B80FD", fontSize: "21px" }}>Images</label>
//           <input
//             type="file"
//             id="image"
//             multiple
//             onChange={handleImageChange}
//             style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "40px", color: "black", padding: "10px" }}
//           />
//         </div>

//         <div>
//           <button style={{ backgroundColor: "#9B80FD", border: "none", color: "white", width: "100%", height: "50px", marginTop: "30px" }} type="submit">
//             {loading ? "Adding..." : "Add Product"}
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );

// };

// export default AddProductModal;

import React, { useState } from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "react-quill/dist/quill.snow.css";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { app } from "../../Firebase/firebase";
import { ProductCategry } from "../pages/Home";
import ReactQuill from "react-quill";
const AddProductModal = ({ isVisible, onClose }) => {
  const categoryWebsite = [
    { Category: "All Products" },
    { Category: "Trending Products" },
    { Category: "Latest Products" },
  ];

  // const quillModules = {
  //   toolbar: [
  //     ["bold", "italic", "underline"],
  //     [{ list: "ordered" }, { list: "bullet" }],
  //     ["link", "image"],
  //   ],
  // };

  const [title, setTitle] = useState("");
  const [slogan, setSlogan] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [reviews, setReviews] = useState("");
  const [category, setCategory] = useState(ProductCategry[0].Category);
  const [categoryForWebsiteDisplay, setCategoryForWebsiteDisplay] = useState(
    categoryWebsite[0].Category
  );
  const [keywords, setKeywords] = useState(""); // New state for keywords input
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const storage = getStorage(app);
  const firestore = getFirestore(app);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles(files);
  };

  const uploadImagesToFirebase = async (imageFiles) => {
    const uploadPromises = imageFiles.map((file) => {
      const storageRef = ref(storage, `${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          },
          (error) => reject(error),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
              resolve(downloadURL)
            );
          }
        );
      });
    });

    return Promise.all(uploadPromises);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (imageFiles.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    setLoading(true);

    try {
      // Upload images and get their URLs
      const imageUrls = await uploadImagesToFirebase(imageFiles);

      const collectionRef = collection(firestore, "All Products");

      // Create a new document reference to generate the ID
      const newDocRef = doc(collectionRef);

      const productData = {
        _id: newDocRef.id, // Use the Firestore-generated ID here
        name: title,
        slogan: slogan,
        price: price,
        description: description,
        metaDescription: metaDescription,
        reviews: reviews,
        category: category,
        images: imageUrls,
        createdAt: new Date().toLocaleDateString(),
        collectionName: categoryForWebsiteDisplay,
        keywords: keywords.split(",").map((keyword) => keyword.trim()), // Convert keywords to an array
      };

      // Write the product data to Firestore
      await setDoc(newDocRef, productData);

      alert("Product added successfully!");

      // Reset form fields
      setTitle("");
      setSlogan("");
      setPrice("");
      setDescription("");
      setMetaDescription("");
      setReviews("");
      setCategory("");
      setCategoryForWebsiteDisplay("");
      setKeywords(""); // Reset keywords field
      setImageFiles([]);
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
      alert("There was an error adding the product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={<div style={{ textAlign: "center" }}>Add Product</div>}
      open={isVisible}
      onCancel={onClose}
      footer={null}
      closeIcon={<CloseOutlined style={{ fontSize: "16px" }} />}
      centered
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="title" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Title
          </label>
          <input
            placeholder="Enter a Title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="slogan"
            style={{ color: "#9B80FD", fontSize: "21px" }}
          >
            Slogan
          </label>
          <input
            placeholder="Enter a Slogan"
            type="text"
            id="slogan"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="price" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Price
          </label>
          <input
            placeholder="Enter Price in Numbers"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>
        {/* <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description" style={{ color: "#9B80FD", fontSize: "21px" }}>Description</label>
          <textarea
            placeholder="Enter a Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%", border: "1px solid #9B80FD", outline: "none", height: "150px", resize: "none", color: "black", padding: "10px" }}
          ></textarea>
        </div> */}

        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="description"
            style={{ color: "#9B80FD", fontSize: "21px" }}
          >
            Description
          </label>
          <div
            style={{
              border: "1px solid #9B80FD",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              placeholder="Enter a detailed product description"
              style={{
                height: "450px", // Adjust as needed
                backgroundColor: "white",
                color: "black",
                fontSize: "14px",
              }}
              
            />
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="reviews"
            style={{ color: "#9B80FD", fontSize: "21px" }}
          >
            Reviews
          </label>
          <input
            placeholder="Enter Reviews in Numbers"
            type="number"
            id="reviews"
            value={reviews}
            onChange={(e) => setReviews(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ color: "#9B80FD", fontSize: "21px" }}>
            Category For Website Display
          </label>
          <select
            value={categoryForWebsiteDisplay}
            onChange={(e) => setCategoryForWebsiteDisplay(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          >
            {categoryWebsite.map((category) => (
              <option value={category.Category}>{category.Category}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="category"
            style={{ color: "#9B80FD", fontSize: "21px" }}
          >
            Category
          </label>
          <select
            placeholder="Enter A Category Of Product"
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          >
            {ProductCategry.map((product, index) => (
              <option value={product.Category} key={index}>
                {product.Category}
              </option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="image" style={{ color: "#9B80FD", fontSize: "21px" }}>
            Images
          </label>
          <input
            type="file"
            id="image"
            multiple
            onChange={handleImageChange}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="keywords"
            style={{ color: "#9B80FD", fontSize: "21px" }}
          >
            Keywords
          </label>
          <input
            placeholder="Enter keywords separated by commas"
            type="text"
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "40px",
              color: "black",
              padding: "10px",
            }}
          />
        </div>

        {/* Existing input fields */}
        {/* Meta Description Field */}
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="metaDescription"
            style={{ color: "#9B80FD", fontSize: "21px" }}
          >
            Meta Description
          </label>
          <textarea
            placeholder="Enter a meta description for SEO"
            id="metaDescription"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            style={{
              width: "100%",
              border: "1px solid #9B80FD",
              outline: "none",
              height: "80px",
              resize: "none",
              color: "black",
              padding: "10px",
            }}
          ></textarea>
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#9B80FD",
              color: "white",
              border: "none",
              height: "40px",
              cursor: "pointer",
            }}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddProductModal;
