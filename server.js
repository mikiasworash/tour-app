var sql = require("mssql/msnodesqlv8");

const DB_NAME = "the_multimedia_db";

var config = {
  driver: "msnodesqlv8",
  connectionString: `server=.;Database=${DB_NAME};Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}`,
};

const connectDB = async () => {
  sql
    .connect(config)
    .then(function () {
      console.log("Connected");
      getData();
    })
    .catch(function (err) {
      console.log("Error");
    });
};

connectDB();

const getData = async () => {
  try {
    const result = await sql.query`SELECT * FROM media`;
    console.log(result.recordsets[0]);
  } catch (err) {
    console.log("Could not fetch data");
  }
};

const postData = async () => {
  try {
    const result = await sql.query`INSERT INTO media values ('Jamal', 18)`;
  } catch (error) {
    console.log(error);
  }
};
