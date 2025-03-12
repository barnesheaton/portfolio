import { Button, Drawer, Input, Radio } from "antd";
import { Table } from "antd";
import type { TableProps } from "antd";
import React, { useState } from "react";

import { getFlattenedCategoryOptions } from "@/app/utils/helper";

import { SearchOutlined } from "@ant-design/icons";

export interface SelectedCell {
  record: object | any;
  value: number;
  month: string;
}

export interface Props {
  selectedCell: SelectedCell;
}

interface DataType {
  key: number;
  date: string;
  type?: string;
  description?: string;
  debit?: number;
  credit?: number;
  total?: number;
  category: string;
}

export default function TableDrawer({
  selectedCell = {
    record: null,
    value: 0,
    month: "Jan",
  },
}: Props) {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingLeft: "24px",
  };

  const [drawer, serDrawer] = useState(false);

  const showDrawer = () => {
    serDrawer(true);
  };

  const onDrawerClose = () => {
    serDrawer(false);
  };

  const tableCols: TableProps<DataType>["columns"] = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Debit",
      dataIndex: "debit",
      key: "debit",
    },
    {
      title: "Credit",
      dataIndex: "credit",
      key: "credit",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => (
        <Button
          size="small"
          color="default"
          variant="filled"
          shape="round"
          onClick={() => {
            showDrawer();
          }}
        >
          <span>{text}</span>
        </Button>
      ),
    },
  ];

  const tableData: DataType[] = [
    {
      key: 1,
      date: "4/05/23",
      type: "Transaction",
      description: selectedCell.record.lineItem,
      debit: selectedCell.value,
      category: selectedCell.record.lineItem,
    },
  ];

  const categoryOptions = getFlattenedCategoryOptions();

  return (
    <>
      <Table
        size="small"
        dataSource={tableData}
        columns={tableCols}
        scroll={{ x: "max-content" }}
        expandable={{
          defaultExpandAllRows: true,
        }}
        pagination={false}
      />
      <Drawer
        width={420}
        closable={false}
        onClose={onDrawerClose}
        open={drawer}
      >
        <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
        <div className="overflow-auto h-full p-0 -mx-6">
          {categoryOptions.map((option) => {
            return (
              <div key={option.parent}>
                <div className="py-3 px-6 mt-5 mb-2 bg-gray-200">
                  {option.parent}
                </div>
                <Radio.Group
                  style={style}
                  options={option.children.map((child: { item: any }) => ({
                    value: child.item,
                    label: child.item,
                  }))}
                />
              </div>
            );
          })}
        </div>
      </Drawer>
    </>
  );
}
