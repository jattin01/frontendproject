import React, { useState, useEffect } from "react";
import { Table, Input, Space } from "antd";
import "antd/dist/reset.css";

const ApplicationTable = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Mock API call
    const fetchData = async () => {
      try {
        const applications = [
            {
              "applicationNO": 202345678,
              "applicantName": "Ali Mohammed Ahmed Almansoori",
              "applicationDate": "10/06/2023",
              "studentID": "A12345678",
              "paidAmount": 150,
              "status_En": "Submitted",
              "status_Ar": "مقدم",
              "lastDate": "10/06/2023"
            },
            {
              "applicationNO": 202345679,
              "applicantName": "Fatima Jaber Saeed Alhammadi",
              "applicationDate": "11/06/2023",
              "studentID": "A23456789",
              "paidAmount": 200,
              "status_En": "Pending",
              "status_Ar": "قيد الانتظار",
              "lastDate": "11/06/2023"
            },
            {
              "applicationNO": 202345680,
              "applicantName": "Saeed Nasser Ali Alketbi",
              "applicationDate": "12/06/2023",
              "studentID": "A34567890",
              "paidAmount": 250,
              "status_En": "Approved",
              "status_Ar": "مقبول",
              "lastDate": "12/06/2023"
            },
            {
              "applicationNO": 202345681,
              "applicantName": "Latifa Salem Abdullah Alnaqbi",
              "applicationDate": "13/06/2023",
              "studentID": "A45678901",
              "paidAmount": 120,
              "status_En": "Rejected",
              "status_Ar": "مرفوض",
              "lastDate": "13/06/2023"
            },
            {
              "applicationNO": 202345682,
              "applicantName": "Mohammed Rashid Khalifa Alnuaimi",
              "applicationDate": "14/06/2023",
              "studentID": "A56789012",
              "paidAmount": 300,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "14/06/2023"
            },
              {
              "applicationNO": 202315679,
              "applicantName": "Amna Khalid Rashid AlMazrouei",
              "applicationDate": "09/06/2023",
              "studentID": "A12345678",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315680,
              "applicantName": "Salem Faisal Abdulrahman AlHammadi",
              "applicationDate": "09/06/2023",
              "studentID": "A87654321",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315681,
              "applicantName": "Mariam Abdullah Yousef AlDaheri",
              "applicationDate": "09/06/2023",
              "studentID": "A23456789",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315682,
              "applicantName": "Khalid Mohammad Saleh AlSuwaidi",
              "applicationDate": "09/06/2023",
              "studentID": "A98765432",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315683,
              "applicantName": "Noura Saeed Ali AlNuaimi",
              "applicationDate": "09/06/2023",
              "studentID": "A34567890",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315684,
              "applicantName": "Hassan Ahmad Ibrahim AlShamsi",
              "applicationDate": "09/06/2023",
              "studentID": "A45678901",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315685,
              "applicantName": "Fatima Jassim Hamad AlDarmaki",
              "applicationDate": "09/06/2023",
              "studentID": "A56789012",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315686,
              "applicantName": "Abdullah Faisal Saeed AlSharqi",
              "applicationDate": "09/06/2023",
              "studentID": "A67890123",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315687,
              "applicantName": "Sara Ahmed Khalid AlDhaheri",
              "applicationDate": "09/06/2023",
              "studentID": "A78901234",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315688,
              "applicantName": "Mohammad Rashid Nasser AlFalasi",
              "applicationDate": "09/06/2023",
              "studentID": "A89012345",
              "paidAmount": 100,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "09/06/2023"
            },
            {
              "applicationNO": 202315689,
              "applicantName": "Ali Rashid Khalifa AlKaabi",
              "applicationDate": "10/06/2023",
              "studentID": "A67890234",
              "paidAmount": 150,
              "status_En": "Submitted",
              "status_Ar": "مقدم",
              "lastDate": "10/06/2023"
            },
            {
              "applicationNO": 202315690,
              "applicantName": "Mona Jaber Salem AlMazrouei",
              "applicationDate": "11/06/2023",
              "studentID": "A56780123",
              "paidAmount": 180,
              "status_En": "Pending",
              "status_Ar": "قيد الانتظار",
              "lastDate": "11/06/2023"
            },
            {
              "applicationNO": 202315691,
              "applicantName": "Ahmed Nasser Mohammed AlDarmaki",
              "applicationDate": "12/06/2023",
              "studentID": "A34567012",
              "paidAmount": 250,
              "status_En": "Approved",
              "status_Ar": "مقبول",
              "lastDate": "12/06/2023"
            },
            {
              "applicationNO": 202315692,
              "applicantName": "Layla Faisal Jassim AlNuaimi",
              "applicationDate": "13/06/2023",
              "studentID": "A12345690",
              "paidAmount": 170,
              "status_En": "Rejected",
              "status_Ar": "مرفوض",
              "lastDate": "13/06/2023"
            },
            {
              "applicationNO": 202315693,
              "applicantName": "Rashid Ali Mohammed AlKetbi",
              "applicationDate": "14/06/2023",
              "studentID": "A90123456",
              "paidAmount": 300,
              "status_En": "Online",
              "status_Ar": "جديد",
              "lastDate": "14/06/2023"
            }
          ];
        setData(applications);
        setFilteredData(applications);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    fetchData();
  }, []);

  // Handle search
  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = data.filter(
      (item) =>
        item.applicantName.toLowerCase().includes(value.toLowerCase()) ||
        item.status_En.toLowerCase().includes(value.toLowerCase()) ||
        item.studentID.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      title: "Application No",
      dataIndex: "applicationNO",
      key: "applicationNO",
      sorter: (a, b) => a.applicationNO - b.applicationNO,
    },
    {
      title: "Applicant Name",
      dataIndex: "applicantName",
      key: "applicantName",
      sorter: (a, b) => a.applicantName.localeCompare(b.applicantName),
    },
    {
      title: "Application Date",
      dataIndex: "applicationDate",
      key: "applicationDate",
      sorter: (a, b) =>
        new Date(a.applicationDate) - new Date(b.applicationDate),
    },
    {
      title: "Student ID",
      dataIndex: "studentID",
      key: "studentID",
    },
    {
      title: "Paid Amount",
      dataIndex: "paidAmount",
      key: "paidAmount",
    },
    {
      title: "Status (English)",
      dataIndex: "status_En",
      key: "status_En",
    },
    {
      title: "Status (Arabic)",
      dataIndex: "status_Ar",
      key: "status_Ar",
    },
    {
      title: "Last Updated",
      dataIndex: "lastDate",
      key: "lastDate",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Space direction="vertical" style={{ marginBottom: "16px" }}>
        <Input
          placeholder="Search by Applicant Name, Status, or Student ID"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Space>
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="applicationNO"
        pagination={{ pageSize: 10 }}
        bordered
      />
    </div>
  );
};

export default ApplicationTable;
