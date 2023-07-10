import * as React from 'react';
const StarIcon = (props) => (
  <svg
    width={32}
    height={21}
    viewBox="0 0 32 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h32v21H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.03125 .04762)" />
      </pattern>
      <image
        id="b"
        width={32}
        height={21}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAVCAYAAAAnzezqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiMAAC4jAXilP3YAAAJBSURBVEhL1ZU9aBRREMdn5nYvFwvhBLE2Cn7sCQoWooFwRS6HZdBOBEmj6BoEEawOrYQUmpwptBA7ERKbFGqhKCqkVHJrEUTUykIvheJlL7dvnH0+5Uiy2Y8rJD+4fe8/b9g3783MHvQCM6CZZobMmIkV1zmqxp19RmaipwByiFXFUDEyEz0FwMBVeYwYmYnMOVTuwe0KOl8BeZnY30b1D75ZSkXsDbTd0hCfO1A0sotOBREIAbcA9g8a4z+Uu3tr+3zpsJGRxN6ACgsN8bGU/KJs+Exy/tzyC69V3/IdQDylnRgmKFDX2cZjHECZCcviP5AjHsbJ92+1TwSJUqAuloYVwJw49xmTz/L4q6UWfslgy23YfzT8UIyVfH1hPtQbkbgGVi44o3IDDxHRMqZ1YeZWjuA4TnovjGlDEneBfdt7RARj8vGRy1gfWWsz4omkm4ekakNsFWak6heNXAvCG6vYeGJUIhIHwLX9+aDgz0qe9xrTGiSfZdV0pqUGEqc2UQBcG7KCJXogb60aUzSIZ5VbumFULLEBcA1ILX2/J5uPas38STHfl1N+1g6CzN/JMCO/b9qAcEWCuKrnMcQGEDQd/SIpsDFUNGDVvZ123TuDwLPaQcN3c1ONk1Rs7CBUhySgywp4sDPunDYOkSTO1WrkX3CEGXXBEeEuvLXwUS90Ed4eXovumpDsAVw60q86P5vSFV+sKW+PMacmVRt2QzfnW3LGV3KCVG23mswBaBCfItL/C4ACmsNW/qWRmxGA36+qvT8hfiwYAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);
export default StarIcon;
