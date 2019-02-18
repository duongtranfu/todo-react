'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getStyles = function getStyles(theme) {
  return {
    flexContainer: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    header: {
      color: theme.tableHeaderColumn.textColor,
      padding: '7px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontSize: 13
    },
    headerWrapper: {
      height: theme.tableHeaderColumn.height,
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      overflow: 'hidden'
    },
    cellWrapper: {
      height: theme.tableRow.height,
      borderTop: 'solid rgb(224, 224, 224) 1px',
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      overflow: 'hidden'
    },
    cell: {
      padding: '0 7px',
      overflow: 'hidden',
      fontSize: 13
    }
  };
};

exports.default = getStyles;