/**
 * @typedef {Object} Category
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {Object} Question
 * @property {number} id
 * @property {string} title
 * @property {string} body
 * @property {number} categoryId
 * @property {string} createdAt
 */

/**
 * @typedef {Object} Expert
 * @property {number} id
 * @property {string} name
 * @property {string} headline
 * @property {string[]} tags
 */

/**
 * @typedef {Object} Appointment
 * @property {number} id
 * @property {number} expertId
 * @property {string} date
 * @property {string} timeSlot
 * @property {"PENDING" | "CONFIRMED" | "CANCELLED"} status
 */

export const apiTypes = {};
