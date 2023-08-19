qatarAirways= [
    'ATL','PDK','FTY','GRU','VCP','CGH','IAH','CXO','IWS','HOU','SGR','DWH','EFD','YUL','YCV','YMX','DAL','DFW','RBD','ADS','JFK','LGA','JRB','JRA','TSS','QNY','SWE','QNY','SQF','TSS','JRA','JRB','LGA','SFO','DFW','LAX','ORD','GYY','MDW','CGX','RFD','PWK','AUZ','LOT','DPA','UGN','SEA','LKE','BFI','CDG','BVA','ORY','LBG','JDP','LTQ','BCN','MAD','TOJ','BEG','BER','TXL','SXF','CPH','RKE','DUB','DBN','PSK','FRA','HHN','MUC','OTP','BBU','BHX','AMS','BUD','LHR','LGN','NHT','LTN','STN','LOZ','GON','BQH','LCY','YXU','MAN','MHT','MXP','BGY','LIN','FCO','CIA','ZRH','RUH','JED','DMM','DHA','MED','TIF','ELQ','MCT','IKA','AMM','ADJ','THR','IKA'
];
//console.log("Qatar Airlines:",qatarAirways);
let len = qatarAirways.length;
console.log("Qatar Airlines:",len);

emirates = [
    'BOS','BNH','MHT','ORD','GYY','MDW','CGX','RFD','PWK','AUZ','LOT','DPA','UGN','DFW','DAL','DFW','RBD','ADS','IAH','CXO','IWS','HOU','SGR','DWH','EFD','LAX','WHP','CCD','SFR','MIA','JFK','LGA','JRB','JRA','TSS','QNY','SWE','QNY','SQF','TSS','JRA','JRB','LGA','MCO','SFB','WRL','ORL','MBK','GWT','SGE','ARN','OLA','OLA','YYB','SFO','DCA','IDA','LIS','BCN','MAD','TOJ','GVA','ZRH','SEA','LKE','BFI','YUL','YCV','YMX','YYZ','YOO','YTZ','YKZ','GIG','SNZ','SDU','GRU','VCP','CGH','BHX','GLA','PIK','LGW','LHR','LGN','NHT','LTN','STN','LOZ','GON','BQH','LCY','YXU','MAN','NCL','OSL','RYG','AMS','BLQ','MXP','BGY','LIN','FCO','CIA','DUS','VCE','FRA','HHN','HAM','XFW','MUC','ATH','LYS','NCE','CDG','BVA','ORY','LBG','JDP','LTQ','DMM','DHA','RUH','MED','JED'
];
//console.log("EK Airlines:",emirates);
let len2 = emirates.length;
console.log("EK Airlines:",len2);

let arr = [...qatarAirways, ...emirates];
let mergedArr = [...new Set(arr)];
let lenOfFinalList = mergedArr.length;

var point = 'RUH';

var idx = mergedArr.indexOf(point);

let ekAndQr1 = mergedArr.slice(0, idx + 1) 
let ekAndQr2 = mergedArr.slice(idx + 1) 

let ekAndQr1Len = ekAndQr1.length
let ekAndQr2lLen = ekAndQr2.length

// console.log(ekAndQr1Len);
// console.log(ekAndQr2lLen);

console.log("EK and QR Airlines length:",lenOfFinalList);
console.log("EK and QR-1",ekAndQr1Len,ekAndQr1);
console.log("EK and QR-2",ekAndQr2lLen,ekAndQr2);

//console.log("EK and QR Airlines:",mergedArr);


SQ = [
    'DAC', 'KUL', 'SIN', 'PEN', 'BKK',
    'HKT', 'MNL', 'CEB', 'DVO', 'CGK',
    'DPS', 'SUB', 'HAN', 'SGN', 'RGN',
    'HND', 'NRT', 'KIX', 'NGO', 'FUK',
    'ICN', 'PUS', 'HKG', 'TPE', 'LHR',
    'MAN', 'FRA', 'ZRH', 'SYD', 'MEL',
    'BNE', 'ADL', 'PER', 'AKL', 'JFK',
    'EWR', 'HOU', 'LAX', 'SFO', 'SEA',
    'YVR', 'CMB', 'MLE', 'DXB'
  ];
let forSQ = SQ.length;
console.log("SQ airport Only:",forSQ,SQ);

// console.log("total SQ destination:",forSQ);

let mergeVerSq = [...mergedArr, ...SQ];
let finalAirportAll = [...new Set(mergeVerSq)];

let finalLen = finalAirportAll.length
console.log("EK, QR and SQ Airlines length:",finalLen);


var point = 'BOS';

var idx = finalAirportAll.indexOf(point);

let firstArray = finalAirportAll.slice(0, idx + 1) 
let secondArray = finalAirportAll.slice(idx + 1) 

let flLen = firstArray.length
let ndlLen = secondArray.length

// console.log(flLen);
// console.log(ndlLen);


console.log("SQ,EK AND QR-1 :",flLen,firstArray);
console.log("SQ,EK AND QR-2:",ndlLen,secondArray);

//console.log("EK, QR and SQ Airlines:",finalAirportAll);



