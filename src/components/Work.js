import React from "react";
import { Grid, Box, Container, Button, Typography } from "@mui/material";

function Work() {
  const education = [
    {
      title: "Lovely Professional University",
      date: "2020-2024",
      description:
        "Presently pursuing Bachelor of Technology in Computer Science and Engineering. With minor in Full Stack development. Currently having the CGPA of 8.43.",
    },
    {
      title: "Ascent Junior College",
      date: "2018-2020",
      description:
        "Completed my Senior Secondary in Ascent junior college with CGPA of 9.21 in both 11th and 12th grade combined.",
    },
    {
      title: "Delhi Public School",
      date: "2018",
      description:
        "Completed my secondary school in 10th grade with percentage of 84%.",
    },
  ];
  const workExp = [
    {
      title: "Director of membership and performance",
      date: "2022-2023",
      responsibility: ["Human Resource", "Managing People"],
    },
    {
      title: "Graphic Designing Head",
      date: "2021-2022",
      responsibility: ["Made Designs", "Project Management"],
    },
    {
      title: "English Tutor",
      date: "2021",
      responsibility: ["Teaching", "Handling Students"],
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Education
              </Typography>
              {education.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      {item.description}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
                Work Experience
              </Typography>
              {workExp.map((item) => {
                return (
                  <Box
                    sx={{
                      height: "250px",
                      width: "97%",
                      boxShadow: " -9px -8px 62px 5px rgba(0,0,0,0.75)",
                      backgroundColor: "#1F1E24",
                      p: 4,
                      mb: 5,
                    }}
                  >
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ mb: 2, color: "#0CBBA0" }}
                    >
                      {item.date}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                      <ul style={{ padding: "0 18px" }}>
                        {item.responsibility.map((list) => {
                          return <li>{list}</li>;
                        })}
                      </ul>
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Work;
