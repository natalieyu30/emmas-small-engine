export function getOrderList() {
  return [
    {
      id: 1,
      requestedDate: "2022-09-12",
      orderDate: "2022-09-13",
      receivedDate: "2022-09-15",
      orderNum: "OD1237",
      UPC: "UPC021",
      category: "Blade",
      itemName: "HPL Blade",
      supplier: "Mowerella",
      supplierCode: "S004",
      staffOrdered: "S02",
      staffRecieved: "S01",
      status: "Arrived",
      quantity: 20,
      price: 20.0,
    },
    {
      id: 2,
      requestedDate: "2022-09-14",
      orderDate: "2022-09-14",
      receivedDate: "2022-09-16",
      orderNum: "OD1238",
      UPC: "UPC041",
      category: "Chain",
      itemName: "Kinetica chaine 255",
      supplier: "Green Operator",
      supplierCode: "S002",
      staffOrdered: "S02",
      staffRecieved: "S02",
      status: "Arrived",
      quantity: 20,
      price: 8.0,
    },
    {
      id: 3,
      requestedDate: "2022-09-14",
      orderDate: "2022-09-15",
      receivedDate: "2022-09-17",
      orderNum: "OD1239",
      UPC: "UPC071",
      category: "Recoil",
      itemName: "O3DE Recoil",
      supplier: "Mowerocity",
      supplierCode: "S005",
      staffOrdered: "S02",
      staffRecieved: "S02",
      status: "Arrived",
      quantity: 10,
      price: 5.0,
    },
    {
      id: 4,
      requestedDate: "2022-09-14",
      orderDate: "2022-09-16",
      receivedDate: "2022-09-18",
      orderNum: "OD1240",
      UPC: "UPC081",
      category: "Tire",
      itemName: "Source Tire 123",
      supplier: "Core Tire",
      supplierCode: "S001",
      staffOrdered: "S02",
      staffRecieved: "S02",
      status: "Arrived",
      quantity: 20,
      price: 40.0,
    },
    {
      id: 5,
      requestedDate: "2022-09-20",
      orderDate: "2022-09-20",
      receivedDate: "2022-09-22",
      orderNum: "OD1261",
      UPC: "UPC021",
      category: "Blade",
      itemName: "Enforce Oil 111",
      supplier: "Trust Oil",
      supplierCode: "S010",
      staffOrdered: "S02",
      staffRecieved: "S02",
      status: "Arrived",
      quantity: 20,
      price: 11.0,
    },
    {
      id: 6,
      requestedDate: "2022-09-20",
      orderDate: "2022-09-20",
      receivedDate: "2022-09-22",
      orderNum: "OD1243",
      UPC: "UPC022",
      category: "Blade",
      itemName: "Blade Razor",
      supplier: "Mowerella",
      supplierCode: "S004",
      staffOrdered: "S02",
      staffRecieved: "S02",
      status: "Arrived",
      quantity: 10,
      price: 7.0,
    },
    {
      id: 7,
      requestedDate: "2022-09-24",
      orderDate: "2022-09-25",
      receivedDate: "2022-09-27",
      orderNum: "OD1245",
      UPC: "UPC063",
      category: "Gas",
      itemName: "Turismo Oil N",
      supplier: "Max Oil",
      supplierCode: "S015",
      staffOrdered: "S02",
      staffRecieved: "S02",
      status: "Arrived",
      quantity: 10,
      price: 12.0,
    },
    {
      id: 8,
      requestedDate: "2022-09-24",
      orderDate: "2022-09-25",
      receivedDate: "2022-09-27",
      orderNum: "OD1250",
      UPC: "UPC023",
      category: "Blade",
      itemName: "Shaman Blade",
      supplier: "PichuLawns",
      supplierCode: "S013",
      staffOrdered: "S02",
      staffRecieved: "S02",
      status: "Arrived",
      quantity: 20,
      price: 6.0,
    },
    {
      id: 9,
      requestedDate: "2022-09-30",
      orderDate: "2022-10-01",
      receivedDate: "2022-10-03",
      orderNum: "OD1251",
      UPC: "UPC013",
      category: "Battery",
      itemName: "Ascend TX",
      supplier: "Your Choice",
      supplierCode: "S012",
      staffOrdered: "S02",
      staffRecieved: "S02",
      status: "Arrived",
      quantity: 10,
      price: 10.0,
    },
    {
      id: 10,
      requestedDate: "2022-10-05",
      orderDate: "2022-10-07",
      receivedDate: "",
      orderNum: "OD1252",
      UPC: "UPC043",
      category: "Chain",
      itemName: "Chain Variety A1",
      supplier: "Chain City",
      supplierCode: "S019",
      staffOrdered: "S02",
      staffRecieved: "",
      status: "Ordered",
      quantity: 10,
      price: 4.0,
    },
    {
      id: 11,
      requestedDate: "2022-10-05",
      orderDate: "2022-10-07",
      receivedDate: "",
      orderNum: "OD1253",
      UPC: "UPC061",
      category: "Gas",
      itemName: "Enforce Oil 111",
      supplier: "Trust Oil",
      supplierCode: "S010",
      staffOrdered: "S01",
      staffRecieved: "",
      status: "Ordered",
      quantity: 20,
      price: 12.0,
    },
    {
      id: 12,
      requestedDate: "2022-10-06",
      orderDate: "",
      receivedDate: "",
      orderNum: "",
      UPC: "UPC042",
      category: "Chain",
      itemName: "Chaine Tractor",
      supplier: "Top Mechenic",
      supplierCode: "S009",
      staffOrdered: "",
      staffRecieved: "",
      status: "Requested",
      quantity: 4,
      price: 5.0,
    },
    {
      id: 13,
      requestedDate: "2022-10-06",
      orderDate: "",
      receivedDate: "",
      orderNum: "",
      UPC: "UPC011",
      category: "Battery",
      itemName: "Cube Battery",
      supplier: "Optimum Battery",
      supplierCode: "S006",
      staffOrdered: "",
      staffRecieved: "",
      status: "Requested",
      quantity: 2,
      price: 8.0,
    },
  ];
}

export function getSalesList() {
  return [
    {
      id: 1,
      date: "2022-09-15",
      section: "Sold",
      UPC: "UPC021",
      itemName: "HPL Blade",
      customer: "C010",
      invoiceNumber: "IV014",
      quantity: 4,
      price: 20.0,
    },
    {
      id: 2,
      date: "2022-09-15",
      section: "Sold",
      UPC: "UPC061",
      itemName: "Enforce Oil 111",
      customer: "C003",
      invoiceNumber: "IV015",
      quantity: 6,
      price: 10.0,
    },
    {
      id: 3,
      date: "2022-09-15",
      section: "Sold",
      UPC: "UPC011",
      itemName: "Cube Battery",
      customer: "C011",
      invoiceNumber: "IV016",
      quantity: 4,
      price: 10.0,
    },
    {
      id: 4,
      date: "2022-09-17",
      section: "Sold",
      UPC: "UPC021",
      itemName: "HPL Blade",
      customer: "C013",
      invoiceNumber: "IV018",
      quantity: 2,
      price: 20.0,
    },
    {
      id: 5,
      date: "2022-09-18",
      section: "Repair",
      UPC: "UPC041",
      itemName: "Kinetica chaine 255",
      customer: "C014",
      invoiceNumber: "IV019",
      quantity: 2,
      price: 8.0,
    },
    {
      id: 6,
      date: "2022-09-18",
      section: "Sold",
      UPC: "UPC071",
      itemName: "O3DE Recoil",
      customer: "C015",
      invoiceNumber: "IV020",
      quantity: 1,
      price: 5.0,
    },
    {
      id: 7,
      date: "2022-09-19",
      section: "Sold",
      UPC: "UPC081",
      itemName: "Source Tire 123",
      customer: "C016",
      invoiceNumber: "IV021",
      quantity: 2,
      price: 40.0,
    },
    {
      id: 8,
      date: "2022-09-22",
      section: "Sold",
      UPC: "UPC061",
      itemName: "Enforce Oil 111",
      customer: "C017",
      invoiceNumber: "IV022",
      quantity: 4,
      price: 10.5,
    },
    {
      id: 9,
      date: "2022-09-23",
      section: "Sold",
      UPC: "UPC022",
      itemName: "Blade Razor",
      customer: "C019",
      invoiceNumber: "IV024",
      quantity: 4,
      price: 7,
    },
    {
      id: 10,
      date: "2022-09-24",
      section: "Sold",
      UPC: "UPC026",
      itemName: "Sharp Blade",
      customer: "C020",
      invoiceNumber: "IV025",
      quantity: 2,
      price: 12.0,
    },
    {
      id: 11,
      date: "2022-09-25",
      section: "Sold",
      UPC: "UPC063",
      itemName: "Turismo Oil N",
      customer: "C001",
      invoiceNumber: "IV026",
      quantity: 2,
      price: 12.0,
    },
    {
      id: 12,
      date: "2022-09-28",
      section: "Return",
      UPC: "UPC063",
      itemName: "Turismo Oil N",
      customer: "C001",
      invoiceNumber: "IV026",
      quantity: 2,
      price: -12.0,
    },
    {
      id: 13,
      date: "2022-10-02",
      section: "Sold",
      UPC: "UPC023",
      itemName: "Shaman Blade",
      customer: "C005",
      invoiceNumber: "IV031",
      quantity: 4,
      price: 6.0,
    },
    {
      id: 14,
      date: "2022-10-02",
      section: "Repair",
      UPC: "UPC013",
      itemName: "Ascend TX",
      customer: "C006",
      invoiceNumber: "IV032",
      quantity: 2,
      price: 10.0,
    },
    {
      id: 15,
      date: "2022-10-02",
      section: "Sold",
      UPC: "UPC043",
      itemName: "Chain Variety A1",
      customer: "C007",
      invoiceNumber: "IV033",
      quantity: 1,
      price: 4.0,
    },
    {
      id: 16,
      date: "2022-10-03",
      section: "Sold",
      UPC: "UPC042",
      itemName: "Chain Tractor",
      customer: "C008",
      invoiceNumber: "IV034",
      quantity: 2,
      price: 5.0,
    },
    {
      id: 17,
      date: "2022-10-05",
      section: "Sold",
      UPC: "UPC051",
      itemName: "4A ENGINE",
      customer: "C010",
      invoiceNumber: "IV037",
      quantity: 1,
      price: 50.0,
    },
    {
      id: 18,
      date: "2022-10-08",
      section: "Repair",
      UPC: "UPC011",
      itemName: "Cube Battery",
      customer: "C011",
      invoiceNumber: "IV038",
      quantity: 4,
      price: 10.0,
    },
    {
      id: 19,
      date: "2022-10-08",
      section: "Sold",
      UPC: "UPC061",
      itemName: "Enforce Oil 111",
      customer: "C012",
      invoiceNumber: "IV039",
      quantity: 10,
      price: 11.0,
    },
    {
      id: 20,
      date: "2022-10-09",
      section: "Sold",
      UPC: "UPC021",
      itemName: "Blade",
      customer: "C013",
      invoiceNumber: "IV040",
      quantity: 6,
      price: 20.0,
    },
  ];
}

export function getSalesListDemo() {
  return [
    {
      invoiceNum: "iv011",
      date: "2022-09-15",
      employee: "wtutti",
      payment: {
        paymentMethod: "credit",
        cardHoder: "John Kern",
        cardNum: "1111",
        amount: 45.2,
      },
      items: [
        {
          UPC: "UPC021",
          itemName: "HPL Blade",
          quantity: 1,
          price: 20.0,
        },
        {
          UPC: "UPC061",
          itemName: "Enforce Oil 111",
          quantity: 2,
          price: 10.0,
        },
      ],
    },
    {
      invoiceNum: "iv012",
      date: "2022-09-15",
      employee: "wdickey",
      payment: {
        paymentMethod: "credit",
        cardHoder: "Glen Howard",
        cardNum: "1212",
        amount: 54.8,
      },
      items: [
        {
          UPC: "UPC011",
          itemName: "Cube Battery",
          quantity: 1,
          price: 10.0,
        },
        {
          UPC: "UPC021",
          itemName: "HPL Blade",
          quantity: 1,
          price: 20.0,
        },
        {
          UPC: "UPC041",
          itemName: "Kinetica chaine 255",
          quantity: 1,
          price: 8.0,
        },
        {
          UPC: "UPC061",
          itemName: "Enforce Oil 111",
          quantity: 1,
          price: 10.5,
        },
      ],
    },
    {
      invoiceNum: "iv013",
      date: "2022-09-15",
      employee: "wtutti",
      payment: {
        paymentMethod: "debit",
        amount: 67.8,
      },
      items: [
        {
          UPC: "UPC021",
          itemName: "HPL Blade",
          quantity: 1,
          price: 20.0,
        },
        {
          UPC: "UPC011",
          itemName: "Cube Battery",
          quantity: 4,
          price: 10.0,
        },
      ],
    },
    {
      invoiceNum: "iv014",
      date: "2022-09-16",
      employee: "wdickey",
      payment: {
        paymentMethod: "cash",
        amount: 56.5,
      },
      items: [
        {
          UPC: "UPC051",
          itemName: "4A ENGINE",
          quantity: 1,
          price: 50.0,
        },
      ],
    },
    {
      invoiceNum: "iv015",
      date: "2022-09-17",
      employee: "wdickey",
      payment: {
        paymentMethod: "credit",
        cardHoder: "Kelly Marshall",
        cardNum: "1566",
        amount: 67.8,
      },
      items: [
        {
          UPC: "UPC011",
          itemName: "Cube Battery",
          quantity: 2,
          price: 10.0,
        },
        {
          UPC: "UPC013",
          itemName: "Ascend TX",
          quantity: 2,
          price: 20.0,
        },
      ],
    },
    {
      invoiceNum: "iv016",
      date: "2022-09-17",
      employee: "wdickey",
      payment: {
        paymentMethod: "cash",
        amount: 27.12,
      },
      items: [
        {
          UPC: "UPC063",
          itemName: "Turismo Oil N",
          quantity: 2,
          price: 12.0,
        },
      ],
    },
    {
      invoiceNum: "iv017",
      date: "2022-09-17",
      employee: "wtutti",
      payment: {
        paymentMethod: "debit",
        amount: 5.65,
      },
      items: [
        {
          UPC: "UPC071",
          itemName: "O3DE Recoil",
          quantity: 1,
          price: 5.0,
        },
      ],
    },
    {
      invoiceNum: "iv018",
      date: "2022-09-18",
      employee: "wtutti",
      payment: {
        paymentMethod: "cash",
        amount: 29.38,
      },
      items: [
        {
          UPC: "UPC022",
          itemName: "Blade Razor",
          quantity: 2,
          price: 7.0,
        },
        {
          UPC: "UPC063",
          itemName: "Turismo Oil N",
          quantity: 1,
          price: 12.0,
        },
      ],
    },
    {
      invoiceNum: "iv019",
      date: "2022-09-18",
      employee: "wdickey",
      payment: {
        paymentMethod: "credit",
        cardHoder: "Dennis Penfold",
        cardNum: "8585",
        amount: 85.88,
      },
      items: [
        {
          UPC: "UPC082",
          itemName: "Source Tire A",
          quantity: 2,
          price: 38.0,
        },
      ],
    },
    {
      invoiceNum: "iv020",
      date: "2022-09-18",
      employee: "wtutti",
      payment: {
        paymentMethod: "cash",
        amount: 43.51,
      },
      items: [
        {
          UPC: "UPC013",
          itemName: "Ascend TX",
          quantity: 2,
          price: 10.0,
        },
        {
          UPC: "UPC041",
          itemName: "Kinetica chaine 255",
          quantity: 1,
          price: 8.0,
        },
        {
          UPC: "UPC061",
          itemName: "Enforce Oil 111",
          quantity: 1,
          price: 10.5,
        },
      ],
    },
  ];
}

export function getInventoryList() {
  return [
    {
      id: 1,
      date: "2022-09-30",
      category: "Battery",
      UPC: "UPC011",
      itemName: "Cube Battery",
      supplierName: "Optimum Battery",
      supplierCode: "S006",
      price: 10.0,
      quantity: 1,
      status: "Current",
    },
    {
      id: 2,
      date: "2022-09-30",
      category: "Battery",
      UPC: "UPC013",
      itemName: "Ascend TX",
      supplierName: "Your Choice",
      supplierCode: "S012",
      price: 10.0,
      quantity: 8,
      status: "Current",
    },
    {
      id: 3,
      date: "2022-09-30",
      category: "Battery",
      UPC: "UPC015",
      itemName: "Capital 3X",
      supplierName: "Supply Max",
      supplierCode: "S014",
      price: 6.0,
      quantity: 14,
      status: "Discontinued",
    },
    {
      id: 4,
      date: "2022-09-30",
      category: "Blade",
      UPC: "UPC021",
      itemName: "HPL Blade",
      supplierName: "Mowerella",
      supplierCode: "S004",
      price: 20.0,
      quantity: 4,
      status: "Current",
    },
    {
      id: 5,
      date: "2022-09-30",
      category: "Blade",
      UPC: "UPC022",
      itemName: "Blade Razor",
      supplierName: "Mowerella",
      supplierCode: "S004",
      price: 7.0,
      quantity: 16,
      status: "Current",
    },
    {
      id: 6,
      date: "2022-09-30",
      category: "Blade",
      UPC: "UPC023",
      itemName: "Shaman Blade",
      supplierName: "PichuLawns",
      supplierCode: "S013",
      price: 6.0,
      quantity: 16,
      status: "Discontinued",
    },
    {
      id: 7,
      date: "2022-09-30",
      category: "Blade",
      UPC: "UPC023",
      itemName: "Strike Blade",
      supplierName: "PichuLawns",
      supplierCode: "S013",
      price: 10.0,
      quantity: 6,
      status: "Current",
    },
    {
      id: 8,
      date: "2022-09-30",
      category: "Chain",
      UPC: "UPC041",
      itemName: "Kinetica chaine 255",
      supplierName: "Green Operator",
      supplierCode: "S002",
      price: 5.0,
      quantity: 16,
      status: "Current",
    },
    {
      id: 9,
      date: "2022-09-30",
      category: "Chain",
      UPC: "UPC042",
      itemName: "Chain Tractor",
      supplierName: "Top Mechenic",
      supplierCode: "S009",
      price: 5.0,
      quantity: 2,
      status: "Current",
    },
    {
      id: 10,
      date: "2022-09-30",
      category: "Engine",
      UPC: "UPC051",
      itemName: "4A ENGINE",
      supplierName: "Super Lawn",
      supplierCode: "S008",
      price: 50.0,
      quantity: 4,
      status: "Current",
    },
    {
      id: 11,
      date: "2022-09-30",
      category: "Engine",
      UPC: "UPC052",
      itemName: "Atlas Engine",
      supplierName: "Super Lawn",
      supplierCode: "S008",
      price: 55.0,
      quantity: 5,
      status: "Current",
    },
    {
      id: 12,
      date: "2022-09-30",
      category: "Gas",
      UPC: "UPC061",
      itemName: "Enforce Oil 111",
      supplierName: "Trust Oil",
      supplierCode: "S010",
      price: 10.0,
      quantity: 10,
      status: "Current",
    },
    {
      id: 13,
      date: "2022-09-30",
      category: "Gas",
      UPC: "UPC063",
      itemName: "Turismo Oil N",
      supplierName: "Max Oil",
      supplierCode: "S015",
      price: 12.0,
      quantity: 10,
      status: "Current",
    },
    {
      id: 14,
      date: "2022-09-30",
      category: "Gas",
      UPC: "UPC065",
      itemName: "Oil Premier",
      supplierName: "Jandi Lawns",
      supplierCode: "S003",
      price: 9.5,
      quantity: 0,
      status: "Discontinued",
    },
    {
      id: 15,
      date: "2022-09-30",
      category: "Recoil",
      UPC: "UPC071",
      itemName: "O3DE Recoil",
      supplierName: "Mowerocity",
      supplierCode: "S005",
      price: 5.0,
      quantity: 9,
      status: "Current",
    },
    {
      id: 16,
      date: "2022-09-30",
      category: "Recoil",
      UPC: "UPC072",
      itemName: "Allocate Recoil",
      supplierName: "Wellend Best",
      supplierCode: "S016",
      price: 6.0,
      quantity: 6,
      status: "Current",
    },
    {
      id: 17,
      date: "2022-09-30",
      category: "Tire",
      UPC: "UPC082",
      itemName: "Source Tire A",
      supplierName: "Core Tire",
      supplierCode: "S001",
      price: 38.0,
      quantity: 8,
      status: "Current",
    },
  ];
}

export function getProducts(){
  return [
    {
      id: 1,
      category: "Battery",
      UPC: "UPC011",
      price: 10.0,
      itemName: "Cube Battery",
      supplierCode: "S006",
      supplierName: "Optimum Battery",
    },
    {
      id: 2,
      category: "Battery",
      UPC: "UPC012",
      price: 11.0,
      itemName: "Premier X Battery",
      supplierCode: "S006",
      supplierName: "Optimum Battery",
    },
    {
      id: 3,
      category: "Battery",
      UPC: "UPC013",
      price: 10.0,
      itemName: "Ascend TX",
      supplierCode: "S012",
      supplierName: "Your Choice",
    },
    {
      id: 4,
      category: "Battery",
      UPC: "UPC014",
      price: 11.0,
      itemName: "Energise Square",
      supplierCode: "S012",
      supplierName: "Your Choice",
    },
    {
      id: 5,
      category: "Battery",
      UPC: "UPC015",
      price: 10.0,
      itemName: "Capital 3X",
      supplierCode: "S014",
      supplierName: "Supply Max",
    },
    {
      id: 6,
      category: "Blade",
      UPC: "UPC021",
      price: 20.0,
      itemName: "HPL Blade",
      supplierCode: "S004",
      supplierName: "Mowerella",
    },
    {
      id: 7,
      category: "Blade",
      UPC: "UPC022",
      price: 22.0,
      itemName: "Blade Razor",
      supplierCode: "S004",
      supplierName: "Mowerella",
    },
    {
      id: 8,
      category: "Blade",
      UPC: "UPC023",
      price: 16.0,
      itemName: "Shaman Blade",
      supplierCode: "S013",
      supplierName: "PichuLawns",
    },
    {
      id: 9,
      category: "Blade",
      UPC: "UPC024",
      price: 18.0,
      itemName: "Strike Blade",
      supplierCode: "S013",
      supplierName: "PichuLawns",
    },
    {
      id: 10,
      category: "Blade",
      UPC: "UPC025",
      price: 20.0,
      itemName: "Sonic Blade",
      supplierCode: "S013",
      supplierName: "PichuLawns",
    },
    {
      id: 11,
      category: "Blade",
      UPC: "UPC026",
      price: 20.0,
      itemName: "Sharp Blade",
      supplierCode: "S007",
      supplierName: "Premium Supply",
    },
    // {
    //   id: 12,
    //   category: "Chain",
    //   UPC: "UPC041",
    //   price: 4.0,
    //   itemName: "Linetica Chaine 255",
    //   supplierCode: "S002",
    //   supplierName: "Green Operator",
    // },
    // {
    //   id: 13,
    //   category: "Chain",
    //   UPC: "UPC042",
    //   price: 6.0,
    //   itemName: "Chain Tractor",
    //   supplierCode: "S009",
    //   supplierName: "Top Mechenic",
    // },
    // {
    //   id: 14,
    //   category: "Chain",
    //   UPC: "UPC043",
    //   price: 4.0,
    //   itemName: "Chain Variety A1",
    //   supplierCode: "S019",
    //   supplierName: "Chain City",
    // },
    // {
    //   id: 15,
    //   category: "Chain",
    //   UPC: "UPC044",
    //   price: 5.0,
    //   itemName: "Clip Chain X",
    //   supplierCode: "S019",
    //   supplierName: "Chain City",
    // },
    {
      id: 16,
      category: "Engine",
      UPC: "UPC051",
      price: 50.0,
      itemName: "4A ENGINE",
      supplierCode: "S008",
      supplierName: "Super Lawn",
    },
    {
      id: 17,
      category: "Engine",
      UPC: "UPC052",
      price: 55.0,
      itemName: "Atlas Engine",
      supplierCode: "S008",
      supplierName: "Super Lawn",
    },
    {
      id: 18,
      category: "Engine",
      UPC: "UPC053",
      price: 50.0,
      itemName: "Engine Auto EX",
      supplierCode: "S020",
      supplierName: "Engine Power",
    },
    {
      id: 19,
      category: "Engine",
      UPC: "UPC054",
      price: 55.0,
      itemName: "Edge Power Engine",
      supplierCode: "S020",
      supplierName: "Engine Power",
    },
    {
      id: 20,
      category: "Gas",
      UPC: "UPC061",
      price: 10.0,
      itemName: "Enforce Oil 111",
      supplierCode: "S010",
      supplierName: "Trust Oil",
    },
    {
      id: 21,
      category: "Gas",
      UPC: "UPC062",
      price: 12.0,
      itemName: "Enforce Oil 112",
      supplierCode: "S010",
      supplierName: "Trust Oil",
    },
    {
      id: 22,
      category: "Gas",
      UPC: "UPC063",
      price: 10.0,
      itemName: "Turismo Oil N",
      supplierCode: "S015",
      supplierName: "Max Oil",
    },
    {
      id: 23,
      category: "Gas",
      UPC: "UPC064",
      price: 11.0,
      itemName: "Tirosmo Oil EX",
      supplierCode: "S015",
      supplierName: "Max Oil",
    },
    {
      id: 24,
      category: "Gas",
      UPC: "UPC065",
      price: 12.0,
      itemName: "Oil Premier",
      supplierCode: "S003",
      supplierName: "Jandi Lawns",
    },
    // {
    //   id: 25,
    //   category: "Recoil",
    //   UPC: "UPC071",
    //   price: 5.0,
    //   itemName: "O3DE Recoil",
    //   supplierCode: "S005",
    //   supplierName: "Mowerocity",
    // },
    // {
    //   id: 26,
    //   category: "Recoil",
    //   UPC: "UPC072",
    //   price: 6.0,
    //   itemName: "	Allocate Recoil",
    //   supplierCode: "S016",
    //   supplierName: "Wellend Best",
    // },
    // {
    //   id: 27,
    //   category: "Tire",
    //   UPC: "UPC081",
    //   price: 40.0,
    //   itemName: "Source Tire 123",
    //   supplierCode: "S001",
    //   supplierName: "Core Tire",
    // },
    // {
    //   id: 28,
    //   category: "Tire",
    //   UPC: "UPC082",
    //   price: 42.0,
    //   itemName: "Source Tire A",
    //   supplierCode: "S001",
    //   supplierName: "Core Tire",
    // },
    // {
    //   id: 29,
    //   category: "Tire",
    //   UPC: "UPC083",
    //   price: 38.0,
    //   itemName: "Champion Tire",
    //   supplierCode: "S014",
    //   supplierName: "Supply Max",
    // },
    // {
    //   id: 30,
    //   category: "Tire",
    //   UPC: "UPC084",
    //   price: 40.0,
    //   itemName: "First-Choice Tire",
    //   supplierCode: "S014",
    //   supplierName: "Supply Max",
    // },
  ];
}

export function getCustomers(){
  return [
    {
      id: 1,
      customerCode:"C001",
      gender: "Mr",
      firstName: "John",
      lastName:"Kern",
      street:"1012 King St",
      city: "Welland",
      province: "ON",
      postalCode: "A1A 9T9",
      email: "jkern@gmail.com",
      phone: "2894564564",
    },
    {
      id: 2,
      customerCode:"C002",
      gender: "Mr",
      firstName: "Glen",
      lastName:"Howard",
      street:"245 Touma St",
      city: "St.Catharines",
      province: "ON",
      postalCode: "H7N 1V2",
      email: "ghoward@gmail.com",
      phone: "2894445555",
    },
    {
      id: 3,
      customerCode:"C003",
      gender: "Mr",
      firstName: "Ron",
      lastName:"O'Donnald",
      street:"63 Phelham St",
      city: "Niagara Falls",
      province: "ON",
      postalCode: "T9C 9L7",
      email: "rono@gmail.com",
      phone: "2894441234",
    },
    {
      id: 4,
      customerCode:"C004",
      gender: "Mr",
      firstName: "Paul",
      lastName:"Hernandez",
      street:"34 York",
      city: "NOTL",
      province: "ON",
      postalCode: "J0N 2S8",
      email: "phernandez@gmail.com",
      phone: "9054474747",
    },
    {
      id: 5,
      customerCode:"C005",
      gender: "Ms",
      firstName: "PaWendyul",
      lastName:"Smith",
      street:"135 Cliff Rd",
      city: "St.Catharines",
      province: "ON",
      postalCode: "M4W 9C9",
      email: "wsmith@gmail.com",
      phone: "6172223333",
    },
    {
      id: 6,
      customerCode:"C006",
      gender: "Ms",
      firstName: "Nancy",
      lastName:"Baker",
      street:"94 Glendale Ave",
      city: "Thorold",
      province: "ON",
      postalCode: "E5G 1J2",
      email: "nbaker@gmail.com",
      phone: "5194447777",
    },
    {
      id: 7,
      customerCode:"C007",
      gender: "Mr",
      firstName: "Tom",
      lastName:"Velinder",
      street:"687 Rockclife Rd",
      city: "Thorold",
      province: "ON",
      postalCode: "J0W 6X9",
      email: "tvelinda@gmail.com",
      phone: "5194562222",
    },
    {
      id: 8,
      customerCode:"C008",
      gender: "Ms",
      firstName: "Karen",
      lastName:"Carnehan",
      street:"345 Victoria Ave",
      city: "Lincoln",
      province: "ON",
      postalCode: "H9J 1X5",
      email: "kcar@gmail.com",
      phone: "9056669999",
    },
    {
      id: 9,
      customerCode:"C009",
      gender: "Ms",
      firstName: "Linda",
      lastName:"Westerfield",
      street:"234 Mohawk Rd",
      city: "Hamilton",
      province: "ON",
      postalCode: "E7L 1A7",
      email: "lindaw@gmail.com",
      phone: "9055558888",
    },
    {
      id: 10,
      customerCode:"C010",
      gender: "Mr",
      firstName: "Dennis",
      lastName:"Penfold",
      street:"459 Quint Ave",
      city: "St.Catharines",
      province: "BC",
      postalCode: "A8A 4R2",
      email: "dpenfold@gmail.com",
      phone: "2895557777",
    },
    {
      id: 11,
      customerCode:"C011",
      gender: "Mr",
      firstName: "Gary",
      lastName:"Shane",
      street:"12B Gehovia St",
      city: "Thorol",
      province: "ON",
      postalCode: "K2P 1W1",
      email: "gshane@gmail.com",
      phone: "6135631155",
    },
    {
      id: 12,
      customerCode:"C012",
      gender: "Ms",
      firstName: "Tracy",
      lastName:"Niu",
      street:"389 Stamford St",
      city: "Welland",
      province: "QC",
      postalCode: "V5H 4T8",
      email: "tracyn@gmail.com",
      phone: "7783797570",
    },
    {
      id: 13,
      customerCode:"C013",
      gender: "Mr",
      firstName: "Amoo",
      lastName:"Bao",
      street:"908 Cherrywood St",
      city: "Welland",
      province: "ON",
      postalCode: "V5H 8R9",
      email: "baobao@gmail.com",
      phone: "7789654532",
    },
    {
      id: 14,
      customerCode:"C014",
      gender: "Mr",
      firstName: "Kim",
      lastName:"Cai",
      street:"567 Orchard Rd",
      city: "NOTL",
      province: "ON",
      postalCode: "N2E 6Y9",
      email: "kimberlycai@gmail.com",
      phone: "7854651234",
    },
    {
      id: 15,
      customerCode:"C015",
      gender: "Mr",
      firstName: "Kevin",
      lastName:"Barry",
      street:"67 Russell St",
      city: "Orchard",
      province: "QC",
      postalCode: "N6J 1X9",
      email: "kbarry@gmail.com",
      phone: "5194791888",      
    },
    {
      id: 16,
      customerCode:"C016",
      gender: "Ms",
      firstName: "Andrea",
      lastName:"Davies",
      street:"183-10 Cook st",
      city: "Carman",
      province: "BC",
      postalCode: "N6A 3S2",
      email: "andreada@gmail.com",
      phone: "5196019848",
    },
    {
      id: 17,
      customerCode:"C017",
      gender: "Mr",
      firstName: "Oday",
      lastName:"Dabbas",
      street:"24 Dumbas",
      city: "Pettit Ave",
      province: "Sk",
      postalCode: "N5Y 3K1",
      email: "odaydabbas@gmail.com",
      phone: "5197865478",
    },
    {
      id: 18,
      customerCode:"C018",
      gender: "Mr",
      firstName: "Nabil",
      lastName:"Touma",
      street:"134 Lose Rd",
      city: "St.Catharines",
      province: "ON",
      postalCode: "W3R 1P2",
      email: "touma1223@gmail.com",
      phone: "6479856545",
    },
    {
      id: 19,
      customerCode:"C019",
      gender: "Mr",
      firstName: "Kelly",
      lastName:"Marshall",
      street:"2345 Charly Ave",
      city: "St.Catharines",
      province: "ON",
      postalCode: "K4J 5U6",
      email: "marshall0913@gmail.com",
      phone: "2895478521",
    },
    {
      id: 20,
      customerCode:"C020",
      gender: "Mr",
      firstName: "Adam",
      lastName:"Salt",
      street:"10-12 Lake",
      city: "St.Catharines",
      postalCode: "B4D 7J8",
      province: "ON",
      email: "salt4578@gmail.com",
      phone: "2896534512",
    },
  ];
}

export function getSuppliers(){
  return [
    {
      id: 1,
      supplierCode: "S001",
      supplierName: "Core Tire",             
      postalCode: "H9P 0S8",            
      email : "coretire@tire.com",             
      phone : "9051231232",            
      gender : "Mr",    
      contactName : "James Islington",
    },
    {
      id: 2,
      supplierCode: "S002",
      supplierName: "Green Operator",             
      postalCode: "L3M 9B7",            
      email : "greenoperator@operator.grm",             
      phone : "5195558585",            
      gender : "Ms",    
      contactName : "Olivia Young",
    },
    {
      id: 3,
      supplierCode: "S003",
      supplierName: "Jandi Lawns",             
      postalCode: "J1X 9P4",            
      email : "jandilawns@lawns.jam",             
      phone : "2454545666",            
      gender : "Mr",    
      contactName : "Henry Trenton",
    },
    {
      id: 4,
      supplierCode: "S004",
      supplierName: "Mowerella",             
      postalCode: "B1C 0P1",            
      email : "mowerella@mowerella.mom",             
      phone : "9054554455",            
      gender : "Ms",    
      contactName : "Chandra Engleheart",
    },
    {
      id: 5,
      supplierCode: "S005",
      supplierName: "Mowerocity",             
      postalCode: "X0A 8M1",            
      email : "mowerocity@mowerocity.mom",             
      phone : "2895558899",            
      gender : "Mr",    
      contactName : "Shanae Magnolis",
    },
    {
      id: 6,
      supplierCode: "S006",
      supplierName: "Optimum Battery",             
      postalCode: "P0P 2M5",            
      email : "optimumbattery@battery.opm",             
      phone : "9053336666",            
      gender : "Mr",    
      contactName : "Bill Norman",
    },
    {
      id: 7,
      supplierCode: "S007",
      supplierName: "Premium Supply",             
      postalCode: "E4M 9X6",            
      email : "premiumsupply@supply.prm",             
      phone : "2131112222",            
      gender : "Mr",    
      contactName : "Domiinc Ramirez",
    },
    {
      id: 8,
      supplierCode: "S008",
      supplierName: "Super Lawn",             
      postalCode: "L9P 4M1",            
      email : "uperlawn@lawn.sum",             
      phone : "5198887777",            
      gender : "Mr",    
      contactName : "Gale Holloway",
    },
    {
      id: 9,
      supplierCode: "S009",
      supplierName: "Top Mechenic",             
      postalCode: "N4K 1B8",            
      email : "topmechenic.mechenic.tom",             
      phone : "2195447777",            
      gender : "Ms",    
      contactName : "Angelina Garner",
    },
    {
      id: 10,
      supplierCode: "S010",
      supplierName: "Trust Oil",             
      postalCode: "L3V 8S7",            
      email : "trustoil@oil.trm",             
      phone : "9051221111",            
      gender : "Mr",    
      contactName : "Armand Morrison",
    },
    {
      id: 11,
      supplierCode: "S011",
      supplierName: "Niagara Green",             
      postalCode: "W2E 7R9",            
      email : "niagaragreen@green.ca",             
      phone : "6132621286",            
      gender : "Mr",    
      contactName : "Paul Czan",
    },
    {
      id: 12,
      supplierCode: "S012",
      supplierName: "Your Choice",             
      postalCode: "L3V 8S7",            
      email : "yourchoice@gmail.com",             
      phone : "8193294994",            
      gender : "Mrs",    
      contactName : "Cristina Borges",
    },
    {
      id: 13,
      supplierCode: "S013",
      supplierName: "PichuLawns",             
      postalCode: "B2M 8U9",            
      email : "pichulawns@green.ca",             
      phone : "9051221111",            
      gender : "Mr",    
      contactName : "Michael Monette",
    },
    {
      id: 14,
      supplierCode: "S014",
      supplierName: "Supply Max",             
      postalCode: "N6H 1Q2",            
      email : "supplymax@gmail.com",             
      phone : "8199626351",            
      gender : "Mr",    
      contactName : "Eric Daveluy",
    },
    {
      id: 15,
      supplierCode: "S015",
      supplierName: "Max Oil",             
      postalCode: "L9M 7J8",            
      email : "maxoil@gmail.com",             
      phone : "6138291000",            
      gender : "Mr",    
      contactName : "Jeffrey Usher",
    },
    {
      id: 16,
      supplierCode: "S016",
      supplierName: "Wellend Best",             
      postalCode: "P8J N7J",            
      email : "Wellendbest@gmail.com",             
      phone : "8195931644",            
      gender : "Mr",    
      contactName : "Paul Lemelin",
    },
    {
      id: 17,
      supplierCode: "S017",
      supplierName: "Greener",             
      postalCode: "U7W 7T5",            
      email : "greener@gmail.com",             
      phone : "8665307737",            
      gender : "Mr",    
      contactName : "Shaw Hedayati",
    },
    {
      id: 18,
      supplierCode: "S018",
      supplierName: "Sharp Best",             
      postalCode: "J1V 8N9",            
      email : "sharpbest@gmail.com",             
      phone : "6138663656",            
      gender : "Mr",    
      contactName : "Raymond Chin",
    },
    {
      id: 19,
      supplierCode: "S019",
      supplierName: "Chain City",             
      postalCode: "K2J 6H5",            
      email : "chainsity@gmail.com",             
      phone : "6137166461",            
      gender : "Mr",    
      contactName : "Connnor McCudden",
    },
    {
      id: 20,
      supplierCode: "S020",
      supplierName: "Engine Power",             
      postalCode: "F5R 4K6",            
      email : "enginepower@gmail.com",             
      phone : "6137339494",            
      gender : "Mr",    
      contactName : "Tarek El Attar",
    },
  ];
}

export function getEmployees(){
  return [
    {
      id: 1,
      employeeCode: "E001",
      gender: "Mrs",
      firstName: "Emma",
      lastName: "Carr",
      street: "342 Queen St",
      city: "Welland",
      province: "ON",
      postalCode: "L1D 7J4",
      email: "ecarr@gmail.com",
      phone: "5198563526",
      department: "Manager",
      login: "Active",
      activity: "2022-12-15, 11:47:49",
    },
    {
      id: 2,
      employeeCode: "E002",
      gender: "Mr",
      firstName: "Sam",
      lastName: "Delign",
      street: "300 Victory St",
      city: "St.Catharines",
      province: "ON",
      postalCode: "H3N 6V2",
      email: "sdelign@gmail.com",
      phone: "5198563214",
      department: "Ordering",
      login: "Active",
      activity: "2022-12-15, 11:47:49",
    },
    {
      id: 3,
      employeeCode: "E003",
      gender: "Mr",
      firstName: "Eugene",
      lastName: "Downey",
      street: "99 Fonthill St",
      city: "Welland",
      province: "ON",
      postalCode: "D2C 4A7",
      email: "sdowney@gmail.com",
      phone: "2897546354",
      department: "Technician",
      login: "Break",
      activity: "2022-12-15, 11:30:00",
    },
    {
      id: 4,
      employeeCode: "E004",
      gender: "Ms",
      firstName: "Sarah",
      lastName: "Kendell",
      street: "234 Fallsview Blvd",
      city: "Pelham",
      province: "ON",
      postalCode: "S0L 1S3",
      email: "skendell@gmail.com",
      phone: "2897541200",
      department: "Technician",
      login: "Active",
      activity: "2022-12-15, 11:47:49",
    },
    {
      id: 5,
      employeeCode: "E005",
      gender: "Ms",
      firstName: "Wendy",
      lastName: "Tutti",
      street: "535 Morrison St",
      city: "St.Catharines",
      province: "ON",
      postalCode: "L4W 1C1",
      email: "wtutti@gmail.com",
      phone: "2898236547",
      department: "Sales",
      login: "Active",
      activity: "2022-12-15, 11:47:49",
    },
    {
      id: 6,
      employeeCode: "E006",
      gender: "Mr",
      firstName: "William",
      lastName: "Dickey",
      street: "94 Glendale Ave",
      city: "Thorold",
      province: "ON",
      postalCode: "A5G 1J3",
      email: "wdickey@gmail.com",
      phone: "2897778855",
      department: "Sales",
      login: "Inactive",
      activity: "2022-12-13, 16:47:33",
    },
    {
      id: 7,
      employeeCode: "E007",
      gender: "Mrs",
      firstName: "Emily",
      lastName: "Rosten",
      street: "3487 Oak St",
      city: "Thorold",
      province: "ON",
      postalCode: "L0W 4X2",
      email: "erosten@gmail.com",
      phone: "2895637895",
      department: "Administration",
      login: "Inactive",
      activity: "2022-12-14, 16:55:15",
    },
  ];
}