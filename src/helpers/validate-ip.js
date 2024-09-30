export const validateIp = (ip) => {
  if (
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(
      ip
    )
  ) {
    return true;
  }
  alert("you have to enter a valid ip address");
  return false;
};
