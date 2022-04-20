import { UnAuthenticatedError } from "../errors/index.js";

const checkPermissions = (requestUser, ressourceUserId) => {
  if (requestUser.userId === ressourceUserId.toString()) return;

  throw new UnAuthenticatedError("Not authorized to access this route");
};

export default checkPermissions;
