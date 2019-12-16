"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _storybookInfo = require("../../../../.storybook/style/storybook-info.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var info = _react.default.createElement("div", null, _react.default.createElement("p", null, "Table component"), _react.default.createElement(_storybookInfo.StoryHeader, null, "Implementation"), _react.default.createElement("p", null, "Import the component:"), _react.default.createElement(_storybookInfo.StoryCode, {
  padded: true
}, 'import { Table, TableRow, TableCell, TableHeader } from "carbon-react/lib/components/table";'), _react.default.createElement("p", null, "To render a Table:"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, '// map data to table rows', 'let tableRows = (', '  this.props.data.map((datum, key) => {', '    return (', '      <TableRow>', '        <TableCell>', '          { datum.firstName }', '        </TableCell>', " ", '        <TableCell>', '          { datum.lastName }', '        </TableCell>', '      </TableRow>', '    );', '  });', ');', " ", '// prepend array of rows with a header row', 'tableRows.unshift(', '  <TableRow>', '    <TableHeader>First Name</TableHeader>', '    <TableHeader>Last Name</TableHeader>', '  </TableRow>', ');', " ", '// render the table with the table rows', '<Table>', '  { tableRows }', '</Table>'), _react.default.createElement("p", null, "Pagination:"), _react.default.createElement("p", null, "To add a pagination footer to the table you will need to pass some extra props to the table"), _react.default.createElement(_storybookInfo.StoryCodeBlock, null, "let sizeOptions = Immutable.fromJS([{ \n                  id: \"10\", name: 10 }, { id: \"25\", name: 25 }, { id: \"50\", name: 50 \n                }]),", ' ', ' <Table', '  paginate // Show the pagination footer', '  currentPage="1" // Required - Current visible page', '  pageSize="10" // Required - Number of records to show per page', '  totalRecords // Required - Total number of records', '  showPageSizeSelection={ false } // Options  - Show page size selection', '  pageSizeSelectionOptions={ sizeOptions } // Optional - Page Size Options', '  thead={ TableRow } // Optional - A TableRow to be wrapped in <thead>', '/>'), _react.default.createElement("p", null, "Sorting:"), _react.default.createElement("p", null, "To enable column sorting, you will need to configure the", _react.default.createElement(_storybookInfo.StoryCode, null, ' <TableHeader /> '), " component."));

var _default = info;
exports.default = _default;