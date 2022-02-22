import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';

import DateTimerPicker from "@react-native-community/datetimepicker";
import { Container, Header } from './styles';


export default function DatePicker({date, onClose, onChange}) {
    const [dateNow, setDateNow] = useState(new Date(date));
    return (
        <Container>
            {Platform.OS === 'ios' && (
                <Header>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </Header>
            )}
            <DateTimerPicker
                value={dateNow}
                mode="date"
                display="default"
                // recebe o evento e a date
                onChange={(e, d) => {
                    const currentDate = d || dateNow;
                    setDateNow(currentDate);
                    onChange(currentDate);

                }}
                style={{ backgroundColor: 'white' }}

            />

        </Container>

    );
}