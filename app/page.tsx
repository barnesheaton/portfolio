"use client";

import { useState } from "react";
import { Table } from "antd";
import { Button, Drawer, Space } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import { SelectedCell } from "./tableDrawer";

import {
  months,
  seedData,
  randomArrayWithZeros,
  sumTwoArrays,
} from "@/app/utils/helper";

import TableDrawer from "./tableDrawer";

export default function Home() {
  const tableCols = [
    {
      title: "Account",
      dataIndex: "lineItem",
      key: "lineItem",
      width: 300,
      fixed: "left",
    },
    ...months.map((month) => ({
      title: month + " 2024",
      dataIndex: month.toLowerCase(),
      key: month.toLowerCase(),
      onCell: (record: { [x: string]: any }) => {
        return {
          onClick: () => {
            showDrawer();
            setSelectedCell({
              month: month,
              value: record[month.toLocaleLowerCase()],
              record,
            });
          },
        };
      },
    })),
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      width: 150,
      fixed: "right",
    },
  ];

  function populateTableDataRecursevily(childArray: any[]) {
    const result: {
      key: any;
      lineItem: any;
      children?: any[];
      amounts?: number[] | number[];
    }[] = [];

    childArray.forEach((child: { children?: any; item?: any }) => {
      if (Object.keys(child).includes("children")) {
        const tempChildren = populateTableDataRecursevily(child.children);
        let totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        tempChildren.forEach((child) => {
          totals = sumTwoArrays(totals, child.amounts);
        });

        result.push({
          key: child.item,
          lineItem: child.item,
          children: tempChildren,
          amounts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        });

        let totalItem = {
          key: "total-" + child.item,
          lineItem: "Total " + child.item,
          amounts: totals,
        };

        totals.forEach((amount, index) => {
          if (index == 12) {
            totalItem.total = amount;
          } else if (amount > 0) {
            totalItem[months[index].toLowerCase()] = amount;
          }
        });

        result.push(totalItem);
      } else {
        const item = {
          key: child.item,
          lineItem: child.item,
        };
        const amounts = randomArrayWithZeros(12, 0.6);
        amounts.forEach((amount, index) => {
          if (amount > 0) {
            item[months[index].toLowerCase()] = amount;
          }
        });

        const total = amounts.reduce((pv, cv) => pv + cv, 0);
        item.total = total;
        item.amounts = [...amounts, total];

        result.push(item);
      }
    });

    return result;
  }

  const initialTableData = populateTableDataRecursevily(seedData);
  const tableData = [...initialTableData[0].children, initialTableData[1]];

  const [selectedCell, setSelectedCell] = useState<SelectedCell>({
    record: null,
    value: 0,
    month: "Jan",
  });

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="items-center justify-items-center min-h-screen pl-8 py-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full">
        <Table
          className="border border-gray-400 rounded-bl-md rounded-tl-md cursor-pointer"
          size="small"
          dataSource={tableData}
          columns={tableCols}
          pagination={false}
          scroll={{ x: "max-content" }}
          expandable={{
            defaultExpandAllRows: true,
            expandIcon: ({ expanded, onExpand, record, expandable }) =>
              expandable ? (
                expanded ? (
                  <DownOutlined
                    className="mx-2"
                    onClick={(e) => onExpand(record, e)}
                  />
                ) : (
                  <RightOutlined
                    className="mx-2"
                    onClick={(e) => onExpand(record, e)}
                  />
                )
              ) : (
                <span className="mx-2" />
              ),
          }}
        />
        <Drawer
          title={selectedCell?.record?.lineItem}
          width={1000}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <span>{selectedCell.month} 2024 (Accrual)</span>
              <Button color="default" variant="filled" onClick={onClose}>
                Category
              </Button>
              <Button color="default" variant="filled" onClick={onClose}>
                Transactions
              </Button>
              <Button type="primary" onClick={onClose}>
                Done
              </Button>
            </Space>
          }
        >
          <TableDrawer selectedCell={selectedCell}></TableDrawer>
        </Drawer>
      </main>
    </div>
  );
}
