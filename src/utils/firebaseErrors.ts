export function getFirebaseErrorMessage(errorCode: string) {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Invalid email format. Please check your email address.";
    case "auth/email-already-in-use":
      return "This email address is already in use by another account.";
    case "auth/user-not-found":
      return "No user found with this email address.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/weak-password":
      return "Password should be at least 6 characters long.";
    case "auth/too-many-requests":
      return "Too many requests. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection and try again.";
    case "auth/operation-not-allowed":
      return "Signing in with email and password is not enabled.";
    case "auth/user-disabled":
      return "This user account has been disabled by an administrator.";
    case "auth/requires-recent-login":
      return "Please log in again to perform this operation.";
    case "INVALID_LOGIN_CREDENTIALS":
      return "Invalid login credentials. Please check your email and password.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
}
