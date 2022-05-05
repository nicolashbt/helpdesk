const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// Get User Ticket
// @route   GET /api/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {

  res.status(200).json({message:'getTickets'});
});

// Create New Ticket
// @route   POST /api/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {

  res.status(200).json({message:'createTickets'});
});


module.exports = {
  getTickets,
  createTicket,
};
