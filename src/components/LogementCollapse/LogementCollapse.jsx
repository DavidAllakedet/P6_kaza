// import React, { useState, useEffect } from 'react';
// import { useData } from '../../pages/Utiles/Hooks/Hooks';
// import { useParams } from 'react-router-dom'

// import Collapse from '../../components/Collapse/Collapse';
// import { useNavigate } from 'react-router-dom'
// import '../../styles/Logement.scss';
// //import { ReactComponent as IconeFleche } from '../../assets/arrow_back.svg';

// //import styled, { css } from 'styled-components';



// function Room() {
//   let data = useData()
//   const param = useParams()
//   const [openInfo, setOpenInfo] = useState([false, false])
//   const roomItem = data.find((item) => param.id === item.id)
//   // const [isopened, setisopened] = useState(0);
//   // const [initialrender, setinitialrender] = useState(1);
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (roomItem === undefined) navigate('/Error')
//   }, [roomItem, navigate])

//   // useEffect(() => {
//   //   setinitialrender(0);
//   // }, []); 

//   // const handleRotation = () => {
//   //   setisopened(!isopened);
//   // };

//   return (
//     <div className="roominfo3">
//         <Collapse
//           id={0}
//           open={openInfo}
//           setOpen={setOpenInfo}
//           text={<p>{roomItem.description}</p>}
//           title="Description"
//         />
//         <Collapse
//           id={1}
//           open={openInfo}
//           setOpen={setOpenInfo}
//           text={
//             <ul>
//               {roomItem.equipments.map((equip, index) => (
//                 <li key={index}>{equip}</li>
//               ))}
//             </ul>
//           }
//           title="Équipements"
//         />
//       </div>
//   );
// };

// export default Room;



