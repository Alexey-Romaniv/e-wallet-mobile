import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {addTransaction} from "../../redux/transactions/transactionsOperations";
import {ModalComment, ModalDate, ModalForm, ModalInput, SelectInput} from "./ModalFoms.styles";


const incomeSchema = Yup.object().shape({
    sum: Yup.number().required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().max(25).notRequired(),
});

const expenseSchema = Yup.object().shape({
    sum: Yup.number().required('Required'),
    date: Yup.date().required('Required'),
    comment: Yup.string().required(),
    category: Yup.string().max(25).notRequired('Required'),
});

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
                <ModalForm>
                    <ModalInput
                        placeholder="0.00"
                        keyboardType="numeric"
                        onChangeText={handleChange("sum")}
                        value={values.sum}
                    />
                    <ModalDate>
                        <DateTimePicker
                            value={values.date}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) =>
                                setFieldValue("date", selectedDate || values.date)
                            }
                        />
                    </ModalDate>
                    <ModalComment>
                        <ModalInput
                            multiline
                            placeholder="Comment"
                            onChangeText={handleChange("comment")}
                            value={values.comment}
                        />
                    </ModalComment>
                    <View>
                        <Button title="Add" onPress={handleSubmit} />
                        <Button title="Cancel" onPress={toggleModal} />
                    </View>
                </ModalForm>
            )}
        </Formik>
    );
};
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
                <ModalForm>
                    <SelectInput
                        selectedValue={values.category}
                        onValueChange={(itemValue) => setFieldValue("category", itemValue)}
                    >
                        {categories.map((category) => (
                            <Picker.Item
                                key={category.value}
                                label={category.label}
                                value={category.value}
                            />
                        ))}
                    </SelectInput>
                    <ModalInput
                        placeholder="0.00"
                        keyboardType="numeric"
                        onChangeText={handleChange("sum")}
                        value={values.sum}
                    />
                    <ModalDate>
                        <DateTimePicker
                            value={values.date}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) =>
                                setFieldValue("date", selectedDate || values.date)
                            }
                        />
                    </ModalDate>
                    <ModalComment>
                        <ModalInput
                            multiline
                            placeholder="Comment"
                            onChangeText={handleChange("comment")}
                            value={values.comment}
                        />
                    </ModalComment>
                    <View>
                        <Button title="Add" onPress={handleSubmit} />
                        <Button title="Cancel" onPress={toggleModal} />
                    </View>
                </ModalForm>
            )}
        </Formik>
    );
};
