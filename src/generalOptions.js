const generalOptions = {
  theme: 'grid',
  styles: { 
    fontSize: 11,
    fillColor: [255, 255, 255],
    halign: 'center',
    valign: 'middle',
    minCellHeight: 30,
    textColor: '#333',
    lineWidth: 1,
    lineColor: '#333',
    cellWidth: 'wrap',
  },
  tableLineWidth: 1,
  tableLineColor: '#333',
  pageBreak: 'avoid',
}

export const textOptions = {
  theme: 'plain',
  styles: {
    fontSize: 12,
    lineWidth: '#000',
    textColor: '#333',
  },
  margin: {
    bottom: -50,
  }
}

export const tableOptions1 = {
  columnStyles: { 
    0: { halign: 'left', fillColor: '#ddd', cellPadding: { left: 20 } },
    2: { fillColor: '#ddd', halign: 'left', cellPadding: { left: 20 } },
    4: { fillColor: '#ddd', halign: 'left', cellPadding: { left: 20 } },
  },
  ...generalOptions
}

export const tableOptions2 = {
  columnStyles: { 
    0: { halign: 'left', fillColor: '#ddd', cellPadding: { left: 20 } },
    2: { fillColor: '#ddd', halign: 'left', cellPadding: { left: 20 } },
    4: { fillColor: '#ddd', halign: 'left', cellPadding: { left: 20 } },
  },
  ...generalOptions
}

export const tableOptions3 = {
  columnStyles: { 
    0: { halign: 'left', fillColor: '#ddd', cellPadding: { left: 20 } },
    2: { fillColor: '#ddd', halign: 'left', cellPadding: { left: 20 } },
    4: { fillColor: '#ddd', halign: 'left', cellPadding: { left: 20 } },
  },
  ...generalOptions
}

export const tableOptions4 = {
  ...generalOptions,
  rowStyles: {
    0: { halign: 'center', fillColor: '#ddd'}
  },
}

export const tableOptions5 = {
  rowStyles: {
    0: { fillColor: '#ddd'}
  },
  ...generalOptions
}

export const tableOptions6 = {
  columnStyles: { 
    0: { halign: 'left', fillColor: '#ddd', cellPadding: { left: 20 } }
  },
  rowStyles: {
    0: { fillColor: '#ddd'}
  },
  ...generalOptions
}

export const tableOptions7 = {
  columnStyles: { 
    0: { fillColor: '#ddd' }
  },
  ...generalOptions
}