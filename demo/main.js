const getRandomNum = (min, max, roundTo = 0) => {
  const num = Math.random() * max + min
  return num.toFixed(roundTo)
}

const aButton = document.createElement('a')
aButton.innerHTML = 'HI'
const columnData = [
  { headerName: '', field: 'control' },
  { headerName: 'Current tag', field: 'currentTag', checkboxSelection: true },
  { headerName: 'Original tag', field: 'originalTag' },
  { headerName: 'Sensor', field: 'sensor' },
  { headerName: 'ASTAT', field: 'astat' },
  { headerName: 'Obs time', field: 'obsTime' },
  { headerName: 'Ob type', field: 'obType' },
  { headerName: 'Az/Rt asc', field: 'azRtAsc' },
  { headerName: 'El/Dec', field: 'elDec' },
  { headerName: 'Range', field: 'range' },
  { headerName: 'Range rate', field: 'rangeRate' },
  { headerName: 'Action', field: 'action', cellRenderer: params => {
    // put the value in bold
    return '<button>' + params.value + '</button>'; }},
]
const agColumnData = columnData.slice(0)

agColumnData.shift()

const agRowData = Array(24)
for (let i = 0; i < agRowData.length; i++) {
  agRowData[i] = {
      selected: false,
      currentTag: 25954988,
      originalTag: '0000' + 25954988,
      sensor: 25954988,
      astat: 'FULL',
      obsTime: '2020 158 01:23:45:678',
      obType: 'OBTYPE_' + 25954988,
      azRtAsc: 25954988,
      elDec: 25954988,
      range: 25954988,
      rangeRate: 25954988,
  }
}

const gridOptions = {
  columnDefs: agColumnData,
  rowData: agRowData,
}

// lookup the container we want the Grid to use
const eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
agGrid.createGrid(eGridDiv, gridOptions);