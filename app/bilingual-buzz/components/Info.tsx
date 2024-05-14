import {
  Container,
  Box,
  Grid,
  Typography,
  Link as MUILink,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import bbPicture from "@/public/images/bb/Photo1.jpg";

export default function Info() {
  return (
    <Container maxWidth="xl" disableGutters sx={{ p: { md: 10, xs: 2 } }}>
      <Box
        border={{ md: "4px solid", xs: "none" }}
        borderColor="primary"
        p={{ md: 5, xs: 1 }}
      >
        <Grid container spacing={7}>
          <Grid item md={7}>
            <Typography variant="h2" color="primary.main" gutterBottom>
              <strong>Bilingual Buzz</strong>
            </Typography>
            <Typography variant="h6" color="primary.main" mb={4}>
              <strong>
                Welcome to my podcast! Check out some of the episodes below!
              </strong>
            </Typography>
            <Typography variant="body1" color="primary.main">
              Welcome to Bilingual Buzz, where language, culture, and awareness
              intersect! Founded in March 2021 by Ami and Emily, Bilingual Buzz
              was inspired by the insightful Instagram account{" "}
              <MUILink
                href="https://www.instagram.com/blossomtheproject/"
                component={Link}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                @blossomtheproject
              </MUILink>
              , which shares social and political awareness in both Japanese and
              English.
            </Typography>
            <Typography variant="body1" color="primary.main" gutterBottom>
              Growing up bilingual and having lived in both Japan and America,
              Ami and Emily found a common passion in bridging cultural gaps and
              sharing their unique experiences. Their idea for the podcast was
              born out of a desire to engage English learners in authentic
              conversations while providing insights into their multicultural
              backgrounds.
            </Typography>
            <Typography variant="body1" color="primary.main" gutterBottom>
              With each episode, Ami and Emily strive to create a welcoming
              space where listeners feel like they&apos;re part of the
              conversation. Whether delving into serious topics or exploring
              lighter themes, Bilingual Buzz offers a dynamic range of
              discussions tailored to their audience&apos;s interests and
              requests. Join us on this journey of language, connection, and
              discovery!
            </Typography>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box
              width="100%"
              height={{ md: "70%", xs: 300 }}
              mb={{ md: 0, xs: 2 }}
              position="relative"
            >
              <Image
                src={bbPicture}
                alt="ami and emily"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box
              width="100%"
              height={{ md: "30%" }}
              position="relative"
              display="flex"
              justifyContent="end"
              alignItems="start"
              flexDirection="column"
            >
              <Typography variant="h5" color="primary" gutterBottom>
                <strong>Contact Info:</strong>
              </Typography>
              <Button
                href="https://www.instagram.com/bilingual.buzz/"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<InstagramIcon sx={{ width: 40, height: 40 }} />}
              >
                <Typography variant="body1">@bilingual.buzz</Typography>
              </Button>
              <Button
                href="mailto: @pod.bilingualbuzz@gmail.com"
                startIcon={<EmailOutlinedIcon sx={{ width: 40, height: 40 }} />}
              >
                <Typography variant="body1">
                  @pod.bilingualbuzz@gmail.com
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
