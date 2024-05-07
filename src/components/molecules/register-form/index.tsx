import { auth } from "@/firebase";
import useAuthStore from "@/store/authStore";
import { getFirebaseErrorMessage } from "@/utils/firebaseErrors";
import { schema } from "@/utils/validationSchema";
import Button from "@components/atoms/button";
import TextField from "@components/atoms/text-field";
import { yupResolver } from "@hookform/resolvers/yup";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import { Box, CircularProgress, Typography } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { isLoading, setLoading } = useAuthStore();

  const handleFormSubmit = async (formValues: {
    email?: string;
    password?: string;
  }) => {
    setLoading(true); // Start loading
    try {
      const { email, password } = formValues;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Send verification email
      await sendEmailVerification(userCredential.user)
        .then(() => {
          toast("Verification email sent. Please check your mailbox.", {
            autoClose: 5000,
          });
        })
        .catch((verificationError) => {
          toast(getFirebaseErrorMessage(verificationError.code), {
            autoClose: 5000,
          });
        });
      navigate("/login"); // Redirect after successful registration
    } catch (error) {
      const errorCode = (error as any).code;
      const errorMessage = getFirebaseErrorMessage(errorCode);
      toast(errorMessage, { autoClose: 5000 });
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="310px"
    >
      <Box
        width="100%"
        color="white"
        position="relative"
        mb="50px"
        sx={{
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            width: "calc(50% - 50px)", // Adjust 50px to match the radius of the circle
            height: "1px",
            borderTop: "1px solid #d2d2d2",
            transform: "translateY(-50%)",
          },
          "&::before": {
            left: 0,
          },
          "&::after": {
            right: 0,
          },
        }}
      >
        <Box
          bgcolor="transparent"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100px"
          height="100px"
          position="absolute"
          top="-8px"
          left="50%"
          borderRadius="50%"
          border="1px solid #d2d2d2"
          sx={{
            transform: "translate(-50%,-50%)",
            ".MuiSvgIcon-root": {
              width: "80%",
              height: "80%",
            },
          }}
        >
          <AppRegistrationIcon />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="12px"
        my="25px"
        width="100%"
      >
        <TextField
          control={control}
          name="email"
          autoFocus
          type="text"
          placeholder="Create new email"
          startIcon={<AlternateEmailIcon />}
          breathingColor="#f3fe53"
        />
        <TextField
          control={control}
          name="password"
          type="password"
          placeholder="Create new password"
          startIcon={<EnhancedEncryptionIcon />}
          breathingColor="#f3fe53"
        />
      </Box>
      <Button
        onClick={handleSubmit(handleFormSubmit)}
        disabled={isLoading}
        sx={{
          position: "relative",

          bgcolor: "#ee3069",
          borderRadius: "5px",
          height: "38px",
          transition: "linear 0.1s",
          "&:hover": { backgroundColor: "#32b674" },
          "&.Mui-disabled": {
            bgcolor: "#1f8653",
          },
        }}
      >
        <Typography
          fontSize="16px"
          fontWeight="600"
          color={isLoading ? "#ccc" : "#fff"}
        >
          Create new account
        </Typography>
        {isLoading && (
          <CircularProgress
            size="20px"
            sx={{
              color: "#fbbf21",
              opacity: 1,
              position: "absolute",
              right: "30px",
            }}
          />
        )}
      </Button>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        mt="25px"
        mb="20px"
      >
        <Typography
          fontSize="12px"
          color="white"
          fontStyle="italic"
          sx={{
            textDecoration: "underline",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/login")}
        >
          Already have an account? Login?
        </Typography>
      </Box>
      <Box height="2px" width="100%" borderTop="2px solid #d2d2d2"></Box>
    </Box>
  );
}
