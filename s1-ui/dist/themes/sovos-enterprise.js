'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _spacing = require('material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

var _colors = require('material-ui/styles/colors');

var _sovosColors = require('./sovos-colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, Arial',
  /* this is currently required - the Snackbar's styles are not currently composable */
  snackbar: {
    actionColor: _sovosColors.neutralWhite,
    textColor: _sovosColors.neutralWhite,
    backgroundColor: _sovosColors.blueDark,
    warningBackgroundColor: _sovosColors.yellowMedium,
    errorBackgroundColor: _sovosColors.redMedium
  },
  tableHeaderColumn: {
    height: 32,
    spacing: 12,
    textColor: (0, _colorManipulator.fade)(_sovosColors.grayMedium, 0.8)
  },
  tableRow: {
    height: 32
  },
  tableRowClickable: {
    cursor: 'pointer',
    backgroundColor: (0, _colorManipulator.fade)(_sovosColors.primaryBlue, 0.25)
  },
  tableRowNonclickable: {
    backgroundColor: (0, _colorManipulator.fade)(_sovosColors.grayLight, 0.6)
  },
  tableRowColumn: {
    height: 32,
    spacing: 12
  },
  palette: {
    primary1Color: _sovosColors.primaryBlue,
    primary2Color: _sovosColors.primaryNavy,
    primary3Color: _sovosColors.primaryColorLight,
    accent1Color: _sovosColors.buttonBlue,
    textColor: _sovosColors.textColor,
    alternateTextColor: _colors.white,
    canvasColor: _colors.white,
    disabledColor: (0, _colorManipulator.fade)(_sovosColors.textColor, 0.3),
    pickerHeaderColor: _sovosColors.primaryBlue,
    secondaryColor: _sovosColors.purple,
    secondaryTextColor: _sovosColors.neutralWhite,
    clockCircleColor: (0, _colorManipulator.fade)(_sovosColors.textColor, 0.07),
    neutralColors: {
      white: _sovosColors.neutralWhite,
      light: _sovosColors.grayLight,
      normal: _sovosColors.grayMedium,
      dark: _sovosColors.grayDark,
      black: _sovosColors.black
    },
    semanticColors: {
      good: {
        light: _sovosColors.blueLight,
        normal: _sovosColors.blueMedium,
        dark: _sovosColors.blueDark
      },
      warning: {
        light: _sovosColors.yellowLight,
        normal: _sovosColors.yellowMedium,
        dark: _sovosColors.yellowDark
      },
      danger: {
        light: _sovosColors.redLight,
        normal: _sovosColors.redMedium,
        dark: _sovosColors.redDark
      }
    },
    accentColors: {
      blue: _sovosColors.primaryBlue,
      yellow: _sovosColors.yellow,
      green: _sovosColors.green,
      darkBlue: _sovosColors.darkBlue,
      magenta: _sovosColors.magenta,
      pink: _sovosColors.pink,
      purple: _sovosColors.purple,
      aqua: _sovosColors.aqua
    }
  },
  button: {
    height: 30
  },
  raisedButton: {
    labelStyle: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0.5
    },
    primary: {
      labelColor: _sovosColors.neutralWhite,
      backgroundColor: _sovosColors.buttonBlue,
      disabledLabelColor: (0, _colorManipulator.lighten)(_sovosColors.buttonBlue, 0.9),
      disabledBackgroundColor: (0, _colorManipulator.lighten)(_sovosColors.buttonBlue, 0.75)
    },
    secondary: {
      labelColor: _sovosColors.buttonBlue,
      backgroundColor: _sovosColors.neutralWhite,
      disabledLabelColor: (0, _colorManipulator.lighten)(_sovosColors.buttonBlue, 0.7),
      disabledBackgroundColor: (0, _colorManipulator.lighten)(_sovosColors.black, 0.95)
    }
  },

  flatButton: {
    labelStyle: {
      fontSize: '14px',
      fontWeight: '500',
      letterSpacing: 0.5
    },
    primary: {
      labelColor: _sovosColors.buttonBlue,
      hoverColor: (0, _colorManipulator.fade)(_sovosColors.buttonBlue, 0.15),
      disabledLabelColor: (0, _colorManipulator.fade)(_sovosColors.buttonBlue, 0.3)
    },
    secondary: {
      labelColor: _sovosColors.grayDark,
      hoverColor: (0, _colorManipulator.fade)(_sovosColors.grayDark, 0.15),
      disabledLabelColor: (0, _colorManipulator.fade)(_sovosColors.grayDark, 0.3)
    }
  },

  iconButton: {
    base: {
      style: {
        borderRadius: '50%',
        padding: 0
      },
      iconStyle: {
        color: (0, _colorManipulator.fade)(_sovosColors.black, 0.87)
      }
    },
    small: {
      iconStyle: {
        width: 20,
        height: 20
      },
      style: {
        width: 36,
        minWidth: 36,
        height: 36
      }
    },
    medium: {
      iconStyle: {
        width: 24,
        height: 24
      },
      style: {
        width: 40,
        minWidth: 40,
        height: 40
      }
    },
    large: {
      iconStyle: {
        width: 28,
        height: 28
      },
      style: {
        width: 40,
        minWidth: 40,
        height: 40
      }
    }
  },
  heroBanner: {
    container: {
      backgroundColor: _sovosColors.blueDark,
      padding: '1rem 30px',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 150,
      justifyContent: 'center'
    },
    title: {
      color: _sovosColors.neutralWhite,
      fontFamily: "'Roboto', sans-serif",
      fontSize: '32px',
      fontWeight: '100',
      margin: '.5rem 0'
    },
    subtitles: {
      color: _sovosColors.neutralWhite,
      fontFamily: "'Roboto', sans-serif",
      fontSize: '18px',
      fontWeight: '300',
      margin: '.25rem 0'
    }
  },

  navigation: {
    containerHidden: {
      width: 0,
      minWidth: 0,
      zIndex: 1301,
      position: 'relative',
      flex: '0 0 0'
    },
    containerOpen: {
      width: 240,
      minWidth: 240
    },
    container: {
      transition: 'width 290ms, min-width 290ms',
      flex: '240px',
      height: '100vh',
      backgroundColor: _sovosColors.primaryNavy,
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    innerContainer: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      width: 240,
      height: '100%'
    },

    branding: {
      container: {
        height: 78,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 22,
        textAlign: 'left',
        backgroundColor: '#395166'
      },
      containerCollapsed: {
        height: 0,
        textAlign: 'left'
      },
      logo: {
        height: 38,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100px 30px'
      },
      productName: {
        color: _sovosColors.blueMedium,
        fontSize: 14
      }
    },

    links: {
      link: {
        color: '#FFF',
        fontWeight: 400,
        fontSize: 14,
        opacity: '0.7'
      },
      innerDivStyle: {
        padding: '13px 16px 11px 45px'
      },
      icons: {
        width: 18,
        height: 18,
        marginleft: 7
      },
      container: {
        color: '#FFF',
        flexGrow: 1,
        marginTop: 5
      },
      nestedList: {
        padding: 0
      }
    },

    footer: {
      height: 49,
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-evenly',
      margin: '0 25px',

      icons: {
        size: 30
      },

      popoverContainer: {
        background: 'none',
        boxShadow: 'none',
        width: 240,
        overflow: 'hidden'
      },

      popover: {
        margin: '10px 10px 0px 10px',
        padding: 15,
        borderRadius: 10,
        backgroundColor: (0, _colorManipulator.fade)(_sovosColors.black, 0.5),
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
        overflow: 'hidden'
      },

      userMenuHeader: {
        height: 50,
        borderBottom: '1px solid ' + (0, _colorManipulator.fade)(_colors.white, 0.2),
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        color: (0, _colorManipulator.fade)(_colors.white, 0.8),
        paddingBottom: 10
      },

      popoverMenuItems: {
        color: (0, _colorManipulator.fade)(_colors.white, 0.8),
        fontSize: 13,
        lineHeight: '40px',
        minHeight: 40
      }
    },

    context: {
      alias: {
        float: 'left',
        maxWidth: 140,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      },
      context: {
        height: 40,
        fontWeight: 400,
        fontSize: 14
      },
      taxyear: {
        float: 'right',
        fontWeight: 700
      },
      taxyearOpacity: {
        opacity: 0.5
      },
      search: {
        minWidth: 250,
        height: 20,
        fontFamily: '"Roboto-Regular", Arial, sans-serif',
        borderBottom: '1px solid lightgrey',
        padding: '8px 8px 6px'
      },
      searchInput: {
        outline: 'none',
        border: 0,
        fontSize: 14
      },
      dropdownContext: {
        minWidth: 250,
        height: 20,
        fontFamily: '"Roboto-Regular", Arial, sans-serif',
        fontSize: 14,
        padding: '8px 10px 3px 8px',
        position: 'relative',
        cursor: 'pointer'
      },
      dropdownContextName: {
        paddingRight: 5
      },
      dropdownContextHover: {
        backgroundColor: '#ebeef0'
      },
      overlay: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2000
      },
      icons: {
        width: 14,
        height: 14,
        marginRight: 8,
        float: 'left'
      },
      searchIcons: {
        width: 20,
        height: 20,
        marginRight: 4,
        float: 'left',
        margin: '8px 4px'
      }
    }
  },

  globalLayout: {
    titleBar: {
      container: {
        width: '100%',
        backgroundColor: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 5px',
        position: 'relative'
      },
      topSection: {
        height: 50,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center'
      },
      breadCrumbContainer: {
        flex: '0 1 auto',
        minWidth: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'flex'
      },
      breadCrumb: {
        whiteSpace: 'nowrap',
        lineHeight: '50px',
        fontSize: 22,
        maxHeight: 50
      },
      breadCrumbClickable: {
        fontSize: 22,
        padding: '6px',
        textTransform: 'none',
        fontWeight: 400,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'inline-block',
        maxWidth: '100%'
      },
      breadCrumbNonClickable: {
        padding: '0 6px'
      },
      tabsContainer: {
        paddingLeft: 20
      },
      tabItemContainer: {
        background: '#FFF'
      },
      tabsInkBar: {
        height: 4
      },
      navigationMenuButton: {
        height: 50,
        width: 50,
        flex: '0 0 50px'
      },
      rightIconContainer: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 15
      }
    },

    appBar: {
      paddingRight: '20px',
      paddingLeft: '20px',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    appBarLeftIconAppend: {
      flexGrow: 1
    },
    appBarAndContentContainer: {
      backgroundColor: _sovosColors.grayLight,
      transition: 'left .3s ease-out',
      flex: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
      height: '100vh'
    },
    overlayVisible: {
      zIndex: 2000,
      background: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      left: 240,
      top: 0,
      bottom: 0,
      right: 0,
      transition: 'background 290ms, left 290ms ease-out'
    },
    overlayHidden: {
      clickable: false,
      zIndex: -1,
      background: 'rgba(0, 0, 0, 0.0)',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      transition: 'left 290ms ease-out'
    }
  },

  dialog: {
    container: {
      gutter: 20
    },
    title: {
      fontSize: 20,
      color: (0, _colorManipulator.fade)(_sovosColors.black, 0.9)
    },
    body: {
      fontSize: 13,
      color: (0, _colorManipulator.fade)(_sovosColors.black, 0.5)
    }
  },
  list: {
    rowBorderColor: _sovosColors.grayLight
  },
  historyList: {
    color: (0, _colorManipulator.fade)(_sovosColors.black, 0.5),
    usernameColor: _sovosColors.blueMedium
  },
  attachmentsList: {
    fileIcon: (0, _colorManipulator.fade)(_sovosColors.orange, 0.8),
    infoColor: (0, _colorManipulator.fade)(_sovosColors.black, 0.5)
  },
  settings: {
    backgroundColor: _sovosColors.grayLight,
    titleColor: (0, _colorManipulator.fade)(_sovosColors.black, 0.8),
    subtitleColor: (0, _colorManipulator.fade)(_sovosColors.black, 0.5)
  },

  monthSelector: {
    currentSelectionButton: {
      textAlign: 'left',
      minWidth: 150,
      height: 45
    },
    nextPrevButton: {
      width: 25,
      height: 25
    },
    dropdown: {
      display: 'flex',
      width: 200,
      padding: 10
    },
    menuSections: {
      left: {
        paddingRight: 10,
        flex: 1
      },
      right: {
        borderLeft: '1px solid rgba(0,0,0,.1)',
        paddingLeft: 10,
        flex: 1
      }
    },
    menuItem: {
      lineHeight: '32px',
      minHeight: null,
      textAlign: 'left',
      zIndex: 999
    },
    widget: {
      backgroundColor: _colors.white,
      height: 45,
      display: 'flex',
      alignItems: 'center'
    },
    container: {
      display: 'inline-block',
      position: 'relative',
      width: 'fit-content'
    }
  },
  authorAvatar: {
    backgroundColor: '#d8d8d8',
    color: 'rgba(0, 0, 0, 0.6)',
    all: {
      icon: {
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: 1
      },
      tooltip: {
        top: 25
      }
    },
    large: {
      icon: {
        height: 32,
        width: 32,
        lineHeight: '32px'
      },
      button: {
        padding: 0,
        height: 32,
        width: 32
      }
    },
    medium: {
      icon: {
        height: 26,
        width: 26,
        lineHeight: '26px'
      },
      button: {
        padding: 0,
        height: 26,
        width: 26
      }
    },
    small: {
      icon: {
        height: 20,
        width: 20,
        lineHeight: '20px'
      },
      button: {
        padding: 0,
        height: 20,
        width: 20
      }
    }
  },
  tabCardComments: {
    addCommentForm: {
      container: {
        margin: -20,
        marginTop: 0,
        padding: '24px 24px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
      },
      commentField: {
        flex: '1',
        marginRight: '1rem',
        fontSize: 13
      },
      submitButton: {
        flex: '0',
        height: 36
      },
      hint: {
        bottom: 0
      },
      error: {
        whiteSpace: 'pre',
        bottom: -5
      }
    },
    comment: {
      container: {
        display: 'flex',
        fontSize: 13
      },
      avatar: {
        margin: '16px 16px 16px 0',
        flex: '0 0 auto'
      },
      content: {
        display: 'flex',
        alignItems: 'center',
        flex: '1 1 auto',
        color: 'rgba(0, 0, 0, 0.5)'
      },
      timestamp: {
        marginLeft: 8,
        textAlign: 'right',
        flex: '0 0 120px',
        color: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }
};