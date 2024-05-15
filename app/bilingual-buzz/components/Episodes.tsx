import {
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";

type Episode = {
  number: number;
  title: string;
  link: string;
};

const EPISODES: Episode[] = [
  {
    number: 28,
    title: "Welcome Back to Bilingual Buzz!",
    link: "https://spotifyanchor-web.app.link/e/SYy7K7ldGHb",
  },
  {
    number: 27,
    title: "Japanese & American Souvenirs / お土産 Ideas🎁",
    link: "https://spotifyanchor-web.app.link/e/e7vBjyxdGHb",
  },
  {
    number: 26,
    title: "Speaking Only Japanese for 30 Mins / 日本語って難しいよね",
    link: "https://spotifyanchor-web.app.link/e/6k5TcfEdGHb",
  },
  {
    number: 25,
    title: "Will You Be My Valentine? / キュンキュンする英語フレーズ💘",
    link: "https://spotifyanchor-web.app.link/e/6k5TcfEdGHb",
  },
];

export default function Episodes() {
  return (
    <Box bgcolor="bb.main" mt={10}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          color="bg.main"
          textAlign="center"
          py={10}
          fontWeight="700"
        >
          Recent Episodes
        </Typography>
        <Box px={{ md: 10, xs: 2 }} position="relative">
          <Grid container spacing={5}>
            {EPISODES.map((episode: Episode) => (
              <Grid key={episode.number} item md={6}>
                <Card
                  sx={{
                    height: { md: 300, xs: 200 },
                    borderRadius: 10,
                    bgcolor: "transparent",
                    border: "4px solid",
                    borderColor: "bg.main",
                    color: "bg.main",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "bg.main",
                      transition: "all 0.3s ease",
                      color: "primary.main",
                    },
                  }}
                >
                  <CardActionArea
                    sx={{
                      height: "100%",
                      p: { md: 10, xs: 2 },
                      alignContent: "center",
                    }}
                    href={episode.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography
                      variant="h6"
                      textAlign="center"
                      fontWeight={700}
                    >
                      Episode {episode.number}: {episode.title}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={10}
          >
            <Button
              href="https://podcasters.spotify.com/pod/show/bilingualbuzz"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              disableRipple
              disableElevation
              sx={{
                p: 3,
                borderRadius: 100,
                bgcolor: "transparent",
                border: "4px solid",
                borderColor: "bg.main",
                color: "bg.main",
                transition: "all 0.3s ease",
                "&:hover": {
                  border: "4px solid",
                  borderColor: "bg.main",
                  bgcolor: "bg.main",
                  transition: "all 0.3s ease",
                  color: "primary.main",
                },
              }}
            >
              <Typography variant="h5" fontWeight={700} textAlign="center">
                Click here for more episodes
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
