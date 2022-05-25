export const tableData1 = [
  ['Prefix', 'Title', 'Firstname', 'firstname', 'Lastname', 'lastname'],
  ['ID Number', { content: 'citizen id', colSpan: 5 }],
]

export const tableData2 = [
  ['Prefix', 'Title', 'Firstname', 'firstname', 'Lastname', 'lastname'],
  ['date of birth', 'date/month/year', 'ID Number', { content: 'citizen id', colSpan: 3 }],
  ['Address according to Id', { content: 'Address', colSpan: 5 }],
]


export const tableData3 = [
  [{ content: 'Identity verification', colSpan: 2 }, { content: 'Insured applicant', colSpan: 4 }],
  ['Prefix', 'Mr./Mrs./Dr.', 'Firstname', 'firstname', 'Lastname', 'lastname'],
  ['date of birth', 'date/month/year', 'ID Number', { content: 'citizen id', colSpan: 3 }],
  ['Address according to Id', { content: 'Address', colSpan: 5 }],
  ['Transaction type', { content: 'Applying for an insurance for a matured person', colSpan: 5 }],
  ['Department', { content: 'department name', colSpan: 5 }],
]


export const tableData4 = [
  ['', 'policy details'],
  ['Policy number', '553'],
  ['Product Plan', '53'],
  ['Cert. Number', '35'],
  ['Cert. Number', '35'],
  ['Clain notify number', '35'],
  ['Member ID', '535'],
  ['Insurance applicant/ assured', 'insured title + firstname + lastname'],
]

export const tableData5 = [
  ['Link building history', 'by', 'date', 'transmission channer', 'contact information'],
  ['create a link for the first time', 'first and last name', 'date/month/year', 'Email', 'xxx.yyy@hotmail.com'],
  ['Last link', '', '', '', 'xxx-xxxxxx']
]


export const tableData6 = [
  ['inspection details', 'inspection results', 'note',],
  ['Check the front of the ID Card', 'not pass', '',],
  ['Check the back of the ID Card', 'pass', '',],
  ['Verify your ID card', 'bypass', 'Return Error Code',],
  ['Check the real page (Liveness)', 'pass', '',],
  ['Check and compare your face (%) with your ID', 'pass', '95% reason',],
  ['Completed Date', 'day/month/year', '',]
]

export const tableData7 = [
  [{content: 'ID Card verification', rowSpan: 3}, 'inspection date', 'check time', 'inspection results', 'Error message'],
  ['day/month/year', 'hour:minute', 'not pass', 'expired card',],
  ['day/month/year', 'hour:minute', 'pass', '',],
  [{content: 'Face comparison', rowSpan: 2}, 'day/month/year', 'hour:minute', 'not pass', '',],
  ['day/month/year', 'hour:minute', 'pass', '',]
]