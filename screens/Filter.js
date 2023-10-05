// import React, { useState } from "react";
// import { View, Text, Image, TouchableOpacity } from "react-native";

// const Filter = (props) => {
//   const { section, children } = props;

//   const [filterStatus, setFilterStatus] = useState(false);
//   const openFilter = () => setFilterStatus(!filterStatus);

//   return (
//     <View style={styles.filter}>
//       <View style={styles.head}>
//         <Text style={styles.section}>{section}</Text>
//         <TouchableOpacity onPress={openFilter}>
//           <Image
//             style={styles.plus}
//             source={filterStatus ? require('/img/minus.png') : require('/img/Vector.png')}
//           />
//         </TouchableOpacity>
//       </View>
//       <View
//         style={
//           filterStatus
//             ? { height: children.length * 24 }
//             : { height: 0 }
//         }
//       >
//         {children}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   filter: {
//     width: 200,
//     borderWidth: 1,
//     borderColor: "black",
//     borderRadius: 12,
//     display: "flex",
//     padding: 10,
//     marginBottom: 10,
//     flexDirection: "column",
//   },
//   section: {
//     fontSize: 20,
//     color: "rgba(56, 71, 11, 1)",
//   },
//   plus: {
//     marginLeft: "auto",
//   },
// });

// export default Filter;