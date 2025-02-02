
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const ListPostsPage = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/posts");
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleDelete = async (postId) => {
//     try {
//       // Send DELETE request to server to delete the post
//       const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`);
//       if (response.status === 200) {
//         // Remove the post from the local state (frontend) after successful deletion
//         setPosts(posts.filter((post) => post._id !== postId));
//         alert("Post deleted successfully!");
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       alert("Failed to delete the post.");
//     }
//   };

//   const handleEdit = (post) => {
//     // Redirect to AddPostPage and pass the post data as state
//     navigate("/add-post", { state: { post } });
//   };

//   return (
//     <div className="list-posts-page">
//       <h2>All Blog Posts</h2>
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//         {posts.map((post) => (
//           <li
//             key={post._id}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               border: "1px solid #ddd",
//               padding: "10px",
//               marginBottom: "10px",
//               borderRadius: "5px",
//               boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//             }}
//           >
//             <div>
//               <h3 style={{ margin: "0 0 5px 0" }}>{post.title}</h3>
//               {post.imageUrl && (
//                 <img
//                   src={post.imageUrl}
//                   alt={post.title}
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     objectFit: "cover",
//                     borderRadius: "5px",
//                     marginBottom: "5px",
//                   }}
//                 />
//               )}
//               <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>{post.description}</p>
//             </div>
//             <div style={{ display: "flex", gap: "10px" }}>
//               <button
//                 onClick={() => handleEdit(post)}
//                 style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#007bff",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(post._id)}
//                 style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#dc3545",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListPostsPage;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const ListPostsPage = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/posts");
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleDelete = async (postId) => {
//     try {
//       // Send DELETE request to server to delete the post
//       const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`);
//       if (response.status === 200) {
//         // Remove the post from the local state (frontend) after successful deletion
//         setPosts(posts.filter((post) => post._id !== postId));
//         alert("Post deleted successfully!");
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       alert("Failed to delete the post.");
//     }
//   };

//   const handleEdit = (post) => {
//     // Redirect to AddPostPage and pass the post data as state
//     navigate("/add-post", { state: { post } });
//   };

//   return (
//     <div className="list-posts-page" style={{ background: "linear-gradient(to bottom right, #ff7eb9, #ff65a3, #ff3385)", minHeight: "100vh", padding: "20px" }}>
//       <h2 style={{ color: "#fff", textAlign: "center", fontFamily: "Arial, sans-serif" }}>All Blog Posts</h2>
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//         {posts.map((post) => (
//           <li
//             key={post._id}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               border: "1px solid #ddd",
//               padding: "10px",
//               marginBottom: "10px",
//               borderRadius: "5px",
//               boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//               backgroundColor: "#ffffffb0",
//               color: "#333",
//             }}
//           >
//             <div>
//               <h3 style={{ margin: "0 0 5px 0" }}>{post.title}</h3>
//               {post.imageUrl && (
//                 <img
//                   src={post.imageUrl}
//                   alt={post.title}
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     objectFit: "cover",
//                     borderRadius: "5px",
//                     marginBottom: "5px",
//                   }}
//                 />
//               )}
//               <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>{post.description}</p>
//             </div>
//             <div style={{ display: "flex", gap: "10px" }}>
//               <button
//                 onClick={() => handleEdit(post)}
//                 style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#007bff",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(post._id)}
//                 style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#dc3545",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListPostsPage;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const ListPostsPage = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/posts");
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleDelete = async (postId) => {
//     try {
//       // Send DELETE request to server to delete the post
//       const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`);
//       if (response.status === 200) {
//         // Remove the post from the local state (frontend) after successful deletion
//         setPosts(posts.filter((post) => post._id !== postId));
//         alert("Post deleted successfully!");
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       alert("Failed to delete the post.");
//     }
//   };

//   const handleEdit = (post) => {
//     // Redirect to AddPostPage and pass the post data as state
//     navigate("/add-post", { state: { post } });
//   };

//   return (
//     <div className="list-posts-page" style={{ background: "linear-gradient(to bottom right, #ff9bd3, #ff80a9, #ff66b2)", minHeight: "100vh", padding: "20px" }}>
//       <h2 style={{ color: "#fff", textAlign: "center", fontFamily: "Arial, sans-serif" }}>All Blog Posts</h2>
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//         {posts.map((post) => (
//           <li
//             key={post._id}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               border: "1px solid #ddd",
//               padding: "10px",
//               marginBottom: "10px",
//               borderRadius: "5px",
//               boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//               backgroundColor: "#ffffffb0",
//               color: "#333",
//             }}
//           >
//             <div>
//               <h3 style={{ margin: "0 0 5px 0" }}>{post.title}</h3>
//               {post.imageUrl && (
//                 <img
//                   src={post.imageUrl}
//                   alt={post.title}
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     objectFit: "cover",
//                     borderRadius: "5px",
//                     marginBottom: "5px",
//                   }}
//                 />
//               )}
//               <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>{post.description}</p>
//             </div>
//             <div style={{ display: "flex", gap: "10px" }}>
//               <button
//                 onClick={() => handleEdit(post)}
//                 style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#007bff",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(post._id)}
//                 style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#dc3545",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListPostsPage;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const ListPostsPage = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/posts");
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleDelete = async (postId) => {
//     try {
//       // Send DELETE request to server to delete the post
//       const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`);
//       if (response.status === 200) {
//         // Remove the post from the local state (frontend) after successful deletion
//         setPosts(posts.filter((post) => post._id !== postId));
//         alert("Post deleted successfully!");
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       alert("Failed to delete the post.");
//     }
//   };

//   const handleEdit = (post) => {
//     // Redirect to AddPostPage and pass the post data as state
//     navigate("/add-post", { state: { post } });
//   };

//   return (
//     <div className="list-posts-page" style={{ background: "#ffffff", minHeight: "100vh", padding: "20px" }}>
//       <h2 style={{ color: "#333", textAlign: "center", fontFamily: "Arial, sans-serif" }}>All Blog Posts</h2>
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//         {posts.map((post) => (
//           <li
//             key={post._id}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               border: "1px solid #ddd",
//               padding: "10px",
//               marginBottom: "10px",
//               borderRadius: "5px",
//               boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//               backgroundColor: "#ffffffb0",
//               color: "#333",
//             }}
//           >
//             <div>
//               <h3 style={{ margin: "0 0 5px 0" }}>{post.title}</h3>
//               {post.imageUrl && (
//                 <img
//                   src={post.imageUrl}
//                   alt={post.title}
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     objectFit: "cover",
//                     borderRadius: "5px",
//                     marginBottom: "5px",
//                   }}
//                 />
//               )}
//               <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>{post.description}</p>
//             </div>
//             <div style={{ display: "flex", gap: "10px" }}>
//               <button
//                 onClick={() => handleEdit(post)}
//                 style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#007bff",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(post._id)}
//                 style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#dc3545",
//                   color: "white",
//                   border: "none",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListPostsPage;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const ListPostsPage = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/posts");
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleDelete = async (postId) => {
//     try {
//       // Send DELETE request to server to delete the post
//       const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`);
//       if (response.status === 200) {
//         // Remove the post from the local state (frontend) after successful deletion
//         setPosts(posts.filter((post) => post._id !== postId));
//         alert("Post deleted successfully!");
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       alert("Failed to delete the post.");
//     }
//   };

//   const handleEdit = (post) => {
//     // Redirect to AddPostPage and pass the post data as state
//     navigate("/add-post", { state: { post } });
//   };

//   return (
//     <div className="list-posts-page" style={{
//       background: "#ffffff", 
//       minHeight: "100vh", 
//       display: "flex", 
//       justifyContent: "center", 
//       alignItems: "center", 
//       padding: "20px"
//     }}>
//       <div style={{ width: "80%", maxWidth: "1000px" }}>
//         <h2 style={{ color: "#333", textAlign: "center", fontFamily: "Arial, sans-serif" }}>All Blog Posts</h2>
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {posts.map((post) => (
//             <li
//               key={post._id}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 border: "1px solid #ddd",
//                 padding: "15px",
//                 marginBottom: "10px",
//                 borderRadius: "8px",
//                 boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                 backgroundColor: "#ffffffb0",
//                 color: "#333",
//               }}
//             >
//               <div>
//                 <h3 style={{ margin: "0 0 5px 0" }}>{post.title}</h3>
//                 {post.imageUrl && (
//                   <img
//                     src={post.imageUrl}
//                     alt={post.title}
//                     style={{
//                       width: "100px",
//                       height: "100px",
//                       objectFit: "cover",
//                       borderRadius: "5px",
//                       marginBottom: "5px",
//                     }}
//                   />
//                 )}
//                 <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>{post.description}</p>
//               </div>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <button
//                   onClick={() => handleEdit(post)}
//                   style={{
//                     padding: "5px 10px",
//                     backgroundColor: "#007bff",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(post._id)}
//                   style={{
//                     padding: "5px 10px",
//                     backgroundColor: "#dc3545",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ListPostsPage;
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const ListPostsPage = () => {
//   const [posts, setPosts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/posts");
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleDelete = async (postId) => {
//     try {
//       // Send DELETE request to server to delete the post
//       const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`);
//       if (response.status === 200) {
//         // Remove the post from the local state (frontend) after successful deletion
//         setPosts(posts.filter((post) => post._id !== postId));
//         alert("Post deleted successfully!");
//       }
//     } catch (error) {
//       console.error("Error deleting post:", error);
//       alert("Failed to delete the post.");
//     }
//   };

//   const handleEdit = (post) => {
//     // Redirect to AddPostPage and pass the post data as state
//     navigate("/add-post", { state: { post } });
//   };

//   return (
//     <div className="list-posts-page" style={{
//       background: "#ffffff", 
//       minHeight: "100vh", 
//       display: "flex", 
//       justifyContent: "center", 
//       alignItems: "center", 
//       padding: "20px"
//     }}>
//       <div style={{ width: "80%", maxWidth: "1000px" }}>
//         <h2 style={{ color: "#333", textAlign: "center", fontFamily: "Arial, sans-serif" }}>All Blog Posts</h2>
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {posts.map((post) => (
//             <li
//               key={post._id}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 border: "1px solid #ddd",
//                 padding: "15px",
//                 marginBottom: "10px",
//                 borderRadius: "8px",
//                 boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                 backgroundColor: "#ffffffb0",
//                 color: "#333",
//                 textAlign: "center" // Centers the title
//               }}
//             >
//               <div>
//                 <h3 style={{ margin: "0 0 5px 0", textAlign: "center" }}>{post.title}</h3>
//                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                   {post.imageUrl && (
//                     <img
//                       src={post.imageUrl}
//                       alt={post.title}
//                       style={{
//                         width: "150px",  // Increased width
//                         height: "150px", // Increased height
//                         objectFit: "cover",
//                         borderRadius: "5px",
//                         marginBottom: "5px",
//                       }}
//                     />
//                   )}
//                 </div>
//                 <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>{post.description}</p>
//               </div>
//               <div style={{ display: "flex", gap: "10px" }}>
//                 <button
//                   onClick={() => handleEdit(post)}
//                   style={{
//                     padding: "5px 10px",
//                     backgroundColor: "#007bff",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(post._id)}
//                   style={{
//                     padding: "5px 10px",
//                     backgroundColor: "#dc3545",
//                     color: "white",
//                     border: "none",
//                     cursor: "pointer",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ListPostsPage;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ListPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://my-blog-api-ashen.vercel.app/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(`https://my-blog-api-ashen.vercel.app/api/posts/${postId}`);
      if (response.status === 200) {
        setPosts(posts.filter((post) => post._id !== postId));
        alert("Post deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post.");
    }
  };

  const handleEdit = (post) => {
    navigate("/add-post", { state: { post } });
  };

  const handleNewPost = (newPost) => {
    // Add the new post to the middle of the posts array
    const middleIndex = Math.floor(posts.length / 2);
    const updatedPosts = [
      ...posts.slice(0, middleIndex),
      newPost,
      ...posts.slice(middleIndex),
    ];
    setPosts(updatedPosts);
  };

  return (
    <div
      className="list-posts-page"
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ width: "80%", maxWidth: "1000px" }}>
        <h2
          style={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          All Blog Posts
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {posts.map((post) => (
            <li
              key={post._id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                backgroundColor: "#ffffffb0",
                color: "#333",
                textAlign: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0 0 5px 0",
                    textAlign: "center",
                  }}
                >
                  {post.title}
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        marginBottom: "5px",
                      }}
                    />
                  )}
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    fontSize: "14px",
                  }}
                >
                  {post.description}
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleEdit(post)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListPostsPage;
