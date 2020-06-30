import moment from "moment";
moment.defaultFormat="YYYY-MM-DD HH:mm:ss"; //set defaultFormat

function C(args) {
  console.log(args);
}

console.log(moment().format("YYYY-MM-DD HH:mm:ss"));


console.log(moment[2020, 0, 31]);

const mo = moment();

C(moment().date(1).format("YYYY-MM-DD HH:mm:ss"));

for (var index = 0; index < 3; index++) {
  C(mo.startOf("month"));
  C(mo.endOf("month"));
  C("")
  mo.subtract(1, "months");
}