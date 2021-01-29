import {
    whiteColor,
    warningColor,
    primaryColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    defaultFont,
  } from "./nextjs-material-dashboard.js";
  
  const tableStyle = (theme) => ({
    menuTitle: {
      color: whiteColor[0],
      marginLeft: "15px", 
    },
    warningTableHeader: {
      color: warningColor[0],
    },
    primaryTableHeader: {
      color: primaryColor[0],
    },
    dangerTableHeader: {
      color: dangerColor[0],
    },
    successTableHeader: {
      color: successColor[0],
    },
    infoTableHeader: {
      color: infoColor[0],
    },
    roseTableHeader: {
      color: roseColor[0],
    },
    grayTableHeader: {
      color: grayColor[0],
    },
    tableTitle: {
      marginTop: "50px",
      width: "100%",
      maxWidth: "100%",
    },
    table: {
      marginBottom: "60px",
      width: "100%",
      maxWidth: "100%",
      borderSpacing: "0",
      borderCollapse: "collapse",
    },
    tableHeadCell: {
      background: "#7d97a70f",
      ...defaultFont,
      "&, &$tableCell": {
        fontSize: "1em",
      },
    },
    tableCell: {
      ...defaultFont,
      lineHeight: "1.42857143",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontSize: "0.8125rem",
    },
    tableResponsive: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto",
    },
    tableHeadRow: {
      height: "56px",
      display: "table-row",
      outline: "none",
      verticalAlign: "middle",
    },
    tableBodyRow: {
      height: "48px",
      color: "inherit",
      display: "table-row",
      outline: "none",
      verticalAlign: "middle",
    },
  });
  
  export default tableStyle;
  