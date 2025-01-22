import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import {View, TextInput, Button, Text, TouchableOpacity, Label} from "react-native";
import {Picker} from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addTransaction } from "../../redux/transactions/transactionsOperations";

// Валидационные схемы
const incomeSchema = Yup.object().shape({
    sum: Yup.number().required("Required"),
    date: Yup.date().required("Required"),
    comment: Yup.string().max(25).notRequired(),
});

const expenseSchema = Yup.object().shape({
    sum: Yup.number().required("Required"),
    date: Yup.date().required("Required"),
    comment: Yup.string().required(),
    category: Yup.string().max(25).notRequired(),
});

// IncomeForm
export const IncomeForm = ({ toggleModal }) => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{ sum: "", date: new Date(), comment: "", type: "+" }}
            validationSchema={incomeSchema}
            onSubmit={(values) => {
                dispatch(addTransaction(values));
                toggleModal();
            }}
        >
            {({ handleChange, values, setFieldValue, handleSubmit }) => (
                <View style={{ padding: 20 }}>
                    <TextInput
                        style={{
                            borderBottomWidth: 1,
                            marginBottom: 15,
                            padding: 10,
                        }}
                        placeholder="0.00"
                        keyboardType="numeric"
                        onChangeText={handleChange("sum")}
                        value={values.sum}
                    />
                    <DateTimePicker
                        value={values.date}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) =>
                            setFieldValue("date", selectedDate || values.date)
                        }
                    />
                    <TextInput
                        style={{
                            borderBottomWidth: 1,
                            marginTop: 15,
                            padding: 10,
                        }}
                        multiline
                        placeholder="Comment"
                        onChangeText={handleChange("comment")}
                        value={values.comment}
                    />
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <Button title="Add" onPress={handleSubmit} />
                        <Button title="Cancel" onPress={toggleModal} />
                    </View>
                </View>
            )}
        </Formik>
    );
};

// ExpenseForm
export const ExpenseForm = ({ toggleModal }) => {
    const dispatch = useDispatch();
    const categories = [
        { label: "Main", value: "main" },
        { label: "Food", value: "food" },
        { label: "Auto", value: "auto" },
        { label: "Development", value: "development" },
        { label: "Children", value: "children" },
        { label: "House", value: "house" },
        { label: "Education", value: "education" },
        { label: "Reset", value: "reset" },
    ];

    console.log("dasdsadsadsad", toggleModal)

    return (
        <Formik
            initialValues={{
                category: "main",
                sum: "",
                date: new Date(),
                comment: "",
                type: "-",
            }}
            validationSchema={expenseSchema}
            onSubmit={(values) => {
                dispatch(addTransaction(values));
                toggleModal();
            }}
        >
            {({ handleChange, values, setFieldValue, handleSubmit }) => (
                <View style={{ padding: 20 }}>
                    <Text>Category:</Text>
                    <Picker
                        mode={'dialog'}
                        selectedValue={values.category}
                        onValueChange={(itemValue) => setFieldValue("category", itemValue)}
                        style={{ marginBottom: 15 }}
                    >
                        {categories.map((category) => (
                            <Picker.Item
                                key={category.value}
                                label={category.label}
                                value={category.value}
                            />
                        ))}
                    </Picker>

                    <Text>Value (money):</Text>
                    <TextInput
                        style={{
                            borderBottomWidth: 1,
                            marginBottom: 15,
                            padding: 10,
                        }}
                        placeholder="0.00"
                        keyboardType="numeric"
                        onChangeText={handleChange("sum")}
                        value={values.sum}
                    />
                    <DateTimePicker
                        value={values.date}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) =>
                            setFieldValue("date", selectedDate || values.date)
                        }
                    />
                    <TextInput
                        style={{
                            borderBottomWidth: 1,
                            marginTop: 15,
                            padding: 10,
                        }}
                        multiline
                        placeholder="Comment"
                        onChangeText={handleChange("comment")}
                        value={values.comment}
                    />
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <Button title="Add" onPress={handleSubmit} />
                        <Button title="Cancel" onPress={toggleModal} />
                    </View>
                </View>
            )}
        </Formik>
    );
};
