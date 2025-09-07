import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

// const healthcheck = (req, res, next) => {
//   try {
//     res
//       .status(200)
//       .json(new ApiResponse(200, { message: "server is running" }));
//   } catch (err) {
//     nect(err)
//   }
// };

const healthcheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is still running" }));
});

export { healthcheck };
