import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ListItem from '../../components/ListItem';

const TITLES = [
    'Ticket 1',
    'Ticket 2',
    'Ticket 3',
    'Ticket 4',
    'Ticket 5',

    'Ticket 1',
    'Ticket 2',
    'Ticket 3',
    'Ticket 4',
    'Ticket 5',
];

interface TicketInterface {
    title: string;
    index: number;
}

const TICKETS: TicketInterface[] = TITLES.map((title, index) => ({ title, index }));

const BACKGROUND_COLOR = '#FAFBFF';

export default function Help() {
    const [tickets, setTickets] = useState(TICKETS);

    const onDismiss = useCallback((ticket: TicketInterface) => {
        setTickets((tikets) => tickets.filter((item) => item.index !== ticket.index));
    }, []);

    const scrollRef = useRef(null);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Tickets</Text>
            <ScrollView ref={scrollRef} style={{ flex: 1 }}>
                {tickets.map((ticket) => (
                    <ListItem
                        simultaneousHandlers={scrollRef}
                        key={ticket.index}
                        ticket={ticket}
                        onDismiss={onDismiss}
                    />
                ))}
            </ScrollView>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    style={{ marginVertical: 20, width: 200, height: 50, backgroundColor: "green", padding: 10, alignItems: "center", justifyContent: "center", borderRadius: 10 }}
                    onPress={() => {}}
                >
                    <Text style={{ color: "#fff", fontSize: 20 }}>Nuevo Ticket</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR,
    },
    title: {
        fontSize: 25,
        marginVertical: 20,
        paddingLeft: '5%',
    },
});

export { TicketInterface };