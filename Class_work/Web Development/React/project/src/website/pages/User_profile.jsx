import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';

function User_profile() {

    const redirect=useNavigate();
    useEffect(() => {
        getData();
    }, []);

    const [user, setUsers] = useState({});

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('u_id')}`);
        console.log(res.data);
        setUsers(res.data);
    }
  return (
    <div>
             <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="breadcrumb"><a href="#">Home</a> /My Profile</span>
                            <h3>My Profile</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section best-deal">
                <div className="container">
                      <h1 className='mt-3 mb-3'>My Account</h1>
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                  
                                    <div className="tab-content" id="myTabContent">
                                       
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="info-table">
                                                        <ul>
                                                            <li>ID <span>{user.id}</span></li>
                                                            <li>Name <span>{user.name}</span></li>
                                                            <li>Email<span>{user.email}</span></li>
                                                            <li>Mobile<span>{user.mobile}</span></li>
                                                            <li>Password<span>{user.password}</span></li>
                                                            <li><button className='btn btn-primary' onClick={()=>redirect('/edit_profile/'+user.id) }>EDIT</button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <img  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQYFBwIDBAj/xAA3EAABAwMCAwYEBQQCAwAAAAABAAIDBAUREiEGMUEHE1FhcYEiMpGhFEJSsdEVI8HhgvElM/D/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQMEAv/EAB8RAQEAAwEAAwADAAAAAAAAAAABAhEhAxIiMQRBUf/aAAwDAQACEQMRAD8A2wiIuXQiIgIiICHYHyT91QuNOLJGGajtVSyBsR0T1fP4v0s8/EqLdJk2rvaVcZ6m7/gScRxk4Z1xtkn1H2VIBdGXzlpcdZG46AYA/wDvJZG2U894vLYY9bpNWoyvPxb+KvreBqFsLRUSSkjchhABKpuel2PncpxqcVbcjvYWPLt3ZH2XKZrXkCkbIHYy5upbSbwhZIna/wALI4jo5+xVTvdgbBVulpmSxb/l5BJ7Yur/AB81ao6kU8neOwHdXFmd165KmOpmaaQuEzSCwMyA1w/MPA8t11T5ilIZpDycOYdwfPdeR/fwnOnSM8wMBWcqiyxvbgLiU3qifS1rwLhS7PB2MjOjv8H/AGrVkHGF89Wa61dFUU9zhe5tRTEBu+zm/px4LelgvNJfraytonfCfhew843Dm0rqUsZFERS5QpREEKFKIOaIiAiIgIiIMDxneBaLJM+OQMqJcRRHqCeZ9hn3wtLuMjpi6UgMYCWsJG3m4+P8rY/a5Q1Eltpq2DSWQOIkB5YPI/ULWDpWmz1JdpDxI3U4dR4D7H2VeSzFd+ymgdLLVXCQBwd8IdhbGqRE2M63AKvcMGksXCdFJUvbD3kQkdqOMat/8rz13F9hALZazU7wa0nCqq/Gfm3vlfC4lrXheGpbTu2kwuuE01diWjkL2dSCuNzkpKGDVVztYCs+uts1I81Rwta7qMuGgnk5vMKj8SWKewVQge4uZKCY5GuwTjor3ZeIbK2Tu/x0YcdvjOFw7R4Yp7LT12A8Qv5jfY/9K/DcZPSY28aujlfHqDJXNk5YcBj6hbG7Iat/9TuFMfha6Bry3GxcDjP0IC1xM6M1J04I8MkY9CtgdkD+8vteCXEx0ob8Ts4Bd/paIyf02wiIunIoREBEUFB2IiICIiAiIgwvGdDLceFrlS07dcz4SY2jmXAgge+FpG2w1dHdGUktK1z++7lweMhr3HTkdCW819B1bdVJO0Dcxux57LWVTbxFxVY2922ISxsmeB1eBv6cgqs8tVd54bm2SqLCxtnbU1QmmqHN1mKMn5jz+ypN2ujYqiOmisdNC0jcysOR6+C25XB7aOVg+F2n4HBURodVT6bpP3kTOZf83+1TctXsaccLlOV3WMhtjNVQQmKpkB0QRjLXkHBz4eORj3VKu1zqnTOFw/uBxGloO37fZbVg0U1jc/uO4a7aFhb8Qb5+p3VM42t1FM2kmI0slYdcrG794PHxGOiYa30zmXw4q8E1tire4qKcPOxL4nZHptnKtEEBrbVI22zSTUjstMLjsDyAc3lsSFgeHaN0dUTDOS0Ho0Z91sq1QNmDnta0uBDpZQPmI5DPU5U5ZfbUc4YfXdaekjZ/VJ42xmHu3lndv33Gx/ZbD7GKcGrvFVoLNIjiwfc/5Crtwo6R/HclPV5MMlR8Zb+UO21ffmtj9nkTqenuNK9oP4WpMDJdOC9jc4z6ZV2OXYz3z5b/AItqIisVIREQFCkqES7EREQIiICIiCHDLHN8QVVauzTVtfS3J9Q0fhXZjYG76ORB/f2VrXRPSskjcMuHXAO2VXnh8lnnn8dxwGHNOoZBHVVWOUVl9LKeGJtPDvLJoG56DKs7j/Y89PJa5lvFNSXo0NU2drXuawFjctLnbbnYAeZVPp2yNPjZJas1wr6KGkkE27mOBA7wEn2yqZc7va7rQT0E1PO19OHPZI0basHBVjv3D3fUesUNQdHxfDI0/QAqjXO3m3iSqrLZWU0bdnPJaccue+/MJMerLl9f118GUjnxmpkLJG5w5o5j1W0IquIUzIYQBpG4C1XwhFUf1OOppnEU0shY9vLUzmcjy2V+p3gOBadtJyuPS2U89ZYdVy92CqdVi80GZquWpJZE3Yta0fToeq2XwxHi3Pmc0NkqJnSSAfq5H7grFWO111ZS9/USwx0z3numaMnu+Wc55nc+hCtFPDHTQRwQtDY426WgdArvPG73Wf1zx+OsXYoUlQr2ZCIhQQiKOqJdiIiISihSgIiICZREHhe3Q98buXMeiwM9to566d1TC2Tvm6HamjGnw3VjrY9fy/PpOFXJnva6RjiWSNzjP2Pos/pOtXllxj71PLaoGw0dfUwgDk7L2keA5qtvrI7o2U3eR9ZGxxe1j3ENB26eyzXEExlp2RSSkk7ERu8eir0clHTaqXJD98nmcKuWtF/Hks0jxU1McEYjYQclvQ55DyA2VntUMlS4U8Lv70mzS47Nz1Vfhc2KofTUpzqO56jkr7wlRCnfG52DI77bJreSvdmNWagpY6Ghp6SDaOCMMbk52C70Ra9MQVCkqFKEIihEihCiDsRERAiIgIiIJRQpQdc3NnusfcbaysaGlxZIM6Ht5tKyEoPwH1UH5mlV2bWS6a2vFiuzHuDYxNvjVG8NyPQqomxXeauIfCYMbkk5wFu2uxGx0hOkNG5VVDhPUyuzu7zycLPlbhWnCTPHqsWW2tpnGNoLsu+OQndy2FZ2COWHPU9fRYuGhjixgAHrhZVrT3OAd+h6hRjve66z18fjGcKLAVXFVBbZaeG7F9N350NnLMxud4Ej5fcY81nGPbIxr43BzHbtc05B91sl31hs1dORUKPVMqQyoKKEEqERB2KVxREOSKEHkglFjbrfbVZmg3Svgpi7cNe/4j7c1ULp2sWWmBbboJ62QbZI7tn1O/2QbBz4rHXe+22zxl1wq44j0YDqefRo3Wl732lX65ao4JvwMB/LTnBP/Ln9MKsRVT3yvmle6SQ7lz3Ek/7U6Q+hOHbu+/wy18TO7pe8McLH/NpbkFxxyyengFmeeCtBcMcbV3Dcj2wAT0r3ZdC84wepB6LZVs7TeHKuNv4ieSikPzNmYcD3Gy4s672ynFhrJaeOCmjGHO+JxdheG02l0TDJO4k+S5VnG/CpZl15p3DwZlx+mFXrr2pWaJojttLV1eBs9wETfvv9lTfO27Xz1kx0trosYxyHgsffeJ7Xw/TONZOHTY+Cnjw6R59OnqcLWl67Q7xXsMdHot8ZG5hOp5/5Hl7AKoPcXvL3uLnu5ucck+pK7x8tfrjL23+MrxLf6ziGvNTUksibtDA05awfz5ru4f4rvVg1Ntta5sTucMg1sz44PL2WCU52VsknIottu62pZO1qUzsZfKKLujs6alzlvnpPMe+fVbOoqunrqVlTRzMmheMtew5C+Xg7CzFi4muVikMluqJIwfmj5td6tO3vzUkr6PULWVk7WYJXMivFE5mec8G492/wti2+upblSsq6Cojngfyew5HoodPSihEHYijKZRDouFdTW6hnrK2VsVPCwue49AP8rUfFnanV1ofTWCN9HDkg1DzmR3oOTf39F5+0vip95qZaGkf/AOOp36W6T/7Xjm4+XQfVUEjClFqZXvllfLK90kjzl73uLnOPiSea4phEQbKc45beihEHIvDubRlccDxKKCgnZRlEQEREBERAREQFl7BxDX2GrFRb53Rn87Dux/qOqxCIPoDgjjKm4pp5B3Qpq6DHeQ6s6h+pvXTn6Kzr5msd0qbLdILhROxNCeR5OaebT5FfRlkuUV5tNJcYAWsqIw/QebD1B9DsjqVkFgOOrobTwvXTxu0zyM7qIjmHO2z7DJ9lnwtW9sNz1VNJbGO2jZ30oHVzjho9gCfdQNaTOzGGjkV5yF2SHUCeQDgoI2PkunLqXErsHiuKgcUREBQpUICIiAiIgIiICIiAiIgkLd3ZBX/i+Fn0r3Evo5yzf9LviH7laQWxuxWt7q9V1GTtUU4ePVh/hxRMbkHNaD7QaiSfim5OkdktqNA8gAAEREqw7kB4krhkmInxdhEUuR+2nCjoiKBxCIiAiIghERAREQEREBERAREQFaOzOV0XGlt0H53OY70LT/CIiY//2Q==" alt />
                                                </div>
                                               
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            
        
        </div>
  )
}

export default User_profile