import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/store';
import { deletes } from '../state/state-all/account';
interface DataType {
    key: React.Key;
    name: string;
    age: number;
}

const App: React.FC = () => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const accountValue = useSelector((state: RootState) => state.account.value)

    const [chooseAccountValue, setChooseAccountValue] = useState<DataType[]>([])

    const dispatch = useDispatch()
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
    ];

    const data: DataType[] = [
        ...accountValue
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            setChooseAccountValue(selectedRows)
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    function myButton() {
        dispatch(deletes(chooseAccountValue))
    }

    return (
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />

            <button onClick={myButton}>delete</button>
        </div>
    );
};

export default App;