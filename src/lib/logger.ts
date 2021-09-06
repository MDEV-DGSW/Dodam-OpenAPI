import winston from 'winston';

const { combine, timestamp } = winston.format;

const alignColorsAndTime: winston.Logform.Format = winston.format.combine(
	winston.format.colorize({
		all: true
	}),
	winston.format.timestamp({
		format: "YYYY-MM-DD HH:MM:SS"
	}),
	winston.format.printf(
		info => `(${info.level}) ${info.message}`
	)
);

const logger = winston.createLogger({
	format: combine(
		timestamp({
			format: "YYYY-MM-DD HH:MM:SS"
		}),
	),
	level: 'debug',
	transports: [
		new (winston.transports.Console)({
			format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
		})
	]
});

export { logger };