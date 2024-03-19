import * as dotenv from "dotenv";
dotenv.config();

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  username: "databasepgadmin",
  password: "databasepgadmin",
  database: "databasepgadmin",
  host: "databasepgadmin.cxzddeylzo0t.us-east-1.rds.amazonaws.com",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: "http://localhost:8080",
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
