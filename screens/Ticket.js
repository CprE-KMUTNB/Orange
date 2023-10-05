import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Ticket(props) {
  const { ticket } = props;
  const [status, setStatus] = useState(false);

  const open = () => setStatus(!status);

  const colorStatus = () => {
    if (ticket.status === 'completed') {
      return "#E67738";
    } else if (ticket.status === 'on hold') {
      return "#FAEBDC";
    } else if (ticket.status === 'in progress') {
      return "#f2a676";
    }
  }

  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ textAlign: 'center' }}>{ticket.ticket_id}</Text>
        <Text style={{ marginLeft: 10 }}>{ticket.subject}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 'auto' }}>
          <View style={{ width: 3, height: 3, borderRadius: 50, backgroundColor: colorStatus(), marginRight: 2 }} />
          <Text>{ticket.status}</Text>
        </View>
        <Text style={{ textAlign: 'center' }}>{ticket.update.slice(0, 10)}</Text>
        <TouchableOpacity onPress={open}>
          <Text>{status ? '-' : '+'}</Text>
        </TouchableOpacity>
      </View>
      {status && (
        <View style={{ padding: 10 }}>
          {/* Add your ticket details here */}
        </View>
      )}
    </View>
  );
}

export default Ticket;
