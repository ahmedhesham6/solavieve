/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("feedback", {
    id: "id",
    comment: { type: "text" },
    experience_rating: { type: "integer" },
    payment_process_rating: { type: "integer" },
    customer_service_rating: { type: "integer" },
    createdAt: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("feedback");
};
