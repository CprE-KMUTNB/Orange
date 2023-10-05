import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Checkbox from "@react-native-community/checkbox";
import axios from "axios";

// Define the getStatusColor function outside of the component
const getStatusColor = (status) => {
  switch (status) {
    case 'completed':
      return "#E67738";
    case 'on hold':
      return "#FAEBDC";
    case 'in progress':
      return "#f2a676";
    default:
      return "#000000";
  }
}

function Helppage() {
  const [searchFilter, setSearchFilter] = useState("");
  const [ticketData, setTicketData] = useState([
    {
      ticket_id: 153,
      subject: "can you help me",
      status: "completed",
      update: "1/2/3",
    },
  ]);

  useEffect(() => {
    const url = 'http://172.20.10.8:3600/ticket';
    axios
      .get(url)
      .then((response) => {
        setTicketData(response.data);
        console.log("ticketData");
        console.log(ticketData);
      })
      .catch((err) => {
        // Handle error or navigate to an error page in your React Native app
        console.error(err);
      });
  }, []);

  const tickets = ticketData
    .filter((ticket) => {
      if (searchFilter !== "") {
        return ticket.ticket_id === Number(searchFilter);
      } else {
        return true;
      }
    })
    // .map((ticket, index) => {
    //   return (
    //     <View key={index} style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}>
    //       <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    //         <Text style={{ textAlign: 'center' }}>{ticket.ticket_id}</Text>
    //         <Text style={{ marginLeft: 10 }}>{ticket.subject}</Text>
    //         <View style={{ flexDirection: 'row', alignItems: 'center', margin: 'auto' }}>
    //           <View style={{ width: 3, height: 3, borderRadius: 50, backgroundColor: getStatusColor(ticket.status), marginRight: 2 }} />
    //           <Text>{ticket.status}</Text>
    //         </View>
    //         <Text style={{ textAlign: 'center' }}>{ticket.update.slice(0, 10)}</Text>
    //       </View>
    //     </View>
    //   );
    // });

  return (
    <ScrollView>
      <View>
        <View style={{ backgroundColor: 'white', padding: 10 }}>
          <TextInput
            value={searchFilter}
            onChangeText={(text) => setSearchFilter(text)}
            style={{ height: 34, borderRadius: 5, padding: 8, backgroundColor: 'lightgray', borderColor: 'black', borderWidth: 1 }}
            placeholder="Find ticket..."
          />
        </View>
        <View style={{ backgroundColor: 'white', marginTop: 5, marginBottom: 5 }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Filter</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox />
            <Text>All</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox />
            <Text>On Hold</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox />
            <Text>In Progress</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox />
            <Text>Completed</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', marginTop: 5 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'gray' }}>
            <Text style={{ textAlign: 'center' }}>Ticket</Text>
            <Text style={{ marginLeft: 10 }}>Subject</Text>
            <Text style={{ textAlign: 'center' }}>Status</Text>
            <Text style={{ textAlign: 'center' }}>Last Update</Text>
          </View>
          {tickets}
        </View>
      </View>
    </ScrollView>
  );
}

export default Helppage;
