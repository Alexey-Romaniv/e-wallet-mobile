import React from "react";
import { SelectContainer } from "./StatisticSelected.styles";
import { Picker } from "@react-native-picker/picker";

export const StatisticSelected = ({ setMonth, setYear }) => {
    const months = [
        { value: "01", label: "January" },
        { value: "02", label: "February" },
        { value: "03", label: "March" },
        { value: "04", label: "April" },
        { value: "05", label: "May" },
        { value: "06", label: "June" },
        { value: "07", label: "July" },
        { value: "08", label: "August" },
        { value: "09", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
    ];

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2023 + 1 }, (_, i) => {
        const year = currentYear - i;
        return { value: String(year), label: String(year) };
    });

    const handleChangeMonth = (value) => {
        setMonth(value || "");
    };

    const handleChangeYear = (value) => {
        setYear(value || "");
    };

    return (
        <SelectContainer>
            <Picker
                style={{ flex: 1, height: 50 }}
                selectedValue=""
                onValueChange={handleChangeMonth}
            >
                <Picker.Item label="Select Month" value="" />
                {months.map((month) => (
                    <Picker.Item key={month.value} label={month.label} value={month.value} />
                ))}
            </Picker>
            <Picker
                style={{ flex: 1, height: 50 }}
                selectedValue=""
                onValueChange={handleChangeYear}
            >
                <Picker.Item label="Select Year" value="" />
                {years.map((year) => (
                    <Picker.Item key={year.value} label={year.label} value={year.value} />
                ))}
            </Picker>
        </SelectContainer>
    );
};
