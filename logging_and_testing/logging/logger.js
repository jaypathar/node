// require necessary modules from winston.
const { createLogger, format, transports } = require("winston");

// create  and configure logger.
module.exports = createLogger({
  transports: [
    // configure transports to save logs to file.
    new transports.File({
      filename: "logs/server.log", // specify the log file name and location.
      format: format.combine(
        // include timestamp with specific time format in log.
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),

        // defining custom log message format.
        format.printf(
          (info) => `${info.level}: ${[info.timestamp]}: ${info.message}`
        )
      ),
    }),
  ],
});
