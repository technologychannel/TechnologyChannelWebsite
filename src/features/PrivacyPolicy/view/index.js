import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles(() => ({
  body: {
    width: "90%",
    margin: "auto",
  },
}));

const PrivacyPolicy = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.body}>
        <Typography variant="h4">Privacy Policy</Typography>
        <br />
        <Box>
          <Typography variant="h5">
            Technology Channel Privacy Policy
          </Typography>
          <Typography variant="body1">
            Technology Channel provides tech content from videos, apps, and
            software. We always respect your privacy and protect your
            information on our every product and service. Here is the
            information we collect, handle, and protect your information.
          </Typography><br/>
          <Typography variant="h5">Data We Collect</Typography>
          <Typography variant="body1">
            We may collect your personal information like name, email, phone
            address, etc, or business information to notify you about the latest
            updates, new products, etc.
          </Typography><br/>
          <Typography variant="h5">Security</Typography>
          <Typography variant="body1">
            Being a tech content creator, We provide your best level of security
            from our side. Keeping all things remember that no method of
            transmission over the internet, or method of electronic storage is
            100% secure and reliable, and we cannot guarantee its absolute
            security.
          </Typography><br/>
          <Typography variant="h5">Changes to This Privacy Policy</Typography>
          <Typography variant="body1">
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page. This policy is effective as of 2022-05-10
          </Typography><br/>
          <Typography variant="h5">Contact Us</Typography>
          <Typography variant="body1">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at info@technologychannel.org
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
